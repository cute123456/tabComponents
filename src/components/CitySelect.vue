<template>
<div >
  <select @change="getCityList(provinceSelected)" v-model="provinceSelected">
    <option value="" selected disabled>请选择省份</option>
    <option  v-for="province in provinceData" :key="province.code">{{province.name}}</option>
  </select>
    <select @change="getAreaList(citySelected)" v-model="citySelected">
    <option value="" selected disabled>请选择城市</option>
    <option  v-for="city in cityData" :key="city.code">{{city.name}}</option>
  </select>
    <select  v-model="areaSelected">
    <option value="" selected disabled>请选择区域</option>
    <option  v-for="area in areaData" :key="area.code">{{area.name }}</option>    
  </select>
</div>
</template>

<script>
import Vue from "vue";
var city = require("@/assets/city.json");
export default {
  data() {
    return {
      provinceData: [],
      cityData: [],
      areaData: [],
      provinceSelected: "",
      citySelected: "",
      areaSelected: ""
    };
  },
  created() {
    this.provinceData = city;
    // console.log(this.provinceData)
  },
  methods: {
    /**
     * 选择省份
     */
    getCityList(name) {
      this.areaData = [];
      let cityData = this.provinceData.find(item => {
        return item.name == name;
      });
      this.citySelected = "";
      this.areaSelected = "";
      this.cityData = cityData.children;
    },

    /**
     * 选择城市
     */
    getAreaList(name) {
      this.areaSelected = "";
      let cityData = this.cityData.find(item => {
        return item.name == name;
      });
      this.areaData = cityData.children;
    },
    /**
     * 获取地址名称
     */

    isComplete() {
      if (this.provinceSelected && this.citySelected && this.areaSelected) {
        this.$emit(
          "showCityName",
          this.provinceSelected.concat(this.citySelected, this.areaSelected)
        );
      }
    }
  },

  watch: {
    areaSelected: {
      handler: function(val, old) {
        this.isComplete();
      },
      deep: true //对象内部的属性监听，也叫深度监听
    }
  }
};
</script>
<style scoped>
select {
  height: 30px;
  line-height: 30px;
  padding-left: 5px;
  padding-right: 20px;
  background: url("~@/public/img/arrows.png") no-repeat scroll right transparent;
  background-size: 15px;
  -webkit-appearance: 12 !important;
}
select {
}
</style>

