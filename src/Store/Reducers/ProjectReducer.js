const initState = {
    projects: [
        {id: '1', title: 'Help me find peach', content: 'bla bla bla'},
        {id: '2', title: 'Colect all the stars', content: 'bla bla bla'},
        {id: '3', title: 'Egg hunt with yoshi', content: 'bla bla bla'}
    ]
};

const ProjectReducer = (state = initState, action) => {
    return state;
}

export default ProjectReducer;