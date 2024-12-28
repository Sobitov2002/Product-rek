<script setup lang="ts">
import SubTitle from '@/components/ui/SubTitle.vue'
import {productData} from '../../constant/productData'
import {ref} from 'vue'

const data = ref<any>({})
data.value = productData


</script>
<template >
    <SubTitle title="Madina Qodirova">
    </SubTitle>
    <ul class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
        <li class="shadow-md rounded-[10px] " v-for="(data, index) in productData">
            <div class="relative w-full rounded-[10px] h-[300px] mx-auto">
                <img class="w-full h-full rounded-[10px] object-cover" :src="data.imgUrl" alt="Background">
                <img class="absolute bottom-0  transform " :src="data.imgUrlTwo" alt="Product">
            </div>
            <div class="py-5 px-5">
                <h3 class=" mt-2 text-[15px] text-center text-gray-800">{{ data.discription }}</h3>
            </div>
        </li>
    </ul>

</template>

<style lang="">
    
</style>