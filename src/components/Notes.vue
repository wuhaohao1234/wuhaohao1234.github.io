<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-list two-line subheader>
          <v-subheader inset>干货</v-subheader>
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            avatar
            @click="dbClick(item.src)"
          >
            <v-list-tile-avatar>
              <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn flat icon color="blue lighten-2">
                <v-icon>thumb_up</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Notes extends Vue {
  public items = [
          {
            icon: 'folder',
            iconClass: 'grey lighten-1 white--text',
            title: 'Vue文档',
            subtitle: '对于开发者入门较快的vue教程',
            src: 'https://wuhaohao1234.github.io/Teaching'
          },
          {
            icon: 'folder',
            iconClass: 'grey lighten-1 white--text',
            title: 'typescript文档',
            subtitle: '比ts官网简单的文档',
            src: 'https://wuhaohao1234.github.io/tpescript-docs/#/'
          },
          {
            icon: 'folder',
            iconClass: 'grey lighten-1 white--text',
            title: 'react小书',
            subtitle: 'react redux入门',
            src: 'http://huziketang.mangojuice.top/books/react/'
          },
          {
            icon: 'folder',
            iconClass: 'grey lighten-1 white--text',
            title: 'promise迷你书',
            subtitle: '学习promise深入理解',
            src: 'http://liubin.org/promises-book/'
          },
          {
            icon: 'folder',
            iconClass: 'grey lighten-1 white--text',
            title: 'MDN',
            subtitle: '比w3c school好的文档,js高级',
            src: 'https://developer.mozilla.org/zh-CN/'
          },
          {
            icon: 'folder',
            iconClass: 'grey lighten-1 white--text',
            title: 'http协议',
            subtitle: '详细描述http协议，tcp,Ip协议',
            src: 'https://hit-alibaba.github.io/interview/basic/network/HTTP.html'
          },
          {
            icon: 'folder',
            iconClass: 'grey lighten-1 white--text',
            title: 'webpack4',
            subtitle: 'webpack 官网，入门简单',
            src: 'https://www.webpackjs.com/'
          },
          {
            icon: 'folder',
            iconClass: 'grey lighten-1 white--text',
            title: 'npm基础',
            subtitle: 'npm详细，发布与使用npm包',
            src: 'https://my.oschina.net/fenying/blog/1607571'
          },
          {
            icon: 'folder',
            iconClass: 'grey lighten-1 white--text',
            title: 'git教程',
            subtitle: '很好的git教程',
            src: 'https://my.oschina.net/fenying/blog/1607571'
          },
          {
            icon: 'folder',
            iconClass: 'grey lighten-1 white--text',
            title: '前端面试基础',
            subtitle: '基础篇',
            src: 'http://blog.poetries.top/FE-Interview-Questions/'
          },
          {
            icon: 'folder',
            iconClass: 'grey lighten-1 white--text',
            title: '设计模式',
            subtitle: '常用的设计模式文档',
            src: 'https://godbmw.com/design-patterns/'
          },
          {
            icon: 'folder',
            iconClass: 'grey lighten-1 white--text',
            title: 'git commit',
            subtitle: 'git 提交规范',
            src: 'https://github.com/wuhaohao1234/learncommitizen-'
          },
          {
            icon: 'folder',
            iconClass: 'grey lighten-1 white--text',
            title: '持续集成工具',
            subtitle: 'travis-ci circle-ci',
            src: 'http://www.ruanyifeng.com/blog/2015/09/continuous-integration.html'
          },
          {
            icon: 'folder',
            iconClass: 'grey lighten-1 white--text',
            title: '阮一峰个人博客',
            subtitle: '较好的博客',
            src: 'http://www.ruanyifeng.com'
          },
          {
            icon: 'folder',
            iconClass: 'grey lighten-1 white--text',
            title: '廖雪峰个人博客',
            subtitle: 'git python js java教程',
            src: 'https://www.liaoxuefeng.com/'
          },
        ]


  public dbClick(src: string) {
    window.open(src)
  }
}
</script>

<style scoped>
a{
  display: block;
  text-decoration: none;
}
</style>
