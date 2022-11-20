export default {
  name: 'ItemActivity',
  props: {
    itens: {
      type: Array,
      require: false
    },
    dia: {
      type: Number,
      require: false
    },
    onEdit: Function,
    onFormatDate: Function
  },
  setup(props) {
    return {props}
  }
}