import React from 'react';
import ProfileCard from './Components/ProfileCard/ProfileCard';
import ButtonList from './Components/ButtonList/ButtonList';
import links from './Data/data'; 

import lauraImage from './assets/imgs/laura.jpg';

function App() {
  return (
    <div className="app">
      <ProfileCard
        image={lauraImage}
        name="Laura Garcia, 2003"
        description="Escritora"
      />
      <ButtonList links={links} /> 
    </div>
  );
}

export default App;
