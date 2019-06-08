import axios from "axios";

const apiKey = 'D684FDE7-8C62-4E87-AA88-5CA4B3630316';

export default axios.create({
	baseURL: 'https://rest.coinapi.io/',
	headers: { 'X-CoinAPI-Key': apiKey}
});