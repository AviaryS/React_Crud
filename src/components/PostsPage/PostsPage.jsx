import React, {useEffect, useState} from 'react';
import './style.css'
import {Link} from "react-router-dom";


function Post({post}) {
    const [updatePost, setUpdatePost] = useState([]);
    const DeletePost = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
            method: 'DELETE',
        });
        console.log(`post num ${post.id} deleted`);
    }

    function UpdatePost() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: post.id,
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => setUpdatePost(json));
        console.log(updatePost);
    }

    return (
        <div className="post">
            <p>userId: {post.userId}</p>
            <p>id: {post.id}</p>
            <p>title: {post.title}</p>
            <p>body: {post.body}</p>
            <button><Link to={`/posts/${post.id}`}>Подробнее</Link></button>
            <button onClick={UpdatePost}>Изменить</button>
            <button onClick={DeletePost}>Удалить</button>
        </div>
    )
}

function PostsPage() {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState([]);

    function AddPost() {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'new',
                body: 'post',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => setNewPost(json));
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setPosts(json));
    }, []);

    return (
        <div className='container'>
            <button onClick={AddPost}>Add Post</button>
            <div className='posts'>
                {newPost.length !== 0 &&
                    <div className="post">
                        <p>userId: {newPost.userId}</p>
                        <p>id: {newPost.id}</p>
                        <p>title: {newPost.title}</p>
                        <p>body: {newPost.body}</p>
                    </div>
                }
                {posts.map(post => (
                    <Post key={post.id} post={post}/>
                ))}
            </div>

        </div>
    );
}

export default PostsPage;