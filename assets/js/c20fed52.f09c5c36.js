"use strict";
(self["webpackChunkboilerplate_ui_framework"] = self["webpackChunkboilerplate_ui_framework"] || []).push([[452],{

/***/ 4267:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "contentTitle": function() { return /* binding */ contentTitle; },
  "default": function() { return /* binding */ MDXContent; },
  "frontMatter": function() { return /* binding */ frontMatter; },
  "metadata": function() { return /* binding */ metadata; },
  "toc": function() { return /* binding */ toc; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(3366);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(3905);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(6742);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 4 modules
var createSuper = __webpack_require__(2882);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
;// CONCATENATED MODULE: ./UI/js/components/Card/index.ts
function handleCard(el,msg){el.addEventListener("click",function(ev){var target=ev.target;target.classList.add('text-gray-200');if(target.tagName.toLocaleLowerCase()==="button"){alert(target.innerHTML);}});}
;// CONCATENATED MODULE: ./UI/js/components/index.ts

;// CONCATENATED MODULE: ./UI/js/index.ts

;// CONCATENATED MODULE: ./UI/index.ts

;// CONCATENATED MODULE: ./src/components/Card/index.tsx
var CardData=new Array(4).fill("").map(function(value,key){return{title:"\u6807\u9898".concat(key),info:"\u63CF\u8FF0".concat(key),poster:"https://tailwindcss.com/img/card-top.jpg",tags:["Tag".concat(key),"TAG-next".concat(key)]};});var Card=function Card(_ref){var title=_ref.title,info=_ref.info,poster=_ref.poster,tags=_ref.tags,showBtn=_ref.showBtn,index=_ref.index;return/*#__PURE__*/react.createElement("div",{className:"max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8 v-card"},/*#__PURE__*/react.createElement("img",{className:"w-full",src:poster,alt:title}),/*#__PURE__*/react.createElement("div",{className:"px-6 py-4"},/*#__PURE__*/react.createElement("div",{className:"font-bold text-xl mb-2 text-gray-100"},title),/*#__PURE__*/react.createElement("p",{className:"text-gray-600 text-base"},info),showBtn&&/*#__PURE__*/react.createElement("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"},"\u6211\u662F\u53EF\u4EE5\u70B9\u51FB\u7684 Button ",index)),/*#__PURE__*/react.createElement("div",{className:"px-6 py-4"},tags.map(function(tag){return/*#__PURE__*/react.createElement("span",{key:tag,className:"inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2"},"#",tag);})));};var CardList=/*#__PURE__*/function(_React$Component){(0,inherits/* default */.Z)(CardList,_React$Component);var _super=(0,createSuper/* default */.Z)(CardList);function CardList(props){var _this;(0,classCallCheck/* default */.Z)(this,CardList);_this=_super.call(this,props);_this.box=void 0;_this.box=/*#__PURE__*/react.createRef();return _this;}(0,createClass/* default */.Z)(CardList,[{key:"componentDidMount",value:function componentDidMount(){if(this.props.handleJs){handleCard(this.box.current);}}},{key:"render",value:function render(){var _this2=this;return/*#__PURE__*/react.createElement("div",{ref:this.box,className:(0,clsx_m/* default */.Z)("card-list","flex","flex-row","mb-6")},this.props.data.map(function(card,index){return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)("m-2"),key:card.title},/*#__PURE__*/react.createElement(Card,{title:card.title,info:card.info,poster:card.poster,tags:card.tags,showBtn:_this2.props.handleJs,index:index}));}));}}]);return CardList;}(react.Component);
;// CONCATENATED MODULE: ./docs/components/card.mdx
var _excluded=["components"];var frontMatter={sidebar_position:1,title:'Card 组件'};var contentTitle='Card 组件';var metadata={"unversionedId":"components/card","id":"components/card","isDocsHomePage":false,"title":"Card 组件","description":"<!---","source":"@site/docs/components/card.mdx","sourceDirName":"components","slug":"/components/card","permalink":"/boilerplate-ui-framework-site/docs/components/card","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Card 组件"},"sidebar":"tutorialSidebar","previous":{"title":"自动部署","permalink":"/boilerplate-ui-framework-site/docs/advance/deploy"},"next":{"title":"图标","permalink":"/boilerplate-ui-framework-site/docs/components/icons"}};/* @jsxRuntime classic */ /* @jsx mdx */var cardItem=CardData[0];var toc=[{value:'基本卡片',id:'基本卡片',children:[],level:2},{value:'React 函数组件渲染',id:'react-函数组件渲染',children:[],level:2},{value:'React Class 组件渲染',id:'react-class-组件渲染',children:[],level:2},{value:'带 js 交互的 React 组件',id:'带-js-交互的-react-组件',children:[],level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,_excluded);return (0,esm/* mdx */.kt)(MDXLayout,(0,esm_extends/* default */.Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,esm/* mdx */.kt)("h1",{"id":"card-组件"},"Card \u7EC4\u4EF6"),(0,esm/* mdx */.kt)("blockquote",null,(0,esm/* mdx */.kt)("p",{parentName:"blockquote"},"\u8BE5\u7EC4\u4EF6\u662F\u7528\u4E8E\u6F14\u793A\u4F7F\u7528")),(0,esm/* mdx */.kt)(Link/* default */.Z,{to:"/docs/paths/create-a-component",mdxType:"Link"},"\u8BF7\u70B9\u51FB\u67E5\u770B\u8FD9\u91CC"),(0,esm/* mdx */.kt)("h2",{"id":"基本卡片"},"\u57FA\u672C\u5361\u7247"),(0,esm/* mdx */.kt)("section",{className:"tw"},(0,esm/* mdx */.kt)("div",{className:"max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8 v-card"},(0,esm/* mdx */.kt)("img",{className:"w-full",src:"https://tailwindcss.com/img/card-top.jpg",alt:"Sunset in the mountains"}),(0,esm/* mdx */.kt)("div",{className:"px-6 py-4"},(0,esm/* mdx */.kt)("div",{className:"font-bold text-xl mb-2"},"The Coldest Sunset"),(0,esm/* mdx */.kt)("p",{className:"text-gray-600 text-base"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.")),(0,esm/* mdx */.kt)("div",{className:"px-6 py-4"},(0,esm/* mdx */.kt)("span",{className:"inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2"},"#photography"),(0,esm/* mdx */.kt)("span",{className:"inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2"},"#travel"),(0,esm/* mdx */.kt)("span",{className:"inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600"},"#winter")))),(0,esm/* mdx */.kt)("pre",null,(0,esm/* mdx */.kt)("code",{parentName:"pre","className":"language-html"},"<div class=\"max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8\">\n  <img\n    class=\"w-full\"\n    src=\"https://tailwindcss.com/img/card-top.jpg\"\n    alt=\"Sunset in the mountains\"\n  />\n  <div class=\"px-6 py-4\">\n    <div class=\"font-bold text-xl mb-2\">The Coldest Sunset</div>\n    <p class=\"text-gray-600 text-base\">\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus\n      quia, nulla! Maiores et perferendis eaque, exercitationem praesentium\n      nihil.\n    </p>\n  </div>\n  <div class=\"px-6 py-4\">\n    <span\n      class=\"inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2\"\n    >\n      #photography\n    </span>\n    <span\n      class=\"inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2\"\n    >\n      #travel\n    </span>\n    <span\n      class=\"inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600\"\n    >\n      #winter\n    </span>\n  </div>\n</div>\n")),(0,esm/* mdx */.kt)("h2",{"id":"react-函数组件渲染"},"React \u51FD\u6570\u7EC4\u4EF6\u6E32\u67D3"),(0,esm/* mdx */.kt)("div",{"className":"admonition admonition-tip alert alert--success"},(0,esm/* mdx */.kt)("div",{parentName:"div","className":"admonition-heading"},(0,esm/* mdx */.kt)("h5",{parentName:"div"},(0,esm/* mdx */.kt)("span",{parentName:"h5","className":"admonition-icon"},(0,esm/* mdx */.kt)("svg",{parentName:"span","xmlns":"http://www.w3.org/2000/svg","width":"12","height":"16","viewBox":"0 0 12 16"},(0,esm/* mdx */.kt)("path",{parentName:"svg","fillRule":"evenodd","d":"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,esm/* mdx */.kt)("div",{parentName:"div","className":"admonition-content"},(0,esm/* mdx */.kt)("p",{parentName:"div"},"\u5728\u67E5\u770B\u6E90\u4EE3\u7801\u4E4B\u524D, \u8BF7\u786E\u4FDD\u4F60\u5BF9 \u51FD\u6570\u7EC4\u4EF6 \u4E0E class \u7EC4\u4EF6\u7684\u533A\u522B\u6709\u6240\u4E86\u89E3"),(0,esm/* mdx */.kt)("p",{parentName:"div"},(0,esm/* mdx */.kt)("a",{parentName:"p","href":"https://zh-hans.reactjs.org/docs/components-and-props.html#function-and-class-components"},"https://zh-hans.reactjs.org/docs/components-and-props.html#function-and-class-components")))),(0,esm/* mdx */.kt)("section",{className:"tw"},(0,esm/* mdx */.kt)(Card,{title:cardItem.title,info:cardItem.info,poster:cardItem.poster,tags:cardItem.tags,mdxType:"Card"})),(0,esm/* mdx */.kt)("pre",null,(0,esm/* mdx */.kt)("code",{parentName:"pre","className":"language-html"},"<div class=\"max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8 v-card\">\n  <img\n    class=\"w-full\"\n    src=\"https://tailwindcss.com/img/card-top.jpg\"\n    alt=\"\u6807\u9898\"\n  />\n  <div class=\"px-6 py-4\">\n    <div class=\"font-bold text-xl mb-2\">\u6807\u9898</div>\n    <p class=\"text-gray-600 text-base\">\u63CF\u8FF0</p>\n  </div>\n  <div class=\"px-6 py-4\">\n    <span\n      class=\"inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2\"\n      >#\u6807\u7B7E1</span\n    ><span\n      class=\"inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2\"\n      >#\u6807\u7B7E2</span\n    >\n  </div>\n</div>\n")),(0,esm/* mdx */.kt)("h2",{"id":"react-class-组件渲染"},"React Class \u7EC4\u4EF6\u6E32\u67D3"),(0,esm/* mdx */.kt)("section",{className:"tw"},(0,esm/* mdx */.kt)(CardList,{data:CardData,mdxType:"CardList"})),(0,esm/* mdx */.kt)("pre",null,(0,esm/* mdx */.kt)("code",{parentName:"pre","className":"language-html"},"<div class=\"card-list flex flex-row\">\n  <!--\u904D\u5386\u5F00\u59CB-->\n  <div class=\"m-2\">\n    <div class=\"max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8 v-card\">\n      <img\n        class=\"w-full\"\n        src=\"https://tailwindcss.com/img/card-top.jpg\"\n        alt=\"\u6807\u98980\"\n      />\n      <div class=\"px-6 py-4\">\n        <div class=\"font-bold text-xl mb-2\">\u6807\u98980</div>\n        <p class=\"text-gray-600 text-base\">\u63CF\u8FF00</p>\n      </div>\n      <div class=\"px-6 py-4\">\n        <span\n          class=\"inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2\"\n          >#Tag0</span\n        ><span\n          class=\"inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2\"\n          >#TAG-next0</span\n        >\n      </div>\n    </div>\n  </div>\n  <!--\u904D\u5386\u7ED3\u675F-->\n</div>\n")),(0,esm/* mdx */.kt)("h2",{"id":"带-js-交互的-react-组件"},"\u5E26 js \u4EA4\u4E92\u7684 React \u7EC4\u4EF6"),(0,esm/* mdx */.kt)("section",{className:"tw"},(0,esm/* mdx */.kt)(CardList,{id:"CardEvent",handleJs:true,data:CardData,mdxType:"CardList"})),(0,esm/* mdx */.kt)("pre",null,(0,esm/* mdx */.kt)("code",{parentName:"pre","className":"language-html","metastring":"title=\"html\"","title":"\"html\""},"<div class=\"card-list flex flex-row mb-6\">\n  <!--\u904D\u5386\u5F00\u59CB-->\n  <div class=\"m-2\">\n    <div class=\"max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8 v-card\">\n      <img\n        class=\"w-full\"\n        src=\"https://tailwindcss.com/img/card-top.jpg\"\n        alt=\"\u6807\u98983\"\n      />\n      <div class=\"px-6 py-4\">\n        <div class=\"font-bold text-xl mb-2\">\u6807\u98983</div>\n        <p class=\"text-gray-600 text-base\">\u63CF\u8FF03</p>\n        <button\n          class=\"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\"\n        >\n          \u6211\u662F\u53EF\u4EE5\u70B9\u51FB\u7684 Button 3\n        </button>\n      </div>\n      <div class=\"px-6 py-4\">\n        <span\n          class=\"inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2\"\n          >#Tag3</span\n        ><span\n          class=\"inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2\"\n          >#TAG-next3</span\n        >\n      </div>\n    </div>\n  </div>\n  <!--\u904D\u5386\u7ED3\u675F-->\n</div>\n")),(0,esm/* mdx */.kt)("pre",null,(0,esm/* mdx */.kt)("code",{parentName:"pre","className":"language-typescript","metastring":"title=\"JS 调用插件\"","title":"\"JS","调用插件\"":true},"import { handleCard } from \"@UI/js/components/card\";\nhandleCard(document.querySelector(\".card-list\") as HTMLDialogElement);\n")));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 6010:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
}


/***/ })

}]);