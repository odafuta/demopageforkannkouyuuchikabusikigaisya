import{m as C,q as F,n as d,o as _,v as H,w as L,x,y as A,z as O,A as m,H as I,B as p,C as N,D as b,E,F as T,G as k,I as R}from"./runtime.Bdjp8Son.js";const M=new Set,P=new Set;function W(a,r,s,i){function n(e){if(i.capture||z.call(r,e),!e.cancelBubble){var l=x,c=A;d(null),_(null);try{return s.call(this,e)}finally{d(l),_(c)}}}return a.startsWith("pointer")||a.startsWith("touch")||a==="wheel"?F(()=>{r.addEventListener(a,n,i)}):r.addEventListener(a,n,i),n}function Y(a,r,s,i,n){var e={capture:i,passive:n},l=W(a,r,s,e);(r===document.body||r===window||r===document)&&C(()=>{r.removeEventListener(a,l,e)})}function z(a){var w;var r=this,s=r.ownerDocument,i=a.type,n=((w=a.composedPath)==null?void 0:w.call(a))||[],e=n[0]||a.target,l=0,c=a.__root;if(c){var h=n.indexOf(c);if(h!==-1&&(r===document||r===window)){a.__root=r;return}var v=n.indexOf(r);if(v===-1)return;h<=v&&(l=h)}if(e=n[l]||a.target,e!==r){H(a,"currentTarget",{configurable:!0,get(){return e||s}});var D=x,S=A;d(null),_(null);try{for(var o,g=[];e!==null;){var y=e.assignedSlot||e.parentNode||e.host||null;try{var u=e["__"+i];if(u!==void 0&&!e.disabled)if(L(u)){var[q,...B]=u;q.apply(e,[a,...B])}else u.call(e,a)}catch(f){o?g.push(f):o=f}if(a.cancelBubble||y===r||y===null)break;e=y}if(o){for(let f of g)queueMicrotask(()=>{throw f});throw o}}finally{a.__root=r,delete a.currentTarget,d(D),_(S)}}}let t;function j(){t=void 0}function J(a){let r=null,s=p;var i;if(p){for(r=k,t===void 0&&(t=R(document.head));t!==null&&(t.nodeType!==8||t.data!==N);)t=b(t);t===null?E(!1):t=T(b(t))}p||(i=document.head.appendChild(O()));try{m(()=>a(i),I)}finally{s&&(E(!0),t=k,T(r))}}export{M as a,j as b,J as c,Y as e,z as h,P as r};
