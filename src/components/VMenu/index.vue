<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['4']">
          <a-menu-item key="1">
             <a-icon type="user" />
            <span class="nav-text" @click="addTags">
              <!-- nav -->
              <router-link tag="span" :to="{name: 'Vmpage1'}">
                page1
              </router-link>
            </span>
          </a-menu-item>
      <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span class="nav-text" @click="addTags">
             <router-link tag="span" :to="{name: 'Vmpage2'}">
                page2
              </router-link>
          </span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span class="nav-text">nav 3</span>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="user" />
          <span class="nav-text">nav 4</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <ul v-if="showTags" class="tagList">
        <!-- <li>showtags</li> -->
        <li
        class="tagList_item"
        v-for="(item,index) in $store.state.viewTagsList" :key="index"
        @click="viewTagClick(item.name)"
        >{{item.name}}
        <button @click="deleteTag(item.name)" class="tagList_btn"></button>
        </li>
      </ul>
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          content
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data () {
    return {
      showTags: false
    }
  },
  methods: {
    onCollapse (collapsed, type) {
      console.log(collapsed, type)
    },
    onBreakpoint (broken) {
      console.log(broken)
    },
    log (e) {
      console.log(e)
    },
    addTags () {
      const route = this.$route
      this.showTags = true
      this.$store.commit('addTags', {route})
    },
    viewTagClick (rname) {
      this.$router.push({name: rname})
    },
    deleteTag (rname) {
      this.$store.commit('deleteTags', rname)
    }
  },
  computed: {
    getViewTags: function () {
      return this.$store.getters.ViewTagsList
    }
  }
}
</script>

<style>
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.tagList {
  list-style: none;
  padding: 0;
  padding: 10px 0;
}
.tagList_item {
  /* width: 100px; */
  float: left;
  padding: 0 10px;
  background-color: white;
  cursor: pointer;
}
.tagList_btn {
  outline: none;
  background-color: rgba(2, 0, 0, 0.11);
  border: none;
  border-radius: 50%;
  width: 16px;
  height: 16px;
}
.tagList_btn::after {
  content: '×';
}
</style>
