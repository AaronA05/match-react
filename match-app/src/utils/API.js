import axios from 'axios';

const URL = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=12&q="

export default {
    search: function(query){
        console.log(URL + query)
        return axios.get(URL + query);
    }
}