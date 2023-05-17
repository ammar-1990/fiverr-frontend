import axios from 'axios'


const request =  axios.create({
    baseURL:'https://fiverr-api-swdh.onrender.com/api',
    withCredentials:true
})


export default request