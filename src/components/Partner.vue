<template>
  <v-timeline>
    <v-timeline-item
      color="red lighten-2"
      large
    >
      <template v-slot:opposite>
        <span>Fcc西安社区</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">Fcc</v-card-title>
        <v-card-text>
          FCC 西安社区(freeCodeCamp 西安社区)建立两年以来，我们一直以为西安本土开发者提供一个开放交流的环境为目的，成功举办了近十次线下 Code && Coffee 活动，受到大家较为广泛的好评。这次正逢 FCC 西安社区诞生两周年，在持续酝酿下，我们特地于 FCC 西安社区两周年当日筹办这场【2018 西安 Web 前端交流大会】，为西安本土的前端工程师、开源爱好者、互联网从业人员以及对技术感兴趣的高校学生们提供一场前所未有的前端技术盛宴。此次盛会期待您的参与！
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Partner extends Vue { }
</script>

