import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLodding: false,
    isError: false,
    error: null,
    data: {}
}

const api = process.env.REACT_APP_API_URL + "/all"

export const GetAllData = createAsyncThunk("state/GetAllData", async () => {
    try {
        const req = await fetch(api)
        if (!req.ok) throw Error("server error!")
        const res = await req.json()
        return res.data
    } catch (err) {
        console.log(err.message)
        return {}
    }
})

export const stateSlice = createSlice({
    name: 'state',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(GetAllData.fulfilled, (state, action) => {
            state.isLodding = false
            state.data = action.payload
        })
        builder.addCase(GetAllData.pending, (state, action) => {
            state.isLodding = true
            state.isError = false
            state.error = null
        })
        builder.addCase(GetAllData.rejected, (state, action) => {
            state.isLodding = false
            state.isError = true
            state.error = "An error occor."
        })
    },
})

// Action creators are generated for each case reducer function
//export const {  } = counterSlice.actions

export default stateSlice.reducer