<template>
    <div class="container">
        <div>
            <input type="radio" id="all" value="all" v-model="visibility">
            <label for="all">all</label>
            <input type="radio" id="completed" value="completed" v-model="visibility">
            <label for="completed">completed</label>
            <input type="radio" id="unCompleted" value="unCompleted" v-model="visibility">
            <label for="unCompleted">unCompleted</label>
        </div>
        <ul class="list">
            <transition-group name="fade">
                <li
                class="list_item"
                v-for="(item,index) of filterData()"
                :key="item.id"
                >
                    <span class="list_content" :class="{complete_item: item.done}">{{item.content}}</span>
                    <button class="btn del_btn" @click="deleteItem(index)">delete</button>
                    <button class="btn com_btn" @click="completeItem(index)">complete</button>
                </li>
            </transition-group>
        </ul>
        <!-- <div>{{filterData()}}</div> -->
    </div>
</template>

<script>
export default {
  data () {
    return {
      showComplete: false,
      visibility: 'all'
    }
  },
  methods: {
    deleteItem (index) {
      this.$store.commit('delete', index)
    },
    completeItem (index) {
      console.log('complete')
      this.$store.commit('complete', index)
    },
    showDone () {
      alert('hello')
    }
  },
  computed: {
    filterData: function () {
      var filter = {
        all: function () {
          return this.$store.getters.listInfo
        },
        completed: function () {
          return this.$store.getters.listInfo.filter(item => {
            if (item.done) {
              return item
            }
          })
        },
        unCompleted: function () {
          return this.$store.state.list.filter(item => {
            if (!item.done) {
              return item
            }
          })
        }
      }
      console.log(filter[this.visibility])
      return filter[this.visibility]
    }
  }
}
</script>

<style scoped>
.list {
    /* width: 800px; */
    list-style: none;
    padding: 0 20px;
}
.list_item {
    /* width: 300px; */
    position: relative;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    font-weight: bold;
    background-color:#e9fdf4;
    margin-bottom: 10px;
}
.list_content {
    color: black;
    display: inline-block;
    padding: 0 20px;
}
.btn {
    outline: none;
    background-color: #5FB878;
    border: none;
    border-radius: 5%;
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    width: 100px;
    top: 50%;
    transform: translateY(-50%);
}
.com_btn {
    right: 20px;
}
.del_btn {
    right: 150px;
}
.complete_item {
    text-decoration: line-through;
    opacity: .5;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity .2s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
