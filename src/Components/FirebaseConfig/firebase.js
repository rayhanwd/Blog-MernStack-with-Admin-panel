import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBu63hjxY_xSIYMR47QyE2Qp0itZgoJBf0",
  authDomain: "techblo.firebaseapp.com",
  projectId: "techblo",
  storageBucket: "techblo.appspot.com",
  messagingSenderId: "283211036315",
  appId: "1:283211036315:web:13d250e55144ee9eedf83e"
})

export const auth = app.auth()
export default app