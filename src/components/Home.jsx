import React, { useEffect, useState } from 'react';
import { UsePostContext } from '../contexts/PostContext';
import Post from './Post';
import { UseUserContext } from '../contexts/UserContext';

const Home = () => {
  const { token } = UseUserContext();
  const [posts, setPosts] = useState([]);
  console.log(token);

  const getPosts = async () => {
    try {
      const res = await fetch('https://shreshthbansal.pythonanywhere.com/api/post/', {
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'application/json',
          // Add other headers if needed
        },
      });
      const data = await res.json();
      console.log(data);
      setPosts(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPosts();
  }, [token]);

  return (
    <div className="container mt-2">
      <div className="row">
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
