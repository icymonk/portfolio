<template>
  <v-container fill-height class="pa-6">
    <v-layout row justify-center align-center justify-space-between="">
      <v-card
        v-for="company in companies"
        :key="company.title"
        @click="openCompanyDialog(company)"
        width="400"
        flat
        hover
        style="border: 1px solid grey"
      >
        <v-card-text class="px-4">
          <v-img :src="company.image" contain height="120" class="my-4"></v-img>
          {{ company.name }} {{ company.description }}</v-card-text
        >
        <!-- <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn outlined="">프로젝트 보기</v-btn>
        </v-card-actions> -->
      </v-card>
    </v-layout>
    <company-dialog
      v-model="companyDialog"
      v-bind="currentCompany"
    ></company-dialog>
  </v-container>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import CompanyDialog from '@/components/CompanyDialog'

@Component({ components: { CompanyDialog } })
export default class Portfolio extends Vue {
  companies = [
    {
      name: 'DDH',
      description: '의료 인공지능',
      url: 'http://www.ddhinc.net',
      image: '/DDH_LOGO.png',
      startAt: '2019-01',
      endAt: null,
    },
    {
      name: 'MYFIT',
      description: '온라인에서 의류 사이즈를 추천해주는 서비스',
      url: 'https://www.myfit.xyz',
      image: '/MYFIT_LOGO.png',
      startAt: '2018-03',
      endAt: '2019-01',
    },
    {
      name: 'Pandaz',
      description: '인스타 + 상점 형태의 서비스(서비스종료)',
      url: null,
      image: '/PANDAZ_LOGO.png',
      startAt: '2017-08',
      endAt: '2018-03',
    },
  ]

  openCompanyDialog(company) {
    this.currentCompany = company
    this.companyDialog = true
  }

  companyDialog = false
  currentCompany = null
}
</script>
