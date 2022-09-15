<script setup>
import { useBindStore } from "@/stores/bind.js"

const store = useBindStore();

const handleClose = () => {
    store.alert.state = false;
}

</script>

<template>
    <div class="alert-overlay" v-if="store.alert.state" @click="handleClose">
        <div class="alert">
            <img
            class="icon-warnning"
            src="https://kinpoweb.blob.core.windows.net/hci21/test/icon-warnning.png"
            />
            {{ store.alert.text }}
        </div>
    </div>
</template>

<style scoped>
.alert-overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.45);
}
.alert {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 630px;
    margin: auto;
    margin-top: 20px;
    padding: 10px;
    color: #ffffff;
    background: rgba(255, 91, 91, 0.2);
    border-radius: 5px;
    border: 1px solid rgba(255, 91, 91, 0.75);
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.4px;
}
.alert .icon-warnning {
    width: 19px;
    height: 19px;
    margin-right: 8px;
}
.alert p {
    font-size: 20px;
    margin: 0;
}
@media (max-width: 768px) {
    .alert {
        max-width: 500px;
    }
}
@media (max-width: 576px) {
    .alert {
        max-width: 400px;
    }
}
@media (max-width: 375px) {
    .alert {
        max-width: 300px;
    }
}
</style>
