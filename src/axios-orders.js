/**
 * Created by Galina on 4/2/2019.
 */
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-8a92c.firebaseio.com/'
});

export default instance;