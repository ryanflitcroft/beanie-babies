import BeanieBaby from './BeanieBaby.js';

export default function BeaniesList({ beanieBabies }) {
  console.log('||BList', beanieBabies);
  return (
    <div className='beanies'>
      {/* render out the beanie babies as a list */}
      {beanieBabies.map((beanieBaby, i) =>
        <BeanieBaby key={beanieBaby + i} beanieBaby={beanieBaby} />
      )}
    </div>);
}
