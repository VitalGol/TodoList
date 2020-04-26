import firebase from 'firebase';
import '@firebase/firestore';

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
  constructor(callback) {
    this.init(callback);
  }
  init(callback) {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        callback(null, user);
      } else {
        firebase
          .auth()
          .signInAnonymously()
          .catch((error) => {
            callback(error);
          });
      }
    });
  }

  getLists(callback) {
    let ref = firebase
      .firestore()
      .collection('users')
      .doc(this.userId)
      .collection('lists');

    this.unsubscribe = ref.onSnapshot((snapshot) => {
      lists = [];
      snapshot.forEach((doc) => {
        lists.push({id: doc.id, ...doc.data()});
      });
      callback(lists);
    });
  }

  get userId() {
    return firebase.auth().currentUser.uid;
  }
}

export default Fire;
