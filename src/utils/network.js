import axios from 'axios';
import { BASE_API_URL } from './constants';

export const getLiquidation = async () => {
    try {
        const details = await axios.get(BASE_API_URL);
        return details;
    } catch (error) {
        console.log('Error while getting the details.');
    }
};