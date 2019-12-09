<template>
  <q-page class="q-py-md q-ml-xl q-mr-xl">
    <div class="row flex">
      <div class="col-12 justify-center flex column">
        <q-btn class="q-mb-md" label="POD-системы" type="submit" to="/pod" color="black"/>
        <q-btn class="q-mb-md" label="Жидкости" type="submit" to="/liquid" color="black"/>
        <q-btn class="q-mb-md" label="Нагревательные системы" to="/nagrev" type="submit" color="black"/>
        <q-btn class="q-mb-md" label="Моды" type="submit" to="/mod" color="black"/>
        <q-btn class="q-mb-md" label="Электронные сигареты" to="/vape" type="submit" color="black"/>
        <q-btn class="q-mb-md" label="Бестабачные смеси" to="/wliquid" type="submit" color="black"/>
        <q-btn class="q-mb-md" label="Атомайзеры" to="/atom" type="submit" color="black"/>
        <q-btn class="q-mb-md" label="Аксессуары" to="/accessories" type="submit" color="black"/>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data () {
    return {
      slide: 'first',
      width: 0
    }
  },
  methods: {
    handleResize () {
      this.width = window.innerWidth
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  }
}
</script>
