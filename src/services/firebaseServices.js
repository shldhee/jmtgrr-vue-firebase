import firebase from 'firebase'
import 'firebase/storage'

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
    let imageUrl
    const myRef = firebase
      .database()
      .ref('users')
      .child(rootState.user.user.user.uid)
      .push()

    const key = myRef.key

    // const filename = payload.image.name
    // const ext = filename.slice(filename.lastIndexOf('.'))

    return firebase
      .storage()
      .ref('/users')
      .child(rootState.user.user.user.uid + `/${key}`)
      .put(payload.image)
      .then(snapshot => {
        snapshot.ref.getDownloadURL().then(function(downloadURL) {
          imageUrl = downloadURL
          const newPayload = {
            ...payload,
            id: key,
            imageUrl: imageUrl
          }

          return firebase
            .database()
            .ref('users')
            .child(rootState.user.user.user.uid + `/${key}`)
            .set(newPayload)
        })
      })
  },
  getJMTZ({ rootState }) {
    return firebase.database().ref('users/' + rootState.user.user.user.uid)
  },
  getAllJMTZ() {
    return firebase.database().ref('users/')
  },
  removeJMTZ({ rootState }, payload, key) {
    return firebase
      .storage()
      .ref('/users')
      .child(rootState.user.user.user.uid + `/${key}`)
      .delete()
      .then(() => {
        return firebase
          .database()
          .ref('users')
          .child(rootState.user.user.user.uid)
          .set(payload)
      })
  }
}
