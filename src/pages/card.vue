<template>
    <q-page class="q-py-lg q-px-md">
      <div class="container q-py-lg">
        <div class="row">
          <div class="col-1"></div>
          <div class="col-10">
            <q-card class="my-card bg-grey-3 q-pa-md" style="min-height: 557px ">
              <div class="row">
                <div class="col-md-5 col-sm-12 col-xs-12">
                  <div class="q-pa-md ">
                    <q-carousel
                      class="bg-grey-3"
                      swipeable
                      animated
                      v-model="slide"
                      thumbnails
                      infinite
                    >
                      <q-carousel-slide :name="1" img-src="../statics/img/image1.png" style="height: 80%; width: auto"/>
                      <q-carousel-slide :name="2" img-src="../statics/img/image2.png" style="height: 80%; width: auto"/>
                      <q-carousel-slide :name="3" img-src="../statics/img/image3.png" style="height: 80%; width: auto"/>
                    </q-carousel>
                  </div>
                  <div class="q-pa-md flex justify-center ">
                    <div class="q-gutter-y-md column">
                      <q-rating
                        class="q-ma-md absolute-top-right"
                        v-model="ratingModel2"
                        icon-selected="favorite"
                        icon="favorite_border"
                        size="2em"
                        :max="1"
                        color="purple"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-7 col-sm-12 col-xs-12 column justify-around   ">
                  <q-card-section  >
                    <div class="text-h5 q-pb-xl">{{card[0].title}}</div>
                  </q-card-section>
                  <q-card-section class="">
                    <div class="text-h6">Артикул: {{card[0].id}} <br>
                      Тип затяжки: Сигаретная<br>
                      Емкость аккумулятора: 350 мАч<br>
                      Объем бака атомайзера:<br>
                      1.6 мл<br>
                    </div>
                  </q-card-section>
                      <q-card-section class="  ">
                        <div class="text-h5 flex text-red-8">{{card[0].price}} &#8381;</div>
                      </q-card-section>
                      <q-card-section class="">
                        <q-btn outline color="accent" label="В корзину"/>
                      </q-card-section>
                </div>
              </div>
            </q-card>
            <div class=" q-mt-xl">
              <div class="q-gutter-y-md" >
                <q-card>
                  <q-tabs
                    v-model="tab"
                    dense
                    class="bg-grey-3"
                    active-color="primary"
                    indicator-color="primary"
                    align="justify"
                    narrow-indicator
                  >
                    <q-tab name="about" label="Описание" />
                    <q-tab name="feedback" label="Отзывы" />
                  </q-tabs>

                  <q-separator />

                  <q-tab-panels class="bg-grey-3" v-model="tab" animated>
                    <q-tab-panel name="about">
                      <div class="text-h6">{{card[0].description}}</div>
                    </q-tab-panel>

                    <q-tab-panel class="q-mt-lg" name="feedback">
                      <div class="q-mt-md">
                        <q-infinite-scroll @load="onLoad" :offset="250">
                          <div v-for="(item, index) in 5" :key="index" class="caption">
                            <div class="row">
                              <div class="col-2">
                                <img class="q-pt-sm" src="../statics/img/photo.png" >
                              </div>
                              <div class="col-md-10 col-sm-10 col-xs-12 ">
                                <q-card-section >
                                  <div class="">
                                    <div class="text-h6 ">Борис Тчимпимбеков</div>
                                    <div class="text-body2">29.02.2019</div>
                                  </div>
                                </q-card-section>
                                <q-card-section class="">
                                  <div class="text-h6">Оценка</div>
                                  <div class="q-pa-md flex  ">
                                    <div class="q-gutter-y-md column">
                                      <q-rating
                                        v-model="ratingModel1"
                                        size="1.2em"
                                        color="red-8"
                                        icon="star_border"
                                        icon-selected="star"
                                      />
                                    </div>
                                  </div>
                                </q-card-section>
                                <q-card-section class="">
                                  <div class="text-h6">Плюсы</div>
                                  <p>Недорого, если купили по акции. Компактно, просто в употреблении</p>
                                </q-card-section>
                                <q-card-section class="">
                                  <div class="text-h6">Минусы</div>
                                  <p>Течёт всегда. Разовый девайс: живёт от недели до 2-3 месяцев. Если дольше - вам крупно повезло.</p>
                                </q-card-section>
                                <q-card-section class="q-pb-xl">
                                  <div class="text-h6">Комментарий</div>
                                  <p>Купил по акции, чисто на попробовать POD. Жена тут же забрала, потому что просто и удобно после её EGO. Течёт насквозь. Картриджи почти никакие по вкусу. Но девайс прожил аж пять месяцев прежде чем перестал реагировать на зарядку. Видимо, протечки окончательно убили контакты. После чего у меня отняли Pasito, который не так изящен, компактен и практичен, зато без проблем ))).</p>
                                </q-card-section>
                                <q-separator />
                              </div>
                            </div>
                          </div>
                            <template v-slot:loading>
                              <div class="row justify-center q-my-md">
                                <q-spinner-dots color="primary" size="40px" />
                              </div>
                            </template>
                        </q-infinite-scroll>
                      </div>
                    </q-tab-panel>
                  </q-tab-panels>
                </q-card>
              </div>
              <div class="q-pt-lg">
                <div class="row">
                  <div class="col-12 text-h4 text-center">Похожие товары</div>
                </div>
                <div class="row q-py-lg  justify-center  items-center">
                  <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 q-my-lg flex justify-center ">
                    <q-card class="my-card flex justify-center items-center" style="width: 250px; min-width: 200px; min-height: 300px ">
                      <img class="q-mt-sm" src="../statics/img/vape.png" style="max-height: 290px; width: auto">
                      <q-rating
                        class="q-ma-sm absolute-top-right"
                        v-model="ratingModel"
                        icon="favorite"
                        size="2em"
                        :max="1"
                        color="purple"
                      />

                      <q-card-section>
                        <div class="text-body2">asd</div>
                      </q-card-section>
                      <q-card-section class="full-width">
                        <div class="row justify-between ">
                          <div class="col-5 text-center text-red-8" style="">4490 руб./шт</div>
                          <div class="col-5 flex justify-center items-center" style="width: 111px"><q-btn size="sm" outline color="accent" label="В корзину"/></div>
                        </div>
                      </q-card-section>
                    </q-card>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 q-my-lg flex justify-center ">
                    <q-card class="my-card flex justify-center items-center" style="width: 250px; min-width: 200px; min-height: 300px ">
                      <img class="q-mt-sm" src="../statics/img/vape.png" style="max-height: 290px; width: auto">
                      <q-rating
                        class="q-ma-sm absolute-top-right"
                        v-model="ratingModel"
                        icon="favorite"
                        size="2em"
                        :max="1"
                        color="purple"
                      />

                      <q-card-section>
                        <div class="text-body2">Vandy Vape Swell-боксмод</div>
                      </q-card-section>
                      <q-card-section class="full-width">
                        <div class="row justify-between ">
                          <div class="col-5 text-center text-red-8" style="">4490 руб./шт</div>
                          <div class="col-5 flex justify-center items-center" style="width: 111px"><q-btn size="sm" outline color="accent" label="В корзину"/></div>
                        </div>
                      </q-card-section>
                    </q-card>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 q-my-lg flex justify-center ">
                    <q-card class="my-card flex justify-center items-center" style="width: 250px; min-width: 200px; min-height: 300px ">
                      <img class="q-mt-sm" src="../statics/img/vape.png" style="max-height: 290px; width: auto">
                      <q-rating
                        class="q-ma-sm absolute-top-right"
                        v-model="ratingModel"
                        icon="favorite"
                        size="2em"
                        :max="1"
                        color="purple"
                      />

                      <q-card-section>
                        <div class="text-body2">Vandy Vape Swell-боксмод</div>
                      </q-card-section>
                      <q-card-section class="full-width">
                        <div class="row justify-between ">
                          <div class="col-5 text-center text-red-8" style="">4490 руб./шт</div>
                          <div class="col-5 flex justify-center items-center" style="width: 111px"><q-btn size="sm" outline color="accent" label="В корзину"/></div>
                        </div>
                      </q-card-section>
                    </q-card>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 q-my-lg flex justify-center ">
                    <q-card class="my-card flex justify-center items-center" style="width: 250px; min-width: 200px; min-height: 300px ">
                      <img class="q-mt-sm" src="../statics/img/vape.png" style="max-height: 290px; width: auto">
                      <q-rating
                        class="q-ma-sm absolute-top-right"
                        v-model="ratingModel"
                        icon="favorite"
                        size="2em"
                        :max="1"
                        color="purple"
                      />

                      <q-card-section>
                        <div class="text-body2">Vandy Vape Swell-боксмод</div>
                      </q-card-section>
                      <q-card-section class="full-width">
                        <div class="row justify-between ">
                          <div class="col-5 text-center text-red-8" style="">4490 руб./шт</div>
                          <div class="col-5 flex justify-center items-center" style="width: 111px"><q-btn size="sm" outline color="accent" label="В корзину"/></div>
                        </div>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-1"></div>
        </div>
      </div>
    </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'card',
  data () {
    return {
      slide: 1,
      ratingModel: 5,
      ratingModel1: 2,
      tab: 'about',
      items: [{}, {}, {}, {}, {}, {}, {}],
      cardinfo: null
    }
  },
  methods: {
    onLoad (index, done) {
      setTimeout(() => {
        if (this.items) {
          this.items.push({}, {}, {}, {}, {}, {}, {})
          done()
        }
      }, 2000)
    },
    ...mapActions({
      getCard: 'loadCard'
    })
  },
  computed: {
    ...mapGetters({
      card: 'getCard'
    })
  },
  beforeMount () {
    this.getCard(this.$route.params.id)
      .then(() => {
        console.log(this.card)
      })
    console.log(this.$route.params.id)
  }
}
</script>

<style scoped>

</style>
