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
            @click=""
          >
            <v-list-tile-avatar>
              <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
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
            title: 'Photos',
            subtitle: 'Jan 9,2014'
          },
          {
            icon: 'folder',
            iconClass: 'grey lighten-1 white--text',
            title: 'Phossstos',
            subtitle: 'Jan 9,2014'
          },
          {
            icon: 'folder',
            iconClass: 'grey lighten-1 white--text',
            title: 'Phosstos',
            subtitle: 'Jan 9,2014'
          },
          {
            icon: 'folder',
            iconClass: 'grey lighten-1 white--text',
            title: 'Phsotos',
            subtitle: 'Jan 9,2014'
          },
        ]
}
</script>

