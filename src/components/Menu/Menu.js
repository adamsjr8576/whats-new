import React from 'react';
import './Menu.css';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';

import entertainmentIcon from '../../images/entertainment.png';
import healthIcon from '../../images/health.png';
import scienceIcon from '../../images/science.png';
import localIcon from '../../images/local.png';
import technologyIcon from '../../images/technology.png';

const Menu = ({changeTopic}) => {
  return (
    <nav>
      <button className="topic-button" type="button" onClick={() => changeTopic(local)}><img className="button-icon" src={localIcon} alt="map pin icon" /> Local News</button>
      <button className="topic-button" type="button" onClick={() => changeTopic(entertainment)}><img className="button-icon" src={entertainmentIcon} alt="map pin icon" /> Entertainment</button>
      <button className="topic-button" type="button" onClick={() => changeTopic(health)}><img className="button-icon" src={healthIcon} alt="map pin icon" /> Health</button>
      <button className="topic-button" type="button" onClick={() => changeTopic(science)}><img className="button-icon" src={scienceIcon} alt="map pin icon" /> Science</button>
      <button className="topic-button" type="button" onClick={() => changeTopic(technology)}><img className="button-icon" src={technologyIcon} alt="map pin icon" /> Technology</button>
    </nav>
  );
}

export default Menu;
