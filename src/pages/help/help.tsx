import React from 'react';
import { Link } from 'react-router-dom';

function Help() {
  return (
    <div className="article-wrap">
      <p>Text describing how the weather widget works.</p>
      <Link to="/">← Back</Link>
    </div>
  );
}

export { Help };
