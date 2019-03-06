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
      <template>
        <div>
          <v-tabs
            color="cyan"
            dark
            slider-color="yellow"
            v-model="active"
          >
            <v-tab
              v-for="(tab,key) in tabs"
              :key="key"
              ripple
            >
              <router-link :to='tab.src'>{{tab.item}}</router-link>
            </v-tab>
            <v-tab-item
              v-for="(tab,key) in tabs"
              :key="key"
            >
              <v-card flat>
                <router-view></router-view>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </div>
      </template>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Watch} from 'vue-property-decorator';
import router from '@/router';
@Component({
  components: {
    Course: () =>
      import(/* webpackChunkName: "about" */ './components/Course.vue'),
    Notes: () =>
      import(/* webpackChunkName: "about" */ './components/Notes.vue'),
    Partner: () =>
      import(/* webpackChunkName: "about" */ './components/Partner.vue'),
  }
})
export default class App extends Vue {
  public active = 0
  private tabs = [
    {
      item: '精选课程',
      src: '/'
    },
    {
      item: '教学笔记',
      src: '/notes'
    },
    {
      item: '合作伙伴',
      src: '/partner'
    }
  ];
  @Watch('active')
    private onchangeActive(val: number, oldVal: number) {
      router.push({
        path: this.tabs[val].src
      })
    }
}
</script>
<style scoped>
a {
  color: #fff;
  text-decoration: none;
}
</style>
