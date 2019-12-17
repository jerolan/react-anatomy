import React from 'react';
import { storiesOf } from '@storybook/react';

import Page from '../src/Page';
import Grid from '../src/Grid';
import Row from '../src/Row';
import Col from '../src/Col';

const story = storiesOf('Layout', module);

story.add('<Page />', () => (
  <Page style={{ backgroundColor: '#fafafa' }}>
    Base Page Component, It's covers the 100vw and 100vh
  </Page>
));

story.add('<Grid />', () => (
  <Page>
    Page is used as parent
    <Grid style={{ backgroundColor: '#fafafa' }}>
      Base Grid Component, It fills any flex parentt
    </Grid>
  </Page>
));

story.add('<Row />', () => (
  <Page>
    Page is used as parent
    <Grid style={{ backgroundColor: '#fafafa' }} xs="column">
      <Row style={{ backgroundColor: 'red' }}>Row 1 - Auto 50%</Row>
      <Row style={{ backgroundColor: 'blue' }}>Row 2 - Auto 50%</Row>
    </Grid>
  </Page>
));


story.add('<Col />', () => (
  <Page>
    Page is used as parent
    <Grid style={{ backgroundColor: '#fafafa' }} xs="row">
      <Col style={{ backgroundColor: 'red' }}>Col 1 - Auto 50%</Col>
      <Col style={{ backgroundColor: 'blue' }}>Col 2 - Auto 50%</Col>
    </Grid>
  </Page>
));
