import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

function PostPage() {
    const [postInfo, setPostInfo] = useState([]);
    const params = useParams();
    const postId = params.id

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then((response) => response.json())
            .then((json) => setPostInfo(json));
    }, []);

    return (
        <div className='posts'>
            {
                postInfo.map(info => (
                    <div key={info.id} className='post'>
                        <p>userId: {info.postId}</p>
                        <p>id: {info.id}</p>
                        <p>name: {info.name}</p>
                        <p>email: {info.email}</p>
                        <p>body: {info.body}</p>
                    </div>

                ))
            }
        </div>

    );
}

export default PostPage;