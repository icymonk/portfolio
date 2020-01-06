// import { auth } from 'firebase'
export const strict = false

export const state = _ => ({
  user: null,
})

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
}

export const actions = {
  // async googleSignIn({ commit }) {
  //   try {
  //     const provider = new auth.GoogleAuthProvider()
  //     provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
  //     auth().languageCode = this.$i18n.locale
  //     this.$router.replace('/')
  //   } catch (error) {
  //     commit('SET_USER', null)
  //     auth().signOut()
  //     alert('실패')
  //   }
  // },
}
