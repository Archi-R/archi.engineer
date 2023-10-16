<template>
    <Head>
        <title>home</title>
        <meta name="caca" content="boudin">
    </Head>
    <div>
        <h1>Bienvenue sur mon site !</h1>
        <p>Ceci est ma première page avec InertiaJS et Laravel.</p>
        <br/>Oskour jppnklniokl
    </div>
</template>

<script setup>
    import { Head } from '@inertiajs/vue3'
    import { useQuasar } from 'quasar'
    import {watch} from "vue";


    const $q = useQuasar()
    // calling here; equivalent to when component is created
    $q.dark.set(true)
    watch(() => $q.dark.isActive, val => {
        console.log(val ? 'On dark mode' : 'On light mode')
    })


</script>
