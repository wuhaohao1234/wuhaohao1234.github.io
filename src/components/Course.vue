<template>
  <v-flex xs12> 
    <v-card class="" >
      <v-container
        fluid
        grid-list-md
      >
        <v-layout row wrap>
          <v-flex
            v-for="card in cards"
            :key="card.title"
            v-bind="{ [`xs${card.flex}`]: true }"
          >
            <v-card>
              <v-img
                :src="card.src"
                height="200px"
              >
                <a :href="card.href" target="_blank">
                  <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                  </v-container>
                </a>
                
              </v-img>
              <v-card-actions>
                <v-layout fill-height>
                    <v-flex text-xs-center xs12 align-end flexbox>
                      <span class="headline blue--text text-light-4" v-text="card.title"></span>
                    </v-flex>
                </v-layout>
                <v-spacer></v-spacer>
                <v-btn icon> 
                  <v-icon>favorite</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>bookmark</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>share</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Course extends Vue {
  private cards = [
    {
      title: 'bilibili课程',
      src: require('./img/banner.png'),
      flex: 12 ,
      href: 'https://space.bilibili.com/295658400'} ,
    {
      title: 'typescript课程',
      src: require('./img/typescript.jpg'),
      flex: 12,
      href: 'https://www.bilibili.com/video/av44775917',
    },
    {
      title: 'vue课程',
      src: require('./img/vue.jpg'),
      flex: 12,
      href: 'https://www.bilibili.com/video/av35994303',
    },
  ]
}
</script>

<style scoped>
a{
  text-decoration: none;
}
</style>
