<template>
    <div class="box">
        <div class="tab">
          <div class="tab-bottom"></div>
            <div class="tab-item"  ref="tabParent" v-for="(item , index) in tabHeads"  v-bind:key="item" @click="getIndex(index)" :class="(tabIndex==index)?'active':''">{{item}}</div>
        </div>  
    </div>
</template>
<script>
export default {
  data() {
    return {
      tabIndex: 0,
      width: 0,
      leftOff: 0
    };
  },
  props: {
    // 组件传参使用props
    tabHeads: Array
  },
  methods: {
    // 组件的计算方法
    getIndex(index) {
      this.tabIndex = index;
      this.$emit("showContent", index); //select事件触发后，自动触发showCityName事件
      // 游标
      this.getTab(index);
    },
    /**
     * 游标设置
     */
    getTab(index){
      this.$nextTick(function() {
        this.width = this.$refs.tabParent[index].clientWidth;
        this.leftOff = this.$refs.tabParent[index].offsetLeft;
        this.$refs.tabParent[0].parentNode.children[0].style.width =
          this.width + "px";
        this.$refs.tabParent[0].parentNode.children[0].style.left =
          this.leftOff + "px";
      });
    },
    /**
     * 窗口大小改变事件
     */
    resize() {
      this.getTab(this.tabIndex);
    }
  },
  created() {},
  mounted() {
    this.getTab(0);
    window.addEventListener("resize", this.resize);
  },
  destroyed(){
    window.removeEventListener("resize", this.resize);

  }
};
</script>

<style scoped>
.box {
  padding: 0 15px;
  margin: 0 auto;
  height: 40px;
  line-height: 40px;
  /* border: 1px solid #eee; */
}
.tab {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.tab-item {
  flex: 1;
  margin: 0 30px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
}
.active {
  /* border-bottom: 2px solid 	#FFB6C1; */
  color: #ffb6c1;
  transition: all 1s;
}
.tab-bottom {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0px;
  height: 2px;
  background: #ffb6c1;
  transition: all 0.5s;
}
</style>