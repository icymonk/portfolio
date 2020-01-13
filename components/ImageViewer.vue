<template>
  <v-dialog v-model="dialog" fullscreen scrollable>
    <v-img :src="src" contain></v-img>
  </v-dialog>
</template>

<script>
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class ProjectDialog extends Vue {
  @Prop() value
  get dialog() {
    return this.value
  }
  set dialog(value) {
    this.$emit('input', value)
  }

  @Prop() name
  @Prop() description
  @Prop() src
}
</script>

<style lang="less" scoped></style>
