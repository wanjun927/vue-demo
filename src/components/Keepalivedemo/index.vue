<template>
    <div>
        <h1>keep-alive</h1>
        <ul class="item">
            <li class="item_list">
                <router-link class='item_link' :to="{name:'page'}">to page</router-link>
            </li>
            <li class="item_list">
                <router-link class='item_link' :to="{name:'otherPage'}">to otherPage</router-link>
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
.item {
    list-style: none;
}
.item_list {
    font-size: 30px;
    margin-bottom: 10px;
}
.item_link {
    text-decoration: none;
    color: rgb(88, 146, 101);
}
</style>
