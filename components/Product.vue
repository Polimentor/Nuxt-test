<template>
    <li class="product-item">
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
</template>

<script setup>
const props =  defineProps({
  product: {
    type: Object,
    default: () => {}
  },
})
</script>

<style scoped>

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
  box-sizing: border-box;
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
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
  color: #007bff;
}

.product-price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 1rem;
}

.product-description {
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1rem;
  overflow-wrap: anywhere;
}
</style>