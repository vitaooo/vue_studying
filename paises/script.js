let app = new Vue({
    el:'#app',
    data:{
        nome:'vintão'
    },
    beforeCreate:function(){
        alert(this.nome);
    }
});