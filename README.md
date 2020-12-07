# vue-readme-component

Vue 3 component to render .md string or file as html.

## Usage:

```vue
<template>
  <ReadmeComponent :md-string="md"
                   :myHtmlTransformer="htmlTransformer"/>
</template>

<script>
import ReadmeComponent from "@/kebab-case/vue-readme-component"
import md from 'README.md'

export default {
  name: 'App',
  components: {
    ReadmeComponent
  },
  data() {
    return {
      md,
      htmlTransformer: (html) => {
        return html.replace(/<(\/?)ul>/g,'<$1ol>')
      }
    }
  }
}
</script>
```

## Html Transformer

You can use any function of your to process html before rendering.

## Global css

You can use the `.vue-md` class to select only .md rendered in your website.


-----------------------------------------
## Powered by @kebab-case/npm-simple-publisher

This package has been brought to you by **npm-simple-publisher**

This little nodejs command-line script allows you to easily compile and publish node **and** es6 compliant code 
packages to npm. Init your project with minimal babel configuration for es6, compile to cjs and 
publish to npm with only two commands.

Try it now:

```shell script
sudo apt install yarn
sudo npm install -g @kebab-case/npm-simple-publisher
mkdir my_project
cd my_project
# getting help about command
kc-nsp -h # list of command modules
kc-nsp init -h # and so on
# getting started
kc-nsp init -f # create project 
# ... do things in my_project/src, using proposed build or your own (not npm-friendly)
kc-nsp publish -t M|m|r # publish new Major / minor version or revision
```

Basically, that's all!

Find on npm: https://www.npmjs.com/package/@kebab-case/npm-simple-publisher