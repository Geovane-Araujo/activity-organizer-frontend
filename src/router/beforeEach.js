import { Services } from "@/services/Service"

export default async (to, from, next) => {
  const service = new Services()
  if (to.name === 'myorglogin' || to.name === 'myorgregister') {
    next()
  } else if (to.name !== 'myorglogin' && !service.isToken()) {
    next({ name: 'myorglogin' })
  } else {
    next()
  }
}
