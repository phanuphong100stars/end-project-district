import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _73f88bf6 = () => interopDefault(import('../pages/accounts.vue' /* webpackChunkName: "pages/accounts" */))
const _01932382 = () => interopDefault(import('../pages/accounts-edit.vue' /* webpackChunkName: "pages/accounts-edit" */))
const _961b4e68 = () => interopDefault(import('../pages/activities.vue' /* webpackChunkName: "pages/activities" */))
const _3513e585 = () => interopDefault(import('../pages/add-head-house-holds.vue' /* webpackChunkName: "pages/add-head-house-holds" */))
const _c8c7d9ba = () => interopDefault(import('../pages/add-house-hold-members.vue' /* webpackChunkName: "pages/add-house-hold-members" */))
const _a3a3ffa8 = () => interopDefault(import('../pages/add-house-holds.vue' /* webpackChunkName: "pages/add-house-holds" */))
const _8d73f77a = () => interopDefault(import('../pages/add-persons.vue' /* webpackChunkName: "pages/add-persons" */))
const _4ea943a9 = () => interopDefault(import('../pages/add-volunteer-house-holds.vue' /* webpackChunkName: "pages/add-volunteer-house-holds" */))
const _3d3a7906 = () => interopDefault(import('../pages/alley.vue' /* webpackChunkName: "pages/alley" */))
const _2fb2ce16 = () => interopDefault(import('../pages/committees.vue' /* webpackChunkName: "pages/committees" */))
const _777afd33 = () => interopDefault(import('../pages/community-board.vue' /* webpackChunkName: "pages/community-board" */))
const _1f18b21e = () => interopDefault(import('../pages/community-info.vue' /* webpackChunkName: "pages/community-info" */))
const _274b1dad = () => interopDefault(import('../pages/district.vue' /* webpackChunkName: "pages/district" */))
const _23ba562f = () => interopDefault(import('../pages/edit-activity-members.vue' /* webpackChunkName: "pages/edit-activity-members" */))
const _7ba0dd44 = () => interopDefault(import('../pages/edit-community-board.vue' /* webpackChunkName: "pages/edit-community-board" */))
const _40df47aa = () => interopDefault(import('../pages/edit-health-check.vue' /* webpackChunkName: "pages/edit-health-check" */))
const _781eff83 = () => interopDefault(import('../pages/edit-house-holds.vue' /* webpackChunkName: "pages/edit-house-holds" */))
const _895b71cc = () => interopDefault(import('../pages/edit-persons.vue' /* webpackChunkName: "pages/edit-persons" */))
const _15cc4b6d = () => interopDefault(import('../pages/export-house-holds.vue' /* webpackChunkName: "pages/export-house-holds" */))
const _11f0ef14 = () => interopDefault(import('../pages/health-check.vue' /* webpackChunkName: "pages/health-check" */))
const _3788c450 = () => interopDefault(import('../pages/house-holds.vue' /* webpackChunkName: "pages/house-holds" */))
const _1c40a8e2 = () => interopDefault(import('../pages/house-holds-edit.vue' /* webpackChunkName: "pages/house-holds-edit" */))
const _722c08b8 = () => interopDefault(import('../pages/landing-page.vue' /* webpackChunkName: "pages/landing-page" */))
const _5cf0074c = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _592c615e = () => interopDefault(import('../pages/my-house.vue' /* webpackChunkName: "pages/my-house" */))
const _45ca7538 = () => interopDefault(import('../pages/person-roles.vue' /* webpackChunkName: "pages/person-roles" */))
const _67bd57ef = () => interopDefault(import('../pages/persons.vue' /* webpackChunkName: "pages/persons" */))
const _5ae5abbf = () => interopDefault(import('../pages/road.vue' /* webpackChunkName: "pages/road" */))
const _4d14d1ae = () => interopDefault(import('../pages/roles.vue' /* webpackChunkName: "pages/roles" */))
const _9fa7ab6a = () => interopDefault(import('../pages/zone.vue' /* webpackChunkName: "pages/zone" */))
const _07e05943 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/accounts",
    component: _73f88bf6,
    name: "accounts"
  }, {
    path: "/accounts-edit",
    component: _01932382,
    name: "accounts-edit"
  }, {
    path: "/activities",
    component: _961b4e68,
    name: "activities"
  }, {
    path: "/add-head-house-holds",
    component: _3513e585,
    name: "add-head-house-holds"
  }, {
    path: "/add-house-hold-members",
    component: _c8c7d9ba,
    name: "add-house-hold-members"
  }, {
    path: "/add-house-holds",
    component: _a3a3ffa8,
    name: "add-house-holds"
  }, {
    path: "/add-persons",
    component: _8d73f77a,
    name: "add-persons"
  }, {
    path: "/add-volunteer-house-holds",
    component: _4ea943a9,
    name: "add-volunteer-house-holds"
  }, {
    path: "/alley",
    component: _3d3a7906,
    name: "alley"
  }, {
    path: "/committees",
    component: _2fb2ce16,
    name: "committees"
  }, {
    path: "/community-board",
    component: _777afd33,
    name: "community-board"
  }, {
    path: "/community-info",
    component: _1f18b21e,
    name: "community-info"
  }, {
    path: "/district",
    component: _274b1dad,
    name: "district"
  }, {
    path: "/edit-activity-members",
    component: _23ba562f,
    name: "edit-activity-members"
  }, {
    path: "/edit-community-board",
    component: _7ba0dd44,
    name: "edit-community-board"
  }, {
    path: "/edit-health-check",
    component: _40df47aa,
    name: "edit-health-check"
  }, {
    path: "/edit-house-holds",
    component: _781eff83,
    name: "edit-house-holds"
  }, {
    path: "/edit-persons",
    component: _895b71cc,
    name: "edit-persons"
  }, {
    path: "/export-house-holds",
    component: _15cc4b6d,
    name: "export-house-holds"
  }, {
    path: "/health-check",
    component: _11f0ef14,
    name: "health-check"
  }, {
    path: "/house-holds",
    component: _3788c450,
    name: "house-holds"
  }, {
    path: "/house-holds-edit",
    component: _1c40a8e2,
    name: "house-holds-edit"
  }, {
    path: "/landing-page",
    component: _722c08b8,
    name: "landing-page"
  }, {
    path: "/login",
    component: _5cf0074c,
    name: "login"
  }, {
    path: "/my-house",
    component: _592c615e,
    name: "my-house"
  }, {
    path: "/person-roles",
    component: _45ca7538,
    name: "person-roles"
  }, {
    path: "/persons",
    component: _67bd57ef,
    name: "persons"
  }, {
    path: "/road",
    component: _5ae5abbf,
    name: "road"
  }, {
    path: "/roles",
    component: _4d14d1ae,
    name: "roles"
  }, {
    path: "/zone",
    component: _9fa7ab6a,
    name: "zone"
  }, {
    path: "/",
    component: _07e05943,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
