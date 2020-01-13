<template>
  <v-dialog v-model="dialog" width="800">
    <v-card>
      <v-card-title
        >{{ name }} ({{ startAt }} ~ {{ endAt }})
        <v-btn v-if="url" :href="url" target="_blank" icon>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        {{ description }}
        <v-layout row wrap justify-center align-center>
          <v-card
            v-for="project in projects"
            :key="project.name"
            @click="openProjectDialog(project)"
            width="200"
            height="200"
            class="ma-4"
          >
            <v-card-title>{{ project.name }}</v-card-title>
          </v-card>
        </v-layout>
      </v-card-text>
      <v-card-actions
        ><v-spacer></v-spacer
        ><v-btn @click="dialog = false" outlined>닫기</v-btn></v-card-actions
      >
    </v-card>
  </v-dialog>
</template>

<script>
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator'
import ProjectDialog from './ProjectDialog'

@Component({
  components: { ProjectDialog },
})
export default class CompanyDialog extends Vue {
  @Prop() value
  get dialog() {
    return this.value
  }
  set dialog(value) {
    this.$emit('input', value)
  }

  @Emit('openProjectDialog') openProjectDialog(project) {
    return project
  }

  @Prop() name
  @Prop() description
  @Prop() url
  @Prop() logo
  @Prop() startAt
  @Prop() endAt
  @Prop() projects
}
</script>

<style lang="less" scoped></style>
