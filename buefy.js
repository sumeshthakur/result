
Vue.use(Buefy.default)

const example = {
        methods: {
            alert() {
this.$dialog.alert('Everything looks fine!')
            },
            alertCustom() {
this.$dialog.alert({
    title: 'Title Alert',
    message: 'I have a title, a custom button and <b>HTML</b>!',
    confirmText: 'Cool!'
})
            },
            alertCustomError() {
this.$dialog.alert({
    title: 'Error',
    message: 'Something\'s not good but I have a custom <b>icon</b> and <b>type</b>',
    type: 'is-danger',
    hasIcon: true,
    icon: 'times-circle',
    iconPack: 'fa'
})
            }
        }
    }


var v = new Vue({
  el:'#structure',
  data:{
    DataResults:[],
    NumberWebpage:'',
    },

  methods:{

  },
  computed:{

  },
  created: function () {
  fetch("/db.json")
    .then(r => r.json())
    .then(json =>{
      this.DataResults=json;
    var Urls=[];
      this.NumberWebpage=json.length;

      console.log(Urls);

    });
}


});
