import { ref } from 'vue'
import { useRouter } from 'vue-router'
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import { Login } from '@/model/Login';
import Button from 'primevue/button';
import Listactivity from '@/components/activity/Listactivity.vue';


export default {
  name: 'myorgactivity',
  setup () {
  },
  components: {
    InputText,
    Password,
    Button,
    Listactivity
  }
}
