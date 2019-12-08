<template>
  <div class="flex justify-center items-center" style="background-color: #3c3c3c">
    <div class="fixed">
      <img src="../statics/img/background.jpg" class="" style="max-width: 100%;">
    </div>
    <q-page class="flex row justify-center items-center q-gutter-md">
      <q-card class="col-9 justify-center items-center ">
        <q-card-section class="text-h3 q-mt-lg text-center">Привет!</q-card-section>
        <q-card-section class="text-h3 q-mt-lg text-center">Вам есть 18 лет?</q-card-section>
        <q-card-section class="row justify-center items-center ">
          <q-btn unelevated class="col-md-2 col-sm-3 col-xs-12 flex justify-center items-center q-ma-lg " size="xl" rounded color="blue-9" label="Да" />
          <div class="col-md-1 col-sm-1 col-xs-0"></div>
          <q-btn unelevated class="col-md-2 col-sm-3 col-xs-12 flex justify-center items-center q-ma-lg" size="xl" rounded color="blue-6" label="Нет" />
        </q-card-section>
        <q-card-section class="row justify-center items-center">
          <p class="col-10 text-center text-h5 q-mt-xl">Продукция, представленная на сайте  предназначена только для лиц достигших 18 лет. Нажимая на кнопку «да» вы подтверждаете свое совершеннолетие.</p>
        </q-card-section>
      </q-card>
    </q-page>
  </div>
</template>

<script>
export default {
  name: 'input'
}
</script>

<style scoped>

</style>
