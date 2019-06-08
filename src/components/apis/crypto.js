import axios from "axios";

// const apiKey = 'AC705EA0-48C9-4E91-989A-DB7F7B23D8DC';
// const apiKey = '7FDA85D2-9486-497B-967C-1957D3310A3C';
// const apiKey = '07719762-9E26-4F1D-8795-E8A311A3C4B0';
// const apiKey = '85E54FE8-3172-44F1-870A-BAF0ACF56ACC';
const apiKey = 'D684FDE7-8C62-4E87-AA88-5CA4B3630316';

export default axios.create({
	baseURL: 'https://rest.coinapi.io/',
	headers: { 'X-CoinAPI-Key': apiKey}
});