(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[57],{7295:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projets/Kasa",function(){return n(2641)}])},4159:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var s=n(5893),r=n(347),a=n.n(r);n(5675);var i=n(1664),o=n.n(i);function u(e){let{meta:t}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("article",{className:a().card,children:[(0,s.jsxs)("p",{className:a().header,children:[(0,s.jsx)("strong",{children:"Nom du projet : "}),t.name]}),(0,s.jsxs)("p",{className:a().body,children:[(0,s.jsx)("strong",{children:"Description :"})," ",(0,s.jsx)("br",{}),t.description]}),(0,s.jsxs)("p",{className:a().footer,children:[(0,s.jsx)("strong",{children:"Tags : "}),t.tags]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(o(),{className:"button",href:"".concat(t.sources),children:"sources du projet"}),(0,s.jsx)(o(),{className:"button",href:"".concat(t.demo),children:"d\xe9monstration"})]})]})})}},2641:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h},meta:function(){return m}});var s=n(5893),r=n(1151),a=n(2151),i=n.n(a),o={src:"/projet_8_openclassrooms//_next/static/media/banner-kasa.779442a8.png",height:288,width:728,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAAVklEQVR42gFLALT/APu7vOvNy/3l59/AvN60ru/Nyd7Fvvq7ugDqraavsKf2+PjazsjayMPOy7vI0czfrK4A73Fl2WxX99DL//X1//f34ry265mW9pKTems48QUkiGEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3},u=n(5675),c=n.n(u),l=n(9008),d=n.n(l),p=n(4159);let x=function(e){let{children:t}=e,n=Object.assign({div:"div"},(0,r.ah)());return(0,s.jsx)(n.div,{className:i().mdx,children:t})},m={name:"Kasa",description:"Construction d'une plateforme web de location d'appartements entre particuliers afin d'effectuer la migration de ASP.NET vers une stack javascript bas\xe9e sur Node et React. Ce projet ne contiendra que la partie Front-End avec React et React-Router, sans autres d\xe9pendances.",cover:o,tags:"React, ReactRouter, Tests",sources:"https://github.com/JeremyDarbellay/projet_6_openclassrooms",demo:"https://jeremydarbellay.github.io/projet_6_openclassrooms/"};function j(e){let t=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(d(),{children:[(0,s.jsx)("title",{children:"Projet Kasa (React) de J\xe9r\xe9my Darbellay "}),(0,s.jsx)("meta",{name:"description",content:m.description})]}),"\n",(0,s.jsx)(t.h1,{children:"Kasa - Location d'appartements entre particuliers"}),"\n",(0,s.jsxs)("div",{className:i().projectHeader,children:[(0,s.jsx)(c(),{src:o,alt:"banni\xe8re de Kasa"}),(0,s.jsx)(p.Z,{meta:m})]}),"\n",(0,s.jsx)(t.h2,{children:"D\xe9couverte de React, via le projet de Kasa"}),"\n",(0,s.jsx)(t.p,{children:"Dans ce projet, l'objectif \xe9tait de cr\xe9er un front-end en React pour Kasa, en utilisant React et React Router, mais pas d'autres d\xe9pendances. Le but \xe9tant principalement la d\xe9couverte et l'utilisation de React, pour construire une Single Page Application.\nL'installation devait \xeatre faite via Create-react-App, c'\xe9tait juste avant le changement de la documentation de React qui conseillait son utilisation auparavant."}),"\n",(0,s.jsx)(t.p,{children:"Le site de Kasa est compos\xe9 de \"4\" pages, l'accueil, la page d'erreur, la page A propos et la page de logement, cette derni\xe8re utilise les donn\xe9es du logement cibl\xe9. Vous pouvez allez visiter le site r\xe9sultant en ouvrant le lien de d\xe9monstration, il a \xe9t\xe9 construit \xe0 partir du build d'une branche secondaire."}),"\n",(0,s.jsx)(t.p,{children:"En plus de ces quelques pages, je devais \xe9galement construire des composants sp\xe9cifiques, un accord\xe9on, un carrousel et une banni\xe8re."}),"\n",(0,s.jsx)(t.h2,{children:"Contraintes et challenges"}),"\n",(0,s.jsx)(t.p,{children:"Dans ce projet, Kasa imposait une s\xe9rie de pratiques \xe0 respecter (ce sont des bonnes pratiques, que j'aurais suivi de toute fa\xe7on), ainsi que l'interdiction d'utiliser d'autres modules pour React, donc exit les composants pr\xe9-construits et c'est tant mieux, rien de tel pour apprendre que de construire soit m\xeame."}),"\n",(0,s.jsx)(t.p,{children:"En plus de ces contraintes, j'ai souhait\xe9 aller un peu plus loin, je me suis \xe9galement ajout\xe9 la contrainte d'un contenu accessible et de la construction de tests afin de veiller au bon fonctionnement de mon application."}),"\n",(0,s.jsxs)(t.p,{children:["La plus grande complexit\xe9 a \xe9t\xe9 pour moi l'\xe9tablissement du routing, utilisant ReactRouter v6.9, j'ai choisi d'utiliser les datas router et ainsi, mon router s'est trouv\xe9 \xeatre un \"objet\" plut\xf4t qu'un composant. Ce qui a un peu compliqu\xe9 le processus, \xe9tant donn\xe9 qu'il ne correspondait plus au cours fournit avec le projet (utilisant le ",(0,s.jsx)(t.code,{children:"<BrowserRouter>"}),")."]}),"\n",(0,s.jsx)(t.h2,{children:"B\xe9n\xe9fices : changement de point de vue sur React"}),"\n",(0,s.jsx)(t.p,{children:"Au d\xe9part, j'avais du mal de percevoir l'utilit\xe9 d'une librairie comme React pour des petits projets, en soit c'est ajout\xe9 beaucoup de javascript pour des besoins tr\xe8s simples. Aujourd'hui, je saisis mieux l'int\xe9r\xeat des composants r\xe9utilisables et des librairies comme React, apportant beaucoup de valeur \xe0 un site.\nEn revanche, pour les SEO, je reste sur ma faim, l'utilisation de frameworks tels que Next.js est de suite plus appropri\xe9e lorsque l'on se pr\xe9occupe un tant soit peu de l'optimisation."}),"\n",(0,s.jsx)(t.p,{children:"Une meilleur compr\xe9hension des tests et de leur utilit\xe9. Il est infiniment agr\xe9able de mettre \xe0 jour son application et avoir l'assurance (ou presque) qu'il n'y aura pas d'erreurs. De plus, l'utilisation de ReactTestingLibrary, qui part du postulat que l'on doit tester les fonctionnalit\xe9s que le visiteur de notre site utilise, m'a \xe9galement permit d'\xe9viter de tester des noms de fonctions plut\xf4t que leur r\xe9sultat."}),"\n",(0,s.jsx)(t.h2,{children:"Et aujourd'hui react ou pas react ?"}),"\n",(0,s.jsx)(t.p,{children:"Aujourd'hui, mes pr\xe9f\xe9rences vont plus vers quelque chose d'un peu plus complet, comme Next.js, je suis \xe9galement int\xe9ress\xe9 par Svelte.js, que je n'ai pas encore eu l'occasion de tester. React est une bonne technologie, agr\xe9able \xe0 utiliser, mais parfois crispante, la quasi obligation d'ajouter, d'ajouter et encore d'ajouter des choses pour parvenir \xe0 des fonctionnalit\xe9s communes me pose probl\xe8me. Et ce, malgr\xe9 l'apport d'une grande libert\xe9 de choix, j'aurais tendance \xe0 privil\xe9gier une exp\xe9rience de d\xe9veloppement plus coh\xe9rente et globale, quitte \xe0 ne pas me servir de l'int\xe9gralit\xe9 des fonctionnalit\xe9s."}),"\n",(0,s.jsxs)(t.p,{children:["En parlant de Next.js, c'est ce que j'ai utilis\xe9 pour construire ce portfolio, n'h\xe9sitez pas \xe0 visiter la page de ce projet : ",(0,s.jsx)(t.a,{href:"/projets/Portfolio",children:"projet du portfolio"}),"."]})]})}var h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(x,Object.assign({},e,{children:(0,s.jsx)(j,e)}))}},347:function(e){e.exports={card:"ProjectInfo_card__jJV7b",body:"ProjectInfo_body__8xYN1",footer:"ProjectInfo_footer__Nf8c5",header:"ProjectInfo_header__jMeoy",button:"ProjectInfo_button__cb1Sm"}},2151:function(e){e.exports={mdx:"Mdx_mdx__IsYLi",linkShadow:"Mdx_linkShadow__xZoxQ",imgCenter:"Mdx_imgCenter__9N9Qq",projectHeader:"Mdx_projectHeader__Ydi_Q"}}},function(e){e.O(0,[675,774,888,179],function(){return e(e.s=7295)}),_N_E=e.O()}]);