<template>
  <q-page class="flex justify-center items-center">
    <q-form>
      <div class="q-px-xl q-py-lg flex column items-center q-card--bordered brd">
        <label class="text-h5 q-my-md">Вход</label>
        <q-input outlined class="inp q-mx-md q-my-sm" v-model="user.email" type="email"  label="E-mail" />
        <q-input outlined class="inp q-mx-md q-my-sm" v-model="user.password" type="password" label="Пароль" />
        <q-btn to="/account" class="btn text-bold q-mx-md q-my-sm" color="blue-1" label="Войти" @click="loginUser"/>
        <q-btn no-caps to="/reg" class="btn text-bold text-body1 q-mx-md q-mb-md" color="amber" flat label="Регистрация" />
      </div>
    </q-form>
  </q-page>
</template>
//email: user*@bonch.school
<script>
import { mapActions } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      login: 'auth/auth/login'
    }),
    loginUser () {
      this.login(this.user)
    }
  }
}
</script>

<style lang="sass">
  body
    width: 100%
    height: 100%
    background: url("../assets/smoke.png") right no-repeat
  .inp
    width: 300px
    height: 56px
  .btn
    width: 300px
    height: 36px
  .brd
    border-radius: 10px
</style>
