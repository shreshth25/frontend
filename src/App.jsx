import { BrowserRouter, Routes, Route } from "react-router-dom"
import  {Layout, Home, Profile, CreatePost, CreateReel, Reels} from './components'
import { PostContextProvider } from "./contexts/PostContext"
import { UserContextProvider } from "./contexts/UserContext"
import './App.css'
import Login from "./components/Login"
import SignUp from "./components/SignUp"

function App() {

  return (
    <>
      <UserContextProvider>
        <PostContextProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout/>}>
                  <Route path="" element={<Home/>}/>
                  <Route path="profile" element={<Profile/>}/>
                  <Route path="reels" element={<Reels/>}/>
                  <Route path="create-post" element={<CreatePost/>}/>
                  <Route path="create-reel" element={<CreateReel/>}/>
                </Route>
                <Route path="login" element={<Login/>}/>
                <Route path="signup" element={<SignUp/>}/>
              </Routes>
            </BrowserRouter>
          </PostContextProvider>
      </UserContextProvider>

    </>
  )
}

export default App
