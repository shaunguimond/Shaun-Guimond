(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[0],{39:function(e,t,a){"use strict";a.r(t);var n=a(3),l=a(1),i=a.n(l),r=a(4),s=a(5),c=a(9),o=a(0);var m=Object(r.connect)(e=>{var{state:t,id:a}=e,n=t.source.attachment[a];if(!n)return null;var l=Object.values(n.media_details.sizes).map(e=>[e.source_url,e.width]).reduce((e,t,a,n)=>e.concat("".concat(t.join(" "),"w").concat(a!==n.length-1?", ":"")),"")||null,i=100*n.media_details.height/n.media_details.width;return Object(o.jsx)(d,{imageRatio:i},Object(o.jsx)(g,{alt:n.title.rendered,src:n.source_url,srcSet:l}))}),d=Object(n.a)("div",{target:"esqg52k0",label:"Container"})("margin:1rem 0;overflow:hidden;position:relative;display:flex;padding-top:",e=>{var{imageRatio:t}=e;return t},'%;&::before,&::after{position:absolute;display:block;width:100%;height:100%;top:0;left:0;content:"\\020";pointer-events:none;mix-blend-mode:screen;opacity:0.1;z-index:2;}&::after{mix-blend-mode:multiply;opacity:1;z-index:3;}'),g=Object(n.a)(c.a,{target:"esqg52k1",label:"StyledImage"})({name:"48wzg6",styles:"height:auto;width:auto;position:absolute;top:0;left:0;max-width:100%;max-height:100%;object-fit:cover;"}),b=a(20),p=a(21),j=a(27),u=a(28);var h=Object(r.connect)(e=>{var{state:t,item:a}=e;return Object(o.jsx)(i.a.Fragment,null,Object(o.jsx)(x,null,Object(o.jsx)(O,null,Object(o.jsx)(s.a,{link:a.link,"aria-label":a.title},Object(o.jsx)("span",{dangerouslySetInnerHTML:{__html:a.title.rendered}}))),t.theme.featured.showOnList?Object(o.jsx)(s.a,{link:a.link},Object(o.jsx)(m,{id:a.featured_media})):null,Object(o.jsx)(y,{dangerouslySetInnerHTML:{__html:a.excerpt.rendered}})),Object(o.jsx)(f,null,Object(o.jsx)(b.a,{authorId:a.author}),Object(o.jsx)(p.a,{post:a}),Object(o.jsx)(j.a,{cats:a.categories.slice(0,2)}),Object(o.jsx)(u.a,{tags:a.tags.slice(0,2)})))}),x=Object(n.a)("article",{target:"elt6sgi0",label:"EntryHeader"})({name:"ssxg6l",styles:"position:relative;margin:calc(3rem) 1rem 1rem;line-height:1.6775em;& a{color:#111;font-size:0.7em;letter-spacing:-0.02em;}@media (prefers-color-scheme:dark){& a{color:white;}}@media only screen and (min-width:768px){margin:calc(3rem) calc(10% + 60px) calc(0.5rem);& a{font-size:0.825em;}}"}),O=Object(n.a)("h1",{target:"elt6sgi1",label:"Title"})({name:"chj0yy",styles:'margin:0px 0 1rem !important;&:before{content:" ";display:block;height:2px;width:1em;background:rgb(118,118,118);margin:1rem 0px;}'}),y=Object(n.a)("div",{target:"elt6sgi2",label:"Excerpt"})({name:"1nduu2s",styles:'line-height:1.8;color:#111;margin:0;overflow:hidden;& p{margin:32px 0;font-family:NonBreakingSpaceOverride,"Hoefler Text","Baskerville Old Face",Garamond,"Times New Roman",serif;}@media only screen and (min-width:768px){max-width:calc(8 * (100vw / 12) - 28px);}@media only screen and (min-width:1168px){max-width:calc(9 * (100vw / 12) - 28px);}'}),f=Object(n.a)("div",{target:"elt6sgi3",label:"EntryFooter"})({name:"18fvkum",styles:'margin:calc(0rem) 1rem 1rem;line-height:1em;color:rgb(118,118,118);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;@media only screen and (min-width:768px){margin:calc(0rem) calc(10% + 60px) calc(0.5rem);}'}),v=Object(n.a)("span",{target:"e1c16nbt0",label:"IconWrapper"})("display:inline-block;margin-top:2px;vertical-align:middle;fill:",e=>{var{theme:t}=e;return t.color},";"),w=()=>Object(o.jsx)(v,null,Object(o.jsx)("svg",{className:"svg-icon",width:"22",height:"22","aria-hidden":"true",role:"img",focusable:"false",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(o.jsx)("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),Object(o.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}))),k=Object(n.a)("span",{target:"ex224th0",label:"IconWrapper"})("display:inline-block;margin-top:2px;vertical-align:middle;fill:",e=>{var{theme:t}=e;return t.color},";"),_=()=>Object(o.jsx)(k,null,Object(o.jsx)("svg",{className:"svg-icon",width:"22",height:"22","aria-hidden":"true",role:"img",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(o.jsx)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),Object(o.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"})));var S=Object(r.connect)(e=>{var{state:t,actions:a,libraries:n}=e,{totalPages:r}=t.source.get(t.router.link),{path:s,page:c,query:m}=n.source.parse(t.router.link),d=c<r,g=c>1,b=e=>n.source.stringify({path:s,page:e,query:m}),p=((e,t)=>{var a=[],n=0;return 1===t?a:(0<e-2&&a.push(e-2),0<e-1&&a.push(e-1),a.push(e),t>=e+1&&a.push(e+1),t>=e+2&&a.push(e+2),1<a[0]-1&&(a.unshift("..."),n+=1),1<t-a[a.length-(2-n)]&&a.push("..."),-1===a.indexOf(1)&&a.unshift(1),-1===a.indexOf(t)&&a.push(t),a)})(c,r);return Object(l.useEffect)(()=>{d&&a.source.fetch(b(c+1))},[]),Object(o.jsx)(A,null,g&&Object(o.jsx)(H,{position:"prev",ariaLabel:"Read newer posts",link:b(c-1)},Object(o.jsx)(w,null),Object(o.jsx)(N,null,"Newer posts")),Object(o.jsx)(i.a.Fragment,null,p&&p.map((e,t)=>"..."!==e&&e!==c?Object(o.jsx)(i.a.Fragment,{key:"".concat(e,"-").concat(t)},Object(o.jsx)(L,{link:b(e)},Object(o.jsx)(F,null,e))):Object(o.jsx)(z,{key:"".concat(e,"-").concat(t),dots:"..."===e},Object(o.jsx)(F,null,e)))),d&&Object(o.jsx)(H,{position:"next",ariaLabel:"Read older posts",link:b(c+1)},Object(o.jsx)(N,null,"Older posts"),Object(o.jsx)(_,null)))}),z=Object(n.a)("span",{target:"e1ugh6y50",label:"CurrentOrDots"})("display:inline-block;padding:calc(0.5 * 1rem) ",e=>{var{dots:t}=e;return t?"0":""},";@media (min-width:768px){",e=>{var{dots:t}=e;return t?"padding: 1rem 0;":""},"}"),L=Object(n.a)(s.a,{target:"e1ugh6y51",label:"PageNumbers"})({name:"cnnzhp",styles:"padding:calc(0.5 * 1rem);display:inline-block;@media (min-width:768px){padding:1rem;}"}),H=Object(n.a)(s.a,{target:"e1ugh6y52",label:"PaginationLinks"})("display:inline-block;@media (min-width:768px){padding:1rem;",e=>{var{position:t}=e;return"next"===t?"padding-right: 0;":"padding-left: 0;"},"}"),N=Object(n.a)("span",{target:"e1ugh6y53",label:"NavText"})({name:"1uxvye4",styles:"display:none;@media (min-width:768px){display:inline-block;}"}),A=Object(n.a)("div",{target:"e1ugh6y54",label:"PaginationContainer"})({name:"qt7nih",styles:'padding:0;margin:0 1rem;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;font-weight:700;font-size:0.88889em;letter-spacing:-0.02em;line-height:1.2;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;@media (min-width:768px){margin:0 calc(10% + 60px);}'}),F=Object(n.a)("span",{target:"e1ugh6y55",label:"Text"})({name:"1baulvz",styles:"display:inline-block;"});t.default=Object(r.connect)(e=>{var{state:t}=e,a=t.source.get(t.router.link);return Object(o.jsx)(D,{id:"primary"},Object(o.jsx)(B,null,a.isAuthor?Object(o.jsx)(C,null,"Author Archives:"," ",Object(o.jsx)(T,null,t.source.author[a.id].name)):null,a.isTaxonomy||a.isCategory?Object(o.jsx)(C,null,a.taxonomy.charAt(0).toUpperCase()+a.taxonomy.slice(1)," ","Archives:"," ",Object(o.jsx)(T,null,t.source[a.taxonomy][a.id].name)):null,a.items.map(e=>{var{type:a,id:n}=e,l=t.source[a][n];return Object(o.jsx)(h,{key:l.id,item:l})}),Object(o.jsx)(S,null)))});var D=Object(n.a)("section",{target:"e1w6g4lc0",label:"Section"})({name:"1g5ttu7",styles:"margin:0;list-style:none;"}),B=Object(n.a)("article",{target:"e1w6g4lc1",label:"Article"})(""),C=Object(n.a)("h3",{target:"e1w6g4lc2",label:"Header"})({name:"15fdphs",styles:'font-family:"Hoefler Text","Baskerville Old Face",Garamond,"Times New Roman",serif;font-size:1.125em;font-weight:normal;clear:both;margin:1rem 1rem calc(3 * 1rem);color:#767676;letter-spacing:normal;& span{display:block;color:#111;font-size:1em;}& span:after{content:".";font-weight:bold;color:#111;}@media screen and (min-width:768px){margin:0 calc(10% + 60px);}'}),T=Object(n.a)("span",{target:"e1w6g4lc3",label:"PageDescription"})({name:"4d2ev1",styles:'font-weight:bold;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;@media (prefers-color-scheme:dark){color:#767676 !important;}'})}}]);