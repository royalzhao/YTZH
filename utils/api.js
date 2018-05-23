/**
 * 封装前端接口
 */

import axios from 'axios'
export default class  {
    static newsOne(Id){
        let data = axios.get('http://www.bjytzh.cn/jxc/showNewsById.thtml?n_id='+Id)
        return data;
    }
    
}