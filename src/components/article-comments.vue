<template>
  <div class="col-12 col-xl-8 col-lg-8 col-md-8 col-sm-12 q-pa-sm q-pb-xl">
    <div class="title text-h4">Комментарии</div>
    <comment/>
    <comment/>
  </div>
</template>
<script>
import comment from '../components/comment'
export default {
  name: 'comments',
  components: {
    comment
  }
}
</script>
