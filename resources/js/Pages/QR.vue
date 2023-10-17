<template>
    <Head>
        <title>Archi QR Code</title>
        <meta name="Archi QR Code" content="Archi QR Code">
    </Head>

</template>

<script setup>
export default {
    props: {
        redirectUrl: String
    },
    mounted() {
        if (this.redirectUrl) {
            window.location.href = this.redirectUrl;
        }
    }
}
</script>
