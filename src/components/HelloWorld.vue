<template>
  <v-flex xs12> 
    <v-card class="grey lighten-5" >
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
                <v-container
                  fill-height
                  fluid
                  pa-2
                >
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline black--text" v-text="card.title"></span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>

              <v-card-actions>
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
export default class HelloWorld extends Vue {
  private cards = [
    { title: 'Pre-fab homes', src: require('./img/banner.png'), flex: 12 },
    {
      title: 'Favorite road trips',
      src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
      flex: 6
    },
    {
      title: 'Favorite road trips1',
      src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
      flex: 6
    },
    {
      title: 'Favorite road trips2',
      src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
      flex: 6
    },
    {
      title: 'Favorite road trips3',
      src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
      flex: 6
    },
  ];
}
</script>
