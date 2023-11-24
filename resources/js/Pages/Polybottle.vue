<!-- PromoPage.vue -->
<template>
  <div style="background: linear-gradient(120deg, #a8ff78, #78ffd6); padding: 20px;">
    <q-card style="max-width: 400px; margin: auto; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      <h1 style="text-align: center; color: #333; font-size: xxx-large">Buy the PolyBottle</h1>
      <form>
        <div class="q-mb-md">
          <label for="name" style="color: #555;">Name:</label>
          <q-input type="text" id="name" required outlined v-model="name" class="full-width" />
        </div>
        <div class="q-mb-md">
          <label for="promoCode" style="color: #555;">Promo Code:</label>
          <q-input type="text" id="promoCode" required outlined class="full-width" />
        </div>
        <q-btn label="Pay" type="submit" color="accent" class="full-width" />
      </form>
    </q-card>
    <img src="../../images/polybottle.png" height="771" width="460" style="display: block; margin: 20px auto;" alt="bouteille stylax"/>
    <div class="q-mb-md" style="text-align: center;"
    >Site by Archi (Ronan PEYREL)</div>
  </div>

</template>

<script>
</script>
