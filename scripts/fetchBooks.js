// scripts/fetchBooks.js
const fs = require('fs');
const { Client } = require('@notionhq/client');
require('dotenv').config();

// Initialize Notion client
const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = '1cbc47d4c1ea8084a68ae5b16a88708a'; // Replace with your database ID

async function fetchBooks() {
  try {
    // Query the Notion database
    const response = await notion.databases.query({ database_id: databaseId });

    // Map the response to extract book data
    const books = response.results.map(page => {
      // Safely access properties with fallback values
      const titleProperty = page.properties.Name?.title || [];
      const descriptionProperty = page.properties.Description?.rich_text || [];
      const yearProperty = page.properties.Year?.number;
      const authorProperty = page.properties.Author?.rich_text || [];
      const urlProperty = page.properties.Link?.url;
      const statusProperty = page.properties.Status?.status?.name; // Updated to handle Status type
      const categoryProperty = page.properties.Category?.multi_select || [];
      const reviewProperty = page.properties.Review?.rich_text || [];

      return {
        title: titleProperty[0]?.text?.content || 'Untitled',
        year: yearProperty || 'Unknown',
        author: authorProperty[0]?.text?.content || 'Unknown',
        description: descriptionProperty[0]?.text?.content || 'No description available',
        link: urlProperty || 'No link available',
        status: statusProperty || 'Unknown', // Updated to use the correct Status field
        category: categoryProperty.map(cat => cat.name).join(', ') || 'None',
        review: reviewProperty[0]?.text?.content || 'No review available',
      };
    });

    // Write the books data to books.json
    fs.writeFileSync('./assets/data/books.json', JSON.stringify(books, null, 2));
    console.log('Books data saved to books.json');
  } catch (error) {
    console.error('Error querying the database:', error);
  }
}

fetchBooks();
