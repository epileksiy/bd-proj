
<template>
<div class="q-py-lg q-px-md">
  <div class="row">
    <div class="col-1"></div>
      <div class="col-5 q-mt-xl">
      <div class="text-h5">Ваш заказ :</div>
        <div class="bg-grey-3  q-py-md q-pa-lg">
          <q-card-section class="text-h5 flex justify-end items-end">Итого: 4370 &#8381;</q-card-section>
        </div>
    </div>
    <div class="col-1"></div>
    <!--<div class="col-1"></div>-->
    <div class=" q-ml-xl col-4 q-mt-xl">
      <div class="text-h5 q-mb-lg">Оформление заказа</div>
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
        <div class="text-body1">Профиль</div>
        <q-input
          outlined
          v-model="name"
          label="Имя, Фамилия"
          lazy-rules
        />
        <q-input
          outlined
          v-model="phone"
          label="Phone"
          mask="+7 (###) ### - ####"
        />
        <q-input class="q-mb-lg" v-model="email" outlined type="email" label="Email" />
        <!--<q-input
          filled
          type="number"
          v-model="age"
          label="Ваш возраст"
          hint="Возраст 18+"
          lazy-rules
          :rules="[
          val => val !== null && val !== '' || 'Введите ваш возраст',
          val => val > 17 && val < 100 || 'Введите ваш возраст'
        ]"
        />
        <q-toggle v-model="accept" label="Согласие на обработку персональных данных" />-->
        <div>
          <div class="text-body1 q-mb-md">Пункт выдачи:</div>
          <div class="q-gutter-sm q-mb-lg column justify-between">
            <q-radio v-model="shape" val="1" label="Метро Девяткино. Бульвар Менделеева, д.9"/>
            <q-radio v-model="shape" val="2" label="Метро петроградская. Большой проспект Петроградской Стороны, д.94" />
            <q-radio v-model="shape" val="3" label="Метро академическая. ТРК «Академический», Гражданский проспект, д.41А" />
            <q-radio v-model="shape" val="4" label="Метро купчино. ТЦ «Балкания 5», Балканская площадь, д.5В" />
            <q-radio v-model="shape" val="5" label="Метро озерки. Проспект Энгельса, д.115 к.1" />
          </div>
        </div>
        <div>
          <div class="text-body1 q-mb-md">Оплата:</div>
          <div class="q-gutter-sm q-mb-lg column ">
            <q-radio v-model="shape1" val="1" label="Наличными или картой при получении"/>
            <q-radio v-model="shape1" val="2" label="">
              <div class="flex items-center ">
                <span class="q-ml-md">Online</span>
                <img class="q-ml-md" src="../statics/img/master_card.png" style="width: 49px" alt="">
                <img class="q-ml-md" src="../statics/img/maestro.png" style="width: 49px" alt="">
                <img class="q-ml-md" src="../statics/img/visa.png"  style="width: 49px" alt="">
                <img class="q-ml-md" src="../statics/img/googlePay.png" style="width: 49px" alt="">
              </div>
            </q-radio>
          </div>
        </div>
        <div class="flex justify-start q-mt-xl">
          <q-btn label="Завершить оформление заказа" type="submit" color="primary"/>
        </div>
      </q-form>
    </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'basket',
  data () {
    return {
      name: null,
      age: null,
      accept: false,
      shape: '3',
      shape1: '1'
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>

<style scoped>

</style>
