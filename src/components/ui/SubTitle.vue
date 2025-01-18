<script setup lang="ts">
const props = defineProps({
    title:{
        type: String,
        required: true
    }
})
</script>
<template >
    <div class="flex justify-center items-center ">
        <h1
            class="text-[63.26px] font-[oswald] uppercase transform  ibm-plex-sans-regular tracking-normal text-[#A43D3F] font-bold text-center">
            {{ props.title }}
        </h1>
    </div>
        
</template>

<style scoped>
        
</style>