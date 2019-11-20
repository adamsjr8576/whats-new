import React from 'react';
import './Menu.css';

import entertainmentIcon from '../../images/entertainment.png';
import healthIcon from '../../images/health.png';
import scienceIcon from '../../images/science.png';
import localIcon from '../../images/local.png';
import technologyIcon from '../../images/technology.png';

const Menu = ({ changeTopic, loading }) => {
  return (
    <nav>
      <button className="topic-button" type="button" disabled={loading} onClick={() => changeTopic('local')}><img className="button-icon" src={localIcon} alt="map pin icon" /> Local</button>
      <button className="topic-button" type="button" disabled={loading} onClick={() => changeTopic('entertainment')}><img className="button-icon" src={entertainmentIcon} alt="map pin icon" /> Entertainment</button>
      <button className="topic-button" type="button" disabled={loading} onClick={() => changeTopic('health')}><img className="button-icon" src={healthIcon} alt="map pin icon" /> Health</button>
      <button className="topic-button" type="button" disabled={loading} onClick={() => changeTopic('science')}><img className="button-icon" src={scienceIcon} alt="map pin icon" /> Science</button>
      <button className="topic-button" type="button" disabled={loading} onClick={() => changeTopic('technology')}><img className="button-icon" src={technologyIcon} alt="map pin icon" /> Technology</button>
    </nav>
  );
}

export default Menu;
