<template>
    <div>
        <h1>keep-alive</h1>
        <button
        v-for="(item,index) of tabs"
        :key="index"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="currentTab = tab"
        ></button>
        <keep-alive>
            <component v-bind:is="currentTabComponent" class="tab"></component>
        </keep-alive>
    </div>
</template>

<script>
import TabsPost from './tabs-post'
import TabsArchive from './tabs-archive'
export default {
  data () {
    return {
      currentTab: 'Posts',
      tabs: ['Posts, Archive']
    }
  },
  components: {
    TabsPost,
    TabsArchive
  },
  computed: {
    currentTabComponent: function () {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  }
}
</script>

<style scoped>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
