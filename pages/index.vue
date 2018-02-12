<template lang="pug">
  main
    header.site-header
      .container
        app-logo
    h1.title works
    h2.subtitle Nuxt.js project
    section.cards
      .container
        .card-list
          card-item(v-for="p in products" :arg="p" :key="p.title")
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import CardItem from '~/components/CardItem.vue'

export default {
  components: {
    AppLogo,
    CardItem,
  },
  asyncData (context) {
    return {
      products: [
        { id: '01', title: 'Chase', desc: 'Web client for Pocket' },
        { id: '01', title: 'World2', desc: 'Description 02' },
        { id: '01', title: 'World3', desc: 'Description 03' },
        { id: '01', title: 'World4', desc: 'Description 04' },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.site-header
  margin 4rem 0

.cards
  background-color #f6f9fc

.card-list
  display flex
  flex-wrap wrap
</style>
