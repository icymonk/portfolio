<template>
  <v-card>
    <v-card-title
      >{{ name }} ({{ startAt }} ~ {{ endAt }})
      <v-btn v-if="url" :href="url" target="_blank" icon>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-card-title>

    <v-divider></v-divider>

    <v-card-text class="my-4"
      >{{ description }}
      <v-carousel
        height="540"
        hide-delimiter-background
        show-arrows-on-hover
        cycle
        interval="5000"
        class="my-4"
      >
        <v-carousel-item
          v-for="image in images"
          :key="image"
          :src="image"
          @click="openImageDialog(image)"
          :href="image"
          target="_blank"
        >
        </v-carousel-item>
      </v-carousel>
      <ul class="mb-4">
        <li v-for="description in subDescriptions" :key="description">
          {{ description }}
        </li>
      </ul>

      <p>사용 기술: {{ techStack.join(', ') }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator'

@Component
export default class ProjectCard extends Vue {
  @Emit('openImageDialog') openImageDialog(image) {
    return image
  }

  @Prop() name
  @Prop() description
  @Prop() url
  @Prop() subDescriptions
  @Prop({ default: _ => [] }) techStack
  @Prop() images
  @Prop() startAt
  @Prop() endAt
}
</script>

<style lang="less" scoped></style>
