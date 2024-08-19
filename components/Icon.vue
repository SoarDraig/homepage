<template>
    <img :src="`/public/test.jpg`" alt="" class="h-6 w-6" />
</template>

<script setup>
const props = defineProps({
    icon: {
        type: String,
        required: true,
    },
})
</script>
