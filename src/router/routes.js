const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue"), name: "Home" },
      {
        path: "AboutUs",
        component: () => import("pages/about_us/AboutUs.vue"),
        name: "AboutUs",
      },
      {
        path: "Article",
        component: () => import("pages/articles/Article.vue"),
        name: "Article",
      },
      {
        path: "Cart",
        component: () => import("pages/cart/Cart.vue"),
        name: "Cart",
      },
      {
        path: "ContactUs",
        component: () => import("pages/contact_us/ContactUs.vue"),
        name: "ContactUs",
      },
      {
        path: "FAQ",
        component: () => import("pages/faq/FAQ.vue"),
        name: "FAQ",
      },
      {
        path: "Payment",
        component: () => import("pages/payment/Payment.vue"),
        name: "Payment",
      },
      {
        path: "Rules",
        component: () => import("pages/rules/Rules.vue"),
        name: "Rules",
      },
      {
        path: "SingleArticle",
        component: () => import("pages/single_article/SingleArticle.vue"),
        name: "SingleArticle",
      },
      {
        path: "Store",
        component: () => import("pages/store/Store.vue"),
        name: "Store",
      },
      {
        path: "Ticket",
        component: () => import("pages/ticket/Ticket.vue"),
        name: "Ticket",
      },
      {
        path: "register-vendors",
        component: () => import("pages/register/RegisterVendors.vue"),
        name: "RegisterVendors",
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
