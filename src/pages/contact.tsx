import React from 'react';
import Layout from '../components/Layout';
import { PortfolioItem, fetchPortfolioData } from '../firebase'; // Import your PortfolioItem type

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