import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=swapdex&vs_currencies=USD');
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving data from CoinGecko API' });
  }
}
