<template>
  <v-dialog v-model="dialog" width="800">
    <v-card>
      <v-card-title
        >{{ name }} ({{ startAt }} ~ {{ endAt }})
        <v-btn v-if="url" :href="url" target="_blank" icon>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>{{ description }}</v-card-text>
      <v-card-actions><v-spacer></v-spacer><v-btn>닫기</v-btn></v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
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
  @Prop() image
  @Prop() startAt
  @Prop() endAt
}
</script>

<style lang="less" scoped></style>
