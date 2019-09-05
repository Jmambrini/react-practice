import axios from 'axios';

const KEY = 'AIzaSyB-RDkkR8CY6nseB_jMa8ajZoLXENwZ4Lc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }

});