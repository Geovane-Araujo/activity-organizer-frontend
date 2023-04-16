import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { Services } from '@/services/Service';
import { useToast } from "primevue/usetoast";
import Editor from 'primevue/editor';

import moment from 'moment';
import { Note } from '@/model/Note';
export default {
  name: 'myorgformactivity',
  setup () {
    const form = ref(new Note())
    const toast = useToast()
    const services = new Services()
    const router = useRouter()
    const route = useRoute()

    onMounted(() => {
      form.value.data = new Date()
      if(route.params.id !== undefined && route.params.id !== 'new')
        onGetById(route.params.id)
    })
    const onSave = () => {
      form.value.data = moment(form.value.data).format('YYYY-MM-DD HH:mm:ss.SSSS')
      services.onPost('noteSave', form.value, toast, 1).then(res => {
        if(res != '')
          router.go(-1)
      })
    }

    const onGetById = (id) => {
      const params = {
        id: id
      }
      services.onPost('noteById', params, toast, 0).then(res => {
        form.value = res.data
      })
    }

    const onReturn = () => {
      router.go(-1)
    }

    const onDelete = () => {
      services.onGet('noteDeleteById/'+form.value.id, toast).then(res => {
        if(res != '')
          router.go(-1)
      })
    }

    
    return {form, onSave, onReturn,onDelete}
  },
  components: {
    InputText,
    Button,
    Editor
  }
}
