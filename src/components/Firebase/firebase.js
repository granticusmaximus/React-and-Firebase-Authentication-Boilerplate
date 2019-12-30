import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAgbJK0u7hOlvRzGA9XH1XFzuIIF_5EEJg",
  authDomain: "initialreact-2f991.firebaseapp.com",
  databaseURL: "https://initialreact-2f991.firebaseio.com",
  projectId: "initialreact-2f991",
  storageBucket: "initialreact-2f991.appspot.com",
  messagingSenderId: "146426616758",
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;
