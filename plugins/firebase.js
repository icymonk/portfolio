import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
  firebase.analytics()
}

export default ({ store }) => {
  firebase.auth().onAuthStateChanged(user => {
    if (!user) {
      store.commit('SET_USER', null)
      return
    }
    store.commit('SET_USER', user)
  })
}
