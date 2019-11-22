import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {

  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<SearchForm
      handleSearch={jest.fn()}
      articleData={[{
        id: 1,
        headline: 'Spider-Man Will Remain in the Marvel Cinematic Universe',
        img: 'https://static01.nyt.com/images/2019/09/27/multimedia/27xp-spiderman/27xp-spiderman-superJumbo.jpg?quality=90&auto=webp',
        description: 'The web slinger will be the only superhero with the ability to cross between Disney and Sony’s cinematic universes, according to Marvel Studios.',
        url: 'https://www.nytimes.com/2019/09/27/business/media/spiderman-mcu-sony-marvel.html'
      }]}
      loading={false}
      />)

      expect(wrapper).toMatchSnapshot()
  });

  it('should update state with a new search when changeInput is called', () => {
    const wrapper = shallow(<SearchForm
      handleSearch={jest.fn()}
      articleData={[{
        id: 1,
        headline: 'Spider-Man Will Remain in the Marvel Cinematic Universe',
        img: 'https://static01.nyt.com/images/2019/09/27/multimedia/27xp-spiderman/27xp-spiderman-superJumbo.jpg?quality=90&auto=webp',
        description: 'The web slinger will be the only superhero with the ability to cross between Disney and Sony’s cinematic universes, according to Marvel Studios.',
        url: 'https://www.nytimes.com/2019/09/27/business/media/spiderman-mcu-sony-marvel.html'
      }]}
      loading={false}
      />);
    const mockEvent = {target: {value: "Denver"}};
    const expected = "Denver";

    wrapper.instance().changeInput(mockEvent);
    expect(wrapper.state('search')).toEqual(expected);
  });

  it('should update state with a new search when clearInput is called', () => {
    const wrapper = shallow(<SearchForm
      handleSearch={jest.fn()}
      articleData={[{
        id: 1,
        headline: 'Spider-Man Will Remain in the Marvel Cinematic Universe',
        img: 'https://static01.nyt.com/images/2019/09/27/multimedia/27xp-spiderman/27xp-spiderman-superJumbo.jpg?quality=90&auto=webp',
        description: 'The web slinger will be the only superhero with the ability to cross between Disney and Sony’s cinematic universes, according to Marvel Studios.',
        url: 'https://www.nytimes.com/2019/09/27/business/media/spiderman-mcu-sony-marvel.html'
      }]}
      loading={false}
      />);
    const expected = '';

    wrapper.setState({search: "Hello world!!!"});
    wrapper.instance().clearInput();
    expect(wrapper.state("search")).toEqual(expected);
  });

  it('should call clearInput and handleSearch when searchHandler is called', () => {
    const mockHandleSearch = jest.fn()
    const wrapper = shallow(<SearchForm
      handleSearch={mockHandleSearch}
      articleData={[{
        id: 1,
        headline: 'India\'s Lost Moon Lander Is Somewhere in This Photo',
        img: 'https://cdn.mos.cms.futurecdn.net/FsUeVGmY89BWeb36U8cUj5-650-80.jpg',
        description: 'The image was captured by NASA\'s Lunar Reconnaissance Orbiter (LRO) on Sept. 17 as it flew over the targeted landing site of India\'s Chandrayaan-2 mission.',
        url: 'https://www.livescience.com/india-moon-landing-site-nasa-photo.html'
      },
      {
        id: 2,
        headline: 'NASA, in Reddit AMA, says Earth probably won\'t be eaten by a black hole',
        img: 'https://cnet2.cbsistatic.com/img/tM8V3SxstaN-YQiY1QPVMhYBF1k=/2019/09/26/f41e8d77-b008-4887-ae0b-a6dba3e4db60/bh-visualization1.jpg',
        description: 'NASA\'s black hole experts popped up on Reddit on Friday to field questions about these enigmatic objects. ',
        url: 'https://www.cnet.com/news/nasa-in-reddit-ama-says-earth-probably-wont-be-eaten-by-a-black-hole/'
      }]}
      loading={false}
      />);
    const mockfilteredArticles = [
      {
        id: 1,
        headline: 'India\'s Lost Moon Lander Is Somewhere in This Photo',
        img: 'https://cdn.mos.cms.futurecdn.net/FsUeVGmY89BWeb36U8cUj5-650-80.jpg',
        description: 'The image was captured by NASA\'s Lunar Reconnaissance Orbiter (LRO) on Sept. 17 as it flew over the targeted landing site of India\'s Chandrayaan-2 mission.',
        url: 'https://www.livescience.com/india-moon-landing-site-nasa-photo.html'
      }
    ];
    wrapper.setState({search: "Moon"});
    wrapper.instance().clearInput = jest.fn();
    wrapper.instance().searchHandler();

    expect(wrapper.instance().clearInput).toHaveBeenCalled();
    expect(mockHandleSearch).toHaveBeenCalledWith(mockfilteredArticles);
  });

  it('should call the changeInput method with the event when changed', () => {
    const wrapper = shallow(<SearchForm
      handleSearch={jest.fn()}
      articleData={[{
        id: 1,
        headline: 'Spider-Man Will Remain in the Marvel Cinematic Universe',
        img: 'https://static01.nyt.com/images/2019/09/27/multimedia/27xp-spiderman/27xp-spiderman-superJumbo.jpg?quality=90&auto=webp',
        description: 'The web slinger will be the only superhero with the ability to cross between Disney and Sony’s cinematic universes, according to Marvel Studios.',
        url: 'https://www.nytimes.com/2019/09/27/business/media/spiderman-mcu-sony-marvel.html'
      }]}
      loading={false}
      />);
      wrapper.instance().changeInput = jest.fn();
      wrapper.find('input').simulate('change');
      expect(wrapper.instance().changeInput).toHaveBeenCalled();
  });

  it('should call the searchHandler method when key down is enter', () => {
    const wrapper = shallow(<SearchForm
      handleSearch={jest.fn()}
      articleData={[{
        id: 1,
        headline: 'Spider-Man Will Remain in the Marvel Cinematic Universe',
        img: 'https://static01.nyt.com/images/2019/09/27/multimedia/27xp-spiderman/27xp-spiderman-superJumbo.jpg?quality=90&auto=webp',
        description: 'The web slinger will be the only superhero with the ability to cross between Disney and Sony’s cinematic universes, according to Marvel Studios.',
        url: 'https://www.nytimes.com/2019/09/27/business/media/spiderman-mcu-sony-marvel.html'
      }]}
      loading={false}
      />);

      wrapper.instance().searchHandler = jest.fn();
      wrapper.find('input').simulate('keyDown', {key: 'Enter'});
      expect(wrapper.instance().searchHandler).toHaveBeenCalled();
  });

  it('should call the searchHandler method when clicked', () => {
    const wrapper = shallow(<SearchForm
      handleSearch={jest.fn()}
      articleData={[{
        id: 1,
        headline: 'Spider-Man Will Remain in the Marvel Cinematic Universe',
        img: 'https://static01.nyt.com/images/2019/09/27/multimedia/27xp-spiderman/27xp-spiderman-superJumbo.jpg?quality=90&auto=webp',
        description: 'The web slinger will be the only superhero with the ability to cross between Disney and Sony’s cinematic universes, according to Marvel Studios.',
        url: 'https://www.nytimes.com/2019/09/27/business/media/spiderman-mcu-sony-marvel.html'
      }]}
      loading={false}
      />);

      wrapper.instance().searchHandler = jest.fn();
      wrapper.find('button').simulate('click');
      expect(wrapper.instance().searchHandler).toHaveBeenCalled();
  })
});
