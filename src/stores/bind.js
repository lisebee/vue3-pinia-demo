import { defineStore } from "pinia"
import { ref, reactive } from "vue"

export const useBindStore = defineStore("bind", () => {
    const loading = reactive([{
        state: null,
        text: ""
    }]);
    const alert = reactive([{
        state: null,
        text: ""
    }]);

    const selected = ref("");

    return { loading, alert, selected }
})