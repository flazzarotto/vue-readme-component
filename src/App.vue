<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <ReadmeComponent :md-string="md"/>
</template>

<script>
import ReadmeComponent from "@/components/ReadmeComponent"
import md from '@/../README.md'

export default {
  name: 'App',
  components: {
    ReadmeComponent
  },
  data() {
    return {
      md
    }
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
