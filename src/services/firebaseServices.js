import firebase from 'firebase'

export default {
  createUser(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  },
  signIn(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  },
  signOut() {
    return firebase.auth().signOut()
  },
  addJMTZ({ rootState }, payload) {
    return firebase
      .database()
      .ref('users')
      .child(rootState.user.user.user.uid)
      .push(payload)
  },
  getJMTZ({ rootState }) {
    return firebase.database().ref('users/' + rootState.user.user.user.uid)
  }
}
