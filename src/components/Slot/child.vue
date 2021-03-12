<template>
    <div>
        slot son page
        <slot>
            <p>当父组件调用我时，没有传自定义内容时，我就会显示了，如果传了自定义内容，我就不显示了。</p>
        </slot>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
