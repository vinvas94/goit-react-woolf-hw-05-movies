"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{315:function(r,e,t){t.d(e,{f3:function(){return f},po:function(){return h},sK:function(){return p},t4:function(){return v},uP:function(){return m}});var n=t(861),c=t(757),a=t.n(c),u=t(340),o=t(694),s="https://api.themoviedb.org/3/",i="996e01a07f47e64fc2cf01d8ba7bce2b",p=function(){var r=(0,n.Z)(a().mark((function r(){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(i));case 3:return e=r.sent,r.abrupt("return",e);case 7:return r.prev=7,r.t0=r.catch(0),o.Notify.error("Error fetching trending movies:",r.t0.message),r.abrupt("return",{error:r.t0.message});case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(s,"/search/movie?api_key=").concat(i,"&query=").concat(e));case 3:return t=r.sent,r.abrupt("return",t);case 7:return r.prev=7,r.t0=r.catch(0),o.Notify.error("Error fetching trending movies:",r.t0.message),r.abrupt("return",{error:r.t0.message});case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(s,"movie/").concat(e,"?api_key=").concat(i));case 3:return t=r.sent,r.abrupt("return",t);case 7:return r.prev=7,r.t0=r.catch(0),o.Notify.error("Error fetching trending movies:",r.t0.message),r.abrupt("return",{error:r.t0.message});case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),h=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(s,"movie/").concat(e,"/credits?api_key=").concat(i));case 3:return t=r.sent,r.abrupt("return",t);case 7:return r.prev=7,r.t0=r.catch(0),o.Notify.error("Error fetching trending movies:",r.t0.message),r.abrupt("return",{error:r.t0.message});case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),m=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(i));case 3:return t=r.sent,r.abrupt("return",t);case 7:return r.prev=7,r.t0=r.catch(0),o.Notify.error("Error fetching trending movies:",r.t0.message),r.abrupt("return",{error:r.t0.message});case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()},779:function(r,e,t){t.r(e),t.d(e,{default:function(){return w}});var n,c,a,u,o=t(861),s=t(439),i=t(757),p=t.n(i),f=t(791),v=t(689),h=t(315),m=t(168),l=t(924),d=l.ZP.ul(n||(n=(0,m.Z)(["\n  list-style: none;\n  padding: 0;\n"]))),g=l.ZP.li(c||(c=(0,m.Z)(["\n  margin-bottom: 5px;\n"]))),y=l.ZP.p(a||(a=(0,m.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  color: #343a40;\n"]))),x=l.ZP.p(u||(u=(0,m.Z)(["\n  font-size: 14px;\n  color: #6c757d;\n"]))),Z=t(694),b=t(184),w=function(){var r=(0,v.UO)().movieId,e=(0,f.useState)([]),t=(0,s.Z)(e,2),n=t[0],c=t[1];return(0,f.useEffect)((function(){var e=function(){var e=(0,o.Z)(p().mark((function e(){var t,n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.uP)(r);case 3:t=e.sent,n=t.data.results,c(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),Z.Notify.error("error");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[r]),(0,b.jsx)(d,{children:n.length<1?(0,b.jsx)("h2",{children:"I'm sorry, but I don't have any information reviews "}):n.map((function(r){var e=r.id,t=r.author,n=r.content;return(0,b.jsxs)(g,{children:[(0,b.jsxs)(y,{children:["Author: ",t]}),(0,b.jsx)(x,{children:n})]},e)}))})}}}]);
//# sourceMappingURL=779.9934e521.chunk.js.map