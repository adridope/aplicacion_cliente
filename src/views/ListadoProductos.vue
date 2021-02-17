<template>
  <div class="listadoProductos">
    <h1>Todos los productos</h1>
    <div>
      <product v-for="(product, index) in products"
      :key="index"
      :product="product"></product>
    </div>
  </div>
</template>

<script>
import Product from '../components/SingleProduct.vue'

export default {
  name: 'Listado',
  components: {
    Product
  },
  methods: {
      getData() {
        this.$store.dispatch('loadAll')
      }
  },
  mounted() {
    this.getData();
  },
  computed:{
    products() {
      return this.$store.state.products
    }
  }
}
</script>