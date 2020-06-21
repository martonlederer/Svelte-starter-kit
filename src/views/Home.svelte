<script>

  import { test } from '../store/stores.js'
  import { fly, fade } from 'svelte/transition'

  let welcome = 'Welcome to this example *Svelte* app. This is the Homepage'

</script>

<h1>{ welcome }</h1>
<a href="/test/iddd">Test</a>
<p>This is a store variable: {$test}</p>

{#if $test !== 'Secret fly code'}

  <p transition:fly={{ y: 1000, duration: 850 }}>You can change it below</p>

{:else}

  <p transition:fade>Oh that was the secret code!!!! You can still update the store state below...</p>

{/if}

<input type="text" bind:value={$test}>

<style lang="sass">

  h1
    font-size: 1.1em

</style>