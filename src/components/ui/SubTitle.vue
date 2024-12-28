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
        <h1 class="text-[50px] font-bold text-center">
            {{ props.title }}
        </h1>
    </div>
</template>

<style>
    
</style>