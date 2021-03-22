<template>
    <div>
        <h1>page4</h1>
        <!-- 字符串 -->
        <router-link to="/apple">to page</router-link>
        <!-- 对象 -->
        <router-link :to="{path: '/apple'}">to page</router-link>
        <!-- 命名路由 -->
        <router-link :to="{name: 'applename'}">to page</router-link>
        <!-- 直接路由带查询参数 query, 地址栏变成 /apple?color=red -->
        <router-link :to="{path: '/apple', query: {color: 'red'}}">to page</router-link>
        <!-- 命名路由带查询参数 query, 地址栏变成 /apple?color=red -->
        <router-link :to="{name: 'applename', query: {color: 'red'}}">to page</router-link>
        <!-- 直接路由带路由参数 params, params不生效，如果提供path, params会被忽略 -->
        <router-link :to="{path: '/apple', params: {color: 'red'}}">to page</router-link>
        <!-- 命名路由带路由参数 params, 地址栏是 /apple/red -->
        <router-link :to="{name: 'applename', params: {color: 'red'}}">to page</router-link>
    </div>
</template>

<script>
export default {
  name: 'page4'
}
</script>
