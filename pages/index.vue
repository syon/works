<template lang="pug">
  main
    app-logo
    h1.title works
    h2.subtitle Nuxt.js project
    section.cards
      .container
        .card-list
          card-item
          card-item
          card-item
          card-item
          card-item
          card-item
          card-item
          card-item
          card-item
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import CardItem from '~/components/CardItem.vue'

export default {
  components: {
    AppLogo,
    CardItem,
  }
}
</script>

<style lang="stylus" scoped>
@media (min-width: 768px)
  .container
    width 750px

@media (min-width: 992px)
  .container
    width 970px

@media (min-width: 1220px)
  .container
    width 1170px

.container
  margin-right auto
  margin-left auto
  padding-left 15px
  padding-right 15px

.cards
  background-color #f6f9fc

.card-list
  display flex
  flex-wrap wrap
</style>
