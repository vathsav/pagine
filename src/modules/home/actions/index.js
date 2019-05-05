// import { getFirestore } from 'redux-firestore';

export default function actionFetchHomepageContent() {
  // return (dispatch, getState, { getFirebase, getFirestore }) => {
  //   const firestore = getFirestore();
  //
  //   firestore.collection('users').doc('XapUJE6RhAlHWBFw9ibZ')
  //     .onSnapshot((doc) => {
  //       return {
  //         type: 'fetchHomepageContent',
  //         payload: {
  //           homePageInfo: doc.data(),
  //         },
  //       };
  //     });
  // };

  return {
    type: 'fetchHomepageContent',
    payload: {
      homePageInfo: 'okay',
    },
  };
}
