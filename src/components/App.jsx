import React from 'react';
import Landing from './Landing/Landing';
import Navigation from './Navigation/Navigation';

export default function App() {
  return (
    <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
      <Navigation />
      <Landing />
    </div>
  );
}
