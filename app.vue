<template>
  <div>
    <h1>Товары</h1>
    <ul
        class="product-list"
        v-if="products"
    >
      <li
          class="product-item"
          v-for="product in products"
          :key="product.id"
      >
        <img
            :src="product.image"
            alt="product.title"
            class="product-image"
        />
        <div class="product-info">
          <h2 class="product-title">
            {{ product.title }}
          </h2>
          <p class="product-price">
            {{ product.price }} USD
          </p>
          <p class="product-description">
            {{ product.description }}
          </p>
        </div>
      </li>
    </ul>
    <div
        v-else
        class="loader"
    >
      Loading...
    </div>
  </div>
</template>
<style>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
<script setup>
const { data: products } = await useAsyncData(() => $fetch('https://fakestoreapi.com/products?sort=desc'))
console.log('data',  products)
</script>
<style>
body {
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}

.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin: 0;
}

.product-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f9fa;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  padding: 1.5rem;
  width: 300px;
  list-style: none;
}

.product-image {
  width: 100%;
  height: auto;
  max-width: 400px;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
}

.product-title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.product-price {
  font-size: 1.1rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 1rem;
}

.product-description {
  text-align: center;
}
</style>