import { createRouter, createWebHistory } from "vue-router";

const routes = [
    // {
    //     path: "/",
    //     name: "",
    //     component: () =>
    //     import ("@/views/bind/pages/index.vue"),
    // },
    {
        path: "/bind",
        name: "bind",
        component: () =>
        import ("@/views/bind/index.vue"),
    },
    {
        path: "/bind-form",
        name: "bindform",
        component: () =>
        import ("@/views/bind/BindView.vue"),
    },
    {
        path: "/*",
        redirect: "/", //防呆處理，一定要放最後才能比對
    },
];

const router = createRouter({
    //history: createWebHistory(process.env.BASE_URL),
    history: createWebHistory(),
    routes,
});

export default router;
