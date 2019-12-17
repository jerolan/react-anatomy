(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    12: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var templateObject_1,
        styled_components_browser_esm = __webpack_require__(25),
        FlexBox = __webpack_require__(36),
        __makeTemplateObject = function(cooked, raw) {
          return (
            Object.defineProperty
              ? Object.defineProperty(cooked, 'raw', { value: raw })
              : (cooked.raw = raw),
            cooked
          );
        },
        Row_Row = Object(styled_components_browser_esm.a)(FlexBox.a)(
          templateObject_1 ||
            (templateObject_1 = __makeTemplateObject(
              [
                '\n  flex-direction: row;\n  flex: ',
                ';\n\n  @media (min-width: 768px) {\n    flex: ',
                ';\n  }\n\n  @media (min-width: 992px) {\n    flex: ',
                ';\n  }\n\n  @media (min-width: 1200px) {\n    flex: ',
                ';\n  }\n',
              ],
              [
                '\n  flex-direction: row;\n  flex: ',
                ';\n\n  @media (min-width: 768px) {\n    flex: ',
                ';\n  }\n\n  @media (min-width: 992px) {\n    flex: ',
                ';\n  }\n\n  @media (min-width: 1200px) {\n    flex: ',
                ';\n  }\n',
              ]
            )),
          function(props) {
            return props.xs || 1;
          },
          function(props) {
            return props.sm;
          },
          function(props) {
            return props.md;
          },
          function(props) {
            return props.lg;
          }
        );
      __webpack_exports__.a = Row_Row;
    },
    13: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var templateObject_1,
        styled_components_browser_esm = __webpack_require__(25),
        FlexBox = __webpack_require__(36),
        __makeTemplateObject = function(cooked, raw) {
          return (
            Object.defineProperty
              ? Object.defineProperty(cooked, 'raw', { value: raw })
              : (cooked.raw = raw),
            cooked
          );
        },
        Grid = Object(styled_components_browser_esm.a)(FlexBox.a)(
          templateObject_1 ||
            (templateObject_1 = __makeTemplateObject(
              [
                '\n  flex: 1;\n  flex-direction: ',
                ';\n\n  @media (min-width: 768px) {\n    flex-direction: ',
                ';\n  }\n\n  @media (min-width: 992px) {\n    flex-direction: ',
                ';\n  }\n\n  @media (min-width: 1200px) {\n    flex-direction: ',
                ';\n  }\n',
              ],
              [
                '\n  flex: 1;\n  flex-direction: ',
                ';\n\n  @media (min-width: 768px) {\n    flex-direction: ',
                ';\n  }\n\n  @media (min-width: 992px) {\n    flex-direction: ',
                ';\n  }\n\n  @media (min-width: 1200px) {\n    flex-direction: ',
                ';\n  }\n',
              ]
            )),
          function(props) {
            return props.xs || 'column';
          },
          function(props) {
            return props.sm;
          },
          function(props) {
            return props.md;
          },
          function(props) {
            return props.lg;
          }
        );
      __webpack_exports__.a = Grid;
    },
    14: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var templateObject_1,
        styled_components_browser_esm = __webpack_require__(25),
        FlexBox = __webpack_require__(36),
        __makeTemplateObject = function(cooked, raw) {
          return (
            Object.defineProperty
              ? Object.defineProperty(cooked, 'raw', { value: raw })
              : (cooked.raw = raw),
            cooked
          );
        },
        Page_Page = Object(styled_components_browser_esm.a)(FlexBox.a)(
          templateObject_1 ||
            (templateObject_1 = __makeTemplateObject(
              ['\n  min-height: 100vh;\n  width: 100vw;\n'],
              ['\n  min-height: 100vh;\n  width: 100vw;\n']
            ))
        );
      __webpack_exports__.a = Page_Page;
    },
    232: function(module, exports, __webpack_require__) {
      __webpack_require__(233),
        __webpack_require__(336),
        (module.exports = __webpack_require__(337));
    },
    337: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            56
          );
          const req = __webpack_require__(501);
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(
            function loadStories() {
              req.keys().forEach(req);
            },
            module
          );
        }.call(this, __webpack_require__(111)(module));
    },
    36: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var templateObject_1,
        __makeTemplateObject = function(cooked, raw) {
          return (
            Object.defineProperty
              ? Object.defineProperty(cooked, 'raw', { value: raw })
              : (cooked.raw = raw),
            cooked
          );
        },
        FlexBox_FlexBox = __webpack_require__(25).a.div(
          templateObject_1 ||
            (templateObject_1 = __makeTemplateObject(
              ['\n  display: flex;\n'],
              ['\n  display: flex;\n']
            ))
        );
      __webpack_exports__.a = FlexBox_FlexBox;
    },
    501: function(module, exports, __webpack_require__) {
      var map = {
        './components.stories.tsx': 502,
        './examples.stories.tsx': 507,
      };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 501);
    },
    502: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              56
            ),
            _src_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14),
            _src_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13),
            _src_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12),
            _src_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8),
            story = Object(
              _storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf
            )('Layout', module);
          story.add('<Page />', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _src_Page__WEBPACK_IMPORTED_MODULE_2__.a,
              { style: { backgroundColor: '#fafafa' } },
              "Base Page Component, It's covers the 100vw and 100vh"
            );
          }),
            story.add('<Grid />', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src_Page__WEBPACK_IMPORTED_MODULE_2__.a,
                null,
                'Page is used as parent',
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _src_Grid__WEBPACK_IMPORTED_MODULE_3__.a,
                  { style: { backgroundColor: '#fafafa' } },
                  'Base Grid Component, It fills any flex parentt'
                )
              );
            }),
            story.add('<Row />', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src_Page__WEBPACK_IMPORTED_MODULE_2__.a,
                null,
                'Page is used as parent',
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _src_Grid__WEBPACK_IMPORTED_MODULE_3__.a,
                  { style: { backgroundColor: '#fafafa' }, xs: 'column' },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _src_Row__WEBPACK_IMPORTED_MODULE_4__.a,
                    { style: { backgroundColor: 'red' } },
                    'Row 1 - Auto 50%'
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _src_Row__WEBPACK_IMPORTED_MODULE_4__.a,
                    { style: { backgroundColor: 'blue' } },
                    'Row 2 - Auto 50%'
                  )
                )
              );
            }),
            story.add('<Col />', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src_Page__WEBPACK_IMPORTED_MODULE_2__.a,
                null,
                'Page is used as parent',
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _src_Grid__WEBPACK_IMPORTED_MODULE_3__.a,
                  { style: { backgroundColor: '#fafafa' }, xs: 'row' },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _src_Col__WEBPACK_IMPORTED_MODULE_5__.a,
                    { style: { backgroundColor: 'red' } },
                    'Col 1 - Auto 50%'
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _src_Col__WEBPACK_IMPORTED_MODULE_5__.a,
                    { style: { backgroundColor: 'blue' } },
                    'Col 2 - Auto 50%'
                  )
                )
              );
            });
        }.call(this, __webpack_require__(111)(module));
    },
    507: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              56
            ),
            _src_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14),
            _src_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13),
            _src_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12),
            _src_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8),
            story = Object(
              _storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf
            )('Examples', module);
          story.add('Two columns (50% and 50%)', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _src_Page__WEBPACK_IMPORTED_MODULE_2__.a,
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src_Grid__WEBPACK_IMPORTED_MODULE_3__.a,
                { xs: 'row' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _src_Col__WEBPACK_IMPORTED_MODULE_5__.a,
                  { style: { backgroundColor: 'magenta' } }
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _src_Col__WEBPACK_IMPORTED_MODULE_5__.a,
                  { style: { backgroundColor: 'red' } }
                )
              )
            );
          }),
            story.add('Two rows', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src_Page__WEBPACK_IMPORTED_MODULE_2__.a,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _src_Grid__WEBPACK_IMPORTED_MODULE_3__.a,
                  { xs: 'column' },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _src_Row__WEBPACK_IMPORTED_MODULE_4__.a,
                    { style: { backgroundColor: 'magenta' } }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _src_Row__WEBPACK_IMPORTED_MODULE_4__.a,
                    { style: { backgroundColor: 'red' } }
                  )
                )
              );
            }),
            story.add('Two rows (75% and 25%)', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src_Page__WEBPACK_IMPORTED_MODULE_2__.a,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _src_Grid__WEBPACK_IMPORTED_MODULE_3__.a,
                  { xs: 'column' },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _src_Row__WEBPACK_IMPORTED_MODULE_4__.a,
                    { xs: 75, style: { backgroundColor: 'magenta' } }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _src_Row__WEBPACK_IMPORTED_MODULE_4__.a,
                    { xs: 25, style: { backgroundColor: 'red' } }
                  )
                )
              );
            }),
            story.add('Two rows (3 and 1)', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src_Page__WEBPACK_IMPORTED_MODULE_2__.a,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _src_Grid__WEBPACK_IMPORTED_MODULE_3__.a,
                  { xs: 'column' },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _src_Row__WEBPACK_IMPORTED_MODULE_4__.a,
                    { xs: 3, style: { backgroundColor: 'magenta' } }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _src_Row__WEBPACK_IMPORTED_MODULE_4__.a,
                    { xs: 1, style: { backgroundColor: 'red' } }
                  )
                )
              );
            }),
            story.add('Three columns (33.33% each)', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src_Page__WEBPACK_IMPORTED_MODULE_2__.a,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _src_Grid__WEBPACK_IMPORTED_MODULE_3__.a,
                  { xs: 'row' },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _src_Col__WEBPACK_IMPORTED_MODULE_5__.a,
                    { style: { backgroundColor: 'magenta' } }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _src_Col__WEBPACK_IMPORTED_MODULE_5__.a,
                    { style: { backgroundColor: 'red' } }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _src_Col__WEBPACK_IMPORTED_MODULE_5__.a,
                    { style: { backgroundColor: 'green' } }
                  )
                )
              );
            }),
            story.add('Three rows (50%, 25% and 25%)', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src_Page__WEBPACK_IMPORTED_MODULE_2__.a,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _src_Grid__WEBPACK_IMPORTED_MODULE_3__.a,
                  { xs: 'row' },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _src_Col__WEBPACK_IMPORTED_MODULE_5__.a,
                    { xs: 2, style: { backgroundColor: 'magenta' } }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _src_Col__WEBPACK_IMPORTED_MODULE_5__.a,
                    { xs: 1, style: { backgroundColor: 'red' } }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _src_Col__WEBPACK_IMPORTED_MODULE_5__.a,
                    { xs: 1, style: { backgroundColor: 'green' } }
                  )
                )
              );
            }),
            story.add('Nested Layout or Grid', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src_Page__WEBPACK_IMPORTED_MODULE_2__.a,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _src_Grid__WEBPACK_IMPORTED_MODULE_3__.a,
                  { xs: 'row' },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _src_Col__WEBPACK_IMPORTED_MODULE_5__.a,
                    { style: { backgroundColor: 'magenta' } }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _src_Col__WEBPACK_IMPORTED_MODULE_5__.a,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _src_Row__WEBPACK_IMPORTED_MODULE_4__.a,
                      { style: { backgroundColor: 'red' } }
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _src_Row__WEBPACK_IMPORTED_MODULE_4__.a,
                      { style: { backgroundColor: 'green' } }
                    )
                  )
                )
              );
            }),
            story.add('Fixed width and fluid width combination', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src_Page__WEBPACK_IMPORTED_MODULE_2__.a,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _src_Grid__WEBPACK_IMPORTED_MODULE_3__.a,
                  { xs: 'row' },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _src_Col__WEBPACK_IMPORTED_MODULE_5__.a,
                    { style: { maxWidth: 40, backgroundColor: 'magenta' } }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _src_Col__WEBPACK_IMPORTED_MODULE_5__.a,
                    { style: { backgroundColor: 'red' } }
                  )
                )
              );
            }),
            story.add('Fixed height and fluid height combination', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src_Page__WEBPACK_IMPORTED_MODULE_2__.a,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _src_Grid__WEBPACK_IMPORTED_MODULE_3__.a,
                  { xs: 'column' },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _src_Row__WEBPACK_IMPORTED_MODULE_4__.a,
                    { style: { maxHeight: 40, backgroundColor: 'magenta' } }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _src_Row__WEBPACK_IMPORTED_MODULE_4__.a,
                    { style: { backgroundColor: 'red' } }
                  )
                )
              );
            }),
            story.add('Responsive layout', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src_Page__WEBPACK_IMPORTED_MODULE_2__.a,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _src_Grid__WEBPACK_IMPORTED_MODULE_3__.a,
                  { style: { backgroundColor: '#fafafa' }, xs: 'column' },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _src_Row__WEBPACK_IMPORTED_MODULE_4__.a,
                    { style: { backgroundColor: 'red' } }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _src_Grid__WEBPACK_IMPORTED_MODULE_3__.a,
                    { xs: 'column', md: 'row' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _src_Col__WEBPACK_IMPORTED_MODULE_5__.a,
                      { style: { backgroundColor: 'blue' } }
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _src_Col__WEBPACK_IMPORTED_MODULE_5__.a,
                      { style: { backgroundColor: 'green' } }
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _src_Col__WEBPACK_IMPORTED_MODULE_5__.a,
                      { style: { backgroundColor: 'purple' } }
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _src_Row__WEBPACK_IMPORTED_MODULE_4__.a,
                    { style: { backgroundColor: 'pink' } }
                  )
                )
              );
            });
        }.call(this, __webpack_require__(111)(module));
    },
    8: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var templateObject_1,
        styled_components_browser_esm = __webpack_require__(25),
        FlexBox = __webpack_require__(36),
        __makeTemplateObject = function(cooked, raw) {
          return (
            Object.defineProperty
              ? Object.defineProperty(cooked, 'raw', { value: raw })
              : (cooked.raw = raw),
            cooked
          );
        },
        Col_Col = Object(styled_components_browser_esm.a)(FlexBox.a)(
          templateObject_1 ||
            (templateObject_1 = __makeTemplateObject(
              [
                '\n  flex-direction: column;\n  flex: ',
                ';\n\n  @media (min-width: 768px) {\n    flex: ',
                ';\n  }\n\n  @media (min-width: 992px) {\n    flex: ',
                ';\n  }\n\n  @media (min-width: 1200px) {\n    flex: ',
                ';\n  }\n',
              ],
              [
                '\n  flex-direction: column;\n  flex: ',
                ';\n\n  @media (min-width: 768px) {\n    flex: ',
                ';\n  }\n\n  @media (min-width: 992px) {\n    flex: ',
                ';\n  }\n\n  @media (min-width: 1200px) {\n    flex: ',
                ';\n  }\n',
              ]
            )),
          function(props) {
            return props.xs || 1;
          },
          function(props) {
            return props.sm;
          },
          function(props) {
            return props.md;
          },
          function(props) {
            return props.lg;
          }
        );
      __webpack_exports__.a = Col_Col;
    },
  },
  [[232, 1, 2]],
]);
//# sourceMappingURL=main.7bacc080f32353d58f49.bundle.js.map
