app.component('product-display', {
    props:{
      premium:{
        type: Boolean,
        required: true
      }
    },
    template:
    /*html*/
    `<div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img v-bind:src="image">
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
          <p>{{ sale }}</p>
          <p v-if="inStock">In Stock</p>
          <p v-else>Out of Stock</p>

          <p>Shipping: {{ shipping }}</p>
          
          <div 
            class="color-circle" 
            v-for="(variant, index) in variants" 
            :key="variant.id" 
            @mouseover="updateVariant(index)" 
            :style="{ backgroundColor: variant.color }"></div>
          <button class="button" :class="{ disabledButton: !inStock }" :disabled="!inStock" v-on:click="addToCart">Add to Cart</button>
        </div>
      </div>
    </div>`,
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            selectedVariant: 0, 
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0}
            ]
        }
        
    },
    computed: {
            title(){
                return this.brand + ' ' + this.product
            },
            image(){
                return this.variants[this.selectedVariant].image
            },
            inStock(){
                return this.variants[this.selectedVariant].quantity
            },
            sale(){
                return this.brand + ' ' + this.product + ' is ON SALE!!'
            },
            shipping(){
              if(this.premium){
                return 'Free'
              }
                return 2.99
            }
        },
    methods: {
        addToCart() {
            this.$emit('add-to-cart')
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    }

});