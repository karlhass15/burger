/**
 * Created by karlhass on 2/10/19.
 */
import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://react-my-burger-91cd9.firebaseio.com/'
});

export default instance;