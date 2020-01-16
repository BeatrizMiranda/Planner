export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to firebase
        const firestore = getFirestore();
        firestore.collection('Project').add({
            ...project, 
            authorFirstName: 'Bia',
            authorLastName: 'miranda',
            authorId: 123,
            createAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', project})
        }).catch((e) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', e})
        })
    }
}