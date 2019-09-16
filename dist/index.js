!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("prop-types"),require("react")):"function"==typeof define&&define.amd?define("react-parallax",["prop-types","react"],t):"object"==typeof exports?exports["react-parallax"]=t(require("prop-types"),require("react")):e["react-parallax"]=t(e.PropTypes,e.React)}("undefined"!=typeof self?self:this,function(n,r){return a={},o.m=i=[function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(1),m=n.n(i);function s(e){if(!e)return 0;var t=window,n=document,r=n.documentElement,o=n.getElementsByTagName("body")[0];return t.innerHeight||r.clientHeight||o.clientHeight}function c(e,t){return e?t?t.clientHeight:s(e):0}function l(e){var n=[],r=m.a.Children.toArray(e.children);return r.forEach(function(e,t){e.type&&e.type.isParallaxBackground&&(n=n.concat(r.splice(t,1)))}),{bgChildren:n,children:r}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(){function e(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,p(e).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(e,i["PureComponent"]),function(e,t,n){t&&u(e.prototype,t),n&&u(e,n)}(e,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.onMount,r=e.className;return m.a.createElement("div",{ref:function(e){return n(e)},className:r||"react-parallax-content",style:{position:"relative"}},t)}}]),e}();d.propTypes={children:o.a.node,className:o.a.string,onMount:o.a.func},d.propTypes={};var h=d;function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(n,!0).forEach(function(e){S(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j={position:"absolute",left:"50%",WebkitTransform:"translate3d(-50%, 0, 0)",transform:"translate3d(-50%, 0, 0)",WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",MozBackfaceVisibility:"hidden",MsBackfaceVisibility:"hidden"},k=function(){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=O(this,I(t).call(this,e))).onWindowResize=function(){n.parentHeight=c(n.canUseDOM,n.parent),n.updatePosition()},n.onWindowLoad=function(){n.updatePosition()},n.onScroll=function(){if(n.canUseDOM){var e=Date.now();10<=e-n.timestamp&&function(e,t,n){var r=1<arguments.length&&void 0!==t?t:0,o=2<arguments.length?n:void 0;if(!o)return!1;var i=e.getBoundingClientRect().top-r,a=e.getBoundingClientRect().bottom+r;return i<=s(o)&&0<=a}(n.node,100,n.canUseDOM)&&(window.requestAnimationFrame(n.updatePosition),n.timestamp=e)}},n.onContentMount=function(e){n.content=e},n.updatePosition=function(){if(n.content){var e=!1;n.contentHeight=n.content.getBoundingClientRect().height,n.contentWidth=n.node.getBoundingClientRect().width,n.img&&n.img.naturalWidth/n.img.naturalHeight<n.contentWidth/n.getImageHeight()&&(e=!0);var t=function(e,t){if(!t)return 0;var n=e.getBoundingClientRect(),r=n.top,o=n.height,i=c(t),a=i<o?o:i;return function(e,t,n){return(n-e)/(t-e)||0}(-o,a,Math.round(a<r?a:r))}(n.node,n.canUseDOM,n.parent);n.img&&n.setImagePosition(t,e),n.bg&&0<n.splitChildren.bgChildren.length&&n.setBackgroundPosition(t)}},n.state={bgImage:e.bgImage,bgImageSrcSet:e.bgImageSrcSet,bgImageSizes:e.bgImageSizes,imgStyle:j,bgStyle:v({},j,{},e.bgStyle),percentage:0},n.canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement),n.node=null,n.content=null,n.splitChildren=l(e),n.bgImageLoaded=!1,n.bgImageRef=void 0,n.parent=e.parent,n.parentHeight=c(n.canUseDOM,n.parent),n.timestamp=Date.now(),n.dynamicBlur=!(!e.blur||void 0===e.blur.min||void 0===e.blur.max),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,i["Component"]),function(e,t,n){t&&w(e.prototype,t),n&&w(e,n)}(t,[{key:"componentDidMount",value:function(){var e=this.props.parent,t=this.state,n=t.bgImage,r=t.bgImageSrcSet,o=t.bgImageSizes;this.parent=e||document,this.addListeners(),n?this.loadImage(n,r,o):this.updatePosition()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.parent,r=t.bgImage,o=t.bgImageSrcSet,i=t.bgImageSizes,a=this.state.bgImage;this.splitChildren=l(this.props),e.parent!==n&&(this.removeListeners(e.parent),(this.parent=n)&&this.addListeners()),this.parentHeight=c(this.canUseDOM,this.parent),a!==r&&this.loadImage(r,o,i)}},{key:"componentWillUnmount",value:function(){this.removeListeners(this.parent),this.releaseImage()}},{key:"setBackgroundPosition",value:function(e){var t=this.props,n=t.disabled,r=t.strength;if(!0!==n){var o=this.state.bgStyle,i="translate3d(-50%, ".concat((r<0?r:0)-r*e,"px, 0)");this.setState({bgStyle:v({},o,{WebkitTransform:i,transform:i}),percentage:e})}}},{key:"setImagePosition",value:function(e,t){var n=1<arguments.length&&void 0!==t&&t,r=this.props,o=r.disabled,i=r.strength,a=r.blur,s=n?"auto":"".concat(this.getImageHeight(),"px"),c=n?"".concat(this.contentWidth,"px"):"auto";if(!0!==o){var l=this.state.imgStyle,u="translate3d(-50%, ".concat((i<0?i:0)-i*e,"px, 0)"),f="none";if(a){var p=this.dynamicBlur?a.min+(1-e)*a.max:a;f="blur(".concat(p,"px)")}this.setState({imgStyle:v({},l,{height:s,width:c,WebkitTransform:u,transform:u,WebkitFilter:f,filter:f}),percentage:e})}}},{key:"getImageHeight",value:function(){var e=this.props.strength,t=(e<0?2.5:1)*Math.abs(e);return Math.floor(this.contentHeight+t)}},{key:"loadImage",value:function(e,t,n){var r=this;this.releaseImage(),this.bgImageRef=new Image,this.bgImageRef.onload=function(){r.setState({bgImage:e,bgImageSrcSet:t,bgImageSizes:n},function(){return r.updatePosition()})},this.bgImageRef.onerror=this.bgImageRef.onload,this.bgImageRef.src=e,this.bgImageRef.srcset=t||"",this.bgImageRef.sizes=n||""}},{key:"releaseImage",value:function(){this.bgImageRef&&(this.bgImageRef.onload=null,this.bgImageRef.onerror=null,delete this.bgImageRef)}},{key:"addListeners",value:function(){this.canUseDOM&&this.parent&&(this.parent.addEventListener("scroll",this.onScroll,!1),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("load",this.onWindowLoad,!1))}},{key:"removeListeners",value:function(e){this.canUseDOM&&(e&&e.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),window.removeEventListener("load",this.onWindowLoad,!1))}},{key:"log",value:function(){var e=this.props.log;if(e){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];console.log(n)}}},{key:"render",value:function(){var t=this;console.log("hi from new module");var e=this.props,n=e.className,r=e.style,o=e.bgClassName,i=e.contentClassName,a=e.bgImageAlt,s=e.renderLayer,c=e.bgImageStyle,l=this.state,u=l.bgImage,f=l.bgImageSrcSet,p=l.bgImageSizes,g=l.percentage,d=l.imgStyle,b=l.bgStyle;return m.a.createElement("div",{className:"react-parallax ".concat(n),style:v({position:"relative",overflow:"hidden"},r),ref:function(e){t.node=e}},u?m.a.createElement("img",{className:o,src:u,srcSet:f,sizes:p,ref:function(e){t.img=e},alt:a,style:v({},d,{},c)}):null,s?s(Math.min(-(g-1),1)):null,0<this.splitChildren.bgChildren.length?m.a.createElement("div",{className:"react-parallax-background-children",ref:function(e){t.bg=e},style:b},this.splitChildren.bgChildren):null,m.a.createElement(h,{onMount:this.onContentMount,className:i},this.splitChildren.children))}}]),t}();k.propTypes={bgClassName:o.a.string,bgImage:o.a.string,bgImageAlt:o.a.string,bgImageSizes:o.a.string,bgImageSrcSet:o.a.string,bgImageStyle:o.a.shape({}),bgStyle:o.a.shape({}),blur:o.a.oneOfType([o.a.number,o.a.object]),className:o.a.string,contentClassName:o.a.string,disabled:o.a.bool,log:o.a.bool,parent:o.a.any,renderLayer:o.a.func,strength:o.a.number,style:o.a.shape({})},k.defaultProps={bgClassName:"react-parallax-bgimage",bgImage:void 0,bgImageAlt:"",bgImageSizes:void 0,bgImageSrcSet:void 0,bgImageStyle:void 0,bgStyle:void 0,blur:void 0,className:"",contentClassName:"",disabled:!1,log:!1,parent:void 0,renderLayer:void 0,strength:100,style:void 0};var x=k;function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var N=function(){function e(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),E(this,M(e).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(e,m.a.Component),function(e,t,n){t&&_(e.prototype,t),n&&_(e,n)}(e,[{key:"render",value:function(){return m.a.createElement("div",{className:"react-parallax-background ".concat(this.props.className)},this.props.children)}}],[{key:"isParallaxBackground",value:function(){return!0}}]),e}();N.propTypes={children:o.a.node,className:o.a.string},N.defaultProps={className:""};var L=N;n.d(t,"Parallax",function(){return x}),n.d(t,"Background",function(){return L})}],o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=2);function o(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var i,a});