export default (state, action) => {
    switch(action.type) {
        case 'GET_GRADES':
            return {
                ...state,
                loading: false,
                grades: action.payload
            }
        case 'DELETE_GRADE':
            return {
                ...state,
                grades: state.grades.filter(grades => grades._id !== action.payload)
            }
        case 'ADD_GRADE':
            return {
                ...state,
                grades: [...state.grades, action.payload]
            }
        case 'GRADES_ERROR':
            return {
                ...state,
                error: action.payload
            } 
        default: 
            return state;
    }
}