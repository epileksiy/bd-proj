<template>
    <q-page class="q-py-md q-ml-xl q-mr-xl">
      <div v-show="width >= 992">
      <q-carousel
        arrows
        animated
        v-model="slide"
        height="50vh"
        class="col-12 q-mt-lg"
      >
        <q-carousel-slide name="first" img-src="https://images.axios.com/gABDn8zrypC1FambOSaB6WZlfkg=/0x0:1920x1080/1920x1080/2019/08/21/1566383191315.jpg">
          <div class="absolute-bottom custom-caption">
            <div class="text-h2 text-white">Будь в тренде!</div>
            <div class="text-subtitle1 text-white">Будь на хайпе.</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="second" img-src="https://wallpaperaccess.com/full/87243.jpg">
          <div class="absolute-bottom custom-caption">
            <div class="text-h2 text-white">Аниме клёво</div>
            <div class="text-subtitle1 text-white">Если ты педик</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="third" img-src="https://cdn.wallpapersafari.com/15/38/YvwZPC.jpg">
          <div class="absolute-bottom custom-caption">
            <div class="text-h2 text-white">Вэйп эстетика</div>
            <div class="text-subtitle1 text-white">So much clouds</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="fouth" img-src="http://sun9-48.userapi.com/c637717/v637717426/31bb9/zu_bCIUhYYY.jpg">
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">Вэйп-нэйшн, брат</div>
            <div class="text-subtitle1">Йоу бичез</div>
          </div>
        </q-carousel-slide>
      </q-carousel>
      </div>
        <div class="row q-mt-xl">
          <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-0"></div>
          <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-12">
            <div class="container">
              <div class="row items-center">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <img src="../assets/gl-1.png" width="70%"  alt="">
                </div>
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-12 justify-start">
                  <label class="text-h5"> <p>Просто уникальный магазин.</p>
                    <p>Только в нашем магазине вы сможете встретить Семенович!</p>
                    <p>Правда Лену, но ладно..</p></label>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-0"></div>
        </div>
      <container v-show="width>1023">
        <div class="row">
          <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-0"></div>
          <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-12">
            <div class="container">
              <div class="row items-center">
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-12 justify-end">
                  <label class="text-h5"> Перейдя на вейп, вам больше не придётся тратиться на зажигалки!</label>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <img src="../assets/gl-2.png" width="90%"  alt="">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-0"></div>
        </div>
      </container>
      <container v-show="width<1024">
        <div class="row">
          <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-0"></div>
          <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-12">
            <div class="container">
              <div class="row items-center">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <img src="../assets/gl-2.png" width="90%"  alt="">
                </div>
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8col-xs-12 justify-end">
                  <label class="text-h5"> Перейдя на вейп, вам больше не придётся тратиться на зажигалки!</label>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-0"></div>
        </div>
      </container>
      <container >
        <div class="row q-mb-xl">
          <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-0"></div>
          <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-12">
            <div class="container">
              <div class="row items-center">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <img src="../assets/gl-3.png" width="100%"  alt="">
                </div>
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-12 justify-start">
                  <label class="text-h5"> Всегда рады вас видеть в нашем магазине!</label>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-1 col-lg-1 col-md-1 col-sm-4 col-xs-0"></div>
        </div>
      </container>
    </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Home',
  components: {},
  data () {
    return {
      items: null,
      slide: 'first',
      width: 0
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
    }),
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
