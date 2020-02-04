export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to firebase
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const autherId = getState().firebase.auth.uid;
        firestore.collection('Project').add({
            ...project, 
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: autherId,
            createAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', project})
        }).catch((e) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', e})
        })
    }
}

