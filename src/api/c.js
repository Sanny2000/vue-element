import Axios from 'axios'

export async function getc () {
    let result = await Axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(d => d.data);
    return result
}
