<script>

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

</script>

<h1>Test {params.id}</h1>

<h2>Tasks for today</h2>

{#each exampleList as { task, name }}

  <p><b>{name}</b> has to <b>{task}</b>...</p>

{/each}

<input type="text" placeholder="What task to do?" bind:value={addTask.task}>
<input type="text" placeholder="Who is the lucky one to do it?" bind:value={addTask.name}>
<button on:click={addTaskToList}>Add task!</button>