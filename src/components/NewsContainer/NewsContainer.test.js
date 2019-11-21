import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer';

describe('NewsArticle', () => {

  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<NewsContainer
      articleData={[{
        id: 1,
        headline: 'Spider-Man Will Remain in the Marvel Cinematic Universe',
        img: 'https://static01.nyt.com/images/2019/09/27/multimedia/27xp-spiderman/27xp-spiderman-superJumbo.jpg?quality=90&auto=webp',
        description: 'The web slinger will be the only superhero with the ability to cross between Disney and Sony’s cinematic universes, according to Marvel Studios.',
        url: 'https://www.nytimes.com/2019/09/27/business/media/spiderman-mcu-sony-marvel.html'
      }]}
      />)

      expect(wrapper).toMatchSnapshot()
  });

});
