import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import SignIn from './views/SignIn.vue';
import ProductOverview from './views/ProductOverview.vue';
import CartPage from './views/CartPage.vue';
import Session from './views/Session.vue';
import SessionDetails from './views/SessionDetails.vue';
 
export const ROUTE_NAME = {
  SIGN_IN: 'SignIn',
  HOME: 'Home',
  NOT_FOUND: "PageNotFound",
  PRODUCT_OVERVIEW: "ProductOverview",
  CART_PAGE: "CartPage",
  SESSION: "Session",
  SESSION_DETAILS: "SessionDetails"
  
};

export function isPublicPage(routeName) {
  switch(routeName) {
    case ROUTE_NAME.NOT_FOUND:
    case ROUTE_NAME.SIGN_IN:
      return false;
  }

  return true;
}

const routes = [
  {
    path: `/`,
    name: ROUTE_NAME.HOME,
    component: Home,
  }, 
  {
    path: `/${ROUTE_NAME.SIGN_IN}`,
    name: ROUTE_NAME.SIGN_IN,
    component: SignIn
  },

  {
    path: `/${ROUTE_NAME.PRODUCT_OVERVIEW}`,
    name: ROUTE_NAME.PRODUCT_OVERVIEW,
    component: ProductOverview
  },

  {
    path: `/${ROUTE_NAME.CART_PAGE}`,
    name: ROUTE_NAME.CART_PAGE,
    component: CartPage
  },

  {
    path: `/${ROUTE_NAME.SESSION}`,
    name: ROUTE_NAME.SESSION,
    component: Session
  },
  {
    path: `/${ROUTE_NAME.SESSION_DETAILS}/:id`,
    props: true,
    name: ROUTE_NAME.SESSION_DETAILS,
    component: SessionDetails,
  },

  {
    path: '/:pathMatch(.*)*',
    name: ROUTE_NAME.NOT_FOUND,
    component: () => import('./views/PageNotFound.vue')
  },


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router