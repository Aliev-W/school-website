import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDRp4s6VR6l5Ysujgn8TP7tmFa-n7bvDaE",
    authDomain: "vue-3-crud-b8d2e.firebaseapp.com",
    projectId: "vue-3-crud-b8d2e",
    storageBucket: "vue-3-crud-b8d2e.appspot.com",
    messagingSenderId: "572714651487",
    appId: "1:572714651487:web:a79ac9ed7cbfab090bf0ea"
};

initializeApp(firebaseConfig);



// // import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";

// import firebase from 'firebase/app'
// import "firebase/firestore"

// const firebaseConfig = {
//   apiKey: "AIzaSyAqqCTNj-RZcvqDRAN1xo5nMhwl8h_hQO8",
//   authDomain: "kasb-hunar-maktabi.firebaseapp.com",
//   projectId: "kasb-hunar-maktabi",
//   storageBucket: "kasb-hunar-maktabi.appspot.com",
//   messagingSenderId: "616695050204",
//   appId: "1:616695050204:web:a6b87a584d949945ef6919",
//   measurementId: "G-5LG0T6CG0B"
// };

// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// const firebaseApp = firebase.initializeApp(firebaseConfig)
// const timestamp = firebase.firestore().FieldValue.serverTimestamp

// export {timestamp}
// export default firebaseApp.firestore()