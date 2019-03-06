import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/', component: () =>
        import(/* webpackChunkName: "about" */ './components/Course.vue')
    },
    {
      path: '/notes', component: () =>
        import(/* webpackChunkName: "about" */ './components/Notes.vue')
    },
    {
      path: '/partner', component: () =>
        import(/* webpackChunkName: "about" */ './components/Partner.vue')
    }
  ],
});
