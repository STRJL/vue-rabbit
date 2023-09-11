import {  onMounted,ref } from 'vue';
import { getBannerApi } from '@/apis/home'


export function useBanner(){
    //轮播图
    const BannerList = ref([])
    const getBanner = async () => {
        const res = await getBannerApi({
            distributionSite: '2'
        })
        BannerList.value = res.result
    }

    onMounted(() =>  getBanner())
    return {
        BannerList
    }

}