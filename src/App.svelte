<script>

  import router from 'page'

  import Home from './views/Home.svelte'
  import Test from './views/Test.svelte'
  import NotFound from './views/NotFound.svelte'

  let
     page,
     params

  router('/', () => page = Home)
  router('/test/:id', (ctx, next) => {

    params = ctx.params
    next()

  }, () => page = Test)
  router('*', () => page = NotFound)

  router.start()

</script>

<div id="app">

  <svelte:component this={page} params="{params}" />

</div>

<style lang="sass">
  
  \:global(body)
    margin: 0
    font-family: 'Avenir', Helvetica, Arial, sans-serif

  \:global(::selection)
    background: $primary-color
    color: #fff

  \:global(::-moz-selection)
    background: $primary-color
    color: #fff

</style>