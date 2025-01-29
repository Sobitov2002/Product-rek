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
                <SelectItem class="cursor-pointer hover:bg-[#BC6360] border-b border-gray-300 py-2 px-3"
                    value="Standart">
                    Standart
                </SelectItem>
                <SelectItem class="cursor-pointer hover:bg-[#BC6360] border-b border-gray-300 py-2 px-3" value="Gold">
                    Premium
                </SelectItem>
                <SelectItem class="cursor-pointer py-2 px-3" value="Premium">
                    Vip
                </SelectItem>
            </SelectGroup>
        </SelectContent>
    </Select>
</template>



