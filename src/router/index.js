import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('@/views/home/Home')
const Car = () => import('@/views/car/Car')
const Category = () => import('@/views/category/Category')
const Profile = () => import('@/views/profile/Profile')

const routes = [
    {
        path: '',
        redirect: '/home',
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/car',
        component: Car
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/profile',
        component: Profile
    },
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router