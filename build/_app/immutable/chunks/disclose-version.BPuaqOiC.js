import{I as _,X as p,Y as v,B as f,G as o,z as u,y as d,M as h,F as E}from"./runtime.Bdjp8Son.js";function T(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function i(e,t){var r=d;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function y(e,t){var r=(t&p)!==0,c=(t&v)!==0,a,s=!e.startsWith("<!>");return()=>{if(f)return i(o,null),o;a===void 0&&(a=T(s?e:"<!>"+e),r||(a=_(a)));var n=c?document.importNode(a,!0):a.cloneNode(!0);if(r){var l=_(n),m=n.lastChild;i(l,m)}else i(n,n);return n}}function x(e,t){var r=y(e,t);return()=>g(r())}function g(e){if(f)return e;const t=e.nodeType===11,r=e.tagName==="SCRIPT"?[e]:e.querySelectorAll("script"),c=d;for(const s of r){const n=document.createElement("script");for(var a of s.attributes)n.setAttribute(a.name,a.value);n.textContent=s.textContent,(t?e.firstChild===s:e===s)&&(c.nodes_start=n),(t?e.lastChild===s:e===s)&&(c.nodes_end=n),s.replaceWith(n)}return e}function M(e=""){if(!f){var t=u(e+"");return i(t,t),t}var r=o;return r.nodeType!==3&&(r.before(r=u()),E(r)),i(r,r),r}function N(){if(f)return i(o,null),o;var e=document.createDocumentFragment(),t=document.createComment(""),r=u();return e.append(t,r),i(t,r),e}function A(e,t){if(f){d.nodes_end=o,h();return}e!==null&&e.before(t)}const C="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(C);export{A as a,i as b,x as c,N as d,M as e,y as t};