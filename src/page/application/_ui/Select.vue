<script setup lang="ts">
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { ref, watch, defineEmits } from 'vue';

const select = ref<string>(''); 

const emit = defineEmits<{
    (event: 'update-select', value: string): void;
}>();

watch(select, (newValue) => {
    console.log('Tanlangan qiymat:', newValue);
    emit('update-select',newValue);
});



</script>

<template>
    <Select v-model="select">
        <SelectTrigger>
            <SelectValue placeholder="Ta'rifni tanlang !" />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup class="bg-white cursor-pointer">
                <SelectLabel>Tanlang</SelectLabel>
                <SelectItem class="cursor-pointer" value="Standart">
                    Standart
                </SelectItem>
                <SelectItem class="cursor-pointer" value="Gold">
                    Gold
                </SelectItem>
                <SelectItem class="cursor-pointer" value="Premium">
                    Premium
                </SelectItem>
            </SelectGroup>
        </SelectContent>
    </Select>
</template>
