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
    const myRef = firebase
      .database()
      .ref('users')
      .child(rootState.user.user.user.uid)
      .push()

    const key = myRef.key
    const newPayload = {
      ...payload,
      id: key
    }
    return myRef.push(newPayload)
  },
  getJMTZ({ rootState }) {
    return firebase.database().ref('users/' + rootState.user.user.user.uid)
  }
}
