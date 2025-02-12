import React from "react";
import { useStaticQuery, graphql } from "gatsby";

interface SEOProps {
  title?: string;
  description?: string;
  author?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, author }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  const metaTitle = title || site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;
  const metaAuthor = author || site.siteMetadata.author;

  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="author" content={metaAuthor} />
      {/* Add more meta tags as needed */}
    </>
  );
};

export default SEO;
