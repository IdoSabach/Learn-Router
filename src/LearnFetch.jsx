import React, { useEffect, useState } from "react";

export default function LearnFetch() {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState();
  // const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments?_start=0&_limit=5"
        );
        const jsonData = await response.json();
        // const firstFiveElements = jsonData.slice(0, 5);
        // setPosts(firstFiveElements);
        setPosts(jsonData)
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error! Please try again!</div>;
  }

  return (
    <div>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <p>{post.postId}</p>
            <p>{post.id}</p>
            <p>{post.name}</p>
            <p>{post.email}</p>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
