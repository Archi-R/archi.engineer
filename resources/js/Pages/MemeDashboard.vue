<script setup>
import { useQuasar } from 'quasar'
import {router} from "@inertiajs/vue3";

const $q = useQuasar()
$q.dark.set(true)

const meme_url = null
function submit() {
    router.post('/MemeChanger', meme_url)
}
</script>

<template>
    <q-layout view="lHh Lpr lFf">
        <q-page-container>
            <q-page class="flex flex-center">
                <form @submit.prevent="submit">
                    <q-card class="q-pa-md shadow-2 my_card" bordered>
                        <q-card-section class="text-center">
                            <div class="text-white text-h5 text-weight-bold">Url de meme</div>
                            <div class="text-white">tente pas les injections</div>
                        </q-card-section>
                        <q-card-section>
                            <q-input dense outlined
                                     v-model="meme_url"
                                     label="URL de redirection"
                            ></q-input>
                        </q-card-section>
                        <q-card-section>
                            <q-btn
                                style="border-radius: 8px;"
                                color="primary"
                                rounded size="md"
                                label="Ça part en prod"
                                no-caps class="full-width"
                                type="submit"
                            ></q-btn>
                        </q-card-section>
                    </q-card>
                </form>
            </q-page>
        </q-page-container>
    </q-layout>

</template>

<style scoped>
.my_card {
    width: 25rem;
    border-radius: 8px;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}
</style>
