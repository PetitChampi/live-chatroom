import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD-StLHLWQ1hlPL0VTHd-a7enxXhSVroSs",
  authDomain: "greenhouse-blog.firebaseapp.com",
  projectId: "greenhouse-blog",
  storageBucket: "greenhouse-blog.appspot.com",
  messagingSenderId: "416286372332",
  appId: "1:416286372332:web:35239a3bf88e1ba600d0c9"
}

// init firebase
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }