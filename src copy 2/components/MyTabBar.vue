<template>

  <div class="my-tab-bar">
    <div
      class="tab-item"
      :class="{ current: current == index }"
      v-for="(item, index) in list"
      :key="item.componentName"
      @click="btn(index,item.componentName)"
    >
      <span class="iconfont" :class="item.iconText"></span>

      <span>{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
    };
  },
  props: {
    list: {
      type: Array,
      default: () => [],
      validator(val) {
        if (val.length >= 2 && val.length <= 5) {
          return true;
        } else {
          return false;
        }
      },
    },
  },
  methods: {
    // btn(path,name){
    //   this.$router.push({
    //     name: name,
    //   }

    //   )
    // }
    btn(index, name) {
      this.current = index;
      this.$router.push({
        name: name,
      })
      /*  this.$emit("change", this.list[val].componentName);
      console.log(this.list[val].componentName); */
      // this.$parent.comName = this.list[val].componentName;
    },
  },
};
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
}

.current {
  color: #1d7bff;
}
</style>
