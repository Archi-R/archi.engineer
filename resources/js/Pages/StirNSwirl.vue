<template>
    <q-page padding class="flex flex-center">
        <div class="header-image" :class="{ 'header-hide': hideImage }">
            <img src="../../images/SNS_top.png" height="1024" width="1423" alt="Header Image"/>
        </div>

        <q-parallax :height="0" class="text-container">
            <div v-show="!hideImage" class="transition-text">
                StirN'Swirl - Turning your coffee routine from a stir of the ordinary to a swirl of delight!
            </div>
        </q-parallax>

        <q-img src="../../images/SNS_btm.png" alt="the mugga" class="q-mt-md" />
    </q-page>
</template>

<script>
export default {
    data () {
        return {
            hideImage: false
        }
    },
    methods: {
        handleScroll () {
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            this.hideImage = scrollPosition > 100; // Adjust the 100 value to control when the image should start to hide
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
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
</style>
