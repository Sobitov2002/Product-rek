<script setup lang="ts">
import Product from '@/components/Product/Product.vue'
import Price from '@/components/price/Price.vue'
import Info from '@/components/info/Info.vue'

</script>
<template>
        <main class="min-h-screen  bg-gradient-to-br  ">
                <div class="custom-container max-w-4xl mx-auto p-10 ">
                        <Product />
                        <Info />
                        <Price />
                </div>
        </main>
</template>
