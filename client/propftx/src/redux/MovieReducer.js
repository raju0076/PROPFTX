import { FETCH_ERROR, FETCH_LOADING, FETCH_SUCCESS } from "./actionType"

const intialvalue={
    movies:[],
    loading:false,
    error:""
}



export const movieReducer=(state=intialvalue,action)=>{

    switch(action.type){
        case FETCH_LOADING:
            return {
                ...state,
                movies:[],
                loading:true,
                error:""
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                movies:action.payload,
                loading:false,
                error:""
            }
        case FETCH_ERROR:
            return {
                ...state,
                movies:[],
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}