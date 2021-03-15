<template>
    <div>
        <h1>keep-alive</h1>
        <ul>
            <li>
                <router-link :to="{name:'page'}">to page</router-link>
            </li>
            <li>
                <router-link :to="{name:'otherPage'}">to otherPage</router-link>
            </li>
        </ul>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
