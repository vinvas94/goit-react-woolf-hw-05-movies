"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{315:function(r,t,e){e.d(t,{f3:function(){return f},po:function(){return h},sK:function(){return p},t4:function(){return v},uP:function(){return m}});var n=e(861),a=e(757),c=e.n(a),u=e(340),o=e(694),i="https://api.themoviedb.org/3/",s="996e01a07f47e64fc2cf01d8ba7bce2b",p=function(){var r=(0,n.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(s));case 3:return t=r.sent,r.abrupt("return",t);case 7:return r.prev=7,r.t0=r.catch(0),o.Notify.error("Error fetching trending movies:",r.t0.message),r.abrupt("return",{error:r.t0.message});case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(i,"/search/movie?api_key=").concat(s,"&query=").concat(t));case 3:return e=r.sent,r.abrupt("return",e);case 7:return r.prev=7,r.t0=r.catch(0),o.Notify.error("Error fetching trending movies:",r.t0.message),r.abrupt("return",{error:r.t0.message});case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(i,"movie/").concat(t,"?api_key=").concat(s));case 3:return e=r.sent,r.abrupt("return",e);case 7:return r.prev=7,r.t0=r.catch(0),o.Notify.error("Error fetching trending movies:",r.t0.message),r.abrupt("return",{error:r.t0.message});case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),h=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(s));case 3:return e=r.sent,r.abrupt("return",e);case 7:return r.prev=7,r.t0=r.catch(0),o.Notify.error("Error fetching trending movies:",r.t0.message),r.abrupt("return",{error:r.t0.message});case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),m=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(s));case 3:return e=r.sent,r.abrupt("return",e);case 7:return r.prev=7,r.t0=r.catch(0),o.Notify.error("Error fetching trending movies:",r.t0.message),r.abrupt("return",{error:r.t0.message});case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}()},387:function(r,t,e){e.r(t),e.d(t,{default:function(){return y}});var n,a,c=e(861),u=e(439),o=e(757),i=e.n(o),s=e(791),p=e(689),f=e(315),v=e(168),h=e(924),m=h.ZP.ul(n||(n=(0,v.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: 16px;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"]))),d=h.ZP.li(a||(a=(0,v.Z)([""]))),g=e(213),l=e(694),x=e(184),y=function(){var r=(0,p.UO)().movieId,t=(0,s.useState)([]),e=(0,u.Z)(t,2),n=e[0],a=e[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,c.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f.po)(r);case 3:(e=t.sent)&&e.data&&e.data.cast?a(e.data.cast):a([]),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),l.Notify.error("error:",t.t0),a([]);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[r]),n&&0!==n.length?(0,x.jsx)(m,{children:n.map((function(r){var t=r.id,e=r.profile_path,n=r.character,a=r.name;return(0,x.jsxs)(d,{children:[(0,x.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w500/".concat(e):g,alt:a,width:"150",height:"auto"}),(0,x.jsx)("p",{children:a}),(0,x.jsxs)("p",{children:["Character: ",n]})]},t)}))}):(0,x.jsx)("h2",{children:"I'm sorry, but I don't have any information casts"})}},213:function(r,t,e){r.exports=e.p+"static/media/imageNotFound.e464b79c277980d64cbb.jpg"}}]);
//# sourceMappingURL=387.b1802a81.chunk.js.map