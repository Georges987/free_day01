import axios from 'axios';

export const getUser = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/user');
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
