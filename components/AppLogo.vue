<template>
  <div class="author">
    <div class="author-container">
      <div class="author-avatar"><img class="avatar" src="syon.jpg" /></div>
      <div class="author-title">
        <div class="namerepo">
          <div class="author-name">syon</div>
          <div class="slash">/</div>
          <div class="repo">works</div>
        </div>
        <div class="github-link">
          <a class="anchor" href="https://github.com/syon" target="_blank"
            ><i
              ><svg
                width="16"
                height="16"
                class="octicon octicon-mark-github"
                viewBox="0 0 16 16"
                version="1.1"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                ></path></svg></i
            ><span>GitHub</span></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.author
  display flex
  justify-content space-between

.author-container
  display flex
  align-items flex-start

.avatar
  width 72px
  height 72px
  margin-right 1rem
  border-radius 50%

.author-title
  display flex
  align-items flex-start
  flex-direction column

  .namerepo
    display flex
    align-items center
    font-size 2rem
    line-height 2
    .slash
      padding 0 0.2em
      font-weight 200

.anchor
  display flex
  align-items center
  font-size 0.8rem
  color inherit
  i
    display flex
    margin-right 0.5em
  span
    padding-top 2px
</style>
