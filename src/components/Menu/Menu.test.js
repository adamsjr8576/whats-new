import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {

  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<Menu
      changeTopic={jest.fn()}
      loading={false}
      />);

      expect(wrapper).toMatchSnapshot()
  });

  it('should call changeTopic method on click', () => {
    const changeTopicMock = jest.fn();
    const wrapper = shallow(<Menu
      changeTopic={changeTopicMock}
      loading={false}
      />);

      wrapper.find('.local').simulate('click');
      wrapper.find('.entertainment').simulate('click');
      wrapper.find('.health').simulate('click');
      wrapper.find('.science').simulate('click');
      wrapper.find('.technology').simulate('click');

      expect(changeTopicMock).toHaveBeenCalledWith("local");
      expect(changeTopicMock).toHaveBeenCalledWith("entertainment");
      expect(changeTopicMock).toHaveBeenCalledWith("health");
      expect(changeTopicMock).toHaveBeenCalledWith("science");
      expect(changeTopicMock).toHaveBeenCalledWith("technology");
  });

});
