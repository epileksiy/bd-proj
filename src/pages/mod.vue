<template>
  <q-page class="q-py-lg q-px-md">
    <div class="q-py-lg">
      <div class="col-12">
        <div class="text-h2 text-center q-mb-xl"> Моды </div>
      </div>
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <q-card class="my-card text-h6 q-mb-md">
            <div class="container">
              <div class="row">
                <div class="col-md-5 col-sm-12 col-xs-12 col column">
                  <q-card-section class="text-grey-8">
                    <div class="row flex justify-between items-center">
                      <div class="col-md-1 flex">{{label.min}}</div>
                      <div class="col-md-10 col-sm-10 col-xs-12 q-pa-md">
                        <q-range
                          v-model="label"
                          :min="350"
                          :max="1000"
                          :step="4"
                          label
                          color="primary"
                        />
                      </div>
                      <div class="col-md-1 flex">{{label.max}}</div>
                    </div>
                  </q-card-section>
                </div>
                <div class="col-md-2 col-sm-4 col-xs-12 flex items-center justify-center">
                  <q-card-section class="text-grey-8">Сортировать по: </q-card-section>
                </div>
                <div class="col-md-2 col-sm-4 col-xs-6 q-mb-sm flex flex items-center justify-center">
                    <q-btn outline color="accent" label="Рейтингу" />
                </div>
                <div class="col-md-2 col-sm-4 col-xs-6 q-mb-sm flex flex items-center justify-center ">
                      <q-btn outline color="accent" label="Цене" />
                </div>
              </div>
            </div>
          </q-card>
        </div>
        <div class="col-1"></div>
        <div class="flex col-4 justify-center">
        </div>
        <div class="col-1"></div>
      </div>
      <div class="row " >
        <div class="col-1"></div>
        <div class="col-10 ">
          <div class="row q-py-lg  justify-center  items-center">
            <itemCatalog v-for="item in items" :item="item" :key="item.id"/>
          </div>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
    <div class="text-h5 text-center  text-red-8">Items: {{this.itms}}</div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import itemCatalog from '../components/item_catalog'
export default {
  name: 'catalog',
  components: { itemCatalog },
  data () {
    return {
      label: {
        min: 350,
        max: 1000,
        items: null
      }
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

<style scoped>

</style>
