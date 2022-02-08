import { useEffect, useState } from 'react';
import './App.css';
import { getBeanieBabies } from './services/fetch-utils';
import BeaniesList from './BeaniesList';

function App() {
  const [beanieBabies, setBeanieBabies] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 40;
  
  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const beanies = await getBeanieBabies(from, to);

      setBeanieBabies(beanies);
    }
    fetch();
  }, [page]); 

  return (
    <>
      <h2>Current Page {page}</h2>
      <div className='buttons'>
        <button onClick={() => setPage(page - 1)}
          disabled={page === 1}>Previous Page</button>
        <button onClick={() => setPage(page + 1)}
          disabled={beanieBabies.length < perPage}>Next Page</button>
      </div>
      <BeaniesList beanieBabies={beanieBabies} />
    </>
  );
}

export default App;
