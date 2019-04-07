<template>
  <div id="notebook-list">
    <h1>{{ msg }}</h1>
    <ul>
      <li><rout-link to="/note/1">笔记本1</rout-link></li>
      <li><rout-link to="/note/4">笔记本4</rout-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NotebooksList',
  data() {
    return {
      msg: 'Notebooks List'
    }
  }
}
</script>

<style scoped>
h1{
  color: red;
}
</style>

