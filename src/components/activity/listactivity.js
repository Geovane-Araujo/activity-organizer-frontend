import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import { useToast } from "primevue/usetoast";
import Button from 'primevue/button';
import { Services } from '@/services/Service';
import moment from 'moment';
import Calendar from 'primevue/calendar';
import { Activity } from '@/model/Activity';
import ItemActivity from '../item-activity/Item-activity.vue'



export default {
  name: 'Listactivity',
  setup () {
    var itens = ref(new Array())
    const listItens = ref(new Array())
    const form = ref(new Activity())
    const dataStart = ref(new Date())
    const dataEnd = ref(new Date())
    const services = new Services()
    const toast = useToast()
    const router = useRouter()


    onMounted(() => {
      
      form.value.data = new Date()
      onGetAll()
    })



    function onGetAll(e){
      getIntervalWeek()
      const filter = {
        dataStart: moment(dataStart.value).format('YYYY-MM-DD HH:mm:ss.SSSS'),
        dataEnd: moment(dataEnd.value).format('YYYY-MM-DD HH:mm:ss.SSSS')
      }
      dataStart.value = new Date(dataStart.value)
      dataEnd.value = new Date(dataEnd.value)
      services.onPost('activityAll', filter, toast,0).then(res => {
        getDataWeek(res.data)
      })
    }

    function onBefore(){
      dataStart.value.setDate(dataStart.value.getDate() - 6)
      onGetAll()
    }

    function onAfter(){
      dataStart.value.setDate(dataStart.value.getDate() + 6)
      onGetAll()
    }

    function onAdd(){
      router.push({name: 'myorgformactivity', params: { id: 'new' }})
    }

    function onEdit(id){
      router.push({name: 'myorgformactivity', params: { id: id }})
    }


    function onFormatDate(date) {
      return moment(date).format('HH:mm')
    }

    function onEditDate(dia, item) {
      console.log(dia)
      console.log(item)
    }

    function getIntervalWeek(){
      const data = dataStart.value
      dataStart.value.setDate((dataStart.value.getDate() - data.getDay()))
      dataEnd.value.setDate(dataStart.value.getDate() + 6)
    }

    function getDataWeek(dataList){
      itens.value = []
      dataStart.value.setDate((dataStart.value.getDate() - dataStart.value.getDay()))
      let data = new Date(dataStart.value)
      dataEnd.value = new Date(data)
      dataEnd.value.setDate((dataStart.value.getDate() + 6))

      while(data <= dataEnd.value){
        var dias = {
          dia: 'dia',
          listItens: []
        }
        dias.dia = data.getDate()
        dias.listItens = dataList.filter(e => new Date(e?.data).getDate() === data.getDate())
        itens.value.push(dias)
        data.setDate((data.getDate() + 1))
      }
    }

    return { form,listItens, onGetAll, onFormatDate,onBefore, onAfter, onAdd, onEdit,itens, dataStart, dataEnd,onEditDate }
  },
  components: {
    InputText,
    Password,
    Button,
    Calendar,
    ItemActivity
  }
}
