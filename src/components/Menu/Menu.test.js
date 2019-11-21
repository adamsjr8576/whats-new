import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {

  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<Menu
      changeTopic={jest.fn()}
      loading={false}
      />)

      expect(wrapper).toMatchSnapshot()
  });

});
