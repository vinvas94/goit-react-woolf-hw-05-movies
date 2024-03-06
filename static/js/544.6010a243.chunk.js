"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{315:function(r,e,t){t.d(e,{f3:function(){return f},po:function(){return m},sK:function(){return p},t4:function(){return v},uP:function(){return l}});var n=t(861),c=t(757),a=t.n(c),o=t(340),i=t(694),u="https://api.themoviedb.org/3/",s="996e01a07f47e64fc2cf01d8ba7bce2b",p=function(){var r=(0,n.Z)(a().mark((function r(){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("".concat(u,"/trending/movie/day?api_key=").concat(s));case 3:return e=r.sent,r.abrupt("return",e);case 7:return r.prev=7,r.t0=r.catch(0),i.Notify.error("Error fetching trending movies:",r.t0.message),r.abrupt("return",{error:r.t0.message});case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("".concat(u,"/search/movie?api_key=").concat(s,"&query=").concat(e));case 3:return t=r.sent,r.abrupt("return",t);case 7:return r.prev=7,r.t0=r.catch(0),i.Notify.error("Error fetching trending movies:",r.t0.message),r.abrupt("return",{error:r.t0.message});case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("".concat(u,"movie/").concat(e,"?api_key=").concat(s));case 3:return t=r.sent,r.abrupt("return",t);case 7:return r.prev=7,r.t0=r.catch(0),i.Notify.error("Error fetching trending movies:",r.t0.message),r.abrupt("return",{error:r.t0.message});case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),m=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("".concat(u,"movie/").concat(e,"/credits?api_key=").concat(s));case 3:return t=r.sent,r.abrupt("return",t);case 7:return r.prev=7,r.t0=r.catch(0),i.Notify.error("Error fetching trending movies:",r.t0.message),r.abrupt("return",{error:r.t0.message});case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),l=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("".concat(u,"movie/").concat(e,"/reviews?api_key=").concat(s));case 3:return t=r.sent,r.abrupt("return",t);case 7:return r.prev=7,r.t0=r.catch(0),i.Notify.error("Error fetching trending movies:",r.t0.message),r.abrupt("return",{error:r.t0.message});case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()},47:function(r,e,t){t.d(e,{Z:function(){return x}});t(791);var n,c,a,o,i,u=t(168),s=t(924),p=t(87),f=s.ZP.ul(n||(n=(0,u.Z)(["\n  display: grid;\n  max-width: calc(100vw - 20px);\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: 16px;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n"]))),v=s.ZP.li(c||(c=(0,u.Z)([""]))),m=(0,s.ZP)(p.rU)(a||(a=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  text-decoration: none;\n"]))),l=s.ZP.img(o||(o=(0,u.Z)(["\n  display: block;\n  width: 100%;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.05);\n    cursor: zoom-in;\n  }\n"]))),d=s.ZP.p(i||(i=(0,u.Z)(["\n  padding: 8px;\n  color: #007bff;\n  text-decoration: none;\n  font-size: 18px;\n  font-weight: 500;\n  margin: 0;\n"]))),h=t(213),g=t(184),x=function(r){var e=r.movies,t=r.location;return(0,g.jsx)(f,{children:e.map((function(r){var e=r.id,n=r.title,c=r.poster_path;return(0,g.jsx)(v,{children:(0,g.jsxs)(m,{to:"/movies/".concat(e),state:{from:t},children:[(0,g.jsx)(l,{src:c?"https://image.tmdb.org/t/p/w500/".concat(c):h,alt:n}),(0,g.jsx)(d,{children:n})]})},e)}))})}},544:function(r,e,t){t.r(e);var n=t(861),c=t(439),a=t(757),o=t.n(a),i=t(791),u=t(315),s=t(689),p=t(47),f=t(694),v=t(184);e.default=function(){var r=(0,i.useState)([]),e=(0,c.Z)(r,2),t=e[0],a=e[1],m=(0,s.TH)();return(0,i.useEffect)((function(){var r=function(){var r=(0,n.Z)(o().mark((function r(){var e,t;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,u.sK)();case 3:e=r.sent,t=e.data.results,a(t),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),f.Notify.error("An error occurred while fetching trending movies.");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,v.jsx)("div",{children:(0,v.jsx)(p.Z,{movies:t,location:m})})}},213:function(r,e,t){r.exports=t.p+"static/media/imageNotFound.e464b79c277980d64cbb.jpg"}}]);
//# sourceMappingURL=544.6010a243.chunk.js.map