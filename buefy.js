
Vue.use(Buefy.default)




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
