<template>
  <main>
    <header class="site-header">
      <div class="container">
        <app-logo></app-logo>
      </div>
    </header>
    <section class="cards">
      <div class="container">
        <div class="card-list">
          <card-item v-for="p in products" :key="p.title" :arg="p"></card-item>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import CardItem from '~/components/CardItem.vue'
import Data from '~/store/data.json'

export default {
  components: {
    AppLogo,
    CardItem,
  },
  asyncData(context) {
    return {
      products: Data.products,
    }
  },
}
</script>

<style lang="stylus" scoped>
.site-header
  margin 4rem 0

.cards
  padding 4rem 0
  background-color #f6f9fc

.card-list
  display flex
  flex-wrap wrap
</style>
