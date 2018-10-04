import firebase from 'firebase';

let config = {
    apiKey: 'AIzaSyBghOtzWvJEWUBIgRymY2CWTcrX3IWTr6Q',
    authDomain: 'nba-f-c6386.firebaseapp.com',
    databaseURL: 'https://nba-f-c6386.firebaseio.com',
    projectId: 'nba-f-c6386',
    storageBucket: 'nba-f-c6386.appspot.com',
    messagingSenderId: '135692332925'
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();

const fbArticles = firebaseDB.ref('articles');
const fbTeams = firebaseDB.ref('teams');
const fbVideos = firebaseDB.ref('videos');

const firebaseLooper = snapshot => {
    const data = [];
    snapshot.forEach(elem => {
        data.push({
            ...elem.val(),
            id: elem.key
        });
    });
    return data;
};

export { firebase, firebaseDB, fbArticles, fbTeams, fbVideos, firebaseLooper };
