<template lang="pug">
.author
  .author-left
    img.avatar(src="/syon.jpg")
  .author-right
    .author-name syon
    .author-attr
      i.
        <svg width="16" height="16" class="octicon octicon-location" viewBox="0 0 12 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
      span Tokyo, Japan
    .links
      a.link-item(href="https://github.com/syon" target="_blank")
        i.
          <svg width="16" height="16" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
        span GitHub
</template>

<style lang="stylus" scoped>
.author
  display flex

.author-left
  margin-right 1rem

.avatar
  width 72px
  height 72px
  border-radius 50%

.author-name
  font-size 2rem
  height 72px
  display flex
  align-items center

.author-attr
  display flex
  align-items center
  margin 1em 0
  i
    display flex
    margin-right 0.5em

.link-item
  display flex
  align-items center
  margin 1em 0
  i
    display flex
    margin-right 0.5em
</style>
