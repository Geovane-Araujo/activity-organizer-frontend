import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import { Login } from '@/model/Login';
import Button from 'primevue/button';
import { Services } from '@/services/Service';
import { useToast } from "primevue/usetoast";
import { Activity } from '@/model/Activity';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import Textarea from 'primevue/textarea';
import moment from 'moment';
export default {
  name: 'myorgformactivity',
  setup () {
    const form = ref(new Activity())
    const toast = useToast()
    const services = new Services()
    const router = useRouter()
    const route = useRoute()
    const status = ref([
      {name: 'Pendente', code: 0},
      {name: 'Concluida', code: 1},
      {name: 'Cancelada', code: 2}
    ]);

    onMounted(() => {
      if(route.params.id !== undefined && route.params.id !== 'new')
        onGetById(route.params.id)
    })
    const onSave = () => {
      form.value.data = moment(form.value.data).format('YYYY-MM-DD HH:mm:ss.SSSS')
      services.onPost('activitySave', form.value, toast, 1).then(res => {
        if(res != '')
          router.go(-1)
      })
    }

    const onGetById = (id) => {
      const params = {
        id: id
      }
      services.onPost('activityById', params, toast, 0).then(res => {
        res.data.data = new Date(res.data.data)
        form.value = res.data
      })
    }

    const onReturn = () => {
      router.go(-1)
    }

    
    return {form, onSave, status, onReturn}
  },
  components: {
    InputText,
    Password,
    Button,
    Calendar,
    Dropdown,
    Textarea
  }
}
