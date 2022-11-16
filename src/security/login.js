import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import { Login } from '@/model/Login';
import Button from 'primevue/button';
import { Services } from '@/services/Service';
import { useToast } from "primevue/usetoast";


export default {
  name: 'myorglogin',
  setup () {
    const form = ref(new Login())
    const toast = useToast()
    const services = new Services()
    const router = useRouter()

    const onLogin = () => {
      
      services.onPost('login', form.value, toast,0).then(res => {
        sessionStorage.setItem('myorganizer.access.token',res.data.token)
        sessionStorage.setItem('user',res.data.nome)
        router.push({name: 'home'})
      })
    }

    const onRegister = () => {
      router.push({name: 'myorgregister'})
    }
    return {form, onLogin, onRegister}
  },
  components: {
    InputText,
    Password,
    Button
  }
}
