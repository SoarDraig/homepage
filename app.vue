<template>
  <nuxt-page />
</template>

<style>
:root {
  color-scheme: light;

  --bg-color-primary: #ffffff;
  --bg-color-secondary: #f4f4f5;
  --fg-color-primary: rgba(15, 23, 42, 1);
  --fg-color-secondary: rgba(15, 23, 42, 0.6);
  --bg-gradient: radial-gradient(circle at center 25%, rgba(255, 180, 180, 0.4), rgba(255, 180, 180, 0.1));
  /* 使用更鲜明的渐变颜色，增加透明度差异 */
}

@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;

    --bg-color-primary: #121212;
    --bg-color-secondary: #1f1f1f;
    --fg-color-primary: rgba(255, 255, 255, 0.9);
    --fg-color-secondary: rgba(255, 255, 255, 0.6);
    --bg-gradient: radial-gradient(circle at center 25%, rgba(60, 60, 60, 0.5), rgba(30, 30, 30, 0.3));
    /* 使用更深的灰色渐变，增加对比度 */
  }
}

body {
  background: var(--bg-gradient), var(--bg-color-primary);
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  color: var(--fg-color-primary);
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out, backdrop-filter 0.3s ease;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.blur-background {
  backdrop-filter: blur(15px);
  /* 增强模糊效果以提升视觉层次 */
}

svg path {
  transition: fill 0.3s ease-in-out;
}

.element-class {
  transition: transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease;
}

.element-class:hover {
  transform: scale(1.05);
  opacity: 0.8;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  /* 添加阴影以增加层次感 */
}
</style>
