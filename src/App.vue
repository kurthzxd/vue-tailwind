<template>
  <div >
    <NavBar @stateChange="isOpenCart=$event"/>

    <Cart :showCart="isOpenCart" />

    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <router-view/>
      </div>
    </main>
   
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NavBar from './components/NavBar.vue';
import Cart from './components/Cart.vue';
const isOpenCart = ref(0)

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@media print {
  .no-print,
  .no-print * {
    display: none !important;
  }

  @page {
    size: auto;
    margin: 0mm;
    margin-top: -15mm;
  }
}
</style>