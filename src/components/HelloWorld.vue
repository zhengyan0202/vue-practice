<template>
  
  <div class="hello">
      <button @click="test1">测试</button>
      <div>
        <div>num1:{{ num1 }}</div>
        <div>num2: {{ num2 }}</div>
        <div>obj1.name: {{ obj1.name}}</div>
        <div>obj2.name: {{ obj2.name }}</div>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      num1: 1,
      num2: null,
      num3: 3,
      obj1: {},
      obj2: {},
      count: ["panda","monkey","dog"],
    }
  },
  methods: {
    test1(){
      this.num2 = this.num1;
      this.num1 = 10;
      this.obj1 = {
        name: "zyan"
      }
      this.obj2 = this.obj1;
      this.obj1 = {
        name: "zhangdan"
      }
    }
  }
}
</script>
<style scoped>

</style>
