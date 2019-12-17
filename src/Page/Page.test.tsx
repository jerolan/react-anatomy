import React from 'react';
import renderer from 'react-test-renderer';

import Page from './Page';

describe('<Page />', () => {
  it('renderenders without crashing', () => {
    const component = renderer.create(<Page />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
