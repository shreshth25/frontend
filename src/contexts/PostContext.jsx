import React, { useContext, useEffect, useState } from "react"
import { json } from "react-router-dom"
const PostContext = React.createContext()


const PostContextProvider = ({children})=>{
    const [posts, setPosts] = useState([])

    const getPosts = async ()=>{
        try{
            const res = await fetch('https://shreshthbansal.pythonanywhere.com/api/post/')
            const data = await res.json()
            console.log(data)
            setPosts(data.data)
        }
        catch(e){
            console.log(e)
        }
    }
    const contextValue = {
       posts: posts,
       getPosts: getPosts
    }

    return <PostContext.Provider value={contextValue}>{children}</PostContext.Provider>
}

const UsePostContext = ()=>{
    return useContext(PostContext)
}

export {UsePostContext, PostContextProvider, PostContext}