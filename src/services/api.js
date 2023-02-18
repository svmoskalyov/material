import axios from 'axios';

axios.defaults.baseURL = 'https://63ef83c5271439b7fe704b93.mockapi.io';

export const addMaterial = async values => {
  const response = await axios.post('/materials', values);
  return response.data;
};
