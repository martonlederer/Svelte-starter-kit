import Home from './views/Home.svelte'
import NotFound from './views/NotFound.svelte'

const routes = [

  {

    name: '/',
    component: Home

  },
  {

    name: '404',
    path: '404',
    component: NotFound

  }

]

export { routes }