import * as firebase from 'firebase';
import moment from 'moment';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain:process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket:process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);
  

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();



export {firebase, googleAuthProvider, database as default};










// database.ref('expenses').on('child_changed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot)=>{
//     const expenses = [];

//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

// database.ref('expenses').once('value').then((snapshot)=>{
//     const expenses = []
//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

// console.log(expenses)
// });



// database.ref('expenses').push({
//     description: 'gum',
//     note:'',
//     amount: 2,
//     createdAt: moment(0).subtract(4, 'days').valueOf()
// });

// database.ref('expenses').push({
//     description: 'bill',
//     note:'',
//     amount: 2,
//     createdAt: moment(0).subtract(4, 'days').valueOf()
// });

// database.ref('expenses').push({
//     description: 'bill',
//     note:'',
//     amount: 2,
//     createdAt: moment(0).subtract(4, 'days').valueOf()
// });



// database.ref('notes/-LKDk_tRaFlEiZHjZlW8').remove();

// database.ref('notes/-LKDk_tRaFlEiZHjZlW8').update({
//     age: 67
// });

// database.ref('notes').push({
//     name: "dawa",
//     age: 34
// });     




// database.ref().update({
//     'job/company': 'Amazon'
// });

// database.ref().on('value', (snapshot)=>{
//     const val = snapshot.val();

//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// setTimeout(()=>{
//     database.ref().update({
//         'job/company': 'Google'
//     });
// }, 3500);





// firebase.database().ref().set({
//     name: "Janmajaya Mall",
//     stressLevel: 6,
//     job:{
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location:{  
//         city:"dw"
//     },
//     isSingle: true,
//     age:27
// }).then(()=>{
//     console.log("Data is saved")
// }).catch((e)=>{console.log("Data not saved with error ", e)});


// database.ref().once('value').then((snapshot)=>{
//     const val = snapshot.val();
//     console.log(val);
// }).catch((e)=>{console.log(e)});