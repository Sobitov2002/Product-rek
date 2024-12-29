<script setup lang="ts">
import Dialog from '@/components/form/Dialog.vue'
</script>

<template>
    <div
        class="bg-gradient-to-r from-[#edacac] via-[#bf3863] to-[#83022d] md:h-[90vh] h-[100vh] w-full p-10 z-10 relative">
        <div class="absolute bottom-0 left-0">
            <img class="hidden md:block sm:h-[600px] md:h-[700px] lg:h-[900px] w-auto mx-auto"
                src="https://ik.imagekit.io/vtroph5l9/Product/Dina.png?updatedAt=1735500951663" alt="Banner Img">
        </div>
        <div class="grid md:grid-cols-2 grid-cols-1">
            <div>
            </div>
            <div class="">
                <div class="flex container justify-end  ">
                    <img class="md:h-[130px] h-[60px]"
                        src="https://ik.imagekit.io/vtroph5l9/Product/dinakorean%202.png?updatedAt=1735501795442"
                        alt="Banner Img">
                </div>
                <div class="flex-col  justify-center">
                    <div class="text-center  text-white  font-bold">

                    </div>
                    <div class="  text-white md:text-[80px] text-[50px] font-bold">
                        <h1 class="leading-tight">Madina</h1>
                        <h1 class="leading-tight">Qodirova</h1>
                    </div>
                    <div class="flex     justify-center  ">
                        <h1 class="text-start  text-white md:text-[30px] text-[20px]  font-bold">
                            4 Oyda Koreys Tilini 0 Dan Oson O’rganib Topik daraja Olasiz
                        </h1>

                    </div>
                    <p class="text-start italic  text-white md:text-[25px] text-[20px]">Hoziroq biz bilan bog'lanib joyingizni band
                        qiling !</p>
                    <div class="my-4 text-white ">
                        <Dialog />
                    </div>
                </div>

            </div>

        </div>
    </div>

</template>

<style scoped>

</style>
