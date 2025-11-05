import axios from 'axios';

/**
 * Generic API call function
 * @param {string} method - HTTP method (GET, POST, PUT, DELETE, etc.)
 * @param {string} url - The endpoint URL
 * @param {object} [data] - The data to be sent with the request (for POST, PUT, etc.)
 * @param {object} [params] 
 * @param {object} [headers] - Custom headers to be sent with the request
 * @returns {Promise} - Axios response promise
 */
 const apiCall = async (method, url, params,  headers) => {
  try {
    const constantHeaders = {
        'accept': '*/*',
        'origin': 'https://allmanga.to',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      };
    const options = {
      method: method,
      url: params ? `${url}variables=${JSON.stringify(params?.variables)}&extensions=${JSON.stringify(params?.extensions)}` : url,
      headers: {...constantHeaders, ...headers},
    };
    console.log(options);
    const response = await axios(options);
    return response.data;
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
  
};
export { apiCall };