import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostsPage from "./components/PostsPage/PostsPage";
import PostPage from "./components/PostPage/PostPage";

function App() {
    return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={
                        <PostsPage/>
                    }
                />
                <Route
                    path='/posts/:id'
                    element={
                        <PostPage/>
                    }
                />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
