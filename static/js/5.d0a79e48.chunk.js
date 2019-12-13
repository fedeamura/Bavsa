webpackJsonp([5],{

/***/ 1504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var styles=function styles(theme){var _div,_root,_contenedorImagen;return{root:(_root={backgroundColor:'#f8fafb',overflow:'auto'},_defineProperty(_root,theme.breakpoints.up('sm'),{}),_defineProperty(_root,'width','100%'),_defineProperty(_root,'& > div',(_div={padding:theme.spacing(2),width:'100%'},_defineProperty(_div,theme.breakpoints.up('sm'),{paddingLeft:theme.spacing(4),paddingRight:theme.spacing(4)}),_defineProperty(_div,theme.breakpoints.up('md'),{paddingLeft:theme.spacing(8),paddingRight:theme.spacing(8)}),_defineProperty(_div,theme.breakpoints.up('lg'),{paddingLeft:theme.spacing(16),paddingRight:theme.spacing(16)}),_defineProperty(_div,theme.breakpoints.up('xl'),{paddingLeft:theme.spacing(32),paddingRight:theme.spacing(32)}),_div)),_root),contenedorImagen:(_contenedorImagen={width:'100%',height:300},_defineProperty(_contenedorImagen,theme.breakpoints.up('sm'),{paddingRight:theme.spacing(4)}),_defineProperty(_contenedorImagen,'& .imagen',{width:'100%',height:'100%',backgroundSize:'contain',backgroundPosition:'center',backgroundRepeat:'no-repeat'}),_contenedorImagen)};};/* harmony default export */ __webpack_exports__["a"] = (styles);

/***/ }),

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = PanelLogin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles__ = __webpack_require__(1504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Card__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_Tooltip__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_IconButton__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_memoize_one__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_icons_RefreshOutlined__ = __webpack_require__(886);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_icons_RefreshOutlined___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__material_ui_icons_RefreshOutlined__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Componentes_inputs__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Componentes_MiDialog__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_ui_core__ = __webpack_require__(327);
var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();//Styles
//REDUX
//Componentes
//Iconos
//Mis componentes
var useStyles=Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["e" /* makeStyles */])(__WEBPACK_IMPORTED_MODULE_3__styles__["a" /* default */]);function PanelLogin(_ref){var _ref$onLogin=_ref.onLogin,onLogin=_ref$onLogin===undefined?function(){}:_ref$onLogin;var classes=useStyles();var dispatch=Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["d" /* useDispatch */])();var _useState=Object(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(true),_useState2=_slicedToArray(_useState,2),cargando=_useState2[0],setCargando=_useState2[1];var _useDialog=Object(__WEBPACK_IMPORTED_MODULE_14__Componentes_MiDialog__["b" /* useDialog */])(),showDialog=_useDialog.showDialog;Object(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function(){},[]);function onBotonAccederClick(){onLogin({});}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:classes.root},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__material_ui_core__["e" /* Grid */],{container:true},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__material_ui_core__["e" /* Grid */],{item:true,xs:12},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{style:{width:200,height:50,marginBottom:32,backgroundSize:'contain',backgroundRepeat:'no-repeat',backgroundImage:'url(https://bavsa.com/img/logo-dark.png)'}})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__material_ui_core__["e" /* Grid */],{item:true,xs:12,sm:5,md:6,lg:8},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:classes.contenedorImagen},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'imagen',style:{backgroundImage:'url(https://imgur.com/kQhy0d8.png)'}}))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__material_ui_core__["e" /* Grid */],{item:true,xs:12,sm:7,md:6,lg:4},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__material_ui_core__["e" /* Grid */],{container:true,spacing:1},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__material_ui_core__["e" /* Grid */],{item:true,xs:12},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography__["a" /* default */],{variant:'h6'},'Bienvenido al sistema'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography__["a" /* default */],{variant:'subtitle1'},'Para continuar debe acceder con su usuario')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__material_ui_core__["e" /* Grid */],{item:true,xs:12}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__material_ui_core__["e" /* Grid */],{item:true,xs:12},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__Componentes_inputs__["f" /* MiTextField */],{label:'N\xBA de Documento'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__material_ui_core__["e" /* Grid */],{item:true,xs:12},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__Componentes_inputs__["f" /* MiTextField */],{label:'Nombre de usuario'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__material_ui_core__["e" /* Grid */],{item:true,xs:12},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__Componentes_inputs__["f" /* MiTextField */],{label:'Contrase\xF1a',type:'password'})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__material_ui_core__["e" /* Grid */],{item:true,xs:12}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__material_ui_core__["e" /* Grid */],{item:true,xs:12},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__material_ui_core__["d" /* Fab */],{variant:'extended',onClick:onBotonAccederClick,color:'primary',style:{marginRight:8}},'Acceder'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__material_ui_core__["d" /* Fab */],{variant:'extended',style:{backgroundColor:'white'}},'Nuevo usuario')))))));}

/***/ }),

/***/ 886:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(67);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(78));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
}), 'RefreshOutlined');

exports.default = _default;

/***/ })

});