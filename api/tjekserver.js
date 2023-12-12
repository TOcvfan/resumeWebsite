import axios from 'axios';
import config from '../helpers/config';

const checkServer = async (setMessage, setError) => {
    let res;
    //console.log(data)
    const checkServer = await axios({
        url: `${config.baseURL}/tester`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => {
        console.log(res.data)
        setMessage(res.data)
        setError(false)
        return res
    }).catch(function (error) {
        if (error.response) {
            res = error.response.data;
            setMessage(res)
            setError(true)
            return res;
        } else if (error.request) {
            res = error.request
            setError(true)
            setMessage(res)
            return res
        } else {
            res = error.message
            setError(true)
            setMessage(res)
            return res
        }
    })
    console.log(checkServer.data, 'test 2')
    setMessage(checkServer.data)
    return checkServer.data
}

export default checkServer;