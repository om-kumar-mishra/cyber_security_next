const baseUrl = process.env.NODE_ENV === "production"
    ? 'https://pisa-react.envytheme.com'
    : 'http://localhost:1857';

export default baseUrl;