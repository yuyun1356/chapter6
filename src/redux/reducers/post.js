import { createSlice } from "@reduxjs/toolkit";

//semua yg ada disini akan menjadi global, dan bisa diambil kapanpun yg kita mau di komponen manapun
const initialState = {
    posts: [],
    postDetails: null,
}

//postnya ada di initialState, setPost ada di postSlice
//const [post, setPost] = useState([])

const postSlicer = createSlice({
    name: "post",
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        setPostDetails: (state, action) => {
            state.postDetails = action.payload
        }
    }
})

//setPost and setPostDetails can be access in any files in this projects
export const {setPosts, setPostDetails} = postSlicer.actions

//export the global state / reducers
export default postSlicer.reducer