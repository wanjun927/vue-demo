<template>
    <div>
        <h1>router</h1>
        <div>
            <ul>
                <li>
                    <router-link :to="{name: 'page1'}">to page1</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'page2'}">to page2</router-link>
                </li>
            </ul>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Vrouter'
}
</script>

<style scoped>

</style>
