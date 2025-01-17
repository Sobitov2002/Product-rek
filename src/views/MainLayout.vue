<script setup lang="ts">
import Product from '@/components/Product/Product.vue'
import Price from '@/page/application/Page.vue'
import Info from '@/page/details/Page.vue'
import Banner from '@/components/banner/Banner.vue'

</script>
<template>
        <main class="min-h-screen  bg-[] ">
                <Banner />
                <div class=" container">
                        <Product />
                </div>
                <div>
                        <div class="">
                                <Info />
                                <Price />
                        </div>
                </div>
        </main>
</template>
