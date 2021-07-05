// 保存访问接口
import Axios from 'axios'

export async function getuser () {
    let result = await Axios.get('/user/getuser').then(d => d.data);
    return result
}
