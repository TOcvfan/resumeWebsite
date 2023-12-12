import axios from 'axios';
import config from '../helpers/config';
const url = config.baseURL + config.path

const opretBruger = async (data, setMessage, setError) => {
    let res;
    //console.log(data)
    const opretBruger = await axios({
        data,
        url: `${url}newuser`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
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
    //console.log(opretBruger.data, 'test 2')
    setMessage(opretBruger.data)
    return opretBruger.data
}

export default opretBruger;