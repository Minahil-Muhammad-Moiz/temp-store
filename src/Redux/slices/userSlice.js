import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    isLoading: false,
    isError: false
}

export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
})

// export const postUsers = createAsyncThunk('postUsers', async (newPost) => {
//     const res = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost, {
//         headers: { "Content-Type": 'application/json; charset=UTF-8' }
//     });
//     return res.data;
// })

export const postUsers = createAsyncThunk('postUsers', async (newPost) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: { "Content-Type": "application/json; charset=UTF-8" }
    })
    return res.json()
})

export const deletePost = createAsyncThunk('deletePost', async (postId) => {
    const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    return postId
})

export const updatePost = createAsyncThunk('upadatePost', async (uptPost) => {
    const res = await axios.put(`https://jsonplaceholder.typicode.com/posts/${uptPost.id}`, uptPost,
        { headers: { "Content-Type": 'application/json; charset=UTF-8' } }
    )
    return res.data
})

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false,
                state.data = action.payload
        })
        builder.addCase(fetchUsers.rejected, (state) => {
            state.isLoading = false;
            state.isError = true
        })
        builder.addCase(postUsers.fulfilled, (state, action) => {
            state.data.push(action.payload)
        })
        builder.addCase(deletePost.fulfilled, (state, action) => {
            state.data = state.data.filter(post => post.id !== action.payload)
        })
        builder.addCase(updatePost.fulfilled, (state, action) => {
            const upadatedPost = action.payload;
            const index = state.data.findIndex(item => item.id === upadatedPost.id)
            state.data[index] = action.payload;
        })
    }
})

export default userSlice.reducer;