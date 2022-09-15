<script setup>
import { storeToRefs } from 'pinia';
import { useBindStore } from "@/stores/bind.js";

const store = useBindStore();
const { loading } = storeToRefs(store);
//console.log("loading====>", loading);
const sendOder = () => {
  loading.state = true;
  loading.text = "send order to" + store.selected;
}
</script>

<template>
  <div class="container">
    <h1 class="text-center">Bind</h1>
    <router-link to="/bind" class="link"><span class="arrow-left"></span> Back</router-link>
    <div class="flex justify-center fixed-bottom">
      <div class="btn" @click="sendOder">Send order to {{ store.selected }}</div>
    </div>
  </div>
</template>
