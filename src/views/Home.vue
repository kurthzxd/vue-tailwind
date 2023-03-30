<template>
  <MainBanner />
  <hr
  class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
  <FilterSearch />
  <Cart :showCart="true" />
</template>

<script setup>
import MainBanner from '../components/MainBanner.vue';
import Catalog from '../components/Catalog.vue';
import Cart from '../components/Cart.vue';
import FilterSearch from '../components/common/FilterSearch.vue';


</script>