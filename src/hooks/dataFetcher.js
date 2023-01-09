import { useState, useEffect } from 'react';
import { getLiquidation } from '../utils/network';


export const useDataFetcher = () => {
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    let commonData = [];
    let seriesAData = [];
    let seriesA1Preferred = [];
    getLiquidation()
      .then((result) => {
        result.data.map(liquidation => {
            liquidation.class === "common" &&
            commonData.push({
                x: liquidation.exitVal,
                y: liquidation.pricePerShare
            });
            liquidation.class === "a" &&
            seriesAData.push({
                x: liquidation.exitVal,
                y: liquidation.pricePerShare
            });
            liquidation.class === "a1" &&
            seriesA1Preferred.push({
                x: liquidation.exitVal,
                y: liquidation.pricePerShare
            });
        });
        setPosts({commonData: commonData, seriesAData: seriesAData, seriesA1Preferred: seriesA1Preferred});
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  return { isLoading, posts };
};