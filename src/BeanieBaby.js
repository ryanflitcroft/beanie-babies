import { Link } from 'react-router-dom';

export default function BeanieBaby({ beanieBaby }) {
  return (
    <>
      <Link to={`/beanie-babies/${beanieBaby.id}`}>
        <figure>
          <img src={beanieBaby.image} alt={beanieBaby.title} className='beanie-img' />
          <figcaption>{beanieBaby.title}</figcaption>
        </figure>
      </Link>
    </>
  );
}