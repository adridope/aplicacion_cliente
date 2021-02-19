<template>
  <div class="card">
        <div class="row card-body">
            <div class="card-product">
                <div class="col-12 card-img">
                    <div class="button-desktop">
                        <img src="../../public/img/products/placeholder/placeholder.png" :alt="product.photo">
                        <div>
                            <a class="btn d-none d-lg-block"  @click.prevent="verMas()">Ver más</a>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <h2>{{ product.name }}</h2>
                    <h3>{{ product.price }}€</h3>

                    <div class="d-lg-none button-mobile">
                        <a class="btn" @click.prevent="verMas()">Ver más</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:'product',
    props: ["product"],
    methods: {
        verMas(){
            this.$router.push({ name: 'SinglePageProduct', params: { product: this.product.id }})
        }
    }
}
</script>