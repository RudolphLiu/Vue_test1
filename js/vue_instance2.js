var _obj = { name: "Maxsu", city: "海口"};

var vm = new Vue({
  data: _obj
});
console.log(vm.name);
console.log(vm.$data);
console.log(vm.$data.city);

// must use function when in Vue.extend()
var Component = Vue.extend({
  el:'#vue_det',
  data: function () {
    return _obj
  }
});
var myComponentInstance = new Component();
console.log(myComponentInstance.name);
console.log(myComponentInstance.$data);


