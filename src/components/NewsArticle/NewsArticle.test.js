import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';

describe('NewsArticle', () => {

  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<NewsArticle
      headline={"Hello world!!"}
      img={"https://static01.nyt.com/images/2019/09/27/multimedia/27xp-spiderman/27xp-spiderman-superJumbo.jpg?quality=90&auto=webp"}
      description={"I am saying hello to the world!"}
      url={"https://www.nytimes.com/2019/09/27/business/media/spiderman-mcu-sony-marvel.html"}
      />)

      expect(wrapper).toMatchSnapshot()
  });

});
