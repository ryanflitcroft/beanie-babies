import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom';
import { getSingleBeanie } from './services/fetch-utils';

export default function BeanieDetail() {
  const [beanieBaby, setBeanieBaby] = useState({});
  const params = useParams();

  useEffect(() => {
    async function getCurrent() {
      const current = await getSingleBeanie(params.id);
      setBeanieBaby(current);
    }
    getCurrent();
  }, [params]); 

  function handleBeanieClick() {
    // here's a challenge. How can you link on click to the beanie baby's correct entry in the official beanie baby fan site?
  }

  return (
    <>
      <Link to='/'>Home</Link>
      <div className='beanie-detail' onClick={handleBeanieClick}>
        <div className='beanie-data'>
          <p>{beanieBaby.animal}</p>
          <p>{beanieBaby.title}</p>
          <p>Zodiac: {beanieBaby.astroSign}</p>
          <p> Born on {beanieBaby.birthday}</p>
          <img className='beanie-img' src={beanieBaby.image}/>
          <p>Color: {beanieBaby.color}</p>
          <p>Release Date: {beanieBaby.releaseDate}</p>
          <p>Retirement Date: {beanieBaby.retirementDate}</p>

          <p>Size: {beanieBaby.size}</p>
          <p>Theme: {beanieBaby.theme}</p>
          <p>Sub-Theme: {beanieBaby.subtheme}</p>
          <p>Style Number: {beanieBaby.styleNumber}</p>
          <p>Swing Tag Generation: {beanieBaby.swingTagGeneration}</p>
          <p>Tush Tag Generation: {beanieBaby.tushTagGeneration}</p>
        </div>
      </div>  
    </>
  );
}