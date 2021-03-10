import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { firebaseConfig } from './config'

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
GoogleProvider.setCustomParameters({ prompt: 'select_account' })
