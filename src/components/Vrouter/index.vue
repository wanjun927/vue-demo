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
                <li>
                    <router-link :to="{name: 'page3', params: {id : getRandom}}">to page3</router-link>
                </li>
                <li>
                    <router-link to="Vrouter/page4">to page4</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'page5'}">to page5</router-link>
                </li>
            </ul>
        </div>
        <div>
            <transition name="fade">
            <router-view></router-view>
            </transition>
            <router-view name="a"></router-view>
            <router-view name="b"></router-view>
            <router-view name="c"></router-view>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Vrouter',
  computed: {
    getRandom () {
      return Math.floor(Math.random() * 10)
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave {
    transition: opacity .5s;
}
.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>
