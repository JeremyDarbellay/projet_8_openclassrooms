(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1315)}])},1516:function(e,t){"use strict";function n(e,t,n,l){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let l=n(4788),r=n(8754),o=n(224),a=r._(n(7294)),i=n(4532),u=n(3353),c=n(1410),s=n(9064),f=n(370),d=n(9955),p=n(4224),h=n(508),m=n(1516),_=n(4266),y=new Set;function j(e,t,n,l,r){if(r||(0,u.isLocalURL)(t)){if(!l.bypassPrefetchedCheck){let r=void 0!==l.locale?l.locale:"locale"in e?e.locale:void 0,o=t+"%"+n+"%"+r;if(y.has(o))return;y.add(o)}Promise.resolve(e.prefetch(t,n,l)).catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}let x=a.default.forwardRef(function(e,t){let n,r;let{href:c,as:y,children:x,prefetch:b,passHref:g,replace:k,shallow:C,scroll:E,locale:N,onClick:M,onMouseEnter:P,onTouchStart:L,legacyBehavior:O=!1}=e,S=o._(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=x,O&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));let w=!1!==b,I=a.default.useContext(d.RouterContext),T=a.default.useContext(p.AppRouterContext),R=null!=I?I:T,U=!I,{href:D,as:A}=a.default.useMemo(()=>{if(!I){let e=v(c);return{href:e,as:y?v(y):e}}let[e,t]=(0,i.resolveHref)(I,c,!0);return{href:e,as:y?(0,i.resolveHref)(I,y):t||e}},[I,c,y]),H=a.default.useRef(D),K=a.default.useRef(A);O&&(r=a.default.Children.only(n));let B=O?r&&"object"==typeof r&&r.ref:t,[X,q,J]=(0,h.useIntersection)({rootMargin:"200px"}),z=a.default.useCallback(e=>{(K.current!==A||H.current!==D)&&(J(),K.current=A,H.current=D),X(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[A,B,D,J,X]);a.default.useEffect(()=>{R&&q&&w&&j(R,D,A,{locale:N},U)},[A,D,q,N,w,null==I?void 0:I.locale,R,U]);let F={ref:z,onClick(e){O||"function"!=typeof M||M(e),O&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,n,l,r,o,i,c,s,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!(0,u.isLocalURL)(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](n,l,{shallow:o,locale:c,scroll:i}):t[r?"replace":"push"](l||n,{forceOptimisticNavigation:!f})};s?a.default.startTransition(h):h()}(e,R,D,A,k,C,E,N,U,w)},onMouseEnter(e){O||"function"!=typeof P||P(e),O&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),R&&(w||!U)&&j(R,D,A,{locale:N,priority:!0,bypassPrefetchedCheck:!0},U)},onTouchStart(e){O||"function"!=typeof L||L(e),O&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),R&&(w||!U)&&j(R,D,A,{locale:N,priority:!0,bypassPrefetchedCheck:!0},U)}};if((0,s.isAbsoluteUrl)(A))F.href=A;else if(!O||g||"a"===r.type&&!("href"in r.props)){let e=void 0!==N?N:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&(0,m.getDomainLocale)(A,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);F.href=t||(0,_.addBasePath)((0,f.addLocale)(A,e,null==I?void 0:I.defaultLocale))}return O?a.default.cloneElement(r,F):a.default.createElement("a",l._({},S,F),n)}),b=x;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return u}});let l=n(7294),r=n(29),o="function"==typeof IntersectionObserver,a=new Map,i=[];function u(e){let{rootRef:t,rootMargin:n,disabled:u}=e,c=u||!o,[s,f]=(0,l.useState)(!1),d=(0,l.useRef)(null),p=(0,l.useCallback)(e=>{d.current=e},[]);(0,l.useEffect)(()=>{if(o){if(c||s)return;let e=d.current;if(e&&e.tagName){let l=function(e,t,n){let{id:l,observer:r,elements:o}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},l=i.find(e=>e.root===n.root&&e.margin===n.margin);if(l&&(t=a.get(l)))return t;let r=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:o,elements:r},i.push(n),a.set(n,t),t}(n);return o.set(e,t),r.observe(e),function(){if(o.delete(e),r.unobserve(e),0===o.size){r.disconnect(),a.delete(l);let e=i.findIndex(e=>e.root===l.root&&e.margin===l.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return l}}else if(!s){let e=(0,r.requestIdleCallback)(()=>f(!0));return()=>(0,r.cancelIdleCallback)(e)}},[c,n,t,s,d.current]);let h=(0,l.useCallback)(()=>{f(!1)},[]);return[p,s,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1315:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var l=n(5893);n(7952);var r=n(1664),o=n.n(r),a=n(9736),i=n.n(a),u=n(7294);function c(e){let{children:t}=e;(0,u.useEffect)(()=>{"opposite"===localStorage.getItem("theme")&&document.documentElement.classList.add("opposite")},[]);let[n,r]=(0,u.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("header",{className:i().header,children:[(0,l.jsx)("button",{className:i().logo,children:(0,l.jsx)(o(),{href:"/",children:"J\xe9r\xe9my Darbellay"})}),(0,l.jsx)("nav",{children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:i().mainLink,children:(0,l.jsx)(o(),{href:"/curriculum_vitae",className:"link",children:"C.V."})}),(0,l.jsx)("li",{className:i().mainLink,children:(0,l.jsx)(o(),{href:"/projets",className:"link",children:"Projets"})}),(0,l.jsx)("li",{className:i().mainLink,children:(0,l.jsx)(o(),{href:"/competences",className:"link",children:"Comp\xe9tences"})}),(0,l.jsx)("li",{className:i().mainLink,children:(0,l.jsx)("button",{onClick:function(){document.documentElement.classList.toggle("opposite"),"opposite"===localStorage.getItem("theme")?localStorage.removeItem("theme"):localStorage.setItem("theme","opposite"),r(!n)},children:"Color mode"})})]})})]}),(0,l.jsx)("main",{children:t}),(0,l.jsxs)("footer",{className:i().footer,children:[(0,l.jsx)("p",{children:"\xa9 Darbellay J\xe9r\xe9my - 2023"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(o(),{className:"link",href:"mailto:jeremy.darbellay@gmail.com",children:"contact"})}),(0,l.jsx)("li",{children:(0,l.jsx)(o(),{className:"link",href:"/legal_terms",children:"mentions l\xe9gales"})}),(0,l.jsx)("li",{children:(0,l.jsx)(o(),{className:"link",href:"/remerciements",children:"remerciements"})})]})]})]})}function s(e){let{Component:t,pageProps:n}=e;return(0,l.jsx)(c,{children:(0,l.jsx)(t,{...n})})}},7952:function(){},9736:function(e){e.exports={header:"layout_header__mSfEk",logo:"layout_logo__Ukt3U",invertColor:"layout_invertColor__H4cQd",mainLink:"layout_mainLink__WGNdq",active:"layout_active__u1AXd",footer:"layout_footer__Mf9_B"}},1664:function(e,t,n){e.exports=n(5569)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);