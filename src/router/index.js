import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login'
import NotebooksList from '@/views/NotebooksList'
import NoteDetail from '@/views/NoteDetail'
import TrashDetail from '@/views/TrashDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: Login,
      component: Login
    },
    {
      path: '/notebooks',
      component: NotebooksList
    },
    {
      path: '/note/:noteId',
      component: NoteDetail
    },
    {
      path: '/trash/:noteId',
      name: Login,
      component: TrashDetail
    },
  ]
})
