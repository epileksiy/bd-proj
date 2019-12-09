<template>
  <q-card class="row  my-card bg-white q-mb-md">
    <q-card-section class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
      <img src="../statics/img/vape1.png" alt="">
    </q-card-section>
    <q-card-section class="col-lg-8 col-md-4 col-sm-4 col-xs-12 flex column items-start justify-center">
      <q-item-label class="text-h6">Название: {{items[order].title}}</q-item-label>
      <q-item-label class="text-h6">Стоимость: {{items[order].price}} &#8381;</q-item-label>
    </q-card-section >
    <q-separator inset />
  </q-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'itemBucket',
  props: ['order'],
  data () {
    return {
      items: []
    }
  },
  computed: {
    ...mapGetters({
      itms: 'items/items'
    })
  },
  mounted () {
    this.getItems()
    this.items = this.itms
  },
  methods: {
    ...mapActions({
      getItems: 'items/getItems'
    })
  }
}
</script>

<style lang="sass">
</style>
