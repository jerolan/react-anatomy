# React Anatomy

react-easy-grid was ocuped

This is a port from [react-native-easy-grid](https://github.com/GeekyAnts/react-native-easy-grid) for React Web.
Just because i like it and i think it's simplier than copy-and-paste my own flex rules from my other projects.
I added support for break points with the media queries from [Bootstrap](https://getbootstrap.com/docs/4.0/layout/overview/)

## Installation

```
npm install react-anatomy --save
```

## Usage

### Include the components

```
import { Col, Row, Grid } from "react-anatomy";
```

### 1. Two columns (50% and 50%)

```
<Page>
  <Grid xs="row">
    <Col />
    <Col />
  </Grid>
</Page>
```

![col-50-50](examples/col-50-50.png 'Column 50% and 50% example')

> Note: If you don't assign the size property, it defaults to equal width (or height) with its siblings

### 2. Two rows

```
<Page>
  <Grid xs="column">
    <Row />
    <Row />
  </Grid>
</Page>
```

![row-50-50](examples/row-50-50.png 'Row 50% and 50% example')

### 3. Two rows (75% and 25%)

```
<Page>
  <Grid xs="column">
    <Row size={75} />
    <Row size={25} />
  </Grid>
</Page>
```

This is exactly same as

```
<Page>
  <Grid xs="column">
    <Row size={3} />
    <Row size={1} />
  </Grid>
</Page>
```

![row-75-25](examples/row-75-25.png 'Row 75% and 25% example')

> Same concept applies to `<Col />`

### 4. Three columns (33.33% each)

```
<Page>
  <Grid xs="row">
    <Col></Col>
    <Col></Col>
    <Col></Col>
  </Grid>
</Page>
```

![col-33-33-33](examples/col-33-33-33.png 'Column 33.33% each')

### 5. Three rows (50%, 25% and 25%)

```
<Grid>
  <Row size={2}></Row>
  <Row size={1}></Row>
  <Row size={1}></Row>
</Grid>
```

![row-50-25-25](examples/row-50-25-25.png 'Row 50%, 25% and 50% example')

### 6. Nested Layout or Grid

<table width="100" height="100">
    <tr>
        <td rowspan="2" bgcolor="red" width="50">1</td>
        <td bgcolor="yellow" width="50" height="50">2</td>
    </tr>
    <tr>
        <td bgcolor="blue">3</td>
    </tr>
</table>

```
<Grid xs="row">
  <Col />
  <Col>
    <Row />
    <Row />
  </Col>
</Grid>
```

![complex](examples/complex.png 'Complex and Nested Layouts')

### 7. Fixed width and fluid width combination

```
<Grid>
    <Col style={{ maxWidth: 40 }}>
        <Text>Fixed width</Text>
    </Col>
    <Col>
        <Text>Fluid width</Text>
    </Col>
</Grid>
```

![col-fluid-fixed.png](examples/col-fluid-fixed.png 'Column fluid and fixed example')

### 8. Fixed height and fluid height combination

```
<Grid>
    <Row style={{ maxHeight: 40 }}>
        <Text>Fixed width</Text>
    </Row>
    <Row>
        <Text>Fluid width</Text>
    </Row>
</Grid>
```

![row-fluid-fixed.png](examples/row-fluid-fixed.png 'Row fluid and fixed example')

### 9. Responsive layout

```
<Page>
  <Grid xs="column">
    <Row />
    <Grid xs="column" md="row">
      <Col />
      <Col />
      <Col />
    </Grid>
    <Row />
  </Grid>
</Page>
```

#### Screen 1024 x 768 (Landscape)

![responsive-layout.png](examples/responsive-layout-landscape.png 'Responsive layout landscape example')

#### Screen 1024 x 768 (Portrait)

![responsive-layout.png](examples/responsive-layout-portrait.png 'Responsive layout portrait example')
