const config = {
  apiUrl: import.meta.env.PROD 
    ? 'https://masonbird-api.vercel.app/api' // Replace with your production API URL
    : 'http://localhost:3001/api'
};

export default config;
