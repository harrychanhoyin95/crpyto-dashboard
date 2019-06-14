import axios from "axios";

const apiKey = 'dd8378e9cdb6a3042efb7a74aaad9108';

export default axios.create({
	baseURL: 'https://cryptocontrol.io',
	headers: { 'x-api-key': apiKey }
});