import { createSlice } from "@reduxjs/toolkit";


const configSlice = createSlice({
    name: "config",
    initialState: {
        lang: "en",
    },
    reducers:{
        cahngeLanguage: (state,action)=>{
            state.lang = action.payload;
        }
    }
})


export const{cahngeLanguage} = configSlice.actions;

export default configSlice.reducer