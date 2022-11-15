import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import { Login } from '@/model/Login';
import Button from 'primevue/button';
import { Services } from '@/services/Service';
import { useToast } from "primevue/usetoast";
import { UserRegister } from '@/model/UserRegister';


export default {
  name: 'myorgregister',
  setup () {
    const form = ref(new UserRegister())
    const toast = useToast()
    const services = new Services()
    const router = useRouter()
    const confirmPass = ref()

    const onRegister = () => {
      
      services.onPost('createUser', form.value, toast, 1).then(res => {
        router.push({name: 'myorglogin'})

      })
    }

    
    return {form, onRegister, confirmPass}
  },
  components: {
    InputText,
    Password,
    Button
  }
}
