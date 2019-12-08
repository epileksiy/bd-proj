<template>
  <div :class="size ==='small' ? 'col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12' : 'col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12'">
    <q-card class="card q-ma-md">
      <q-card-section class="q-pa-none q-mb-lg">
        <q-img
          placeholder-src="statics/img-placeholder.png"
        />
      </q-card-section>
      <q-card-section class="q-px-lg q-py-md">
        <div class="q-py-md q-px-sm text-blue-2 text-h5">{{ article.categories[0] }}</div>
        <div class="q-mb-lg q-px-sm article text-h4 ">{{ article.content }}</div>
        <div class="q-mt-lg q-px-sm footer text-h5 text-grey-2 flex justify-between">
          <router-link :to="{name: 'article.name',params: {id: article.id}}"><div >{{article.author.name}}</div></router-link>
          <div>{{ article.created_at }}</div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: ['size', 'article']
}
</script>

<style lang="sass">
  .article
    overflow: hidden
    display: -webkit-box
    -webkit-line-clamp: 3
    -webkit-box-orient: vertical
</style>
