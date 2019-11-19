import React from 'react';
import './Menu.css';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';

const Menu = ({changeTopic}) => {
  return (
    <nav>
      <button className="topic-button" type="button" onClick={() => changeTopic(local)}>Local News</button>
      <button className="topic-button" type="button" onClick={() => changeTopic(entertainment)}>Entertainment</button>
      <button className="topic-button" type="button" onClick={() => changeTopic(health)}>Health</button>
      <button className="topic-button" type="button" onClick={() => changeTopic(science)}>Science</button>
      <button className="topic-button" type="button" onClick={() => changeTopic(technology)}>Technology</button>
    </nav>
  );
}

export default Menu;
