// 导入 FontAwesome 库中的相关模块和图标
import { library, config } from '@fortawesome/fontawesome-svg-core'; // 用于管理 FontAwesome 的图标库和配置
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'; // 用于在 Vue 组件中使用 FontAwesome 图标
import { faEnvelope, faMugSaucer, faBlog } from '@fortawesome/free-solid-svg-icons'; // 导入具体的实心图标
import { faGithub, faBilibili, faTelegram, faWeixin, faAlipay, faSteam, faQq, faTwitter } from '@fortawesome/free-brands-svg-icons'; // 导入具体的品牌图标
// import { far } from '@fortawesome/free-regular-svg-icons'; // 导入常规图标集（如果需要，可以解除注释）

// 配置 FontAwesome 的自动处理 CSS 的功能
config.autoAddCss = false; // 禁用 FontAwesome 自动添加 CSS 的功能，交由 Nuxt 来管理 CSS
config.autoReplaceSvg = false; // 禁用 FontAwesome 自动替换 SVG 图标的功能

// 将选中的图标添加到图标库中，确保在 Vue 组件中可以使用这些图标
library.add(faEnvelope, faMugSaucer, faBlog, faGithub, faBilibili, faTelegram, faWeixin, faAlipay, faSteam, faQq, faTwitter);

// 注册 FontAwesomeIcon 组件，使其在整个 Nuxt 应用中可用
export default defineNuxtPlugin((nuxtApp) => {
    // 在 Nuxt 应用的 vueApp 实例中全局注册 'font-awesome-icon' 组件
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
