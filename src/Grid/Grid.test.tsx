import React from 'react';
import renderer from 'react-test-renderer';

import Grid from './Grid';

describe('<Grid />', () => {
  it('renderenders without crashing - no props', () => {
    const component = renderer.create(<Grid />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
