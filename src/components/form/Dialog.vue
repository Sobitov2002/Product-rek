<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { ref } from 'vue';
import FormPage from './FormPage.vue';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from '@/components/ui/dialog';


const dialogOpen = ref(false);

const handleDialogOpen = (value: boolean) => {
    dialogOpen.value = value;
}
</script>

<template>
    <Dialog v-model:open="dialogOpen">
        <DialogTrigger as-child>
            <Button
                class="px-20 py-8 sm:px-10 ibm-plex-sans-bold  border-0 text-white hover:text-white rounded-[10px] bg-gradient-to-r from-[#BA5A5B] via-[#ed8688] to-[#BA5A5B]"
                variant="outline">
                JOYNI BAND QILISH
            </Button>
        </DialogTrigger>
        <DialogContent class=" grid-rows-[auto_minmax(0,1fr)_auto] p-0 max-h-[90dvh]">
            <FormPage @updateDialogOpen="handleDialogOpen" />
        </DialogContent>
    </Dialog>
</template>
<style scoped>

</style>
