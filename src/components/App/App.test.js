import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {

  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<App />)

      expect(wrapper).toMatchSnapshot()
  });

  it('Should update state with a new topic and selectedData when changeTopic is called', () => {
    const wrapper = shallow(<App />)
    const mockTopic = 'entertainment';
    const expectedNewsArticle = 'entertainment';
    const expectedSelectedData = [
      {
        id: 1,
        headline: 'Spider-Man Will Remain in the Marvel Cinematic Universe',
        img: 'https://static01.nyt.com/images/2019/09/27/multimedia/27xp-spiderman/27xp-spiderman-superJumbo.jpg?quality=90&auto=webp',
        description: 'The web slinger will be the only superhero with the ability to cross between Disney and Sony’s cinematic universes, according to Marvel Studios.',
        url: 'https://www.nytimes.com/2019/09/27/business/media/spiderman-mcu-sony-marvel.html'
      },
      {
        id: 2,
        headline: 'Warner Bros. Thinks a ‘Lot Has Been Said’ About Joker, So It’s Canceling Red Carpet Interviews',
        img: 'https://i.kinja-img.com/gawker-media/image/upload/s--4KmyUB9z--/c_scale,dpr_2.0,f_auto,fl_progressive,q_80,w_800/sapqo9o5c10gyewaopjg.png',
        description: 'While the larger conversation around Todd Phillips’ upcoming Joker film continues to intensify as people reflect on how the story’s depiction of a white domestic terrorist fits into our cultural landscape, Warner Bros. is attempting to take back some control of the narrative by barring print and broadcast press access to the red carpet of the Hollywood premiere where interviews were to be conducted.',
        url: 'https://io9.gizmodo.com/warner-bros-thinks-a-lot-has-been-said-about-joker-1838543086'
      }
    ];

    wrapper.setState(
      {
        newsArticle: '',
        allData: {
          entertainment: [
          {
            id: 1,
            headline: 'Spider-Man Will Remain in the Marvel Cinematic Universe',
            img: 'https://static01.nyt.com/images/2019/09/27/multimedia/27xp-spiderman/27xp-spiderman-superJumbo.jpg?quality=90&auto=webp',
            description: 'The web slinger will be the only superhero with the ability to cross between Disney and Sony’s cinematic universes, according to Marvel Studios.',
            url: 'https://www.nytimes.com/2019/09/27/business/media/spiderman-mcu-sony-marvel.html'
          },
          {
            id: 2,
            headline: 'Warner Bros. Thinks a ‘Lot Has Been Said’ About Joker, So It’s Canceling Red Carpet Interviews',
            img: 'https://i.kinja-img.com/gawker-media/image/upload/s--4KmyUB9z--/c_scale,dpr_2.0,f_auto,fl_progressive,q_80,w_800/sapqo9o5c10gyewaopjg.png',
            description: 'While the larger conversation around Todd Phillips’ upcoming Joker film continues to intensify as people reflect on how the story’s depiction of a white domestic terrorist fits into our cultural landscape, Warner Bros. is attempting to take back some control of the narrative by barring print and broadcast press access to the red carpet of the Hollywood premiere where interviews were to be conducted.',
            url: 'https://io9.gizmodo.com/warner-bros-thinks-a-lot-has-been-said-about-joker-1838543086'
          }
        ],
          health: [
            {
              id: 1,
              headline: 'Man dies after getting infection linked to shellfish, North Carolina officials say',
              img: 'https://www.newsobserver.com/entertainment/restaurants/o6w6n7/picture184859643/alternates/FREE_768/MAIN%20OPTION%202:%20OYSTERS',
              description: 'A North Carolina man has died after getting an infection often associated with shellfish, state health officials say.',
              url: 'https://www.bnd.com/news/nation-world/national/article235549897.html'
            },
            {
              id: 2,
              headline: 'Azar, other health officials press people to get flu shots early',
              img: 'https://thehill.com/sites/default/files/styles/thumb_small_article/public/flu_012918getty.jpg?itok=1dygJH3l',
              description: 'U.S. health officials, including Health and Human Services Secretary Alex Azar, are encouraging Americans to get their flu shots early this year.',
              url: 'https://thehill.com/homenews/news/463354-azar-other-public-health-officials-press-people-to-get-flu-shots-early'
            }
          ]
        },
        selectedData: '',
        loading: true,
      }
    )

    wrapper.instance().changeTopic(mockTopic);

    expect(wrapper.state('newsArticle')).toEqual(expectedNewsArticle);
    expect(wrapper.state('selectedData')).toEqual(expectedSelectedData);

  });

  it('should update state with a new selectedData when handleSearch is invoked', () => {
    const wrapper = shallow(<App />)
    const mockfilteredArticle = [
      {
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
      },
      {
        id: 3,
        headline: 'Worm with three sexes that carries its offspring like a kangaroo discovered',
        img: 'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/09/1862/1048/worm-with-three-sexes.jpg?ve=1&tl=1',
        description: 'A microscopic worm that has three different sexes, manages to survive a dose of arsenic that would kill a person 500 times over, and is able to carry its young inside of its body similar to a kangaroo has been discovered in one of the most uninhabitable places on Earth.',
        url: 'https://www.foxnews.com/science/worm-with-three-sexes-discovered'
      }
    ];
    const expected = [
      {
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
      },
      {
        id: 3,
        headline: 'Worm with three sexes that carries its offspring like a kangaroo discovered',
        img: 'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/09/1862/1048/worm-with-three-sexes.jpg?ve=1&tl=1',
        description: 'A microscopic worm that has three different sexes, manages to survive a dose of arsenic that would kill a person 500 times over, and is able to carry its young inside of its body similar to a kangaroo has been discovered in one of the most uninhabitable places on Earth.',
        url: 'https://www.foxnews.com/science/worm-with-three-sexes-discovered'
      }
    ];

    wrapper.instance().handleSearch(mockfilteredArticle);
    expect(wrapper.state('selectedData')).toEqual(expected);
  });
});
