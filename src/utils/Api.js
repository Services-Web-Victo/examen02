import axios from "axios";

// Entrez votre clé api ici 
const apiKey = '***************';

export default axios.create({
    baseURL: "http://api.mathieufrechette.ca/",
    headers: {
        Authorization: "api_key " + apiKey,
    }
})