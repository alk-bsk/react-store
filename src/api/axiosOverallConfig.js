import  axios from 'axios';

export default axios.create({
    baseURL:'http://dsrvlapp1376:8760/data',
    // baseURL:'http://dsrvlapp1376:9090/cobi/middle/api',
    //baseURL:'http://localhost:9090/cobi/middle/api',
    headers: {'X-Requested-With': 'XMLHttpRequest','Content-Type':'application/json'},
});
