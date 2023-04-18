import axios from 'axios'
const BASE_URL='https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '7dc7c554c9msh99d8ed7fcd464e4p1ebf78jsn76d59514c510',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};




export const Apiservices={
async fetching(url){
    const   response=await axios.get(`${BASE_URL}/${url}`,options)
    return response.data
}
}

