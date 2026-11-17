

import { createSlice } from '@reduxjs/toolkit'


const initialState: { token: string } = {
    token: ''
}

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {}
})

export default globalSlice.reducer