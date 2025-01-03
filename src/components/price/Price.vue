<script setup lang="ts">
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {ref} from "vue"
import { priceData } from '../../constant/priceData';
import Dialog from '@/components/form/Dialog.vue'
import SubTitle from '@/components/ui/SubTitle.vue'
const footer = ref<HTMLElement | null>(null);

const Data = ref<any>({})
Data.value = priceData



</script>
<template>
    <div ref="footer" class="md:mt-[130px] mt-[50px]">
        <SubTitle title="Ta'riflar"></SubTitle>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:grid-cols-2 grid-cols-1 relative mt-5">
            <Card class="shadow-2xl bg-white backdrop-blur-md rounded-[10px] p-4 mt-6 relative"
                v-for="(data, index) in priceData" :key="index">
                <div class="relative">
                    <img class="absolute top-[-50px] left-[50%] transform -translate-x-1/2 h-[140px] w-[140px]"
                        src="../../assets/image/1.svg" alt="">
                </div>
                <CardHeader class="mt-[60px] flex items-center">
                    <CardTitle class="text-[40px]">{{ data.text }}</CardTitle>
                    <CardDescription>Price: {{ data.price }} so'm</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul>
                        <li class="mt-4 flex justify-start" v-for="(item, idx) in data.subtitle" :key="item.id">
                            <span>
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                    viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                                </svg>
                            </span>
                            {{ item.title }}
                        </li>
                    </ul>
                </CardContent>
                <CardFooter>
                    <Dialog />
                </CardFooter>
            </Card>
        </div>
    </div>
</template>


