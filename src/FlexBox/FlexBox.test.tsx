import React from 'react';
import renderer from 'react-test-renderer';

import FlexBox from './FlexBox';

describe('<FlexBox />', () => {
  it('renderenders without crashing', () => {
    const component = renderer.create(<FlexBox />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
