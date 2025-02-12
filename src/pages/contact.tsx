import React from 'react';
import Layout from '../components/Layout';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Import your initialized Firestore instance

type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  link: string;
  icons: string[];
}

// Function to fetch all documents from the "portfolio" collection
const fetchPortfolioData = async () => {
  try {
    const portfolioCollection = collection(db, "portfolio"); // Reference to the "portfolio" collection
    const querySnapshot = await getDocs(portfolioCollection); // Fetch all documents

    const portfolioData: PortfolioItem[] = [];
    querySnapshot.forEach((doc) => {
      // Push each document's data along with its ID into the array
      const port = doc.data() as PortfolioItem;
      portfolioData.push({ id: doc.id, title: port.title, description: port.description, link: port.link, icons: port.icons });
    });

    console.log("Fetched Portfolio Data:", portfolioData);
    return portfolioData; // Return the array of documents
  } catch (error) {
    console.error("Error fetching portfolio data: ", error);
    throw error; // Re-throw the error for handling elsewhere if needed
  }
};

const ContactPage = () => {

  const [portfolioData, setPortfolioData] = React.useState<PortfolioItem[]>([]);

  React.useEffect(() => {
    // Fetch portfolio data when the component mounts
    const fetchData = async () => {
      try {
        const data = await fetchPortfolioData();
        setPortfolioData(data); // Update state with fetched data
      } catch (error) {
        console.error("Failed to load portfolio data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout name="My Contact">
      <div>
      <h1>My Portfolio</h1>
      {portfolioData.length > 0 ? (
        <ul>
          {portfolioData.map((item) => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No portfolio data available.</p>
      )}
    </div>
    </Layout>
  );
};

export default ContactPage;