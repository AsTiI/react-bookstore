import axios from 'axios';
const API_URL = 'https://api.itbook.store/1.0';
export const fetchNewReleases = async () => {
    const response = await axios.get(`${API_URL}/new`);
    return response.data;
};

export const fetchBookDetails = async (isbn13: string) => {
    const response = await axios.get(`${API_URL}/books/${isbn13}`); 
    return response.data;
};