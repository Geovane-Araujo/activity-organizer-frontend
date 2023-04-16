import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import translation from '@/translate/translation';
import Dropdown from 'primevue/dropdown';
export default {
  name: 'HomeView',
  setup() {
    const language = ref(new String())
    const status = ref([
      {name: 'Portugues', code: 0},
      {name: 'Ingles', code: 1},
      {name: 'Espanhol', code: 2}
    ]);


    const route = useRouter()

    onMounted(() => {
      if(sessionStorage.getItem('language') === null || sessionStorage.getItem('language') === undefined){
        sessionStorage.setItem('language', 'pt-BR');
        language.value = 0;
      } else {
        language.value = translation.setLanguage(sessionStorage.getItem('language'));
      }
    })

    const onRoute = (e) => {
      route.push({name: e})
    }
    const onName = () => {
      return sessionStorage.getItem('user')
    }
    const onSelect = () => {
      switch(language.value) {
        case 0:
          sessionStorage.setItem('language', 'pt-BR');
          break;
        case 1:
          sessionStorage.setItem('language', 'en-US');
          break;
        case 1:
          sessionStorage.setItem('language', 'es-ES');
          break;
        default:
          sessionStorage.setItem('language', 'pt-BR');
          break;
      }
    }
    return { onRoute, onName, translation, status, onSelect, language}
  },
  components: {
    Dropdown
  }
}