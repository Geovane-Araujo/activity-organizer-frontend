import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import Listactivity from '@/components/activity/Listactivity.vue';
import translation from '@/translate/translation';


export default {
  name: 'myorgactivity',
  setup () {
    return { translation }
  },
  components: {
    InputText,
    Password,
    Button,
    Listactivity
  }
}
