<template>
    <q-layout>
        <q-page-container>
            <q-page padding class="flex flex-center">
                <div class="header-image" :class="{ 'header-hide': hideImage }">
                    <img src="../../images/SNS_top.png" height="1152" width="" alt="Header Image"/>
                </div>

                <div class="text-container transition-text" >
                    <h1>
                        - StirN'Swirl -
                    </h1>
                    <h2>
                        Turning your coffee routine from a stir of the ordinary to a swirl of delight!
                    </h2>
                </div>

                <q-img src="../../images/SNS_btm.png" alt="the mugga" class="q-mt-md" />
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script setup>
import {ref, onMounted, onBeforeUnmount, watch} from 'vue';
import {useQuasar} from "quasar";
const $q = useQuasar()
// calling here; equivalent to when component is created
$q.dark.set(true)


const hideImage = ref(false);

const handleScroll = () => {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    hideImage.value = scrollPosition > 100;
    console.log("Scroll Position:", scrollPosition, "Hide Image:", hideImage.value);
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>


<style>
.header-image {
    transition: transform 0.5s, opacity 0.5s;
    will-change: transform, opacity;
}
.header-hide {
    transform: translateY(-100%);
    opacity: 0;
}
.text-container {
    text-align: center;
    padding-top: 20px; /* Adjust based on your design */
}
.transition-text {
    transition: opacity 0.5s;
    will-change: opacity;
}
.text-container h1 {
    font-size: 390%;
}

.text-container h2 {
    font-size: 250%;
}
</style>
