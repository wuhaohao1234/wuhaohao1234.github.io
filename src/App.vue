<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase" >
        <span>阿布WEB</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/wuhaohao1234"
        target="_blank"
        color="primary"
      >
        <span class="mr-2">go github</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
    HelloWorld: () => import(/* webpackChunkName: "about" */ './components/HelloWorld.vue')
  }
})
export default class App extends Vue {}
</script>
