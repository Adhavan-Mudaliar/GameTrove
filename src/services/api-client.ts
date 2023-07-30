import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'2ee20abc66514191b891a493ea240eab'
    }
})