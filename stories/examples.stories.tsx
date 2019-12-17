import React from 'react';
import { storiesOf } from '@storybook/react';

import Page from '../src/Page';
import Grid from '../src/Grid';
import Row from '../src/Row';
import Col from '../src/Col';

const story = storiesOf('Examples', module);

story.add('Two columns (50% and 50%)', () => (
  <Page>
    <Grid xs="row">
      <Col style={{ backgroundColor: 'magenta' }} />
      <Col style={{ backgroundColor: 'red' }} />
    </Grid>
  </Page>
));

story.add('Two rows', () => (
  <Page>
    <Grid xs="column">
      <Row style={{ backgroundColor: 'magenta' }} />
      <Row style={{ backgroundColor: 'red' }} />
    </Grid>
  </Page>
));

story.add('Two rows (75% and 25%)', () => (
  <Page>
    <Grid xs="column">
      <Row xs={75} style={{ backgroundColor: 'magenta' }} />
      <Row xs={25} style={{ backgroundColor: 'red' }} />
    </Grid>
  </Page>
));

story.add('Two rows (3 and 1)', () => (
  <Page>
    <Grid xs="column">
      <Row xs={3} style={{ backgroundColor: 'magenta' }} />
      <Row xs={1} style={{ backgroundColor: 'red' }} />
    </Grid>
  </Page>
));

story.add('Three columns (33.33% each)', () => (
  <Page>
    <Grid xs="row">
      <Col style={{ backgroundColor: 'magenta' }} />
      <Col style={{ backgroundColor: 'red' }} />
      <Col style={{ backgroundColor: 'green' }} />
    </Grid>
  </Page>
));

story.add('Three rows (50%, 25% and 25%)', () => (
  <Page>
    <Grid xs="row">
      <Col xs={2} style={{ backgroundColor: 'magenta' }} />
      <Col xs={1} style={{ backgroundColor: 'red' }} />
      <Col xs={1} style={{ backgroundColor: 'green' }} />
    </Grid>
  </Page>
));

story.add('Nested Layout or Grid', () => (
  <Page>
    <Grid xs="row">
      <Col style={{ backgroundColor: 'magenta' }} />
      <Col>
        <Row style={{ backgroundColor: 'red' }} />
        <Row style={{ backgroundColor: 'green' }} />
      </Col>
    </Grid>
  </Page>
));

story.add('Fixed width and fluid width combination', () => (
  <Page>
    <Grid xs="row">
      <Col style={{ maxWidth: 40, backgroundColor: 'magenta' }} />
      <Col style={{ backgroundColor: 'red' }} />
    </Grid>
  </Page>
));

story.add('Fixed height and fluid height combination', () => (
  <Page>
    <Grid xs="column">
      <Row style={{ maxHeight: 40, backgroundColor: 'magenta' }} />
      <Row style={{ backgroundColor: 'red' }} />
    </Grid>
  </Page>
));

story.add('Responsive layout', () => (
  <Page>
    <Grid style={{ backgroundColor: '#fafafa' }} xs="column">
      <Row style={{ backgroundColor: 'red' }}></Row>
      <Grid xs="column" md="row">
        <Col style={{ backgroundColor: 'blue' }}></Col>
        <Col style={{ backgroundColor: 'green' }}></Col>
        <Col style={{ backgroundColor: 'purple' }}></Col>
      </Grid>
      <Row style={{ backgroundColor: 'pink' }}></Row>
    </Grid>
  </Page>
));
