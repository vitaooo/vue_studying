let app = new Vue({
    el:'#app',
    data:{
        nomeInput:'',
        lista:[]
    },
    methods:{
        add:function() {
            if(this.nomeInput.length >= 3) {
                this.lista.push( this.nomeInput );

                this.nomeInput = '';
            }       
        }
    }
});