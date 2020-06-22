<script>

  import { fade } from 'svelte/transition'

  export let params

  let
    exampleList = [
      {

        task: 'clean plates',
        name: 'Marton'

      },
      {

        task: 'clean the house',
        name: 'Oliver'

      }
    ],
    addTask = { task: '', name: '' }

  function addTaskToList () {

    const { task, name } = addTask

    exampleList = [...exampleList, { task, name }]
    addTask = { task: '', name: '' }

  }

  function removeTask (taskID) {

    exampleList = exampleList.filter(item => exampleList.indexOf(item) !== taskID)

  }

</script>

<h1>Test {params.id}</h1>

<h2>Tasks for today</h2>

<ul>

  {#each exampleList as { task, name }, id}

    <li class="Task" transition:fade><b>{name}</b> has to <b>{task}</b>... <button on:click={() => removeTask(id)}>X</button></li>

  {/each}

</ul>

<input type="text" placeholder="What task to do?" bind:value={addTask.task}>
<input type="text" placeholder="Who is the lucky one to do it?" bind:value={addTask.name}>
<button on:click={addTaskToList}>Add task!</button>

<style lang="sass">

  .Task
    border: 1px solid #000
    background-color: #535353
    color: #fff
    width: 300px
    padding: 10px 22px
    margin: 10px

</style>