import Button from 'primevue/button';
import translation from '@/translate/translation';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { Services } from '@/services/Service';
import { useToast } from "primevue/usetoast";

export default {
  name: 'myorgactivity',
  setup () {
    const itens = ref([]);
    const fieldFilter = ref();
    const router = useRouter();
    var obj = {
      filter: ''
    }
    const services = new Services()
    const toast = useToast()

    onMounted(() => {
      onGetAll()
    })

    const onRowSelect = (event) => {
      onEdit(event.data.id)
    };

    function onAdd(){
      router.push({name: 'myorgformnote', params: { id: 'new' }})
    }

    function onEdit(id){
      router.push({name: 'myorgformnote', params: { id: id }})
    }

    function onGetAll(){
      services.onPost('noteAll', obj, toast,0).then(res => {
        itens.value = res.data
      })
    }

    function onFilter(){
      if(fieldFilter.value !== ''){
        obj.filter = fieldFilter.value
      } else {
        obj.filter = ''
      }
      
      onGetAll()
    }

    return { translation, itens, onRowSelect, onAdd, onFilter, fieldFilter }
  },
  components: {
    DataTable,
    Column,
    Button,
    InputText
  }
}
