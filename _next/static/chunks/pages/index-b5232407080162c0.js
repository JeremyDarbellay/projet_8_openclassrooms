(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7814:function(e,t,r){"use strict";r.d(t,{G:function(){return y}});var n=r(3636),o=r(5697),s=r.n(o),i=r(7294);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){u(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function A(e){var t;return(t=e-0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})).substr(0,1).toLowerCase()+e.substr(1)}var d=["style"],m=!1;try{m=!0}catch(e){}function b(e){return e&&"object"===c(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:e&&"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function x(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}var y=i.forwardRef(function(e,t){var r,o,s,i,a,c,f,A,d,j,g,v,O,w,E,C,k,I,P,_=e.icon,S=e.mask,D=e.symbol,T=e.className,N=e.title,Q=e.titleId,z=e.maskId,M=b(_),U=x("classes",[].concat(p((o=e.beat,s=e.fade,i=e.beatFade,a=e.bounce,c=e.shake,f=e.flash,A=e.spin,d=e.spinPulse,j=e.spinReverse,g=e.pulse,v=e.fixedWidth,O=e.inverse,w=e.border,E=e.listItem,C=e.flip,k=e.size,I=e.rotation,P=e.pull,Object.keys((u(r={"fa-beat":o,"fa-fade":s,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":c,"fa-flash":f,"fa-spin":A,"fa-spin-reverse":j,"fa-spin-pulse":d,"fa-pulse":g,"fa-fw":v,"fa-inverse":O,"fa-border":w,"fa-li":E,"fa-flip":!0===C,"fa-flip-horizontal":"horizontal"===C||"both"===C,"fa-flip-vertical":"vertical"===C||"both"===C},"fa-".concat(k),null!=k),u(r,"fa-rotate-".concat(I),null!=I&&0!==I),u(r,"fa-pull-".concat(P),null!=P),u(r,"fa-swap-opacity",e.swapOpacity),r)).map(function(e){return r[e]?e:null}).filter(function(e){return e}))),p(T.split(" ")))),R=x("transform","string"==typeof e.transform?n.Qc.transform(e.transform):e.transform),q=x("mask",b(S)),J=(0,n.qv)(M,l(l(l(l({},U),R),q),{},{symbol:D,title:N,titleId:Q,maskId:z}));if(!J)return!function(){if(!m&&console&&"function"==typeof console.error){var e;(e=console).error.apply(e,arguments)}}("Could not find icon",M),null;var B=J.abstract,H={ref:t};return Object.keys(e).forEach(function(t){y.defaultProps.hasOwnProperty(t)||(H[t]=e[t])}),h(B[0],H)});y.displayName="FontAwesomeIcon",y.propTypes={beat:s().bool,border:s().bool,beatFade:s().bool,bounce:s().bool,className:s().string,fade:s().bool,flash:s().bool,mask:s().oneOfType([s().object,s().array,s().string]),maskId:s().string,fixedWidth:s().bool,inverse:s().bool,flip:s().oneOf([!0,!1,"horizontal","vertical","both"]),icon:s().oneOfType([s().object,s().array,s().string]),listItem:s().bool,pull:s().oneOf(["right","left"]),pulse:s().bool,rotation:s().oneOf([0,90,180,270]),shake:s().bool,size:s().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:s().bool,spinPulse:s().bool,spinReverse:s().bool,symbol:s().oneOfType([s().bool,s().string]),title:s().string,titleId:s().string,transform:s().oneOfType([s().string,s().object]),swapOpacity:s().bool},y.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var h=(function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map(function(r){return e(t,r)}),s=Object.keys(r.attributes||{}).reduce(function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var r,n=t.indexOf(":"),o=A(t.slice(0,n)),s=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o).charAt(0).toUpperCase()+r.slice(1)]=s:e[o]=s,e},{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[A(t)]=n}return e},{attrs:{}}),i=n.style,a=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(n,d);return s.attrs.style=l(l({},s.attrs.style),void 0===i?{}:i),t.apply(void 0,[r.tag,l(l({},s.attrs),a)].concat(p(o)))}).bind(null,i.createElement)},5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3546)}])},3546:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return A}});var n=r(5893),o=r(9008),s=r.n(o),i=r(5675),a=r.n(i),l={src:"/projet_8_openclassrooms//_next/static/media/office.f523f6a8.jpg",height:853,width:1280,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAArg//xAAcEAACAgIDAAAAAAAAAAAAAAACAwEEAAUSMYH/2gAIAQEAAT8Adu7M3KyVgAAwORdz5n//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:8,blurHeight:5},c=r(9854),u=r.n(c),p=r(7814),f=r(3024);function A(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:"Portfolio de J\xe9r\xe9my Darbellay "}),(0,n.jsx)("meta",{name:"description",content:"Bienvenue sur mon Portoflio, je suis J\xe9r\xe9my Darbellay, d\xe9veloppeur freelance \xe0 Nancy. Venez explorer mes projets et mon C.V. et me conna\xeetre un peu mieux"})]}),(0,n.jsxs)("div",{className:"".concat(u().accueil," full-width"),children:[(0,n.jsxs)("section",{className:u().mainSection,children:[(0,n.jsx)(a(),{className:u().officeImage,src:l,alt:"Un humain dessin\xe9 en fils",width:"600"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:"J\xe9r\xe9my Darbellay en quelques clics"}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("a",{className:"button",href:"https://github.com/JeremyDarbellay",children:[(0,n.jsx)(p.G,{icon:f.zhw}),"GitHub"]}),(0,n.jsxs)("a",{className:"button",href:"https://www.linkedin.com/in/jeremydarbellay",children:[(0,n.jsx)(p.G,{icon:f.D9H}),"LinkedIn"]}),(0,n.jsxs)("a",{className:"button",href:"https://www.malt.fr/profile/jeremydarbellay",children:[" ",(0,n.jsx)(d,{className:"svg-inline--fa"}),"Malt"]})]})]})]}),(0,n.jsxs)("section",{children:[(0,n.jsx)("h2",{children:"\xc0 propos de moi"}),(0,n.jsx)("p",{children:"Je m'appelle J\xe9r\xe9my Darbellay, je suis d\xe9veloppeur Web, j'ai eu un parcours diversifi\xe9, au d\xe9but, j'ai fais un cursus licence et master de Psychologie, puis je me suis r\xe9orient\xe9 vers le d\xe9veloppement Web. Aujourd'hui je suis fier de terminer ma formation D\xe9veloppeur Web de l'institution OpenClassrooms. J'ai pu exp\xe9rimenter et apprendre sur diff\xe9rents projets, que vous pourrez d\xe9couvrir par la suite."})]}),(0,n.jsxs)("section",{children:[(0,n.jsx)("h2",{children:"Mes comp\xe9tences"}),(0,n.jsx)("p",{children:"Gr\xe2ce \xe0 ma formation et \xe0 mon exp\xe9rience, je saurais vous apporter les solutions \xe0 vos projets. Je ma\xeetrise les langages de base du web comme HTML5 et CSS3 pour vous proposer une interface adapter \xe0 vos besoins."}),(0,n.jsx)("p",{children:"J'ai \xe9galement pu d\xe9velopper quelques back-end, ainsi je pourrais \xe9galement vous aider sur ce point et vous conseiller sur des options r\xe9elles et viables."})]}),(0,n.jsxs)("section",{children:[(0,n.jsx)("h2",{children:"Mes projets finalis\xe9s"}),(0,n.jsxs)("p",{children:["Mon apprentissage du d\xe9veloppement s'est fait au travers de la construction de 7 projets professionnalisants, j'ai commenc\xe9 par l'int\xe9gration d'une maquette via HTML et CSS, poursuivi par la cr\xe9ation d'interfaces dynamiques via Javascript.",(0,n.jsx)("br",{}),"Pour la suite, j'ai organis\xe9 la gestion de projet pour la cr\xe9ation d'un site internet.",(0,n.jsx)("br",{}),"J'ai ensuite approfondi toutes ces connaissances en allant un peu plus loin, par l'optimisation SEO d'un site de photographe, la cr\xe9ation d'un site via React pour une agence de location entre particuliers, l'\xe9tablissement du back office d'un site de notation de livre et termin\xe9 par la cr\xe9ation de ce Portofolio en appliquant toutes mes connaissances pr\xe9c\xe9demment acquises."]}),(0,n.jsx)("p",{children:"Aimant les d\xe9fis, j'ai essay\xe9 d'aller plus loin que les objectifs de chaque projets afin d'acquerir des comp\xe9tences plus larges. vous retrouverez ces projets sur mon profil Github et sur ma page de projets."})]})]})]})}let d=e=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"Malt",viewBox:"0 0 512 512",...e,children:[(0,n.jsx)("rect",{width:512,height:512,fill:"transparent",rx:"15%"}),(0,n.jsx)("path",{fill:"currentColor",d:"M408.4 103.8c-32.5-32.4-67.1-11.4-88.8 10.2L114.8 318.8c-21.7 21.7-44.4 54.7-10.2 88.8 34.1 34.1 67 11.4 88.7-10.3l204.8-204.8c21.7-21.6 42.7-56.3 10.3-88.7zm-195.7-8.4 43.4 43.4 44.1-44.2c3-3 6-5.8 9.1-8.4-4.6-23.3-17.9-44.4-53.3-44.4S207.3 63 202.8 86.3c3.3 2.9 6.6 5.8 9.9 9.1zm87.5 322.1-44.1-44.1-43.4 43.3c-3.3 3.3-6.5 6.4-9.8 9.2 5 23.8 19 45.5 53.1 45.5 34.2 0 48.3-21.9 53.2-45.7-3-2.6-6-5.2-9-8.2zm-105.9-217h-83.6c-30.7 0-70 9.7-70 55.5 0 34.3 21.9 48.3 45.8 53.2 2.8-3.2 107.8-108.7 107.8-108.7zm231.5 2.3c-2.6 3-107.9 108.8-107.9 108.8h82.4c30.7 0 70-7.3 70-55.6 0-35.3-21.1-48.6-44.5-53.2zm-204.1-29.7 14.9-14.9-43.3-43.4c-21.7-21.7-54.6-44.4-88.8-10.2-25 25-19.4 49.4-6.2 69.1 4.1-.3 123.4-.6 123.4-.6zM290.4 339l-15 15 44.2 44.1c21.7 21.7 56.3 42.7 88.7 10.3 24.2-24.2 18.7-49.7 5.3-70-4.3.3-123.2.6-123.2.6z"})]})},9854:function(e){e.exports={mainSection:"Home_mainSection__L6vkB",officeImage:"Home_officeImage__OX_Dc",pencher:"Home_pencher__VTRbr"}},2703:function(e,t,r){"use strict";var n=r(414);function o(){}function s(){}s.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,s,i){if(i!==n){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:o};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[948,675,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);