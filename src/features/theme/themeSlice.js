import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dark: false
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
     setDarkMode: state => {
        state.dark = !state.dark
     }
    },
  },
)


export const { setDarkMode } = themeSlice.actions

export default themeSlice.reducer