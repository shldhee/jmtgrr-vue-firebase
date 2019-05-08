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
  addJMTZ({ state }, payload) {
    return firebase
      .database()
      .ref('users')
      .child(state.user.user.uid)
      .push(payload)
  }
}
