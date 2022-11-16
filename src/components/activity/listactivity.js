import { onMounted, toRefs, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import { useToast } from "primevue/usetoast";
import Button from 'primevue/button';
import { Services } from '@/services/Service';
import moment from 'moment';
import Calendar from 'primevue/calendar';
import { Activity } from '@/model/Activity';



export default {
  name: 'Listactivity',
  props: {
    itens: {
      type: Array,
      require: false
    }
  },
  setup (props) {
    const listItens = ref(new Array())
    const form = ref(new Activity())
    const services = new Services()
    const toast = useToast()
    const router = useRouter()


    onMounted(() => {
      form.value.data = new Date()
      onGetAll()
    })



    function onGetAll(e){
      const filter = {
        data: moment(form.value.data).format('YYYY-MM-DD HH:mm:ss.SSSS')
      }
      form.value.data = new Date(form.value.data)
      services.onPost('activityAll', filter, toast,0).then(res => {
        listItens.value = res.data
      })
    }

    function onBefore(){
      var newDate = new Date()
      form.value.data.setDate(form.value.data.getDate() - 1)
      onGetAll()
    }

    function onAfter(){
      form.value.data.setDate(form.value.data.getDate() + 1)
      onGetAll()
    }

    function onAdd(){
      router.push({name: 'myorgformactivity', params: { id: 'new' }})
    }

    function onEdit(id){
      router.push({name: 'myorgformactivity', params: { id: id }})
    }


    function onFormatDate(date) {
      return moment(date).format('DD/MM/YYYY HH:mm')
    }

    return { form,listItens, onGetAll, onFormatDate,onBefore, onAfter, onAdd, onEdit }
  },
  components: {
    InputText,
    Password,
    Button,
    Calendar
  }
}
