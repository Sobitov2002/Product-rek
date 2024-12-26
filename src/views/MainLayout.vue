<script setup lang="ts">
import FormPage from '@/components/form/FormPage.vue'
import SubTitle from '@/components/ui/SubTitle.vue'
import Product from '@/components/Product/Product.vue'
</script>

<template>
        <main
                class="min-h-screen bg-gradient-to-br from-[#98c6f7] via-white to-[#b7f3bd]  ">
                <div class="custom-container max-w-4xl mx-auto p-4">
                        <Product />
                        <FormPage />
                </div>
        </main>
</template>

<style scoped>
/* Agar kerak bo'lsa, qo'shimcha stil yozishingiz mumkin */
</style>
