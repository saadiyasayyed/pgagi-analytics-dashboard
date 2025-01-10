import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Comprehensive Analytics Dashboard</h1>
      <nav>
        <ul>
          <li><Link href="/weather">Weather</Link></li>
          <li><Link href="/news">News</Link></li>
          <li><Link href="/finance">Finance</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;