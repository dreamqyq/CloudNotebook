<template>
  <div id="trash-detail">
    <h1>{{ msg }}</h1>
    <p>{{ $route.params.noteId }}</p>
  </div>
</template>

<script>
export default {
  name: 'TrashDetail',
  data() {
    return {
      msg: 'this is trash detail'
    }
  }
}
</script>

<style scoped>
h1{
  color: red;
}
</style>

