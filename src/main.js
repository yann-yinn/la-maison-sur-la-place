// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "~/assets/css/bulma.min.css";
import VueScrollTo from "vue-scrollto";
export default function(Vue, { router, head, isClient }) {
  Vue.use(VueScrollTo);
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
