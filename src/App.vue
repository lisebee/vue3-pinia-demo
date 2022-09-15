<script setup>
import Alert from '@/components/AlertView.vue';
import Loading from '@/components/LoadingView.vue';
import { useBindStore } from "@/stores/bind.js"

const store = useBindStore();
</script>

<template>
	<Loading :loading="store.loading" />
	<Alert :alert="store.alert" />
	<router-view />
</template>

<style scoped>
</style>
