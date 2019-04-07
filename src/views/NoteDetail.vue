<template>
  <div id="note-detail">
    <h1>{{ msg }}</h1>
    <p>{{ $route.params.noteId }}</p>
  </div>
</template>

<script>
export default {
  name: 'NoteDetail',
  data() {
    return {
      msg: 'this is Note'
    }
  }
}
</script>

<style scoped>
h1{
  color: red;
}
</style>

