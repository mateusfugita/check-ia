import api from '../services/api';

const handleRequest = async (method, url, data, token) => {
    const responseFromAPI = await api({
        method,
        url,
        data,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*'
        }
    }).then(response => {
        return response.data;
    });
    return responseFromAPI;
}

export default handleRequest;