<template>
  <q-card class="row  my-card bg-grey-3 q-mb-md  no-border no-shadow">
    <q-card-section class="col-3">
      <img src="../statics/img/vape1.png" alt="">
    </q-card-section>
    <q-card-section class="col-9 flex column items-starte justify-between">
      <q-item-label class="text-h6">{{items[order].title}}</q-item-label>
      <q-item-label class="text-h6">{{items[order].price}} &#8381;</q-item-label>
      <q-item-label>
        <q-btn outline color="accent" label="В корзину"/>
      </q-item-label>
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
