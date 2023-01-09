import { useState, useEffect } from 'react';
import { getLiquidation } from '../utils/network';

export const useDataFetcher = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getLiquidation()
      .then((posts) => {
        console.log(posts);
        // setPosts(posts.data.hits);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  return { isLoading, posts };
};