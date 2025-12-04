import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd3fdcaeff69042ff8c2bd45d5d21c664'
    }
})