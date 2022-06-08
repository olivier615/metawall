import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/indexView.vue'),
    children: [
      {
        path: 'postWall',
        component: () => import('../views/postWallView.vue')
      },
      {
        path: 'singlePost/:id',
        component: () => import('../views/singlePostView.vue')
      },
      {
        path: 'newPost',
        component: () => import('../views/newPostView.vue')
      },
      {
        path: 'editPost/:id',
        component: () => import('../views/editPostView.vue')
      },
      {
        path: 'followList',
        component: () => import('../views/followListView.vue')
      },
      {
        path: 'likedPosts',
        component: () => import('../views/likedPostsView.vue')
      },
      {
        path: 'personalWall/:id',
        component: () => import('../views/personalWallView.vue')
      },
      {
        path: 'editProfile',
        component: () => import('../views/editProfileView.vue')
      },
      {
        path: 'changePassword',
        component: () => import('../views/changePasswordView.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/loginView.vue'),
    children: [
      {
        path: 'sign_in',
        component: () => import('../views/sign_inView.vue')
      },
      {
        path: 'sign_up',
        component: () => import('../views/sign_upView.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'
})

export default router
