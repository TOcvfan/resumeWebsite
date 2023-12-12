import axios from 'axios';
import config from '../helpers/config';
import headers from '@/helpers/headers';
const url = config.baseURL + config.path;


const rediger = async (data, sti, setMessage, id, token) => {
    let res;
    //console.log(data)
    const requestOptions = {
        method: 'PUT',
        headers: headers(token),
        data: data
    };

    await axios(url + sti + '/' + id, requestOptions).then(response => {
        res = response.data
        return res
    }).catch((error) => {
        if (error.response) {
            res = error.response.data;
            console.log(res)
            throw res;
        } else if (error.request) {
            //console.log(error.request + ' request')  
            res = error.request;
            throw res
        } else {
            //console.log(error + ' else')
            res = error.message;
            throw res
        }
    }).finally(() => {
        setMessage(res)
        return res
    });

}

export default rediger;