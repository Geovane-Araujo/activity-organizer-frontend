import { useRouter } from 'vue-router'
export default {
  name: 'HomeView',
  setup() {
    const route = useRouter()
    const onRoute = (e) => {
      route.push({name: e})
    }
    return {onRoute}
  },
  components: {
  }
}