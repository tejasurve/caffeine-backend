
import { apiCall } from './network-services.js';

const getData = async (params = {}, data = {}, headers = {}) => {
    try {
      const responseData = await apiCall('GET', `${process.env.MANGA_API_URL}api?`, params);
      console.log('Fetched Data:', responseData);
      return responseData;
      
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  const postData = async () => {
    try {
      const payload = { key: 'value' };
      const responseData = await apiCall('POST', 'https://api.example.com/data', params ,payload);
      
      console.log('Posted Data:', responseData);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };
  
  const putData = async () => {
    try {
      const responseData = await apiCall('PUT', 'https://api.example.com/data/1', payload);
      console.log('Updated Data:', responseData);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
  
  const deleteData = async () => {
    try {
      const responseData = await apiCall('DELETE', 'https://api.example.com/data/1');
      console.log('Deleted Data:', responseData);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  export { getData,postData,putData,deleteData };