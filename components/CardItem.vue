<template>
  <a class="card" :href="arg.link" target="_blank"
    ><img :src="`images/card-${arg.id}.png`" />
    <div class="card-content">
      <div class="card-title">{{ arg.title }}</div>
      <div class="card-desc">{{ arg.desc }}</div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    arg: { type: Object, required: true },
  },
}
</script>

<style lang="stylus" scoped>
.card
  position relative
  display flex
  width 350px
  height 308px
  /* width calc(1110px / 3 - 2rem) */
  margin 0.8rem
  box-shadow 0 3px 8px rgba(0,0,0,.1)

  img
    position absolute
    z-index 0
    flex 1
    width 100%
    height 100%
    border-radius 8px

  .card-content
    z-index 1
    width 100%
    margin-top 164px
    display flex
    flex-direction column
    align-items flex-start
    color #fff
    padding 1rem

  .card-title
    font-size 24px
    font-weight bold
    margin 0 0 0.5em
</style>
