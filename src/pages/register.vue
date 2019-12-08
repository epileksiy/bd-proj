<template>
  <q-page class="flex justify-center items-center">
    <q-form>
      <div class="q-px-xl q-py-lg flex column items-center q-card--bordered brd">
        <img class="q-mt-md" src="../assets/Logo.png" alt="">
        <label class="text-h5 q-my-md">Регистрация</label>
        <q-input outlined class="inp q-mx-md q-my-sm" v-model="name" type="text"  label="Имя" />
        <q-input outlined class="inp q-mx-md q-my-sm" v-model="lastname" type="text" label="Фамилия" />
        <q-input outlined class="inp q-mx-md q-my-sm" v-model="email" type="email"  label="E-mail" />
        <q-input outlined class="inp q-mx-md q-my-sm" v-model="password" type="password" label="Пароль" />
        <q-btn to="/" class="btn text-bold q-mx-md q-my-sm" color="blue-1" label="Зарегистрироваться" />
      </div>
    </q-form>
  </q-page>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      name: '',
      lastname: ''
    }
  }
}
</script>

<style lang="sass">
  .inp
    width: 328px
    height: 56px
  .btn
    width: 328px
    height: 36px
  .brd
    border-radius: 10px
</style>
