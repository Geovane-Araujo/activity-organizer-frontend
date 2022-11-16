import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import { Login } from '@/model/Login';
import Button from 'primevue/button';
import { Services } from '@/services/Service';
import { useToast } from "primevue/usetoast";
import Listactivity from '@/components/activity/Listactivity.vue';


export default {
  name: 'myorgactivity',
  setup () {
    const form = ref(new Login())
    const router = useRouter()

    return {form}
  },
  components: {
    InputText,
    Password,
    Button,
    Listactivity
  }
}
