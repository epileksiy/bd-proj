<template>
  <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 q-my-lg flex justify-center ">
    <q-card class="my-card flex justify-center items-center" style="width: 250px; min-width: 200px; min-height: 300px " >
      <img class="q-mt-sm" :src="fuf()" style="max-height: 290px; width: auto">
      <q-rating
        class="q-ma-md absolute-top-right"
        v-model="ratingModel2"
        icon-selected="favorite"
        icon="favorite_border"
        size="2em"
        :max="1"
        color="purple"
      />

      <q-card-section>
        <q-item clickable :to="{ name: 'card', params: { id: item.id } }" v-on:click="selectCard(item.id)" v-close-popup>
          <q-item-section class="text-body2">{{item.title}}</q-item-section>
        </q-item>
      </q-card-section>
      <q-card-section class="full-width">
        <div class="row justify-between ">
          <div class="col-5 text-center text-red-8" style="">{{item.price}} руб./шт</div>
          <div class="col-5 flex justify-center items-center" style="width: 111px">
            <q-btn size="sm" outline color="accent" v-on:click="addit" label="В корзину"/>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
  <!--<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 q-my-lg flex justify-center ">
    <q-card class="my-card flex justify-center items-center" style="width: 250px; min-width: 200px; min-height: 300px ">
      <img class="q-mt-sm" :src="fuf()" style="max-height: 290px; width: auto">
      <q-card-section>
        <div class="text-h6">{{item.title}}</div>
      </q-card-section>
      <q-card-section>
        <div class="row flex items-center justify-center ">
          <div class="col-12 text-h5 text-center  text-red-8">{{item.price}} руб./шт</div>
          <div class="col-12 flex q-pt-lg justify-center items-center">
            <q-btn outline color="accent" v-on:click="buyItem(itemid)" label="В корзину"/>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>-->
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'item_catalog',
  props: ['item'],
  data () {
    return {
      itemid: this.item.id
    }
  },
  methods: {
    addit: function () {
      this.buyItem(this.itemid - 1)
      this.addPrice(this.item.price)
    },
    fuf () {
      return '../statics/img/' + this.itemid + '.png'
      /* return '../statics/img/' + this.item.id + '.png' */
    },
    ...mapActions({
      buyItem: 'addToItems',
      addPrice: 'addPrice',
      selectCard: 'selectCard'
    })
  }
}
</script>

<style lang="sass">
</style>
