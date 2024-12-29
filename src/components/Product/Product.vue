<script setup lang="ts">
import SubTitle from '@/components/ui/SubTitle.vue'
import {productData} from '../../constant/productData'
import {ref} from 'vue'

const data = ref<any>({})
data.value = productData


</script>
<template >
    <SubTitle title="Siz uchun">
    </SubTitle>
    <ul class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-20 my-[100px] ">
        <li class="shadow-2xl mt-5 rounded-[10px] " v-for="(data, index) in productData">
            <div class="relative bg-slate-200 w-full rounded-[10px] h-[150px] mx-auto">
                <img class="absolute bottom-0 h-[280px] left-1/2 -translate-x-1/2 bg-center transform"
                    :src="data.imgUrlTwo" alt="Product">
            </div>
            <div class="py-5 px-5">
                <h3 class=" mt-2 text-[15px] text-center text-gray-800">{{ data.discription }}</h3>
            </div>
        </li>
    </ul>

</template>

<style lang="">
    
</style>