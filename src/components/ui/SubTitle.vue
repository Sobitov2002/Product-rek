<script setup lang="ts">
const props = defineProps({
    title:{
        type: String,
        required: true
    }
})
</script>
<template >
    <div class="flex justify-center items-center my-0">
        <h1
            class="text-[50px] font-bold text-center bg-gradient-to-r from-[#DF0A69] via-[#E771EB] to-[#F488B0] text-transparent bg-clip-text">
            {{ props.title }}
        </h1>

    </div>
</template>

<style>
    
</style>