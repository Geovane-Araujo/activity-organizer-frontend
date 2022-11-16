import { BaseAddress } from '@/router/BaseAddress'
import axios from 'axios'

export class Services{

  async onPost(service, form, toast, type){
    var ret = ''
    await axios.post(new BaseAddress().urlDev  + service, form, {headers: {Authorization: 'Bearer ' + sessionStorage.getItem('myorganizer.access.token')} }).then(res => {
      ret = res
      if(type === 1) {
        toast.add({severity:'success', summary: 'Erro', detail: res.data, life: 3000});
      }
    }).catch(err => {
      toast.add({severity:'error', summary: 'Erro', detail:err.response.data.description, life: 3000});
      if(err.request.status === 401) {
        sessionStorage.setItem('myorganizer.access.token','')
        router.push({name: 'home'})
      }
    });
    return ret;
  }
  async onGet(){
    
  }

  isToken() {
    if (sessionStorage.getItem('myorganizer.access.token') === null) {
        sessionStorage.setItem('myorganizer.access.token', '')
    }
    const token = sessionStorage.getItem('myorganizer.access.token')
    if(token !== '')
      return true
    return false;
  }
}

