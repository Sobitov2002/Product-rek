<script setup lang="ts">
import Product from '@/components/Product/Product.vue'
import Price from '@/components/price/Price.vue'
import Info from '@/components/info/Info.vue'
import Banner from '@/components/banner/Banner.vue'
import Footer from '@/components/footer/Footer.vue'

</script>
<template>
        <main class="min-h-screen  bg-[] ">
                <Banner />
                <div class=" container">
                        <Product />
                </div>
                <div class="bg-[#fbedeb]">
                        <div class=" container">
                                <Info />
                                <Price />
                        </div>
                                <Footer />
                </div>
        </main>
</template>
