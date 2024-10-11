import { createSlice } from "@reduxjs/toolkit"

const appSlice = createSlice({
    name: "app",
    initialState: {
        open: true,
        video:[],
        category:"All",
        searchSuggesion:[]
    },
    reducers: {
        toggleSidebar: (state) => {
            state.open = !state.open;
        },
        setHomeVideo:(state,action)=>{
            state.video = action.payload;
        },
        setCategory:(state,action) =>{
            state.category = action.payload;
        },
        setSearchSuggesion:(state,action) =>{
            state.searchSuggesion = action.payload;
        }
    }
});

export const { toggleSidebar,setHomeVideo,setCategory,setSearchSuggesion} = appSlice.actions;
export default appSlice.reducer;