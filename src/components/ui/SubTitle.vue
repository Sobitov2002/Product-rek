<script setup lang="ts">
const props = defineProps({
    title:{
        type: String,
        required: true
    }
})
</script>
<template >
    <div class="flex justify-center items-center my-20">
        <h1
            class="text-[50px] uppercase transform  ibm-plex-sans-regular tracking-normal text-[#BA5A5B] font-bold text-center">
            {{ props.title }}
        </h1>
    </div>
</template>

<style scoped>
        
</style>