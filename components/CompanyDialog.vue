<template>
  <v-dialog v-model="dialog" width="1000">
    <v-card>
      <v-card-title
        >{{ name }} ({{ startAt }} ~ {{ endAt }})
        <v-btn v-if="url" :href="url" target="_blank" icon>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <p class="">
          {{ description }}
        </p>

        <v-tabs v-model="currentProject" dark>
          <v-tab
            v-for="project in projects"
            :key="project.name"
            :href="`#tab-${project.name}`"
          >
            {{ project.name }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="currentProject">
          <v-tab-item
            v-for="project in projects"
            :key="project.name"
            :value="`tab-${project.name}`"
          >
            <p class="my-2">
              {{ project.description }}
            </p>
            <v-carousel
              height="540"
              show-arrows-on-hover
              cycle
              interval="5000"
              class="my-4"
            >
              <v-carousel-item
                v-for="image in project.images"
                :key="image"
                :src="image"
                :href="image"
                target="_blank"
              >
              </v-carousel-item>
            </v-carousel>
            <ul class="mb-4">
              <li
                v-for="description in project.subDescriptions"
                :key="description"
              >
                {{ description }}
              </li>
            </ul>

            <p>사용 기술: {{ project.techStack.join(', ') }}</p>
          </v-tab-item>
        </v-tabs-items>
      </v-card-text>
      <v-card-actions
        ><v-spacer></v-spacer
        ><v-btn @click="dialog = false" outlined>닫기</v-btn></v-card-actions
      >
    </v-card>
  </v-dialog>
</template>

<script>
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import ProjectCard from './ProjectCard'

@Component({
  components: { ProjectCard },
  watch: {
    dialog(v) {
      if (v) this.currentProject = 'tab-' + this.projects[0].name
    },
  },
})
export default class CompanyDialog extends Vue {
  @Prop() value
  get dialog() {
    return this.value
  }
  set dialog(value) {
    this.$emit('input', value)
  }

  @Prop() name
  @Prop() description
  @Prop() url
  @Prop() logo
  @Prop() startAt
  @Prop() endAt
  @Prop() projects

  currentProject = ''
}
</script>

<style lang="less" scoped></style>
