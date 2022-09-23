import { createRouter, createWebHistory } from 'vue-router';

import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestReceivedd from './pages/requests/RequestReceived.vue';
import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import NotFoud from './pages/NotFoud.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/id',
      component: CoachDetail,
      children: [{ path: 'contact', component: ContactCoach }],
    },
    { path: '/register', component: CoachRegistration },
    { path: '/requests', component: RequestReceivedd },
    { path: '/:notFound(.*)', component: NotFoud },
  ],
});

export default router;
