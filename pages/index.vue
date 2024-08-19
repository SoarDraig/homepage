<script setup lang="ts">
import ButtonGroup from "../components/ButtonGroup.vue"; // 导入自定义的按钮组组件

const appConfig = useAppConfig(); // 获取应用配置，通常包含全局的配置信息
const route = useRoute(); // 获取当前路由对象，用于监控路由的变化

useHead({ title: `Home | ${appConfig.profile.name}` }); // 动态设置页面标题

const qrToggle = ref<InstanceType<typeof ButtonGroup> | null>(null); // 引用 ButtonGroup 组件实例，用于在代码中访问它的属性和方法
const showQrPanel = ref(false); // 控制二维码支付面板的显示状态
const qrCodeData = computed(() => {
    // 根据 qrToggle 的当前激活按钮索引获取相应的二维码数据
    const index = qrToggle.value?.activeIndex || 0;
    return appConfig.profile.sponsor.pays[index].qrCodeData;
});

// 监控路由变化，如果 hash 为 #coffee，则自动打开二维码支付面板
watchPostEffect(() => {
    if (route.hash === "#coffee") {
        showQrPanel.value = true;
    }
});
</script>

<template>
    <div class="home">
        <img class="avatar" :src="appConfig.profile.avatar" :alt="`${appConfig.profile.name} Avatar`" /> <!-- 显示用户头像 -->

        <div class="info">
            <span class="name">{{ appConfig.profile.name }}</span> <!-- 显示用户名称 -->
            <span class="user-id">@{{ appConfig.profile.userId }}</span> <!-- 显示用户ID -->
        </div>

        <ButtonGroup :buttons="appConfig.profile.links" /> <!-- 使用按钮组组件显示用户的链接 -->

        <a class="sponsor-button" @click="showQrPanel = true"> <!-- 点击按钮打开二维码支付面板 -->
            <font-awesome-icon class="icon" :icon="appConfig.profile.sponsor.icon" /> <!-- 显示赞助图标 -->
            <p>{{ appConfig.profile.sponsor.prompt }}</p> <!-- 显示赞助提示文本 -->
        </a>
    </div>

    <Transition name="qr-panel"> <!-- 使用过渡效果显示或隐藏二维码面板 -->
        <div v-if="showQrPanel" class="qr-panel" @click.self="showQrPanel = false"> <!-- 显示二维码支付面板，点击面板外部关闭面板 -->
            <p class="qr-thanks">{{ appConfig.profile.sponsor.thanks }}</p> <!-- 显示感谢文本 -->
            <vue-qrcode class="qr-code" tag="svg" :value="qrCodeData" /> <!-- 使用 vue-qrcode 组件生成二维码 -->
            <ButtonGroup ref="qrToggle" :buttons="appConfig.profile.sponsor.pays" :toggle-mode="true" />
            <!-- 显示用于切换支付方式的按钮组 -->
            <a class="sponsor-list-link" href="/sponsors">Sponsor List</a> <!-- 链接到赞助者列表页面 -->
        </div>
    </Transition>
</template>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
    padding-bottom: 3rem;
}

/* 设置用户头像的样式 */
.avatar {
    border-radius: 9999px;
    outline: 25rem solid var(--bg-color-secondary);
    width: 12rem;
    height: 12rem;
    vertical-align: middle;
    transition: outline-color 0.2s ease-in-out;
}

.info {
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    line-height: 1.5;
}

.name {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 0.2rem;
}

.user-id {
    color: var(--fg-color-secondary);
    font-size: 1.25rem;
    padding: 0.2rem;
}

/* 赞助按钮的样式 */
.sponsor-button {
    line-height: 1;
    margin-top: 5rem;
    text-decoration: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    cursor: pointer;
}

/* 赞助按钮中文本的样式 */
.sponsor-button p {
    margin: 0.5rem;
    font-size: 0.8rem;
    font-weight: bold;
    transition: transform 0.2s;
    user-select: none;
}

/* 赞助按钮中图标的样式 */
.sponsor-button .icon {
    width: 3rem;
    height: 3rem;
    vertical-align: middle;
    transition: transform 0.2s;
}

/* 鼠标悬停时的放大效果 */
.sponsor-button:hover p,
.sponsor-button:hover .icon {
    transform: scale(1.2);
}

/* 过渡效果的样式 */
.qr-panel-enter-active,
.qr-panel-leave-active {
    transition: opacity 0.2s ease-in-out;
}

/* 过渡开始和结束时的透明度变化 */
.qr-panel-enter-from,
.qr-panel-leave-to {
    opacity: 0;
}

/* 二维码支付面板的样式 */
.qr-panel {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    backdrop-filter: blur(40px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.qr-thanks {
    font-weight: bold;
    font-size: 1.25rem;
    user-select: none;
}

/* 二维码的样式 */
.qr-code {
    width: 15rem;
    height: 15rem;
    border-radius: 0.5rem;
}

/* 赞助者列表链接的样式 */
.sponsor-list-link {
    position: fixed;
    bottom: 0;
    font-size: 0.75rem;
    text-decoration: underline;
    margin: 1rem;
    color: var(--fg-color-secondary);
    transition: transform 0.2s ease-in-out;
    user-select: none;
}

/* 鼠标悬停时的放大效果 */
.sponsor-list-link:hover {
    transform: scale(1.1);
}
</style>
