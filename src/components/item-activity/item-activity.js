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
    onFormatDate: Function,
    onEditDate: Function
  },
  setup(props) {

    function drop(e) {
      console.log(e)
    }

    function drag(e) {
      console.log(e)
    }

    function ondragover(item) {
      var doc = document.getElementsByClassName("c-item-header")
      console.log('over')
      console.log(item)
    }

    return {props, drop, ondragover, drag}
  }
}