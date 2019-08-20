import React from 'react';
import ForbiddenIsland from './summaries/ForbiddenIsland';
import GoatJumper from './summaries/GoatJumper';
import PinnyArcade from './summaries/PinnyArcade';
import MazeGame from './summaries/MazeGame';
import MemoryGame from './summaries/MemoryGame';
import PersonalWebsite from './summaries/PersonalWebsite';
import PowerUpGambia from './summaries/PowerUpGambia';
import Shambomon from './summaries/Shambomon';
import JubileeProject from './summaries/JubileeProject';
import TravelPal from './summaries/TravelPal';

export default React.memo(function ProjectSummaryRenderer(props) {
  switch (props.projectTitle) {
    case 'Forbidden Island':
      return <ForbiddenIsland/>;
    case 'Goat Jumper':
      return <GoatJumper/>;
    case 'Kimmy\'s Pinny Arcade':
      return <PinnyArcade/>;
    case 'Maze Game':
      return <MazeGame/>;
    case 'Memory Game':
      return <MemoryGame/>;
    case 'Personal Website':
      return <PersonalWebsite/>;
    case 'Power Up Gambia':
      return <PowerUpGambia/>;
    case 'Shambomon':
      return <Shambomon/>;
    case 'The Jubilee Project':
      return <JubileeProject/>;
    case 'TravelPal':
      return <TravelPal/>;
    default:
      return <p className='project-summary'>This project does not have a summary.</p>;
  }
});