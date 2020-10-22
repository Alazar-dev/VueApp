const app = Vue.createApp({
    data() {
        return {
            cart:0,
            premium: true,
            details: 'This is new brand'
        }
        
    },
    methods: {
        updateCart(){
          this.cart +=1
        }
    }
})
