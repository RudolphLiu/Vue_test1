var vm = new Vue({
  el: '#vue_det',
  data: {
    name : "Maxsu",
    city  : "海口",
    address    : "海口市美兰区人民大道58号"
  },
  methods: {
    mydetails : function() {
      return "我叫 "+this.name +" ，所在城市： "+ this.city;
    }
  }
});

