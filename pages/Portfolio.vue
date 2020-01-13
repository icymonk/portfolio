<template>
  <v-layout row fill-height>
    <v-flex v-for="company in companies" :key="company.title" xs12 sm4>
      <v-hover v-slot:default="{ hover }">
        <v-card
          @click="openCompanyDialog(company)"
          :style="{ opacity: hover ? 1 : 0.5 }"
          height="100%"
          flat
        >
          <v-card-text class="px-4">
            <v-img
              :src="company.logo"
              contain
              height="120"
              class="my-4"
            ></v-img>
            {{ company.name }} {{ company.description }}</v-card-text
          >
          <!-- <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn outlined="">프로젝트 보기</v-btn>
        </v-card-actions> -->
        </v-card>
      </v-hover>
    </v-flex>
    <company-dialog
      v-model="companyDialog"
      v-bind="currentCompany"
      @openProjectDialog="openProjectDialog"
    ></company-dialog>
    <project-dialog
      v-model="projectDialog"
      v-bind="currentProject"
      @openImageDialog="openImageDialog"
    ></project-dialog>
    <!-- <image-viewer v-model="imageDialog" :src="currentImage"></image-viewer> -->
  </v-layout>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import CompanyDialog from '@/components/CompanyDialog'
import ProjectDialog from '@/components/ProjectDialog'
import ImageViewer from '@/components/ImageViewer'

@Component({ components: { CompanyDialog, ProjectDialog, ImageViewer } })
export default class Portfolio extends Vue {
  companies = [
    {
      name: 'DDH',
      description: '의료 인공지능',
      url: 'http://www.ddhinc.net',
      logo: '/DDH_LOGO.png',
      projects: [
        {
          name: 'CEPPRO',
          description:
            '세팔로 사진을 통해 80개의 계측점을 1초 이내에 예측해주는 서비스',
          subDescriptions: ['유지보수'],
          techStack: ['Sails.js', 'AngularJS'],
          images: [
            '/CEPPRO_LOGIN.PNG',
            '/CEPPRO_MAIN.PNG',
            '/CEPPRO_PREDICT.PNG',
            '/CEPPRO_ANALYSIS.PNG',
          ],
          startAt: '2019-01',
          endAt: null,
        },
        {
          name: 'DDHAIM Cloud',
          description: '치과의사 - 치기공소를 연결해주는 플랫폼',
          subDescriptions: ['기여도(설계: 50%, 개발: 100%)'],
          techStack: [
            'Nuxt.js',
            'Vue.js',
            'Express',
            'Sequelize',
            'MySQL',
            'AWS',
          ],
          images: [
            '/DDHAIM_ADMIN.PNG',
            '/DDHAIM_AGREEMENT.PNG',
            '/DDHAIM_DIAGNOSIS.PNG',
            '/DDHAIM_LOGIN.PNG',
            '/DDHAIM_MAIN.PNG',
            '/DDHAIM_PATIENT.PNG',
            '/DDHAIM_PRINT.PNG',
            '/DDHAIM_REQUEST.PNG',
          ],
          startAt: '2019-08',
          endAt: null,
        },
        {
          name: 'DEEP:STACK',
          description: '기계학습을 위한 2D 데이터 수집용 라벨링 툴',
          subDescriptions: ['개발 100%'],
          techStack: [
            'Nuxt.js',
            'Vue.js',
            'Express',
            'Sequelize',
            'MySQL',
            'AWS',
          ],
          images: [
            '/DEEPSTACK_LOGIN.PNG',
            '/DEEPSTACK_MAIN.PNG',
            '/DEEPSTACK_PERIAPICAL_LESION.PNG',
            '/DEEPSTACK_PREDICT.PNG',
            '/DEEPSTACK_PROJECT.PNG',
            '/DEEPSTACK_SLEEPAPNEA.PNG',
          ],
          startAt: '2019-01',
          endAt: null,
        },
      ],
      startAt: '2019-01',
      endAt: null,
    },
    {
      name: 'MYFIT',
      description: '온라인에서 의류 사이즈를 추천해주는 서비스',
      url: 'https://www.myfit.xyz',
      logo: '/MYFIT_LOGO.png',
      projects: [
        {
          name: '의류 추천 로직',
          description:
            '의류 추천 로직 개발 및 로직 결과를 확인할 수 있는 툴킷 개발',
          subDescriptions: ['개발 100%', '총 12개 종류의 로직'],
          techStack: ['Javascript'],
          images: [
            '/MYFIT_DEFINE1.PNG',
            '/MYFIT_DEFINE2.PNG',
            '/MYFIT_DEFINE3.PNG',
            '/MYFIT_TOOLKIT1.PNG',
            '/MYFIT_TOOLKIT2.PNG',
            '/MYFIT_TOOLKIT3.PNG',
          ],
          startAt: '2018-10',
          endAt: '2019-01',
        },
        {
          name: '고객사 관리자 페이지',
          description: '의종별 의류 등록 및 관리할 수 있는 페이지',
          subDescriptions: ['개발 100%'],
          techStack: ['Express', 'Sequelize', 'MySQL', 'GCP'],
          images: [
            '/MYFIT_ADMIN_NOTICE.PNG',
            '/MYFIT_ADMIN_PROFILE.PNG',
            '/MYFIT_ADMIN_ITEM.PNG',
          ],
          startAt: '2019-08',
          endAt: null,
        },
        {
          name: '의류 추천 모달',
          description:
            '키, 나이, 몸무게, 성별 등을 입력하면 의류를 추천해주는 모달',
          subDescriptions: ['유지보수'],
          techStack: ['React'],
          images: ['/MYFIT_MODAL1.PNG', '/MYFIT_MODAL_RESULT.PNG'],
          startAt: '2019-01',
          endAt: null,
        },
      ],
      startAt: '2018-03',
      endAt: '2019-01',
    },
    {
      name: 'Pandaz',
      description: '인스타 + 상점 형태의 서비스(서비스종료)',
      url: null,
      logo: '/PANDAZ_LOGO.png',
      projects: [
        {
          name: '어드민 페이지',
          description: '서비스 관리 어드민 페이지',
          subDescriptions: [
            '기여도 100%',
            'Core UI + Angular 4 를 이용한 Pandaz 관리자 페이지',
            'Firebase Realtime DB(NoSQL)을 이용하다보니 DB Writing과 Pagination이 불편함',
            '데이터 구조에 따라 Fanout이 복잡해짐',
            'Cloud Functions에서 아임포트를 통해 결제 프로세스 개발',
            'GCP cron과 택배 API를 이용하여 주기적으로 API조회값과 DB비교를 통해 구매완료 체크',
          ],
          techStack: ['Firebase', 'Angular4'],
          images: [
            '/PANDAZ_USER_LIST.PNG',
            '/PANDAZ_USER.PNG',
            '/PANDAZ_PAYMENT.PNG',
          ],
          startAt: '2017-08',
          endAt: '2018-03',
        },
        {
          name: '웹버전 프로토타입',
          description: '앱 -> 웹으로 이전하기위한 초기 프로토타입',
          subDescriptions: [
            '기여도 100%',
            'https://cj-practice.firebaseapp.com/',
            'Storage가 만료되어 이미지가 뜨지 않음',
            'Hashtag 파싱이 조건이 까다로웠음',
          ],
          techStack: ['Firebase', 'Vue.js'],
          images: ['/PANDAZ_POST_LIST.PNG', '/PANDAZ_POST.PNG'],
          startAt: '2018-01',
          endAt: '2018-03',
        },
      ],
      startAt: '2017-08',
      endAt: '2018-03',
    },
  ]

  imageDialog = false
  currentImage = null
  openImageDialog(image) {
    this.currentImage = image
    this.imageDialog = true
  }

  companyDialog = false
  currentCompany = null
  openCompanyDialog(company) {
    this.currentCompany = company
    this.companyDialog = true
  }

  projectDialog = false
  currentProject = null
  openProjectDialog(project) {
    console.log(project)
    this.currentProject = project
    this.projectDialog = true
  }
}
</script>
