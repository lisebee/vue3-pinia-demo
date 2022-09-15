<script setup>
import { useBindStore } from "@/stores/bind.js"

const store = useBindStore();

</script>

<template>
    <div id="preloader" v-if="store.loading.state">
        <div class="flex items-center justify-center">
            <div class="loader loader--style7" title="6">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                    <rect x="0" y="0" width="4" height="20" fill="#333">
                    <animate attributeName="opacity" attributeType="XML"
                        values="1; .2; 1" 
                        begin="0s" dur="0.6s" repeatCount="indefinite" />
                    </rect>
                    <rect x="7" y="0" width="4" height="20" fill="#333">
                    <animate attributeName="opacity" attributeType="XML"
                        values="1; .2; 1" 
                        begin="0.2s" dur="0.6s" repeatCount="indefinite" />
                    </rect>
                    <rect x="14" y="0" width="4" height="20" fill="#333">
                    <animate attributeName="opacity" attributeType="XML"
                        values="1; .2; 1" 
                        begin="0.4s" dur="0.6s" repeatCount="indefinite" />
                    </rect>
                </svg>
            </div>
            <h1>{{ store.loading.text }}</h1>
        </div>
    </div>
</template>

<style scoped>
/* loading */
#preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    color: #929292;
    padding-top: 40px;
    z-index: 999;
}
.loader{
    height: 50px;
    width: 50px;
    text-align: center;
    padding: 1em;
    display: inline-block;
    vertical-align: top;
}
svg path,
svg rect{
    fill: #FF6700;
}
</style>