let app = new Vue({
    el:'#app',
    data:{
        nome:'Vintor'
    },
    computed:{
        nomeInvertido:function() {
            return this.nome.split('').reverse().join('');
        }
    }
});