<script setup lang="ts">
import { Loader } from 'lucide-vue-next';

const props = defineProps({
    isLoading: Boolean
});
</script>

<template>
    <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md flex items-center justify-center">
        <template v-if="!isLoading">
            <slot>Saqlash</slot>
        </template>
        <template v-else>
            <Loader class="animate-spin mr-2" /> Yuborilmoqda...
        </template>
    </button>
</template>

<style scoped>
button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}
</style>
