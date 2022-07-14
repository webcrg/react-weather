import React from 'react';
import { Link } from 'react-router-dom';
import { stats } from '@/redux/selectors';
import { useSelector } from 'react-redux';
import { calculateStats } from '@/helpers';

function Stats() {
  const uniqueCity = useSelector(stats);
  const [cityCount, mostSearched] = calculateStats(uniqueCity);

  return (
    <div className="article-wrap">
      <p>{`Unique search count: ${cityCount}`}</p>
      <p>{`Most searched city: ${mostSearched ?? ''}`}</p>
      <Link to="/">← Back</Link>
    </div>
  );
}

export { Stats };
