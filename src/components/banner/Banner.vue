<script setup lang="ts">
</script>

<template>
    <div class="bg-[#7400b8] md:h-[90vh] h-[50vh] w-full p-10 mybg z-10">
        <div class="grid grid-cols-1 container mt-20 z-[-1]">
            <div class="">
                <h1 class="text-[50px] text-white text-right font-bold">Dina</h1>
            </div>
            <div></div>
            <div>
                <h1 class="text-[50px] text-white  text-left font-bold">Korean</h1>
            </div>
        </div>
    </div>
</template>

<style scoped>
.mybg {
    background-image: url('https://ik.imagekit.io/vtroph5l9/Product/banner.webp?updatedAt=1735485996529');
    background-size: 670px 1200px;
    background-repeat: no-repeat;
    background-position: center;
}
@media (max-width: 768px) {
    .mybg {
        background-size: 500px 800px;
    }
}


@media (max-width: 480px) {
    .mybg {
        background-size: 300px 600px;
         background-image: none;
    }
}
</style>
