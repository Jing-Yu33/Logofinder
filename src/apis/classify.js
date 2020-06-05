import axios from 'axios'

export default axios.create({
    baseURL : 'https://brandylogo-api.herokuapp.com',
    headers: {
        'content-type': 'multipart/form-data'
      }
});