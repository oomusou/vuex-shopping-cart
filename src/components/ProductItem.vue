<template>
  <div id="ProductItem">
    <tr>
      <td width="150">{{ product.title }}</td>
      <td>{{ product.price }}</td>
      <td width="90">
        <button @click="addToCart(product)">{{ addToCartLabel }}</button>
      </td>
      <td>
        <button @click="removeFromCart(product)">移除購物車</button>
      </td>
    </tr>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

const addToCartLabel = function() {
  return this.isInCart(this.product) ? '已加入購物車' : '加入購物車';
};

const computed = {
  ...mapGetters('cart', ['isInCart']),
  addToCartLabel,
};

const methods = mapMutations('cart', ['addToCart', 'removeFromCart']);

export default {
  name: 'ProductItem',
  props: ['product'],
  computed,
  methods,
};
</script>

<style scoped>

</style>
