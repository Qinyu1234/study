<template>
  <div id="app">
    <input type="text" value="测试" disabled>
    <HintButton title="添加" test="plus" size="mini" icon="el-icon-plus"/>
  </div>
</template>

<script>
import HintButton from "@/components/HintButton";
export default {
  name: 'App',
  components: {
    HintButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
