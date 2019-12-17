import React from 'react';
import renderer from 'react-test-renderer';

import Row from './Row';

describe('<Row />', () => {
  it('renderenders without crashing', () => {
    const component = renderer.create(<Row />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
