(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1315)}])},1516:function(e,t){"use strict";function n(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let r=n(4788),l=n(8754),o=n(224),a=l._(n(7294)),u=n(4532),c=n(3353),i=n(1410),s=n(9064),f=n(370),d=n(9955),p=n(4224),h=n(508),m=n(1516),_=n(4266),y=new Set;function j(e,t,n,r,l){if(l||(0,c.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let l=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,o=t+"%"+n+"%"+l;if(y.has(o))return;y.add(o)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let x=a.default.forwardRef(function(e,t){let n,l;let{href:i,as:y,children:x,prefetch:b,passHref:g,replace:k,shallow:C,scroll:E,locale:M,onClick:P,onMouseEnter:N,onTouchStart:O,legacyBehavior:S=!1}=e,w=o._(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=x,S&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));let I=!1!==b,L=a.default.useContext(d.RouterContext),T=a.default.useContext(p.AppRouterContext),R=null!=L?L:T,U=!L,{href:D,as:A}=a.default.useMemo(()=>{if(!L){let e=v(i);return{href:e,as:y?v(y):e}}let[e,t]=(0,u.resolveHref)(L,i,!0);return{href:e,as:y?(0,u.resolveHref)(L,y):t||e}},[L,i,y]),B=a.default.useRef(D),H=a.default.useRef(A);S&&(l=a.default.Children.only(n));let K=S?l&&"object"==typeof l&&l.ref:t,[X,J,q]=(0,h.useIntersection)({rootMargin:"200px"}),z=a.default.useCallback(e=>{(H.current!==A||B.current!==D)&&(q(),H.current=A,B.current=D),X(e),K&&("function"==typeof K?K(e):"object"==typeof K&&(K.current=e))},[A,K,D,q,X]);a.default.useEffect(()=>{R&&J&&I&&j(R,D,A,{locale:M},U)},[A,D,J,M,I,null==L?void 0:L.locale,R,U]);let F={ref:z,onClick(e){S||"function"!=typeof P||P(e),S&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,n,r,l,o,u,i,s,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!(0,c.isLocalURL)(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[l?"replace":"push"](n,r,{shallow:o,locale:i,scroll:u}):t[l?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};s?a.default.startTransition(h):h()}(e,R,D,A,k,C,E,M,U,I)},onMouseEnter(e){S||"function"!=typeof N||N(e),S&&l.props&&"function"==typeof l.props.onMouseEnter&&l.props.onMouseEnter(e),R&&(I||!U)&&j(R,D,A,{locale:M,priority:!0,bypassPrefetchedCheck:!0},U)},onTouchStart(e){S||"function"!=typeof O||O(e),S&&l.props&&"function"==typeof l.props.onTouchStart&&l.props.onTouchStart(e),R&&(I||!U)&&j(R,D,A,{locale:M,priority:!0,bypassPrefetchedCheck:!0},U)}};if((0,s.isAbsoluteUrl)(A))F.href=A;else if(!S||g||"a"===l.type&&!("href"in l.props)){let e=void 0!==M?M:null==L?void 0:L.locale,t=(null==L?void 0:L.isLocaleDomain)&&(0,m.getDomainLocale)(A,e,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);F.href=t||(0,_.addBasePath)((0,f.addLocale)(A,e,null==L?void 0:L.defaultLocale))}return S?a.default.cloneElement(l,F):a.default.createElement("a",r._({},w,F),n)}),b=x;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});let r=n(7294),l=n(29),o="function"==typeof IntersectionObserver,a=new Map,u=[];function c(e){let{rootRef:t,rootMargin:n,disabled:c}=e,i=c||!o,[s,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);(0,r.useEffect)(()=>{if(o){if(i||s)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:l,elements:o}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=u.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let l=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:o,elements:l},u.push(n),a.set(n,t),t}(n);return o.set(e,t),l.observe(e),function(){if(o.delete(e),l.unobserve(e),0===o.size){l.disconnect(),a.delete(r);let e=u.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!s){let e=(0,l.requestIdleCallback)(()=>f(!0));return()=>(0,l.cancelIdleCallback)(e)}},[i,n,t,s,d.current]);let h=(0,r.useCallback)(()=>{f(!1)},[]);return[p,s,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1315:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(5893);n(7952);var l=n(1664),o=n.n(l),a=n(9736),u=n.n(a),c=n(7294);function i(e){let{children:t}=e,[n,l]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{"opposite"===localStorage.getItem("theme")?document.documentElement.classList.add("opposite"):l(!0)},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("header",{className:u().header,children:[(0,r.jsx)("button",{className:u().logo,children:(0,r.jsx)(o(),{href:"/",children:"J\xe9r\xe9my Darbellay"})}),(0,r.jsx)("nav",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/curriculum_vitae",className:"link",children:"C.V."})}),(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/projets",className:"link",children:"Projets"})}),(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/competences",className:"link",children:"Comp\xe9tences"})}),(0,r.jsx)("li",{children:(0,r.jsx)("button",{className:"colorButton",onClick:function(){document.documentElement.classList.toggle("opposite"),"opposite"===localStorage.getItem("theme")?localStorage.removeItem("theme"):localStorage.setItem("theme","opposite"),l(!n)},children:"color"})})]})})]}),(0,r.jsx)("main",{className:"main",children:t}),(0,r.jsxs)("footer",{className:u().footer,children:[(0,r.jsx)("p",{children:"\xa9 Darbellay J\xe9r\xe9my - 2023"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(o(),{className:"link",href:"mailto:jeremy.darbellay@gmail.com",children:"contact"})}),(0,r.jsx)("li",{children:(0,r.jsx)(o(),{className:"link",href:"/legal_terms",children:"mentions l\xe9gales"})}),(0,r.jsx)("li",{children:(0,r.jsx)(o(),{className:"link",href:"/remerciements",children:"remerciements"})})]})]})]})}function s(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)(i,{children:(0,r.jsx)(t,{...n})})}},7952:function(){},9736:function(e){e.exports={header:"layout_header__mSfEk",logo:"layout_logo__Ukt3U",invertColor:"layout_invertColor__H4cQd",active:"layout_active__u1AXd",footer:"layout_footer__Mf9_B"}},1664:function(e,t,n){e.exports=n(5569)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);