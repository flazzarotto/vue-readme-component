<template>
  <div class="vue-md" v-html="htmlFromMd"></div>
</template>

<script>
import {Remarkable} from 'remarkable'
const md = new Remarkable()

export default {
  name: "ReadmeComponent",
  props: {
    mdString: String,
    htmlTransformer: {
      type: Function,
      default: html => html
    }
  },
  computed: {
    htmlFromMd() {
      return this.htmlTransformer(md.render(this.mdString))
    }
  }
}
</script>

<style scoped>

</style>