import React from 'react';
import renderer from 'react-test-renderer';

import Col from './Col';

describe('<Col />', () => {
  it('renderenders without crashing', () => {
    const component = renderer.create(<Col />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
