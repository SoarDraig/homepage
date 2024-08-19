<script setup lang="ts">
withDefaults(defineProps<{
    buttons: {
        title: string;
        icon: string[];
        href?: string;
    }[];
    toggleMode?: boolean;
}>(), {
    toggleMode: false
});

const activeIndex = ref(0);

// 设置一个随机旋转角度在 -5 到 5 之间
function getRandomRotation() {
    return (Math.random() * 10 - 5).toFixed(2); // 生成随机角度并保留两位小数
}

defineExpose({
    activeIndex
});
</script>

<template>
    <div class="buttons">
        <!-- 使用 :style 设置随机旋转角度 -->
        <a target="_blank" rel="noopener noreferrer" v-for="(btn, i) in buttons" :key="btn.title" :href="btn.href"
            :title="btn.title" :class="['button', (toggleMode && i === activeIndex) && 'active']"
            :style="{ '--random-rotation': getRandomRotation() }" @click="activeIndex = i">
            <font-awesome-icon class="icon" :icon="btn.icon" />
        </a>
    </div>
</template>

<style scoped>
.buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

.button {
    display: block;
    color: var(--fg-color-primary);
    text-decoration: none;
    line-height: 1;
    margin: 0.25rem;
    padding: 0.75rem;
    transition: box-shadow 0.2s ease-in-out;
    cursor: pointer;
}

.button.active {
    box-shadow: inset 0 -0.3rem var(--fg-color-primary);
}

.button .icon {
    width: 1.5rem;
    height: 1.5rem;
    vertical-align: middle;
    transition: transform 0.2s ease-in-out;
}

/* 使用随机旋转角度实现图标缩放时的旋转效果 */
.button:hover .icon,
.button.active .icon {
    transform: scale(1.25) rotate(calc(-5deg + 10deg * var(--random-rotation)));
}
</style>
