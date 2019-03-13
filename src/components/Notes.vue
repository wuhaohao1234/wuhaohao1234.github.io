<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-text-field
        label="输入想看的文章"
        single-line
        v-model="myInp"
      ></v-text-field>
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
import { Component, Vue, Watch } from 'vue-property-decorator';
import Config from '../config'
@Component({})
export default class Notes extends Vue {
  public items = Config.items
  public myInp: string = ''
  @Watch('myInp')
  public onInp(val: string, oldVal: string) {
    let itemsArr = this.items
    itemsArr = []
    this.items.forEach((item) => {
      if (item.title.includes(val)) {
        itemsArr.push(item)
      }
    })
    this.items = itemsArr
    if (val === '') {
      this.items = Config.items
    }
  }
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
