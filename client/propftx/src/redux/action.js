import axios  from "axios"


export const fetchError=(value)=>(
    {
       type:"FETCH_ERROR",
       payload:value
    }
)

export const fetchLoading=()=>(
    {type:"FETCH_LOADING"}
)


export const fetchSuccess=(data)=>(
    {type:"FETCH_SUCCESS",
    payload:data}
)

export const fetchData=()=>{
    return async (dispatch)=>{
        
                try {
                    dispatch(fetchLoading())
                    const res=await axios.get("https://movielistapp-4.onrender.com/movie")
                    dispatch(fetchSuccess(res.data))
                } catch (error) {
                    dispatch(fetchError(error.message))
                }
            
    }
}