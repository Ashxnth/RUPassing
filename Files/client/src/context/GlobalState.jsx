import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
    grades: [],
    error: null,
    loading: true
}

export const GlobalContext = createContext(initialState); 

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    //Actions
    async function getGrades() {
        try {
            const res = await axios.get('/api/v1/calculations');

            dispatch({
                type: 'GET_GRADES',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'GRADES_ERROR',
                payload: err.response.data.error
            });
        }
    }

    async function addGrade(grade) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('api/v1/calculations', grade, config);

            dispatch({
                type: 'ADD_GRADE',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'GRADES_ERROR',
                payload: err.response.data.error
            });
        }
    }

    async function deleteGrade(id) {
        try {
            await axios.delete(`/api/v1/calculations/${id}`);

            dispatch({
                type: 'DELETE_GRADE',
                payload: id
            })
        } catch (err) {
            dispatch({
                type: 'GRADES_ERROR',
                payload: err.response.data.error
            })
        }
    }
    
    return(
        <GlobalContext.Provider value={{
            grades: state.grades,
            loading: state.loading,
            error: state.error,
            getGrades,
            addGrade,
            deleteGrade
        }}>
            {children}
        </GlobalContext.Provider>
    );
}