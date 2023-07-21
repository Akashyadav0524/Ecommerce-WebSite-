import axios from 'axios';
const URL ='http://localhost:8000';


export const authenticateSignup =async (data) =>{
    try {
       return await axios.post(`${URL}/signup`,data);
      
    } catch (error) {
        console.log('Error while signup api',error)
    }
}

export const authenticateLogin = async (user) => {
        try {
            return await axios.post(`${URL}/login`, user)
        } catch (error) {
            console.log('Error while calling login API: ', error);
            return error.response;
        }
    }

