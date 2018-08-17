import axios from 'axios';

export const fetchContent = contestId =>{
    return axios.get(`/api/contests/${contestId}`)
        .then(resp =>resp.data);
};