import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  test: "Hello"
}

const githubUserSlice = createSlice({
  name: "githubUser", initialState, reducers: {
    getUser: () => {
      console.log("Hello")
    }
  }
})

export default githubUserSlice.reducer