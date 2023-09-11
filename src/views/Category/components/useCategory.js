import { getCategoryAPI } from '@/apis/category';
import { onMounted, ref } from 'vue';
import { useRoute,onBeforeRouteUpdate } from 'vue-router';



export function useCategory(){
    //面包屑
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async (id=route.params.id) => {
        const res = await getCategoryAPI(id);
        categoryData.value = res.result
    
    }


    onMounted(() =>  getCategory())
    
    onBeforeRouteUpdate((to) => {
        getCategory(to.params.id)
    })

    return {
        categoryData
    }
    
}