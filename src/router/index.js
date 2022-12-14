import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from "firebase/auth"

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/TheHome.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/TheNews.vue')
  },
  {
    path: '/teacher',
    name: 'teacher',
    component: () => import('../views/TheTeacher.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/TheContact.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/TheLogin.vue')
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import('../views/TheEdit.vue'),
    meta: {
      requiresAuth: true,
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if(to.matched.some((record) => record.meta.requiresAuth)){
    if(await getCurrentUser()) {
      next();
    } else {
      next("/");
    }
  } else {
    next();
  }
});

export default router
