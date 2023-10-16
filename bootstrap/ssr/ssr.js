import { watch, unref, withCtx, createVNode, useSSRContext, createSSRApp, h } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { Head, createInertiaApp } from "@inertiajs/vue3";
import useQuasar from "quasar/src/composables/use-quasar.js";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import Quasar from "quasar/src/vue-plugin.js";
import quasarLang from "quasar/lang/fr.mjs";
import quasarIconSet from "quasar/icon-set/material-icons-outlined.mjs";
const _sfc_main = {
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    const $q = useQuasar();
    $q.dark.set(true);
    watch(() => $q.dark.isActive, (val) => {
      console.log(val ? "On dark mode" : "On light mode");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>home</title><meta name="caca" content="boudin"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "home"),
              createVNode("meta", {
                name: "caca",
                content: "boudin"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><h1>Bienvenue sur mon site !</h1><p>Ceci est ma première page avec InertiaJS et Laravel.</p><br>Oskour jppnklniokl </div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
const robotoFont = "";
const materialIcons = "";
const materialSymbolsOutlined = "";
const materialSymbolsRounded = "";
const materialIconsOutlined = "";
const index = "";
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Home.vue": __vite_glob_0_0 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin).use(Quasar, {
        plugins: {},
        // import Quasar plugins and add here
        lang: quasarLang,
        iconSet: quasarIconSet,
        dark: true
        /* look at QuasarConfOptions from the API card */
      });
    }
  })
);
