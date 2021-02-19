<template>
  <div class="container">
      <div class="modal-container">
        <img class="d-none" src="../../public/img/products/placeholder/placeholder.png" :alt="this.product.photo">
    </div>

    <div class="productContainer">
        <div class="row">
            <div class="col-12 col-md-6 imgContainer">
                <img id="imgProduct" src="../../public/img/products/placeholder/placeholder.png" :alt="this.product.photo" @click.prevent="img()">
            </div>
            <div class="col-12 col-md-6 dataContainer">
                <div>
                    <h1>{{ this.product.name}}</h1>
                    <h2>{{ this.product.price }}€</h2>
                    <p id="description">{{ this.product.description}}</p>
                    <div>
                        <a class="btn" href="#">Añadir al carrito</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script>

export default {
    name:'producto',
    methods: {
        img(){
            let imgBack = document.getElementsByClassName('modal-container')[0];
            document.getElementsByClassName('modal-container')[0].classList.add('active');

            imgBack.addEventListener('click', () => {
                document.getElementsByClassName('modal-container')[0].classList.remove('active');
            });
        },
        getData() {
        this.$store.dispatch('loadOne',this.$route.params.product)
        }
  },
  mounted() {
    this.getData();
  },
  computed:{
    product() {
      return this.$store.state.product
    }
  }
    
}
</script>