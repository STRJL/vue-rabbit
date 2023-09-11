<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFiexd from './components/LayoutFiexd.vue';

//触发导航列表的axios
import { useCategoryStore }  from '@/stores/category'
import { onMounted } from 'vue';

const categoryStore =useCategoryStore()

onMounted(()=>categoryStore.getCategory())
</script>

<template>
    <LayoutNav/>
    <LayoutFiexd></LayoutFiexd>
    <LayoutHeader/>
    <!-- <RouterView :key="$route.fullPath"/> -->
    <RouterView/>
    <LayoutFooter/>
</template>