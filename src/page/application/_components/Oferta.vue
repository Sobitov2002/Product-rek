<script setup lang="ts">
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogFooter
} from '@/components/ui/dialog'
</script>

<template>
    <Dialog >
        <DialogTrigger>
            <span class="text-blue-800 cursor-pointer underline">Ofertani o'qish</span>
        </DialogTrigger>

        <DialogContent class="w-full max-w-3xl sm:max-w-full sm:h-screen sm:p-2 p-4 h-[70vh] rounded-lg">
            <iframe class="w-full h-full rounded-md"
                src="https://ik.imagekit.io/vtroph5l9/Product/%D0%9E%D1%84%D0%B5%D1%80%D1%82%D0%B0%20Just%20Speak.pdf?updatedAt=1738483334765"
                frameborder="0">
            </iframe>
        </DialogContent>
    </Dialog>
</template>
