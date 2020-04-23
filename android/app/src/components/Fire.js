import firebase from '@react-native-firebase/app';
import '@react-native-firebase/app/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyAHvBU0iGnFoLAVmkRE2jMorseciy_i3F0',
  authDomain: 'todolists-39f29.firebaseapp.com',
  databaseURL: 'https://todolists-39f29.firebaseio.com',
  projectId: 'todolists-39f29',
  storageBucket: 'todolists-39f29.appspot.com',
  messagingSenderId: '630788139422',
  appId: '1:630788139422:web:281be7856786a9aa72ce8f',
};
// Initialize Firebase
class Fire {
  init() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
      } else {
        firebase
          .auth()
          .signInAnonymously()
          .catch((error) => {});
      }
    });
  }
}

export default Fire;
