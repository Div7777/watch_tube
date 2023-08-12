import axios from 'axios'
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
    url: BASE_URL,
    params: {
        // relatedToVideoId: '7ghhRHRP6t4',
        // part: 'id,snippet',
        // type: 'video',
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': '9b3d0c7435mshcc323b41bd93613p1924a4jsn22bdc16c6395',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};
//'fetching API' function call in which axios.get method used for fetch the api
export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
}