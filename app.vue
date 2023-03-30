<template>
  <h1>Товары</h1>
  <client-only>
    <ul
      class="product-list"
      v-if="products"
    >
      <Product
        v-for="product in products"
        :key="product"
        :product="product"
      />
    </ul>
    <Loader
      v-else
    />
  </client-only>
</template>
<script setup >
  const {data: products} = await useAsyncData(() => $fetch('https://fakestoreapi.com/products?sort=desc'))
  console.log('data', products)
  if (process.client) {
    console.log("Браузер")
  } else {
    console.log("Сервер")
  }
</script>

<style>
body {
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin: 0;
}
</style>