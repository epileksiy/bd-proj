<template>
  <q-layout view="hhh lpR fff">
      <q-header reveal elevated class="text-white bg-black q-px-md q-py-sm">
      <q-toolbar v-if="width >= 992"  class="justify-between row">
        <q-toolbar-title class="col-lg-3 col-md-3 header-logo flex items-center">
          <a href="/"> <img src="../assets/log.png" alt=""></a>
          <q-btn to="/" class="q-ml-sm text-body1 text-uppercase">ГЛАВНАЯ</q-btn>
          <q-btn class="q-ml-sm text-body1 " label="Каталог">
            <q-menu content-class="bg-black text-white">
              <q-list style="min-width: 100px">
                <q-item clickable to="/vape" v-close-popup>
                  <q-item-section>Электронные сигареты</q-item-section>
                </q-item>
                <q-separator dark/>
                <q-item clickable to="/pod" v-close-popup>
                  <q-item-section>Pod-системы</q-item-section>
                </q-item>
                <q-separator dark/>
                <q-item clickable to="/mod" v-close-popup>
                  <q-item-section>Моды</q-item-section>
                </q-item>
                <q-separator dark/>
                <q-item clickable to="/wliquid" v-close-popup>
                  <q-item-section>Бестабачные смеси</q-item-section>
                </q-item>
                <q-separator dark/>
                <q-item clickable to="/vape" v-close-popup>
                  <q-item-section>Системы нагревания табака</q-item-section>
                </q-item>
                <q-separator dark/>
                <q-item clickable to="/liquid" v-close-popup>
                  <q-item-section>Жидкости</q-item-section>
                </q-item>
                <q-separator dark/>
                <q-item clickable to="/atom" v-close-popup>
                  <q-item-section>Атомайзеры</q-item-section>
                </q-item>
                <q-separator dark/>
                <q-item clickable to="/accessories" v-close-popup>
                  <q-item-section>Аксессуары</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-toolbar-title>
        <q-input class="flex col-lg-6 col-md-5 col-sm-4"  bg-color="white" v-model="search" filled type="search" hint="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-list class="col-lg-2 col-md-3 col-sm-3 text-body1 flex justify-between items-center">
            <q-item class="text-white text-body1 text-uppercase q-mr-sm" clickable to="/login">
              <q-item-section>
                  <q-item-label>ВХОД</q-item-label>
              </q-item-section>
            </q-item>
          <q-item class="text-white q-mr-sm" clickable to="/account">
            <q-item-section>
              <img src="../assets/lk.png" alt="">
            </q-item-section>
          </q-item>
          <q-item class="text-white" clickable to="/basket">
            <q-item-section>
              <a href="/"> <img src="../assets/bucket.png" alt=""></a>
              <q-badge floating color="red">{{this.$store.state.quant}}</q-badge>
            </q-item-section>
          </q-item>
        </q-list>
      </q-toolbar>
      <q-toolbar v-else class="row q-px-none">
        <q-toolbar-title class="header-logo flex items-center q-px-none">
          <a href="/"> <img src="../assets/log.png" alt=""></a>
        </q-toolbar-title>
        <q-btn  flat class="q-pa-sm" icon="menu">
          <q-menu content-class="bg-black text-white" max-width="600" anchor="top right" self="bottom right">
            <div class="row">
              <div class="column">
                <q-item class="text-center block" clickable to="/">
                <q-item-section>
                  <q-item-label>Главная</q-item-label>
                </q-item-section>
              </q-item>
              <q-item class="text-center block" clickable to="/catalog">
                <q-item-section>
                  <q-item-label>Каталог</q-item-label>
                </q-item-section>
              </q-item>
              <q-item class="text-center block" clickable to="/categories">
                <q-item-section>
                  <q-item-label>Личный кабинет</q-item-label>
                </q-item-section>
              </q-item>
              </div>
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer  elevated class="bg-black text-white">
      <q-list class="row justify-between items-center">
        <q-list class="row text-h6">
          <q-item>
            <q-item-label>+7925-567-24-00</q-item-label>
          </q-item>
          <q-item>
            <q-item-label>ТЕЛЕФОНЫ И АДРЕСА</q-item-label>
          </q-item>
        </q-list>
        <q-list class="flex justify-end items-center">
          <q-item class="text-white justify-end" clickable to="/articles">
            <q-item-section>
              <img src="../assets/instagramm.png" alt="">
            </q-item-section>
          </q-item>
          <q-item class="text-white justify-end" clickable to="/articles">
            <q-item-section>
              <img src="../assets/google.png" alt="">
            </q-item-section>
          </q-item>
          <q-item class="text-white justify-end" clickable to="/articles">
            <q-item-section>
              <img src="../assets/vk.png" alt="">
            </q-item-section>
          </q-item>
        </q-list>
      </q-list>
    </q-footer>

  </q-layout>
</template>
<script>
export default {
  name: 'he',
  data () {
    return {
      text: '',
      model: '',
      width: 0
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  methods: {
    handleResize () {
      this.width = window.innerWidth
    }
  }
}
</script>
<style lang="sass" scoped>
  .header
    &-logo
      img
        max-width: 221px
  .block
    min-width: 150px
</style>
