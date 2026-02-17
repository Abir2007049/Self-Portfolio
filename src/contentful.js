// Contentful CMS Integration
// This file will help you connect to Contentful for dynamic content management

import { createClient } from 'contentful';

// Configure your Contentful credentials
// You'll need to create a Contentful account and get these values from your dashboard
const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID || 'your_space_id_here',
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || 'your_access_token_here',
});

// Fetch all skills from Contentful
export const getSkills = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'skills', // Create this content type in Contentful
    });
    
    if (response.items.length === 0) {
      console.log('No skills found in Contentful');
      return [];
    }
    
    return response.items.map(item => {
      const fields = item.fields;
      return {
        category: fields.category || '',
        items: Array.isArray(fields.items) ? fields.items : (fields.items ? [fields.items] : [])
      };
    });
  } catch (error) {
    console.log('Contentful not configured or error fetching skills. Using default data.');
    return [];
  }
};

// Fetch all projects from Contentful
export const getProjects = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'projects', // Create this content type in Contentful
    });
    return response.items.map(item => item.fields);
  } catch (error) {
    console.log('Contentful not configured or error fetching projects. Using default data.');
    return [];
  }
};

// Fetch about information from Contentful
export const getAbout = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'about', // Create this content type in Contentful
      limit: 1
    });
    return response.items[0]?.fields || null;
  } catch (error) {
    console.log('Contentful not configured or error fetching about. Using default data.');
    return null;
  }
};

export default client;
