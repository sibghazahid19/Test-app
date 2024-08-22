import { axiosHandler } from './axiosHandler';

export const fetchItems = async () => {
  try {
    const response = await axiosHandler.get('/posts');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch items:', error);
    throw error;
  }
};
