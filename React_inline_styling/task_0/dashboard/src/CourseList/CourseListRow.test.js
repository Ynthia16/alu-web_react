import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
  it('renders a header row with one cell when textSecondCell is null', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" />);
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').prop('colSpan')).toEqual(2);
  });

  it('renders a header row with two cells when textSecondCell is provided', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell="Header 2" />);
    expect(wrapper.find('th')).toHaveLength(2);
  });

  it('renders a regular row with two cells when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Cell 1" textSecondCell="Cell 2" />);
    expect(wrapper.find('td')).toHaveLength(2);
  });

  it('applies correct inline styles for a header row', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" />);
    expect(wrapper.find('tr').prop('style')).toEqual({ backgroundColor: '#deb5b545' });
  });

  it('applies correct inline styles for a regular row', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Cell" />);
    expect(wrapper.find('tr').prop('style')).toEqual({ backgroundColor: '#f5f5f5ab' });
  });
});
