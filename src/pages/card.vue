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
                        v-model="ratingModel"
                        size="2.2em"
                        color="red-8"
                        icon="star_border"
                        icon-selected="star"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-7 col-sm-12 col-xs-12 column justify-around   ">
                  <q-card-section  >
                    <div class="text-h5 q-pb-xl">Электронный испаритель Logic Compact (350 mAh)</div>
                  </q-card-section>
                  <q-card-section class="">
                    <div class="text-h6">Артикул: 93624 <br>
                      Тип затяжки: Сигаретная<br>
                      Емкость аккумулятора: 350 мАч<br>
                      Объем бака атомайзера:<br>
                      1.6 мл<br>
                    </div>
                  </q-card-section>
                      <q-card-section class="  ">
                        <div class="text-h5 flex text-red-8">4490  &#8381;</div>
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
                      <div class="text-h6">Компактный формат</div>
                      <p>Малый размер вейпов Logic Compact (длина составляет 8,8 см) позволяет комфортно пользоваться устройством любому парильщику, оно с лёгкостью поместится даже в женской ладони. Лучший выбор для жизни на больших скоростях.</p>
                      <div class="text-h6">Выбор в твоих руках</div>
                      <p>Электронная сигарета Logic Compact выпускается в трёх цветовых вариациях – серый графит, пыльная роза и стальной синий. Выбери свой!</p>
                      <div class="text-h6">Удобная зарядка</div>
                      <p> На корпусе Logic Compact расположен индикатор, сигнализирующий о необходимости подзарядки устройства. Всего за 74 минуты аккумулятор ёмкостью 350 мАч будет полностью заряжен при помощи магнитной зарядки. О необходимости подзарядки подскажет световой индикатор. Как только батарея сядет, индикатор мигнёт 10 раз, а процесс зарядки выражается медленным миганием.</p>
                      <div class="text-h6">Вкус на максимум</div>
                      <p> Капсулы Logic Compact содержат в себе жидкость с солевым никотином, благодаря чему они могут похвастаться не только насыщенным вкусом, но и быстрее усваиваются организмом. Европейский контроль качества гарантирует положительный опыт электронной сигареты Logic Compact.</p>
                      <div class="text-h6">Разнообразие ароматов</div>
                      <p>Зачем выбирать, если любой выбор вкуса – верный? Компания Logic Compact предлагает пользователям пять ароматов на выбор: Классика, Мятный бриз, Тропический мусс, Ягодный фреш и Чай масала. Они доступны в трёх вариациях никотиновой крепости (1,5, 2,9 и 5% никотина). Сложно подобрать любимый? Купите несколько и выбирайте фаворита!</p>
                      <div class="text-h6">Простота в использовании</div>
                      <p>Что может быть проще замены капсул? Благодаря магнитному коннектору, они легко устанавливаются в корпус электронной сигареты Logic Compact, а их объем в 1,6 мл позволяет наслаждаться вкусом дольше, чем прежде.</p>
                      <p>  Вы можете купить электронную сигарету Logic Compact в фирменном магазине Vardex Вашего города или сделать заказ онлайн, с возможностью доставки по всей России.</p>
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
export default {
  name: 'card',
  data () {
    return {
      slide: 1,
      ratingModel: 5,
      ratingModel1: 2,
      tab: 'about',
      items: [{}, {}, {}, {}, {}, {}, {}]
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
    }
  }
}
</script>

<style scoped>

</style>
