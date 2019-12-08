<template>
  <q-card class="row  my-card bg-grey-3   no-border no-shadow">
    <q-card-section class="col-3">
      <img src="../statics/img/vape1.png" alt="">
    </q-card-section>
    <q-card-section class="col-9 flex column items-starte justify-between">
      <q-item-label class="text-h6">VOOPOO Vinci - набор</q-item-label>
      <q-item-label class="text-h6">2890 &#8381;</q-item-label>
      <q-item-label>
        <q-btn outline color="accent" label="В корзину"/>
      </q-item-label>
    </q-card-section >
    <q-separator inset />
  </q-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'itemBucket',
  props: ['item'],
  data () {
    return {
      itemid: this.item.id
    }
  },
  methods: {
    fuf () {
      return '../statics/img/' + this.item.id + '.png'
    },
    ...mapActions({
      buyItem: 'addToItems'
    })
  }
}
</script>

<style lang="sass">
</style>
