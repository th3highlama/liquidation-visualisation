import { PageBackground } from './Styles';
import { useState, useEffect } from 'react';
import { useDataFetcher } from './hooks/dataFetcher';
import LineChart from './components/LineChart';

function App() {
  const { isLoading, posts } = useDataFetcher();
  return (
    <PageBackground>
        {isLoading ? (
        <p className="loading">Loading...</p>
        ) : (
          <LineChart dataset={posts} />
        )}
    </PageBackground>
  );
}

export default App;
