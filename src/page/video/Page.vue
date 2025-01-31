<script setup lang="ts">
import { videoData } from './index'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
    <div class="prise-img md:min-h-[514px] w-full py-10 z-10 relative">
        <h1 style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);" class="font-[oswald] text-center font-bold text-white leading-[1.2] pb-10
            lg:text-[103px] md:text-[100px] mt-  sm:text-[70px] text-[40px]">
            O'quvchilarni kurs haqidagi fikri !
        </h1>

        <!-- Katta qizil sarlavha -->
        <p class="absolute md:top-[110px] top-[130px] right-[9%] 
            lg:text-[121.98px] md:text-[140px]  sm:text-[45px]  text-[30px]
            font-[Freestyle] text-[#A43D3F]">
            O'quvchilarni kurs haqidagi fikri !
        </p>

        <div class="container grid grid-cols-1 mt-20 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card v-for="video in videoData" 
                class="overflow-hidden border-none flex flex-col items-center">
                <CardContent class="w-full p-0">
                    <div class="relative w-full aspect-video">
                        <iframe :src="video.url" class="absolute top-0 left-0 w-full h-full" frameborder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                            title="Video"></iframe>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
</template>
