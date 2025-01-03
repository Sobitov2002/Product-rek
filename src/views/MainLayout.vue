<script setup lang="ts">
import Product from '@/components/Product/Product.vue'
import Price from '@/components/price/Price.vue'
import Info from '@/components/info/Info.vue'
import Banner from '@/components/banner/Banner.vue'

</script>
<template>
        <main class="min-h-screen  bg-[#f4f2f3] ">
                <Banner />
                <div class="custom-container max-w-4xl mx-auto p-10 ">
                        <Product />
                </div>
                <div class="bg-[#fbedeb]">
                        <div class=" container">
                                <Info />
                                <Price />
                        </div>
                </div>
        </main>
</template>
