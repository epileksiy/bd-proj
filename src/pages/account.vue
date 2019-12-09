<template>
    <div>
      <div class="row">
        <div class="col-12 q-mt-lg q-mb-md text-h5 text-center text-uppercase">Личный кабинет</div>
        <div class="col-1 "></div>
        <div class="col-11 text-h6 ">Данные о пользователе</div>
        <div class="col-1 flex"></div>
        <div class="col-10">
          <div class="row justify-between q-my-lg flex">
            <div class="col-md-3 col-sm-12 col-xs-12"><img src="../statics/img/photo1.png" alt="" style="width: 250px"></div>
            <div class="col-md-4 col-sm-12 col-xs-12  justify-center items-center ">
              <span>Имя, фамилия</span>
              <div class="text-h6 q-mb-md">{{this.datainf.user.name}}</div>
              <sapn>Почта</sapn>
              <div class="text-h6 q-mb-md">{{this.datainf.user.email}}</div>
              <span>Телефон</span>
              <div class="text-h6">{{this.datainf.user.remember_token}}</div>
            </div>
            <div v-show="width>900" class="col-md-4 col-sm-12 col-xs-12  flex  justify-center items-center"><img src="../statics/img/Group22.png" alt="" style="width: 425px"></div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="q-pt-lg">
                <div class="row">
                  <div class="col-12 text-h6 text-left">Избранные товары </div>
                </div>
                <div class="row q-py-lg  justify-start  items-center">
                  <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 q-my-lg flex justify-center ">
                    <q-card class="my-card flex justify-center items-center" style="width: 250px; min-width: 200px; min-height: 300px ">
                      <img class="q-mt-sm" src="../statics/img/3.png" style="max-height: 290px; width: auto">
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
                      <img class="q-mt-sm" src="../statics/img/66.png" style="max-height: 290px; width: auto">
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
                      <img class="q-mt-sm" src="../statics/img/54.png" style="max-height: 290px; width: auto">
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
                      <img class="q-mt-sm" src="../statics/img/68.png" style="max-height: 290px; width: auto">
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
                      <img class="q-mt-sm" src="../statics/img/70.png" style="max-height: 290px; width: auto">
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
                      <img class="q-mt-sm" src="../statics/img/79.png" style="max-height: 290px; width: auto">
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
                      <img class="q-mt-sm" src="../statics/img/83.png" style="max-height: 290px; width: auto">
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
        </div>
        <div class="col-1"></div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'account',
  data () {
    return {
      ratingModel: 4,
      name: null,
      email: null,
      width: 0,
      datainf: []
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
    this.datainf = this.dta
  },
  computed: {
    ...mapGetters({
      dta: 'auth/auth/data'
    })
  }
}
</script>

<style scoped>

</style>
