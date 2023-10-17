<template>
    <Head>
        <title>Archi QR Code</title>
        <meta name="Archi QR Code" content="Archi QR Code">
    </Head>

</template>

<script setup>
import { onMounted } from 'vue';

const { redirectUrl } = defineProps(['redirectUrl']);

onMounted(() => {
    if (redirectUrl) {
        window.location.href = redirectUrl;
    }
});
</script>
