import axios from 'axios';
import config from '@/helpers/config'
const url = config.baseURL + '/cvcontact'

const mail = async (data, setMessage, setError) => {
    let res;
    //console.log(data)
    const mail = await axios({
        url: url,
        data: data,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch(function (error) {
        if (error.response) {
            res = error.response.data;
            setMessage(res)
            setError(true)
            throw res;
        } else if (error.request) {
            res = error.request
            setError(true)
            setMessage(res)
            throw res
        } else {
            res = error.message
            setError(true)
            setMessage(res)
            throw res
        }
    })
    //console.log(mail.data, 'test 2')
    setMessage(mail.data)
    return mail.data
}

export default mail;