<script setup>
import { ref, onMounted} from "vue";
import { useBindStore } from "@/stores/bind.js"
import confData from "@/data/conf.json";

const store = useBindStore();
console.log("store==>", store);

const options = ref();
const currentDo = ref(true);
const isdisabled = ref(false);

onMounted(() => {
  store.selected = options.value[0];
  options.value = confData.cars;
});

const callAA = () => {
  store.loading.state = true;
  store.loading.text = "Calling " + store.selected;

  console.log("store.loading.state===>", store.loading.state);
  console.log("store.loading.text===>", store.loading.text);

}
</script>

<template>
  <div class="container">
    <h1 class="text-center">List</h1>
    <div class="flex flex-col items-center">
      <div class="btn-group">
        <!--完成 call 之後-->
        <template v-if="isdisabled.value">
          <div class="btn btndisabled">Call {{ store.selected }}</div>
          <router-link to="/bind-form" class="btn">Bind</router-link>
        </template>
        <!-- 初到頁面 -->
        <template v-else>
          <select class="" v-model="store.selected" :class="{'btndisabled': isdisabled.value}">
            <option v-for="(item, index) in options" :key="index" :value="item">selected... {{ item }}</option>
          </select>
          <div class="btn" @click="callAA">Call {{ store.selected }}</div>
          <div id="btnBind" class="btn btndisabled">Bind</div>
        </template>
      </div>
    </div>
  </div>
</template>
