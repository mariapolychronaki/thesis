import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
    name: 'user',
    initialState: {
        value: 0,
        isOpen: false,
        user:{},
        userId:"",
        team:{}
    },
    reducers: {
        increment: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        setisOpen: (state, action) => {
            state.isOpen = !state.isOpen;
        },
        SET_USER: (state, action) => {
            state.user = action.payload;
        },
        SET_USER_ID: (state, action) => {
            state.userId = action.payload;
        },
        RESET_USER: (state, action) => {
            state.user = {};
        },
        RESET_USER_ID: (state, action) => {
            state.userId = "";
        },
        SET_TEAM: (state, action) => {
            state.team = action.payload;
        }

    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setisOpen,SET_USER,SET_USER_ID,RESET_USER,RESET_USER_ID,SET_TEAM } = UserSlice.actions

export default UserSlice.reducer