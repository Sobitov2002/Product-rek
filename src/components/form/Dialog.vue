<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { ref } from 'vue';
import FormPage from './FormPage.vue';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import SubTitle from '@/components/ui/SubTitle.vue';

const dialogOpen = ref(false);

const handleDialogOpen = (value: boolean) => {
    dialogOpen.value = value;
}
</script>

<template>
  
    <Dialog v-model:open="dialogOpen">
        <DialogTrigger as-child>
            <Button variant="outline">
                JOYNI BAND QILISH
            </Button>
        </DialogTrigger>

        <DialogContent class=" grid-rows-[auto_minmax(0,1fr)_auto] p-0 max-h-[90dvh]">
 
            <DialogTitle>Band qilish</DialogTitle>

            <DialogDescription>
                Iltimos, quyidagi formani to'ldirib, joyni band qiling.
            </DialogDescription>

            <FormPage @updateDialogOpen="handleDialogOpen" />
        </DialogContent>
    </Dialog>
</template>

<style scoped>

</style>
