/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=(h,t,e=[])=>{const i=document.createElementNS("http://www.w3.org/2000/svg",h);return Object.keys(t).forEach(s=>{i.setAttribute(s,String(t[s]))}),e.length&&e.forEach(s=>{const n=we(...s);i.appendChild(n)}),i};var Xe=([h,t,e])=>we(h,t,e);/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=h=>Array.from(h.attributes).reduce((t,e)=>(t[e.name]=e.value,t),{}),Ke=h=>typeof h=="string"?h:!h||!h.class?"":h.class&&typeof h.class=="string"?h.class.split(" "):h.class&&Array.isArray(h.class)?h.class:"",Ye=h=>h.flatMap(Ke).map(e=>e.trim()).filter(Boolean).filter((e,i,s)=>s.indexOf(e)===i).join(" "),$e=h=>h.replace(/(\w)(\w*)(_|-|\s*)/g,(t,e,i)=>e.toUpperCase()+i.toLowerCase()),mt=(h,{nameAttr:t,icons:e,attrs:i})=>{var v;const s=h.getAttribute(t);if(s==null)return;const n=$e(s),o=e[n];if(!o)return console.warn(`${h.outerHTML} icon name was not found in the provided icons object.`);const r=Je(h),[l,d,c]=o,p={...d,"data-lucide":s,...i,...r},u=Ye(["lucide",`lucide-${s}`,r,i]);u&&Object.assign(p,{class:u});const g=Xe([l,p,c]);return(v=h.parentNode)==null?void 0:v.replaceChild(g,h)};/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=["svg",a,[["path",{d:"M3.5 13h6"}],["path",{d:"m2 16 4.5-9 4.5 9"}],["path",{d:"M18 7v9"}],["path",{d:"m14 12 4 4 4-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=["svg",a,[["path",{d:"M3.5 13h6"}],["path",{d:"m2 16 4.5-9 4.5 9"}],["path",{d:"M18 16V7"}],["path",{d:"m14 11 4-4 4 4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ei=["svg",a,[["path",{d:"M21 14h-5"}],["path",{d:"M16 16v-3.5a2.5 2.5 0 0 1 5 0V16"}],["path",{d:"M4.5 13h6"}],["path",{d:"m3 16 4.5-9 4.5 9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=["svg",a,[["circle",{cx:"16",cy:"4",r:"1"}],["path",{d:"m18 19 1-7-6 1"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M17 12h-2l-2 5-2-10-2 5H7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=["svg",a,[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=["svg",a,[["path",{d:"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 8h12"}],["path",{d:"M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12"}],["path",{d:"M6.6 15.6A2 2 0 1 0 10 17v-5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi=["svg",a,[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"}],["polygon",{points:"12 15 17 21 7 21 12 15"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=["svg",a,[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"m9 13 2 2 4-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=["svg",a,[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"M9 13h6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=["svg",a,[["path",{d:"M6.87 6.87a8 8 0 1 0 11.26 11.26"}],["path",{d:"M19.9 14.25a8 8 0 0 0-9.15-9.15"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.26 18.67 4 21"}],["path",{d:"m2 2 20 20"}],["path",{d:"M4 4 2 6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=["svg",a,[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=["svg",a,[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M12 9v4l2 2"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=["svg",a,[["path",{d:"M4 8a2 2 0 0 1-2-2V3h20v3a2 2 0 0 1-2 2Z"}],["path",{d:"m19 8-.8 3c-.1.6-.6 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L5 8"}],["path",{d:"M16 21c0-2.5 2-2.5 2-5"}],["path",{d:"M11 21c0-2.5 2-2.5 2-5"}],["path",{d:"M6 21c0-2.5 2-2.5 2-5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["polyline",{points:"11 3 11 11 14 8 17 11 17 3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=["svg",a,[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=["svg",a,[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=["svg",a,[["path",{d:"M2 12h20"}],["path",{d:"M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"}],["path",{d:"M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"}],["path",{d:"M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1"}],["path",{d:"M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=["svg",a,[["path",{d:"M12 2v20"}],["path",{d:"M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"}],["path",{d:"M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"}],["path",{d:"M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"}],["path",{d:"M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=["svg",a,[["line",{x1:"21",x2:"3",y1:"6",y2:"6"}],["line",{x1:"17",x2:"7",y1:"12",y2:"12"}],["line",{x1:"19",x2:"5",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=["svg",a,[["rect",{width:"6",height:"16",x:"4",y:"2",rx:"2"}],["rect",{width:"6",height:"9",x:"14",y:"9",rx:"2"}],["path",{d:"M22 22H2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=["svg",a,[["rect",{width:"16",height:"6",x:"2",y:"4",rx:"2"}],["rect",{width:"9",height:"6",x:"9",y:"14",rx:"2"}],["path",{d:"M22 22V2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=["svg",a,[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M17 22v-5"}],["path",{d:"M17 7V2"}],["path",{d:"M7 22v-3"}],["path",{d:"M7 5V2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=["svg",a,[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M10 2v20"}],["path",{d:"M20 2v20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=["svg",a,[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M4 2v20"}],["path",{d:"M14 2v20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=["svg",a,[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2"}],["path",{d:"M12 2v20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=["svg",a,[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"12",y:"7",rx:"2"}],["path",{d:"M22 2v20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=["svg",a,[["rect",{width:"6",height:"14",x:"6",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2"}],["path",{d:"M2 2v20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=["svg",a,[["rect",{width:"6",height:"10",x:"9",y:"7",rx:"2"}],["path",{d:"M4 22V2"}],["path",{d:"M20 22V2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=["svg",a,[["rect",{width:"6",height:"14",x:"3",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"15",y:"7",rx:"2"}],["path",{d:"M3 2v20"}],["path",{d:"M21 2v20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=["svg",a,[["line",{x1:"3",x2:"21",y1:"6",y2:"6"}],["line",{x1:"3",x2:"21",y1:"12",y2:"12"}],["line",{x1:"3",x2:"21",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=["svg",a,[["line",{x1:"21",x2:"3",y1:"6",y2:"6"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12"}],["line",{x1:"17",x2:"3",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=["svg",a,[["line",{x1:"21",x2:"3",y1:"6",y2:"6"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12"}],["line",{x1:"21",x2:"7",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=["svg",a,[["rect",{width:"6",height:"16",x:"4",y:"6",rx:"2"}],["rect",{width:"6",height:"9",x:"14",y:"6",rx:"2"}],["path",{d:"M22 2H2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=["svg",a,[["rect",{width:"9",height:"6",x:"6",y:"14",rx:"2"}],["rect",{width:"16",height:"6",x:"6",y:"4",rx:"2"}],["path",{d:"M2 2v20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=["svg",a,[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2"}],["path",{d:"M22 7h-5"}],["path",{d:"M7 7H1"}],["path",{d:"M22 17h-3"}],["path",{d:"M5 17H2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=["svg",a,[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2"}],["path",{d:"M2 20h20"}],["path",{d:"M2 10h20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=["svg",a,[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2"}],["path",{d:"M2 14h20"}],["path",{d:"M2 4h20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=["svg",a,[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2"}],["path",{d:"M2 12h20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=["svg",a,[["rect",{width:"14",height:"6",x:"5",y:"12",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2"}],["path",{d:"M2 22h20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=["svg",a,[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"6",rx:"2"}],["path",{d:"M2 2h20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=["svg",a,[["rect",{width:"10",height:"6",x:"7",y:"9",rx:"2"}],["path",{d:"M22 20H2"}],["path",{d:"M22 4H2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=["svg",a,[["rect",{width:"14",height:"6",x:"5",y:"15",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"3",rx:"2"}],["path",{d:"M2 21h20"}],["path",{d:"M2 3h20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=["svg",a,[["path",{d:"M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"}],["path",{d:"M16 12h3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=["svg",a,[["path",{d:"M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"}],["path",{d:"M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=["svg",a,[["circle",{cx:"12",cy:"5",r:"3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"8"}],["path",{d:"M5 12H2a10 10 0 0 0 20 0h-3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2"}],["path",{d:"M7.5 8 10 9"}],["path",{d:"m14 9 2.5-1"}],["path",{d:"M9 10h0"}],["path",{d:"M15 10h0"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 15h8"}],["path",{d:"M8 9h2"}],["path",{d:"M14 9h2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=["svg",a,[["path",{d:"M2 12 7 2"}],["path",{d:"m7 12 5-10"}],["path",{d:"m12 12 5-10"}],["path",{d:"m17 12 5-10"}],["path",{d:"M4.5 7h15"}],["path",{d:"M12 16v6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=["svg",a,[["path",{d:"M7 10c-2.8 0-5-2.2-5-5h5"}],["path",{d:"M7 4v8h7a8 8 0 0 0 8-8Z"}],["path",{d:"M9 12v5"}],["path",{d:"M15 12v5"}],["path",{d:"M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v1H5Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"14.31",x2:"20.05",y1:"8",y2:"17.94"}],["line",{x1:"9.69",x2:"21.17",y1:"8",y2:"8"}],["line",{x1:"7.38",x2:"13.12",y1:"12",y2:"2.06"}],["line",{x1:"9.69",x2:"3.95",y1:"16",y2:"6.06"}],["line",{x1:"14.31",x2:"2.83",y1:"16",y2:"16"}],["line",{x1:"16.62",x2:"10.88",y1:"12",y2:"21.94"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=["svg",a,[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}],["path",{d:"M10 4v4"}],["path",{d:"M2 8h20"}],["path",{d:"M6 4v4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=["svg",a,[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"}],["path",{d:"M10 2c1 .5 2 2 2 5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=["svg",a,[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2"}],["path",{d:"m9 15 3-3 3 3"}],["path",{d:"M12 12v9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=["svg",a,[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"m9.5 17 5-5"}],["path",{d:"m9.5 12 5 5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=["svg",a,[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=["svg",a,[["path",{d:"M3 3v18h18"}],["path",{d:"M7 12v5h12V8l-5 5-4-4Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=["svg",a,[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=["svg",a,[["path",{d:"M15 5H9"}],["path",{d:"M15 9v3h4l-7 7-7-7h4V9h6z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=["svg",a,[["path",{d:"M15 6v6h4l-7 7-7-7h4V6h6z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=["svg",a,[["path",{d:"M19 15V9"}],["path",{d:"M15 15h-3v4l-7-7 7-7v4h3v6z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=["svg",a,[["path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=["svg",a,[["path",{d:"M5 9v6"}],["path",{d:"M9 9h3V5l7 7-7 7v-4H9V9z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=["svg",a,[["path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=["svg",a,[["path",{d:"M9 19h6"}],["path",{d:"M9 15v-3H5l7-7 7 7h-4v3H9z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=["svg",a,[["path",{d:"M9 18v-6H5l7-7 7 7h-4v6H9z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=["svg",a,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2"}],["path",{d:"M17 20v-6h-2"}],["path",{d:"M15 20h4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=["svg",a,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M17 10V4h-2"}],["path",{d:"M15 10h4"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=["svg",a,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M20 8h-5"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10"}],["path",{d:"M15 14h5l-5 6h5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=["svg",a,[["path",{d:"M19 3H5"}],["path",{d:"M12 21V7"}],["path",{d:"m6 15 6 6 6-6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=["svg",a,[["path",{d:"M2 12a10 10 0 1 1 10 10"}],["path",{d:"m2 22 10-10"}],["path",{d:"M8 22H2v-6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 8-8 8"}],["path",{d:"M16 16H8V8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=["svg",a,[["path",{d:"M17 7 7 17"}],["path",{d:"M17 17H7V7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=["svg",a,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M11 4h4"}],["path",{d:"M11 8h7"}],["path",{d:"M11 12h10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=["svg",a,[["path",{d:"M12 22a10 10 0 1 1 10-10"}],["path",{d:"M22 22 12 12"}],["path",{d:"M22 16v6h-6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m8 8 8 8"}],["path",{d:"M16 8v8H8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=["svg",a,[["path",{d:"m7 7 10 10"}],["path",{d:"M17 7v10H7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=["svg",a,[["path",{d:"M12 2v14"}],["path",{d:"m19 9-7 7-7-7"}],["circle",{cx:"12",cy:"21",r:"1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=["svg",a,[["path",{d:"M12 17V3"}],["path",{d:"m6 11 6 6 6-6"}],["path",{d:"M19 21H5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=["svg",a,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"m21 8-4-4-4 4"}],["path",{d:"M17 4v16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=["svg",a,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M11 4h10"}],["path",{d:"M11 8h7"}],["path",{d:"M11 12h4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=["svg",a,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 4v16"}],["path",{d:"M15 4h5l-5 6h5"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"}],["path",{d:"M20 18h-5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=["svg",a,[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 12H8"}],["path",{d:"m12 8-4 4 4 4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=["svg",a,[["path",{d:"m9 6-6 6 6 6"}],["path",{d:"M3 12h14"}],["path",{d:"M21 19V5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=["svg",a,[["path",{d:"M8 3 4 7l4 4"}],["path",{d:"M4 7h16"}],["path",{d:"m16 21 4-4-4-4"}],["path",{d:"M20 17H4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m12 8-4 4 4 4"}],["path",{d:"M16 12H8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=["svg",a,[["path",{d:"M3 19V5"}],["path",{d:"m13 6-6 6 6 6"}],["path",{d:"M7 12h14"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=["svg",a,[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}],["path",{d:"m12 16 4-4-4-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=["svg",a,[["path",{d:"M3 5v14"}],["path",{d:"M21 12H7"}],["path",{d:"m15 18 6-6-6-6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=["svg",a,[["path",{d:"m16 3 4 4-4 4"}],["path",{d:"M20 7H4"}],["path",{d:"m8 21-4-4 4-4"}],["path",{d:"M4 17h16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}],["path",{d:"m12 16 4-4-4-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=["svg",a,[["path",{d:"M17 12H3"}],["path",{d:"m11 18 6-6-6-6"}],["path",{d:"M21 5v14"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=["svg",a,[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=["svg",a,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2"}],["path",{d:"M17 20v-6h-2"}],["path",{d:"M15 20h4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=["svg",a,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M17 10V4h-2"}],["path",{d:"M15 10h4"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=["svg",a,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M20 8h-5"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10"}],["path",{d:"M15 14h5l-5 6h5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=["svg",a,[["path",{d:"m21 16-4 4-4-4"}],["path",{d:"M17 20V4"}],["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=["svg",a,[["path",{d:"m5 9 7-7 7 7"}],["path",{d:"M12 16V2"}],["circle",{cx:"12",cy:"21",r:"1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=["svg",a,[["path",{d:"m18 9-6-6-6 6"}],["path",{d:"M12 3v14"}],["path",{d:"M5 21h14"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=["svg",a,[["path",{d:"M2 8V2h6"}],["path",{d:"m2 2 10 10"}],["path",{d:"M12 2A10 10 0 1 1 2 12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 16V8h8"}],["path",{d:"M16 16 8 8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=["svg",a,[["path",{d:"M7 17V7h10"}],["path",{d:"M17 17 7 7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=["svg",a,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M11 12h4"}],["path",{d:"M11 16h7"}],["path",{d:"M11 20h10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=["svg",a,[["path",{d:"M22 12A10 10 0 1 1 12 2"}],["path",{d:"M22 2 12 12"}],["path",{d:"M16 2h6v6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 8h8v8"}],["path",{d:"m8 16 8-8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=["svg",a,[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=["svg",a,[["path",{d:"M5 3h14"}],["path",{d:"m18 13-6-6-6 6"}],["path",{d:"M12 7v14"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ys=["svg",a,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M11 12h10"}],["path",{d:"M11 16h7"}],["path",{d:"M11 20h4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=["svg",a,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M15 4h5l-5 6h5"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"}],["path",{d:"M20 18h-5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=["svg",a,[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=["svg",a,[["path",{d:"m4 6 3-3 3 3"}],["path",{d:"M7 17V3"}],["path",{d:"m14 6 3-3 3 3"}],["path",{d:"M17 17V3"}],["path",{d:"M4 21h16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=["svg",a,[["path",{d:"M12 6v12"}],["path",{d:"M17.196 9 6.804 15"}],["path",{d:"m6.804 9 10.392 6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=["svg",a,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=["svg",a,[["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=["svg",a,[["path",{d:"M2 10v3"}],["path",{d:"M6 6v11"}],["path",{d:"M10 3v18"}],["path",{d:"M14 8v7"}],["path",{d:"M18 5v13"}],["path",{d:"M22 10v3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=["svg",a,[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=["svg",a,[["circle",{cx:"12",cy:"8",r:"6"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=["svg",a,[["path",{d:"m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9"}],["path",{d:"M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=["svg",a,[["path",{d:"M4 4v16h16"}],["path",{d:"m4 20 7-7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=["svg",a,[["path",{d:"M9 12h.01"}],["path",{d:"M15 12h.01"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=["svg",a,[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"}],["path",{d:"M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5"}],["path",{d:"M8 10h8"}],["path",{d:"M8 18h8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M12 7v10"}],["path",{d:"M15.4 10a4 4 0 1 0 0 4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 18V6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M7 12h5"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["line",{x1:"12",x2:"12.01",y1:"17",y2:"17"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M8 8h8"}],["path",{d:"M8 12h8"}],["path",{d:"m13 17-5-1h1a4 4 0 0 0 0-8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"16",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"8",y2:"8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m9 8 3 3v7"}],["path",{d:"m12 11 3-3"}],["path",{d:"M9 12h6"}],["path",{d:"M9 16h6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"8",y2:"16"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M8 12h4"}],["path",{d:"M10 16V9.5a2.5 2.5 0 0 1 5 0"}],["path",{d:"M8 16h7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M9 16h5"}],["path",{d:"M9 12h5a2 2 0 1 0 0-4h-3v9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M11 17V8h4"}],["path",{d:"M11 12h3"}],["path",{d:"M9 16h4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=["svg",a,[["path",{d:"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2"}],["path",{d:"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10"}],["rect",{width:"13",height:"8",x:"8",y:"6",rx:"1"}],["circle",{cx:"18",cy:"20",r:"2"}],["circle",{cx:"9",cy:"20",r:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ha=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m4.9 4.9 14.2 14.2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=["svg",a,[["path",{d:"M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5"}],["path",{d:"M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=["svg",a,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M6 12h.01M18 12h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=["svg",a,[["line",{x1:"18",x2:"18",y1:"20",y2:"10"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=["svg",a,[["path",{d:"M3 3v18h18"}],["path",{d:"M18 17V9"}],["path",{d:"M13 17V5"}],["path",{d:"M8 17v-3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=["svg",a,[["path",{d:"M3 3v18h18"}],["path",{d:"M13 17V9"}],["path",{d:"M18 17V5"}],["path",{d:"M8 17v-3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=["svg",a,[["path",{d:"M3 3v18h18"}],["rect",{width:"4",height:"7",x:"7",y:"10",rx:"1"}],["rect",{width:"4",height:"12",x:"15",y:"5",rx:"1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=["svg",a,[["path",{d:"M3 3v18h18"}],["rect",{width:"12",height:"4",x:"7",y:"5",rx:"1"}],["rect",{width:"7",height:"4",x:"7",y:"13",rx:"1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=["svg",a,[["path",{d:"M3 3v18h18"}],["path",{d:"M7 16h8"}],["path",{d:"M7 11h12"}],["path",{d:"M7 6h3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=["svg",a,[["line",{x1:"12",x2:"12",y1:"20",y2:"10"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=["svg",a,[["path",{d:"M3 5v14"}],["path",{d:"M8 5v14"}],["path",{d:"M12 5v14"}],["path",{d:"M17 5v14"}],["path",{d:"M21 5v14"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=["svg",a,[["path",{d:"M4 20h16"}],["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=["svg",a,[["path",{d:"M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"}],["line",{x1:"10",x2:"8",y1:"5",y2:"7"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12"}],["line",{x1:"7",x2:"7",y1:"19",y2:"21"}],["line",{x1:"17",x2:"17",y1:"19",y2:"21"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=["svg",a,[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"}],["path",{d:"m11 7-3 5h4l-3 5"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ia=["svg",a,[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13"}],["line",{x1:"14",x2:"14",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=["svg",a,[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=["svg",a,[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=["svg",a,[["path",{d:"M14 7h2a2 2 0 0 1 2 2v6c0 1-1 2-2 2h-2"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6c0 1 1 2 2 2h2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"10",x2:"10",y1:"7",y2:"13"}],["line",{x1:"10",x2:"10",y1:"17",y2:"17.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=["svg",a,[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=["svg",a,[["path",{d:"M4.5 3h15"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"}],["path",{d:"M6 14h12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=["svg",a,[["path",{d:"M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1"}],["path",{d:"M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66"}],["path",{d:"M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qa=["svg",a,[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=["svg",a,[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"}],["path",{d:"M12 4v6"}],["path",{d:"M2 18h20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=["svg",a,[["path",{d:"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"}],["path",{d:"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}],["path",{d:"M3 18h18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=["svg",a,[["path",{d:"M2 4v16"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10"}],["path",{d:"M2 17h20"}],["path",{d:"M6 8v9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=["svg",a,[["circle",{cx:"12.5",cy:"8.5",r:"2.5"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=["svg",a,[["path",{d:"M17 11h1a3 3 0 0 1 0 6h-1"}],["path",{d:"M9 12v6"}],["path",{d:"M13 12v6"}],["path",{d:"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=["svg",a,[["path",{d:"M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}],["circle",{cx:"18",cy:"8",r:"3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=["svg",a,[["path",{d:"M18.8 4A6.3 8.7 0 0 1 20 9"}],["path",{d:"M9 9h.01"}],["circle",{cx:"9",cy:"9",r:"7"}],["rect",{width:"10",height:"6",x:"4",y:"16",rx:"2"}],["path",{d:"M14 19c3 0 4.6-1.6 4.6-1.6"}],["circle",{cx:"20",cy:"16",r:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=["svg",a,[["path",{d:"M18.4 12c.8 3.8 2.6 5 2.6 5H3s3-2 3-9c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}],["path",{d:"M15 8h6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=["svg",a,[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=["svg",a,[["path",{d:"M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}],["path",{d:"M15 8h6"}],["path",{d:"M18 5v6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=["svg",a,[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=["svg",a,[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=["svg",a,[["circle",{cx:"18.5",cy:"17.5",r:"3.5"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5"}],["circle",{cx:"15",cy:"5",r:"1"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=["svg",a,[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2"}],["path",{d:"M6 20h4"}],["path",{d:"M14 10h4"}],["path",{d:"M6 14h2v6"}],["path",{d:"M14 4h2v6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=["svg",a,[["circle",{cx:"12",cy:"11.9",r:"2"}],["path",{d:"M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6"}],["path",{d:"m8.9 10.1 1.4.8"}],["path",{d:"M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5"}],["path",{d:"m15.1 10.1-1.4.8"}],["path",{d:"M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2"}],["path",{d:"M12 13.9v1.6"}],["path",{d:"M13.5 5.4c-1-.2-2-.2-3 0"}],["path",{d:"M17 16.4c.7-.7 1.2-1.6 1.5-2.5"}],["path",{d:"M5.5 13.9c.3.9.8 1.8 1.5 2.5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=["svg",a,[["path",{d:"M16 7h.01"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"}],["path",{d:"m20 7 2 .5-2 .5"}],["path",{d:"M10 18v3"}],["path",{d:"M14 17.75V21"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=["svg",a,[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=["svg",a,[["path",{d:"M3 3h18"}],["path",{d:"M20 7H8"}],["path",{d:"M20 11H8"}],["path",{d:"M10 19h10"}],["path",{d:"M8 15h12"}],["path",{d:"M4 3v14"}],["circle",{cx:"4",cy:"19",r:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=["svg",a,[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=["svg",a,[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}],["line",{x1:"18",x2:"21",y1:"12",y2:"12"}],["line",{x1:"3",x2:"6",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=["svg",a,[["path",{d:"m17 17-5 5V12l-5 5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M14.5 9.5 17 7l-5-5v4.5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=["svg",a,[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}],["path",{d:"M20.83 14.83a4 4 0 0 0 0-5.66"}],["path",{d:"M18 12h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=["svg",a,[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=["svg",a,[["path",{d:"M14 12a4 4 0 0 0 0-8H6v8"}],["path",{d:"M15 20a4 4 0 0 0 0-8H6v8Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=["svg",a,[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}],["circle",{cx:"12",cy:"12",r:"4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=["svg",a,[["circle",{cx:"11",cy:"13",r:"9"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95"}],["path",{d:"m22 2-1.5 1.5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=["svg",a,[["path",{d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=["svg",a,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"m8 13 4-7 4 7"}],["path",{d:"M9.1 11h5.7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=["svg",a,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M8 8v3"}],["path",{d:"M12 6v7"}],["path",{d:"M16 8v3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=["svg",a,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"m9 9.5 2 2 4-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=["svg",a,[["path",{d:"M2 16V4a2 2 0 0 1 2-2h11"}],["path",{d:"M5 14H4a2 2 0 1 0 0 4h1"}],["path",{d:"M22 18H11a2 2 0 1 0 0 4h11V6H11a2 2 0 0 0-2 2v12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=["svg",a,[["path",{d:"M20 22h-2"}],["path",{d:"M20 15v2h-2"}],["path",{d:"M4 19.5V15"}],["path",{d:"M20 8v3"}],["path",{d:"M18 2h2v2"}],["path",{d:"M4 11V9"}],["path",{d:"M12 2h2"}],["path",{d:"M12 22h2"}],["path",{d:"M12 17h2"}],["path",{d:"M8 22H6.5a2.5 2.5 0 0 1 0-5H8"}],["path",{d:"M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=["svg",a,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M12 13V7"}],["path",{d:"m9 10 3 3 3-3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=["svg",a,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["circle",{cx:"9",cy:"12",r:"1"}],["path",{d:"M8 12v-2a4 4 0 0 1 8 0v2"}],["circle",{cx:"15",cy:"12",r:"1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=["svg",a,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M16 8.2C16 7 15 6 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9C9 6 8 7 8 8.2c0 .6.3 1.2.7 1.6h0C10 11.1 12 13 12 13s2-1.9 3.3-3.1h0c.4-.4.7-1 .7-1.7z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=["svg",a,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["circle",{cx:"10",cy:"8",r:"2"}],["path",{d:"m20 13.7-2.1-2.1c-.8-.8-2-.8-2.8 0L9.7 17"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=["svg",a,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14"}],["path",{d:"M20 8v14H6.5a2.5 2.5 0 0 1 0-5H20"}],["circle",{cx:"14",cy:"8",r:"2"}],["path",{d:"m20 2-4.5 4.5"}],["path",{d:"m19 3 1 1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=["svg",a,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10"}],["path",{d:"M20 15v7H6.5a2.5 2.5 0 0 1 0-5H20"}],["rect",{width:"8",height:"5",x:"12",y:"6",rx:"1"}],["path",{d:"M18 6V4a2 2 0 1 0-4 0v2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=["svg",a,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["polyline",{points:"10 2 10 10 13 7 16 10 16 2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=["svg",a,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=["svg",a,[["path",{d:"M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z"}],["path",{d:"m16 12 2 2 4-4"}],["path",{d:"M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=["svg",a,[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}],["path",{d:"M6 8h2"}],["path",{d:"M6 12h2"}],["path",{d:"M16 8h2"}],["path",{d:"M16 12h2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=["svg",a,[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=["svg",a,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M9 10h6"}],["path",{d:"M12 7v6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=["svg",a,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M8 7h6"}],["path",{d:"M8 11h8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=["svg",a,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M16 8V6H8v2"}],["path",{d:"M12 6v7"}],["path",{d:"M10 13h4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=["svg",a,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2"}],["path",{d:"M18 2h2v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M12 13V7"}],["path",{d:"m9 10 3-3 3 3"}],["path",{d:"m9 5 3-3 3 3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=["svg",a,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M12 13V7"}],["path",{d:"m9 10 3-3 3 3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=["svg",a,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["circle",{cx:"12",cy:"8",r:"2"}],["path",{d:"M15 13a3 3 0 1 0-6 0"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=["svg",a,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"m14.5 7-5 5"}],["path",{d:"m9.5 7 5 5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=["svg",a,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=["svg",a,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"}],["path",{d:"m9 10 2 2 4-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=["svg",a,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=["svg",a,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=["svg",a,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"}],["path",{d:"m14.5 7.5-5 5"}],["path",{d:"m9.5 7.5 5 5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=["svg",a,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=["svg",a,[["path",{d:"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"}],["path",{d:"M8 8v1"}],["path",{d:"M12 8v1"}],["path",{d:"M16 8v1"}],["rect",{width:"20",height:"12",x:"2",y:"9",rx:"2"}],["circle",{cx:"8",cy:"15",r:"2"}],["circle",{cx:"16",cy:"15",r:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=["svg",a,[["path",{d:"M12 8V4H8"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M15 13v2"}],["path",{d:"M9 13v2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=["svg",a,[["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 3h1"}],["path",{d:"M14 21h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v1"}],["path",{d:"M3 14v1"}],["path",{d:"M21 14v1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=["svg",a,[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{d:"m3.3 7 8.7 5 8.7-5"}],["path",{d:"M12 22V12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=["svg",a,[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"}],["path",{d:"m7 16.5-4.74-2.85"}],["path",{d:"m7 16.5 5-3"}],["path",{d:"M7 16.5v5.17"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"}],["path",{d:"m17 16.5-5-3"}],["path",{d:"m17 16.5 4.74-2.85"}],["path",{d:"M17 16.5v5.17"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"}],["path",{d:"M12 8 7.26 5.15"}],["path",{d:"m12 8 4.74-2.85"}],["path",{d:"M12 13.5V8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=["svg",a,[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=["svg",a,[["path",{d:"M16 3h3v18h-3"}],["path",{d:"M8 21H5V3h3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=["svg",a,[["path",{d:"M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z"}],["path",{d:"M16 8V5c0-1.1.9-2 2-2"}],["path",{d:"M12 13h4"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1"}],["path",{d:"M12 8h8"}],["path",{d:"M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"}],["path",{d:"M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"}],["path",{d:"M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"}],["path",{d:"M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=["svg",a,[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A2.5 2.5 0 0 0 12 19.5a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5"}],["path",{d:"m15.7 10.4-.9.4"}],["path",{d:"m9.2 13.2-.9.4"}],["path",{d:"m13.6 15.7-.4-.9"}],["path",{d:"m10.8 9.2-.4-.9"}],["path",{d:"m15.7 13.5-.9-.4"}],["path",{d:"m9.2 10.9-.9-.4"}],["path",{d:"m10.5 15.7.4-.9"}],["path",{d:"m13.1 9.2.4-.9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=["svg",a,[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 9v6"}],["path",{d:"M16 15v6"}],["path",{d:"M16 3v6"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["path",{d:"M8 15v6"}],["path",{d:"M8 3v6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=["svg",a,[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=["svg",a,[["rect",{x:"8",y:"8",width:"8",height:"8",rx:"2"}],["path",{d:"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2"}],["path",{d:"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=["svg",a,[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=["svg",a,[["path",{d:"M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M22 13h-4v-2a4 4 0 0 0-4-4h-1.3"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"m2 2 20 20"}],["path",{d:"M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13"}],["path",{d:"M12 20v-8"}],["path",{d:"M6 13H2"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=["svg",a,[["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"}],["path",{d:"M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5"}],["path",{d:"M6 13H2"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"m12 12 8 5-8 5Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=["svg",a,[["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"}],["path",{d:"M12 20v-9"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5"}],["path",{d:"M6 13H2"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"M22 13h-4"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=["svg",a,[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"}],["path",{d:"M10 6h4"}],["path",{d:"M10 10h4"}],["path",{d:"M10 14h4"}],["path",{d:"M10 18h4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=["svg",a,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}],["path",{d:"M9 22v-4h6v4"}],["path",{d:"M8 6h.01"}],["path",{d:"M16 6h.01"}],["path",{d:"M12 6h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 10h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M8 14h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=["svg",a,[["path",{d:"M4 6 2 7"}],["path",{d:"M10 6h4"}],["path",{d:"m22 7-2-1"}],["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2"}],["path",{d:"M4 11h16"}],["path",{d:"M8 15h.01"}],["path",{d:"M16 15h.01"}],["path",{d:"M6 19v2"}],["path",{d:"M18 21v-2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=["svg",a,[["path",{d:"M8 6v6"}],["path",{d:"M15 6v6"}],["path",{d:"M2 12h19.6"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"}],["circle",{cx:"7",cy:"18",r:"2"}],["path",{d:"M9 18h5"}],["circle",{cx:"16",cy:"18",r:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=["svg",a,[["path",{d:"M10 3h.01"}],["path",{d:"M14 2h.01"}],["path",{d:"m2 9 20-5"}],["path",{d:"M12 12V6.5"}],["rect",{width:"16",height:"10",x:"4",y:"12",rx:"3"}],["path",{d:"M9 12v5"}],["path",{d:"M15 12v5"}],["path",{d:"M4 17h16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=["svg",a,[["path",{d:"M4 9a2 2 0 0 1-2-2V5h6v2a2 2 0 0 1-2 2Z"}],["path",{d:"M3 5V3"}],["path",{d:"M7 5V3"}],["path",{d:"M19 15V6.5a3.5 3.5 0 0 0-7 0v11a3.5 3.5 0 0 1-7 0V9"}],["path",{d:"M17 21v-2"}],["path",{d:"M21 21v-2"}],["path",{d:"M22 19h-6v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=["svg",a,[["circle",{cx:"9",cy:"7",r:"2"}],["path",{d:"M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6"}],["path",{d:"M16 13H3"}],["path",{d:"M16 17H3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=["svg",a,[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"}],["path",{d:"M2 21h20"}],["path",{d:"M7 8v3"}],["path",{d:"M12 8v3"}],["path",{d:"M17 8v3"}],["path",{d:"M7 4h0.01"}],["path",{d:"M12 4h0.01"}],["path",{d:"M17 4h0.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=["svg",a,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18"}],["path",{d:"M16 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M8 18h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=["svg",a,[["path",{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10"}],["path",{d:"m16 20 2 2 4-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10"}],["path",{d:"m9 16 2 2 4-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=["svg",a,[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"}],["path",{d:"M16 2v4"}],["path",{d:"M8 2v4"}],["path",{d:"M3 10h5"}],["path",{d:"M17.5 17.5 16 16.25V14"}],["path",{d:"M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 18h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M16 18h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=["svg",a,[["path",{d:"M21 10V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7"}],["path",{d:"M16 2v4"}],["path",{d:"M8 2v4"}],["path",{d:"M3 10h18"}],["path",{d:"M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=["svg",a,[["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10"}],["line",{x1:"16",x2:"22",y1:"19",y2:"19"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=["svg",a,[["path",{d:"M4.18 4.18A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18"}],["path",{d:"M21 15.5V6a2 2 0 0 0-2-2H9.5"}],["path",{d:"M16 2v4"}],["path",{d:"M3 10h7"}],["path",{d:"M21 10h-5.5"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=["svg",a,[["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10"}],["line",{x1:"19",x2:"19",y1:"16",y2:"22"}],["line",{x1:"16",x2:"22",y1:"19",y2:"19"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10"}],["path",{d:"M17 14h-6"}],["path",{d:"M13 18H7"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 18h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=["svg",a,[["path",{d:"M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7.5"}],["path",{d:"M16 2v4"}],["path",{d:"M8 2v4"}],["path",{d:"M3 10h18"}],["path",{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z"}],["path",{d:"m22 22-1.5-1.5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=["svg",a,[["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10"}],["line",{x1:"17",x2:"22",y1:"17",y2:"22"}],["line",{x1:"17",x2:"22",y1:"22",y2:"17"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10"}],["line",{x1:"10",x2:"14",y1:"14",y2:"18"}],["line",{x1:"14",x2:"10",y1:"14",y2:"18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=["svg",a,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16"}],["path",{d:"M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5"}],["path",{d:"M14.121 15.121A3 3 0 1 1 9.88 10.88"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=["svg",a,[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"}],["circle",{cx:"12",cy:"13",r:"3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=["svg",a,[["path",{d:"M9 5v4"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1"}],["path",{d:"M9 15v2"}],["path",{d:"M17 3v2"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1"}],["path",{d:"M17 13v3"}],["path",{d:"M3 3v18h18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=["svg",a,[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=["svg",a,[["path",{d:"m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1"}],["path",{d:"M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657"}],["path",{d:"M14 16.5V14"}],["path",{d:"M14 6.5v1.843"}],["path",{d:"M10 10v7.5"}],["path",{d:"m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1"}],["path",{d:"m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=["svg",a,[["path",{d:"m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z"}],["path",{d:"M14 6.5v10"}],["path",{d:"M10 7.5v10"}],["path",{d:"m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1"}],["path",{d:"m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=["svg",a,[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 14h.01"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=["svg",a,[["path",{d:"M10 2h4"}],["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 14h.01"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=["svg",a,[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"}],["circle",{cx:"7",cy:"17",r:"2"}],["path",{d:"M9 17h6"}],["circle",{cx:"17",cy:"17",r:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=["svg",a,[["rect",{width:"4",height:"4",x:"2",y:"9"}],["rect",{width:"4",height:"10",x:"10",y:"9"}],["path",{d:"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2"}],["circle",{cx:"8",cy:"19",r:"2"}],["path",{d:"M10 19h12v-2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=["svg",a,[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=["svg",a,[["circle",{cx:"7",cy:"12",r:"3"}],["path",{d:"M10 9v6"}],["circle",{cx:"17",cy:"12",r:"3"}],["path",{d:"M14 7v8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=["svg",a,[["path",{d:"m3 15 4-8 4 8"}],["path",{d:"M4 13h6"}],["circle",{cx:"18",cy:"12",r:"3"}],["path",{d:"M21 9v6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=["svg",a,[["path",{d:"m3 15 4-8 4 8"}],["path",{d:"M4 13h6"}],["path",{d:"M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=["svg",a,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["circle",{cx:"8",cy:"10",r:"2"}],["path",{d:"M8 12h8"}],["circle",{cx:"16",cy:"10",r:"2"}],["path",{d:"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=["svg",a,[["path",{d:"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"}],["path",{d:"M2 12a9 9 0 0 1 8 8"}],["path",{d:"M2 16a5 5 0 0 1 4 4"}],["line",{x1:"2",x2:"2.01",y1:"20",y2:"20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=["svg",a,[["path",{d:"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"}],["path",{d:"M18 11V4H6v7"}],["path",{d:"M15 22v-4a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4"}],["path",{d:"M22 11V9"}],["path",{d:"M2 11V9"}],["path",{d:"M6 4V2"}],["path",{d:"M18 4V2"}],["path",{d:"M10 4V2"}],["path",{d:"M14 4V2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=["svg",a,[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"}],["path",{d:"M8 14v.5"}],["path",{d:"M16 14v.5"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=["svg",a,[["path",{d:"M7 9h.01"}],["path",{d:"M16.75 12H22l-3.5 7-3.09-4.32"}],["path",{d:"M18 9.5l-4 8-10.39-5.2a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3Z"}],["path",{d:"M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15"}],["path",{d:"M2 21v-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=["svg",a,[["path",{d:"M18 6 7 17l-5-5"}],["path",{d:"m22 10-7.5 7.5L13 16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=["svg",a,[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}],["path",{d:"m9 11 3 3L22 4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=["svg",a,[["path",{d:"m9 11 3 3L22 4"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=["svg",a,[["path",{d:"M20 6 9 17l-5-5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=["svg",a,[["path",{d:"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"}],["line",{x1:"6",x2:"18",y1:"17",y2:"17"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=["svg",a,[["path",{d:"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"}],["path",{d:"M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"}],["path",{d:"M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12"}],["path",{d:"M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 10-4 4-4-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 10-4 4-4-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=["svg",a,[["path",{d:"m6 9 6 6 6-6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=["svg",a,[["path",{d:"m17 18-6-6 6-6"}],["path",{d:"M7 6v12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=["svg",a,[["path",{d:"m7 18 6-6-6-6"}],["path",{d:"M17 6v12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m14 16-4-4 4-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m14 16-4-4 4-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=["svg",a,[["path",{d:"m15 18-6-6 6-6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m10 8 4 4-4 4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m10 8 4 4-4 4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=["svg",a,[["path",{d:"m9 18 6-6-6-6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m8 14 4-4 4 4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m8 14 4-4 4 4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=["svg",a,[["path",{d:"m18 15-6-6-6 6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=["svg",a,[["path",{d:"m7 20 5-5 5 5"}],["path",{d:"m7 4 5 5 5-5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=["svg",a,[["path",{d:"m7 6 5 5 5-5"}],["path",{d:"m7 13 5 5 5-5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=["svg",a,[["path",{d:"m9 7-5 5 5 5"}],["path",{d:"m15 7 5 5-5 5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=["svg",a,[["path",{d:"m11 17-5-5 5-5"}],["path",{d:"m18 17-5-5 5-5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=["svg",a,[["path",{d:"m20 17-5-5 5-5"}],["path",{d:"m4 17 5-5-5-5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=["svg",a,[["path",{d:"m6 17 5-5-5-5"}],["path",{d:"m13 17 5-5-5-5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=["svg",a,[["path",{d:"m7 15 5 5 5-5"}],["path",{d:"m7 9 5-5 5 5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=["svg",a,[["path",{d:"m17 11-5-5-5 5"}],["path",{d:"m17 18-5-5-5 5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"4"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=["svg",a,[["path",{d:"m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2"}],["path",{d:"M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"}],["path",{d:"M18 22V5l-6-3-6 3v17"}],["path",{d:"M12 7v5"}],["path",{d:"M10 9h4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=["svg",a,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M12 12H2v4h14"}],["path",{d:"M22 12v4"}],["path",{d:"M18 12h-.5"}],["path",{d:"M7 12v4"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=["svg",a,[["path",{d:"M18 12H2v4h16"}],["path",{d:"M22 12v4"}],["path",{d:"M7 12v4"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=["svg",a,[["path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0"}],["path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"}],["path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8"}],["path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"}],["path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0"}],["path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"}],["path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8"}],["path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 18V6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=["svg",a,[["path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0"}],["path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"}],["path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8"}],["path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"}],["path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0"}],["path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"}],["path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8"}],["path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M17 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M7 12h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=["svg",a,[["path",{d:"M7 10h10"}],["path",{d:"M7 14h10"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=["svg",a,[["path",{d:"m2 2 20 20"}],["path",{d:"M8.35 2.69A10 10 0 0 1 21.3 15.65"}],["path",{d:"M19.08 19.08A10 10 0 1 1 4.92 4.92"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M22 2 2 22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=["svg",a,[["line",{x1:"9",x2:"15",y1:"15",y2:"9"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=["svg",a,[["path",{d:"M18 20a6 6 0 0 0-12 0"}],["circle",{cx:"12",cy:"10",r:"4"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4"}],["circle",{cx:"15",cy:"15",r:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=["svg",a,[["path",{d:"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"}],["path",{d:"M19.65 15.66A8 8 0 0 1 8.35 4.34"}],["path",{d:"m14 10-5.5 5.5"}],["path",{d:"M14 17.85V10H6.15"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=["svg",a,[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"}],["path",{d:"m6.2 5.3 3.1 3.9"}],["path",{d:"m12.4 3.4 3.1 4"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=["svg",a,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=["svg",a,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4"}],["path",{d:"M21 14H11"}],["path",{d:"m15 10-4 4 4 4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=["svg",a,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5"}],["path",{d:"M4 13.5V6a2 2 0 0 1 2-2h2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=["svg",a,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M12 11h4"}],["path",{d:"M12 16h4"}],["path",{d:"M8 11h.01"}],["path",{d:"M8 16h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=["svg",a,[["path",{d:"M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10"}],["path",{d:"m17 10 4 4-4 4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=["svg",a,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1"}],["path",{d:"M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z"}],["path",{d:"M8 18h1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=["svg",a,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 12v-1h6v1"}],["path",{d:"M11 17h2"}],["path",{d:"M12 11v6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr=["svg",a,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m15 11-6 6"}],["path",{d:"m9 11 6 6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=["svg",a,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 14.5 8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 8 10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 9.5 8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16.5 12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ll=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 14.5 16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 12 16.5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 9.5 16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cl=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 8 14"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 7.5 12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=["svg",a,[["circle",{cx:"12",cy:"17",r:"3"}],["path",{d:"M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"}],["path",{d:"m15.7 18.4-.9-.3"}],["path",{d:"m9.2 15.9-.9-.3"}],["path",{d:"m10.6 20.7.3-.9"}],["path",{d:"m13.1 14.2.3-.9"}],["path",{d:"m13.6 20.7-.4-1"}],["path",{d:"m10.8 14.3-.4-1"}],["path",{d:"m8.3 18.6 1-.4"}],["path",{d:"m14.7 15.8 1-.4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl=["svg",a,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M8 19v1"}],["path",{d:"M8 14v1"}],["path",{d:"M16 19v1"}],["path",{d:"M16 14v1"}],["path",{d:"M12 21v1"}],["path",{d:"M12 16v1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=["svg",a,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 17H7"}],["path",{d:"M17 21H9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=["svg",a,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 14v2"}],["path",{d:"M8 14v2"}],["path",{d:"M16 20h.01"}],["path",{d:"M8 20h.01"}],["path",{d:"M12 16v2"}],["path",{d:"M12 22h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=["svg",a,[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"}],["path",{d:"m13 12-3 5h4l-3 5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=["svg",a,[["path",{d:"M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"}],["path",{d:"M11 20v2"}],["path",{d:"M7 19v2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=["svg",a,[["path",{d:"M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z"}],["path",{d:"M10.1 9A6 6 0 0 1 16 4a4.24 4.24 0 0 0 6 6 6 6 0 0 1-3 5.197"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=["svg",a,[["path",{d:"m2 2 20 20"}],["path",{d:"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193"}],["path",{d:"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=["svg",a,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"m9.2 22 3-7"}],["path",{d:"m9 13-3 7"}],["path",{d:"m17 13-3 7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=["svg",a,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 14v6"}],["path",{d:"M8 14v6"}],["path",{d:"M12 16v6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=["svg",a,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M8 15h.01"}],["path",{d:"M8 19h.01"}],["path",{d:"M12 17h.01"}],["path",{d:"M12 21h.01"}],["path",{d:"M16 15h.01"}],["path",{d:"M16 19h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=["svg",a,[["path",{d:"M12 2v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"M20 12h2"}],["path",{d:"m19.07 4.93-1.41 1.41"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"}],["path",{d:"M11 20v2"}],["path",{d:"M7 19v2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=["svg",a,[["path",{d:"M12 2v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"M20 12h2"}],["path",{d:"m19.07 4.93-1.41 1.41"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=["svg",a,[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=["svg",a,[["path",{d:"M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}],["path",{d:"M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=["svg",a,[["path",{d:"M16.2 3.8a2.7 2.7 0 0 0-3.81 0l-.4.38-.4-.4a2.7 2.7 0 0 0-3.82 0C6.73 4.85 6.67 6.64 8 8l4 4 4-4c1.33-1.36 1.27-3.15.2-4.2z"}],["path",{d:"M8 8c-1.36-1.33-3.15-1.27-4.2-.2a2.7 2.7 0 0 0 0 3.81l.38.4-.4.4a2.7 2.7 0 0 0 0 3.82C4.85 17.27 6.64 17.33 8 16"}],["path",{d:"M16 16c1.36 1.33 3.15 1.27 4.2.2a2.7 2.7 0 0 0 0-3.81l-.38-.4.4-.4a2.7 2.7 0 0 0 0-3.82C19.15 6.73 17.36 6.67 16 8"}],["path",{d:"M7.8 20.2a2.7 2.7 0 0 0 3.81 0l.4-.38.4.4a2.7 2.7 0 0 0 3.82 0c1.06-1.06 1.12-2.85-.21-4.21l-4-4-4 4c-1.33 1.36-1.27 3.15-.2 4.2z"}],["path",{d:"m7 17-5 5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=["svg",a,[["path",{d:"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z"}],["path",{d:"M12 17.66L12 22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=["svg",a,[["path",{d:"m18 16 4-4-4-4"}],["path",{d:"m6 8-4 4 4 4"}],["path",{d:"m14.5 4-5 16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=["svg",a,[["polyline",{points:"16 18 22 12 16 6"}],["polyline",{points:"8 6 2 12 8 18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=["svg",a,[["polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"}],["line",{x1:"12",x2:"12",y1:"22",y2:"15.5"}],["polyline",{points:"22 8.5 12 15.5 2 8.5"}],["polyline",{points:"2 15.5 12 8.5 22 15.5"}],["line",{x1:"12",x2:"12",y1:"2",y2:"8.5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=["svg",a,[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}],["polyline",{points:"7.5 4.21 12 6.81 16.5 4.21"}],["polyline",{points:"7.5 19.79 7.5 14.6 3 12"}],["polyline",{points:"21 12 16.5 14.6 16.5 19.79"}],["polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}],["line",{x1:"12",x2:"12",y1:"22.08",y2:"12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=["svg",a,[["path",{d:"M17 8h1a4 4 0 1 1 0 8h-1"}],["path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"}],["line",{x1:"6",x2:"6",y1:"2",y2:"4"}],["line",{x1:"10",x2:"10",y1:"2",y2:"4"}],["line",{x1:"14",x2:"14",y1:"2",y2:"4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=["svg",a,[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"}],["path",{d:"M12 2v2"}],["path",{d:"M12 22v-2"}],["path",{d:"m17 20.66-1-1.73"}],["path",{d:"M11 10.27 7 3.34"}],["path",{d:"m20.66 17-1.73-1"}],["path",{d:"m3.34 7 1.73 1"}],["path",{d:"M14 12h8"}],["path",{d:"M2 12h2"}],["path",{d:"m20.66 7-1.73 1"}],["path",{d:"m3.34 17 1.73-1"}],["path",{d:"m17 3.34-1 1.73"}],["path",{d:"m11 13.73-4 6.93"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=["svg",a,[["circle",{cx:"8",cy:"8",r:"6"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18"}],["path",{d:"M7 6h1v4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 3v18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"M15 3v18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7.5 3v18"}],["path",{d:"M12 3v18"}],["path",{d:"M16.5 3v18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=["svg",a,[["rect",{width:"8",height:"8",x:"2",y:"2",rx:"2"}],["path",{d:"M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"}],["path",{d:"M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"}],["path",{d:"M10 18H5c-1.7 0-3-1.3-3-3v-1"}],["polyline",{points:"7 21 10 18 7 15"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=["svg",a,[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=["svg",a,[["path",{d:"M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"}],["path",{d:"m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"}],["path",{d:"M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"}],["path",{d:"m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=["svg",a,[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h2"}],["path",{d:"M12 18h6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=["svg",a,[["path",{d:"M2 18a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2H2v-2Z"}],["path",{d:"M20 16a8 8 0 1 0-16 0"}],["path",{d:"M12 4v4"}],["path",{d:"M10 4h4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=["svg",a,[["path",{d:"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98"}],["ellipse",{cx:"12",cy:"19",rx:"9",ry:"3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=["svg",a,[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1"}],["path",{d:"M17 14v7"}],["path",{d:"M7 14v7"}],["path",{d:"M17 3v3"}],["path",{d:"M7 3v3"}],["path",{d:"M10 14 2.3 6.3"}],["path",{d:"m14 6 7.7 7.7"}],["path",{d:"m8 6 8 8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=["svg",a,[["path",{d:"M16 18a4 4 0 0 0-8 0"}],["circle",{cx:"12",cy:"11",r:"3"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["line",{x1:"8",x2:"8",y1:"2",y2:"4"}],["line",{x1:"16",x2:"16",y1:"2",y2:"4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=["svg",a,[["path",{d:"M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["circle",{cx:"12",cy:"10",r:"2"}],["line",{x1:"8",x2:"8",y1:"2",y2:"4"}],["line",{x1:"16",x2:"16",y1:"2",y2:"4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=["svg",a,[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"}],["path",{d:"M10 21.9V14L2.1 9.1"}],["path",{d:"m10 14 11.9-6.9"}],["path",{d:"M14 19.8v-8.1"}],["path",{d:"M18 17.5V9.4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=["svg",a,[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"}],["path",{d:"M8.5 8.5v.01"}],["path",{d:"M16 15.5v.01"}],["path",{d:"M12 12v.01"}],["path",{d:"M11 17v.01"}],["path",{d:"M7 14v.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=["svg",a,[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=["svg",a,[["path",{d:"m12 15 2 2 4-4"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=["svg",a,[["line",{x1:"12",x2:"18",y1:"15",y2:"15"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=["svg",a,[["line",{x1:"15",x2:"15",y1:"12",y2:"18"}],["line",{x1:"12",x2:"18",y1:"15",y2:"15"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=["svg",a,[["line",{x1:"12",x2:"18",y1:"18",y2:"12"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=["svg",a,[["line",{x1:"12",x2:"18",y1:"12",y2:"18"}],["line",{x1:"12",x2:"18",y1:"18",y2:"12"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=["svg",a,[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.17 14.83a4 4 0 1 0 0-5.66"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M14.83 14.83a4 4 0 1 1 0-5.66"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=["svg",a,[["polyline",{points:"9 10 4 15 9 20"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=["svg",a,[["polyline",{points:"15 10 20 15 15 20"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=["svg",a,[["polyline",{points:"14 15 9 20 4 15"}],["path",{d:"M20 4h-7a4 4 0 0 0-4 4v12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=["svg",a,[["polyline",{points:"14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=["svg",a,[["polyline",{points:"10 15 15 20 20 15"}],["path",{d:"M4 4h7a4 4 0 0 1 4 4v12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=["svg",a,[["polyline",{points:"10 9 15 4 20 9"}],["path",{d:"M4 20h7a4 4 0 0 0 4-4V4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=["svg",a,[["polyline",{points:"9 14 4 9 9 4"}],["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=["svg",a,[["polyline",{points:"15 14 20 9 15 4"}],["path",{d:"M4 20v-7a4 4 0 0 1 4-4h12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=["svg",a,[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}],["rect",{x:"9",y:"9",width:"6",height:"6"}],["path",{d:"M15 2v2"}],["path",{d:"M15 20v2"}],["path",{d:"M2 15h2"}],["path",{d:"M2 9h2"}],["path",{d:"M20 15h2"}],["path",{d:"M20 9h2"}],["path",{d:"M9 2v2"}],["path",{d:"M9 20v2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"}],["path",{d:"M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=["svg",a,[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=["svg",a,[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=["svg",a,[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=["svg",a,[["path",{d:"M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=["svg",a,[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=["svg",a,[["path",{d:"m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z"}],["path",{d:"M10 22v-8L2.25 9.15"}],["path",{d:"m10 14 11.77-6.87"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=["svg",a,[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"}],["path",{d:"M5 8h14"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"}],["path",{d:"m12 8 1-6h2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=["svg",a,[["circle",{cx:"12",cy:"12",r:"8"}],["line",{x1:"3",x2:"6",y1:"3",y2:"6"}],["line",{x1:"21",x2:"18",y1:"3",y2:"6"}],["line",{x1:"3",x2:"6",y1:"21",y2:"18"}],["line",{x1:"21",x2:"18",y1:"21",y2:"18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=["svg",a,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=["svg",a,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 12a9 3 0 0 0 5 2.69"}],["path",{d:"M21 9.3V5"}],["path",{d:"M3 5v14a9 3 0 0 0 6.47 2.88"}],["path",{d:"M12 12v4h4"}],["path",{d:"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=["svg",a,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 15 21.84"}],["path",{d:"M21 5V8"}],["path",{d:"M21 12L18 17H22L19 22"}],["path",{d:"M3 12A9 3 0 0 0 14.59 14.87"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=["svg",a,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=["svg",a,[["path",{d:"M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"}],["line",{x1:"18",x2:"12",y1:"9",y2:"15"}],["line",{x1:"12",x2:"18",y1:"9",y2:"15"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=["svg",a,[["circle",{cx:"12",cy:"4",r:"2"}],["path",{d:"M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8"}],["path",{d:"M3.2 14.8a9 9 0 0 0 17.6 0"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=["svg",a,[["circle",{cx:"19",cy:"19",r:"2"}],["circle",{cx:"5",cy:"5",r:"2"}],["path",{d:"M6.48 3.66a10 10 0 0 1 13.86 13.86"}],["path",{d:"m6.41 6.41 11.18 11.18"}],["path",{d:"M3.66 6.48a10 10 0 0 0 13.86 13.86"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=["svg",a,[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M12 12h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M15 9h.01"}],["path",{d:"M9 15h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M8 16h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 16h.01"}],["path",{d:"M16 16h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 16h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M12 12h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M16 12h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 12h.01"}],["path",{d:"M8 16h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=["svg",a,[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 14h.01"}],["path",{d:"M15 6h.01"}],["path",{d:"M18 9h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=["svg",a,[["path",{d:"M12 3v14"}],["path",{d:"M5 10h14"}],["path",{d:"M5 21h14"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 12h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"12",r:"5"}],["path",{d:"M12 12h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=["svg",a,[["line",{x1:"8",x2:"16",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=["svg",a,[["circle",{cx:"12",cy:"6",r:"1"}],["line",{x1:"5",x2:"19",y1:"12",y2:"12"}],["circle",{cx:"12",cy:"18",r:"1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=["svg",a,[["path",{d:"M15 2c-1.35 1.5-2.092 3-2.5 4.5M9 22c1.35-1.5 2.092-3 2.5-4.5"}],["path",{d:"M2 15c3.333-3 6.667-3 10-3m10-3c-1.5 1.35-3 2.092-4.5 2.5"}],["path",{d:"m17 6-2.5-2.5"}],["path",{d:"m14 8-1.5-1.5"}],["path",{d:"m7 18 2.5 2.5"}],["path",{d:"m3.5 14.5.5.5"}],["path",{d:"m20 9 .5.5"}],["path",{d:"m6.5 12.5 1 1"}],["path",{d:"m16.5 10.5 1 1"}],["path",{d:"m10 16 1.5 1.5"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=["svg",a,[["path",{d:"M2 15c6.667-6 13.333 0 20-6"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"}],["path",{d:"m17 6-2.5-2.5"}],["path",{d:"m14 8-1-1"}],["path",{d:"m7 18 2.5 2.5"}],["path",{d:"m3.5 14.5.5.5"}],["path",{d:"m20 9 .5.5"}],["path",{d:"m6.5 12.5 1 1"}],["path",{d:"m16.5 10.5 1 1"}],["path",{d:"m10 16 1.5 1.5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=["svg",a,[["path",{d:"M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5"}],["path",{d:"M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"}],["path",{d:"M8 14v.5"}],["path",{d:"M16 14v.5"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=["svg",a,[["line",{x1:"12",x2:"12",y1:"2",y2:"22"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=["svg",a,[["path",{d:"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=["svg",a,[["path",{d:"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"}],["path",{d:"M2 20h20"}],["path",{d:"M14 12v.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=["svg",a,[["path",{d:"M13 4h3a2 2 0 0 1 2 2v14"}],["path",{d:"M2 20h3"}],["path",{d:"M13 20h9"}],["path",{d:"M10 12v.01"}],["path",{d:"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=["svg",a,[["circle",{cx:"12.1",cy:"12.1",r:"1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=["svg",a,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M12 12v9"}],["path",{d:"m8 17 4 4 4-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=["svg",a,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=["svg",a,[["circle",{cx:"12",cy:"5",r:"2"}],["path",{d:"m3 21 8.02-14.26"}],["path",{d:"m12.99 6.74 1.93 3.44"}],["path",{d:"M19 12c-3.87 4-10.13 4-14 0"}],["path",{d:"m21 21-2.16-3.84"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=["svg",a,[["path",{d:"M10 11h.01"}],["path",{d:"M14 6h.01"}],["path",{d:"M18 6h.01"}],["path",{d:"M6.5 13.1h.01"}],["path",{d:"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3"}],["path",{d:"M17.4 9.9c-.8.8-2 .8-2.8 0"}],["path",{d:"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"}],["path",{d:"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=["svg",a,[["path",{d:"M14 9c0 .6-.4 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9c.6 0 1 .4 1 1Z"}],["path",{d:"M18 6h4"}],["path",{d:"M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3"}],["path",{d:"m5 10-2 8"}],["path",{d:"M12 10v3c0 .6-.4 1-1 1H8"}],["path",{d:"m7 18 2-8"}],["path",{d:"M5 22c-1.7 0-3-1.3-3-3 0-.6.4-1 1-1h7c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=["svg",a,[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=["svg",a,[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=["svg",a,[["path",{d:"m2 2 8 8"}],["path",{d:"m22 2-8 8"}],["ellipse",{cx:"12",cy:"9",rx:"10",ry:"5"}],["path",{d:"M7 13.4v7.9"}],["path",{d:"M12 14v8"}],["path",{d:"M17 13.4v7.9"}],["path",{d:"M2 9v8a10 5 0 0 0 20 0V9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=["svg",a,[["path",{d:"M15.45 15.4c-2.13.65-4.3.32-5.7-1.1-2.29-2.27-1.76-6.5 1.17-9.42 2.93-2.93 7.15-3.46 9.43-1.18 1.41 1.41 1.74 3.57 1.1 5.71-1.4-.51-3.26-.02-4.64 1.36-1.38 1.38-1.87 3.23-1.36 4.63z"}],["path",{d:"m11.25 15.6-2.16 2.16a2.5 2.5 0 1 1-4.56 1.73 2.49 2.49 0 0 1-1.41-4.24 2.5 2.5 0 0 1 3.14-.32l2.16-2.16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=["svg",a,[["path",{d:"m6.5 6.5 11 11"}],["path",{d:"m21 21-1-1"}],["path",{d:"m3 3 1 1"}],["path",{d:"m18 22 4-4"}],["path",{d:"m2 6 4-4"}],["path",{d:"m3 10 7-7"}],["path",{d:"m14 21 7-7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=["svg",a,[["path",{d:"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46"}],["path",{d:"M6 8.5c0-.75.13-1.47.36-2.14"}],["path",{d:"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76"}],["path",{d:"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=["svg",a,[["path",{d:"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"}],["path",{d:"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=["svg",a,[["circle",{cx:"11.5",cy:"12.5",r:"3.5"}],["path",{d:"M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=["svg",a,[["path",{d:"M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625"}],["path",{d:"M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=["svg",a,[["path",{d:"M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=["svg",a,[["line",{x1:"5",x2:"19",y1:"9",y2:"9"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=["svg",a,[["line",{x1:"5",x2:"19",y1:"9",y2:"9"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=["svg",a,[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"}],["path",{d:"M22 21H7"}],["path",{d:"m5 11 9 9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=["svg",a,[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=["svg",a,[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=["svg",a,[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}],["polyline",{points:"15 3 21 3 21 9"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=["svg",a,[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=["svg",a,[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=["svg",a,[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=["svg",a,[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M17 18h1"}],["path",{d:"M12 18h1"}],["path",{d:"M7 18h1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=["svg",a,[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"}],["path",{d:"M12 12v.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=["svg",a,[["polygon",{points:"13 19 22 12 13 5 13 19"}],["polygon",{points:"2 19 11 12 2 5 2 19"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=["svg",a,[["path",{d:"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"}],["line",{x1:"16",x2:"2",y1:"8",y2:"22"}],["line",{x1:"17.5",x2:"9",y1:"15",y2:"15"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=["svg",a,[["path",{d:"M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}],["path",{d:"M6 8h4"}],["path",{d:"M6 18h4"}],["path",{d:"m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}],["path",{d:"M14 8h4"}],["path",{d:"M14 18h4"}],["path",{d:"m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=["svg",a,[["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M12 2v4"}],["path",{d:"m6.8 15-3.5 2"}],["path",{d:"m20.7 7-3.5 2"}],["path",{d:"M6.8 9 3.3 7"}],["path",{d:"m20.7 17-3.5-2"}],["path",{d:"m9 22 3-8 3 8"}],["path",{d:"M8 22h8"}],["path",{d:"M18 18.7a9 9 0 1 0-12 0"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=["svg",a,[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=["svg",a,[["path",{d:"M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h8.5L20 7.5V20c0 .5-.2 1-.6 1.4-.4.4-.9.6-1.4.6h-2"}],["polyline",{points:"14 2 14 8 20 8"}],["circle",{cx:"10",cy:"20",r:"2"}],["path",{d:"M10 7V6"}],["path",{d:"M10 12v-1"}],["path",{d:"M10 18v-2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v2"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M2 17v-3a4 4 0 0 1 8 0v3"}],["circle",{cx:"9",cy:"17",r:"1"}],["circle",{cx:"3",cy:"17",r:"1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=["svg",a,[["path",{d:"M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M10 20v-1a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0Z"}],["path",{d:"M6 20v-1a2 2 0 1 0-4 0v1a2 2 0 1 0 4 0Z"}],["path",{d:"M2 19v-3a6 6 0 0 1 12 0v3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=["svg",a,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M8 10v8h8"}],["path",{d:"m8 18 4-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=["svg",a,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["path",{d:"M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}],["path",{d:"m14 12.5 1 5.5-3-1-3 1 1-5.5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=["svg",a,[["path",{d:"M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-6"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}],["path",{d:"M7 16.5 8 22l-3-1-3 1 1-5.5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=["svg",a,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M12 18v-6"}],["path",{d:"M8 18v-1"}],["path",{d:"M16 18v-3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=["svg",a,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M12 18v-4"}],["path",{d:"M8 18v-2"}],["path",{d:"M16 18v-6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=["svg",a,[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M2.97 13.12c-.6.36-.97 1.02-.97 1.74v3.28c0 .72.37 1.38.97 1.74l3 1.83c.63.39 1.43.39 2.06 0l3-1.83c.6-.36.97-1.02.97-1.74v-3.28c0-.72-.37-1.38-.97-1.74l-3-1.83a1.97 1.97 0 0 0-2.06 0l-3 1.83Z"}],["path",{d:"m7 17-4.74-2.85"}],["path",{d:"m7 17 4.74-2.85"}],["path",{d:"M7 17v5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"m3 15 2 2 4-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=["svg",a,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"m9 15 2 2 4-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=["svg",a,[["path",{d:"M16 22h2c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3"}],["polyline",{points:"14 2 14 8 20 8"}],["circle",{cx:"8",cy:"16",r:"6"}],["path",{d:"M9.5 17.5 8 16.25V14"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"m9 18 3-3-3-3"}],["path",{d:"m5 12-3 3 3 3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=["svg",a,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"m10 13-2 2 2 2"}],["path",{d:"m14 17 2-2-2-2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=["svg",a,[["circle",{cx:"6",cy:"13",r:"3"}],["path",{d:"m9.7 14.4-.9-.3"}],["path",{d:"m3.2 11.9-.9-.3"}],["path",{d:"m4.6 16.7.3-.9"}],["path",{d:"m7.6 16.7-.4-1"}],["path",{d:"m4.8 10.3-.4-1"}],["path",{d:"m2.3 14.6 1-.4"}],["path",{d:"m8.7 11.8 1-.4"}],["path",{d:"m7.4 9.3-.3.9"}],["path",{d:"M14 2v6h6"}],["path",{d:"M4 5.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-1.5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=["svg",a,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["path",{d:"M12 13V7"}],["path",{d:"M9 10h6"}],["path",{d:"M9 17h6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=["svg",a,[["rect",{width:"4",height:"6",x:"2",y:"12",rx:"2"}],["path",{d:"M14 2v6h6"}],["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["path",{d:"M10 12h2v6"}],["path",{d:"M10 18h4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=["svg",a,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M12 18v-6"}],["path",{d:"m9 15 3 3 3-3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=["svg",a,[["path",{d:"M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=["svg",a,[["path",{d:"M4 6V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=["svg",a,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["circle",{cx:"10",cy:"13",r:"2"}],["path",{d:"m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M2 15h10"}],["path",{d:"m9 18 3-3-3-3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"}],["path",{d:"M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=["svg",a,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=["svg",a,[["path",{d:"M4 10V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4"}],["polyline",{points:"14 2 14 8 20 8"}],["circle",{cx:"4",cy:"16",r:"2"}],["path",{d:"m10 10-4.5 4.5"}],["path",{d:"m9 11 1 1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=["svg",a,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["circle",{cx:"10",cy:"16",r:"2"}],["path",{d:"m16 10-4.5 4.5"}],["path",{d:"m15 11 1 1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=["svg",a,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"m16 13-3.5 3.5-2-2L8 17"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=["svg",a,[["path",{d:"M4 5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4"}],["polyline",{points:"14 2 14 8 20 8"}],["rect",{width:"8",height:"5",x:"2",y:"13",rx:"1"}],["path",{d:"M8 13v-2a2 2 0 1 0-4 0v2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=["svg",a,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["rect",{width:"8",height:"6",x:"8",y:"12",rx:"1"}],["path",{d:"M15 12v-2a3 3 0 1 0-6 0v2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M3 15h6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=["svg",a,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["line",{x1:"9",x2:"15",y1:"15",y2:"15"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=["svg",a,[["circle",{cx:"14",cy:"16",r:"2"}],["circle",{cx:"6",cy:"18",r:"2"}],["path",{d:"M4 12.4V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-7.5"}],["path",{d:"M8 18v-7.7L16 9v7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M2 15h10"}],["path",{d:"m5 12-3 3 3 3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=["svg",a,[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M4.04 11.71a5.84 5.84 0 1 0 8.2 8.29"}],["path",{d:"M13.83 16A5.83 5.83 0 0 0 8 10.17V16h5.83Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M3 15h6"}],["path",{d:"M6 12v6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=["svg",a,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["line",{x1:"12",x2:"12",y1:"18",y2:"12"}],["line",{x1:"9",x2:"15",y1:"15",y2:"15"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=["svg",a,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["path",{d:"M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=["svg",a,[["path",{d:"M20 10V7.5L14.5 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h4.5"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M16 22a2 2 0 0 1-2-2"}],["path",{d:"M20 22a2 2 0 0 0 2-2"}],["path",{d:"M20 14a2 2 0 0 1 2 2"}],["path",{d:"M16 14a2 2 0 0 0-2 2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=["svg",a,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5"}],["path",{d:"M13.25 16.25 15 18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"m9 18-1.5-1.5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=["svg",a,[["path",{d:"M20 19.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.5L18 5.5"}],["path",{d:"M8 18h1"}],["path",{d:"M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=["svg",a,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M8 13h2"}],["path",{d:"M8 17h2"}],["path",{d:"M14 13h2"}],["path",{d:"M14 17h2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=["svg",a,[["path",{d:"M16 2v5h5"}],["path",{d:"M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17l4 4z"}],["path",{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15"}],["path",{d:"M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v7"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"m10 18 3-3-3-3"}],["path",{d:"M4 18v-1a2 2 0 0 1 2-2h6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=["svg",a,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"m8 16 2-2-2-2"}],["path",{d:"M12 18h4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=["svg",a,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M2 13v-1h6v1"}],["path",{d:"M4 18h2"}],["path",{d:"M5 12v6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=["svg",a,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M9 13v-1h6v1"}],["path",{d:"M11 18h2"}],["path",{d:"M12 12v6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=["svg",a,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M12 12v6"}],["path",{d:"m15 15-3-3-3 3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=["svg",a,[["path",{d:"M4 8V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"m10 15.5 4 2.5v-6l-4 2.5"}],["rect",{width:"8",height:"6",x:"2",y:"12",rx:"1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=["svg",a,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"m10 11 5 3-5 3v-6Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=["svg",a,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"M11.5 13.5c.32.4.5.94.5 1.5s-.18 1.1-.5 1.5"}],["path",{d:"M15 12c.64.8 1 1.87 1 3s-.36 2.2-1 3"}],["path",{d:"M8 15h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3"}],["polyline",{points:"14 2 14 8 20 8"}],["path",{d:"m7 10-3 2H2v4h2l3 2v-8Z"}],["path",{d:"M11 11c.64.8 1 1.87 1 3s-.36 2.2-1 3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=["svg",a,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v6h6"}],["path",{d:"m3 12.5 5 5"}],["path",{d:"m8 12.5-5 5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=["svg",a,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}],["line",{x1:"9.5",x2:"14.5",y1:"12.5",y2:"17.5"}],["line",{x1:"14.5",x2:"9.5",y1:"12.5",y2:"17.5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=["svg",a,[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}],["polyline",{points:"14 2 14 8 20 8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=["svg",a,[["path",{d:"M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z"}],["path",{d:"M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8"}],["path",{d:"M15 2v5h5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 3v18"}],["path",{d:"M3 7.5h4"}],["path",{d:"M3 12h18"}],["path",{d:"M3 16.5h4"}],["path",{d:"M17 3v18"}],["path",{d:"M17 7.5h4"}],["path",{d:"M17 16.5h4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=["svg",a,[["path",{d:"M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055"}],["path",{d:"m22 3-5 5"}],["path",{d:"m17 3 5 5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=["svg",a,[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=["svg",a,[["path",{d:"M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02"}],["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88"}],["path",{d:"M2 16h.01"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=["svg",a,[["path",{d:"M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5"}],["path",{d:"M9 18h8"}],["path",{d:"M18 3h-3"}],["path",{d:"M11 3a6 6 0 0 0-6 6v11"}],["path",{d:"M5 13h4"}],["path",{d:"M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=["svg",a,[["path",{d:"M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=["svg",a,[["path",{d:"M2 16s9-15 20-4C11 23 2 8 2 8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=["svg",a,[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"}],["path",{d:"M18 12v.5"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=["svg",a,[["path",{d:"M8 2c3 0 5 2 8 2s4-1 4-1v11"}],["path",{d:"M4 22V4"}],["path",{d:"M4 15s1-1 4-1 5 2 8 2"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=["svg",a,[["path",{d:"M17 22V2L7 7l10 5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=["svg",a,[["path",{d:"M7 22V2l10 5-10 5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=["svg",a,[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=["svg",a,[["path",{d:"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"}],["path",{d:"m5 22 14-4"}],["path",{d:"m5 18 14 4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=["svg",a,[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=["svg",a,[["path",{d:"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4"}],["path",{d:"M7 2h11v4c0 2-2 2-2 4v1"}],["line",{x1:"11",x2:"18",y1:"6",y2:"6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=["svg",a,[["path",{d:"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"}],["line",{x1:"6",x2:"18",y1:"6",y2:"6"}],["line",{x1:"12",x2:"12",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=["svg",a,[["path",{d:"M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542"}],["path",{d:"M10 2v2.343"}],["path",{d:"M14 2v6.343"}],["path",{d:"M8.5 2h7"}],["path",{d:"M7 16h9"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=["svg",a,[["path",{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"}],["path",{d:"M8.5 2h7"}],["path",{d:"M7 16h10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=["svg",a,[["path",{d:"M10 2v7.31"}],["path",{d:"M14 9.3V1.99"}],["path",{d:"M8.5 2h7"}],["path",{d:"M14 9.3a6.5 6.5 0 1 1-4 0"}],["path",{d:"M5.52 16h12.96"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=["svg",a,[["path",{d:"m3 7 5 5-5 5V7"}],["path",{d:"m21 7-5 5 5 5V7"}],["path",{d:"M12 20v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 2v2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=["svg",a,[["path",{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"}],["path",{d:"M12 20v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 2v2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=["svg",a,[["path",{d:"m17 3-5 5-5-5h10"}],["path",{d:"m17 21-5-5-5 5h10"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=["svg",a,[["path",{d:"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=["svg",a,[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"}],["circle",{cx:"12",cy:"8",r:"2"}],["path",{d:"M12 10v12"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=["svg",a,[["path",{d:"M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m8 16 1.5-1.5"}],["path",{d:"M14.5 9.5 16 8"}],["path",{d:"m8 8 1.5 1.5"}],["path",{d:"M14.5 14.5 16 16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=["svg",a,[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=["svg",a,[["path",{d:"M2 12h6"}],["path",{d:"M22 12h-6"}],["path",{d:"M12 2v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 20v2"}],["path",{d:"m19 9-3 3 3 3"}],["path",{d:"m5 15 3-3-3-3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=["svg",a,[["path",{d:"M12 22v-6"}],["path",{d:"M12 8V2"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}],["path",{d:"m15 19-3-3-3 3"}],["path",{d:"m15 5-3 3-3-3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=["svg",a,[["circle",{cx:"15",cy:"19",r:"2"}],["path",{d:"M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"}],["path",{d:"M15 11v-1"}],["path",{d:"M15 17v-2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=["svg",a,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"m9 13 2 2 4-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=["svg",a,[["circle",{cx:"16",cy:"16",r:"6"}],["path",{d:"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2"}],["path",{d:"M16 14v2l1 1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=["svg",a,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M2 10h20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=["svg",a,[["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3"}],["path",{d:"m21.7 19.4-.9-.3"}],["path",{d:"m15.2 16.9-.9-.3"}],["path",{d:"m16.6 21.7.3-.9"}],["path",{d:"m19.1 15.2.3-.9"}],["path",{d:"m19.6 21.7-.4-1"}],["path",{d:"m16.8 15.3-.4-1"}],["path",{d:"m14.3 19.6 1-.4"}],["path",{d:"m20.7 16.8 1-.4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=["svg",a,[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["circle",{cx:"12",cy:"13",r:"1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=["svg",a,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M12 10v6"}],["path",{d:"m15 13-3 3-3-3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=["svg",a,[["path",{d:"M8.4 10.6a2.1 2.1 0 1 1 2.99 2.98L6 19l-4 1 1-3.9Z"}],["path",{d:"M2 11.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=["svg",a,[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"}],["circle",{cx:"13",cy:"12",r:"2"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8"}],["circle",{cx:"20",cy:"19",r:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=["svg",a,[["circle",{cx:"12",cy:"13",r:"2"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M14 13h3"}],["path",{d:"M7 13h3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=["svg",a,[["path",{d:"M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5"}],["path",{d:"M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01v0c.95.95 1 2.53-.2 3.74L17.5 21Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=["svg",a,[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"}],["path",{d:"M2 13h10"}],["path",{d:"m9 16 3-3-3-3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=["svg",a,[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["path",{d:"M8 10v4"}],["path",{d:"M12 10v2"}],["path",{d:"M16 10v6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=["svg",a,[["circle",{cx:"16",cy:"20",r:"2"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2"}],["path",{d:"m22 14-4.5 4.5"}],["path",{d:"m21 15 1 1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=["svg",a,[["rect",{width:"8",height:"5",x:"14",y:"17",rx:"1"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=["svg",a,[["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=["svg",a,[["path",{d:"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"}],["circle",{cx:"14",cy:"15",r:"1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=["svg",a,[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=["svg",a,[["path",{d:"M2 7.5V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2"}],["path",{d:"M2 13h10"}],["path",{d:"m5 10-3 3 3 3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=["svg",a,[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=["svg",a,[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["circle",{cx:"12",cy:"13",r:"2"}],["path",{d:"M12 15v5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=["svg",a,[["circle",{cx:"11.5",cy:"12.5",r:"2.5"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M13.3 14.3 15 16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=["svg",a,[["circle",{cx:"17",cy:"17",r:"3"}],["path",{d:"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"}],["path",{d:"m21 21-1.5-1.5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=["svg",a,[["path",{d:"M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2"}],["path",{d:"m8 16 3-3-3-3"}],["path",{d:"M2 16v-1a2 2 0 0 1 2-2h6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=["svg",a,[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1"}],["path",{d:"M12 10v4h4"}],["path",{d:"m12 14 1.5-1.5c.9-.9 2.2-1.5 3.5-1.5s2.6.6 3.5 1.5c.4.4.8 1 1 1.5"}],["path",{d:"M22 22v-4h-4"}],["path",{d:"m22 18-1.5 1.5c-.9.9-2.1 1.5-3.5 1.5s-2.6-.6-3.5-1.5c-.4-.4-.8-1-1-1.5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=["svg",a,[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=["svg",a,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M12 10v6"}],["path",{d:"m9 13 3-3 3 3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=["svg",a,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"m9.5 10.5 5 5"}],["path",{d:"m14.5 10.5-5 5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=["svg",a,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=["svg",a,[["path",{d:"M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"}],["path",{d:"M2 8v11a2 2 0 0 0 2 2h14"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=["svg",a,[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"}],["path",{d:"M16 17h4"}],["path",{d:"M4 13h4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=["svg",a,[["path",{d:"M12 12H5a2 2 0 0 0-2 2v5"}],["circle",{cx:"13",cy:"19",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=["svg",a,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}],["path",{d:"M12 12h.01"}],["path",{d:"M17 12h.01"}],["path",{d:"M7 12h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=["svg",a,[["polyline",{points:"15 17 20 12 15 7"}],["path",{d:"M4 18v-2a4 4 0 0 1 4-4h12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=["svg",a,[["line",{x1:"22",x2:"2",y1:"6",y2:"6"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=["svg",a,[["path",{d:"M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=["svg",a,[["line",{x1:"3",x2:"15",y1:"22",y2:"22"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=["svg",a,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["rect",{width:"10",height:"8",x:"7",y:"8",rx:"1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}],["path",{d:"M9 11.2h5.7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=["svg",a,[["path",{d:"M2 7v10"}],["path",{d:"M6 5v14"}],["rect",{width:"12",height:"18",x:"10",y:"3",rx:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=["svg",a,[["path",{d:"M2 3v18"}],["rect",{width:"12",height:"18",x:"6",y:"3",rx:"2"}],["path",{d:"M22 3v18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=["svg",a,[["rect",{width:"18",height:"14",x:"3",y:"3",rx:"2"}],["path",{d:"M4 21h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 21h1"}],["path",{d:"M19 21h1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=["svg",a,[["path",{d:"M7 2h10"}],["path",{d:"M5 6h14"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=["svg",a,[["path",{d:"M3 2h18"}],["rect",{width:"18",height:"12",x:"3",y:"6",rx:"2"}],["path",{d:"M3 22h18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=["svg",a,[["line",{x1:"6",x2:"10",y1:"11",y2:"11"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=["svg",a,[["line",{x1:"6",x2:"10",y1:"12",y2:"12"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 8h7"}],["path",{d:"M8 12h6"}],["path",{d:"M11 16h5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=["svg",a,[["path",{d:"M8 6h10"}],["path",{d:"M6 12h9"}],["path",{d:"M11 18h7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=["svg",a,[["path",{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M13.4 10.6 19 5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=["svg",a,[["path",{d:"m12 14 4-4"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=["svg",a,[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"}],["path",{d:"m16 16 6-6"}],["path",{d:"m8 8 6-6"}],["path",{d:"m9 7 8 8"}],["path",{d:"m21 11-8-8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=["svg",a,[["path",{d:"M6 3h12l4 6-10 13L2 9Z"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6"}],["path",{d:"M2 9h20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=["svg",a,[["path",{d:"M9 10h.01"}],["path",{d:"M15 10h.01"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=["svg",a,[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}],["path",{d:"M12 8v13"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=["svg",a,[["path",{d:"M6 3v12"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M15 6a9 9 0 0 0-9 9"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=["svg",a,[["line",{x1:"6",x2:"6",y1:"3",y2:"15"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M18 9a9 9 0 0 1-9 9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=["svg",a,[["circle",{cx:"12",cy:"12",r:"3"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=["svg",a,[["path",{d:"M12 3v6"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 15v6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=["svg",a,[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7"}],["path",{d:"m15 9-3-3 3-3"}],["circle",{cx:"19",cy:"18",r:"3"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9"}],["path",{d:"m9 15 3 3-3 3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=["svg",a,[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=["svg",a,[["circle",{cx:"12",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["circle",{cx:"18",cy:"6",r:"3"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"}],["path",{d:"M12 12v3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=["svg",a,[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v6"}],["circle",{cx:"5",cy:"18",r:"3"}],["path",{d:"M12 3v18"}],["circle",{cx:"19",cy:"6",r:"3"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=["svg",a,[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=["svg",a,[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v12"}],["circle",{cx:"19",cy:"18",r:"3"}],["path",{d:"m15 9-3-3 3-3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=["svg",a,[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 9v12"}],["path",{d:"m21 3-6 6"}],["path",{d:"m21 9-6-6"}],["path",{d:"M18 11.5V15"}],["circle",{cx:"18",cy:"18",r:"3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=["svg",a,[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v12"}],["path",{d:"m15 9-3-3 3-3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v3"}],["path",{d:"M19 15v6"}],["path",{d:"M22 18h-6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=["svg",a,[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 9v12"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v3"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=["svg",a,[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M18 6V5"}],["path",{d:"M18 11v-1"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=["svg",a,[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=["svg",a,[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=["svg",a,[["path",{d:"m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=["svg",a,[["path",{d:"M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=["svg",a,[["circle",{cx:"6",cy:"15",r:"4"}],["circle",{cx:"18",cy:"15",r:"4"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=["svg",a,[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=["svg",a,[["path",{d:"M12 13V2l8 4-8 4"}],["path",{d:"M20.55 10.23A9 9 0 1 1 8 4.94"}],["path",{d:"M8 10a5 5 0 1 0 8.9 2.02"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=["svg",a,[["path",{d:"M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4"}],["path",{d:"M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"}],["path",{d:"M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5"}],["path",{d:"M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"}],["path",{d:"M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=["svg",a,[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=["svg",a,[["path",{d:"M22 5V2l-5.89 5.89"}],["circle",{cx:"16.6",cy:"15.89",r:"3"}],["circle",{cx:"8.11",cy:"7.4",r:"3"}],["circle",{cx:"12.35",cy:"11.65",r:"3"}],["circle",{cx:"13.91",cy:"5.85",r:"3"}],["circle",{cx:"18.15",cy:"10.09",r:"3"}],["circle",{cx:"6.56",cy:"13.2",r:"3"}],["circle",{cx:"10.8",cy:"17.44",r:"3"}],["circle",{cx:"5",cy:"19",r:"3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 12h18"}],["path",{d:"M12 3v18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}],["path",{d:"M9 3v18"}],["path",{d:"M15 3v18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=["svg",a,[["circle",{cx:"12",cy:"9",r:"1"}],["circle",{cx:"19",cy:"9",r:"1"}],["circle",{cx:"5",cy:"9",r:"1"}],["circle",{cx:"12",cy:"15",r:"1"}],["circle",{cx:"19",cy:"15",r:"1"}],["circle",{cx:"5",cy:"15",r:"1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=["svg",a,[["circle",{cx:"9",cy:"12",r:"1"}],["circle",{cx:"9",cy:"5",r:"1"}],["circle",{cx:"9",cy:"19",r:"1"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"15",cy:"5",r:"1"}],["circle",{cx:"15",cy:"19",r:"1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=["svg",a,[["circle",{cx:"12",cy:"5",r:"1"}],["circle",{cx:"19",cy:"5",r:"1"}],["circle",{cx:"5",cy:"5",r:"1"}],["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}],["circle",{cx:"12",cy:"19",r:"1"}],["circle",{cx:"19",cy:"19",r:"1"}],["circle",{cx:"5",cy:"19",r:"1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=["svg",a,[["path",{d:"M3 7V5c0-1.1.9-2 2-2h2"}],["path",{d:"M17 3h2c1.1 0 2 .9 2 2v2"}],["path",{d:"M21 17v2c0 1.1-.9 2-2 2h-2"}],["path",{d:"M7 21H5c-1.1 0-2-.9-2-2v-2"}],["rect",{width:"7",height:"5",x:"7",y:"7",rx:"1"}],["rect",{width:"7",height:"5",x:"10",y:"12",rx:"1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=["svg",a,[["path",{d:"m20 7 1.7-1.7a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0L17 4v3Z"}],["path",{d:"m17 7-5.1 5.1"}],["circle",{cx:"11.5",cy:"12.5",r:".5"}],["path",{d:"M6 12a2 2 0 0 0 1.8-1.2l.4-.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4"}],["path",{d:"m6 16 2 2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=["svg",a,[["path",{d:"m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"}],["path",{d:"M17.64 15 22 10.64"}],["path",{d:"m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=["svg",a,[["path",{d:"M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4"}],["path",{d:"M14 11V9a2 2 0 1 0-4 0v2"}],["path",{d:"M10 10.5V5a2 2 0 1 0-4 0v9"}],["path",{d:"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=["svg",a,[["path",{d:"M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=["svg",a,[["path",{d:"M12 2v8"}],["path",{d:"m16 6-4 4-4-4"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 18h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=["svg",a,[["path",{d:"m16 6-4-4-4 4"}],["path",{d:"M12 2v8"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 18h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=["svg",a,[["line",{x1:"22",x2:"2",y1:"12",y2:"12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=["svg",a,[["path",{d:"M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"}],["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6h0"}],["path",{d:"M14 6h0a6 6 0 0 1 6 6v3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=["svg",a,[["line",{x1:"4",x2:"20",y1:"9",y2:"9"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=["svg",a,[["path",{d:"m5.2 6.2 1.4 1.4"}],["path",{d:"M2 13h2"}],["path",{d:"M20 13h2"}],["path",{d:"m17.4 7.6 1.4-1.4"}],["path",{d:"M22 17H2"}],["path",{d:"M22 21H2"}],["path",{d:"M16 13a4 4 0 0 0-8 0"}],["path",{d:"M12 5V2.5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=["svg",a,[["path",{d:"M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z"}],["path",{d:"M7.5 12h9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=["svg",a,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"m17 12 3-2v8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=["svg",a,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=["svg",a,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2"}],["path",{d:"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=["svg",a,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M17 10v4h4"}],["path",{d:"M21 10v8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=["svg",a,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M17 13v-3h4"}],["path",{d:"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=["svg",a,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["circle",{cx:"19",cy:"16",r:"2"}],["path",{d:"M20 10c-2 2-3 3.5-3 6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=["svg",a,[["path",{d:"M6 12h12"}],["path",{d:"M6 20V4"}],["path",{d:"M18 20V4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=["svg",a,[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=["svg",a,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"m12 13-1-1 2-2-3-3 2-2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=["svg",a,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"}],["path",{d:"m18 15-2-2"}],["path",{d:"m15 18-2-2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=["svg",a,[["line",{x1:"2",y1:"2",x2:"22",y2:"22"}],["path",{d:"M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35"}],["path",{d:"M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=["svg",a,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=["svg",a,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=["svg",a,[["path",{d:"m3 15 5.12-5.12A3 3 0 0 1 10.24 9H13a2 2 0 1 1 0 4h-2.5m4-.68 4.17-4.89a1.88 1.88 0 0 1 2.92 2.36l-4.2 5.94A3 3 0 0 1 14.96 17H9.83a2 2 0 0 0-1.42.59L7 19"}],["path",{d:"m2 14 6 6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=["svg",a,[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=["svg",a,[["path",{d:"m9 11-6 6v3h9l3-3"}],["path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=["svg",a,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=["svg",a,[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}],["polyline",{points:"9 22 9 12 15 12 15 22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=["svg",a,[["path",{d:"M17.5 5.5C19 7 20.5 9 21 11c-1.323.265-2.646.39-4.118.226"}],["path",{d:"M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5"}],["path",{d:"M17.5 17.5c-2.5 0-4 0-6-1"}],["path",{d:"M20 11.5c1 1.5 2 3.5 2 4.5"}],["path",{d:"M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5"}],["path",{d:"M22 22c-2 0-3.5-.5-5.5-1.5"}],["path",{d:"M4.783 4.782C1.073 8.492 1 14.5 5 18c1-1 2-4.5 1.5-6.5 1.5 1 4 1 5.5.5M8.227 2.57C11.578 1.335 15.453 2.089 18 5c-.88.88-3.7 1.761-5.726 1.618"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=["svg",a,[["path",{d:"M17.5 5.5C19 7 20.5 9 21 11c-2.5.5-5 .5-8.5-1"}],["path",{d:"M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5"}],["path",{d:"M16.5 11.5c1 2 1 3.5 1 6-2.5 0-4 0-6-1"}],["path",{d:"M20 11.5c1 1.5 2 3.5 2 4.5-1.5.5-3 0-4.5-.5"}],["path",{d:"M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5"}],["path",{d:"M20.5 16.5c1 2 1.5 3.5 1.5 5.5-2 0-3.5-.5-5.5-1.5"}],["path",{d:"M4.783 4.782C8.493 1.072 14.5 1 18 5c-1 1-4.5 2-6.5 1.5 1 1.5 1 4 .5 5.5-1.5.5-4 .5-5.5-.5C7 13.5 6 17 5 18c-4-3.5-3.927-9.508-.217-13.218Z"}],["path",{d:"M4.5 4.5 3 3c-.184-.185-.184-.816 0-1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=["svg",a,[["path",{d:"M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"}],["path",{d:"m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16"}],["path",{d:"M8 7h.01"}],["path",{d:"M16 7h.01"}],["path",{d:"M12 7h.01"}],["path",{d:"M12 11h.01"}],["path",{d:"M16 11h.01"}],["path",{d:"M8 11h.01"}],["path",{d:"M10 22v-6.5m4 0V22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=["svg",a,[["path",{d:"M5 22h14"}],["path",{d:"M5 2h14"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=["svg",a,[["path",{d:"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6Zm-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"}],["path",{d:"M12.14 11a3.5 3.5 0 1 1 6.71 0"}],["path",{d:"M15.5 6.5a3.5 3.5 0 1 0-7 0"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=["svg",a,[["path",{d:"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"}],["path",{d:"M17 7A5 5 0 0 0 7 7"}],["path",{d:"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=["svg",a,[["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10.8"}],["path",{d:"m21 15-3.1-3.1a2 2 0 0 0-2.814.014L6 21"}],["path",{d:"m14 19.5 3 3v-6"}],["path",{d:"m17 22.5 3-3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=["svg",a,[["path",{d:"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=["svg",a,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=["svg",a,[["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5"}],["line",{x1:"19",x2:"19",y1:"2",y2:"8"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=["svg",a,[["path",{d:"M12 3v12"}],["path",{d:"m8 11 4 4 4-4"}],["path",{d:"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=["svg",a,[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=["svg",a,[["polyline",{points:"3 8 7 12 3 16"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=["svg",a,[["path",{d:"M6 3h12"}],["path",{d:"M6 8h12"}],["path",{d:"m6 13 8.5 8"}],["path",{d:"M6 13h3"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=["svg",a,[["path",{d:"M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7h.01"}],["path",{d:"M17 7h.01"}],["path",{d:"M7 17h.01"}],["path",{d:"M17 17h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=["svg",a,[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=["svg",a,[["line",{x1:"19",x2:"10",y1:"4",y2:"4"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=["svg",a,[["path",{d:"M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8"}],["polyline",{points:"16 14 20 18 16 22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=["svg",a,[["path",{d:"M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4"}],["polyline",{points:"8 22 4 18 8 14"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=["svg",a,[["path",{d:"M12 9.5V21m0-11.5L6 3m6 6.5L18 3"}],["path",{d:"M6 15h12"}],["path",{d:"M6 11h12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=["svg",a,[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"}],["path",{d:"M6 15v-2"}],["path",{d:"M12 15V9"}],["circle",{cx:"12",cy:"6",r:"3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=["svg",a,[["path",{d:"M8 7v7"}],["path",{d:"M12 7v4"}],["path",{d:"M16 7v9"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M9 3h1"}],["path",{d:"M14 3h1"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 9v1"}],["path",{d:"M21 14v1"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M14 21h1"}],["path",{d:"M9 21h1"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M3 14v1"}],["path",{d:"M3 9v1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 7v7"}],["path",{d:"M12 7v4"}],["path",{d:"M16 7v9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=["svg",a,[["path",{d:"M6 5v11"}],["path",{d:"M12 5v6"}],["path",{d:"M18 5v14"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=["svg",a,[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"}],["circle",{cx:"16.5",cy:"7.5",r:".5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=["svg",a,[["path",{d:"M12.4 2.7c.9-.9 2.5-.9 3.4 0l5.5 5.5c.9.9.9 2.5 0 3.4l-3.7 3.7c-.9.9-2.5.9-3.4 0L8.7 9.8c-.9-.9-.9-2.5 0-3.4Z"}],["path",{d:"m14 7 3 3"}],["path",{d:"M9.4 10.6 2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=["svg",a,[["circle",{cx:"7.5",cy:"15.5",r:"5.5"}],["path",{d:"m21 2-9.6 9.6"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=["svg",a,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M6 8h4"}],["path",{d:"M14 8h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"M2 12h20"}],["path",{d:"M6 12v4"}],["path",{d:"M10 12v4"}],["path",{d:"M14 12v4"}],["path",{d:"M18 12v4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=["svg",a,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",ry:"2"}],["path",{d:"M6 8h.001"}],["path",{d:"M10 8h.001"}],["path",{d:"M14 8h.001"}],["path",{d:"M18 8h.001"}],["path",{d:"M8 12h.001"}],["path",{d:"M12 12h.001"}],["path",{d:"M16 12h.001"}],["path",{d:"M7 16h10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=["svg",a,[["path",{d:"M12 2v5"}],["path",{d:"M6 7h12l4 9H2l4-9Z"}],["path",{d:"M9.17 16a3 3 0 1 0 5.66 0"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=["svg",a,[["path",{d:"m14 5-3 3 2 7 8-8-7-2Z"}],["path",{d:"m14 5-3 3-3-3 3-3 3 3Z"}],["path",{d:"M9.5 6.5 4 12l3 6"}],["path",{d:"M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=["svg",a,[["path",{d:"M9 2h6l3 7H6l3-7Z"}],["path",{d:"M12 9v13"}],["path",{d:"M9 22h6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=["svg",a,[["path",{d:"M11 13h6l3 7H8l3-7Z"}],["path",{d:"M14 13V8a2 2 0 0 0-2-2H8"}],["path",{d:"M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=["svg",a,[["path",{d:"M11 4h6l3 7H8l3-7Z"}],["path",{d:"M14 11v5a2 2 0 0 1-2 2H8"}],["path",{d:"M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=["svg",a,[["path",{d:"M8 2h8l4 10H4L8 2Z"}],["path",{d:"M12 12v6"}],["path",{d:"M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=["svg",a,[["path",{d:"m12 8 6-3-6-3v10"}],["path",{d:"m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"}],["path",{d:"m6.49 12.85 11.02 6.3"}],["path",{d:"M17.51 12.85 6.5 19.15"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=["svg",a,[["line",{x1:"3",x2:"21",y1:"22",y2:"22"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11"}],["polygon",{points:"12 2 20 7 4 7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=["svg",a,[["path",{d:"m5 8 6 6"}],["path",{d:"m4 14 6-6 2-3"}],["path",{d:"M2 5h12"}],["path",{d:"M7 2h1"}],["path",{d:"m22 22-5-10-5 10"}],["path",{d:"M14 18h6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=["svg",a,[["rect",{width:"18",height:"12",x:"3",y:"4",rx:"2",ry:"2"}],["line",{x1:"2",x2:"22",y1:"20",y2:"20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=["svg",a,[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=["svg",a,[["path",{d:"M7 22a5 5 0 0 1-2-4"}],["path",{d:"M7 16.93c.96.43 1.96.74 2.99.91"}],["path",{d:"M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}],["path",{d:"M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14v0z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=["svg",a,[["path",{d:"M7 22a5 5 0 0 1-2-4"}],["path",{d:"M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=["svg",a,[["path",{d:"m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12"}],["path",{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=["svg",a,[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"}],["path",{d:"m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"}],["path",{d:"m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=["svg",a,[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=["svg",a,[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=["svg",a,[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=["svg",a,[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=["svg",a,[["rect",{width:"7",height:"18",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=["svg",a,[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=["svg",a,[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=["svg",a,[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=["svg",a,[["path",{d:"M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"}],["path",{d:"M2 22 17 7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=["svg",a,[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1"}],["path",{d:"M7 3v18"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7v10"}],["path",{d:"M11 7v10"}],["path",{d:"m15 7 2 10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=["svg",a,[["path",{d:"m16 6 4 14"}],["path",{d:"M12 6v14"}],["path",{d:"M8 8v12"}],["path",{d:"M4 4v16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m4.93 4.93 4.24 4.24"}],["path",{d:"m14.83 9.17 4.24-4.24"}],["path",{d:"m14.83 14.83 4.24 4.24"}],["path",{d:"m9.17 14.83-4.24 4.24"}],["circle",{cx:"12",cy:"12",r:"4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=["svg",a,[["path",{d:"M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2"}],["path",{d:"M6 12h4"}],["path",{d:"M14 12h2v8"}],["path",{d:"M6 20h4"}],["path",{d:"M14 20h4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=["svg",a,[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5"}],["path",{d:"M9 18h6"}],["path",{d:"M10 22h4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=["svg",a,[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"}],["path",{d:"M9 18h6"}],["path",{d:"M10 22h4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=["svg",a,[["path",{d:"M3 3v18h18"}],["path",{d:"m19 9-5 5-4-4-3 3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=["svg",a,[["path",{d:"M9 17H7A5 5 0 0 1 7 7"}],["path",{d:"M15 7h2a5 5 0 0 1 4 8"}],["line",{x1:"8",x2:"12",y1:"12",y2:"12"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=["svg",a,[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=["svg",a,[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=["svg",a,[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=["svg",a,[["path",{d:"m3 17 2 2 4-4"}],["path",{d:"m3 7 2 2 4-4"}],["path",{d:"M13 6h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=["svg",a,[["path",{d:"M16 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M10 18H3"}],["path",{d:"M21 6v10a2 2 0 0 1-2 2h-5"}],["path",{d:"m16 16-2 2 2 2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=["svg",a,[["path",{d:"M3 6h18"}],["path",{d:"M7 12h10"}],["path",{d:"M10 18h4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=["svg",a,[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"M21 12h-6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=["svg",a,[["path",{d:"M21 15V6"}],["path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"}],["path",{d:"M12 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M12 18H3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=["svg",a,[["line",{x1:"10",x2:"21",y1:"6",y2:"6"}],["line",{x1:"10",x2:"21",y1:"12",y2:"12"}],["line",{x1:"10",x2:"21",y1:"18",y2:"18"}],["path",{d:"M4 6h1v4"}],["path",{d:"M4 10h2"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=["svg",a,[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"M18 9v6"}],["path",{d:"M21 12h-6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=["svg",a,[["path",{d:"M21 6H3"}],["path",{d:"M7 12H3"}],["path",{d:"M7 18H3"}],["path",{d:"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"}],["path",{d:"M11 10v4h4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=["svg",a,[["path",{d:"M16 12H3"}],["path",{d:"M16 18H3"}],["path",{d:"M10 6H3"}],["path",{d:"M21 18V8a2 2 0 0 0-2-2h-5"}],["path",{d:"m16 8-2-2 2-2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=["svg",a,[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1"}],["path",{d:"m3 17 2 2 4-4"}],["path",{d:"M13 6h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=["svg",a,[["path",{d:"M21 12h-8"}],["path",{d:"M21 6H8"}],["path",{d:"M21 18h-8"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=["svg",a,[["path",{d:"M12 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M12 18H3"}],["path",{d:"m16 12 5 3-5 3v-6Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=["svg",a,[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"m19 10-4 4"}],["path",{d:"m15 10 4 4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=["svg",a,[["line",{x1:"8",x2:"21",y1:"6",y2:"6"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=["svg",a,[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=["svg",a,[["line",{x1:"12",x2:"12",y1:"2",y2:"6"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=["svg",a,[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["circle",{cx:"12",cy:"12",r:"7"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=["svg",a,[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["path",{d:"M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11"}],["path",{d:"M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=["svg",a,[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["circle",{cx:"12",cy:"12",r:"7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=["svg",a,[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=["svg",a,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=["svg",a,[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}],["polyline",{points:"10 17 15 12 10 7"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=["svg",a,[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}],["polyline",{points:"16 17 21 12 16 7"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=["svg",a,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}],["path",{d:"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=["svg",a,[["path",{d:"M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0"}],["path",{d:"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"}],["path",{d:"M10 20h4"}],["circle",{cx:"16",cy:"20",r:"2"}],["circle",{cx:"8",cy:"20",r:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 16V8l4 4 4-4v8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=["svg",a,[["path",{d:"m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15"}],["path",{d:"m5 8 4 4"}],["path",{d:"m12 15 4 4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=["svg",a,[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"m16 19 2 2 4-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=["svg",a,[["path",{d:"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M16 19h6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=["svg",a,[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=["svg",a,[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M19 16v6"}],["path",{d:"M16 19h6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=["svg",a,[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"}],["path",{d:"M20 22v.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=["svg",a,[["path",{d:"M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m22 22-1.5-1.5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=["svg",a,[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M20 14v4"}],["path",{d:"M20 22v.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=["svg",a,[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"m17 17 4 4"}],["path",{d:"m21 17-4 4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=["svg",a,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=["svg",a,[["path",{d:"M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"}],["polyline",{points:"15,9 18,9 18,11"}],["path",{d:"M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0"}],["line",{x1:"6",x2:"7",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=["svg",a,[["rect",{width:"16",height:"13",x:"6",y:"4",rx:"2"}],["path",{d:"m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"}],["path",{d:"M2 8v11c0 1.1.9 2 2 2h14"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=["svg",a,[["path",{d:"M5.43 5.43A8.06 8.06 0 0 0 4 10c0 6 8 12 8 12a29.94 29.94 0 0 0 5-5"}],["path",{d:"M19.18 13.52A8.66 8.66 0 0 0 20 10a8 8 0 0 0-8-8 7.88 7.88 0 0 0-3.52.82"}],["path",{d:"M9.13 9.13A2.78 2.78 0 0 0 9 10a3 3 0 0 0 3 3 2.78 2.78 0 0 0 .87-.13"}],["path",{d:"M14.9 9.25a3 3 0 0 0-2.15-2.16"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=["svg",a,[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"}],["circle",{cx:"12",cy:"10",r:"3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=["svg",a,[["path",{d:"M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0"}],["circle",{cx:"12",cy:"8",r:"2"}],["path",{d:"M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=["svg",a,[["polygon",{points:"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"}],["line",{x1:"9",x2:"9",y1:"3",y2:"18"}],["line",{x1:"15",x2:"15",y1:"6",y2:"21"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=["svg",a,[["path",{d:"M8 22h8"}],["path",{d:"M12 11v11"}],["path",{d:"m19 3-7 8-7-8Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=["svg",a,[["polyline",{points:"15 3 21 3 21 9"}],["polyline",{points:"9 21 3 21 3 15"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=["svg",a,[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=["svg",a,[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"}],["path",{d:"M11 12 5.12 2.2"}],["path",{d:"m13 12 5.88-9.8"}],["path",{d:"M8 7h8"}],["circle",{cx:"12",cy:"17",r:"5"}],["path",{d:"M12 18v-2h-.5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=["svg",a,[["path",{d:"M9.26 9.26 3 11v3l14.14 3.14"}],["path",{d:"M21 15.34V6l-7.31 2.03"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=["svg",a,[["path",{d:"m3 11 18-5v12L3 14v-3z"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"8",x2:"16",y1:"15",y2:"15"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=["svg",a,[["path",{d:"M6 19v-3"}],["path",{d:"M10 19v-3"}],["path",{d:"M14 19v-3"}],["path",{d:"M18 19v-3"}],["path",{d:"M8 11V9"}],["path",{d:"M16 11V9"}],["path",{d:"M12 11V9"}],["path",{d:"M2 15h20"}],["path",{d:"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 8h10"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=["svg",a,[["line",{x1:"4",x2:"20",y1:"12",y2:"12"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=["svg",a,[["path",{d:"m8 6 4-4 4 4"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"}],["path",{d:"m20 22-5-5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=["svg",a,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"m10 10-2 2 2 2"}],["path",{d:"m14 10 2 2-2 2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=["svg",a,[["path",{d:"M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1"}],["path",{d:"M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1"}],["path",{d:"M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5"}],["path",{d:"M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1"}],["path",{d:"M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1"}],["path",{d:"M3.5 17.5 2 22l4.5-1.5"}],["path",{d:"M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5"}],["path",{d:"M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=["svg",a,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=["svg",a,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=["svg",a,[["path",{d:"M20.5 14.9A9 9 0 0 0 9.1 3.5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=["svg",a,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=["svg",a,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=["svg",a,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"m10 15-3-3 3-3"}],["path",{d:"M7 12h7a2 2 0 0 1 2 2v1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=["svg",a,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=["svg",a,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=["svg",a,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=["svg",a,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"m10 8-2 2 2 2"}],["path",{d:"m14 8 2 2-2 2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=["svg",a,[["path",{d:"M3 6V5c0-1.1.9-2 2-2h2"}],["path",{d:"M11 3h3"}],["path",{d:"M18 3h1c1.1 0 2 .9 2 2"}],["path",{d:"M21 9v2"}],["path",{d:"M21 15c0 1.1-.9 2-2 2h-1"}],["path",{d:"M14 17h-3"}],["path",{d:"m7 17-4 4v-5"}],["path",{d:"M3 12v-2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=["svg",a,[["path",{d:"m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"}],["path",{d:"M9 10h6"}],["path",{d:"M12 7v6"}],["path",{d:"M9 17h6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=["svg",a,[["path",{d:"M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7"}],["circle",{cx:"18",cy:"6",r:"3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=["svg",a,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=["svg",a,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M16 10h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=["svg",a,[["path",{d:"M21 15V5a2 2 0 0 0-2-2H9"}],["path",{d:"m2 2 20 20"}],["path",{d:"M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=["svg",a,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M12 7v6"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=["svg",a,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M8 12a2 2 0 0 0 2-2V8H8"}],["path",{d:"M14 12a2 2 0 0 0 2-2V8h-2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=["svg",a,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"m10 7-3 3 3 3"}],["path",{d:"M17 13v-1a2 2 0 0 0-2-2H7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=["svg",a,[["path",{d:"M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7"}],["path",{d:"M16 3h5v5"}],["path",{d:"m16 8 5-5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=["svg",a,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M13 8H7"}],["path",{d:"M17 12H7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=["svg",a,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M12 7v2"}],["path",{d:"M12 13h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=["svg",a,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"m14.5 7.5-5 5"}],["path",{d:"m9.5 7.5 5 5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=["svg",a,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=["svg",a,[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=["svg",a,[["path",{d:"m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"}],["circle",{cx:"17",cy:"7",r:"5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=["svg",a,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=["svg",a,[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=["svg",a,[["path",{d:"M6 18h8"}],["path",{d:"M3 22h18"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1"}],["path",{d:"M9 14h2"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=["svg",a,[["rect",{width:"20",height:"15",x:"2",y:"4",rx:"2"}],["rect",{width:"8",height:"7",x:"6",y:"8",rx:"1"}],["path",{d:"M18 8v7"}],["path",{d:"M6 19v2"}],["path",{d:"M18 19v2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=["svg",a,[["path",{d:"M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"}],["path",{d:"M12 13v8"}],["path",{d:"M12 3v3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=["svg",a,[["path",{d:"M8 2h8"}],["path",{d:"M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=["svg",a,[["path",{d:"M8 2h8"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=["svg",a,[["polyline",{points:"4 14 10 14 10 20"}],["polyline",{points:"20 10 14 10 14 4"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=["svg",a,[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=["svg",a,[["path",{d:"M5 12h14"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=["svg",a,[["path",{d:"m9 10 2 2 4-4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=["svg",a,[["circle",{cx:"19",cy:"6",r:"3"}],["path",{d:"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=["svg",a,[["path",{d:"M12 13V7"}],["path",{d:"m15 10-3 3-3-3"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=["svg",a,[["path",{d:"M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2"}],["path",{d:"M22 15V5a2 2 0 0 0-2-2H9"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=["svg",a,[["path",{d:"M10 13V7"}],["path",{d:"M14 13V7"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=["svg",a,[["path",{d:"m10 7 5 3-5 3Z"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=["svg",a,[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{d:"M10 19v-3.96 3.15"}],["path",{d:"M7 19h5"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=["svg",a,[["path",{d:"M5.5 20H8"}],["path",{d:"M17 9h.01"}],["rect",{width:"10",height:"16",x:"12",y:"4",rx:"2"}],["path",{d:"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4"}],["circle",{cx:"17",cy:"15",r:"1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=["svg",a,[["rect",{x:"9",y:"7",width:"6",height:"6"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=["svg",a,[["path",{d:"m9 10 3-3 3 3"}],["path",{d:"M12 13V7"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=["svg",a,[["path",{d:"m14.5 12.5-5-5"}],["path",{d:"m9.5 12.5 5-5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=["svg",a,[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=["svg",a,[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}],["path",{d:"M19 3v4"}],["path",{d:"M21 5h-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=["svg",a,[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=["svg",a,[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=["svg",a,[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"12",cy:"5",r:"1"}],["circle",{cx:"12",cy:"19",r:"1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=["svg",a,[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z"}],["path",{d:"M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=["svg",a,[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=["svg",a,[["path",{d:"m4 4 7.07 17 2.51-7.39L21 11.07z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=["svg",a,[["path",{d:"m9 9 5 12 1.8-5.2L21 14Z"}],["path",{d:"M7.2 2.2 8 5.1"}],["path",{d:"m5.1 8-2.9-.8"}],["path",{d:"M14 4.1 12 6"}],["path",{d:"m6 12-1.9 2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=["svg",a,[["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"m12 12 4 10 1.7-4.3L22 16Z"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h2"}],["path",{d:"M14 3h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v2"}],["path",{d:"M3 14v1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=["svg",a,[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}],["path",{d:"m12 12 4 10 1.7-4.3L22 16Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=["svg",a,[["path",{d:"m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"}],["path",{d:"m13 13 6 6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=["svg",a,[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7"}],["path",{d:"M12 6v4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=["svg",a,[["path",{d:"M5 3v16h16"}],["path",{d:"m5 19 6-6"}],["path",{d:"m2 6 3-3 3 3"}],["path",{d:"m18 16 3 3-3 3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=["svg",a,[["polyline",{points:"5 11 5 5 11 5"}],["polyline",{points:"19 13 19 19 13 19"}],["line",{x1:"5",x2:"19",y1:"5",y2:"19"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=["svg",a,[["polyline",{points:"13 5 19 5 19 11"}],["polyline",{points:"11 19 5 19 5 13"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=["svg",a,[["path",{d:"M11 19H5V13"}],["path",{d:"M19 5L5 19"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=["svg",a,[["path",{d:"M19 13V19H13"}],["path",{d:"M5 5L19 19"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=["svg",a,[["path",{d:"M8 18L12 22L16 18"}],["path",{d:"M12 2V22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=["svg",a,[["polyline",{points:"18 8 22 12 18 16"}],["polyline",{points:"6 8 2 12 6 16"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=["svg",a,[["path",{d:"M6 8L2 12L6 16"}],["path",{d:"M2 12H22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=["svg",a,[["path",{d:"M18 8L22 12L18 16"}],["path",{d:"M2 12H22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=["svg",a,[["path",{d:"M5 11V5H11"}],["path",{d:"M5 5L19 19"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=["svg",a,[["path",{d:"M13 5H19V11"}],["path",{d:"M19 5L5 19"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=["svg",a,[["path",{d:"M8 6L12 2L16 6"}],["path",{d:"M12 2V22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=["svg",a,[["polyline",{points:"8 18 12 22 16 18"}],["polyline",{points:"8 6 12 2 16 6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=["svg",a,[["polyline",{points:"5 9 2 12 5 15"}],["polyline",{points:"9 5 12 2 15 5"}],["polyline",{points:"15 19 12 22 9 19"}],["polyline",{points:"19 9 22 12 19 15"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=["svg",a,[["circle",{cx:"8",cy:"18",r:"4"}],["path",{d:"M12 18V2l7 4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=["svg",a,[["circle",{cx:"12",cy:"18",r:"4"}],["path",{d:"M16 18V2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=["svg",a,[["path",{d:"M9 18V5l12-2v13"}],["path",{d:"m9 9 12-2"}],["circle",{cx:"6",cy:"18",r:"3"}],["circle",{cx:"18",cy:"16",r:"3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=["svg",a,[["path",{d:"M9 18V5l12-2v13"}],["circle",{cx:"6",cy:"18",r:"3"}],["circle",{cx:"18",cy:"16",r:"3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=["svg",a,[["path",{d:"M9.31 9.31 5 21l7-4 7 4-1.17-3.17"}],["path",{d:"M14.53 8.88 12 2l-1.17 3.17"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=["svg",a,[["polygon",{points:"12 2 19 21 12 17 5 21 12 2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=["svg",a,[["path",{d:"M8.43 8.43 3 11l8 2 2 8 2.57-5.43"}],["path",{d:"M17.39 11.73 22 2l-9.73 4.61"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=["svg",a,[["polygon",{points:"3 11 22 2 13 21 11 13 3 11"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=["svg",a,[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{d:"M12 12V8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=["svg",a,[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"}],["path",{d:"M18 14h-8"}],["path",{d:"M15 18h-5"}],["path",{d:"M10 6h8v4h-8V6Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=["svg",a,[["path",{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36"}],["path",{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58"}],["path",{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8"}],["path",{d:"M16.37 2a20.16 20.16 0 0 1 0 20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=["svg",a,[["path",{d:"M12 4V2"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939"}],["path",{d:"M19 10v3.343"}],["path",{d:"M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=["svg",a,[["path",{d:"M12 4V2"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4"}],["path",{d:"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=["svg",a,[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=["svg",a,[["path",{d:"M3 3h6l6 18h6"}],["path",{d:"M14 3h7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=["svg",a,[["circle",{cx:"12",cy:"12",r:"3"}],["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=["svg",a,[["polyline",{points:"7 8 3 12 7 16"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=["svg",a,[["path",{d:"M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"}],["path",{d:"m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"}],["path",{d:"M12 3v6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=["svg",a,[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=["svg",a,[["path",{d:"M16 16h6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=["svg",a,[["path",{d:"M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z"}],["path",{d:"m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z"}],["line",{x1:"12",x2:"12",y1:"22",y2:"13"}],["path",{d:"M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=["svg",a,[["path",{d:"M16 16h6"}],["path",{d:"M19 13v6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=["svg",a,[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5"}],["path",{d:"M20.27 17.27 22 19"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=["svg",a,[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}],["path",{d:"m17 13 5 5m-5 0 5-5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=["svg",a,[["path",{d:"m7.5 4.27 9 5.15"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{d:"m3.3 7 8.7 5 8.7-5"}],["path",{d:"M12 22V12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=["svg",a,[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"}],["path",{d:"m5 2 5 5"}],["path",{d:"M2 13h15"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=["svg",a,[["path",{d:"M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z"}],["path",{d:"M6 12V2h12v10"}],["path",{d:"M14 2v4"}],["path",{d:"M10 2v2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=["svg",a,[["path",{d:"M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z"}],["path",{d:"M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"}],["path",{d:"M14.5 17.5 4.5 15"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=["svg",a,[["circle",{cx:"13.5",cy:"6.5",r:".5"}],["circle",{cx:"17.5",cy:"10.5",r:".5"}],["circle",{cx:"8.5",cy:"7.5",r:".5"}],["circle",{cx:"6.5",cy:"12.5",r:".5"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=["svg",a,[["path",{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"}],["path",{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"}],["path",{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z"}],["path",{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}],["path",{d:"m15 8-3 3-3-3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M14 15h1"}],["path",{d:"M19 15h2"}],["path",{d:"M3 15h2"}],["path",{d:"M9 15h1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}],["path",{d:"m9 10 3-3 3 3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m16 15-3-3 3-3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 14v1"}],["path",{d:"M9 19v2"}],["path",{d:"M9 3v2"}],["path",{d:"M9 9v1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m14 9 3 3-3 3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}],["path",{d:"m8 9 3 3-3 3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 14v1"}],["path",{d:"M15 19v2"}],["path",{d:"M15 3v2"}],["path",{d:"M15 9v1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}],["path",{d:"m10 15-3-3 3-3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"m9 16 3-3 3 3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M14 9h1"}],["path",{d:"M19 9h2"}],["path",{d:"M3 9h2"}],["path",{d:"M9 9h1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"m15 14-3 3-3-3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"M9 15h12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h12"}],["path",{d:"M15 3v18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M9 21V9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=["svg",a,[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=["svg",a,[["path",{d:"M8 21s-4-3-4-9 4-9 4-9"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m5 5 14 14"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2"}],["path",{d:"M9 17v-2.34"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=["svg",a,[["path",{d:"M9 9a3 3 0 1 1 6 0"}],["path",{d:"M12 12v3"}],["path",{d:"M11 15h2"}],["path",{d:"M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3"}],["path",{d:"M12 19v3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=["svg",a,[["path",{d:"M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41"}],["path",{d:"M3 8.7V19a2 2 0 0 0 2 2h10.3"}],["path",{d:"m2 2 20 20"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2"}],["path",{d:"M9 17v-2.3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=["svg",a,[["path",{d:"M5.8 11.3 2 22l10.7-3.79"}],["path",{d:"M4 3h.01"}],["path",{d:"M22 8h.01"}],["path",{d:"M15 2h.01"}],["path",{d:"M22 20h.01"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=["svg",a,[["path",{d:"M10 15V9"}],["path",{d:"M14 15V9"}],["path",{d:"M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714L7.714 2z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=["svg",a,[["rect",{width:"4",height:"16",x:"6",y:"4"}],["rect",{width:"4",height:"16",x:"14",y:"4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=["svg",a,[["circle",{cx:"11",cy:"4",r:"2"}],["circle",{cx:"18",cy:"8",r:"2"}],["circle",{cx:"20",cy:"16",r:"2"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=["svg",a,[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2"}],["path",{d:"M15 14h.01"}],["path",{d:"M9 6h6"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=["svg",a,[["path",{d:"M12 20h9"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=["svg",a,[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=["svg",a,[["path",{d:"m12 19 7-7 3 3-7 7-3-3z"}],["path",{d:"m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"}],["path",{d:"m2 2 7.586 7.586"}],["circle",{cx:"11",cy:"11",r:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=["svg",a,[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=["svg",a,[["path",{d:"M12 20h9"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"}],["path",{d:"m15 5 3 3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=["svg",a,[["path",{d:"m15 5 4 4"}],["path",{d:"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"}],["path",{d:"m8 6 2-2"}],["path",{d:"m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z"}],["path",{d:"m18 16 2-2"}],["path",{d:"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=["svg",a,[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"}],["path",{d:"m15 5 4 4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=["svg",a,[["path",{d:"M3.5 8.7c-.7.5-1 1.4-.7 2.2l2.8 8.7c.3.8 1 1.4 1.9 1.4h9.1c.9 0 1.6-.6 1.9-1.4l2.8-8.7c.3-.8 0-1.7-.7-2.2l-7.4-5.3a2.1 2.1 0 0 0-2.4 0Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=["svg",a,[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z"}],["path",{d:"M9.2 9.2h.01"}],["path",{d:"m14.5 9.5-5 5"}],["path",{d:"M14.7 14.8h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=["svg",a,[["line",{x1:"19",x2:"5",y1:"5",y2:"19"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=["svg",a,[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=["svg",a,[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=["svg",a,[["polyline",{points:"18 2 22 6 18 10"}],["line",{x1:"14",x2:"22",y1:"6",y2:"6"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=["svg",a,[["polyline",{points:"16 2 16 8 22 8"}],["line",{x1:"22",x2:"16",y1:"2",y2:"8"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=["svg",a,[["line",{x1:"22",x2:"16",y1:"2",y2:"8"}],["line",{x1:"16",x2:"22",y1:"2",y2:"8"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=["svg",a,[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=["svg",a,[["polyline",{points:"22 8 22 2 16 2"}],["line",{x1:"16",x2:"22",y1:"8",y2:"2"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=["svg",a,[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7h10"}],["path",{d:"M10 7v10"}],["path",{d:"M16 17a2 2 0 0 1-2-2V7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=["svg",a,[["line",{x1:"9",x2:"9",y1:"4",y2:"20"}],["path",{d:"M4 7c0-1.7 1.3-3 3-3h13"}],["path",{d:"M18 20c-1.7 0-3-1.3-3-3V4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=["svg",a,[["path",{d:"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8"}],["path",{d:"M2 14h20"}],["path",{d:"M6 14v4"}],["path",{d:"M10 14v4"}],["path",{d:"M14 14v4"}],["path",{d:"M18 14v4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=["svg",a,[["path",{d:"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"}],["rect",{width:"10",height:"7",x:"12",y:"13",rx:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=["svg",a,[["path",{d:"M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3"}],["rect",{width:"10",height:"7",x:"12",y:"13.5",ry:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=["svg",a,[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=["svg",a,[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1"}],["path",{d:"M16 11h0"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 12H9.5a2.5 2.5 0 0 1 0-5H17"}],["path",{d:"M12 7v10"}],["path",{d:"M16 7v10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=["svg",a,[["path",{d:"M13 4v16"}],["path",{d:"M17 4v16"}],["path",{d:"M19 4H9.5a4.5 4.5 0 0 0 0 9H13"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=["svg",a,[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"}],["path",{d:"m8.5 8.5 7 7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=["svg",a,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["line",{x1:"12",x2:"12",y1:"17",y2:"22"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12"}],["path",{d:"M15 9.34V6h1a2 2 0 0 0 0-4H7.89"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=["svg",a,[["line",{x1:"12",x2:"12",y1:"17",y2:"22"}],["path",{d:"M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=["svg",a,[["path",{d:"m2 22 1-1h3l9-9"}],["path",{d:"M3 21v-3l9-9"}],["path",{d:"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=["svg",a,[["path",{d:"M15 11h.01"}],["path",{d:"M11 15h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"m2 16 20 6-6-20A20 20 0 0 0 2 16"}],["path",{d:"M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=["svg",a,[["path",{d:"M2 22h20"}],["path",{d:"M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=["svg",a,[["path",{d:"M2 22h20"}],["path",{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=["svg",a,[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polygon",{points:"10 8 16 12 10 16 10 8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m9 8 6 4-6 4Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=["svg",a,[["polygon",{points:"5 3 19 12 5 21 5 3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=["svg",a,[["path",{d:"M9 2v6"}],["path",{d:"M15 2v6"}],["path",{d:"M12 17v5"}],["path",{d:"M5 8h14"}],["path",{d:"M6 11V8h12v3a6 6 0 1 1-12 0v0Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=["svg",a,[["path",{d:"m13 2-2 2.5h3L12 7"}],["path",{d:"M10 14v-3"}],["path",{d:"M14 14v-3"}],["path",{d:"M11 19c-1.7 0-3-1.3-3-3v-2h8v2c0 1.7-1.3 3-3 3Z"}],["path",{d:"M12 22v-3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=["svg",a,[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"}],["path",{d:"m2 22 3-3"}],["path",{d:"M7.5 13.5 10 11"}],["path",{d:"M10.5 16.5 13 14"}],["path",{d:"m18 3-4 4h6l-4 4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=["svg",a,[["path",{d:"M12 22v-5"}],["path",{d:"M9 8V2"}],["path",{d:"M15 8V2"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=["svg",a,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=["svg",a,[["path",{d:"M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2"}],["path",{d:"M18 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z"}],["path",{d:"M18 11.66V22a4 4 0 0 0 4-4V6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=["svg",a,[["path",{d:"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"}],["polyline",{points:"8 10 12 14 16 10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=["svg",a,[["circle",{cx:"12",cy:"11",r:"1"}],["path",{d:"M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z"}],["path",{d:"M8 14a5 5 0 1 1 8 0"}],["path",{d:"M17 18.5a9 9 0 1 0-10 0"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=["svg",a,[["path",{d:"M10 4.5V4a2 2 0 0 0-2.41-1.957"}],["path",{d:"M13.9 8.4a2 2 0 0 0-1.26-1.295"}],["path",{d:"M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158"}],["path",{d:"m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343"}],["path",{d:"M6 6v8"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=["svg",a,[["path",{d:"M22 14a8 8 0 0 1-8 8"}],["path",{d:"M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"}],["path",{d:"M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1"}],["path",{d:"M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=["svg",a,[["path",{d:"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4"}],["path",{d:"M10 22 9 8"}],["path",{d:"m14 22 1-14"}],["path",{d:"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=["svg",a,[["path",{d:"M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z"}],["path",{d:"m22 22-5.5-5.5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=["svg",a,[["path",{d:"M18 7c0-5.333-8-5.333-8 0"}],["path",{d:"M10 7v14"}],["path",{d:"M6 21h12"}],["path",{d:"M6 13h10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 12V6"}],["path",{d:"M8 7.5A6.1 6.1 0 0 0 12 18a6 6 0 0 0 4-10.5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=["svg",a,[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68"}],["path",{d:"M12 2v4"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 7v5"}],["path",{d:"M8 9a5.14 5.14 0 0 0 4 8 4.95 4.95 0 0 0 4-8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=["svg",a,[["path",{d:"M12 2v10"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=["svg",a,[["path",{d:"M2 3h20"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"}],["path",{d:"m7 21 5-5 5 5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=["svg",a,[["polyline",{points:"6 9 6 2 18 2 18 9"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["rect",{width:"12",height:"8",x:"6",y:"14"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=["svg",a,[["path",{d:"M5 7 3 5"}],["path",{d:"M9 6V3"}],["path",{d:"m13 7 2-2"}],["circle",{cx:"9",cy:"13",r:"3"}],["path",{d:"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"}],["path",{d:"M16 16h2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=["svg",a,[["path",{d:"M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=["svg",a,[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z"}],["path",{d:"M12 2v20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=["svg",a,[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3"}],["path",{d:"M21 21v.01"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7"}],["path",{d:"M3 12h.01"}],["path",{d:"M12 3h.01"}],["path",{d:"M12 16v.01"}],["path",{d:"M16 12h1"}],["path",{d:"M21 12v.01"}],["path",{d:"M12 21v-1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=["svg",a,[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=["svg",a,[["path",{d:"M13 16a3 3 0 0 1 2.24 5"}],["path",{d:"M18 12h.01"}],["path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"}],["path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3"}],["path",{d:"M7.612 12.524a3 3 0 1 0-1.6 4.3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=["svg",a,[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34"}],["path",{d:"M4 6h.01"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67"}],["path",{d:"M12 18h.01"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"m13.41 10.59 5.66-5.66"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=["svg",a,[["path",{d:"M12 12h0.01"}],["path",{d:"M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z"}],["path",{d:"M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z"}],["path",{d:"M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=["svg",a,[["path",{d:"M5 16v2"}],["path",{d:"M19 16v2"}],["rect",{width:"20",height:"8",x:"2",y:"8",rx:"2"}],["path",{d:"M18 12h0"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=["svg",a,[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"}],["circle",{cx:"12",cy:"9",r:"2"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1"}],["path",{d:"M9.5 18h5"}],["path",{d:"m8 22 4-11 4 11"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=["svg",a,[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=["svg",a,[["path",{d:"M20.34 17.52a10 10 0 1 0-2.82 2.82"}],["circle",{cx:"19",cy:"19",r:"2"}],["path",{d:"m13.41 13.41 4.18 4.18"}],["circle",{cx:"12",cy:"12",r:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=["svg",a,[["path",{d:"M5 15h14"}],["path",{d:"M5 9h14"}],["path",{d:"m14 20-5-5 6-6-5-5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=["svg",a,[["path",{d:"M22 17a10 10 0 0 0-20 0"}],["path",{d:"M6 17a6 6 0 0 1 12 0"}],["path",{d:"M10 17a2 2 0 0 1 4 0"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=["svg",a,[["path",{d:"M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7v0c0 2.2 1.8 4 4 4"}],["path",{d:"M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3"}],["path",{d:"M13.2 18a3 3 0 0 0-2.2-5"}],["path",{d:"M13 22H4a2 2 0 0 1 0-4h12"}],["path",{d:"M16 9h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=["svg",a,[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=["svg",a,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17V7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=["svg",a,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=["svg",a,[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=["svg",a,[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"}],["path",{d:"m14 16-3 3 3 3"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=["svg",a,[["path",{d:"m15 14 5-5-5-5"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=["svg",a,[["circle",{cx:"12",cy:"17",r:"1"}],["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=["svg",a,[["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=["svg",a,[["path",{d:"M3 2v6h6"}],["path",{d:"M21 12A9 9 0 0 0 6 5.3L3 8"}],["path",{d:"M21 22v-6h-6"}],["path",{d:"M3 12a9 9 0 0 0 15 6.7l3-2.7"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=["svg",a,[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"}],["path",{d:"M16 16h5v5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=["svg",a,[["path",{d:"M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47"}],["path",{d:"M8 16H3v5"}],["path",{d:"M3 12C3 9.51 4 7.26 5.64 5.64"}],["path",{d:"m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64"}],["path",{d:"M21 12c0 1-.16 1.97-.47 2.87"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M22 22 2 2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=["svg",a,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=["svg",a,[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=["svg",a,[["path",{d:"M17 3v10"}],["path",{d:"m12.67 5.5 8.66 5"}],["path",{d:"m12.67 10.5 8.66-5"}],["path",{d:"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=["svg",a,[["path",{d:"M4 7V4h16v3"}],["path",{d:"M5 20h6"}],["path",{d:"M13 4 8 20"}],["path",{d:"m15 15 5 5"}],["path",{d:"m20 15-5 5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=["svg",a,[["path",{d:"m17 2 4 4-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{d:"m7 22-4-4 4-4"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3"}],["path",{d:"M11 10h1v4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=["svg",a,[["path",{d:"m2 9 3-3 3 3"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6"}],["path",{d:"m22 15-3 3-3-3"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=["svg",a,[["path",{d:"m17 2 4 4-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{d:"m7 22-4-4 4-4"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=["svg",a,[["path",{d:"M14 4c0-1.1.9-2 2-2"}],["path",{d:"M20 2c1.1 0 2 .9 2 2"}],["path",{d:"M22 8c0 1.1-.9 2-2 2"}],["path",{d:"M16 10c-1.1 0-2-.9-2-2"}],["path",{d:"m3 7 3 3 3-3"}],["path",{d:"M6 10V5c0-1.7 1.3-3 3-3h1"}],["rect",{width:"8",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M14 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"}],["path",{d:"M20 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=["svg",a,[["path",{d:"M14 4c0-1.1.9-2 2-2"}],["path",{d:"M20 2c1.1 0 2 .9 2 2"}],["path",{d:"M22 8c0 1.1-.9 2-2 2"}],["path",{d:"M16 10c-1.1 0-2-.9-2-2"}],["path",{d:"m3 7 3 3 3-3"}],["path",{d:"M6 10V5c0-1.7 1.3-3 3-3h1"}],["rect",{width:"8",height:"8",x:"2",y:"14",rx:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=["svg",a,[["polyline",{points:"7 17 2 12 7 7"}],["polyline",{points:"12 17 7 12 12 7"}],["path",{d:"M22 18v-2a4 4 0 0 0-4-4H7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=["svg",a,[["polyline",{points:"9 17 4 12 9 7"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=["svg",a,[["polygon",{points:"11 19 2 12 11 5 11 19"}],["polygon",{points:"22 19 13 12 22 5 22 19"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=["svg",a,[["path",{d:"M17.75 9.01c-.52 2.08-1.83 3.64-3.18 5.49l-2.6 3.54-2.97 4-3.5-2.54 3.85-4.97c-1.86-2.61-2.8-3.77-3.16-5.44"}],["path",{d:"M17.75 9.01A7 7 0 0 0 6.2 9.1C6.06 8.5 6 7.82 6 7c0-3.5 2.83-5 5.98-5C15.24 2 18 3.5 18 7c0 .73-.09 1.4-.25 2.01Z"}],["path",{d:"m9.35 14.53 2.64-3.31"}],["path",{d:"m11.97 18.04 2.99 4 3.54-2.54-3.93-5"}],["path",{d:"M14 8c0 1-1 2-2.01 3.22C11 10 10 9 10 8a2 2 0 1 1 4 0"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=["svg",a,[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=["svg",a,[["polyline",{points:"3.5 2 6.5 12.5 18 12.5"}],["line",{x1:"9.5",x2:"5.5",y1:"12.5",y2:"20"}],["line",{x1:"15",x2:"18.5",y1:"12.5",y2:"20"}],["path",{d:"M2.75 18a13 13 0 0 0 18.5 0"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=["svg",a,[["path",{d:"M6 19V5"}],["path",{d:"M10 19V6.8"}],["path",{d:"M14 19v-7.8"}],["path",{d:"M18 5v4"}],["path",{d:"M18 19v-6"}],["path",{d:"M22 19V9"}],["path",{d:"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=["svg",a,[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=["svg",a,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=["svg",a,[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=["svg",a,[["circle",{cx:"6",cy:"19",r:"3"}],["path",{d:"M9 19h8.5c.4 0 .9-.1 1.3-.2"}],["path",{d:"M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12"}],["path",{d:"m2 2 20 20"}],["path",{d:"M21 15.3a3.5 3.5 0 0 0-3.3-3.3"}],["path",{d:"M15 5h-4.3"}],["circle",{cx:"18",cy:"5",r:"3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=["svg",a,[["circle",{cx:"6",cy:"19",r:"3"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"}],["circle",{cx:"18",cy:"5",r:"3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=["svg",a,[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6.01 18H6"}],["path",{d:"M10.01 18H10"}],["path",{d:"M15 10v4"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 12h18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 9H3"}],["path",{d:"M21 15H3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 7.5H3"}],["path",{d:"M21 12H3"}],["path",{d:"M21 16.5H3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=["svg",a,[["path",{d:"M4 11a9 9 0 0 1 9 9"}],["path",{d:"M4 4a16 16 0 0 1 16 16"}],["circle",{cx:"5",cy:"19",r:"1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=["svg",a,[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"}],["path",{d:"m14.5 12.5 2-2"}],["path",{d:"m11.5 9.5 2-2"}],["path",{d:"m8.5 6.5 2-2"}],["path",{d:"m17.5 15.5 2-2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=["svg",a,[["path",{d:"M6 11h8a4 4 0 0 0 0-8H9v18"}],["path",{d:"M6 15h8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=["svg",a,[["path",{d:"M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z"}],["path",{d:"M21 14 10 2 3 14h18Z"}],["path",{d:"M10 2v16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=["svg",a,[["path",{d:"M7 21h10"}],["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"}],["path",{d:"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"}],["path",{d:"m13 12 4-4"}],["path",{d:"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=["svg",a,[["path",{d:"M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3"}],["path",{d:"M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83"}],["path",{d:"m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z"}],["path",{d:"M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=["svg",a,[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z"}],["path",{d:"m9 15 3-3"}],["path",{d:"M17 13a6 6 0 0 0-6-6"}],["path",{d:"M21 13A10 10 0 0 0 11 3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t4=["svg",a,[["path",{d:"M13 7 9 3 5 7l4 4"}],["path",{d:"m17 11 4 4-4 4-4-4"}],["path",{d:"m8 12 4 4 6-6-4-4Z"}],["path",{d:"m16 8 3-3"}],["path",{d:"M9 21a6 6 0 0 0-6-6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e4=["svg",a,[["path",{d:"M6 4a2 2 0 0 1 2-2h10l4 4v10.2a2 2 0 0 1-2 1.8H8a2 2 0 0 1-2-2Z"}],["path",{d:"M10 2v4h6"}],["path",{d:"M18 18v-7h-8v7"}],["path",{d:"M18 22H4a2 2 0 0 1-2-2V6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i4=["svg",a,[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}],["polyline",{points:"17 21 17 13 7 13 7 21"}],["polyline",{points:"7 3 7 8 15 8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=["svg",a,[["circle",{cx:"19",cy:"19",r:"2"}],["circle",{cx:"5",cy:"5",r:"2"}],["path",{d:"M5 7v12h12"}],["path",{d:"m5 19 6-6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s4=["svg",a,[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}],["path",{d:"M7 21h10"}],["path",{d:"M12 3v18"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a4=["svg",a,[["path",{d:"M21 3 9 15"}],["path",{d:"M12 3H3v18h18v-9"}],["path",{d:"M16 3h5v5"}],["path",{d:"M14 15H9v-5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n4=["svg",a,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M8 7v10"}],["path",{d:"M12 7v10"}],["path",{d:"M17 7v10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o4=["svg",a,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r4=["svg",a,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 9h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l4=["svg",a,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M7 12h10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h4=["svg",a,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m16 16-1.9-1.9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d4=["svg",a,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M7 8h8"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c4=["svg",a,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p4=["svg",a,[["circle",{cx:"7.5",cy:"7.5",r:".5"}],["circle",{cx:"18.5",cy:"5.5",r:".5"}],["circle",{cx:"11.5",cy:"11.5",r:".5"}],["circle",{cx:"7.5",cy:"16.5",r:".5"}],["circle",{cx:"17.5",cy:"14.5",r:".5"}],["path",{d:"M3 3v18h18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u4=["svg",a,[["circle",{cx:"12",cy:"10",r:"1"}],["path",{d:"M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"}],["path",{d:"M6 17v.01"}],["path",{d:"M6 13v.01"}],["path",{d:"M18 17v.01"}],["path",{d:"M18 13v.01"}],["path",{d:"M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g4=["svg",a,[["path",{d:"m4 6 8-4 8 4"}],["path",{d:"m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"}],["path",{d:"M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"}],["path",{d:"M18 5v17"}],["path",{d:"M6 5v17"}],["circle",{cx:"12",cy:"9",r:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f4=["svg",a,[["path",{d:"M5.42 9.42 8 12"}],["circle",{cx:"4",cy:"8",r:"2"}],["path",{d:"m14 6-8.58 8.58"}],["circle",{cx:"4",cy:"16",r:"2"}],["path",{d:"M10.8 14.8 14 18"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m4=["svg",a,[["path",{d:"M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2"}],["path",{d:"M10 22H8"}],["path",{d:"M16 22h-2"}],["circle",{cx:"8",cy:"8",r:"2"}],["path",{d:"M9.414 9.414 12 12"}],["path",{d:"M14.8 14.8 18 18"}],["circle",{cx:"8",cy:"16",r:"2"}],["path",{d:"m18 6-8.586 8.586"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=["svg",a,[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"2"}],["circle",{cx:"8",cy:"8",r:"2"}],["path",{d:"M9.414 9.414 12 12"}],["path",{d:"M14.8 14.8 18 18"}],["circle",{cx:"8",cy:"16",r:"2"}],["path",{d:"m18 6-8.586 8.586"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b4=["svg",a,[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M8.12 8.12 12 12"}],["path",{d:"M20 4 8.12 15.88"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M14.8 14.8 20 20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M4=["svg",a,[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m22 3-5 5"}],["path",{d:"m17 3 5 5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y4=["svg",a,[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m17 8 5-5"}],["path",{d:"M17 3h5v5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w4=["svg",a,[["path",{d:"M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{d:"M15 8h-5"}],["path",{d:"M15 12h-5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x4=["svg",a,[["path",{d:"M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C4=["svg",a,[["path",{d:"m8 11 2 2 4-4"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E4=["svg",a,[["path",{d:"m9 9-2 2 2 2"}],["path",{d:"m13 13 2-2-2-2"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=["svg",a,[["path",{d:"m13.5 8.5-5 5"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H4=["svg",a,[["path",{d:"m13.5 8.5-5 5"}],["path",{d:"m8.5 8.5 5 5"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L4=["svg",a,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=["svg",a,[["path",{d:"m3 3 3 9-3 9 19-9Z"}],["path",{d:"M6 12h16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k4=["svg",a,[["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2"}],["path",{d:"M7 14v1a2 2 0 0 0 2 2h1"}],["path",{d:"M14 7h1a2 2 0 0 1 2 2v1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T4=["svg",a,[["path",{d:"m22 2-7 20-4-9-9-4Z"}],["path",{d:"M22 2 11 13"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S4=["svg",a,[["line",{x1:"3",x2:"21",y1:"12",y2:"12"}],["polyline",{points:"8 8 12 4 16 8"}],["polyline",{points:"16 16 12 20 8 16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V4=["svg",a,[["line",{x1:"12",x2:"12",y1:"3",y2:"21"}],["polyline",{points:"8 8 4 12 8 16"}],["polyline",{points:"16 16 20 12 16 8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A4=["svg",a,[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"}],["path",{d:"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"}],["path",{d:"M6 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"m15.7 13.4-.9-.3"}],["path",{d:"m9.2 10.9-.9-.3"}],["path",{d:"m10.6 15.7.3-.9"}],["path",{d:"m13.6 15.7-.4-1"}],["path",{d:"m10.8 9.3-.4-1"}],["path",{d:"m8.3 13.6 1-.4"}],["path",{d:"m14.7 10.8 1-.4"}],["path",{d:"m13.4 8.3-.3.9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=["svg",a,[["path",{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"}],["path",{d:"M6 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"m13 6-4 6h6l-4 6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z4=["svg",a,[["path",{d:"M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5"}],["path",{d:"M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z"}],["path",{d:"M22 17v-1a2 2 0 0 0-2-2h-1"}],["path",{d:"M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z"}],["path",{d:"M6 18h.01"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4=["svg",a,[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P4=["svg",a,[["path",{d:"M20 7h-9"}],["path",{d:"M14 17H5"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O4=["svg",a,[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B4=["svg",a,[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=["svg",a,[["circle",{cx:"18",cy:"5",r:"3"}],["circle",{cx:"6",cy:"12",r:"3"}],["circle",{cx:"18",cy:"19",r:"3"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=["svg",a,[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}],["polyline",{points:"16 6 12 2 8 6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N4=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15"}],["line",{x1:"9",x2:"9",y1:"9",y2:"21"}],["line",{x1:"15",x2:"15",y1:"9",y2:"21"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W4=["svg",a,[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G4=["svg",a,[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z4=["svg",a,[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"}],["path",{d:"m4 5 14 12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j4=["svg",a,[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U4=["svg",a,[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"}],["path",{d:"M8 11h.01"}],["path",{d:"M12 11h.01"}],["path",{d:"M16 11h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q4=["svg",a,[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"}],["path",{d:"M12 22V2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X4=["svg",a,[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"}],["path",{d:"M8 11h8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J4=["svg",a,[["path",{d:"M19.7 14a6.9 6.9 0 0 0 .3-2V5l-8-3-3.2 1.2"}],["path",{d:"m2 2 20 20"}],["path",{d:"M4.7 4.7 4 5v7c0 6 8 10 8 10a20.3 20.3 0 0 0 5.62-4.38"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K4=["svg",a,[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"}],["path",{d:"M8 11h8"}],["path",{d:"M12 15V7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y4=["svg",a,[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=["svg",a,[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"}],["path",{d:"m14.5 9-5 5"}],["path",{d:"m9.5 9 5 5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $4=["svg",a,[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=["svg",a,[["circle",{cx:"12",cy:"12",r:"8"}],["path",{d:"M12 2v7.5"}],["path",{d:"m19 5-5.23 5.23"}],["path",{d:"M22 12h-7.5"}],["path",{d:"m19 19-5.23-5.23"}],["path",{d:"M12 14.5V22"}],["path",{d:"M10.23 13.77 5 19"}],["path",{d:"M9.5 12H2"}],["path",{d:"M10.23 10.23 5 5"}],["circle",{cx:"12",cy:"12",r:"2.5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t5=["svg",a,[["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"}],["path",{d:"M12 10v4"}],["path",{d:"M12 2v3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e5=["svg",a,[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i5=["svg",a,[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"}],["path",{d:"M3 6h18"}],["path",{d:"M16 10a4 4 0 0 1-8 0"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s5=["svg",a,[["path",{d:"m5 11 4-7"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4"}],["path",{d:"m9 11 1 9"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m15 11-1 9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a5=["svg",a,[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n5=["svg",a,[["path",{d:"M2 22v-5l5-5 5 5-5 5z"}],["path",{d:"M9.5 14.5 16 8"}],["path",{d:"m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o5=["svg",a,[["path",{d:"m4 4 2.5 2.5"}],["path",{d:"M13.5 6.5a4.95 4.95 0 0 0-7 7"}],["path",{d:"M15 5 5 15"}],["path",{d:"M14 17v.01"}],["path",{d:"M10 16v.01"}],["path",{d:"M13 13v.01"}],["path",{d:"M16 10v.01"}],["path",{d:"M11 20v.01"}],["path",{d:"M17 14v.01"}],["path",{d:"M20 11v.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r5=["svg",a,[["path",{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8"}],["path",{d:"M9 19.8V15m0 0H4.2M9 15l-6 6"}],["path",{d:"M15 4.2V9m0 0h4.8M15 9l6-6"}],["path",{d:"M9 4.2V9m0 0H4.2M9 9 3 3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l5=["svg",a,[["path",{d:"M12 22v-7l-2-2"}],["path",{d:"M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z"}],["path",{d:"m14 14-2 2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h5=["svg",a,[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"}],["path",{d:"m18 2 4 4-4 4"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"}],["path",{d:"m18 14 4 4-4 4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d5=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M16 8.9V7H8l4 5-4 5h8v-1.9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c5=["svg",a,[["path",{d:"M18 7V4H6l6 8-6 8h12v-3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p5=["svg",a,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}],["path",{d:"M17 20V8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u5=["svg",a,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g5=["svg",a,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f5=["svg",a,[["path",{d:"M2 20h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m5=["svg",a,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}],["path",{d:"M17 20V8"}],["path",{d:"M22 4v16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v5=["svg",a,[["path",{d:"M10 9H4L2 7l2-2h6"}],["path",{d:"M14 5h6l2 2-2 2h-6"}],["path",{d:"M10 22V4a2 2 0 1 1 4 0v18"}],["path",{d:"M8 22h8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b5=["svg",a,[["path",{d:"M12 3v3"}],["path",{d:"M18.5 13h-13L2 9.5 5.5 6h13L22 9.5Z"}],["path",{d:"M12 13v8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M5=["svg",a,[["path",{d:"M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6H7v-6Z"}],["path",{d:"M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2H5v-2Z"}],["path",{d:"M21 12h1"}],["path",{d:"M18.5 4.5 18 5"}],["path",{d:"M2 12h1"}],["path",{d:"M12 2v1"}],["path",{d:"m4.929 4.929.707.707"}],["path",{d:"M12 12v6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y5=["svg",a,[["polygon",{points:"19 20 9 12 19 4 19 20"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w5=["svg",a,[["polygon",{points:"5 4 15 12 5 20 5 4"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x5=["svg",a,[["circle",{cx:"9",cy:"12",r:"1"}],["circle",{cx:"15",cy:"12",r:"1"}],["path",{d:"M8 20v2h8v-2"}],["path",{d:"m12.5 17-.5-1-.5 1h1z"}],["path",{d:"M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C5=["svg",a,[["rect",{width:"3",height:"8",x:"13",y:"2",rx:"1.5"}],["path",{d:"M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"}],["rect",{width:"3",height:"8",x:"8",y:"14",rx:"1.5"}],["path",{d:"M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"}],["rect",{width:"8",height:"3",x:"14",y:"13",rx:"1.5"}],["path",{d:"M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"}],["rect",{width:"8",height:"3",x:"2",y:"8",rx:"1.5"}],["path",{d:"M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E5=["svg",a,[["path",{d:"M22 2 2 22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R5=["svg",a,[["path",{d:"m8 14-6 6h9v-3"}],["path",{d:"M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H5=["svg",a,[["line",{x1:"21",x2:"14",y1:"4",y2:"4"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L5=["svg",a,[["line",{x1:"4",x2:"4",y1:"21",y2:"14"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k5=["svg",a,[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12.667 8 10 12h4l-2.667 4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T5=["svg",a,[["rect",{width:"7",height:"12",x:"2",y:"6",rx:"1"}],["path",{d:"M13 8.32a7.43 7.43 0 0 1 0 7.36"}],["path",{d:"M16.46 6.21a11.76 11.76 0 0 1 0 11.58"}],["path",{d:"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S5=["svg",a,[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12 18h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V5=["svg",a,[["path",{d:"M22 11v1a10 10 0 1 1-9-10"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}],["path",{d:"M16 5h6"}],["path",{d:"M19 2v6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A5=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D5=["svg",a,[["path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}],["circle",{cx:"10",cy:"13",r:"8"}],["path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}],["path",{d:"M18 3 19.1 5.2"}],["path",{d:"M22 3 20.9 5.2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z5=["svg",a,[["line",{x1:"2",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22"}],["path",{d:"m20 16-4-4 4-4"}],["path",{d:"m4 8 4 4-4 4"}],["path",{d:"m16 4-4 4-4-4"}],["path",{d:"m8 20 4-4 4 4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F5=["svg",a,[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"}],["path",{d:"M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z"}],["path",{d:"M4 18v2"}],["path",{d:"M20 18v2"}],["path",{d:"M12 4v9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P5=["svg",a,[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"}],["path",{d:"M7 21h10"}],["path",{d:"M19.5 12 22 6"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O5=["svg",a,[["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B5=["svg",a,[["path",{d:"M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z"}],["path",{d:"M12 18v4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _5=["svg",a,[["path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=["svg",a,[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"}],["path",{d:"M5 3v4"}],["path",{d:"M19 17v4"}],["path",{d:"M3 5h4"}],["path",{d:"M17 19h4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I5=["svg",a,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M12 6h.01"}],["circle",{cx:"12",cy:"14",r:"4"}],["path",{d:"M12 14h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N5=["svg",a,[["path",{d:"M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"}],["path",{d:"M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"}],["path",{d:"M17 15a3.5 3.5 0 0 0-.025-4.975"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W5=["svg",a,[["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}],["path",{d:"M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G5=["svg",a,[["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}],["path",{d:"m16 20 2 2 4-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z5=["svg",a,[["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M5 17A12 12 0 0 1 17 5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j5=["svg",a,[["path",{d:"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3"}],["path",{d:"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U5=["svg",a,[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q5=["svg",a,[["path",{d:"M16 3h5v5"}],["path",{d:"M8 3H3v5"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"}],["path",{d:"m15 9 6-6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X5=["svg",a,[["path",{d:"M3 3h.01"}],["path",{d:"M7 5h.01"}],["path",{d:"M11 7h.01"}],["path",{d:"M3 7h.01"}],["path",{d:"M7 9h.01"}],["path",{d:"M3 11h.01"}],["rect",{width:"4",height:"4",x:"15",y:"5"}],["path",{d:"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"}],["path",{d:"m13 14 8-2"}],["path",{d:"m13 19 8-2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J5=["svg",a,[["path",{d:"M7 20h10"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K5=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 8v8"}],["path",{d:"m8.5 14 7-4"}],["path",{d:"m8.5 10 7 4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y5=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m10 10-2 2 2 2"}],["path",{d:"m14 14 2-2-2-2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $5=["svg",a,[["path",{d:"m10 10-2 2 2 2"}],["path",{d:"m14 14 2-2-2-2"}],["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"}],["path",{d:"M9 21h1"}],["path",{d:"M14 21h1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q5=["svg",a,[["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"}],["path",{d:"M9 21h1"}],["path",{d:"M14 21h1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 10h10"}],["path",{d:"M7 14h10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=["svg",a,[["path",{d:"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"}],["path",{d:"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=["svg",a,[["path",{d:"M18 21a6 6 0 0 0-12 0"}],["circle",{cx:"12",cy:"11",r:"4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=["svg",a,[["path",{d:"M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=["svg",a,[["path",{d:"M15.236 22a3 3 0 0 0-2.2-5"}],["path",{d:"M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4"}],["path",{d:"M18 13h.01"}],["path",{d:"M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=["svg",a,[["path",{d:"M5 22h14"}],["path",{d:"M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z"}],["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=["svg",a,[["path",{d:"M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=["svg",a,[["path",{d:"M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43"}],["path",{d:"M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=["svg",a,[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=["svg",a,[["line",{x1:"18",x2:"18",y1:"20",y2:"4"}],["polygon",{points:"14,20 4,12 14,4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=["svg",a,[["line",{x1:"6",x2:"6",y1:"4",y2:"20"}],["polygon",{points:"10,4 20,12 10,20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=["svg",a,[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"}],["circle",{cx:"20",cy:"10",r:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=["svg",a,[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"}],["path",{d:"M15 3v6h6"}],["path",{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1"}],["path",{d:"M8 13h0"}],["path",{d:"M16 13h0"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=["svg",a,[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"}],["path",{d:"M15 3v6h6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["rect",{width:"6",height:"6",x:"9",y:"9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=["svg",a,[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"}],["path",{d:"M2 7h20"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=["svg",a,[["rect",{width:"20",height:"6",x:"2",y:"4",rx:"2"}],["rect",{width:"20",height:"6",x:"2",y:"14",rx:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=["svg",a,[["rect",{width:"6",height:"20",x:"4",y:"2",rx:"2"}],["rect",{width:"6",height:"20",x:"14",y:"2",rx:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=["svg",a,[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=["svg",a,[["path",{d:"m4 5 8 8"}],["path",{d:"m12 5-8 8"}],["path",{d:"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=["svg",a,[["path",{d:"M7 13h4"}],["path",{d:"M15 13h2"}],["path",{d:"M7 9h2"}],["path",{d:"M13 9h4"}],["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=["svg",a,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 4h.01"}],["path",{d:"M20 12h.01"}],["path",{d:"M12 20h.01"}],["path",{d:"M4 12h.01"}],["path",{d:"M17.657 6.343h.01"}],["path",{d:"M17.657 17.657h.01"}],["path",{d:"M6.343 17.657h.01"}],["path",{d:"M6.343 6.343h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=["svg",a,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 3v1"}],["path",{d:"M12 20v1"}],["path",{d:"M3 12h1"}],["path",{d:"M20 12h1"}],["path",{d:"m18.364 5.636-.707.707"}],["path",{d:"m6.343 17.657-.707.707"}],["path",{d:"m5.636 5.636.707.707"}],["path",{d:"m17.657 17.657.707.707"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=["svg",a,[["path",{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.9 4.9 1.4 1.4"}],["path",{d:"m17.7 17.7 1.4 1.4"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.3 17.7-1.4 1.4"}],["path",{d:"m19.1 4.9-1.4 1.4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=["svg",a,[["path",{d:"M10 9a3 3 0 1 0 0 6"}],["path",{d:"M2 12h1"}],["path",{d:"M14 21V3"}],["path",{d:"M10 4V3"}],["path",{d:"M10 21v-1"}],["path",{d:"m3.64 18.36.7-.7"}],["path",{d:"m4.34 6.34-.7-.7"}],["path",{d:"M14 12h8"}],["path",{d:"m17 4-3 3"}],["path",{d:"m14 17 3 3"}],["path",{d:"m21 15-3-3 3-3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=["svg",a,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=["svg",a,[["path",{d:"M12 2v8"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m8 6 4-4 4 4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=["svg",a,[["path",{d:"M12 10V2"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m16 6-4 4-4-4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=["svg",a,[["path",{d:"m4 19 8-8"}],["path",{d:"m12 19-8-8"}],["path",{d:"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=["svg",a,[["path",{d:"M10 21V3h8"}],["path",{d:"M6 16h9"}],["path",{d:"M10 9.5h7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=["svg",a,[["path",{d:"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"}],["path",{d:"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m18 22-3-3 3-3"}],["path",{d:"m6 2 3 3-3 3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=["svg",a,[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=["svg",a,[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=["svg",a,[["path",{d:"m18 2 4 4"}],["path",{d:"m17 7 3-3"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"}],["path",{d:"m9 11 4 4"}],["path",{d:"m5 19-3 3"}],["path",{d:"m14 4 6 6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=["svg",a,[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=["svg",a,[["path",{d:"M15 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 9H3"}],["path",{d:"M21 15H3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=["svg",a,[["path",{d:"M12 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=["svg",a,[["rect",{width:"10",height:"14",x:"3",y:"8",rx:"2"}],["path",{d:"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"}],["path",{d:"M8 18h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=["svg",a,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=["svg",a,[["circle",{cx:"7",cy:"7",r:"5"}],["circle",{cx:"17",cy:"17",r:"5"}],["path",{d:"M12 17h10"}],["path",{d:"m3.46 10.54 7.08-7.08"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=["svg",a,[["path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"}],["path",{d:"M7 7h.01"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=["svg",a,[["path",{d:"M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z"}],["path",{d:"M6 9.01V9"}],["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=["svg",a,[["path",{d:"M4 4v16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=["svg",a,[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=["svg",a,[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=["svg",a,[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}],["path",{d:"M19 4v16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=["svg",a,[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}],["path",{d:"M19 4v16"}],["path",{d:"M22 6 2 18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=["svg",a,[["circle",{cx:"17",cy:"4",r:"2"}],["path",{d:"M15.59 5.41 5.41 15.59"}],["circle",{cx:"4",cy:"17",r:"2"}],["path",{d:"M12 22s-4-9-1.5-11.5S22 12 22 12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"6"}],["circle",{cx:"12",cy:"12",r:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=["svg",a,[["circle",{cx:"4",cy:"4",r:"2"}],["path",{d:"m14 5 3-3 3 3"}],["path",{d:"m14 10 3-3 3 3"}],["path",{d:"M17 14V2"}],["path",{d:"M17 14H7l-5 8h20Z"}],["path",{d:"M8 14v8"}],["path",{d:"m9 14 5 8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=["svg",a,[["path",{d:"M3.5 21 14 3"}],["path",{d:"M20.5 21 10 3"}],["path",{d:"M15.5 21 12 15l-3.5 6"}],["path",{d:"M2 21h20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=["svg",a,[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t3=["svg",a,[["polyline",{points:"4 17 10 11 4 5"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e3=["svg",a,[["path",{d:"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3"}],["path",{d:"m16 2 6 6"}],["path",{d:"M12 16H4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i3=["svg",a,[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2"}],["path",{d:"M8.5 2h7"}],["path",{d:"M14.5 16h-5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s3=["svg",a,[["path",{d:"M9 2v17.5A2.5 2.5 0 0 1 6.5 22v0A2.5 2.5 0 0 1 4 19.5V2"}],["path",{d:"M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5V2"}],["path",{d:"M3 2h7"}],["path",{d:"M14 2h7"}],["path",{d:"M9 16H4"}],["path",{d:"M20 16h-5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a3=["svg",a,[["path",{d:"M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1"}],["path",{d:"M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5"}],["path",{d:"M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"}],["path",{d:"M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"}],["path",{d:"M9 7v10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n3=["svg",a,[["path",{d:"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1"}],["path",{d:"M7 22h1a4 4 0 0 0 4-4v-1"}],["path",{d:"M7 2h1a4 4 0 0 1 4 4v1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o3=["svg",a,[["path",{d:"M17 6H3"}],["path",{d:"M21 12H8"}],["path",{d:"M21 18H8"}],["path",{d:"M3 12v6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=["svg",a,[["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 3h1"}],["path",{d:"M14 21h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v1"}],["path",{d:"M3 14v1"}],["path",{d:"M21 14v1"}],["line",{x1:"7",x2:"15",y1:"8",y2:"8"}],["line",{x1:"7",x2:"17",y1:"12",y2:"12"}],["line",{x1:"7",x2:"13",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r3=["svg",a,[["path",{d:"M17 6.1H3"}],["path",{d:"M21 12.1H3"}],["path",{d:"M15.1 18H3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l3=["svg",a,[["path",{d:"M2 10s3-3 3-8"}],["path",{d:"M22 10s-3-3-3-8"}],["path",{d:"M10 2c0 4.4-3.6 8-8 8"}],["path",{d:"M14 2c0 4.4 3.6 8 8 8"}],["path",{d:"M2 10s2 2 2 5"}],["path",{d:"M22 10s-2 2-2 5"}],["path",{d:"M8 15h8"}],["path",{d:"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"}],["path",{d:"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h3=["svg",a,[["path",{d:"M2 12h10"}],["path",{d:"M9 4v16"}],["path",{d:"m3 9 3 3-3 3"}],["path",{d:"M12 6 9 9 6 6"}],["path",{d:"m6 18 3-3 1.5 1.5"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d3=["svg",a,[["path",{d:"M12 9a4 4 0 0 0-2 7.5"}],["path",{d:"M12 3v2"}],["path",{d:"m6.6 18.4-1.4 1.4"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}],["path",{d:"M4 13H2"}],["path",{d:"M6.34 7.34 4.93 5.93"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c3=["svg",a,[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p3=["svg",a,[["path",{d:"M17 14V2"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u3=["svg",a,[["path",{d:"M7 10v12"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g3=["svg",a,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M13 5v2"}],["path",{d:"M13 17v2"}],["path",{d:"M13 11v2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f3=["svg",a,[["path",{d:"M10 2h4"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2"}],["path",{d:"m2 2 20 20"}],["path",{d:"M12 12v-2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m3=["svg",a,[["path",{d:"M10 2h4"}],["path",{d:"M12 14v-4"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"}],["path",{d:"M9 17H4v5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v3=["svg",a,[["line",{x1:"10",x2:"14",y1:"2",y2:"2"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11"}],["circle",{cx:"12",cy:"14",r:"8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b3=["svg",a,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6"}],["circle",{cx:"8",cy:"12",r:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M3=["svg",a,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6"}],["circle",{cx:"16",cy:"12",r:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y3=["svg",a,[["path",{d:"M21 4H3"}],["path",{d:"M18 8H6"}],["path",{d:"M19 12H9"}],["path",{d:"M16 16h-6"}],["path",{d:"M11 20H9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w3=["svg",a,[["ellipse",{cx:"12",cy:"11",rx:"3",ry:"2"}],["ellipse",{cx:"12",cy:"12.5",rx:"10",ry:"8.5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x3=["svg",a,[["path",{d:"M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16"}],["path",{d:"M2 14h12"}],["path",{d:"M22 14h-2"}],["path",{d:"M12 20v-6"}],["path",{d:"m2 2 20 20"}],["path",{d:"M22 16V6a2 2 0 0 0-2-2H10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C3=["svg",a,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M2 14h20"}],["path",{d:"M12 20v-6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3=["svg",a,[["path",{d:"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z"}],["path",{d:"M8 13v9"}],["path",{d:"M16 22v-9"}],["path",{d:"m9 6 1 7"}],["path",{d:"m15 6-1 7"}],["path",{d:"M12 6V2"}],["path",{d:"M13 2h-2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3=["svg",a,[["rect",{width:"18",height:"12",x:"3",y:"8",rx:"1"}],["path",{d:"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"}],["path",{d:"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3=["svg",a,[["path",{d:"M3 4h9l1 7"}],["path",{d:"M4 11V4"}],["path",{d:"M8 10V4"}],["path",{d:"M18 5c-.6 0-1 .4-1 1v5.6"}],["path",{d:"m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1"}],["circle",{cx:"7",cy:"15",r:".5"}],["circle",{cx:"7",cy:"15",r:"5"}],["path",{d:"M16 18h-5"}],["circle",{cx:"18",cy:"18",r:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=["svg",a,[["path",{d:"M9.3 6.2a4.55 4.55 0 0 0 5.4 0"}],["path",{d:"M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3"}],["path",{d:"M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z"}],["path",{d:"m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k3=["svg",a,[["path",{d:"M2 22V12a10 10 0 1 1 20 0v10"}],["path",{d:"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8"}],["path",{d:"M10 15h.01"}],["path",{d:"M14 15h.01"}],["path",{d:"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z"}],["path",{d:"m9 19-2 3"}],["path",{d:"m15 19 2 3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T3=["svg",a,[["path",{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1"}],["path",{d:"m9 15-1-1"}],["path",{d:"m15 15 1-1"}],["path",{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"}],["path",{d:"m8 19-2 3"}],["path",{d:"m16 19 2 3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S3=["svg",a,[["path",{d:"M2 17 17 2"}],["path",{d:"m2 14 8 8"}],["path",{d:"m5 11 8 8"}],["path",{d:"m8 8 8 8"}],["path",{d:"m11 5 8 8"}],["path",{d:"m14 2 8 8"}],["path",{d:"M7 22 22 7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=["svg",a,[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2"}],["path",{d:"M4 11h16"}],["path",{d:"M12 3v8"}],["path",{d:"m8 19-2 3"}],["path",{d:"m18 22-2-3"}],["path",{d:"M8 15h0"}],["path",{d:"M16 15h0"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V3=["svg",a,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A3=["svg",a,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=["svg",a,[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z"}],["path",{d:"M12 19v3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3=["svg",a,[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"}],["path",{d:"M12 22v-3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=["svg",a,[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"}],["path",{d:"M7 16v6"}],["path",{d:"M13 19v3"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["rect",{width:"3",height:"9",x:"7",y:"7"}],["rect",{width:"3",height:"5",x:"14",y:"7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=["svg",a,[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7"}],["polyline",{points:"16 17 22 17 22 11"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3=["svg",a,[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _3=["svg",a,[["path",{d:"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=["svg",a,[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=["svg",a,[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18"}],["path",{d:"M4 22h16"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=["svg",a,[["path",{d:"M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"}],["path",{d:"M14 9h4l4 4v4c0 .6-.4 1-1 1h-2"}],["circle",{cx:"7",cy:"18",r:"2"}],["path",{d:"M15 18H9"}],["circle",{cx:"17",cy:"18",r:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3=["svg",a,[["path",{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"}],["path",{d:"M4.82 7.9 8 10"}],["path",{d:"M15.18 7.9 12 10"}],["path",{d:"M16.93 10H20a2 2 0 0 1 0 4H2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=["svg",a,[["path",{d:"M7 21h10"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j3=["svg",a,[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2"}],["polyline",{points:"17 2 12 7 7 2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U3=["svg",a,[["path",{d:"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=["svg",a,[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X3=["svg",a,[["polyline",{points:"4 7 4 4 20 4 20 7"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J3=["svg",a,[["path",{d:"M12 2v1"}],["path",{d:"M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575"}],["path",{d:"M17.5 12H22A10 10 0 0 0 9.004 3.455"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=["svg",a,[["path",{d:"M22 12a10.06 10.06 1 0 0-20 0Z"}],["path",{d:"M12 12v8a2 2 0 0 0 4 0"}],["path",{d:"M12 2v1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y3=["svg",a,[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=["svg",a,[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3=["svg",a,[["circle",{cx:"12",cy:"17",r:"1"}],["path",{d:"M3 7v6h6"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=["svg",a,[["path",{d:"M3 7v6h6"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=["svg",a,[["path",{d:"M16 12h6"}],["path",{d:"M8 12H2"}],["path",{d:"M12 2v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 20v2"}],["path",{d:"m19 15 3-3-3-3"}],["path",{d:"m5 9-3 3 3 3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=["svg",a,[["path",{d:"M12 22v-6"}],["path",{d:"M12 8V2"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}],["path",{d:"m15 19-3 3-3-3"}],["path",{d:"m15 5-3-3-3 3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=["svg",a,[["rect",{width:"8",height:"6",x:"5",y:"4",rx:"1"}],["rect",{width:"8",height:"6",x:"11",y:"14",rx:"1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=["svg",a,[["path",{d:"M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=["svg",a,[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=["svg",a,[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 9.33-2.5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=["svg",a,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=["svg",a,[["path",{d:"m19 5 3-3"}],["path",{d:"m2 22 3-3"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"}],["path",{d:"M7.5 13.5 10 11"}],["path",{d:"M10.5 16.5 13 14"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=["svg",a,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M12 12v9"}],["path",{d:"m16 16-4-4-4 4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=["svg",a,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"17 8 12 3 7 8"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=["svg",a,[["circle",{cx:"10",cy:"7",r:"1"}],["circle",{cx:"4",cy:"20",r:"1"}],["path",{d:"M4.7 19.3 19 5"}],["path",{d:"m21 3-3 1 2 2Z"}],["path",{d:"M9.26 7.68 5 12l2 5"}],["path",{d:"m10 14 5 2 3.5-3.5"}],["path",{d:"m18 12 1-1 1 1-1 1Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=["svg",a,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["polyline",{points:"16 11 18 13 22 9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=["svg",a,[["circle",{cx:"18",cy:"15",r:"3"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M10 15H6a4 4 0 0 0-4 4v2"}],["path",{d:"m21.7 16.4-.9-.3"}],["path",{d:"m15.2 13.9-.9-.3"}],["path",{d:"m16.6 18.7.3-.9"}],["path",{d:"m19.1 12.2.3-.9"}],["path",{d:"m19.6 18.7-.4-1"}],["path",{d:"m16.8 12.3-.4-1"}],["path",{d:"m14.3 16.6 1-.4"}],["path",{d:"m20.7 13.8 1-.4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=["svg",a,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=["svg",a,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=["svg",a,[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"m16 19 2 2 4-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=["svg",a,[["path",{d:"M2 21a8 8 0 0 1 10.434-7.62"}],["circle",{cx:"10",cy:"8",r:"5"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m19.5 14.3-.4.9"}],["path",{d:"m16.9 20.8-.4.9"}],["path",{d:"m21.7 19.5-.9-.4"}],["path",{d:"m15.2 16.9-.9-.4"}],["path",{d:"m21.7 16.5-.9.4"}],["path",{d:"m15.2 19.1-.9.4"}],["path",{d:"m19.5 21.7-.4-.9"}],["path",{d:"m16.9 15.2-.4-.9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=["svg",a,[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M22 19h-6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=["svg",a,[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M19 16v6"}],["path",{d:"M22 19h-6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=["svg",a,[["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M2 21a8 8 0 0 1 10.434-7.62"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m22 22-1.9-1.9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=["svg",a,[["path",{d:"M2 21a8 8 0 0 1 11.873-7"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"m17 17 5 5"}],["path",{d:"m22 17-5 5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=["svg",a,[["circle",{cx:"12",cy:"8",r:"5"}],["path",{d:"M20 21a8 8 0 0 0-16 0"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=["svg",a,[["circle",{cx:"10",cy:"7",r:"4"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2"}],["circle",{cx:"17",cy:"17",r:"3"}],["path",{d:"m21 21-1.9-1.9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=["svg",a,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=["svg",a,[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=["svg",a,[["path",{d:"M18 21a8 8 0 0 0-16 0"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=["svg",a,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=["svg",a,[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"}],["path",{d:"m2.1 21.8 6.4-6.3"}],["path",{d:"m19 5-7 7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=["svg",a,[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=["svg",a,[["path",{d:"M12 2v20"}],["path",{d:"M2 5h20"}],["path",{d:"M3 3v2"}],["path",{d:"M7 3v2"}],["path",{d:"M17 3v2"}],["path",{d:"M21 3v2"}],["path",{d:"m19 5-7 7-7-7"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=["svg",a,[["path",{d:"M8 21s-4-3-4-9 4-9 4-9"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=["svg",a,[["path",{d:"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"}],["path",{d:"M16 8c4 0 6-2 6-6-4 0-6 2-6 6"}],["path",{d:"M17.41 3.6a10 10 0 1 0 3 3"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=["svg",a,[["path",{d:"M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z"}],["path",{d:"M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z"}],["path",{d:"M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=["svg",a,[["path",{d:"m2 8 2 2-2 2 2 2-2 2"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2"}],["path",{d:"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2"}],["path",{d:"M16 10.34V6c0-.55-.45-1-1-1h-4.34"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=["svg",a,[["path",{d:"m2 8 2 2-2 2 2 2-2 2"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2"}],["rect",{width:"8",height:"14",x:"8",y:"5",rx:"1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=["svg",a,[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=["svg",a,[["path",{d:"m22 8-6 4 6 4V8Z"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=["svg",a,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M2 8h20"}],["circle",{cx:"8",cy:"14",r:"2"}],["path",{d:"M8 12h8"}],["circle",{cx:"16",cy:"14",r:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=["svg",a,[["path",{d:"M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z"}],["path",{d:"M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=["svg",a,[["circle",{cx:"6",cy:"12",r:"4"}],["circle",{cx:"18",cy:"12",r:"4"}],["line",{x1:"6",x2:"18",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=["svg",a,[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=["svg",a,[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=["svg",a,[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=["svg",a,[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=["svg",a,[["path",{d:"m9 12 2 2 4-4"}],["path",{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"}],["path",{d:"M22 19H2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=["svg",a,[["path",{d:"M17 14h.01"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=["svg",a,[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=["svg",a,[["circle",{cx:"8",cy:"9",r:"2"}],["path",{d:"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=["svg",a,[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"}],["path",{d:"m14 7 3 3"}],["path",{d:"M5 6v4"}],["path",{d:"M19 14v4"}],["path",{d:"M10 2v2"}],["path",{d:"M7 8H3"}],["path",{d:"M21 16h-4"}],["path",{d:"M11 3H9"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=["svg",a,[["path",{d:"M15 4V2"}],["path",{d:"M15 16v-2"}],["path",{d:"M8 9h2"}],["path",{d:"M20 9h2"}],["path",{d:"M17.8 11.8 19 13"}],["path",{d:"M15 9h0"}],["path",{d:"M17.8 6.2 19 5"}],["path",{d:"m3 21 9-9"}],["path",{d:"M12.2 6.2 11 5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=["svg",a,[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"}],["path",{d:"M6 18h12"}],["path",{d:"M6 14h12"}],["rect",{width:"12",height:"12",x:"6",y:"10"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=["svg",a,[["circle",{cx:"12",cy:"12",r:"6"}],["polyline",{points:"12 10 12 12 13 13"}],["path",{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"}],["path",{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=["svg",a,[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=["svg",a,[["circle",{cx:"12",cy:"4.5",r:"2.5"}],["path",{d:"m10.2 6.3-3.9 3.9"}],["circle",{cx:"4.5",cy:"12",r:"2.5"}],["path",{d:"M7 12h10"}],["circle",{cx:"19.5",cy:"12",r:"2.5"}],["path",{d:"m13.8 17.7 3.9-3.9"}],["circle",{cx:"12",cy:"19.5",r:"2.5"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=["svg",a,[["circle",{cx:"12",cy:"10",r:"8"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 22h10"}],["path",{d:"M12 22v-4"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=["svg",a,[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=["svg",a,[["circle",{cx:"12",cy:"5",r:"3"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=["svg",a,[["path",{d:"m2 22 10-10"}],["path",{d:"m16 8-1.17 1.17"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97"}],["path",{d:"M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98"}],["path",{d:"M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=["svg",a,[["path",{d:"M2 22 16 8"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=["svg",a,[["circle",{cx:"7",cy:"12",r:"3"}],["path",{d:"M10 9v6"}],["circle",{cx:"17",cy:"12",r:"3"}],["path",{d:"M14 7v8"}],["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e6=["svg",a,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M8.5 16.5a5 5 0 0 1 7 0"}],["path",{d:"M2 8.82a15 15 0 0 1 4.17-2.65"}],["path",{d:"M10.66 5c4.01-.36 8.14.9 11.34 3.76"}],["path",{d:"M16.85 11.25a10 10 0 0 1 2.22 1.68"}],["path",{d:"M5 13a10 10 0 0 1 5.24-2.76"}],["line",{x1:"12",x2:"12.01",y1:"20",y2:"20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=["svg",a,[["path",{d:"M5 13a10 10 0 0 1 14 0"}],["path",{d:"M8.5 16.5a5 5 0 0 1 7 0"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0"}],["line",{x1:"12",x2:"12.01",y1:"20",y2:"20"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s6=["svg",a,[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=["svg",a,[["path",{d:"M8 22h8"}],["path",{d:"M7 10h3m7 0h-1.343"}],["path",{d:"M12 15v7"}],["path",{d:"M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n6=["svg",a,[["path",{d:"M8 22h8"}],["path",{d:"M7 10h10"}],["path",{d:"M12 15v7"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6=["svg",a,[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=["svg",a,[["line",{x1:"3",x2:"21",y1:"6",y2:"6"}],["path",{d:"M3 12h15a3 3 0 1 1 0 6h-4"}],["polyline",{points:"16 16 14 18 16 20"}],["line",{x1:"3",x2:"10",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6=["svg",a,[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=["svg",a,[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=["svg",a,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=["svg",a,[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"}],["path",{d:"m10 15 5-3-5-3z"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g6=["svg",a,[["polyline",{points:"12.41 6.75 13 2 10.57 4.92"}],["polyline",{points:"18.57 12.91 21 10 15.66 10"}],["polyline",{points:"8 8 3 14 12 14 11 22 16 16"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=["svg",a,[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m6=["svg",a,[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=["svg",a,[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]]];/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u7=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:Qe,AArrowUp:ti,ALargeSmall:ei,Accessibility:ii,Activity:ai,ActivitySquare:si,AirVent:ni,Airplay:oi,AlarmCheck:vt,AlarmClock:li,AlarmClockCheck:vt,AlarmClockMinus:bt,AlarmClockOff:ri,AlarmClockPlus:Mt,AlarmMinus:bt,AlarmPlus:Mt,AlarmSmoke:hi,Album:di,AlertCircle:ci,AlertOctagon:pi,AlertTriangle:ui,AlignCenter:mi,AlignCenterHorizontal:gi,AlignCenterVertical:fi,AlignEndHorizontal:vi,AlignEndVertical:bi,AlignHorizontalDistributeCenter:Mi,AlignHorizontalDistributeEnd:yi,AlignHorizontalDistributeStart:wi,AlignHorizontalJustifyCenter:xi,AlignHorizontalJustifyEnd:Ci,AlignHorizontalJustifyStart:Ei,AlignHorizontalSpaceAround:Ri,AlignHorizontalSpaceBetween:Hi,AlignJustify:Li,AlignLeft:ki,AlignRight:Ti,AlignStartHorizontal:Si,AlignStartVertical:Vi,AlignVerticalDistributeCenter:Ai,AlignVerticalDistributeEnd:Di,AlignVerticalDistributeStart:zi,AlignVerticalJustifyCenter:Fi,AlignVerticalJustifyEnd:Pi,AlignVerticalJustifyStart:Oi,AlignVerticalSpaceAround:Bi,AlignVerticalSpaceBetween:_i,Ampersand:Ii,Ampersands:Ni,Anchor:Wi,Angry:Gi,Annoyed:Zi,Antenna:ji,Anvil:Ui,Aperture:qi,AppWindow:Xi,Apple:Ji,Archive:$i,ArchiveRestore:Ki,ArchiveX:Yi,AreaChart:Qi,Armchair:ts,ArrowBigDown:is,ArrowBigDownDash:es,ArrowBigLeft:as,ArrowBigLeftDash:ss,ArrowBigRight:os,ArrowBigRightDash:ns,ArrowBigUp:ls,ArrowBigUpDash:rs,ArrowDown:Es,ArrowDown01:hs,ArrowDown10:ds,ArrowDownAZ:yt,ArrowDownAz:yt,ArrowDownCircle:cs,ArrowDownFromLine:ps,ArrowDownLeft:fs,ArrowDownLeftFromCircle:us,ArrowDownLeftSquare:gs,ArrowDownNarrowWide:ms,ArrowDownRight:Ms,ArrowDownRightFromCircle:vs,ArrowDownRightSquare:bs,ArrowDownSquare:ys,ArrowDownToDot:ws,ArrowDownToLine:xs,ArrowDownUp:Cs,ArrowDownWideNarrow:wt,ArrowDownZA:xt,ArrowDownZa:xt,ArrowLeft:Ss,ArrowLeftCircle:Rs,ArrowLeftFromLine:Hs,ArrowLeftRight:Ls,ArrowLeftSquare:ks,ArrowLeftToLine:Ts,ArrowRight:Ps,ArrowRightCircle:Vs,ArrowRightFromLine:As,ArrowRightLeft:Ds,ArrowRightSquare:zs,ArrowRightToLine:Fs,ArrowUp:$s,ArrowUp01:Os,ArrowUp10:Bs,ArrowUpAZ:Ct,ArrowUpAz:Ct,ArrowUpCircle:_s,ArrowUpDown:Is,ArrowUpFromDot:Ns,ArrowUpFromLine:Ws,ArrowUpLeft:js,ArrowUpLeftFromCircle:Gs,ArrowUpLeftSquare:Zs,ArrowUpNarrowWide:Et,ArrowUpRight:Xs,ArrowUpRightFromCircle:Us,ArrowUpRightSquare:qs,ArrowUpSquare:Js,ArrowUpToLine:Ks,ArrowUpWideNarrow:Ys,ArrowUpZA:Rt,ArrowUpZa:Rt,ArrowsUpFromLine:Qs,Asterisk:ta,AtSign:ea,Atom:ia,AudioLines:sa,AudioWaveform:aa,Award:na,Axe:oa,Axis3D:Ht,Axis3d:Ht,Baby:ra,Backpack:la,Badge:Ea,BadgeAlert:ha,BadgeCent:da,BadgeCheck:Lt,BadgeDollarSign:ca,BadgeEuro:pa,BadgeHelp:ua,BadgeIndianRupee:ga,BadgeInfo:fa,BadgeJapaneseYen:ma,BadgeMinus:va,BadgePercent:ba,BadgePlus:Ma,BadgePoundSterling:ya,BadgeRussianRuble:wa,BadgeSwissFranc:xa,BadgeX:Ca,BaggageClaim:Ra,Ban:Ha,Banana:La,Banknote:ka,BarChart:Fa,BarChart2:Ta,BarChart3:Sa,BarChart4:Va,BarChartBig:Aa,BarChartHorizontal:za,BarChartHorizontalBig:Da,Barcode:Pa,Baseline:Oa,Bath:Ba,Battery:Za,BatteryCharging:_a,BatteryFull:Ia,BatteryLow:Na,BatteryMedium:Wa,BatteryWarning:Ga,Beaker:ja,Bean:qa,BeanOff:Ua,Bed:Ka,BedDouble:Xa,BedSingle:Ja,Beef:Ya,Beer:$a,Bell:on,BellDot:Qa,BellElectric:tn,BellMinus:en,BellOff:sn,BellPlus:an,BellRing:nn,Bike:rn,Binary:ln,Biohazard:hn,Bird:dn,Bitcoin:cn,Blinds:pn,Blocks:un,Bluetooth:vn,BluetoothConnected:gn,BluetoothOff:fn,BluetoothSearching:mn,Bold:bn,Bolt:Mn,Bomb:yn,Bone:wn,Book:Zn,BookA:xn,BookAudio:Cn,BookCheck:En,BookCopy:Rn,BookDashed:kt,BookDown:Hn,BookHeadphones:Ln,BookHeart:kn,BookImage:Tn,BookKey:Sn,BookLock:Vn,BookMarked:An,BookMinus:Dn,BookOpen:Pn,BookOpenCheck:zn,BookOpenText:Fn,BookPlus:On,BookTemplate:kt,BookText:Bn,BookType:_n,BookUp:Nn,BookUp2:In,BookUser:Wn,BookX:Gn,Bookmark:Jn,BookmarkCheck:jn,BookmarkMinus:Un,BookmarkPlus:qn,BookmarkX:Xn,BoomBox:Kn,Bot:Yn,Box:Qn,BoxSelect:$n,Boxes:to,Braces:Tt,Brackets:eo,Brain:ao,BrainCircuit:io,BrainCog:so,BrickWall:no,Briefcase:oo,BringToFront:ro,Brush:lo,Bug:po,BugOff:ho,BugPlay:co,Building:go,Building2:uo,Bus:mo,BusFront:fo,Cable:bo,CableCar:vo,Cake:yo,CakeSlice:Mo,Calculator:wo,Calendar:zo,CalendarCheck:Co,CalendarCheck2:xo,CalendarClock:Eo,CalendarDays:Ro,CalendarHeart:Ho,CalendarMinus:Lo,CalendarOff:ko,CalendarPlus:To,CalendarRange:So,CalendarSearch:Vo,CalendarX:Do,CalendarX2:Ao,Camera:Po,CameraOff:Fo,CandlestickChart:Oo,Candy:Io,CandyCane:Bo,CandyOff:_o,Car:Go,CarFront:No,CarTaxiFront:Wo,Caravan:Zo,Carrot:jo,CaseLower:Uo,CaseSensitive:qo,CaseUpper:Xo,CassetteTape:Jo,Cast:Ko,Castle:Yo,Cat:$o,Cctv:Qo,Check:nr,CheckCheck:tr,CheckCircle:ir,CheckCircle2:er,CheckSquare:ar,CheckSquare2:sr,ChefHat:or,Cherry:rr,ChevronDown:dr,ChevronDownCircle:lr,ChevronDownSquare:hr,ChevronFirst:cr,ChevronLast:pr,ChevronLeft:fr,ChevronLeftCircle:ur,ChevronLeftSquare:gr,ChevronRight:br,ChevronRightCircle:mr,ChevronRightSquare:vr,ChevronUp:wr,ChevronUpCircle:Mr,ChevronUpSquare:yr,ChevronsDown:Cr,ChevronsDownUp:xr,ChevronsLeft:Rr,ChevronsLeftRight:Er,ChevronsRight:Lr,ChevronsRightLeft:Hr,ChevronsUp:Tr,ChevronsUpDown:kr,Chrome:Sr,Church:Vr,Cigarette:Dr,CigaretteOff:Ar,Circle:Wr,CircleDashed:zr,CircleDollarSign:Fr,CircleDot:Or,CircleDotDashed:Pr,CircleEllipsis:Br,CircleEqual:_r,CircleOff:Ir,CircleSlash:Nr,CircleSlash2:St,CircleSlashed:St,CircleUser:At,CircleUserRound:Vt,CircuitBoard:Gr,Citrus:Zr,Clapperboard:jr,Clipboard:tl,ClipboardCheck:Ur,ClipboardCopy:qr,ClipboardEdit:Xr,ClipboardList:Jr,ClipboardPaste:Kr,ClipboardSignature:Yr,ClipboardType:$r,ClipboardX:Qr,Clock:ul,Clock1:el,Clock10:il,Clock11:sl,Clock12:al,Clock2:nl,Clock3:ol,Clock4:rl,Clock5:ll,Clock6:hl,Clock7:dl,Clock8:cl,Clock9:pl,Cloud:Ll,CloudCog:gl,CloudDrizzle:fl,CloudFog:ml,CloudHail:vl,CloudLightning:bl,CloudMoon:yl,CloudMoonRain:Ml,CloudOff:wl,CloudRain:Cl,CloudRainWind:xl,CloudSnow:El,CloudSun:Hl,CloudSunRain:Rl,Cloudy:kl,Clover:Tl,Club:Sl,Code:Al,Code2:Vl,Codepen:Dl,Codesandbox:zl,Coffee:Fl,Cog:Pl,Coins:Ol,Columns:Dt,Columns2:Dt,Columns3:zt,Columns4:Bl,Combine:_l,Command:Il,Compass:Nl,Component:Wl,Computer:Gl,ConciergeBell:Zl,Cone:jl,Construction:Ul,Contact:Xl,Contact2:ql,Container:Jl,Contrast:Kl,Cookie:Yl,CookingPot:$l,Copy:ah,CopyCheck:Ql,CopyMinus:th,CopyPlus:eh,CopySlash:ih,CopyX:sh,Copyleft:nh,Copyright:oh,CornerDownLeft:rh,CornerDownRight:lh,CornerLeftDown:hh,CornerLeftUp:dh,CornerRightDown:ch,CornerRightUp:ph,CornerUpLeft:uh,CornerUpRight:gh,Cpu:fh,CreativeCommons:mh,CreditCard:vh,Croissant:bh,Crop:Mh,Cross:yh,Crosshair:wh,Crown:xh,Cuboid:Ch,CupSoda:Eh,CurlyBraces:Tt,Currency:Rh,Cylinder:Hh,Database:Th,DatabaseBackup:Lh,DatabaseZap:kh,Delete:Sh,Dessert:Vh,Diameter:Ah,Diamond:Dh,Dice1:zh,Dice2:Fh,Dice3:Ph,Dice4:Oh,Dice5:Bh,Dice6:_h,Dices:Ih,Diff:Nh,Disc:jh,Disc2:Wh,Disc3:Gh,DiscAlbum:Zh,Divide:Xh,DivideCircle:Uh,DivideSquare:qh,Dna:Kh,DnaOff:Jh,Dog:Yh,DollarSign:$h,Donut:Qh,DoorClosed:t1,DoorOpen:e1,Dot:i1,Download:a1,DownloadCloud:s1,DraftingCompass:n1,Drama:o1,Dribbble:r1,Drill:l1,Droplet:h1,Droplets:d1,Drum:c1,Drumstick:p1,Dumbbell:u1,Ear:f1,EarOff:g1,Edit:ot,Edit2:te,Edit3:Qt,Egg:b1,EggFried:m1,EggOff:v1,Equal:y1,EqualNot:M1,Eraser:w1,Euro:x1,Expand:C1,ExternalLink:E1,Eye:H1,EyeOff:R1,Facebook:L1,Factory:k1,Fan:T1,FastForward:S1,Feather:V1,Fence:A1,FerrisWheel:D1,Figma:z1,File:F2,FileArchive:F1,FileAudio:O1,FileAudio2:P1,FileAxis3D:Ft,FileAxis3d:Ft,FileBadge:_1,FileBadge2:B1,FileBarChart:N1,FileBarChart2:I1,FileBox:W1,FileCheck:Z1,FileCheck2:G1,FileClock:j1,FileCode:q1,FileCode2:U1,FileCog:Pt,FileCog2:Pt,FileDiff:X1,FileDigit:J1,FileDown:K1,FileEdit:Y1,FileHeart:$1,FileImage:Q1,FileInput:t2,FileJson:i2,FileJson2:e2,FileKey:a2,FileKey2:s2,FileLineChart:n2,FileLock:r2,FileLock2:o2,FileMinus:h2,FileMinus2:l2,FileMusic:d2,FileOutput:c2,FilePieChart:p2,FilePlus:g2,FilePlus2:u2,FileQuestion:f2,FileScan:m2,FileSearch:b2,FileSearch2:v2,FileSignature:M2,FileSpreadsheet:y2,FileStack:w2,FileSymlink:x2,FileTerminal:C2,FileText:E2,FileType:H2,FileType2:R2,FileUp:L2,FileVideo:T2,FileVideo2:k2,FileVolume:V2,FileVolume2:S2,FileWarning:A2,FileX:z2,FileX2:D2,Files:P2,Film:O2,Filter:_2,FilterX:B2,Fingerprint:I2,FireExtinguisher:N2,Fish:Z2,FishOff:W2,FishSymbol:G2,Flag:X2,FlagOff:j2,FlagTriangleLeft:U2,FlagTriangleRight:q2,Flame:K2,FlameKindling:J2,Flashlight:$2,FlashlightOff:Y2,FlaskConical:td,FlaskConicalOff:Q2,FlaskRound:ed,FlipHorizontal:sd,FlipHorizontal2:id,FlipVertical:nd,FlipVertical2:ad,Flower:rd,Flower2:od,Focus:ld,FoldHorizontal:hd,FoldVertical:dd,Folder:Bd,FolderArchive:cd,FolderCheck:pd,FolderClock:ud,FolderClosed:gd,FolderCog:Ot,FolderCog2:Ot,FolderDot:fd,FolderDown:md,FolderEdit:vd,FolderGit:Md,FolderGit2:bd,FolderHeart:yd,FolderInput:wd,FolderKanban:xd,FolderKey:Cd,FolderLock:Ed,FolderMinus:Rd,FolderOpen:Ld,FolderOpenDot:Hd,FolderOutput:kd,FolderPlus:Td,FolderRoot:Sd,FolderSearch:Ad,FolderSearch2:Vd,FolderSymlink:Dd,FolderSync:zd,FolderTree:Fd,FolderUp:Pd,FolderX:Od,Folders:_d,Footprints:Id,Forklift:Nd,FormInput:Wd,Forward:Gd,Frame:Zd,Framer:jd,Frown:Ud,Fuel:qd,Fullscreen:Xd,FunctionSquare:Jd,GalleryHorizontal:Yd,GalleryHorizontalEnd:Kd,GalleryThumbnails:$d,GalleryVertical:tc,GalleryVerticalEnd:Qd,Gamepad:ic,Gamepad2:ec,GanttChart:sc,GanttChartSquare:Bt,Gauge:nc,GaugeCircle:ac,Gavel:oc,Gem:rc,Ghost:lc,Gift:hc,GitBranch:cc,GitBranchPlus:dc,GitCommit:_t,GitCommitHorizontal:_t,GitCommitVertical:pc,GitCompare:gc,GitCompareArrows:uc,GitFork:fc,GitGraph:mc,GitMerge:vc,GitPullRequest:Cc,GitPullRequestArrow:bc,GitPullRequestClosed:Mc,GitPullRequestCreate:wc,GitPullRequestCreateArrow:yc,GitPullRequestDraft:xc,Github:Ec,Gitlab:Rc,GlassWater:Hc,Glasses:Lc,Globe:Tc,Globe2:kc,Goal:Sc,Grab:Vc,GraduationCap:Ac,Grape:Dc,Grid:nt,Grid2X2:It,Grid2x2:It,Grid3X3:nt,Grid3x3:nt,Grip:Pc,GripHorizontal:zc,GripVertical:Fc,Group:Oc,Guitar:Bc,Hammer:_c,Hand:Nc,HandMetal:Ic,HardDrive:Zc,HardDriveDownload:Wc,HardDriveUpload:Gc,HardHat:jc,Hash:Uc,Haze:qc,HdmiPort:Xc,Heading:e0,Heading1:Jc,Heading2:Kc,Heading3:Yc,Heading4:$c,Heading5:Qc,Heading6:t0,Headphones:i0,Heart:r0,HeartCrack:s0,HeartHandshake:a0,HeartOff:n0,HeartPulse:o0,HelpCircle:l0,HelpingHand:h0,Hexagon:d0,Highlighter:c0,History:p0,Home:u0,Hop:f0,HopOff:g0,Hotel:m0,Hourglass:v0,IceCream:M0,IceCream2:b0,Image:E0,ImageDown:y0,ImageMinus:w0,ImageOff:x0,ImagePlus:C0,Import:R0,Inbox:H0,Indent:L0,IndianRupee:k0,Infinity:T0,Info:S0,Inspect:Gt,InspectionPanel:V0,Instagram:A0,Italic:D0,IterationCcw:z0,IterationCw:F0,JapaneseYen:P0,Joystick:O0,Kanban:B0,KanbanSquare:Wt,KanbanSquareDashed:Nt,Key:N0,KeyRound:_0,KeySquare:I0,Keyboard:G0,KeyboardMusic:W0,Lamp:J0,LampCeiling:Z0,LampDesk:j0,LampFloor:U0,LampWallDown:q0,LampWallUp:X0,LandPlot:K0,Landmark:Y0,Languages:$0,Laptop:tp,Laptop2:Q0,Lasso:ip,LassoSelect:ep,Laugh:sp,Layers:op,Layers2:ap,Layers3:np,Layout:$t,LayoutDashboard:rp,LayoutGrid:lp,LayoutList:hp,LayoutPanelLeft:dp,LayoutPanelTop:cp,LayoutTemplate:pp,Leaf:up,LeafyGreen:gp,Library:vp,LibraryBig:fp,LibrarySquare:mp,LifeBuoy:bp,Ligature:Mp,Lightbulb:wp,LightbulbOff:yp,LineChart:xp,Link:Rp,Link2:Ep,Link2Off:Cp,Linkedin:Hp,List:Ip,ListChecks:Lp,ListEnd:kp,ListFilter:Tp,ListMinus:Sp,ListMusic:Vp,ListOrdered:Ap,ListPlus:Dp,ListRestart:zp,ListStart:Fp,ListTodo:Pp,ListTree:Op,ListVideo:Bp,ListX:_p,Loader:Wp,Loader2:Np,Locate:jp,LocateFixed:Gp,LocateOff:Zp,Lock:qp,LockKeyhole:Up,LogIn:Xp,LogOut:Jp,Lollipop:Kp,Luggage:Yp,MSquare:$p,Magnet:Qp,Mail:lu,MailCheck:tu,MailMinus:eu,MailOpen:iu,MailPlus:su,MailQuestion:au,MailSearch:nu,MailWarning:ou,MailX:ru,Mailbox:hu,Mails:du,Map:gu,MapPin:pu,MapPinOff:cu,MapPinned:uu,Martini:fu,Maximize:vu,Maximize2:mu,Medal:bu,Megaphone:yu,MegaphoneOff:Mu,Meh:wu,MemoryStick:xu,Menu:Eu,MenuSquare:Cu,Merge:Ru,MessageCircle:Pu,MessageCircleCode:Hu,MessageCircleDashed:Lu,MessageCircleHeart:ku,MessageCircleMore:Tu,MessageCircleOff:Su,MessageCirclePlus:Vu,MessageCircleQuestion:Au,MessageCircleReply:Du,MessageCircleWarning:zu,MessageCircleX:Fu,MessageSquare:Yu,MessageSquareCode:Ou,MessageSquareDashed:Bu,MessageSquareDiff:_u,MessageSquareDot:Iu,MessageSquareHeart:Nu,MessageSquareMore:Wu,MessageSquareOff:Gu,MessageSquarePlus:Zu,MessageSquareQuote:ju,MessageSquareReply:Uu,MessageSquareShare:qu,MessageSquareText:Xu,MessageSquareWarning:Ju,MessageSquareX:Ku,MessagesSquare:$u,Mic:eg,Mic2:Qu,MicOff:tg,Microscope:ig,Microwave:sg,Milestone:ag,Milk:og,MilkOff:ng,Minimize:lg,Minimize2:rg,Minus:cg,MinusCircle:hg,MinusSquare:dg,Monitor:Cg,MonitorCheck:pg,MonitorDot:ug,MonitorDown:gg,MonitorOff:fg,MonitorPause:mg,MonitorPlay:vg,MonitorSmartphone:bg,MonitorSpeaker:Mg,MonitorStop:yg,MonitorUp:wg,MonitorX:xg,Moon:Rg,MoonStar:Eg,MoreHorizontal:Hg,MoreVertical:Lg,Mountain:Tg,MountainSnow:kg,Mouse:zg,MousePointer:Dg,MousePointer2:Sg,MousePointerClick:Vg,MousePointerSquare:Gt,MousePointerSquareDashed:Ag,Move:qg,Move3D:Zt,Move3d:Zt,MoveDiagonal:Pg,MoveDiagonal2:Fg,MoveDown:_g,MoveDownLeft:Og,MoveDownRight:Bg,MoveHorizontal:Ig,MoveLeft:Ng,MoveRight:Wg,MoveUp:jg,MoveUpLeft:Gg,MoveUpRight:Zg,MoveVertical:Ug,Music:Yg,Music2:Xg,Music3:Jg,Music4:Kg,Navigation:ef,Navigation2:Qg,Navigation2Off:$g,NavigationOff:tf,Network:sf,Newspaper:af,Nfc:nf,Nut:rf,NutOff:of,Octagon:lf,Option:hf,Orbit:df,Outdent:cf,Package:Mf,Package2:pf,PackageCheck:uf,PackageMinus:gf,PackageOpen:ff,PackagePlus:mf,PackageSearch:vf,PackageX:bf,PaintBucket:yf,Paintbrush:xf,Paintbrush2:wf,Palette:Cf,Palmtree:Ef,PanelBottom:Lf,PanelBottomClose:Rf,PanelBottomDashed:jt,PanelBottomInactive:jt,PanelBottomOpen:Hf,PanelLeft:Jt,PanelLeftClose:Ut,PanelLeftDashed:qt,PanelLeftInactive:qt,PanelLeftOpen:Xt,PanelRight:Sf,PanelRightClose:kf,PanelRightDashed:Kt,PanelRightInactive:Kt,PanelRightOpen:Tf,PanelTop:Df,PanelTopClose:Vf,PanelTopDashed:Yt,PanelTopInactive:Yt,PanelTopOpen:Af,PanelsLeftBottom:zf,PanelsLeftRight:zt,PanelsRightBottom:Ff,PanelsTopBottom:se,PanelsTopLeft:$t,Paperclip:Pf,Parentheses:Of,ParkingCircle:_f,ParkingCircleOff:Bf,ParkingMeter:If,ParkingSquare:Wf,ParkingSquareOff:Nf,PartyPopper:Gf,Pause:Uf,PauseCircle:Zf,PauseOctagon:jf,PawPrint:qf,PcCase:Xf,Pen:te,PenBox:ot,PenLine:Qt,PenSquare:ot,PenTool:Jf,Pencil:$f,PencilLine:Kf,PencilRuler:Yf,Pentagon:Qf,Percent:sm,PercentCircle:tm,PercentDiamond:em,PercentSquare:im,PersonStanding:am,Phone:cm,PhoneCall:nm,PhoneForwarded:om,PhoneIncoming:rm,PhoneMissed:lm,PhoneOff:hm,PhoneOutgoing:dm,Pi:um,PiSquare:pm,Piano:gm,PictureInPicture:mm,PictureInPicture2:fm,PieChart:vm,PiggyBank:bm,Pilcrow:ym,PilcrowSquare:Mm,Pill:wm,Pin:Cm,PinOff:xm,Pipette:Em,Pizza:Rm,Plane:km,PlaneLanding:Hm,PlaneTakeoff:Lm,Play:Vm,PlayCircle:Tm,PlaySquare:Sm,Plug:Fm,Plug2:Am,PlugZap:zm,PlugZap2:Dm,Plus:Bm,PlusCircle:Pm,PlusSquare:Om,Pocket:Im,PocketKnife:_m,Podcast:Nm,Pointer:Gm,PointerOff:Wm,Popcorn:Zm,Popsicle:jm,PoundSterling:Um,Power:Km,PowerCircle:qm,PowerOff:Xm,PowerSquare:Jm,Presentation:Ym,Printer:$m,Projector:Qm,Puzzle:tv,Pyramid:ev,QrCode:iv,Quote:sv,Rabbit:av,Radar:nv,Radiation:ov,Radio:hv,RadioReceiver:rv,RadioTower:lv,Radius:dv,RailSymbol:cv,Rainbow:pv,Rat:uv,Ratio:gv,Receipt:fv,RectangleHorizontal:mv,RectangleVertical:vv,Recycle:bv,Redo:wv,Redo2:Mv,RedoDot:yv,RefreshCcw:Cv,RefreshCcwDot:xv,RefreshCw:Rv,RefreshCwOff:Ev,Refrigerator:Hv,Regex:Lv,RemoveFormatting:kv,Repeat:Vv,Repeat1:Tv,Repeat2:Sv,Replace:Dv,ReplaceAll:Av,Reply:Fv,ReplyAll:zv,Rewind:Pv,Ribbon:Ov,Rocket:Bv,RockingChair:_v,RollerCoaster:Iv,Rotate3D:ee,Rotate3d:ee,RotateCcw:Nv,RotateCw:Wv,Route:Zv,RouteOff:Gv,Router:jv,Rows:ie,Rows2:ie,Rows3:se,Rows4:Uv,Rss:qv,Ruler:Xv,RussianRuble:Jv,Sailboat:Kv,Salad:Yv,Sandwich:$v,Satellite:t4,SatelliteDish:Qv,Save:i4,SaveAll:e4,Scale:s4,Scale3D:ae,Scale3d:ae,Scaling:a4,Scan:c4,ScanBarcode:n4,ScanEye:o4,ScanFace:r4,ScanLine:l4,ScanSearch:h4,ScanText:d4,ScatterChart:p4,School:g4,School2:u4,Scissors:b4,ScissorsLineDashed:f4,ScissorsSquare:v4,ScissorsSquareDashedBottom:m4,ScreenShare:y4,ScreenShareOff:M4,Scroll:x4,ScrollText:w4,Search:L4,SearchCheck:C4,SearchCode:E4,SearchSlash:R4,SearchX:H4,Send:T4,SendHorizonal:ne,SendHorizontal:ne,SendToBack:k4,SeparatorHorizontal:S4,SeparatorVertical:V4,Server:F4,ServerCog:A4,ServerCrash:D4,ServerOff:z4,Settings:O4,Settings2:P4,Shapes:B4,Share:I4,Share2:_4,Sheet:N4,Shell:W4,Shield:$4,ShieldAlert:G4,ShieldBan:Z4,ShieldCheck:j4,ShieldClose:oe,ShieldEllipsis:U4,ShieldHalf:q4,ShieldMinus:X4,ShieldOff:J4,ShieldPlus:K4,ShieldQuestion:Y4,ShieldX:oe,Ship:t5,ShipWheel:Q4,Shirt:e5,ShoppingBag:i5,ShoppingBasket:s5,ShoppingCart:a5,Shovel:n5,ShowerHead:o5,Shrink:r5,Shrub:l5,Shuffle:h5,Sidebar:Jt,SidebarClose:Ut,SidebarOpen:Xt,Sigma:c5,SigmaSquare:d5,Signal:m5,SignalHigh:p5,SignalLow:u5,SignalMedium:g5,SignalZero:f5,Signpost:b5,SignpostBig:v5,Siren:M5,SkipBack:y5,SkipForward:w5,Skull:x5,Slack:C5,Slash:E5,Slice:R5,Sliders:L5,SlidersHorizontal:H5,Smartphone:S5,SmartphoneCharging:k5,SmartphoneNfc:T5,Smile:A5,SmilePlus:V5,Snail:D5,Snowflake:z5,Sofa:F5,SortAsc:Et,SortDesc:wt,Soup:P5,Space:O5,Spade:B5,Sparkle:_5,Sparkles:re,Speaker:I5,Speech:N5,SpellCheck:G5,SpellCheck2:W5,Spline:Z5,Split:q5,SplitSquareHorizontal:j5,SplitSquareVertical:U5,SprayCan:X5,Sprout:J5,Square:ab,SquareAsterisk:K5,SquareCode:Y5,SquareDashedBottom:Q5,SquareDashedBottomCode:$5,SquareDot:tb,SquareEqual:eb,SquareGantt:Bt,SquareKanban:Wt,SquareKanbanDashed:Nt,SquareSlash:ib,SquareStack:sb,SquareUser:he,SquareUserRound:le,Squircle:nb,Squirrel:ob,Stamp:rb,Star:db,StarHalf:lb,StarOff:hb,Stars:re,StepBack:cb,StepForward:pb,Stethoscope:ub,Sticker:gb,StickyNote:fb,StopCircle:mb,Store:vb,StretchHorizontal:bb,StretchVertical:Mb,Strikethrough:yb,Subscript:wb,Subtitles:xb,Sun:Lb,SunDim:Cb,SunMedium:Eb,SunMoon:Rb,SunSnow:Hb,Sunrise:kb,Sunset:Tb,Superscript:Sb,SwissFranc:Vb,SwitchCamera:Ab,Sword:Db,Swords:zb,Syringe:Fb,Table:Bb,Table2:Pb,TableProperties:Ob,Tablet:Ib,TabletSmartphone:_b,Tablets:Nb,Tag:Wb,Tags:Gb,Tally1:Zb,Tally2:jb,Tally3:Ub,Tally4:qb,Tally5:Xb,Tangent:Jb,Target:Kb,Tent:$b,TentTree:Yb,Terminal:t3,TerminalSquare:Qb,TestTube:i3,TestTube2:e3,TestTubes:s3,Text:r3,TextCursor:n3,TextCursorInput:a3,TextQuote:o3,TextSelect:de,TextSelection:de,Theater:l3,Thermometer:c3,ThermometerSnowflake:h3,ThermometerSun:d3,ThumbsDown:p3,ThumbsUp:u3,Ticket:g3,Timer:v3,TimerOff:f3,TimerReset:m3,ToggleLeft:b3,ToggleRight:M3,Tornado:y3,Torus:w3,Touchpad:C3,TouchpadOff:x3,TowerControl:E3,ToyBrick:R3,Tractor:H3,TrafficCone:L3,Train:ce,TrainFront:T3,TrainFrontTunnel:k3,TrainTrack:S3,TramFront:ce,Trash:A3,Trash2:V3,TreeDeciduous:D3,TreePine:z3,Trees:F3,Trello:P3,TrendingDown:O3,TrendingUp:B3,Triangle:I3,TriangleRight:_3,Trophy:N3,Truck:W3,Turtle:G3,Tv:j3,Tv2:Z3,Twitch:U3,Twitter:q3,Type:X3,Umbrella:K3,UmbrellaOff:J3,Underline:Y3,Undo:tM,Undo2:$3,UndoDot:Q3,UnfoldHorizontal:eM,UnfoldVertical:iM,Ungroup:sM,Unlink:nM,Unlink2:aM,Unlock:rM,UnlockKeyhole:oM,Unplug:lM,Upload:dM,UploadCloud:hM,Usb:cM,User:MM,User2:ve,UserCheck:pM,UserCheck2:pe,UserCircle:At,UserCircle2:Vt,UserCog:uM,UserCog2:ue,UserMinus:gM,UserMinus2:ge,UserPlus:fM,UserPlus2:fe,UserRound:ve,UserRoundCheck:pe,UserRoundCog:ue,UserRoundMinus:ge,UserRoundPlus:fe,UserRoundSearch:mM,UserRoundX:me,UserSearch:vM,UserSquare:he,UserSquare2:le,UserX:bM,UserX2:me,Users:yM,Users2:be,UsersRound:be,Utensils:xM,UtensilsCrossed:wM,UtilityPole:CM,Variable:EM,Vegan:RM,VenetianMask:HM,Verified:Lt,Vibrate:kM,VibrateOff:LM,Video:SM,VideoOff:TM,Videotape:VM,View:AM,Voicemail:DM,Volume:OM,Volume1:zM,Volume2:FM,VolumeX:PM,Vote:BM,Wallet:NM,Wallet2:_M,WalletCards:IM,Wallpaper:WM,Wand:ZM,Wand2:GM,Warehouse:jM,Watch:UM,Waves:qM,Waypoints:XM,Webcam:JM,Webhook:KM,Weight:YM,Wheat:QM,WheatOff:$M,WholeWord:t6,Wifi:i6,WifiOff:e6,Wind:s6,Wine:n6,WineOff:a6,Workflow:o6,WrapText:r6,Wrench:l6,X:p6,XCircle:h6,XOctagon:d6,XSquare:c6,Youtube:u6,Zap:f6,ZapOff:g6,ZoomIn:m6,ZoomOut:v6},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide v0.304.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g7=({icons:h={},nameAttr:t="data-lucide",attrs:e={}}={})=>{if(!Object.values(h).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const i=document.querySelectorAll(`[${t}]`);if(Array.from(i).forEach(s=>mt(s,{nameAttr:t,icons:h,attrs:e})),t==="data-lucide"){const s=document.querySelectorAll("[icon-name]");s.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(s).forEach(n=>mt(n,{nameAttr:"icon-name",icons:h,attrs:e})))}};class k{constructor(t){this.table=t}reloadData(t,e,i){return this.table.dataLoader.load(t,void 0,void 0,void 0,e,i)}langText(){return this.table.modules.localize.getText(...arguments)}langBind(){return this.table.modules.localize.bind(...arguments)}langLocale(){return this.table.modules.localize.getLocale(...arguments)}commsConnections(){return this.table.modules.comms.getConnections(...arguments)}commsSend(){return this.table.modules.comms.send(...arguments)}layoutMode(){return this.table.modules.layout.getMode()}layoutRefresh(t){return this.table.modules.layout.layout(t)}subscribe(){return this.table.eventBus.subscribe(...arguments)}unsubscribe(){return this.table.eventBus.unsubscribe(...arguments)}subscribed(t){return this.table.eventBus.subscribed(t)}subscriptionChange(){return this.table.eventBus.subscriptionChange(...arguments)}dispatch(){return this.table.eventBus.dispatch(...arguments)}chain(){return this.table.eventBus.chain(...arguments)}confirm(){return this.table.eventBus.confirm(...arguments)}dispatchExternal(){return this.table.externalEvents.dispatch(...arguments)}subscribedExternal(t){return this.table.externalEvents.subscribed(t)}subscriptionChangeExternal(){return this.table.externalEvents.subscriptionChange(...arguments)}options(t){return this.table.options[t]}setOption(t,e){return typeof e<"u"&&(this.table.options[t]=e),this.table.options[t]}deprecationCheck(t,e,i){return this.table.deprecationAdvisor.check(t,e,i)}deprecationCheckMsg(t,e){return this.table.deprecationAdvisor.checkMsg(t,e)}deprecationMsg(t){return this.table.deprecationAdvisor.msg(t)}module(t){return this.table.module(t)}}class C{static elVisible(t){return!(t.offsetWidth<=0&&t.offsetHeight<=0)}static elOffset(t){var e=t.getBoundingClientRect();return{top:e.top+window.pageYOffset-document.documentElement.clientTop,left:e.left+window.pageXOffset-document.documentElement.clientLeft}}static retrieveNestedData(t,e,i){var s=t?e.split(t):[e],n=s.length,o;for(let r=0;r<n&&(i=i[s[r]],o=i,!!i);r++);return o}static deepClone(t,e,i=[]){var s={}.__proto__,n=[].__proto__;e||(e=Object.assign(Array.isArray(t)?[]:{},t));for(var o in t){let r=t[o],l,d;r!=null&&typeof r=="object"&&(r.__proto__===s||r.__proto__===n)&&(l=i.findIndex(c=>c.subject===r),l>-1?e[o]=i[l].copy:(d=Object.assign(Array.isArray(r)?[]:{},r),i.unshift({subject:r,copy:d}),e[o]=this.deepClone(r,d,i)))}return e}}class dt extends k{constructor(t,e,i){super(t),this.element=e,this.container=this._lookupContainer(),this.parent=i,this.reversedX=!1,this.childPopup=null,this.blurable=!1,this.blurCallback=null,this.blurEventsBound=!1,this.renderedCallback=null,this.visible=!1,this.hideable=!0,this.element.classList.add("tabulator-popup-container"),this.blurEvent=this.hide.bind(this,!1),this.escEvent=this._escapeCheck.bind(this),this.destroyBinding=this.tableDestroyed.bind(this),this.destroyed=!1}tableDestroyed(){this.destroyed=!0,this.hide(!0)}_lookupContainer(){var t=this.table.options.popupContainer;return typeof t=="string"?(t=document.querySelector(t),t||console.warn("Menu Error - no container element found matching selector:",this.table.options.popupContainer,"(defaulting to document body)")):t===!0&&(t=this.table.element),t&&!this._checkContainerIsParent(t)&&(t=!1,console.warn("Menu Error - container element does not contain this table:",this.table.options.popupContainer,"(defaulting to document body)")),t||(t=document.body),t}_checkContainerIsParent(t,e=this.table.element){return t===e?!0:e.parentNode?this._checkContainerIsParent(t,e.parentNode):!1}renderCallback(t){this.renderedCallback=t}containerEventCoords(t){var e=!(t instanceof MouseEvent),i=e?t.touches[0].pageX:t.pageX,s=e?t.touches[0].pageY:t.pageY;if(this.container!==document.body){let n=C.elOffset(this.container);i-=n.left,s-=n.top}return{x:i,y:s}}elementPositionCoords(t,e="right"){var i=C.elOffset(t),s,n,o;switch(this.container!==document.body&&(s=C.elOffset(this.container),i.left-=s.left,i.top-=s.top),e){case"right":n=i.left+t.offsetWidth,o=i.top-1;break;case"bottom":n=i.left,o=i.top+t.offsetHeight;break;case"left":n=i.left,o=i.top-1;break;case"top":n=i.left,o=i.top;break;case"center":n=i.left+t.offsetWidth/2,o=i.top+t.offsetHeight/2;break}return{x:n,y:o,offset:i}}show(t,e){var i,s,n,o,r;return this.destroyed||this.table.destroyed?this:(t instanceof HTMLElement?(n=t,r=this.elementPositionCoords(t,e),o=r.offset,i=r.x,s=r.y):typeof t=="number"?(o={top:0,left:0},i=t,s=e):(r=this.containerEventCoords(t),i=r.x,s=r.y,this.reversedX=!1),this.element.style.top=s+"px",this.element.style.left=i+"px",this.container.appendChild(this.element),typeof this.renderedCallback=="function"&&this.renderedCallback(),this._fitToScreen(i,s,n,o,e),this.visible=!0,this.subscribe("table-destroy",this.destroyBinding),this.element.addEventListener("mousedown",l=>{l.stopPropagation()}),this)}_fitToScreen(t,e,i,s,n){var o=this.container===document.body?document.documentElement.scrollTop:this.container.scrollTop;if((t+this.element.offsetWidth>=this.container.offsetWidth||this.reversedX)&&(this.element.style.left="",i?this.element.style.right=this.container.offsetWidth-s.left+"px":this.element.style.right=this.container.offsetWidth-t+"px",this.reversedX=!0),e+this.element.offsetHeight>Math.max(this.container.offsetHeight,o?this.container.scrollHeight:0))if(i)switch(n){case"bottom":this.element.style.top=parseInt(this.element.style.top)-this.element.offsetHeight-i.offsetHeight-1+"px";break;default:this.element.style.top=parseInt(this.element.style.top)-this.element.offsetHeight+i.offsetHeight+1+"px"}else this.element.style.top=parseInt(this.element.style.top)-this.element.offsetHeight+"px"}isVisible(){return this.visible}hideOnBlur(t){return this.blurable=!0,this.visible&&(setTimeout(()=>{this.visible&&(this.table.rowManager.element.addEventListener("scroll",this.blurEvent),this.subscribe("cell-editing",this.blurEvent),document.body.addEventListener("click",this.blurEvent),document.body.addEventListener("contextmenu",this.blurEvent),document.body.addEventListener("mousedown",this.blurEvent),window.addEventListener("resize",this.blurEvent),document.body.addEventListener("keydown",this.escEvent),this.blurEventsBound=!0)},100),this.blurCallback=t),this}_escapeCheck(t){t.keyCode==27&&this.hide()}blockHide(){this.hideable=!1}restoreHide(){this.hideable=!0}hide(t=!1){return this.visible&&this.hideable&&(this.blurable&&this.blurEventsBound&&(document.body.removeEventListener("keydown",this.escEvent),document.body.removeEventListener("click",this.blurEvent),document.body.removeEventListener("contextmenu",this.blurEvent),document.body.removeEventListener("mousedown",this.blurEvent),window.removeEventListener("resize",this.blurEvent),this.table.rowManager.element.removeEventListener("scroll",this.blurEvent),this.unsubscribe("cell-editing",this.blurEvent),this.blurEventsBound=!1),this.childPopup&&this.childPopup.hide(),this.parent&&(this.parent.childPopup=null),this.element.parentNode&&this.element.parentNode.removeChild(this.element),this.visible=!1,this.blurCallback&&!t&&this.blurCallback(),this.unsubscribe("table-destroy",this.destroyBinding)),this}child(t){return this.childPopup&&this.childPopup.hide(),this.childPopup=new dt(this.table,t,this),this.childPopup}}class M extends k{constructor(t,e){super(t),this._handler=null}initialize(){}registerTableOption(t,e){this.table.optionsList.register(t,e)}registerColumnOption(t,e){this.table.columnManager.optionsList.register(t,e)}registerTableFunction(t,e){typeof this.table[t]>"u"?this.table[t]=(...i)=>(this.table.initGuard(t),e(...i)):console.warn("Unable to bind table function, name already in use",t)}registerComponentFunction(t,e,i){return this.table.componentFunctionBinder.bind(t,e,i)}registerDataHandler(t,e){this.table.rowManager.registerDataPipelineHandler(t,e),this._handler=t}registerDisplayHandler(t,e){this.table.rowManager.registerDisplayPipelineHandler(t,e),this._handler=t}displayRows(t){var e=this.table.rowManager.displayRows.length-1,i;if(this._handler&&(i=this.table.rowManager.displayPipeline.findIndex(s=>s.handler===this._handler),i>-1&&(e=i)),t&&(e=e+t),this._handler)return e>-1?this.table.rowManager.getDisplayRows(e):this.activeRows()}activeRows(){return this.table.rowManager.activeRows}refreshData(t,e){e||(e=this._handler),e&&this.table.rowManager.refreshActiveData(e,!1,t)}footerAppend(t){return this.table.footerManager.append(t)}footerPrepend(t){return this.table.footerManager.prepend(t)}footerRemove(t){return this.table.footerManager.remove(t)}popup(t,e){return new dt(this.table,t,e)}alert(t,e){return this.table.alertManager.alert(t,e)}clearAlert(){return this.table.alertManager.clear()}}var b6={};class Z extends M{constructor(t){super(t),this.allowedTypes=["","data","download","clipboard","print","htmlOutput"],this.registerColumnOption("accessor"),this.registerColumnOption("accessorParams"),this.registerColumnOption("accessorData"),this.registerColumnOption("accessorDataParams"),this.registerColumnOption("accessorDownload"),this.registerColumnOption("accessorDownloadParams"),this.registerColumnOption("accessorClipboard"),this.registerColumnOption("accessorClipboardParams"),this.registerColumnOption("accessorPrint"),this.registerColumnOption("accessorPrintParams"),this.registerColumnOption("accessorHtmlOutput"),this.registerColumnOption("accessorHtmlOutputParams")}initialize(){this.subscribe("column-layout",this.initializeColumn.bind(this)),this.subscribe("row-data-retrieve",this.transformRow.bind(this))}initializeColumn(t){var e=!1,i={};this.allowedTypes.forEach(s=>{var n="accessor"+(s.charAt(0).toUpperCase()+s.slice(1)),o;t.definition[n]&&(o=this.lookupAccessor(t.definition[n]),o&&(e=!0,i[n]={accessor:o,params:t.definition[n+"Params"]||{}}))}),e&&(t.modules.accessor=i)}lookupAccessor(t){var e=!1;switch(typeof t){case"string":Z.accessors[t]?e=Z.accessors[t]:console.warn("Accessor Error - No such accessor found, ignoring: ",t);break;case"function":e=t;break}return e}transformRow(t,e){var i="accessor"+(e.charAt(0).toUpperCase()+e.slice(1)),s=t.getComponent(),n=C.deepClone(t.data||{});return this.table.columnManager.traverse(function(o){var r,l,d,c;o.modules.accessor&&(l=o.modules.accessor[i]||o.modules.accessor.accessor||!1,l&&(r=o.getFieldValue(n),r!="undefined"&&(c=o.getComponent(),d=typeof l.params=="function"?l.params(r,n,e,c,s):l.params,o.setFieldValue(n,l.accessor(r,n,e,d,c,s)))))}),n}}Z.moduleName="accessor";Z.accessors=b6;var M6={method:"GET"};function lt(h,t){var e=[];if(t=t||"",Array.isArray(h))h.forEach((s,n)=>{e=e.concat(lt(s,t?t+"["+n+"]":n))});else if(typeof h=="object")for(var i in h)e=e.concat(lt(h[i],t?t+"["+i+"]":i));else e.push({key:t,value:h});return e}function y6(h){var t=lt(h),e=[];return t.forEach(function(i){e.push(encodeURIComponent(i.key)+"="+encodeURIComponent(i.value))}),e.join("&")}function xe(h,t,e){return h&&e&&Object.keys(e).length&&(!t.method||t.method.toLowerCase()=="get")&&(t.method="get",h+=(h.includes("?")?"&":"?")+y6(e)),h}function w6(h,t,e){var i;return new Promise((s,n)=>{if(h=this.urlGenerator.call(this.table,h,t,e),t.method.toUpperCase()!="GET")if(i=typeof this.table.options.ajaxContentType=="object"?this.table.options.ajaxContentType:this.contentTypeFormatters[this.table.options.ajaxContentType],i){for(var o in i.headers)t.headers||(t.headers={}),typeof t.headers[o]>"u"&&(t.headers[o]=i.headers[o]);t.body=i.body.call(this,h,t,e)}else console.warn("Ajax Error - Invalid ajaxContentType value:",this.table.options.ajaxContentType);h?(typeof t.headers>"u"&&(t.headers={}),typeof t.headers.Accept>"u"&&(t.headers.Accept="application/json"),typeof t.headers["X-Requested-With"]>"u"&&(t.headers["X-Requested-With"]="XMLHttpRequest"),typeof t.mode>"u"&&(t.mode="cors"),t.mode=="cors"?(typeof t.headers.Origin>"u"&&(t.headers.Origin=window.location.origin),typeof t.credentials>"u"&&(t.credentials="same-origin")):typeof t.credentials>"u"&&(t.credentials="include"),fetch(h,t).then(r=>{r.ok?r.json().then(l=>{s(l)}).catch(l=>{n(l),console.warn("Ajax Load Error - Invalid JSON returned",l)}):(console.error("Ajax Load Error - Connection Error: "+r.status,r.statusText),n(r))}).catch(r=>{console.error("Ajax Load Error - Connection Error: ",r),n(r)})):(console.warn("Ajax Load Error - No URL Set"),s([]))})}function ht(h,t){var e=[];if(t=t||"",Array.isArray(h))h.forEach((s,n)=>{e=e.concat(ht(s,t?t+"["+n+"]":n))});else if(typeof h=="object")for(var i in h)e=e.concat(ht(h[i],t?t+"["+i+"]":i));else e.push({key:t,value:h});return e}var x6={json:{headers:{"Content-Type":"application/json"},body:function(h,t,e){return JSON.stringify(e)}},form:{headers:{},body:function(h,t,e){var i=ht(e),s=new FormData;return i.forEach(function(n){s.append(n.key,n.value)}),s}}};class A extends M{constructor(t){super(t),this.config={},this.url="",this.urlGenerator=!1,this.params=!1,this.loaderPromise=!1,this.registerTableOption("ajaxURL",!1),this.registerTableOption("ajaxURLGenerator",!1),this.registerTableOption("ajaxParams",{}),this.registerTableOption("ajaxConfig","get"),this.registerTableOption("ajaxContentType","form"),this.registerTableOption("ajaxRequestFunc",!1),this.registerTableOption("ajaxRequesting",function(){}),this.registerTableOption("ajaxResponse",!1),this.contentTypeFormatters=A.contentTypeFormatters}initialize(){this.loaderPromise=this.table.options.ajaxRequestFunc||A.defaultLoaderPromise,this.urlGenerator=this.table.options.ajaxURLGenerator||A.defaultURLGenerator,this.table.options.ajaxURL&&this.setUrl(this.table.options.ajaxURL),this.setDefaultConfig(this.table.options.ajaxConfig),this.registerTableFunction("getAjaxUrl",this.getUrl.bind(this)),this.subscribe("data-loading",this.requestDataCheck.bind(this)),this.subscribe("data-params",this.requestParams.bind(this)),this.subscribe("data-load",this.requestData.bind(this))}requestParams(t,e,i,s){var n=this.table.options.ajaxParams;return n&&(typeof n=="function"&&(n=n.call(this.table)),s=Object.assign(Object.assign({},n),s)),s}requestDataCheck(t,e,i,s){return!!(!t&&this.url||typeof t=="string")}requestData(t,e,i,s,n){var o;return!n&&this.requestDataCheck(t)?(t&&this.setUrl(t),o=this.generateConfig(i),this.sendRequest(this.url,e,o)):n}setDefaultConfig(t={}){this.config=Object.assign({},A.defaultConfig),typeof t=="string"?this.config.method=t:Object.assign(this.config,t)}generateConfig(t={}){var e=Object.assign({},this.config);return typeof t=="string"?e.method=t:Object.assign(e,t),e}setUrl(t){this.url=t}getUrl(){return this.url}sendRequest(t,e,i){return this.table.options.ajaxRequesting.call(this.table,t,e)!==!1?this.loaderPromise(t,i,e).then(s=>(this.table.options.ajaxResponse&&(s=this.table.options.ajaxResponse.call(this.table,t,e,s)),s)):Promise.reject()}}A.moduleName="ajax";A.defaultConfig=M6;A.defaultURLGenerator=xe;A.defaultLoaderPromise=w6;A.contentTypeFormatters=x6;var C6={replace:function(h){return this.table.setData(h)},update:function(h){return this.table.updateOrAddData(h)},insert:function(h){return this.table.addData(h)},range:function(h){var t=[],e=this.table.modules.selectRange.activeRange,i=!1,s,n,o,r,l;return l=h.length,e&&(s=e.getBounds(),n=s.start,s.start===s.end&&(i=!0),n&&(t=this.table.rowManager.activeRows.slice(),o=t.indexOf(n.row),i?r=h.length:r=t.indexOf(s.end.row)-o+1,o>-1&&(this.table.blockRedraw(),t=t.slice(o,o+r),t.forEach((d,c)=>{d.updateData(h[c%l])}),this.table.restoreRedraw()))),t}},E6={table:function(h){var t=[],e=!0,i=this.table.columnManager.columns,s=[],n=[];return h=h.split(`
`),h.forEach(function(o){t.push(o.split("	"))}),t.length&&!(t.length===1&&t[0].length<2)?(t[0].forEach(function(o){var r=i.find(function(l){return o&&l.definition.title&&o.trim()&&l.definition.title.trim()===o.trim()});r?s.push(r):e=!1}),e||(e=!0,s=[],t[0].forEach(function(o){var r=i.find(function(l){return o&&l.field&&o.trim()&&l.field.trim()===o.trim()});r?s.push(r):e=!1}),e||(s=this.table.columnManager.columnsByIndex)),e&&t.shift(),t.forEach(function(o){var r={};o.forEach(function(l,d){s[d]&&(r[s[d].field]=l)}),n.push(r)}),n):!1},range:function(h){var t=[],e=[],i=this.table.modules.selectRange.activeRange,s=!1,n,o,r,l,d;return i&&(n=i.getBounds(),o=n.start,n.start===n.end&&(s=!0),o&&(h=h.split(`
`),h.forEach(function(c){t.push(c.split("	"))}),t.length&&(l=this.table.columnManager.getVisibleColumnsByIndex(),d=l.indexOf(o.column),d>-1)))?(s?r=t[0].length:r=l.indexOf(n.end.column)-d+1,l=l.slice(d,d+r),t.forEach(c=>{var p={},u=c.length;l.forEach(function(g,v){p[g.field]=c[v%u]}),e.push(p)}),e):!1}};class _ extends M{constructor(t){super(t),this.mode=!0,this.pasteParser=function(){},this.pasteAction=function(){},this.customSelection=!1,this.rowRange=!1,this.blocked=!0,this.registerTableOption("clipboard",!1),this.registerTableOption("clipboardCopyStyled",!0),this.registerTableOption("clipboardCopyConfig",!1),this.registerTableOption("clipboardCopyFormatter",!1),this.registerTableOption("clipboardCopyRowRange","active"),this.registerTableOption("clipboardPasteParser","table"),this.registerTableOption("clipboardPasteAction","insert"),this.registerColumnOption("clipboard"),this.registerColumnOption("titleClipboard")}initialize(){this.mode=this.table.options.clipboard,this.rowRange=this.table.options.clipboardCopyRowRange,(this.mode===!0||this.mode==="copy")&&this.table.element.addEventListener("copy",t=>{var e,i,s;this.blocked||(t.preventDefault(),this.customSelection?(e=this.customSelection,this.table.options.clipboardCopyFormatter&&(e=this.table.options.clipboardCopyFormatter("plain",e))):(s=this.table.modules.export.generateExportList(this.table.options.clipboardCopyConfig,this.table.options.clipboardCopyStyled,this.rowRange,"clipboard"),i=this.table.modules.export.generateHTMLTable(s),e=i?this.generatePlainContent(s):"",this.table.options.clipboardCopyFormatter&&(e=this.table.options.clipboardCopyFormatter("plain",e),i=this.table.options.clipboardCopyFormatter("html",i))),window.clipboardData&&window.clipboardData.setData?window.clipboardData.setData("Text",e):t.clipboardData&&t.clipboardData.setData?(t.clipboardData.setData("text/plain",e),i&&t.clipboardData.setData("text/html",i)):t.originalEvent&&t.originalEvent.clipboardData.setData&&(t.originalEvent.clipboardData.setData("text/plain",e),i&&t.originalEvent.clipboardData.setData("text/html",i)),this.dispatchExternal("clipboardCopied",e,i),this.reset())}),(this.mode===!0||this.mode==="paste")&&this.table.element.addEventListener("paste",t=>{this.paste(t)}),this.setPasteParser(this.table.options.clipboardPasteParser),this.setPasteAction(this.table.options.clipboardPasteAction),this.registerTableFunction("copyToClipboard",this.copy.bind(this))}reset(){this.blocked=!0,this.customSelection=!1}generatePlainContent(t){var e=[];return t.forEach(i=>{var s=[];i.columns.forEach(n=>{var o="";if(n)if(i.type==="group"&&(n.value=n.component.getKey()),n.value===null)o="";else switch(typeof n.value){case"object":o=JSON.stringify(n.value);break;case"undefined":o="";break;default:o=n.value}s.push(o)}),e.push(s.join("	"))}),e.join(`
`)}copy(t,e){var i,s;this.blocked=!1,this.customSelection=!1,(this.mode===!0||this.mode==="copy")&&(this.rowRange=t||this.table.options.clipboardCopyRowRange,typeof window.getSelection<"u"&&typeof document.createRange<"u"?(t=document.createRange(),t.selectNodeContents(this.table.element),i=window.getSelection(),i.toString()&&e&&(this.customSelection=i.toString()),i.removeAllRanges(),i.addRange(t)):typeof document.selection<"u"&&typeof document.body.createTextRange<"u"&&(s=document.body.createTextRange(),s.moveToElementText(this.table.element),s.select()),document.execCommand("copy"),i&&i.removeAllRanges())}setPasteAction(t){switch(typeof t){case"string":this.pasteAction=_.pasteActions[t],this.pasteAction||console.warn("Clipboard Error - No such paste action found:",t);break;case"function":this.pasteAction=t;break}}setPasteParser(t){switch(typeof t){case"string":this.pasteParser=_.pasteParsers[t],this.pasteParser||console.warn("Clipboard Error - No such paste parser found:",t);break;case"function":this.pasteParser=t;break}}paste(t){var e,i,s;this.checkPasteOrigin(t)&&(e=this.getPasteData(t),i=this.pasteParser.call(this,e),i?(t.preventDefault(),this.table.modExists("mutator")&&(i=this.mutateData(i)),s=this.pasteAction.call(this,i),this.dispatchExternal("clipboardPasted",e,i,s)):this.dispatchExternal("clipboardPasteError",e))}mutateData(t){var e=[];return Array.isArray(t)?t.forEach(i=>{e.push(this.table.modules.mutator.transformRow(i,"clipboard"))}):e=t,e}checkPasteOrigin(t){var e=!0,i=this.confirm("clipboard-paste",[t]);return(i||!["DIV","SPAN"].includes(t.target.tagName))&&(e=!1),e}getPasteData(t){var e;return window.clipboardData&&window.clipboardData.getData?e=window.clipboardData.getData("Text"):t.clipboardData&&t.clipboardData.getData?e=t.clipboardData.getData("text/plain"):t.originalEvent&&t.originalEvent.clipboardData.getData&&(e=t.originalEvent.clipboardData.getData("text/plain")),e}}_.moduleName="clipboard";_.pasteActions=C6;_.pasteParsers=E6;class R6{constructor(t){return this._row=t,new Proxy(this,{get:function(e,i,s){return typeof e[i]<"u"?e[i]:e._row.table.componentFunctionBinder.handle("row",e._row,i)}})}getData(t){return this._row.getData(t)}getElement(){return this._row.getElement()}getTable(){return this._row.table}getCells(){var t=[];return this._row.getCells().forEach(function(e){t.push(e.getComponent())}),t}getCell(t){var e=this._row.getCell(t);return e?e.getComponent():!1}_getSelf(){return this._row}}class Ce{constructor(t){return this._cell=t,new Proxy(this,{get:function(e,i,s){return typeof e[i]<"u"?e[i]:e._cell.table.componentFunctionBinder.handle("cell",e._cell,i)}})}getValue(){return this._cell.getValue()}getOldValue(){return this._cell.getOldValue()}getInitialValue(){return this._cell.initialValue}getElement(){return this._cell.getElement()}getRow(){return this._cell.row.getComponent()}getData(t){return this._cell.row.getData(t)}getType(){return"cell"}getField(){return this._cell.column.getField()}getColumn(){return this._cell.column.getComponent()}setValue(t,e){typeof e>"u"&&(e=!0),this._cell.setValue(t,e)}restoreOldValue(){this._cell.setValueActual(this._cell.getOldValue())}restoreInitialValue(){this._cell.setValueActual(this._cell.initialValue)}checkHeight(){this._cell.checkHeight()}getTable(){return this._cell.table}_getSelf(){return this._cell}}class X extends k{constructor(t,e){super(t.table),this.table=t.table,this.column=t,this.row=e,this.element=null,this.value=null,this.initialValue,this.oldValue=null,this.modules={},this.height=null,this.width=null,this.minWidth=null,this.component=null,this.loaded=!1,this.build()}build(){this.generateElement(),this.setWidth(),this._configureCell(),this.setValueActual(this.column.getFieldValue(this.row.data)),this.initialValue=this.value}generateElement(){this.element=document.createElement("div"),this.element.className="tabulator-cell",this.element.setAttribute("role","gridcell")}_configureCell(){var t=this.element,e=this.column.getField(),i={top:"flex-start",bottom:"flex-end",middle:"center"},s={left:"flex-start",right:"flex-end",center:"center"};if(t.style.textAlign=this.column.hozAlign,this.column.vertAlign&&(t.style.display="inline-flex",t.style.alignItems=i[this.column.vertAlign]||"",this.column.hozAlign&&(t.style.justifyContent=s[this.column.hozAlign]||"")),e&&t.setAttribute("tabulator-field",e),this.column.definition.cssClass){var n=this.column.definition.cssClass.split(" ");n.forEach(o=>{t.classList.add(o)})}this.dispatch("cell-init",this),this.column.visible||this.hide()}_generateContents(){var t;switch(t=this.chain("cell-format",this,null,()=>this.element.innerHTML=this.value),typeof t){case"object":if(t instanceof Node){for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);this.element.appendChild(t)}else this.element.innerHTML="",t!=null&&console.warn("Format Error - Formatter has returned a type of object, the only valid formatter object return is an instance of Node, the formatter returned:",t);break;case"undefined":this.element.innerHTML="";break;default:this.element.innerHTML=t}}cellRendered(){this.dispatch("cell-rendered",this)}getElement(t){return this.loaded||(this.loaded=!0,t||this.layoutElement()),this.element}getValue(){return this.value}getOldValue(){return this.oldValue}setValue(t,e,i){var s=this.setValueProcessData(t,e,i);s&&(this.dispatch("cell-value-updated",this),this.cellRendered(),this.column.definition.cellEdited&&this.column.definition.cellEdited.call(this.table,this.getComponent()),this.dispatchExternal("cellEdited",this.getComponent()),this.subscribedExternal("dataChanged")&&this.dispatchExternal("dataChanged",this.table.rowManager.getData()))}setValueProcessData(t,e,i){var s=!1;return(this.value!==t||i)&&(s=!0,e&&(t=this.chain("cell-value-changing",[this,t],null,t))),this.setValueActual(t),s&&this.dispatch("cell-value-changed",this),s}setValueActual(t){this.oldValue=this.value,this.value=t,this.dispatch("cell-value-save-before",this),this.column.setFieldValue(this.row.data,t),this.dispatch("cell-value-save-after",this),this.loaded&&this.layoutElement()}layoutElement(){this._generateContents(),this.dispatch("cell-layout",this)}setWidth(){this.width=this.column.width,this.element.style.width=this.column.widthStyled}clearWidth(){this.width="",this.element.style.width=""}getWidth(){return this.width||this.element.offsetWidth}setMinWidth(){this.minWidth=this.column.minWidth,this.element.style.minWidth=this.column.minWidthStyled}setMaxWidth(){this.maxWidth=this.column.maxWidth,this.element.style.maxWidth=this.column.maxWidthStyled}checkHeight(){this.row.reinitializeHeight()}clearHeight(){this.element.style.height="",this.height=null,this.dispatch("cell-height",this,"")}setHeight(){this.height=this.row.height,this.element.style.height=this.row.heightStyled,this.dispatch("cell-height",this,this.row.heightStyled)}getHeight(){return this.height||this.element.offsetHeight}show(){this.element.style.display=this.column.vertAlign?"inline-flex":""}hide(){this.element.style.display="none"}delete(){this.dispatch("cell-delete",this),!this.table.rowManager.redrawBlock&&this.element.parentNode&&this.element.parentNode.removeChild(this.element),this.element=!1,this.column.deleteCell(this),this.row.deleteCell(this),this.calcs={}}getIndex(){return this.row.getCellIndex(this)}getComponent(){return this.component||(this.component=new Ce(this)),this.component}}class Ee{constructor(t){return this._column=t,this.type="ColumnComponent",new Proxy(this,{get:function(e,i,s){return typeof e[i]<"u"?e[i]:e._column.table.componentFunctionBinder.handle("column",e._column,i)}})}getElement(){return this._column.getElement()}getDefinition(){return this._column.getDefinition()}getField(){return this._column.getField()}getTitleDownload(){return this._column.getTitleDownload()}getCells(){var t=[];return this._column.cells.forEach(function(e){t.push(e.getComponent())}),t}isVisible(){return this._column.visible}show(){this._column.isGroup?this._column.columns.forEach(function(t){t.show()}):this._column.show()}hide(){this._column.isGroup?this._column.columns.forEach(function(t){t.hide()}):this._column.hide()}toggle(){this._column.visible?this.hide():this.show()}delete(){return this._column.delete()}getSubColumns(){var t=[];return this._column.columns.length&&this._column.columns.forEach(function(e){t.push(e.getComponent())}),t}getParentColumn(){return this._column.parent instanceof z?this._column.parent.getComponent():!1}_getSelf(){return this._column}scrollTo(t,e){return this._column.table.columnManager.scrollToColumn(this._column,t,e)}getTable(){return this._column.table}move(t,e){var i=this._column.table.columnManager.findColumn(t);i?this._column.table.columnManager.moveColumn(this._column,i,e):console.warn("Move Error - No matching column found:",i)}getNextColumn(){var t=this._column.nextColumn();return t?t.getComponent():!1}getPrevColumn(){var t=this._column.prevColumn();return t?t.getComponent():!1}updateDefinition(t){return this._column.updateDefinition(t)}getWidth(){return this._column.getWidth()}setWidth(t){var e;return t===!0?e=this._column.reinitializeWidth(!0):e=this._column.setWidth(t),this._column.table.columnManager.rerenderColumns(!0),e}}var Re={title:void 0,field:void 0,columns:void 0,visible:void 0,hozAlign:void 0,vertAlign:void 0,width:void 0,minWidth:40,maxWidth:void 0,maxInitialWidth:void 0,cssClass:void 0,variableHeight:void 0,headerVertical:void 0,headerHozAlign:void 0,headerWordWrap:!1,editableTitle:void 0};class z extends k{constructor(t,e){super(e.table),this.definition=t,this.parent=e,this.type="column",this.columns=[],this.cells=[],this.element=this.createElement(),this.contentElement=!1,this.titleHolderElement=!1,this.titleElement=!1,this.groupElement=this.createGroupElement(),this.isGroup=!1,this.hozAlign="",this.vertAlign="",this.field="",this.fieldStructure="",this.getFieldValue="",this.setFieldValue="",this.titleDownload=null,this.titleFormatterRendered=!1,this.mapDefinitions(),this.setField(this.definition.field),this.modules={},this.width=null,this.widthStyled="",this.maxWidth=null,this.maxWidthStyled="",this.maxInitialWidth=null,this.minWidth=null,this.minWidthStyled="",this.widthFixed=!1,this.visible=!0,this.component=null,this.definition.columns?(this.isGroup=!0,this.definition.columns.forEach((i,s)=>{var n=new z(i,this);this.attachColumn(n)}),this.checkColumnVisibility()):e.registerColumnField(this),this._initialize()}createElement(){var t=document.createElement("div");switch(t.classList.add("tabulator-col"),t.setAttribute("role","columnheader"),t.setAttribute("aria-sort","none"),this.table.options.columnHeaderVertAlign){case"middle":t.style.justifyContent="center";break;case"bottom":t.style.justifyContent="flex-end";break}return t}createGroupElement(){var t=document.createElement("div");return t.classList.add("tabulator-col-group-cols"),t}mapDefinitions(){var t=this.table.options.columnDefaults;if(t)for(let e in t)typeof this.definition[e]>"u"&&(this.definition[e]=t[e]);this.definition=this.table.columnManager.optionsList.generate(z.defaultOptionList,this.definition)}checkDefinition(){Object.keys(this.definition).forEach(t=>{z.defaultOptionList.indexOf(t)===-1&&console.warn("Invalid column definition option in '"+(this.field||this.definition.title)+"' column:",t)})}setField(t){this.field=t,this.fieldStructure=t?this.table.options.nestedFieldSeparator?t.split(this.table.options.nestedFieldSeparator):[t]:[],this.getFieldValue=this.fieldStructure.length>1?this._getNestedData:this._getFlatData,this.setFieldValue=this.fieldStructure.length>1?this._setNestedData:this._setFlatData}registerColumnPosition(t){this.parent.registerColumnPosition(t)}registerColumnField(t){this.parent.registerColumnField(t)}reRegisterPosition(){this.isGroup?this.columns.forEach(function(t){t.reRegisterPosition()}):this.registerColumnPosition(this)}_initialize(){for(var t=this.definition;this.element.firstChild;)this.element.removeChild(this.element.firstChild);t.headerVertical&&(this.element.classList.add("tabulator-col-vertical"),t.headerVertical==="flip"&&this.element.classList.add("tabulator-col-vertical-flip")),this.contentElement=this._buildColumnHeaderContent(),this.element.appendChild(this.contentElement),this.isGroup?this._buildGroupHeader():this._buildColumnHeader(),this.dispatch("column-init",this)}_buildColumnHeader(){var t=this.definition;if(this.dispatch("column-layout",this),typeof t.visible<"u"&&(t.visible?this.show(!0):this.hide(!0)),t.cssClass){var e=t.cssClass.split(" ");e.forEach(i=>{this.element.classList.add(i)})}t.field&&this.element.setAttribute("tabulator-field",t.field),this.setMinWidth(parseInt(t.minWidth)),t.maxInitialWidth&&(this.maxInitialWidth=parseInt(t.maxInitialWidth)),t.maxWidth&&this.setMaxWidth(parseInt(t.maxWidth)),this.reinitializeWidth(),this.hozAlign=this.definition.hozAlign,this.vertAlign=this.definition.vertAlign,this.titleElement.style.textAlign=this.definition.headerHozAlign}_buildColumnHeaderContent(){var t=document.createElement("div");return t.classList.add("tabulator-col-content"),this.titleHolderElement=document.createElement("div"),this.titleHolderElement.classList.add("tabulator-col-title-holder"),t.appendChild(this.titleHolderElement),this.titleElement=this._buildColumnHeaderTitle(),this.titleHolderElement.appendChild(this.titleElement),t}_buildColumnHeaderTitle(){var t=this.definition,e=document.createElement("div");if(e.classList.add("tabulator-col-title"),t.headerWordWrap&&e.classList.add("tabulator-col-title-wrap"),t.editableTitle){var i=document.createElement("input");i.classList.add("tabulator-title-editor"),i.addEventListener("click",s=>{s.stopPropagation(),i.focus()}),i.addEventListener("mousedown",s=>{s.stopPropagation()}),i.addEventListener("change",()=>{t.title=i.value,this.dispatchExternal("columnTitleChanged",this.getComponent())}),e.appendChild(i),t.field?this.langBind("columns|"+t.field,s=>{i.value=s||t.title||"&nbsp;"}):i.value=t.title||"&nbsp;"}else t.field?this.langBind("columns|"+t.field,s=>{this._formatColumnHeaderTitle(e,s||t.title||"&nbsp;")}):this._formatColumnHeaderTitle(e,t.title||"&nbsp;");return e}_formatColumnHeaderTitle(t,e){var i=this.chain("column-format",[this,e,t],null,()=>e);switch(typeof i){case"object":i instanceof Node?t.appendChild(i):(t.innerHTML="",console.warn("Format Error - Title formatter has returned a type of object, the only valid formatter object return is an instance of Node, the formatter returned:",i));break;case"undefined":t.innerHTML="";break;default:t.innerHTML=i}}_buildGroupHeader(){if(this.element.classList.add("tabulator-col-group"),this.element.setAttribute("role","columngroup"),this.element.setAttribute("aria-title",this.definition.title),this.definition.cssClass){var t=this.definition.cssClass.split(" ");t.forEach(e=>{this.element.classList.add(e)})}this.titleElement.style.textAlign=this.definition.headerHozAlign,this.element.appendChild(this.groupElement)}_getFlatData(t){return t[this.field]}_getNestedData(t){var e=t,i=this.fieldStructure,s=i.length,n;for(let o=0;o<s&&(e=e[i[o]],n=e,!!e);o++);return n}_setFlatData(t,e){this.field&&(t[this.field]=e)}_setNestedData(t,e){var i=t,s=this.fieldStructure,n=s.length;for(let o=0;o<n;o++)if(o==n-1)i[s[o]]=e;else{if(!i[s[o]])if(typeof e<"u")i[s[o]]={};else break;i=i[s[o]]}}attachColumn(t){this.groupElement?(this.columns.push(t),this.groupElement.appendChild(t.getElement()),t.columnRendered()):console.warn("Column Warning - Column being attached to another column instead of column group")}verticalAlign(t,e){var i=this.parent.isGroup?this.parent.getGroupElement().clientHeight:e||this.parent.getHeadersElement().clientHeight;this.element.style.height=i+"px",this.dispatch("column-height",this,this.element.style.height),this.isGroup&&(this.groupElement.style.minHeight=i-this.contentElement.offsetHeight+"px"),this.columns.forEach(function(s){s.verticalAlign(t)})}clearVerticalAlign(){this.element.style.paddingTop="",this.element.style.height="",this.element.style.minHeight="",this.groupElement.style.minHeight="",this.columns.forEach(function(t){t.clearVerticalAlign()}),this.dispatch("column-height",this,"")}getElement(){return this.element}getGroupElement(){return this.groupElement}getField(){return this.field}getTitleDownload(){return this.titleDownload}getFirstColumn(){return this.isGroup?this.columns.length?this.columns[0].getFirstColumn():!1:this}getLastColumn(){return this.isGroup?this.columns.length?this.columns[this.columns.length-1].getLastColumn():!1:this}getColumns(t){var e=[];return t?this.columns.forEach(i=>{e.push(i),e=e.concat(i.getColumns(!0))}):e=this.columns,e}getCells(){return this.cells}getTopColumn(){return this.parent.isGroup?this.parent.getTopColumn():this}getDefinition(t){var e=[];return this.isGroup&&t&&(this.columns.forEach(function(i){e.push(i.getDefinition(!0))}),this.definition.columns=e),this.definition}checkColumnVisibility(){var t=!1;this.columns.forEach(function(e){e.visible&&(t=!0)}),t?(this.show(),this.dispatchExternal("columnVisibilityChanged",this.getComponent(),!1)):this.hide()}show(t,e){this.visible||(this.visible=!0,this.element.style.display="",this.parent.isGroup&&this.parent.checkColumnVisibility(),this.cells.forEach(function(i){i.show()}),!this.isGroup&&this.width===null&&this.reinitializeWidth(),this.table.columnManager.verticalAlignHeaders(),this.dispatch("column-show",this,e),t||this.dispatchExternal("columnVisibilityChanged",this.getComponent(),!0),this.parent.isGroup&&this.parent.matchChildWidths(),this.silent||this.table.columnManager.rerenderColumns())}hide(t,e){this.visible&&(this.visible=!1,this.element.style.display="none",this.table.columnManager.verticalAlignHeaders(),this.parent.isGroup&&this.parent.checkColumnVisibility(),this.cells.forEach(function(i){i.hide()}),this.dispatch("column-hide",this,e),t||this.dispatchExternal("columnVisibilityChanged",this.getComponent(),!1),this.parent.isGroup&&this.parent.matchChildWidths(),this.silent||this.table.columnManager.rerenderColumns())}matchChildWidths(){var t=0;this.contentElement&&this.columns.length&&(this.columns.forEach(function(e){e.visible&&(t+=e.getWidth())}),this.contentElement.style.maxWidth=t-1+"px",this.parent.isGroup&&this.parent.matchChildWidths())}removeChild(t){var e=this.columns.indexOf(t);e>-1&&this.columns.splice(e,1),this.columns.length||this.delete()}setWidth(t){this.widthFixed=!0,this.setWidthActual(t)}setWidthActual(t){isNaN(t)&&(t=Math.floor(this.table.element.clientWidth/100*parseInt(t))),t=Math.max(this.minWidth,t),this.maxWidth&&(t=Math.min(this.maxWidth,t)),this.width=t,this.widthStyled=t?t+"px":"",this.element.style.width=this.widthStyled,this.isGroup||this.cells.forEach(function(e){e.setWidth()}),this.parent.isGroup&&this.parent.matchChildWidths(),this.dispatch("column-width",this)}checkCellHeights(){var t=[];this.cells.forEach(function(e){e.row.heightInitialized&&(e.row.getElement().offsetParent!==null?(t.push(e.row),e.row.clearCellHeight()):e.row.heightInitialized=!1)}),t.forEach(function(e){e.calcHeight()}),t.forEach(function(e){e.setCellHeight()})}getWidth(){var t=0;return this.isGroup?this.columns.forEach(function(e){e.visible&&(t+=e.getWidth())}):t=this.width,t}getLeftOffset(){var t=this.element.offsetLeft;return this.parent.isGroup&&(t+=this.parent.getLeftOffset()),t}getHeight(){return Math.ceil(this.element.getBoundingClientRect().height)}setMinWidth(t){this.maxWidth&&t>this.maxWidth&&(t=this.maxWidth,console.warn("the minWidth ("+t+"px) for column '"+this.field+"' cannot be bigger that its maxWidth ("+this.maxWidthStyled+")")),this.minWidth=t,this.minWidthStyled=t?t+"px":"",this.element.style.minWidth=this.minWidthStyled,this.cells.forEach(function(e){e.setMinWidth()})}setMaxWidth(t){this.minWidth&&t<this.minWidth&&(t=this.minWidth,console.warn("the maxWidth ("+t+"px) for column '"+this.field+"' cannot be smaller that its minWidth ("+this.minWidthStyled+")")),this.maxWidth=t,this.maxWidthStyled=t?t+"px":"",this.element.style.maxWidth=this.maxWidthStyled,this.cells.forEach(function(e){e.setMaxWidth()})}delete(){return new Promise((t,e)=>{this.isGroup&&this.columns.forEach(function(s){s.delete()}),this.dispatch("column-delete",this);var i=this.cells.length;for(let s=0;s<i;s++)this.cells[0].delete();this.element.parentNode&&this.element.parentNode.removeChild(this.element),this.element=!1,this.contentElement=!1,this.titleElement=!1,this.groupElement=!1,this.parent.isGroup&&this.parent.removeChild(this),this.table.columnManager.deregisterColumn(this),this.table.columnManager.rerenderColumns(!0),this.dispatch("column-deleted",this),t()})}columnRendered(){this.titleFormatterRendered&&this.titleFormatterRendered(),this.dispatch("column-rendered",this)}generateCell(t){var e=new X(this,t);return this.cells.push(e),e}nextColumn(){var t=this.table.columnManager.findColumnIndex(this);return t>-1?this._nextVisibleColumn(t+1):!1}_nextVisibleColumn(t){var e=this.table.columnManager.getColumnByIndex(t);return!e||e.visible?e:this._nextVisibleColumn(t+1)}prevColumn(){var t=this.table.columnManager.findColumnIndex(this);return t>-1?this._prevVisibleColumn(t-1):!1}_prevVisibleColumn(t){var e=this.table.columnManager.getColumnByIndex(t);return!e||e.visible?e:this._prevVisibleColumn(t-1)}reinitializeWidth(t){this.widthFixed=!1,typeof this.definition.width<"u"&&!t&&this.setWidth(this.definition.width),this.dispatch("column-width-fit-before",this),this.fitToData(t),this.dispatch("column-width-fit-after",this)}fitToData(t){if(!this.isGroup){this.widthFixed||(this.element.style.width="",this.cells.forEach(s=>{s.clearWidth()}));var e=this.element.offsetWidth;if((!this.width||!this.widthFixed)&&(this.cells.forEach(s=>{var n=s.getWidth();n>e&&(e=n)}),e)){var i=e+1;this.maxInitialWidth&&!t&&(i=Math.min(i,this.maxInitialWidth)),this.setWidthActual(i)}}}updateDefinition(t){var e;return this.isGroup||this.parent.isGroup?(console.error("Column Update Error - The updateDefinition function is only available on ungrouped columns"),Promise.reject("Column Update Error - The updateDefinition function is only available on columns, not column groups")):(e=Object.assign({},this.getDefinition()),e=Object.assign(e,t),this.table.columnManager.addColumn(e,!1,this).then(i=>(e.field==this.field&&(this.field=!1),this.delete().then(()=>i.getComponent()))))}deleteCell(t){var e=this.cells.indexOf(t);e>-1&&this.cells.splice(e,1)}getComponent(){return this.component||(this.component=new Ee(this)),this.component}getPosition(){return this.table.columnManager.getVisibleColumnsByIndex().indexOf(this)+1}}z.defaultOptionList=Re;class tt{constructor(t){return this._row=t,new Proxy(this,{get:function(e,i,s){return typeof e[i]<"u"?e[i]:e._row.table.componentFunctionBinder.handle("row",e._row,i)}})}getData(t){return this._row.getData(t)}getElement(){return this._row.getElement()}getCells(){var t=[];return this._row.getCells().forEach(function(e){t.push(e.getComponent())}),t}getCell(t){var e=this._row.getCell(t);return e?e.getComponent():!1}getIndex(){return this._row.getData("data")[this._row.table.options.index]}getPosition(){return this._row.getPosition()}watchPosition(t){return this._row.watchPosition(t)}delete(){return this._row.delete()}scrollTo(t,e){return this._row.table.rowManager.scrollToRow(this._row,t,e)}move(t,e){this._row.moveToRow(t,e)}update(t){return this._row.updateData(t)}normalizeHeight(){this._row.normalizeHeight(!0)}_getSelf(){return this._row}reformat(){return this._row.reinitialize()}getTable(){return this._row.table}getNextRow(){var t=this._row.nextRow();return t&&t.getComponent()}getPrevRow(){var t=this._row.prevRow();return t&&t.getComponent()}}class L extends k{constructor(t,e,i="row"){super(e.table),this.parent=e,this.data={},this.type=i,this.element=!1,this.modules={},this.cells=[],this.height=0,this.heightStyled="",this.manualHeight=!1,this.outerHeight=0,this.initialized=!1,this.heightInitialized=!1,this.position=0,this.positionWatchers=[],this.component=null,this.created=!1,this.setData(t)}create(){this.created||(this.created=!0,this.generateElement())}createElement(){var t=document.createElement("div");t.classList.add("tabulator-row"),t.setAttribute("role","row"),this.element=t}getElement(){return this.create(),this.element}detachElement(){this.element&&this.element.parentNode&&this.element.parentNode.removeChild(this.element)}generateElement(){this.createElement(),this.dispatch("row-init",this)}generateCells(){this.cells=this.table.columnManager.generateCells(this)}initialize(t,e){if(this.create(),!this.initialized||t){for(this.deleteCells();this.element.firstChild;)this.element.removeChild(this.element.firstChild);this.dispatch("row-layout-before",this),this.generateCells(),this.initialized=!0,this.table.columnManager.renderer.renderRowCells(this,e),t&&this.normalizeHeight(),this.dispatch("row-layout",this),this.table.options.rowFormatter&&this.table.options.rowFormatter(this.getComponent()),this.dispatch("row-layout-after",this)}else this.table.columnManager.renderer.rerenderRowCells(this,e)}rendered(){this.cells.forEach(t=>{t.cellRendered()})}reinitializeHeight(){this.heightInitialized=!1,this.element&&this.element.offsetParent!==null&&this.normalizeHeight(!0)}deinitialize(){this.initialized=!1}deinitializeHeight(){this.heightInitialized=!1}reinitialize(t){this.initialized=!1,this.heightInitialized=!1,this.manualHeight||(this.height=0,this.heightStyled=""),this.element&&this.element.offsetParent!==null&&this.initialize(!0),this.dispatch("row-relayout",this)}calcHeight(t){var e=0,i;this.table.options.rowHeight?this.height=this.table.options.rowHeight:(i=this.table.options.resizableRows?this.element.clientHeight:0,this.cells.forEach(function(s){var n=s.getHeight();n>e&&(e=n)}),t?this.height=Math.max(e,i):this.height=this.manualHeight?this.height:Math.max(e,i)),this.heightStyled=this.height?this.height+"px":"",this.outerHeight=this.element.offsetHeight}setCellHeight(){this.cells.forEach(function(t){t.setHeight()}),this.heightInitialized=!0}clearCellHeight(){this.cells.forEach(function(t){t.clearHeight()})}normalizeHeight(t){t&&!this.table.options.rowHeight&&this.clearCellHeight(),this.calcHeight(t),this.setCellHeight()}setHeight(t,e){(this.height!=t||e)&&(this.manualHeight=!0,this.height=t,this.heightStyled=t?t+"px":"",this.setCellHeight(),this.outerHeight=this.element.offsetHeight)}getHeight(){return this.outerHeight}getWidth(){return this.element.offsetWidth}deleteCell(t){var e=this.cells.indexOf(t);e>-1&&this.cells.splice(e,1)}setData(t){this.data=this.chain("row-data-init-before",[this,t],void 0,t),this.dispatch("row-data-init-after",this)}updateData(t){var e=this.element&&C.elVisible(this.element),i={},s;return new Promise((n,o)=>{typeof t=="string"&&(t=JSON.parse(t)),this.dispatch("row-data-save-before",this),this.subscribed("row-data-changing")&&(i=Object.assign(i,this.data),i=Object.assign(i,t)),s=this.chain("row-data-changing",[this,i,t],null,t);for(let r in s)this.data[r]=s[r];this.dispatch("row-data-save-after",this);for(let r in t)this.table.columnManager.getColumnsByFieldRoot(r).forEach(d=>{let c=this.getCell(d.getField());if(c){let p=d.getFieldValue(s);c.getValue()!==p&&(c.setValueProcessData(p),e&&c.cellRendered())}});e?(this.normalizeHeight(!0),this.table.options.rowFormatter&&this.table.options.rowFormatter(this.getComponent())):(this.initialized=!1,this.height=0,this.heightStyled=""),this.dispatch("row-data-changed",this,e,t),this.dispatchExternal("rowUpdated",this.getComponent()),this.subscribedExternal("dataChanged")&&this.dispatchExternal("dataChanged",this.table.rowManager.getData()),n()})}getData(t){return t?this.chain("row-data-retrieve",[this,t],null,this.data):this.data}getCell(t){var e=!1;return t=this.table.columnManager.findColumn(t),!this.initialized&&this.cells.length===0&&this.generateCells(),e=this.cells.find(function(i){return i.column===t}),e}getCellIndex(t){return this.cells.findIndex(function(e){return e===t})}findCell(t){return this.cells.find(e=>e.element===t)}getCells(){return!this.initialized&&this.cells.length===0&&this.generateCells(),this.cells}nextRow(){var t=this.table.rowManager.nextDisplayRow(this,!0);return t||!1}prevRow(){var t=this.table.rowManager.prevDisplayRow(this,!0);return t||!1}moveToRow(t,e){var i=this.table.rowManager.findRow(t);i?(this.table.rowManager.moveRowActual(this,i,!e),this.table.rowManager.refreshActiveData("display",!1,!0)):console.warn("Move Error - No matching row found:",t)}delete(){return this.dispatch("row-delete",this),this.deleteActual(),Promise.resolve()}deleteActual(t){this.detachModules(),this.table.rowManager.deleteRow(this,t),this.deleteCells(),this.initialized=!1,this.heightInitialized=!1,this.element=!1,this.dispatch("row-deleted",this)}detachModules(){this.dispatch("row-deleting",this)}deleteCells(){var t=this.cells.length;for(let e=0;e<t;e++)this.cells[0].delete()}wipe(){if(this.detachModules(),this.deleteCells(),this.element){for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);this.element.parentNode&&this.element.parentNode.removeChild(this.element)}this.element=!1,this.modules={}}isDisplayed(){return this.table.rowManager.getDisplayRows().includes(this)}getPosition(){return this.isDisplayed()?this.position:!1}setPosition(t){t!=this.position&&(this.position=t,this.positionWatchers.forEach(e=>{e(this.position)}))}watchPosition(t){this.positionWatchers.push(t),t(this.position)}getGroup(){return this.modules.group||!1}getComponent(){return this.component||(this.component=new tt(this)),this.component}}var H6={avg:function(h,t,e){var i=0,s=typeof e.precision<"u"?e.precision:2;return h.length&&(i=h.reduce(function(n,o){return Number(n)+Number(o)}),i=i/h.length,i=s!==!1?i.toFixed(s):i),parseFloat(i).toString()},max:function(h,t,e){var i=null,s=typeof e.precision<"u"?e.precision:!1;return h.forEach(function(n){n=Number(n),(n>i||i===null)&&(i=n)}),i!==null?s!==!1?i.toFixed(s):i:""},min:function(h,t,e){var i=null,s=typeof e.precision<"u"?e.precision:!1;return h.forEach(function(n){n=Number(n),(n<i||i===null)&&(i=n)}),i!==null?s!==!1?i.toFixed(s):i:""},sum:function(h,t,e){var i=0,s=typeof e.precision<"u"?e.precision:!1;return h.length&&h.forEach(function(n){n=Number(n),i+=isNaN(n)?0:Number(n)}),s!==!1?i.toFixed(s):i},concat:function(h,t,e){var i=0;return h.length&&(i=h.reduce(function(s,n){return String(s)+String(n)})),i},count:function(h,t,e){var i=0;return h.length&&h.forEach(function(s){s&&i++}),i},unique:function(h,t,e){var i=h.filter((s,n)=>(h||s===0)&&h.indexOf(s)===n);return i.length}};class P extends M{constructor(t){super(t),this.topCalcs=[],this.botCalcs=[],this.genColumn=!1,this.topElement=this.createElement(),this.botElement=this.createElement(),this.topRow=!1,this.botRow=!1,this.topInitialized=!1,this.botInitialized=!1,this.blocked=!1,this.recalcAfterBlock=!1,this.registerTableOption("columnCalcs",!0),this.registerColumnOption("topCalc"),this.registerColumnOption("topCalcParams"),this.registerColumnOption("topCalcFormatter"),this.registerColumnOption("topCalcFormatterParams"),this.registerColumnOption("bottomCalc"),this.registerColumnOption("bottomCalcParams"),this.registerColumnOption("bottomCalcFormatter"),this.registerColumnOption("bottomCalcFormatterParams")}createElement(){var t=document.createElement("div");return t.classList.add("tabulator-calcs-holder"),t}initialize(){this.genColumn=new z({field:"value"},this),this.subscribe("cell-value-changed",this.cellValueChanged.bind(this)),this.subscribe("column-init",this.initializeColumnCheck.bind(this)),this.subscribe("row-deleted",this.rowsUpdated.bind(this)),this.subscribe("scroll-horizontal",this.scrollHorizontal.bind(this)),this.subscribe("row-added",this.rowsUpdated.bind(this)),this.subscribe("column-moved",this.recalcActiveRows.bind(this)),this.subscribe("column-add",this.recalcActiveRows.bind(this)),this.subscribe("data-refreshed",this.recalcActiveRowsRefresh.bind(this)),this.subscribe("table-redraw",this.tableRedraw.bind(this)),this.subscribe("rows-visible",this.visibleRows.bind(this)),this.subscribe("scrollbar-vertical",this.adjustForScrollbar.bind(this)),this.subscribe("redraw-blocked",this.blockRedraw.bind(this)),this.subscribe("redraw-restored",this.restoreRedraw.bind(this)),this.subscribe("table-redrawing",this.resizeHolderWidth.bind(this)),this.subscribe("column-resized",this.resizeHolderWidth.bind(this)),this.subscribe("column-show",this.resizeHolderWidth.bind(this)),this.subscribe("column-hide",this.resizeHolderWidth.bind(this)),this.registerTableFunction("getCalcResults",this.getResults.bind(this)),this.registerTableFunction("recalc",this.userRecalc.bind(this)),this.resizeHolderWidth()}resizeHolderWidth(){this.topElement.style.minWidth=this.table.columnManager.headersElement.offsetWidth+"px"}tableRedraw(t){this.recalc(this.table.rowManager.activeRows),t&&this.redraw()}blockRedraw(){this.blocked=!0,this.recalcAfterBlock=!1}restoreRedraw(){this.blocked=!1,this.recalcAfterBlock&&(this.recalcAfterBlock=!1,this.recalcActiveRowsRefresh())}userRecalc(){this.recalc(this.table.rowManager.activeRows)}blockCheck(){return this.blocked&&(this.recalcAfterBlock=!0),this.blocked}visibleRows(t,e){return this.topRow&&e.unshift(this.topRow),this.botRow&&e.push(this.botRow),e}rowsUpdated(t){this.table.options.groupBy?this.recalcRowGroup(t):this.recalcActiveRows()}recalcActiveRowsRefresh(){this.table.options.groupBy&&this.table.options.dataTreeStartExpanded&&this.table.options.dataTree?this.recalcAll():this.recalcActiveRows()}recalcActiveRows(){this.recalc(this.table.rowManager.activeRows)}cellValueChanged(t){(t.column.definition.topCalc||t.column.definition.bottomCalc)&&(this.table.options.groupBy?((this.table.options.columnCalcs=="table"||this.table.options.columnCalcs=="both")&&this.recalcActiveRows(),this.table.options.columnCalcs!="table"&&this.recalcRowGroup(t.row)):this.recalcActiveRows())}initializeColumnCheck(t){(t.definition.topCalc||t.definition.bottomCalc)&&this.initializeColumn(t)}initializeColumn(t){var e=t.definition,i={topCalcParams:e.topCalcParams||{},botCalcParams:e.bottomCalcParams||{}};if(e.topCalc){switch(typeof e.topCalc){case"string":P.calculations[e.topCalc]?i.topCalc=P.calculations[e.topCalc]:console.warn("Column Calc Error - No such calculation found, ignoring: ",e.topCalc);break;case"function":i.topCalc=e.topCalc;break}i.topCalc&&(t.modules.columnCalcs=i,this.topCalcs.push(t),this.table.options.columnCalcs!="group"&&this.initializeTopRow())}if(e.bottomCalc){switch(typeof e.bottomCalc){case"string":P.calculations[e.bottomCalc]?i.botCalc=P.calculations[e.bottomCalc]:console.warn("Column Calc Error - No such calculation found, ignoring: ",e.bottomCalc);break;case"function":i.botCalc=e.bottomCalc;break}i.botCalc&&(t.modules.columnCalcs=i,this.botCalcs.push(t),this.table.options.columnCalcs!="group"&&this.initializeBottomRow())}}registerColumnField(){}removeCalcs(){var t=!1;this.topInitialized&&(this.topInitialized=!1,this.topElement.parentNode.removeChild(this.topElement),t=!0),this.botInitialized&&(this.botInitialized=!1,this.footerRemove(this.botElement),t=!0),t&&this.table.rowManager.adjustTableSize()}reinitializeCalcs(){this.topCalcs.length&&this.initializeTopRow(),this.botCalcs.length&&this.initializeBottomRow()}initializeTopRow(){var t=document.createDocumentFragment();this.topInitialized||(t.appendChild(document.createElement("br")),t.appendChild(this.topElement),this.table.columnManager.getContentsElement().insertBefore(t,this.table.columnManager.headersElement.nextSibling),this.topInitialized=!0)}initializeBottomRow(){this.botInitialized||(this.footerPrepend(this.botElement),this.botInitialized=!0)}scrollHorizontal(t){this.botInitialized&&this.botRow&&(this.botElement.scrollLeft=t)}recalc(t){var e,i;if(!this.blockCheck()&&(this.topInitialized||this.botInitialized)){if(e=this.rowsToData(t),this.topInitialized){for(this.topRow&&this.topRow.deleteCells(),i=this.generateRow("top",e),this.topRow=i;this.topElement.firstChild;)this.topElement.removeChild(this.topElement.firstChild);this.topElement.appendChild(i.getElement()),i.initialize(!0)}if(this.botInitialized){for(this.botRow&&this.botRow.deleteCells(),i=this.generateRow("bottom",e),this.botRow=i;this.botElement.firstChild;)this.botElement.removeChild(this.botElement.firstChild);this.botElement.appendChild(i.getElement()),i.initialize(!0)}this.table.rowManager.adjustTableSize(),this.table.modExists("frozenColumns")&&this.table.modules.frozenColumns.layout()}}recalcRowGroup(t){this.recalcGroup(this.table.modules.groupRows.getRowGroup(t))}recalcAll(){if((this.topCalcs.length||this.botCalcs.length)&&(this.table.options.columnCalcs!=="group"&&this.recalcActiveRows(),this.table.options.groupBy&&this.table.options.columnCalcs!=="table")){var t=this.table.modules.groupRows.getChildGroups();t.forEach(e=>{this.recalcGroup(e)})}}recalcGroup(t){var e,i;this.blockCheck()||t&&t.calcs&&(t.calcs.bottom&&(e=this.rowsToData(t.rows),i=this.generateRowData("bottom",e),t.calcs.bottom.updateData(i),t.calcs.bottom.reinitialize()),t.calcs.top&&(e=this.rowsToData(t.rows),i=this.generateRowData("top",e),t.calcs.top.updateData(i),t.calcs.top.reinitialize()))}generateTopRow(t){return this.generateRow("top",this.rowsToData(t))}generateBottomRow(t){return this.generateRow("bottom",this.rowsToData(t))}rowsToData(t){var e=[];return t.forEach(i=>{if(e.push(i.getData()),this.table.options.dataTree&&this.table.options.dataTreeChildColumnCalcs&&i.modules.dataTree&&i.modules.dataTree.open){var s=this.rowsToData(this.table.modules.dataTree.getFilteredTreeChildren(i));e=e.concat(s)}}),e}generateRow(t,e){var i=this.generateRowData(t,e),s;return this.table.modExists("mutator")&&this.table.modules.mutator.disable(),s=new L(i,this,"calc"),this.table.modExists("mutator")&&this.table.modules.mutator.enable(),s.getElement().classList.add("tabulator-calcs","tabulator-calcs-"+t),s.component=!1,s.getComponent=()=>(s.component||(s.component=new R6(s)),s.component),s.generateCells=()=>{var n=[];this.table.columnManager.columnsByIndex.forEach(o=>{this.genColumn.setField(o.getField()),this.genColumn.hozAlign=o.hozAlign,o.definition[t+"CalcFormatter"]&&this.table.modExists("format")?this.genColumn.modules.format={formatter:this.table.modules.format.getFormatter(o.definition[t+"CalcFormatter"]),params:o.definition[t+"CalcFormatterParams"]||{}}:this.genColumn.modules.format={formatter:this.table.modules.format.getFormatter("plaintext"),params:{}},this.genColumn.definition.cssClass=o.definition.cssClass;var r=new X(this.genColumn,s);r.getElement(),r.column=o,r.setWidth(),o.cells.push(r),n.push(r),o.visible||r.hide()}),s.cells=n},s}generateRowData(t,e){var i={},s=t=="top"?this.topCalcs:this.botCalcs,n=t=="top"?"topCalc":"botCalc",o,r;return s.forEach(function(l){var d=[];l.modules.columnCalcs&&l.modules.columnCalcs[n]&&(e.forEach(function(c){d.push(l.getFieldValue(c))}),r=n+"Params",o=typeof l.modules.columnCalcs[r]=="function"?l.modules.columnCalcs[r](d,e):l.modules.columnCalcs[r],l.setFieldValue(i,l.modules.columnCalcs[n](d,e,o)))}),i}hasTopCalcs(){return!!this.topCalcs.length}hasBottomCalcs(){return!!this.botCalcs.length}redraw(){this.topRow&&this.topRow.normalizeHeight(!0),this.botRow&&this.botRow.normalizeHeight(!0)}getResults(){var t={},e;return this.table.options.groupBy&&this.table.modExists("groupRows")?(e=this.table.modules.groupRows.getGroups(!0),e.forEach(i=>{t[i.getKey()]=this.getGroupResults(i)})):t={top:this.topRow?this.topRow.getData():{},bottom:this.botRow?this.botRow.getData():{}},t}getGroupResults(t){var e=t._getSelf(),i=t.getSubGroups(),s={},n={};return i.forEach(o=>{s[o.getKey()]=this.getGroupResults(o)}),n={top:e.calcs.top?e.calcs.top.getData():{},bottom:e.calcs.bottom?e.calcs.bottom.getData():{},groups:s},n}adjustForScrollbar(t){this.botRow&&(this.table.rtl?this.botElement.style.paddingLeft=t+"px":this.botElement.style.paddingRight=t+"px")}}P.moduleName="columnCalcs";P.calculations=H6;class He extends M{constructor(t){super(t),this.indent=10,this.field="",this.collapseEl=null,this.expandEl=null,this.branchEl=null,this.elementField=!1,this.startOpen=function(){},this.registerTableOption("dataTree",!1),this.registerTableOption("dataTreeFilter",!0),this.registerTableOption("dataTreeSort",!0),this.registerTableOption("dataTreeElementColumn",!1),this.registerTableOption("dataTreeBranchElement",!0),this.registerTableOption("dataTreeChildIndent",9),this.registerTableOption("dataTreeChildField","_children"),this.registerTableOption("dataTreeCollapseElement",!1),this.registerTableOption("dataTreeExpandElement",!1),this.registerTableOption("dataTreeStartExpanded",!1),this.registerTableOption("dataTreeChildColumnCalcs",!1),this.registerTableOption("dataTreeSelectPropagate",!1),this.registerComponentFunction("row","treeCollapse",this.collapseRow.bind(this)),this.registerComponentFunction("row","treeExpand",this.expandRow.bind(this)),this.registerComponentFunction("row","treeToggle",this.toggleRow.bind(this)),this.registerComponentFunction("row","getTreeParent",this.getTreeParent.bind(this)),this.registerComponentFunction("row","getTreeChildren",this.getRowChildren.bind(this)),this.registerComponentFunction("row","addTreeChild",this.addTreeChildRow.bind(this)),this.registerComponentFunction("row","isTreeExpanded",this.isRowExpanded.bind(this))}initialize(){if(this.table.options.dataTree){var t=null,e=this.table.options;switch(this.field=e.dataTreeChildField,this.indent=e.dataTreeChildIndent,this.options("movableRows")&&console.warn("The movableRows option is not available with dataTree enabled, moving of child rows could result in unpredictable behavior"),e.dataTreeBranchElement?e.dataTreeBranchElement===!0?(this.branchEl=document.createElement("div"),this.branchEl.classList.add("tabulator-data-tree-branch")):typeof e.dataTreeBranchElement=="string"?(t=document.createElement("div"),t.innerHTML=e.dataTreeBranchElement,this.branchEl=t.firstChild):this.branchEl=e.dataTreeBranchElement:(this.branchEl=document.createElement("div"),this.branchEl.classList.add("tabulator-data-tree-branch-empty")),e.dataTreeCollapseElement?typeof e.dataTreeCollapseElement=="string"?(t=document.createElement("div"),t.innerHTML=e.dataTreeCollapseElement,this.collapseEl=t.firstChild):this.collapseEl=e.dataTreeCollapseElement:(this.collapseEl=document.createElement("div"),this.collapseEl.classList.add("tabulator-data-tree-control"),this.collapseEl.tabIndex=0,this.collapseEl.innerHTML="<div class='tabulator-data-tree-control-collapse'></div>"),e.dataTreeExpandElement?typeof e.dataTreeExpandElement=="string"?(t=document.createElement("div"),t.innerHTML=e.dataTreeExpandElement,this.expandEl=t.firstChild):this.expandEl=e.dataTreeExpandElement:(this.expandEl=document.createElement("div"),this.expandEl.classList.add("tabulator-data-tree-control"),this.expandEl.tabIndex=0,this.expandEl.innerHTML="<div class='tabulator-data-tree-control-expand'></div>"),typeof e.dataTreeStartExpanded){case"boolean":this.startOpen=function(i,s){return e.dataTreeStartExpanded};break;case"function":this.startOpen=e.dataTreeStartExpanded;break;default:this.startOpen=function(i,s){return e.dataTreeStartExpanded[s]};break}this.subscribe("row-init",this.initializeRow.bind(this)),this.subscribe("row-layout-after",this.layoutRow.bind(this)),this.subscribe("row-deleted",this.rowDelete.bind(this),0),this.subscribe("row-data-changed",this.rowDataChanged.bind(this),10),this.subscribe("cell-value-updated",this.cellValueChanged.bind(this)),this.subscribe("edit-cancelled",this.cellValueChanged.bind(this)),this.subscribe("column-moving-rows",this.columnMoving.bind(this)),this.subscribe("table-built",this.initializeElementField.bind(this)),this.subscribe("table-redrawing",this.tableRedrawing.bind(this)),this.registerDisplayHandler(this.getRows.bind(this),30)}}tableRedrawing(t){var e;t&&(e=this.table.rowManager.getRows(),e.forEach(i=>{this.reinitializeRowChildren(i)}))}initializeElementField(){var t=this.table.columnManager.getFirstVisibleColumn();this.elementField=this.table.options.dataTreeElementColumn||(t?t.field:!1)}getRowChildren(t){return this.getTreeChildren(t,!0)}columnMoving(){var t=[];return this.table.rowManager.rows.forEach(e=>{t=t.concat(this.getTreeChildren(e,!1,!0))}),t}rowDataChanged(t,e,i){this.redrawNeeded(i)&&(this.initializeRow(t),e&&(this.layoutRow(t),this.refreshData(!0)))}cellValueChanged(t){var e=t.column.getField();e===this.elementField&&this.layoutRow(t.row)}initializeRow(t){var e=t.getData()[this.field],i=Array.isArray(e),s=i||!i&&typeof e=="object"&&e!==null;!s&&t.modules.dataTree&&t.modules.dataTree.branchEl&&t.modules.dataTree.branchEl.parentNode.removeChild(t.modules.dataTree.branchEl),!s&&t.modules.dataTree&&t.modules.dataTree.controlEl&&t.modules.dataTree.controlEl.parentNode.removeChild(t.modules.dataTree.controlEl),t.modules.dataTree={index:t.modules.dataTree?t.modules.dataTree.index:0,open:s?t.modules.dataTree?t.modules.dataTree.open:this.startOpen(t.getComponent(),0):!1,controlEl:t.modules.dataTree&&s?t.modules.dataTree.controlEl:!1,branchEl:t.modules.dataTree&&s?t.modules.dataTree.branchEl:!1,parent:t.modules.dataTree?t.modules.dataTree.parent:!1,children:s}}reinitializeRowChildren(t){var e=this.getTreeChildren(t,!1,!0);e.forEach(function(i){i.reinitialize(!0)})}layoutRow(t){var e=this.elementField?t.getCell(this.elementField):t.getCells()[0],i=e.getElement(),s=t.modules.dataTree;s.branchEl&&(s.branchEl.parentNode&&s.branchEl.parentNode.removeChild(s.branchEl),s.branchEl=!1),s.controlEl&&(s.controlEl.parentNode&&s.controlEl.parentNode.removeChild(s.controlEl),s.controlEl=!1),this.generateControlElement(t,i),t.getElement().classList.add("tabulator-tree-level-"+s.index),s.index&&(this.branchEl?(s.branchEl=this.branchEl.cloneNode(!0),i.insertBefore(s.branchEl,i.firstChild),this.table.rtl?s.branchEl.style.marginRight=(s.branchEl.offsetWidth+s.branchEl.style.marginLeft)*(s.index-1)+s.index*this.indent+"px":s.branchEl.style.marginLeft=(s.branchEl.offsetWidth+s.branchEl.style.marginRight)*(s.index-1)+s.index*this.indent+"px"):this.table.rtl?i.style.paddingRight=parseInt(window.getComputedStyle(i,null).getPropertyValue("padding-right"))+s.index*this.indent+"px":i.style.paddingLeft=parseInt(window.getComputedStyle(i,null).getPropertyValue("padding-left"))+s.index*this.indent+"px")}generateControlElement(t,e){var i=t.modules.dataTree,s=i.controlEl;e=e||t.getCells()[0].getElement(),i.children!==!1&&(i.open?(i.controlEl=this.collapseEl.cloneNode(!0),i.controlEl.addEventListener("click",n=>{n.stopPropagation(),this.collapseRow(t)})):(i.controlEl=this.expandEl.cloneNode(!0),i.controlEl.addEventListener("click",n=>{n.stopPropagation(),this.expandRow(t)})),i.controlEl.addEventListener("mousedown",n=>{n.stopPropagation()}),s&&s.parentNode===e?s.parentNode.replaceChild(i.controlEl,s):e.insertBefore(i.controlEl,e.firstChild))}getRows(t){var e=[];return t.forEach((i,s)=>{var n,o;e.push(i),i instanceof L&&(i.create(),n=i.modules.dataTree,!n.index&&n.children!==!1&&(o=this.getChildren(i),o.forEach(r=>{r.create(),e.push(r)})))}),e}getChildren(t,e){var i=t.modules.dataTree,s=[],n=[];return i.children!==!1&&(i.open||e)&&(Array.isArray(i.children)||(i.children=this.generateChildren(t)),this.table.modExists("filter")&&this.table.options.dataTreeFilter?s=this.table.modules.filter.filter(i.children):s=i.children,this.table.modExists("sort")&&this.table.options.dataTreeSort&&this.table.modules.sort.sort(s),s.forEach(o=>{n.push(o);var r=this.getChildren(o);r.forEach(l=>{n.push(l)})})),n}generateChildren(t){var e=[],i=t.getData()[this.field];return Array.isArray(i)||(i=[i]),i.forEach(s=>{var n=new L(s||{},this.table.rowManager);n.create(),n.modules.dataTree.index=t.modules.dataTree.index+1,n.modules.dataTree.parent=t,n.modules.dataTree.children&&(n.modules.dataTree.open=this.startOpen(n.getComponent(),n.modules.dataTree.index)),e.push(n)}),e}expandRow(t,e){var i=t.modules.dataTree;i.children!==!1&&(i.open=!0,t.reinitialize(),this.refreshData(!0),this.dispatchExternal("dataTreeRowExpanded",t.getComponent(),t.modules.dataTree.index))}collapseRow(t){var e=t.modules.dataTree;e.children!==!1&&(e.open=!1,t.reinitialize(),this.refreshData(!0),this.dispatchExternal("dataTreeRowCollapsed",t.getComponent(),t.modules.dataTree.index))}toggleRow(t){var e=t.modules.dataTree;e.children!==!1&&(e.open?this.collapseRow(t):this.expandRow(t))}isRowExpanded(t){return t.modules.dataTree.open}getTreeParent(t){return t.modules.dataTree.parent?t.modules.dataTree.parent.getComponent():!1}getTreeParentRoot(t){return t.modules.dataTree&&t.modules.dataTree.parent?this.getTreeParentRoot(t.modules.dataTree.parent):t}getFilteredTreeChildren(t){var e=t.modules.dataTree,i=[],s;return e.children&&(Array.isArray(e.children)||(e.children=this.generateChildren(t)),this.table.modExists("filter")&&this.table.options.dataTreeFilter?s=this.table.modules.filter.filter(e.children):s=e.children,s.forEach(n=>{n instanceof L&&i.push(n)})),i}rowDelete(t){var e=t.modules.dataTree.parent,i;e&&(i=this.findChildIndex(t,e),i!==!1&&e.data[this.field].splice(i,1),e.data[this.field].length||delete e.data[this.field],this.initializeRow(e),this.layoutRow(e)),this.refreshData(!0)}addTreeChildRow(t,e,i,s){var n=!1;typeof e=="string"&&(e=JSON.parse(e)),Array.isArray(t.data[this.field])||(t.data[this.field]=[],t.modules.dataTree.open=this.startOpen(t.getComponent(),t.modules.dataTree.index)),typeof s<"u"&&(n=this.findChildIndex(s,t),n!==!1&&t.data[this.field].splice(i?n:n+1,0,e)),n===!1&&(i?t.data[this.field].unshift(e):t.data[this.field].push(e)),this.initializeRow(t),this.layoutRow(t),this.refreshData(!0)}findChildIndex(t,e){var i=!1;return typeof t=="object"?t instanceof L?i=t.data:t instanceof tt?i=t._getSelf().data:typeof HTMLElement<"u"&&t instanceof HTMLElement?e.modules.dataTree&&(i=e.modules.dataTree.children.find(s=>s instanceof L?s.element===t:!1),i&&(i=i.data)):t===null&&(i=!1):typeof t>"u"?i=!1:i=e.data[this.field].find(s=>s.data[this.table.options.index]==t),i&&(Array.isArray(e.data[this.field])&&(i=e.data[this.field].indexOf(i)),i==-1&&(i=!1)),i}getTreeChildren(t,e,i){var s=t.modules.dataTree,n=[];return s&&s.children&&(Array.isArray(s.children)||(s.children=this.generateChildren(t)),s.children.forEach(o=>{o instanceof L&&(n.push(e?o.getComponent():o),i&&(n=n.concat(this.getTreeChildren(o,e,i))))})),n}getChildField(){return this.field}redrawNeeded(t){return(this.field?typeof t[this.field]<"u":!1)||(this.elementField?typeof t[this.elementField]<"u":!1)}}He.moduleName="dataTree";function L6(h,t={},e){var i=t.delimiter?t.delimiter:",",s=[],n=[];h.forEach(o=>{var r=[];switch(o.type){case"group":console.warn("Download Warning - CSV downloader cannot process row groups");break;case"calc":console.warn("Download Warning - CSV downloader cannot process column calculations");break;case"header":o.columns.forEach((l,d)=>{l&&l.depth===1&&(n[d]=typeof l.value>"u"||l.value===null?"":'"'+String(l.value).split('"').join('""')+'"')});break;case"row":o.columns.forEach(l=>{if(l){switch(typeof l.value){case"object":l.value=l.value!==null?JSON.stringify(l.value):"";break;case"undefined":l.value="";break}r.push('"'+String(l.value).split('"').join('""')+'"')}}),s.push(r.join(i));break}}),n.length&&s.unshift(n.join(i)),s=s.join(`
`),t.bom&&(s="\uFEFF"+s),e(s,"text/csv")}function k6(h,t,e){var i=[];h.forEach(s=>{var n={};switch(s.type){case"header":break;case"group":console.warn("Download Warning - JSON downloader cannot process row groups");break;case"calc":console.warn("Download Warning - JSON downloader cannot process column calculations");break;case"row":s.columns.forEach(o=>{o&&(n[o.component.getTitleDownload()||o.component.getField()]=o.value)}),i.push(n);break}}),i=JSON.stringify(i,null,"	"),e(i,"application/json")}function T6(h,t={},e){var i=[],s=[],n={},o=t.rowGroupStyles||{fontStyle:"bold",fontSize:12,cellPadding:6,fillColor:220},r=t.rowCalcStyles||{fontStyle:"bold",fontSize:10,cellPadding:4,fillColor:232},l=t.jsPDF||{},d=t.title?t.title:"";l.orientation||(l.orientation=t.orientation||"landscape"),l.unit||(l.unit="pt"),h.forEach(u=>{switch(u.type){case"header":i.push(c(u));break;case"group":s.push(c(u,o));break;case"calc":s.push(c(u,r));break;case"row":s.push(c(u));break}});function c(u,g){var v=[];return u.columns.forEach(f=>{var b;if(f){switch(typeof f.value){case"object":f.value=f.value!==null?JSON.stringify(f.value):"";break;case"undefined":f.value="";break}b={content:f.value,colSpan:f.width,rowSpan:f.height},g&&(b.styles=g),v.push(b)}}),v}var p=new jspdf.jsPDF(l);t.autoTable&&(typeof t.autoTable=="function"?n=t.autoTable(p)||{}:n=t.autoTable),d&&(n.didDrawPage=function(u){p.text(d,40,30)}),n.head=i,n.body=s,p.autoTable(n),t.documentProcessing&&t.documentProcessing(p),e(p.output("arraybuffer"),"application/pdf")}function S6(h,t,e){var i=this,s=t.sheetName||"Sheet1",n=XLSX.utils.book_new(),o=new k(this),r="compress"in t?t.compress:!0,l=t.writeOptions||{bookType:"xlsx",bookSST:!0,compression:r},d;l.type="binary",n.SheetNames=[],n.Sheets={};function c(){var g=[],v=[],f={},b={s:{c:0,r:0},e:{c:h[0]?h[0].columns.reduce((m,y)=>m+(y&&y.width?y.width:1),0):0,r:h.length}};return h.forEach((m,y)=>{var E=[];m.columns.forEach(function(x,R){x?(E.push(!(x.value instanceof Date)&&typeof x.value=="object"?JSON.stringify(x.value):x.value),(x.width>1||x.height>-1)&&(x.height>1||x.width>1)&&v.push({s:{r:y,c:R},e:{r:y+x.height-1,c:R+x.width-1}})):E.push("")}),g.push(E)}),XLSX.utils.sheet_add_aoa(f,g),f["!ref"]=XLSX.utils.encode_range(b),v.length&&(f["!merges"]=v),f}if(t.sheetOnly){e(c());return}if(t.sheets)for(var p in t.sheets)t.sheets[p]===!0?(n.SheetNames.push(p),n.Sheets[p]=c()):(n.SheetNames.push(p),o.commsSend(t.sheets[p],"download","intercept",{type:"xlsx",options:{sheetOnly:!0},active:i.active,intercept:function(g){n.Sheets[p]=g}}));else n.SheetNames.push(s),n.Sheets[s]=c();t.documentProcessing&&(n=t.documentProcessing(n));function u(g){for(var v=new ArrayBuffer(g.length),f=new Uint8Array(v),b=0;b!=g.length;++b)f[b]=g.charCodeAt(b)&255;return v}d=XLSX.write(n,l),e(u(d),"application/octet-stream")}function V6(h,t,e){this.modExists("export",!0)&&e(this.modules.export.generateHTMLTable(h),"text/html")}function A6(h,t,e){const i=[];h.forEach(s=>{const n={};switch(s.type){case"header":break;case"group":console.warn("Download Warning - JSON downloader cannot process row groups");break;case"calc":console.warn("Download Warning - JSON downloader cannot process column calculations");break;case"row":s.columns.forEach(o=>{o&&(n[o.component.getTitleDownload()||o.component.getField()]=o.value)}),i.push(JSON.stringify(n));break}}),e(i.join(`
`),"application/x-ndjson")}var D6={csv:L6,json:k6,jsonLines:A6,pdf:T6,xlsx:S6,html:V6};class j extends M{constructor(t){super(t),this.registerTableOption("downloadEncoder",function(e,i){return new Blob([e],{type:i})}),this.registerTableOption("downloadReady",void 0),this.registerTableOption("downloadConfig",{}),this.registerTableOption("downloadRowRange","active"),this.registerColumnOption("download"),this.registerColumnOption("titleDownload")}initialize(){this.deprecatedOptionsCheck(),this.registerTableFunction("download",this.download.bind(this)),this.registerTableFunction("downloadToTab",this.downloadToTab.bind(this))}deprecatedOptionsCheck(){this.deprecationCheck("downloadReady","downloadEncoder")}downloadToTab(t,e,i,s){this.download(t,e,i,s,!0)}download(t,e,i,s,n){var o=!1;function r(d,c){n?n===!0?this.triggerDownload(d,c,t,e,!0):n(d):this.triggerDownload(d,c,t,e)}if(typeof t=="function"?o=t:j.downloaders[t]?o=j.downloaders[t]:console.warn("Download Error - No such download type found: ",t),o){var l=this.generateExportList(s);o.call(this.table,l,i||{},r.bind(this))}}generateExportList(t){var e=this.table.modules.export.generateExportList(this.table.options.downloadConfig,!1,t||this.table.options.downloadRowRange,"download"),i=this.table.options.groupHeaderDownload;return i&&!Array.isArray(i)&&(i=[i]),e.forEach(s=>{var n;s.type==="group"&&(n=s.columns[0],i&&i[s.indent]&&(n.value=i[s.indent](n.value,s.component._group.getRowCount(),s.component._group.getData(),s.component)))}),e}triggerDownload(t,e,i,s,n){var o=document.createElement("a"),r=this.table.options.downloadEncoder(t,e);r&&(n?window.open(window.URL.createObjectURL(r)):(s=s||"Tabulator."+(typeof i=="function"?"txt":i),navigator.msSaveOrOpenBlob?navigator.msSaveOrOpenBlob(r,s):(o.setAttribute("href",window.URL.createObjectURL(r)),o.setAttribute("download",s),o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o))),this.dispatchExternal("downloadComplete"))}commsReceived(t,e,i){switch(e){case"intercept":this.download(i.type,"",i.options,i.active,i.intercept);break}}}j.moduleName="download";j.downloaders=D6;function et(h,t){var e=t.mask,i=typeof t.maskLetterChar<"u"?t.maskLetterChar:"A",s=typeof t.maskNumberChar<"u"?t.maskNumberChar:"9",n=typeof t.maskWildcardChar<"u"?t.maskWildcardChar:"*";function o(r){var l=e[r];typeof l<"u"&&l!==n&&l!==i&&l!==s&&(h.value=h.value+""+l,o(r+1))}h.addEventListener("keydown",r=>{var l=h.value.length,d=r.key;if(r.keyCode>46&&!r.ctrlKey&&!r.metaKey){if(l>=e.length)return r.preventDefault(),r.stopPropagation(),!1;switch(e[l]){case i:if(d.toUpperCase()==d.toLowerCase())return r.preventDefault(),r.stopPropagation(),!1;break;case s:if(isNaN(d))return r.preventDefault(),r.stopPropagation(),!1;break;case n:break;default:if(d!==e[l])return r.preventDefault(),r.stopPropagation(),!1}}}),h.addEventListener("keyup",r=>{r.keyCode>46&&t.maskAutoFill&&o(h.value.length)}),h.placeholder||(h.placeholder=e),t.maskAutoFill&&o(h.value.length)}function z6(h,t,e,i,s){var n=h.getValue(),o=document.createElement("input");if(o.setAttribute("type",s.search?"search":"text"),o.style.padding="4px",o.style.width="100%",o.style.boxSizing="border-box",s.elementAttributes&&typeof s.elementAttributes=="object")for(let l in s.elementAttributes)l.charAt(0)=="+"?(l=l.slice(1),o.setAttribute(l,o.getAttribute(l)+s.elementAttributes["+"+l])):o.setAttribute(l,s.elementAttributes[l]);o.value=typeof n<"u"?n:"",t(function(){h.getType()==="cell"&&(o.focus({preventScroll:!0}),o.style.height="100%",s.selectContents&&o.select())});function r(l){(n===null||typeof n>"u")&&o.value!==""||o.value!==n?e(o.value)&&(n=o.value):i()}return o.addEventListener("change",r),o.addEventListener("blur",r),o.addEventListener("keydown",function(l){switch(l.keyCode){case 13:r();break;case 27:i();break;case 35:case 36:l.stopPropagation();break}}),s.mask&&et(o,s),o}function F6(h,t,e,i,s){var n=h.getValue(),o=s.verticalNavigation||"hybrid",r=String(n!==null&&typeof n<"u"?n:""),l=document.createElement("textarea"),d=0;if(l.style.display="block",l.style.padding="2px",l.style.height="100%",l.style.width="100%",l.style.boxSizing="border-box",l.style.whiteSpace="pre-wrap",l.style.resize="none",s.elementAttributes&&typeof s.elementAttributes=="object")for(let p in s.elementAttributes)p.charAt(0)=="+"?(p=p.slice(1),l.setAttribute(p,l.getAttribute(p)+s.elementAttributes["+"+p])):l.setAttribute(p,s.elementAttributes[p]);l.value=r,t(function(){h.getType()==="cell"&&(l.focus({preventScroll:!0}),l.style.height="100%",l.scrollHeight,l.style.height=l.scrollHeight+"px",h.getRow().normalizeHeight(),s.selectContents&&l.select())});function c(p){(n===null||typeof n>"u")&&l.value!==""||l.value!==n?(e(l.value)&&(n=l.value),setTimeout(function(){h.getRow().normalizeHeight()},300)):i()}return l.addEventListener("change",c),l.addEventListener("blur",c),l.addEventListener("keyup",function(){l.style.height="";var p=l.scrollHeight;l.style.height=p+"px",p!=d&&(d=p,h.getRow().normalizeHeight())}),l.addEventListener("keydown",function(p){switch(p.keyCode){case 13:p.shiftKey&&s.shiftEnterSubmit&&c();break;case 27:i();break;case 38:(o=="editor"||o=="hybrid"&&l.selectionStart)&&(p.stopImmediatePropagation(),p.stopPropagation());break;case 40:(o=="editor"||o=="hybrid"&&l.selectionStart!==l.value.length)&&(p.stopImmediatePropagation(),p.stopPropagation());break;case 35:case 36:p.stopPropagation();break}}),s.mask&&et(l,s),l}function P6(h,t,e,i,s){var n=h.getValue(),o=s.verticalNavigation||"editor",r=document.createElement("input");if(r.setAttribute("type","number"),typeof s.max<"u"&&r.setAttribute("max",s.max),typeof s.min<"u"&&r.setAttribute("min",s.min),typeof s.step<"u"&&r.setAttribute("step",s.step),r.style.padding="4px",r.style.width="100%",r.style.boxSizing="border-box",s.elementAttributes&&typeof s.elementAttributes=="object")for(let c in s.elementAttributes)c.charAt(0)=="+"?(c=c.slice(1),r.setAttribute(c,r.getAttribute(c)+s.elementAttributes["+"+c])):r.setAttribute(c,s.elementAttributes[c]);r.value=n;var l=function(c){d()};t(function(){h.getType()==="cell"&&(r.removeEventListener("blur",l),r.focus({preventScroll:!0}),r.style.height="100%",r.addEventListener("blur",l),s.selectContents&&r.select())});function d(){var c=r.value;!isNaN(c)&&c!==""&&(c=Number(c)),c!==n?e(c)&&(n=c):i()}return r.addEventListener("keydown",function(c){switch(c.keyCode){case 13:d();break;case 27:i();break;case 38:case 40:o=="editor"&&(c.stopImmediatePropagation(),c.stopPropagation());break;case 35:case 36:c.stopPropagation();break}}),s.mask&&et(r,s),r}function O6(h,t,e,i,s){var n=h.getValue(),o=document.createElement("input");if(o.setAttribute("type","range"),typeof s.max<"u"&&o.setAttribute("max",s.max),typeof s.min<"u"&&o.setAttribute("min",s.min),typeof s.step<"u"&&o.setAttribute("step",s.step),o.style.padding="4px",o.style.width="100%",o.style.boxSizing="border-box",s.elementAttributes&&typeof s.elementAttributes=="object")for(let l in s.elementAttributes)l.charAt(0)=="+"?(l=l.slice(1),o.setAttribute(l,o.getAttribute(l)+s.elementAttributes["+"+l])):o.setAttribute(l,s.elementAttributes[l]);o.value=n,t(function(){h.getType()==="cell"&&(o.focus({preventScroll:!0}),o.style.height="100%")});function r(){var l=o.value;!isNaN(l)&&l!==""&&(l=Number(l)),l!=n?e(l)&&(n=l):i()}return o.addEventListener("blur",function(l){r()}),o.addEventListener("keydown",function(l){switch(l.keyCode){case 13:r();break;case 27:i();break}}),o}function B6(h,t,e,i,s){var n=s.format,o=s.verticalNavigation||"editor",r=n?window.DateTime||luxon.DateTime:null,l=h.getValue(),d=document.createElement("input");function c(u){var g;return r.isDateTime(u)?g=u:n==="iso"?g=r.fromISO(String(u)):g=r.fromFormat(String(u),n),g.toFormat("yyyy-MM-dd")}if(d.type="date",d.style.padding="4px",d.style.width="100%",d.style.boxSizing="border-box",s.max&&d.setAttribute("max",n?c(s.max):s.max),s.min&&d.setAttribute("min",n?c(s.min):s.min),s.elementAttributes&&typeof s.elementAttributes=="object")for(let u in s.elementAttributes)u.charAt(0)=="+"?(u=u.slice(1),d.setAttribute(u,d.getAttribute(u)+s.elementAttributes["+"+u])):d.setAttribute(u,s.elementAttributes[u]);l=typeof l<"u"?l:"",n&&(r?l=c(l):console.error("Editor Error - 'date' editor 'format' param is dependant on luxon.js")),d.value=l,t(function(){h.getType()==="cell"&&(d.focus({preventScroll:!0}),d.style.height="100%",s.selectContents&&d.select())});function p(){var u=d.value,g;if((l===null||typeof l>"u")&&u!==""||u!==l){if(u&&n)switch(g=r.fromFormat(String(u),"yyyy-MM-dd"),n){case!0:u=g;break;case"iso":u=g.toISO();break;default:u=g.toFormat(n)}e(u)&&(l=d.value)}else i()}return d.addEventListener("blur",function(u){(u.relatedTarget||u.rangeParent||u.explicitOriginalTarget!==d)&&p()}),d.addEventListener("keydown",function(u){switch(u.keyCode){case 13:p();break;case 27:i();break;case 35:case 36:u.stopPropagation();break;case 38:case 40:o=="editor"&&(u.stopImmediatePropagation(),u.stopPropagation());break}}),d}function _6(h,t,e,i,s){var n=s.format,o=s.verticalNavigation||"editor",r=n?window.DateTime||luxon.DateTime:null,l,d=h.getValue(),c=document.createElement("input");if(c.type="time",c.style.padding="4px",c.style.width="100%",c.style.boxSizing="border-box",s.elementAttributes&&typeof s.elementAttributes=="object")for(let u in s.elementAttributes)u.charAt(0)=="+"?(u=u.slice(1),c.setAttribute(u,c.getAttribute(u)+s.elementAttributes["+"+u])):c.setAttribute(u,s.elementAttributes[u]);d=typeof d<"u"?d:"",n&&(r?(r.isDateTime(d)?l=d:n==="iso"?l=r.fromISO(String(d)):l=r.fromFormat(String(d),n),d=l.toFormat("HH:mm")):console.error("Editor Error - 'date' editor 'format' param is dependant on luxon.js")),console.log("val",d),c.value=d,t(function(){h.getType()=="cell"&&(c.focus({preventScroll:!0}),c.style.height="100%",s.selectContents&&c.select())});function p(){var u=c.value,g;if((d===null||typeof d>"u")&&u!==""||u!==d){if(u&&n)switch(g=r.fromFormat(String(u),"hh:mm"),n){case!0:u=g;break;case"iso":u=g.toISO();break;default:u=g.toFormat(n)}e(u)&&(d=c.value)}else i()}return c.addEventListener("blur",function(u){(u.relatedTarget||u.rangeParent||u.explicitOriginalTarget!==c)&&p()}),c.addEventListener("keydown",function(u){switch(u.keyCode){case 13:p();break;case 27:i();break;case 35:case 36:u.stopPropagation();break;case 38:case 40:o=="editor"&&(u.stopImmediatePropagation(),u.stopPropagation());break}}),c}function I6(h,t,e,i,s){var n=s.format,o=s.verticalNavigation||"editor",r=n?window.DateTime||luxon.DateTime:null,l,d=h.getValue(),c=document.createElement("input");if(c.type="datetime-local",c.style.padding="4px",c.style.width="100%",c.style.boxSizing="border-box",s.elementAttributes&&typeof s.elementAttributes=="object")for(let u in s.elementAttributes)u.charAt(0)=="+"?(u=u.slice(1),c.setAttribute(u,c.getAttribute(u)+s.elementAttributes["+"+u])):c.setAttribute(u,s.elementAttributes[u]);d=typeof d<"u"?d:"",n&&(r?(r.isDateTime(d)?l=d:n==="iso"?l=r.fromISO(String(d)):l=r.fromFormat(String(d),n),d=l.toFormat("yyyy-MM-dd")+"T"+l.toFormat("HH:mm")):console.error("Editor Error - 'date' editor 'format' param is dependant on luxon.js")),c.value=d,t(function(){h.getType()==="cell"&&(c.focus({preventScroll:!0}),c.style.height="100%",s.selectContents&&c.select())});function p(){var u=c.value,g;if((d===null||typeof d>"u")&&u!==""||u!==d){if(u&&n)switch(g=r.fromISO(String(u)),n){case!0:u=g;break;case"iso":u=g.toISO();break;default:u=g.toFormat(n)}e(u)&&(d=c.value)}else i()}return c.addEventListener("blur",function(u){(u.relatedTarget||u.rangeParent||u.explicitOriginalTarget!==c)&&p()}),c.addEventListener("keydown",function(u){switch(u.keyCode){case 13:p();break;case 27:i();break;case 35:case 36:u.stopPropagation();break;case 38:case 40:o=="editor"&&(u.stopImmediatePropagation(),u.stopPropagation());break}}),c}class ct{constructor(t,e,i,s,n,o){this.edit=t,this.table=t.table,this.cell=e,this.params=this._initializeParams(o),this.data=[],this.displayItems=[],this.currentItems=[],this.focusedItem=null,this.input=this._createInputElement(),this.listEl=this._createListElement(),this.initialValues=null,this.isFilter=e.getType()==="header",this.filterTimeout=null,this.filtered=!1,this.typing=!1,this.values=[],this.popup=null,this.listIteration=0,this.lastAction="",this.filterTerm="",this.blurable=!0,this.actions={success:s,cancel:n},this._deprecatedOptionsCheck(),this._initializeValue(),i(this._onRendered.bind(this))}_deprecatedOptionsCheck(){this.params.listItemFormatter&&this.cell.getTable().deprecationAdvisor.msg("The listItemFormatter editor param has been deprecated, please see the latest editor documentation for updated options"),this.params.sortValuesList&&this.cell.getTable().deprecationAdvisor.msg("The sortValuesList editor param has been deprecated, please see the latest editor documentation for updated options"),this.params.searchFunc&&this.cell.getTable().deprecationAdvisor.msg("The searchFunc editor param has been deprecated, please see the latest editor documentation for updated options"),this.params.searchingPlaceholder&&this.cell.getTable().deprecationAdvisor.msg("The searchingPlaceholder editor param has been deprecated, please see the latest editor documentation for updated options")}_initializeValue(){var t=this.cell.getValue();typeof t>"u"&&typeof this.params.defaultValue<"u"&&(t=this.params.defaultValue),this.initialValues=this.params.multiselect?t:[t],this.isFilter&&(this.input.value=this.initialValues?this.initialValues.join(","):"",this.headerFilterInitialListGen())}_onRendered(){var t=this.cell.getElement();function e(i){i.stopPropagation()}this.isFilter||(this.input.style.height="100%",this.input.focus({preventScroll:!0})),t.addEventListener("click",e),setTimeout(()=>{t.removeEventListener("click",e)},1e3),this.input.addEventListener("mousedown",this._preventPopupBlur.bind(this))}_createListElement(){var t=document.createElement("div");return t.classList.add("tabulator-edit-list"),t.addEventListener("mousedown",this._preventBlur.bind(this)),t.addEventListener("keydown",this._inputKeyDown.bind(this)),t}_setListWidth(){var t=this.isFilter?this.input:this.cell.getElement();this.listEl.style.minWidth=t.offsetWidth+"px",this.params.maxWidth&&(this.params.maxWidth===!0?this.listEl.style.maxWidth=t.offsetWidth+"px":typeof this.params.maxWidth=="number"?this.listEl.style.maxWidth=this.params.maxWidth+"px":this.listEl.style.maxWidth=this.params.maxWidth)}_createInputElement(){var t=this.params.elementAttributes,e=document.createElement("input");if(e.setAttribute("type",this.params.clearable?"search":"text"),e.style.padding="4px",e.style.width="100%",e.style.boxSizing="border-box",this.params.autocomplete||(e.style.cursor="default",e.style.caretColor="transparent"),t&&typeof t=="object")for(let i in t)i.charAt(0)=="+"?(i=i.slice(1),e.setAttribute(i,e.getAttribute(i)+t["+"+i])):e.setAttribute(i,t[i]);return this.params.mask&&et(e,this.params),this._bindInputEvents(e),e}_initializeParams(t){var e=["values","valuesURL","valuesLookup"],i;return t=Object.assign({},t),t.verticalNavigation=t.verticalNavigation||"editor",t.placeholderLoading=typeof t.placeholderLoading>"u"?"Searching ...":t.placeholderLoading,t.placeholderEmpty=typeof t.placeholderEmpty>"u"?"No Results Found":t.placeholderEmpty,t.filterDelay=typeof t.filterDelay>"u"?300:t.filterDelay,t.emptyValue=Object.keys(t).includes("emptyValue")?t.emptyValue:"",i=Object.keys(t).filter(s=>e.includes(s)).length,i?i>1&&console.warn("list editor config error - only one of the values, valuesURL, or valuesLookup options can be set on the same editor"):console.warn("list editor config error - either the values, valuesURL, or valuesLookup option must be set"),t.autocomplete?t.multiselect&&(t.multiselect=!1,console.warn("list editor config error - multiselect option is not available when autocomplete is enabled")):(t.freetext&&(t.freetext=!1,console.warn("list editor config error - freetext option is only available when autocomplete is enabled")),t.filterFunc&&(t.filterFunc=!1,console.warn("list editor config error - filterFunc option is only available when autocomplete is enabled")),t.filterRemote&&(t.filterRemote=!1,console.warn("list editor config error - filterRemote option is only available when autocomplete is enabled")),t.mask&&(t.mask=!1,console.warn("list editor config error - mask option is only available when autocomplete is enabled")),t.allowEmpty&&(t.allowEmpty=!1,console.warn("list editor config error - allowEmpty option is only available when autocomplete is enabled")),t.listOnEmpty&&(t.listOnEmpty=!1,console.warn("list editor config error - listOnEmpty option is only available when autocomplete is enabled"))),t.filterRemote&&!(typeof t.valuesLookup=="function"||t.valuesURL)&&(t.filterRemote=!1,console.warn("list editor config error - filterRemote option should only be used when values list is populated from a remote source")),t}_bindInputEvents(t){t.addEventListener("focus",this._inputFocus.bind(this)),t.addEventListener("click",this._inputClick.bind(this)),t.addEventListener("blur",this._inputBlur.bind(this)),t.addEventListener("keydown",this._inputKeyDown.bind(this)),t.addEventListener("search",this._inputSearch.bind(this)),this.params.autocomplete&&t.addEventListener("keyup",this._inputKeyUp.bind(this))}_inputFocus(t){this.rebuildOptionsList()}_filter(){this.params.filterRemote?(clearTimeout(this.filterTimeout),this.filterTimeout=setTimeout(()=>{this.rebuildOptionsList()},this.params.filterDelay)):this._filterList()}_inputClick(t){t.stopPropagation()}_inputBlur(t){this.blurable&&(this.popup?this.popup.hide():this._resolveValue(!0))}_inputSearch(){this._clearChoices()}_inputKeyDown(t){switch(t.keyCode){case 38:this._keyUp(t);break;case 40:this._keyDown(t);break;case 37:case 39:this._keySide(t);break;case 13:this._keyEnter();break;case 27:this._keyEsc();break;case 36:case 35:this._keyHomeEnd(t);break;case 9:this._keyTab(t);break;default:this._keySelectLetter(t)}}_inputKeyUp(t){switch(t.keyCode){case 38:case 37:case 39:case 40:case 13:case 27:break;default:this._keyAutoCompLetter(t)}}_preventPopupBlur(){this.popup&&this.popup.blockHide(),setTimeout(()=>{this.popup&&this.popup.restoreHide()},10)}_preventBlur(){this.blurable=!1,setTimeout(()=>{this.blurable=!0},10)}_keyTab(t){this.params.autocomplete&&this.lastAction==="typing"?this._resolveValue(!0):this.focusedItem&&this._chooseItem(this.focusedItem,!0)}_keyUp(t){var e=this.displayItems.indexOf(this.focusedItem);(this.params.verticalNavigation=="editor"||this.params.verticalNavigation=="hybrid"&&e)&&(t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault(),e>0&&this._focusItem(this.displayItems[e-1]))}_keyDown(t){var e=this.displayItems.indexOf(this.focusedItem);(this.params.verticalNavigation=="editor"||this.params.verticalNavigation=="hybrid"&&e<this.displayItems.length-1)&&(t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault(),e<this.displayItems.length-1&&(e==-1?this._focusItem(this.displayItems[0]):this._focusItem(this.displayItems[e+1])))}_keySide(t){this.params.autocomplete||(t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault())}_keyEnter(t){this.params.autocomplete&&this.lastAction==="typing"?this._resolveValue(!0):this.focusedItem&&this._chooseItem(this.focusedItem)}_keyEsc(t){this._cancel()}_keyHomeEnd(t){this.params.autocomplete&&t.stopImmediatePropagation()}_keySelectLetter(t){this.params.autocomplete||(t.preventDefault(),t.keyCode>=38&&t.keyCode<=90&&this._scrollToValue(t.keyCode))}_keyAutoCompLetter(t){this._filter(),this.lastAction="typing",this.typing=!0}_scrollToValue(t){clearTimeout(this.filterTimeout);var e=String.fromCharCode(t).toLowerCase();this.filterTerm+=e.toLowerCase();var i=this.displayItems.find(s=>typeof s.label<"u"&&s.label.toLowerCase().startsWith(this.filterTerm));i&&this._focusItem(i),this.filterTimeout=setTimeout(()=>{this.filterTerm=""},800)}_focusItem(t){this.lastAction="focus",this.focusedItem&&this.focusedItem.element&&this.focusedItem.element.classList.remove("focused"),this.focusedItem=t,t&&t.element&&(t.element.classList.add("focused"),t.element.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"}))}headerFilterInitialListGen(){this._generateOptions(!0)}rebuildOptionsList(){this._generateOptions().then(this._sortOptions.bind(this)).then(this._buildList.bind(this)).then(this._showList.bind(this)).catch(t=>{Number.isInteger(t)||console.error("List generation error",t)})}_filterList(){this._buildList(this._filterOptions()),this._showList()}_generateOptions(t){var e=[],i=++this.listIteration;return this.filtered=!1,this.params.values?e=this.params.values:this.params.valuesURL?e=this._ajaxRequest(this.params.valuesURL,this.input.value):typeof this.params.valuesLookup=="function"?e=this.params.valuesLookup(this.cell,this.input.value):this.params.valuesLookup&&(e=this._uniqueColumnValues(this.params.valuesLookupField)),e instanceof Promise?(t||this._addPlaceholder(this.params.placeholderLoading),e.then().then(s=>this.listIteration===i?this._parseList(s):Promise.reject(i))):Promise.resolve(this._parseList(e))}_addPlaceholder(t){var e=document.createElement("div");typeof t=="function"&&(t=t(this.cell.getComponent(),this.listEl)),t&&(this._clearList(),t instanceof HTMLElement?e=t:(e.classList.add("tabulator-edit-list-placeholder"),e.innerHTML=t),this.listEl.appendChild(e),this._showList())}_ajaxRequest(t,e){var i=this.params.filterRemote?{term:e}:{};return t=xe(t,{},i),fetch(t).then(s=>s.ok?s.json().catch(n=>(console.warn("List Ajax Load Error - Invalid JSON returned",n),Promise.reject(n))):(console.error("List Ajax Load Error - Connection Error: "+s.status,s.statusText),Promise.reject(s))).catch(s=>(console.error("List Ajax Load Error - Connection Error: ",s),Promise.reject(s)))}_uniqueColumnValues(t){var e={},i=this.table.getData(this.params.valuesLookup),s;return t?s=this.table.columnManager.getColumnByField(t):s=this.cell.getColumn()._getSelf(),s?i.forEach(n=>{var o=s.getFieldValue(n);o!==null&&typeof o<"u"&&o!==""&&(e[o]=!0)}):(console.warn("unable to find matching column to create select lookup list:",t),e=[]),Object.keys(e)}_parseList(t){var e=[];return Array.isArray(t)||(t=Object.entries(t).map(([i,s])=>({label:s,value:i}))),t.forEach(i=>{typeof i!="object"&&(i={label:i,value:i}),this._parseListItem(i,e,0)}),!this.currentItems.length&&this.params.freetext&&(this.input.value=this.initialValues,this.typing=!0,this.lastAction="typing"),this.data=e,e}_parseListItem(t,e,i){var s={};t.options?s=this._parseListGroup(t,i+1):(s={label:t.label,value:t.value,itemParams:t.itemParams,elementAttributes:t.elementAttributes,element:!1,selected:!1,visible:!0,level:i,original:t},this.initialValues&&this.initialValues.indexOf(t.value)>-1&&this._chooseItem(s,!0)),e.push(s)}_parseListGroup(t,e){var i={label:t.label,group:!0,itemParams:t.itemParams,elementAttributes:t.elementAttributes,element:!1,visible:!0,level:e,options:[],original:t};return t.options.forEach(s=>{this._parseListItem(s,i.options,e)}),i}_sortOptions(t){var e;return this.params.sort&&(e=typeof this.params.sort=="function"?this.params.sort:this._defaultSortFunction.bind(this),this._sortGroup(e,t)),t}_sortGroup(t,e){e.sort((i,s)=>t(i.label,s.label,i.value,s.value,i.original,s.original)),e.forEach(i=>{i.group&&this._sortGroup(t,i.options)})}_defaultSortFunction(t,e){var i,s,n,o,r=0,l,d=/(\d+)|(\D+)/g,c=/\d/,p=0;if(this.params.sort==="desc"&&([t,e]=[e,t]),!t&&t!==0)p=!e&&e!==0?0:-1;else if(!e&&e!==0)p=1;else{if(isFinite(t)&&isFinite(e))return t-e;if(i=String(t).toLowerCase(),s=String(e).toLowerCase(),i===s)return 0;if(!(c.test(i)&&c.test(s)))return i>s?1:-1;for(i=i.match(d),s=s.match(d),l=i.length>s.length?s.length:i.length;r<l;)if(n=i[r],o=s[r++],n!==o)return isFinite(n)&&isFinite(o)?(n.charAt(0)==="0"&&(n="."+n),o.charAt(0)==="0"&&(o="."+o),n-o):n>o?1:-1;return i.length>s.length}return p}_filterOptions(){var t=this.params.filterFunc||this._defaultFilterFunc,e=this.input.value;return e?(this.filtered=!0,this.data.forEach(i=>{this._filterItem(t,e,i)})):this.filtered=!1,this.data}_filterItem(t,e,i){var s=!1;return i.group?(i.options.forEach(n=>{this._filterItem(t,e,n)&&(s=!0)}),i.visible=s):i.visible=t(e,i.label,i.value,i.original),i.visible}_defaultFilterFunc(t,e,i,s){return t=String(t).toLowerCase(),e!==null&&typeof e<"u"&&(String(e).toLowerCase().indexOf(t)>-1||String(i).toLowerCase().indexOf(t)>-1)}_clearList(){for(;this.listEl.firstChild;)this.listEl.removeChild(this.listEl.firstChild);this.displayItems=[]}_buildList(t){this._clearList(),t.forEach(e=>{this._buildItem(e)}),this.displayItems.length||this._addPlaceholder(this.params.placeholderEmpty)}_buildItem(t){var e=t.element,i;if(!this.filtered||t.visible){if(!e){if(e=document.createElement("div"),e.tabIndex=0,i=this.params.itemFormatter?this.params.itemFormatter(t.label,t.value,t.original,e):t.label,i instanceof HTMLElement?e.appendChild(i):e.innerHTML=i,t.group?e.classList.add("tabulator-edit-list-group"):e.classList.add("tabulator-edit-list-item"),e.classList.add("tabulator-edit-list-group-level-"+t.level),t.elementAttributes&&typeof t.elementAttributes=="object")for(let s in t.elementAttributes)s.charAt(0)=="+"?(s=s.slice(1),e.setAttribute(s,this.input.getAttribute(s)+t.elementAttributes["+"+s])):e.setAttribute(s,t.elementAttributes[s]);t.group?e.addEventListener("click",this._groupClick.bind(this,t)):e.addEventListener("click",this._itemClick.bind(this,t)),e.addEventListener("mousedown",this._preventBlur.bind(this)),t.element=e}this._styleItem(t),this.listEl.appendChild(e),t.group?t.options.forEach(s=>{this._buildItem(s)}):this.displayItems.push(t)}}_showList(){var t=this.popup&&this.popup.isVisible();if(this.input.parentNode){if(this.params.autocomplete&&this.input.value===""&&!this.params.listOnEmpty){this.popup&&this.popup.hide(!0);return}this._setListWidth(),this.popup||(this.popup=this.edit.popup(this.listEl)),this.popup.show(this.cell.getElement(),"bottom"),t||setTimeout(()=>{this.popup.hideOnBlur(this._resolveValue.bind(this,!0))},10)}}_styleItem(t){t&&t.element&&(t.selected?t.element.classList.add("active"):t.element.classList.remove("active"))}_itemClick(t,e){e.stopPropagation(),this._chooseItem(t)}_groupClick(t,e){e.stopPropagation()}_cancel(){this.popup.hide(!0),this.actions.cancel()}_clearChoices(){this.typing=!0,this.currentItems.forEach(t=>{t.selected=!1,this._styleItem(t)}),this.currentItems=[],this.focusedItem=null}_chooseItem(t,e){var i;this.typing=!1,this.params.multiselect?(i=this.currentItems.indexOf(t),i>-1?(this.currentItems.splice(i,1),t.selected=!1):(this.currentItems.push(t),t.selected=!0),this.input.value=this.currentItems.map(s=>s.label).join(","),this._styleItem(t)):(this.currentItems=[t],t.selected=!0,this.input.value=t.label,this._styleItem(t),e||this._resolveValue()),this._focusItem(t)}_resolveValue(t){var e,i;if(this.popup&&this.popup.hide(!0),this.params.multiselect)e=this.currentItems.map(s=>s.value);else if(t&&this.params.autocomplete&&this.typing)if(this.params.freetext||this.params.allowEmpty&&this.input.value==="")e=this.input.value;else{this.actions.cancel();return}else this.currentItems[0]?e=this.currentItems[0].value:(i=Array.isArray(this.initialValues)?this.initialValues[0]:this.initialValues,i===null||typeof i>"u"||i===""?e=i:e=this.params.emptyValue);e===""&&(e=this.params.emptyValue),this.actions.success(e),this.isFilter&&(this.initialValues=e&&!Array.isArray(e)?[e]:e,this.currentItems=[])}}function N6(h,t,e,i,s){this.deprecationMsg("The select editor has been deprecated, please use the new list editor");var n=new ct(this,h,t,e,i,s);return n.input}function W6(h,t,e,i,s){var n=new ct(this,h,t,e,i,s);return n.input}function G6(h,t,e,i,s){this.deprecationMsg("The autocomplete editor has been deprecated, please use the new list editor with the 'autocomplete' editorParam"),s.autocomplete=!0;var n=new ct(this,h,t,e,i,s);return n.input}function Z6(h,t,e,i,s){var n=this,o=h.getElement(),r=h.getValue(),l=o.getElementsByTagName("svg").length||5,d=o.getElementsByTagName("svg")[0]?o.getElementsByTagName("svg")[0].getAttribute("width"):14,c=[],p=document.createElement("div"),u=document.createElementNS("http://www.w3.org/2000/svg","svg");function g(m){c.forEach(function(y,E){E<m?(n.table.browser=="ie"?y.setAttribute("class","tabulator-star-active"):y.classList.replace("tabulator-star-inactive","tabulator-star-active"),y.innerHTML='<polygon fill="#488CE9" stroke="#014AAE" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>'):(n.table.browser=="ie"?y.setAttribute("class","tabulator-star-inactive"):y.classList.replace("tabulator-star-active","tabulator-star-inactive"),y.innerHTML='<polygon fill="#010155" stroke="#686868" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>')})}function v(m){var y=document.createElement("span"),E=u.cloneNode(!0);c.push(E),y.addEventListener("mouseenter",function(x){x.stopPropagation(),x.stopImmediatePropagation(),g(m)}),y.addEventListener("mousemove",function(x){x.stopPropagation(),x.stopImmediatePropagation()}),y.addEventListener("click",function(x){x.stopPropagation(),x.stopImmediatePropagation(),e(m),o.blur()}),y.appendChild(E),p.appendChild(y)}function f(m){r=m,g(m)}if(o.style.whiteSpace="nowrap",o.style.overflow="hidden",o.style.textOverflow="ellipsis",p.style.verticalAlign="middle",p.style.display="inline-block",p.style.padding="4px",u.setAttribute("width",d),u.setAttribute("height",d),u.setAttribute("viewBox","0 0 512 512"),u.setAttribute("xml:space","preserve"),u.style.padding="0 1px",s.elementAttributes&&typeof s.elementAttributes=="object")for(let m in s.elementAttributes)m.charAt(0)=="+"?(m=m.slice(1),p.setAttribute(m,p.getAttribute(m)+s.elementAttributes["+"+m])):p.setAttribute(m,s.elementAttributes[m]);for(var b=1;b<=l;b++)v(b);return r=Math.min(parseInt(r),l),g(r),p.addEventListener("mousemove",function(m){g(0)}),p.addEventListener("click",function(m){e(0)}),o.addEventListener("blur",function(m){i()}),o.addEventListener("keydown",function(m){switch(m.keyCode){case 39:f(r+1);break;case 37:f(r-1);break;case 13:e(r);break;case 27:i();break}}),p}function j6(h,t,e,i,s){var n=h.getElement(),o=typeof s.max>"u"?n.getElementsByTagName("div")[0]&&n.getElementsByTagName("div")[0].getAttribute("max")||100:s.max,r=typeof s.min>"u"?n.getElementsByTagName("div")[0]&&n.getElementsByTagName("div")[0].getAttribute("min")||0:s.min,l=(o-r)/100,d=h.getValue()||0,c=document.createElement("div"),p=document.createElement("div"),u,g;function v(){var f=window.getComputedStyle(n,null),b=l*Math.round(p.offsetWidth/((n.clientWidth-parseInt(f.getPropertyValue("padding-left"))-parseInt(f.getPropertyValue("padding-right")))/100))+r;e(b),n.setAttribute("aria-valuenow",b),n.setAttribute("aria-label",d)}if(c.style.position="absolute",c.style.right="0",c.style.top="0",c.style.bottom="0",c.style.width="5px",c.classList.add("tabulator-progress-handle"),p.style.display="inline-block",p.style.position="relative",p.style.height="100%",p.style.backgroundColor="#488CE9",p.style.maxWidth="100%",p.style.minWidth="0%",s.elementAttributes&&typeof s.elementAttributes=="object")for(let f in s.elementAttributes)f.charAt(0)=="+"?(f=f.slice(1),p.setAttribute(f,p.getAttribute(f)+s.elementAttributes["+"+f])):p.setAttribute(f,s.elementAttributes[f]);return n.style.padding="4px 4px",d=Math.min(parseFloat(d),o),d=Math.max(parseFloat(d),r),d=Math.round((d-r)/l),p.style.width=d+"%",n.setAttribute("aria-valuemin",r),n.setAttribute("aria-valuemax",o),p.appendChild(c),c.addEventListener("mousedown",function(f){u=f.screenX,g=p.offsetWidth}),c.addEventListener("mouseover",function(){c.style.cursor="ew-resize"}),n.addEventListener("mousemove",function(f){u&&(p.style.width=g+f.screenX-u+"px")}),n.addEventListener("mouseup",function(f){u&&(f.stopPropagation(),f.stopImmediatePropagation(),u=!1,g=!1,v())}),n.addEventListener("keydown",function(f){switch(f.keyCode){case 39:f.preventDefault(),p.style.width=p.clientWidth+n.clientWidth/100+"px";break;case 37:f.preventDefault(),p.style.width=p.clientWidth-n.clientWidth/100+"px";break;case 9:case 13:v();break;case 27:i();break}}),n.addEventListener("blur",function(){i()}),p}function U6(h,t,e,i,s){var n=h.getValue(),o=document.createElement("input"),r=s.tristate,l=typeof s.indeterminateValue>"u"?null:s.indeterminateValue,d=!1,c=Object.keys(s).includes("trueValue"),p=Object.keys(s).includes("falseValue");if(o.setAttribute("type","checkbox"),o.style.marginTop="5px",o.style.boxSizing="border-box",s.elementAttributes&&typeof s.elementAttributes=="object")for(let g in s.elementAttributes)g.charAt(0)=="+"?(g=g.slice(1),o.setAttribute(g,o.getAttribute(g)+s.elementAttributes["+"+g])):o.setAttribute(g,s.elementAttributes[g]);o.value=n,r&&(typeof n>"u"||n===l||n==="")&&(d=!0,o.indeterminate=!0),this.table.browser!="firefox"&&this.table.browser!="safari"&&t(function(){h.getType()==="cell"&&o.focus({preventScroll:!0})}),o.checked=c?n===s.trueValue:n===!0||n==="true"||n==="True"||n===1;function u(g){var v=o.checked;return c&&v?v=s.trueValue:p&&!v&&(v=s.falseValue),r?g?d?l:v:o.checked&&!d?(o.checked=!1,o.indeterminate=!0,d=!0,l):(d=!1,v):v}return o.addEventListener("change",function(g){e(u())}),o.addEventListener("blur",function(g){e(u(!0))}),o.addEventListener("keydown",function(g){g.keyCode==13&&e(u()),g.keyCode==27&&i()}),o}var q6={input:z6,textarea:F6,number:P6,range:O6,date:B6,time:_6,datetime:I6,select:N6,list:W6,autocomplete:G6,star:Z6,progress:j6,tickCross:U6};class J extends M{constructor(t){super(t),this.currentCell=!1,this.mouseClick=!1,this.recursionBlock=!1,this.invalidEdit=!1,this.editedCells=[],this.editors=J.editors,this.registerColumnOption("editable"),this.registerColumnOption("editor"),this.registerColumnOption("editorParams"),this.registerColumnOption("cellEditing"),this.registerColumnOption("cellEdited"),this.registerColumnOption("cellEditCancelled"),this.registerTableOption("editTriggerEvent","focus"),this.registerTableFunction("getEditedCells",this.getEditedCells.bind(this)),this.registerTableFunction("clearCellEdited",this.clearCellEdited.bind(this)),this.registerTableFunction("navigatePrev",this.navigatePrev.bind(this)),this.registerTableFunction("navigateNext",this.navigateNext.bind(this)),this.registerTableFunction("navigateLeft",this.navigateLeft.bind(this)),this.registerTableFunction("navigateRight",this.navigateRight.bind(this)),this.registerTableFunction("navigateUp",this.navigateUp.bind(this)),this.registerTableFunction("navigateDown",this.navigateDown.bind(this)),this.registerComponentFunction("cell","isEdited",this.cellIsEdited.bind(this)),this.registerComponentFunction("cell","clearEdited",this.clearEdited.bind(this)),this.registerComponentFunction("cell","edit",this.editCell.bind(this)),this.registerComponentFunction("cell","cancelEdit",this.cellCancelEdit.bind(this)),this.registerComponentFunction("cell","navigatePrev",this.navigatePrev.bind(this)),this.registerComponentFunction("cell","navigateNext",this.navigateNext.bind(this)),this.registerComponentFunction("cell","navigateLeft",this.navigateLeft.bind(this)),this.registerComponentFunction("cell","navigateRight",this.navigateRight.bind(this)),this.registerComponentFunction("cell","navigateUp",this.navigateUp.bind(this)),this.registerComponentFunction("cell","navigateDown",this.navigateDown.bind(this))}initialize(){this.subscribe("cell-init",this.bindEditor.bind(this)),this.subscribe("cell-delete",this.clearEdited.bind(this)),this.subscribe("cell-value-changed",this.updateCellClass.bind(this)),this.subscribe("column-layout",this.initializeColumnCheck.bind(this)),this.subscribe("column-delete",this.columnDeleteCheck.bind(this)),this.subscribe("row-deleting",this.rowDeleteCheck.bind(this)),this.subscribe("row-layout",this.rowEditableCheck.bind(this)),this.subscribe("data-refreshing",this.cancelEdit.bind(this)),this.subscribe("clipboard-paste",this.pasteBlocker.bind(this)),this.subscribe("keybinding-nav-prev",this.navigatePrev.bind(this,void 0)),this.subscribe("keybinding-nav-next",this.keybindingNavigateNext.bind(this)),this.subscribe("keybinding-nav-up",this.navigateUp.bind(this,void 0)),this.subscribe("keybinding-nav-down",this.navigateDown.bind(this,void 0))}pasteBlocker(t){if(this.currentCell)return!0}keybindingNavigateNext(t){var e=this.currentCell,i=this.options("tabEndNewRow");e&&(this.navigateNext(e,t)||i&&(e.getElement().firstChild.blur(),this.invalidEdit||(i===!0?i=this.table.addRow({}):typeof i=="function"?i=this.table.addRow(i(e.row.getComponent())):i=this.table.addRow(Object.assign({},i)),i.then(()=>{setTimeout(()=>{e.getComponent().navigateNext()})}))))}cellIsEdited(t){return!!t.modules.edit&&t.modules.edit.edited}cellCancelEdit(t){t===this.currentCell?this.table.modules.edit.cancelEdit():console.warn("Cancel Editor Error - This cell is not currently being edited ")}updateCellClass(t){this.allowEdit(t)?t.getElement().classList.add("tabulator-editable"):t.getElement().classList.remove("tabulator-editable")}clearCellEdited(t){t||(t=this.table.modules.edit.getEditedCells()),Array.isArray(t)||(t=[t]),t.forEach(e=>{this.table.modules.edit.clearEdited(e._getSelf())})}navigatePrev(t=this.currentCell,e){var i,s;if(t){if(e&&e.preventDefault(),i=this.navigateLeft(),i)return!0;if(s=this.table.rowManager.prevDisplayRow(t.row,!0),s&&(i=this.findPrevEditableCell(s,s.cells.length),i))return i.getComponent().edit(),!0}return!1}navigateNext(t=this.currentCell,e){var i,s;if(t){if(e&&e.preventDefault(),i=this.navigateRight(),i)return!0;if(s=this.table.rowManager.nextDisplayRow(t.row,!0),s&&(i=this.findNextEditableCell(s,-1),i))return i.getComponent().edit(),!0}return!1}navigateLeft(t=this.currentCell,e){var i,s;return t&&(e&&e.preventDefault(),i=t.getIndex(),s=this.findPrevEditableCell(t.row,i),s)?(s.getComponent().edit(),!0):!1}navigateRight(t=this.currentCell,e){var i,s;return t&&(e&&e.preventDefault(),i=t.getIndex(),s=this.findNextEditableCell(t.row,i),s)?(s.getComponent().edit(),!0):!1}navigateUp(t=this.currentCell,e){var i,s;return t&&(e&&e.preventDefault(),i=t.getIndex(),s=this.table.rowManager.prevDisplayRow(t.row,!0),s)?(s.cells[i].getComponent().edit(),!0):!1}navigateDown(t=this.currentCell,e){var i,s;return t&&(e&&e.preventDefault(),i=t.getIndex(),s=this.table.rowManager.nextDisplayRow(t.row,!0),s)?(s.cells[i].getComponent().edit(),!0):!1}findNextEditableCell(t,e){var i=!1;if(e<t.cells.length-1)for(var s=e+1;s<t.cells.length;s++){let n=t.cells[s];if(n.column.modules.edit&&C.elVisible(n.getElement())&&this.allowEdit(n)){i=n;break}}return i}findPrevEditableCell(t,e){var i=!1;if(e>0)for(var s=e-1;s>=0;s--){let n=t.cells[s];if(n.column.modules.edit&&C.elVisible(n.getElement())&&this.allowEdit(n)){i=n;break}}return i}initializeColumnCheck(t){typeof t.definition.editor<"u"&&this.initializeColumn(t)}columnDeleteCheck(t){this.currentCell&&this.currentCell.column===t&&this.cancelEdit()}rowDeleteCheck(t){this.currentCell&&this.currentCell.row===t&&this.cancelEdit()}rowEditableCheck(t){t.getCells().forEach(e=>{e.column.modules.edit&&typeof e.column.modules.edit.check=="function"&&this.updateCellClass(e)})}initializeColumn(t){var e={editor:!1,blocked:!1,check:t.definition.editable,params:t.definition.editorParams||{}};switch(typeof t.definition.editor){case"string":this.editors[t.definition.editor]?e.editor=this.editors[t.definition.editor]:console.warn("Editor Error - No such editor found: ",t.definition.editor);break;case"function":e.editor=t.definition.editor;break;case"boolean":t.definition.editor===!0&&(typeof t.definition.formatter!="function"?this.editors[t.definition.formatter]?e.editor=this.editors[t.definition.formatter]:e.editor=this.editors.input:console.warn("Editor Error - Cannot auto lookup editor for a custom formatter: ",t.definition.formatter));break}e.editor&&(t.modules.edit=e)}getCurrentCell(){return this.currentCell?this.currentCell.getComponent():!1}clearEditor(t){var e=this.currentCell,i;if(this.invalidEdit=!1,e){for(this.currentCell=!1,i=e.getElement(),this.dispatch("edit-editor-clear",e,t),i.classList.remove("tabulator-editing");i.firstChild;)i.removeChild(i.firstChild);e.row.getElement().classList.remove("tabulator-editing"),e.table.element.classList.remove("tabulator-editing")}}cancelEdit(){if(this.currentCell){var t=this.currentCell,e=this.currentCell.getComponent();this.clearEditor(!0),t.setValueActual(t.getValue()),t.cellRendered(),(t.column.definition.editor=="textarea"||t.column.definition.variableHeight)&&t.row.normalizeHeight(!0),t.column.definition.cellEditCancelled&&t.column.definition.cellEditCancelled.call(this.table,e),this.dispatch("edit-cancelled",t),this.dispatchExternal("cellEditCancelled",e)}}bindEditor(t){if(t.column.modules.edit){var e=this,i=t.getElement(!0);this.updateCellClass(t),i.setAttribute("tabindex",0),i.addEventListener("mousedown",function(s){s.button===2?s.preventDefault():e.mouseClick=!0}),this.options("editTriggerEvent")==="dblclick"&&i.addEventListener("dblclick",function(s){i.classList.contains("tabulator-editing")||(i.focus({preventScroll:!0}),e.edit(t,s,!1))}),(this.options("editTriggerEvent")==="focus"||this.options("editTriggerEvent")==="click")&&i.addEventListener("click",function(s){i.classList.contains("tabulator-editing")||(i.focus({preventScroll:!0}),e.edit(t,s,!1))}),this.options("editTriggerEvent")==="focus"&&i.addEventListener("focus",function(s){e.recursionBlock||e.edit(t,s,!1)})}}focusCellNoEvent(t,e){this.recursionBlock=!0,e&&this.table.browser==="ie"||t.getElement().focus({preventScroll:!0}),this.recursionBlock=!1}editCell(t,e){this.focusCellNoEvent(t),this.edit(t,!1,e)}focusScrollAdjust(t){if(this.table.rowManager.getRenderMode()=="virtual"){var e=this.table.rowManager.element.scrollTop,i=this.table.rowManager.element.clientHeight+this.table.rowManager.element.scrollTop,s=t.row.getElement();s.offsetTop<e?this.table.rowManager.element.scrollTop-=e-s.offsetTop:s.offsetTop+s.offsetHeight>i&&(this.table.rowManager.element.scrollTop+=s.offsetTop+s.offsetHeight-i);var n=this.table.rowManager.element.scrollLeft,o=this.table.rowManager.element.clientWidth+this.table.rowManager.element.scrollLeft,r=t.getElement();this.table.modExists("frozenColumns")&&(n+=parseInt(this.table.modules.frozenColumns.leftMargin||0),o-=parseInt(this.table.modules.frozenColumns.rightMargin||0)),this.table.options.renderHorizontal==="virtual"&&(n-=parseInt(this.table.columnManager.renderer.vDomPadLeft),o-=parseInt(this.table.columnManager.renderer.vDomPadLeft)),r.offsetLeft<n?this.table.rowManager.element.scrollLeft-=n-r.offsetLeft:r.offsetLeft+r.offsetWidth>o&&(this.table.rowManager.element.scrollLeft+=r.offsetLeft+r.offsetWidth-o)}}allowEdit(t){var e=!!t.column.modules.edit;if(t.column.modules.edit)switch(typeof t.column.modules.edit.check){case"function":t.row.initialized&&(e=t.column.modules.edit.check(t.getComponent()));break;case"string":e=!!t.row.data[t.column.modules.edit.check];break;case"boolean":e=t.column.modules.edit.check;break}return e}edit(t,e,i){var s=this,n=!0,o=function(){},r=t.getElement(),l=!1,d,c,p;if(this.currentCell){!this.invalidEdit&&this.currentCell!==t&&this.cancelEdit();return}function u(m){if(s.currentCell===t&&!l){var y=s.chain("edit-success",[t,m],!0,!0);return y===!0||s.table.options.validationMode==="highlight"?(l=!0,s.clearEditor(),t.modules.edit||(t.modules.edit={}),t.modules.edit.edited=!0,s.editedCells.indexOf(t)==-1&&s.editedCells.push(t),t.setValue(m,!0),y===!0):(l=!0,s.invalidEdit=!0,s.focusCellNoEvent(t,!0),o(),setTimeout(()=>{l=!1},10),!1)}}function g(){s.currentCell===t&&!l&&s.cancelEdit()}function v(m){o=m}if(t.column.modules.edit.blocked)return this.mouseClick=!1,this.blur(r),!1;if(e&&e.stopPropagation(),n=this.allowEdit(t),n||i){if(s.cancelEdit(),s.currentCell=t,this.focusScrollAdjust(t),c=t.getComponent(),this.mouseClick&&(this.mouseClick=!1,t.column.definition.cellClick&&t.column.definition.cellClick.call(this.table,e,c)),t.column.definition.cellEditing&&t.column.definition.cellEditing.call(this.table,c),this.dispatch("cell-editing",t),this.dispatchExternal("cellEditing",c),p=typeof t.column.modules.edit.params=="function"?t.column.modules.edit.params(c):t.column.modules.edit.params,d=t.column.modules.edit.editor.call(s,c,v,u,g,p),this.currentCell&&d!==!1)if(d instanceof Node){for(r.classList.add("tabulator-editing"),t.row.getElement().classList.add("tabulator-editing"),t.table.element.classList.add("tabulator-editing");r.firstChild;)r.removeChild(r.firstChild);r.appendChild(d),o();for(var f=r.children,b=0;b<f.length;b++)f[b].addEventListener("click",function(m){m.stopPropagation()})}else return console.warn("Edit Error - Editor should return an instance of Node, the editor returned:",d),this.blur(r),!1;else return this.blur(r),!1;return!0}else return this.mouseClick=!1,this.blur(r),!1}blur(t){this.confirm("edit-blur",[t])||t.blur()}getEditedCells(){var t=[];return this.editedCells.forEach(e=>{t.push(e.getComponent())}),t}clearEdited(t){var e;t.modules.edit&&t.modules.edit.edited&&(t.modules.edit.edited=!1,this.dispatch("edit-edited-clear",t)),e=this.editedCells.indexOf(t),e>-1&&this.editedCells.splice(e,1)}}J.moduleName="edit";J.editors=q6;class Me{constructor(t,e,i,s){this.type=t,this.columns=e,this.component=i||!1,this.indent=s||0}}class rt{constructor(t,e,i,s,n){this.value=t,this.component=e||!1,this.width=i,this.height=s,this.depth=n}}class Le extends M{constructor(t){super(t),this.config={},this.cloneTableStyle=!0,this.colVisProp="",this.registerTableOption("htmlOutputConfig",!1),this.registerColumnOption("htmlOutput"),this.registerColumnOption("titleHtmlOutput")}initialize(){this.registerTableFunction("getHtml",this.getHtml.bind(this))}generateExportList(t,e,i,s){this.cloneTableStyle=e,this.config=t||{},this.colVisProp=s;var n,o;if(i==="range"){var r=this.table.modules.selectRange.selectedColumns();n=this.config.columnHeaders!==!1?this.headersToExportRows(this.generateColumnGroupHeaders(r)):[],o=this.bodyToExportRows(this.rowLookup(i),this.table.modules.selectRange.selectedColumns(!0))}else n=this.config.columnHeaders!==!1?this.headersToExportRows(this.generateColumnGroupHeaders()):[],o=this.bodyToExportRows(this.rowLookup(i));return n.concat(o)}generateTable(t,e,i,s){var n=this.generateExportList(t,e,i,s);return this.generateTableElement(n)}rowLookup(t){var e=[];if(typeof t=="function")t.call(this.table).forEach(i=>{i=this.table.rowManager.findRow(i),i&&e.push(i)});else switch(t){case!0:case"visible":e=this.table.rowManager.getVisibleRows(!1,!0);break;case"all":e=this.table.rowManager.rows;break;case"selected":e=this.table.modules.selectRow.selectedRows;break;case"range":e=this.table.modules.selectRange.selectedRows();break;case"active":default:this.table.options.pagination?e=this.table.rowManager.getDisplayRows(this.table.rowManager.displayRows.length-2):e=this.table.rowManager.getDisplayRows()}return Object.assign([],e)}generateColumnGroupHeaders(t){var e=[];return t||(t=this.config.columnGroups!==!1?this.table.columnManager.columns:this.table.columnManager.columnsByIndex),t.forEach(i=>{var s=this.processColumnGroup(i);s&&e.push(s)}),e}processColumnGroup(t){var e=t.columns,i=0,s=t.definition["title"+(this.colVisProp.charAt(0).toUpperCase()+this.colVisProp.slice(1))]||t.definition.title,n={title:s,column:t,depth:1};if(e.length){if(n.subGroups=[],n.width=0,e.forEach(o=>{var r=this.processColumnGroup(o);r&&(n.width+=r.width,n.subGroups.push(r),r.depth>i&&(i=r.depth))}),n.depth+=i,!n.width)return!1}else if(this.columnVisCheck(t))n.width=1;else return!1;return n}columnVisCheck(t){var e=t.definition[this.colVisProp];return typeof e=="function"&&(e=e.call(this.table,t.getComponent())),e!==!1&&(t.visible||!t.visible&&e)}headersToExportRows(t){var e=[],i=0,s=[];function n(o,r){var l=i-r;if(typeof e[r]>"u"&&(e[r]=[]),o.height=o.subGroups?1:l-o.depth+1,e[r].push(o),o.height>1)for(let d=1;d<o.height;d++)typeof e[r+d]>"u"&&(e[r+d]=[]),e[r+d].push(!1);if(o.width>1)for(let d=1;d<o.width;d++)e[r].push(!1);o.subGroups&&o.subGroups.forEach(function(d){n(d,r+1)})}return t.forEach(function(o){o.depth>i&&(i=o.depth)}),t.forEach(function(o){n(o,0)}),e.forEach(o=>{var r=[];o.forEach(l=>{if(l){let d=typeof l.title>"u"?"":l.title;r.push(new rt(d,l.column.getComponent(),l.width,l.height,l.depth))}else r.push(null)}),s.push(new Me("header",r))}),s}bodyToExportRows(t,e=[]){var i=[];return e.length===0&&this.table.columnManager.columnsByIndex.forEach(s=>{this.columnVisCheck(s)&&e.push(s.getComponent())}),this.config.columnCalcs!==!1&&this.table.modExists("columnCalcs")&&(this.table.modules.columnCalcs.topInitialized&&t.unshift(this.table.modules.columnCalcs.topRow),this.table.modules.columnCalcs.botInitialized&&t.push(this.table.modules.columnCalcs.botRow)),t=t.filter(s=>{switch(s.type){case"group":return this.config.rowGroups!==!1;case"calc":return this.config.columnCalcs!==!1;case"row":return!(this.table.options.dataTree&&this.config.dataTree===!1&&s.modules.dataTree.parent)}return!0}),t.forEach((s,n)=>{var o=s.getData(this.colVisProp),r=[],l=0;switch(s.type){case"group":l=s.level,r.push(new rt(s.key,s.getComponent(),e.length,1));break;case"calc":case"row":e.forEach(d=>{r.push(new rt(d._column.getFieldValue(o),d,1,1))}),this.table.options.dataTree&&this.config.dataTree!==!1&&(l=s.modules.dataTree.index);break}i.push(new Me(s.type,r,s.getComponent(),l))}),i}generateTableElement(t){var e=document.createElement("table"),i=document.createElement("thead"),s=document.createElement("tbody"),n=this.lookupTableStyles(),o=this.table.options["rowFormatter"+(this.colVisProp.charAt(0).toUpperCase()+this.colVisProp.slice(1))],r={};return r.rowFormatter=o!==null?o:this.table.options.rowFormatter,this.table.options.dataTree&&this.config.dataTree!==!1&&this.table.modExists("columnCalcs")&&(r.treeElementField=this.table.modules.dataTree.elementField),r.groupHeader=this.table.options["groupHeader"+(this.colVisProp.charAt(0).toUpperCase()+this.colVisProp.slice(1))],r.groupHeader&&!Array.isArray(r.groupHeader)&&(r.groupHeader=[r.groupHeader]),e.classList.add("tabulator-print-table"),this.mapElementStyles(this.table.columnManager.getHeadersElement(),i,["border-top","border-left","border-right","border-bottom","background-color","color","font-weight","font-family","font-size"]),t.length>1e3&&console.warn("It may take a long time to render an HTML table with more than 1000 rows"),t.forEach((l,d)=>{let c;switch(l.type){case"header":i.appendChild(this.generateHeaderElement(l,r,n));break;case"group":s.appendChild(this.generateGroupElement(l,r,n));break;case"calc":s.appendChild(this.generateCalcElement(l,r,n));break;case"row":c=this.generateRowElement(l,r,n),this.mapElementStyles(d%2&&n.evenRow?n.evenRow:n.oddRow,c,["border-top","border-left","border-right","border-bottom","color","font-weight","font-family","font-size","background-color"]),s.appendChild(c);break}}),i.innerHTML&&e.appendChild(i),e.appendChild(s),this.mapElementStyles(this.table.element,e,["border-top","border-left","border-right","border-bottom"]),e}lookupTableStyles(){var t={};return this.cloneTableStyle&&window.getComputedStyle&&(t.oddRow=this.table.element.querySelector(".tabulator-row-odd:not(.tabulator-group):not(.tabulator-calcs)"),t.evenRow=this.table.element.querySelector(".tabulator-row-even:not(.tabulator-group):not(.tabulator-calcs)"),t.calcRow=this.table.element.querySelector(".tabulator-row.tabulator-calcs"),t.firstRow=this.table.element.querySelector(".tabulator-row:not(.tabulator-group):not(.tabulator-calcs)"),t.firstGroup=this.table.element.getElementsByClassName("tabulator-group")[0],t.firstRow&&(t.styleCells=t.firstRow.getElementsByClassName("tabulator-cell"),t.firstCell=t.styleCells[0],t.lastCell=t.styleCells[t.styleCells.length-1])),t}generateHeaderElement(t,e,i){var s=document.createElement("tr");return t.columns.forEach(n=>{if(n){var o=document.createElement("th"),r=n.component._column.definition.cssClass?n.component._column.definition.cssClass.split(" "):[];o.colSpan=n.width,o.rowSpan=n.height,o.innerHTML=n.value,this.cloneTableStyle&&(o.style.boxSizing="border-box"),r.forEach(function(l){o.classList.add(l)}),this.mapElementStyles(n.component.getElement(),o,["text-align","border-top","border-left","border-right","border-bottom","background-color","color","font-weight","font-family","font-size"]),this.mapElementStyles(n.component._column.contentElement,o,["padding-top","padding-left","padding-right","padding-bottom"]),n.component._column.visible?this.mapElementStyles(n.component.getElement(),o,["width"]):n.component._column.definition.width&&(o.style.width=n.component._column.definition.width+"px"),n.component._column.parent&&this.mapElementStyles(n.component._column.parent.groupElement,o,["border-top"]),s.appendChild(o)}}),s}generateGroupElement(t,e,i){var s=document.createElement("tr"),n=document.createElement("td"),o=t.columns[0];return s.classList.add("tabulator-print-table-row"),e.groupHeader&&e.groupHeader[t.indent]?o.value=e.groupHeader[t.indent](o.value,t.component._group.getRowCount(),t.component._group.getData(),t.component):e.groupHeader!==!1&&(o.value=t.component._group.generator(o.value,t.component._group.getRowCount(),t.component._group.getData(),t.component)),n.colSpan=o.width,n.innerHTML=o.value,s.classList.add("tabulator-print-table-group"),s.classList.add("tabulator-group-level-"+t.indent),o.component.isVisible()&&s.classList.add("tabulator-group-visible"),this.mapElementStyles(i.firstGroup,s,["border-top","border-left","border-right","border-bottom","color","font-weight","font-family","font-size","background-color"]),this.mapElementStyles(i.firstGroup,n,["padding-top","padding-left","padding-right","padding-bottom"]),s.appendChild(n),s}generateCalcElement(t,e,i){var s=this.generateRowElement(t,e,i);return s.classList.add("tabulator-print-table-calcs"),this.mapElementStyles(i.calcRow,s,["border-top","border-left","border-right","border-bottom","color","font-weight","font-family","font-size","background-color"]),s}generateRowElement(t,e,i){var s=document.createElement("tr");if(s.classList.add("tabulator-print-table-row"),t.columns.forEach((n,o)=>{if(n){var r=document.createElement("td"),l=n.component._column,d=this.table,c=d.columnManager.findColumnIndex(l),p=n.value,u,g={modules:{},getValue:function(){return p},getField:function(){return l.definition.field},getElement:function(){return r},getType:function(){return"cell"},getColumn:function(){return l.getComponent()},getData:function(){return t.component.getData()},getRow:function(){return t.component},getTable:function(){return d},getComponent:function(){return g},column:l},v=l.definition.cssClass?l.definition.cssClass.split(" "):[];if(v.forEach(function(f){r.classList.add(f)}),this.table.modExists("format")&&this.config.formatCells!==!1)p=this.table.modules.format.formatExportValue(g,this.colVisProp);else switch(typeof p){case"object":p=p!==null?JSON.stringify(p):"";break;case"undefined":p="";break}p instanceof Node?r.appendChild(p):r.innerHTML=p,u=i.styleCells&&i.styleCells[c]?i.styleCells[c]:i.firstCell,u&&(this.mapElementStyles(u,r,["padding-top","padding-left","padding-right","padding-bottom","border-top","border-left","border-right","border-bottom","color","font-weight","font-family","font-size","text-align"]),l.definition.align&&(r.style.textAlign=l.definition.align)),this.table.options.dataTree&&this.config.dataTree!==!1&&(e.treeElementField&&e.treeElementField==l.field||!e.treeElementField&&o==0)&&(t.component._row.modules.dataTree.controlEl&&r.insertBefore(t.component._row.modules.dataTree.controlEl.cloneNode(!0),r.firstChild),t.component._row.modules.dataTree.branchEl&&r.insertBefore(t.component._row.modules.dataTree.branchEl.cloneNode(!0),r.firstChild)),s.appendChild(r),g.modules.format&&g.modules.format.renderedCallback&&g.modules.format.renderedCallback()}}),e.rowFormatter&&t.type==="row"&&this.config.formatCells!==!1){let n=Object.assign(t.component);n.getElement=function(){return s},e.rowFormatter(t.component)}return s}generateHTMLTable(t){var e=document.createElement("div");return e.appendChild(this.generateTableElement(t)),e.innerHTML}getHtml(t,e,i,s){var n=this.generateExportList(i||this.table.options.htmlOutputConfig,e,t,s||"htmlOutput");return this.generateHTMLTable(n)}mapElementStyles(t,e,i){if(this.cloneTableStyle&&t&&e){var s={"background-color":"backgroundColor",color:"fontColor",width:"width","font-weight":"fontWeight","font-family":"fontFamily","font-size":"fontSize","text-align":"textAlign","border-top":"borderTop","border-left":"borderLeft","border-right":"borderRight","border-bottom":"borderBottom","padding-top":"paddingTop","padding-left":"paddingLeft","padding-right":"paddingRight","padding-bottom":"paddingBottom"};if(window.getComputedStyle){var n=window.getComputedStyle(t);i.forEach(function(o){e.style[s[o]]||(e.style[s[o]]=n.getPropertyValue(o))})}}}}Le.moduleName="export";var X6={"=":function(h,t,e,i){return t==h},"<":function(h,t,e,i){return t<h},"<=":function(h,t,e,i){return t<=h},">":function(h,t,e,i){return t>h},">=":function(h,t,e,i){return t>=h},"!=":function(h,t,e,i){return t!=h},regex:function(h,t,e,i){return typeof h=="string"&&(h=new RegExp(h)),h.test(t)},like:function(h,t,e,i){return h===null||typeof h>"u"?t===h:typeof t<"u"&&t!==null?String(t).toLowerCase().indexOf(h.toLowerCase())>-1:!1},keywords:function(h,t,e,i){var s=h.toLowerCase().split(typeof i.separator>"u"?" ":i.separator),n=String(t===null||typeof t>"u"?"":t).toLowerCase(),o=[];return s.forEach(r=>{n.includes(r)&&o.push(!0)}),i.matchAll?o.length===s.length:!!o.length},starts:function(h,t,e,i){return h===null||typeof h>"u"?t===h:typeof t<"u"&&t!==null?String(t).toLowerCase().startsWith(h.toLowerCase()):!1},ends:function(h,t,e,i){return h===null||typeof h>"u"?t===h:typeof t<"u"&&t!==null?String(t).toLowerCase().endsWith(h.toLowerCase()):!1},in:function(h,t,e,i){return Array.isArray(h)?h.length?h.indexOf(t)>-1:!0:(console.warn("Filter Error - filter value is not an array:",h),!1)}};class F extends M{constructor(t){super(t),this.filterList=[],this.headerFilters={},this.headerFilterColumns=[],this.prevHeaderFilterChangeCheck="",this.prevHeaderFilterChangeCheck="{}",this.changed=!1,this.tableInitialized=!1,this.registerTableOption("filterMode","local"),this.registerTableOption("initialFilter",!1),this.registerTableOption("initialHeaderFilter",!1),this.registerTableOption("headerFilterLiveFilterDelay",300),this.registerTableOption("placeholderHeaderFilter",!1),this.registerColumnOption("headerFilter"),this.registerColumnOption("headerFilterPlaceholder"),this.registerColumnOption("headerFilterParams"),this.registerColumnOption("headerFilterEmptyCheck"),this.registerColumnOption("headerFilterFunc"),this.registerColumnOption("headerFilterFuncParams"),this.registerColumnOption("headerFilterLiveFilter"),this.registerTableFunction("searchRows",this.searchRows.bind(this)),this.registerTableFunction("searchData",this.searchData.bind(this)),this.registerTableFunction("setFilter",this.userSetFilter.bind(this)),this.registerTableFunction("refreshFilter",this.userRefreshFilter.bind(this)),this.registerTableFunction("addFilter",this.userAddFilter.bind(this)),this.registerTableFunction("getFilters",this.getFilters.bind(this)),this.registerTableFunction("setHeaderFilterFocus",this.userSetHeaderFilterFocus.bind(this)),this.registerTableFunction("getHeaderFilterValue",this.userGetHeaderFilterValue.bind(this)),this.registerTableFunction("setHeaderFilterValue",this.userSetHeaderFilterValue.bind(this)),this.registerTableFunction("getHeaderFilters",this.getHeaderFilters.bind(this)),this.registerTableFunction("removeFilter",this.userRemoveFilter.bind(this)),this.registerTableFunction("clearFilter",this.userClearFilter.bind(this)),this.registerTableFunction("clearHeaderFilter",this.userClearHeaderFilter.bind(this)),this.registerComponentFunction("column","headerFilterFocus",this.setHeaderFilterFocus.bind(this)),this.registerComponentFunction("column","reloadHeaderFilter",this.reloadHeaderFilter.bind(this)),this.registerComponentFunction("column","getHeaderFilterValue",this.getHeaderFilterValue.bind(this)),this.registerComponentFunction("column","setHeaderFilterValue",this.setHeaderFilterValue.bind(this))}initialize(){this.subscribe("column-init",this.initializeColumnHeaderFilter.bind(this)),this.subscribe("column-width-fit-before",this.hideHeaderFilterElements.bind(this)),this.subscribe("column-width-fit-after",this.showHeaderFilterElements.bind(this)),this.subscribe("table-built",this.tableBuilt.bind(this)),this.subscribe("placeholder",this.generatePlaceholder.bind(this)),this.table.options.filterMode==="remote"&&this.subscribe("data-params",this.remoteFilterParams.bind(this)),this.registerDataHandler(this.filter.bind(this),10)}tableBuilt(){this.table.options.initialFilter&&this.setFilter(this.table.options.initialFilter),this.table.options.initialHeaderFilter&&this.table.options.initialHeaderFilter.forEach(t=>{var e=this.table.columnManager.findColumn(t.field);if(e)this.setHeaderFilterValue(e,t.value);else return console.warn("Column Filter Error - No matching column found:",t.field),!1}),this.tableInitialized=!0}remoteFilterParams(t,e,i,s){return s.filter=this.getFilters(!0,!0),s}generatePlaceholder(t){if(this.table.options.placeholderHeaderFilter&&Object.keys(this.headerFilters).length)return this.table.options.placeholderHeaderFilter}userSetFilter(t,e,i,s){this.setFilter(t,e,i,s),this.refreshFilter()}userRefreshFilter(){this.refreshFilter()}userAddFilter(t,e,i,s){this.addFilter(t,e,i,s),this.refreshFilter()}userSetHeaderFilterFocus(t){var e=this.table.columnManager.findColumn(t);if(e)this.setHeaderFilterFocus(e);else return console.warn("Column Filter Focus Error - No matching column found:",t),!1}userGetHeaderFilterValue(t){var e=this.table.columnManager.findColumn(t);if(e)return this.getHeaderFilterValue(e);console.warn("Column Filter Error - No matching column found:",t)}userSetHeaderFilterValue(t,e){var i=this.table.columnManager.findColumn(t);if(i)this.setHeaderFilterValue(i,e);else return console.warn("Column Filter Error - No matching column found:",t),!1}userRemoveFilter(t,e,i){this.removeFilter(t,e,i),this.refreshFilter()}userClearFilter(t){this.clearFilter(t),this.refreshFilter()}userClearHeaderFilter(){this.clearHeaderFilter(),this.refreshFilter()}searchRows(t,e,i){return this.search("rows",t,e,i)}searchData(t,e,i){return this.search("data",t,e,i)}initializeColumnHeaderFilter(t){var e=t.definition;e.headerFilter&&this.initializeColumn(t)}initializeColumn(t,e){var i=this,s=t.getField();function n(o){var r=t.modules.filter.tagType=="input"&&t.modules.filter.attrType=="text"||t.modules.filter.tagType=="textarea"?"partial":"match",l="",d="",c;if(typeof t.modules.filter.prevSuccess>"u"||t.modules.filter.prevSuccess!==o){if(t.modules.filter.prevSuccess=o,t.modules.filter.emptyFunc(o))delete i.headerFilters[s];else{switch(t.modules.filter.value=o,typeof t.definition.headerFilterFunc){case"string":F.filters[t.definition.headerFilterFunc]?(l=t.definition.headerFilterFunc,c=function(p){var u=t.definition.headerFilterFuncParams||{},g=t.getFieldValue(p);return u=typeof u=="function"?u(o,g,p):u,F.filters[t.definition.headerFilterFunc](o,g,p,u)}):console.warn("Header Filter Error - Matching filter function not found: ",t.definition.headerFilterFunc);break;case"function":c=function(p){var u=t.definition.headerFilterFuncParams||{},g=t.getFieldValue(p);return u=typeof u=="function"?u(o,g,p):u,t.definition.headerFilterFunc(o,g,p,u)},l=c;break}if(!c)switch(r){case"partial":c=function(p){var u=t.getFieldValue(p);return typeof u<"u"&&u!==null?String(u).toLowerCase().indexOf(String(o).toLowerCase())>-1:!1},l="like";break;default:c=function(p){return t.getFieldValue(p)==o},l="="}i.headerFilters[s]={value:o,func:c,type:l}}t.modules.filter.value=o,d=JSON.stringify(i.headerFilters),i.prevHeaderFilterChangeCheck!==d&&(i.prevHeaderFilterChangeCheck=d,i.trackChanges(),i.refreshFilter())}return!0}t.modules.filter={success:n,attrType:!1,tagType:!1,emptyFunc:!1},this.generateHeaderFilterElement(t)}generateHeaderFilterElement(t,e,i){var s=this,n=t.modules.filter.success,o=t.getField(),r,l,d,c,p,u,g,v;t.modules.filter.value=e;function f(){}function b(m){v=m}if(t.modules.filter.headerElement&&t.modules.filter.headerElement.parentNode&&t.contentElement.removeChild(t.modules.filter.headerElement.parentNode),o){switch(t.modules.filter.emptyFunc=t.definition.headerFilterEmptyCheck||function(m){return!m&&m!==0},r=document.createElement("div"),r.classList.add("tabulator-header-filter"),typeof t.definition.headerFilter){case"string":s.table.modules.edit.editors[t.definition.headerFilter]?(l=s.table.modules.edit.editors[t.definition.headerFilter],(t.definition.headerFilter==="tick"||t.definition.headerFilter==="tickCross")&&!t.definition.headerFilterEmptyCheck&&(t.modules.filter.emptyFunc=function(m){return m!==!0&&m!==!1})):console.warn("Filter Error - Cannot build header filter, No such editor found: ",t.definition.editor);break;case"function":l=t.definition.headerFilter;break;case"boolean":t.modules.edit&&t.modules.edit.editor?l=t.modules.edit.editor:t.definition.formatter&&s.table.modules.edit.editors[t.definition.formatter]?(l=s.table.modules.edit.editors[t.definition.formatter],(t.definition.formatter==="tick"||t.definition.formatter==="tickCross")&&!t.definition.headerFilterEmptyCheck&&(t.modules.filter.emptyFunc=function(m){return m!==!0&&m!==!1})):l=s.table.modules.edit.editors.input;break}if(l){if(c={getValue:function(){return typeof e<"u"?e:""},getField:function(){return t.definition.field},getElement:function(){return r},getColumn:function(){return t.getComponent()},getTable:()=>this.table,getType:()=>"header",getRow:function(){return{normalizeHeight:function(){}}}},g=t.definition.headerFilterParams||{},g=typeof g=="function"?g.call(s.table,c):g,d=l.call(this.table.modules.edit,c,b,n,f,g),!d){console.warn("Filter Error - Cannot add filter to "+o+" column, editor returned a value of false");return}if(!(d instanceof Node)){console.warn("Filter Error - Cannot add filter to "+o+" column, editor should return an instance of Node, the editor returned:",d);return}s.langBind("headerFilters|columns|"+t.definition.field,function(m){d.setAttribute("placeholder",typeof m<"u"&&m?m:t.definition.headerFilterPlaceholder||s.langText("headerFilters|default"))}),d.addEventListener("click",function(m){m.stopPropagation(),d.focus()}),d.addEventListener("focus",m=>{var y=this.table.columnManager.contentsElement.scrollLeft,E=this.table.rowManager.element.scrollLeft;y!==E&&(this.table.rowManager.scrollHorizontal(y),this.table.columnManager.scrollHorizontal(y))}),p=!1,u=function(m){p&&clearTimeout(p),p=setTimeout(function(){n(d.value)},s.table.options.headerFilterLiveFilterDelay)},t.modules.filter.headerElement=d,t.modules.filter.attrType=d.hasAttribute("type")?d.getAttribute("type").toLowerCase():"",t.modules.filter.tagType=d.tagName.toLowerCase(),t.definition.headerFilterLiveFilter!==!1&&(t.definition.headerFilter==="autocomplete"||t.definition.headerFilter==="tickCross"||(t.definition.editor==="autocomplete"||t.definition.editor==="tickCross")&&t.definition.headerFilter===!0||(d.addEventListener("keyup",u),d.addEventListener("search",u),t.modules.filter.attrType=="number"&&d.addEventListener("change",function(m){n(d.value)}),t.modules.filter.attrType=="text"&&this.table.browser!=="ie"&&d.setAttribute("type","search")),(t.modules.filter.tagType=="input"||t.modules.filter.tagType=="select"||t.modules.filter.tagType=="textarea")&&d.addEventListener("mousedown",function(m){m.stopPropagation()})),r.appendChild(d),t.contentElement.appendChild(r),i||s.headerFilterColumns.push(t),v&&v()}}else console.warn("Filter Error - Cannot add header filter, column has no field set:",t.definition.title)}hideHeaderFilterElements(){this.headerFilterColumns.forEach(function(t){t.modules.filter&&t.modules.filter.headerElement&&(t.modules.filter.headerElement.style.display="none")})}showHeaderFilterElements(){this.headerFilterColumns.forEach(function(t){t.modules.filter&&t.modules.filter.headerElement&&(t.modules.filter.headerElement.style.display="")})}setHeaderFilterFocus(t){t.modules.filter&&t.modules.filter.headerElement?t.modules.filter.headerElement.focus():console.warn("Column Filter Focus Error - No header filter set on column:",t.getField())}getHeaderFilterValue(t){if(t.modules.filter&&t.modules.filter.headerElement)return t.modules.filter.value;console.warn("Column Filter Error - No header filter set on column:",t.getField())}setHeaderFilterValue(t,e){t&&(t.modules.filter&&t.modules.filter.headerElement?(this.generateHeaderFilterElement(t,e,!0),t.modules.filter.success(e)):console.warn("Column Filter Error - No header filter set on column:",t.getField()))}reloadHeaderFilter(t){t&&(t.modules.filter&&t.modules.filter.headerElement?this.generateHeaderFilterElement(t,t.modules.filter.value,!0):console.warn("Column Filter Error - No header filter set on column:",t.getField()))}refreshFilter(){this.tableInitialized&&(this.table.options.filterMode==="remote"?this.reloadData(null,!1,!1):this.refreshData(!0))}trackChanges(){this.changed=!0,this.dispatch("filter-changed")}hasChanged(){var t=this.changed;return this.changed=!1,t}setFilter(t,e,i,s){this.filterList=[],Array.isArray(t)||(t=[{field:t,type:e,value:i,params:s}]),this.addFilter(t)}addFilter(t,e,i,s){var n=!1;Array.isArray(t)||(t=[{field:t,type:e,value:i,params:s}]),t.forEach(o=>{o=this.findFilter(o),o&&(this.filterList.push(o),n=!0)}),n&&this.trackChanges()}findFilter(t){var e;if(Array.isArray(t))return this.findSubFilters(t);var i=!1;return typeof t.field=="function"?i=function(s){return t.field(s,t.type||{})}:F.filters[t.type]?(e=this.table.columnManager.getColumnByField(t.field),e?i=function(s){return F.filters[t.type](t.value,e.getFieldValue(s),s,t.params||{})}:i=function(s){return F.filters[t.type](t.value,s[t.field],s,t.params||{})}):console.warn("Filter Error - No such filter type found, ignoring: ",t.type),t.func=i,t.func?t:!1}findSubFilters(t){var e=[];return t.forEach(i=>{i=this.findFilter(i),i&&e.push(i)}),e.length?e:!1}getFilters(t,e){var i=[];return t&&(i=this.getHeaderFilters()),e&&i.forEach(function(s){typeof s.type=="function"&&(s.type="function")}),i=i.concat(this.filtersToArray(this.filterList,e)),i}filtersToArray(t,e){var i=[];return t.forEach(s=>{var n;Array.isArray(s)?i.push(this.filtersToArray(s,e)):(n={field:s.field,type:s.type,value:s.value},e&&typeof n.type=="function"&&(n.type="function"),i.push(n))}),i}getHeaderFilters(){var t=[];for(var e in this.headerFilters)t.push({field:e,type:this.headerFilters[e].type,value:this.headerFilters[e].value});return t}removeFilter(t,e,i){Array.isArray(t)||(t=[{field:t,type:e,value:i}]),t.forEach(s=>{var n=-1;typeof s.field=="object"?n=this.filterList.findIndex(o=>s===o):n=this.filterList.findIndex(o=>s.field===o.field&&s.type===o.type&&s.value===o.value),n>-1?this.filterList.splice(n,1):console.warn("Filter Error - No matching filter type found, ignoring: ",s.type)}),this.trackChanges()}clearFilter(t){this.filterList=[],t&&this.clearHeaderFilter(),this.trackChanges()}clearHeaderFilter(){this.headerFilters={},this.prevHeaderFilterChangeCheck="{}",this.headerFilterColumns.forEach(t=>{typeof t.modules.filter.value<"u"&&delete t.modules.filter.value,t.modules.filter.prevSuccess=void 0,this.reloadHeaderFilter(t)}),this.trackChanges()}search(t,e,i,s){var n=[],o=[];return Array.isArray(e)||(e=[{field:e,type:i,value:s}]),e.forEach(r=>{r=this.findFilter(r),r&&o.push(r)}),this.table.rowManager.rows.forEach(r=>{var l=!0;o.forEach(d=>{this.filterRecurse(d,r.getData())||(l=!1)}),l&&n.push(t==="data"?r.getData("data"):r.getComponent())}),n}filter(t,e){var i=[],s=[];return this.subscribedExternal("dataFiltering")&&this.dispatchExternal("dataFiltering",this.getFilters(!0)),this.table.options.filterMode!=="remote"&&(this.filterList.length||Object.keys(this.headerFilters).length)?t.forEach(n=>{this.filterRow(n)&&i.push(n)}):i=t.slice(0),this.subscribedExternal("dataFiltered")&&(i.forEach(n=>{s.push(n.getComponent())}),this.dispatchExternal("dataFiltered",this.getFilters(!0),s)),i}filterRow(t,e){var i=!0,s=t.getData();this.filterList.forEach(o=>{this.filterRecurse(o,s)||(i=!1)});for(var n in this.headerFilters)this.headerFilters[n].func(s)||(i=!1);return i}filterRecurse(t,e){var i=!1;return Array.isArray(t)?t.forEach(s=>{this.filterRecurse(s,e)&&(i=!0)}):i=t.func(e),i}}F.moduleName="filter";F.filters=X6;function J6(h,t,e){return this.emptyToSpace(this.sanitizeHTML(h.getValue()))}function K6(h,t,e){return h.getValue()}function Y6(h,t,e){return h.getElement().style.whiteSpace="pre-wrap",this.emptyToSpace(this.sanitizeHTML(h.getValue()))}function $6(h,t,e){var i=parseFloat(h.getValue()),s="",n,o,r,l,d,c=t.decimal||".",p=t.thousand||",",u=t.negativeSign||"-",g=t.symbol||"",v=!!t.symbolAfter,f=typeof t.precision<"u"?t.precision:2;if(isNaN(i))return this.emptyToSpace(this.sanitizeHTML(h.getValue()));if(i<0&&(i=Math.abs(i),s=u),n=f!==!1?i.toFixed(f):i,n=String(n).split("."),o=n[0],r=n.length>1?c+n[1]:"",t.thousand!==!1)for(l=/(\d+)(\d{3})/;l.test(o);)o=o.replace(l,"$1"+p+"$2");return d=o+r,s===!0?(d="("+d+")",v?d+g:g+d):v?s+d+g:s+g+d}function Q6(h,t,e){var i=h.getValue(),s=t.urlPrefix||"",n=t.download,o=i,r=document.createElement("a"),l;function d(c,p){var u=c.shift(),g=p[u];return c.length&&typeof g=="object"?d(c,g):g}if(t.labelField&&(l=h.getData(),o=d(t.labelField.split(this.table.options.nestedFieldSeparator),l)),t.label)switch(typeof t.label){case"string":o=t.label;break;case"function":o=t.label(h);break}if(o){if(t.urlField&&(l=h.getData(),i=C.retrieveNestedData(this.table.options.nestedFieldSeparator,t.urlField,l)),t.url)switch(typeof t.url){case"string":i=t.url;break;case"function":i=t.url(h);break}return r.setAttribute("href",s+i),t.target&&r.setAttribute("target",t.target),t.download&&(typeof n=="function"?n=n(h):n=n===!0?"":n,r.setAttribute("download",n)),r.innerHTML=this.emptyToSpace(this.sanitizeHTML(o)),r}else return"&nbsp;"}function t8(h,t,e){var i=document.createElement("img"),s=h.getValue();switch(t.urlPrefix&&(s=t.urlPrefix+h.getValue()),t.urlSuffix&&(s=s+t.urlSuffix),i.setAttribute("src",s),typeof t.height){case"number":i.style.height=t.height+"px";break;case"string":i.style.height=t.height;break}switch(typeof t.width){case"number":i.style.width=t.width+"px";break;case"string":i.style.width=t.width;break}return i.addEventListener("load",function(){h.getRow().normalizeHeight()}),i}function e8(h,t,e){var i=h.getValue(),s=h.getElement(),n=t.allowEmpty,o=t.allowTruthy,r=Object.keys(t).includes("trueValue"),l=typeof t.tickElement<"u"?t.tickElement:'<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#2DC214" clip-rule="evenodd" d="M21.652,3.211c-0.293-0.295-0.77-0.295-1.061,0L9.41,14.34  c-0.293,0.297-0.771,0.297-1.062,0L3.449,9.351C3.304,9.203,3.114,9.13,2.923,9.129C2.73,9.128,2.534,9.201,2.387,9.351  l-2.165,1.946C0.078,11.445,0,11.63,0,11.823c0,0.194,0.078,0.397,0.223,0.544l4.94,5.184c0.292,0.296,0.771,0.776,1.062,1.07  l2.124,2.141c0.292,0.293,0.769,0.293,1.062,0l14.366-14.34c0.293-0.294,0.293-0.777,0-1.071L21.652,3.211z" fill-rule="evenodd"/></svg>',d=typeof t.crossElement<"u"?t.crossElement:'<svg enable-background="new 0 0 24 24" height="14" width="14"  viewBox="0 0 24 24" xml:space="preserve" ><path fill="#CE1515" d="M22.245,4.015c0.313,0.313,0.313,0.826,0,1.139l-6.276,6.27c-0.313,0.312-0.313,0.826,0,1.14l6.273,6.272  c0.313,0.313,0.313,0.826,0,1.14l-2.285,2.277c-0.314,0.312-0.828,0.312-1.142,0l-6.271-6.271c-0.313-0.313-0.828-0.313-1.141,0  l-6.276,6.267c-0.313,0.313-0.828,0.313-1.141,0l-2.282-2.28c-0.313-0.313-0.313-0.826,0-1.14l6.278-6.269  c0.313-0.312,0.313-0.826,0-1.14L1.709,5.147c-0.314-0.313-0.314-0.827,0-1.14l2.284-2.278C4.308,1.417,4.821,1.417,5.135,1.73  L11.405,8c0.314,0.314,0.828,0.314,1.141,0.001l6.276-6.267c0.312-0.312,0.826-0.312,1.141,0L22.245,4.015z"/></svg>';return r&&i===t.trueValue||!r&&(o&&i||i===!0||i==="true"||i==="True"||i===1||i==="1")?(s.setAttribute("aria-checked",!0),l||""):n&&(i==="null"||i===""||i===null||typeof i>"u")?(s.setAttribute("aria-checked","mixed"),""):(s.setAttribute("aria-checked",!1),d||"")}function i8(h,t,e){var i=window.DateTime||luxon.DateTime,s=t.inputFormat||"yyyy-MM-dd HH:mm:ss",n=t.outputFormat||"dd/MM/yyyy HH:mm:ss",o=typeof t.invalidPlaceholder<"u"?t.invalidPlaceholder:"",r=h.getValue();if(typeof i<"u"){var l;return i.isDateTime(r)?l=r:s==="iso"?l=i.fromISO(String(r)):l=i.fromFormat(String(r),s),l.isValid?(t.timezone&&(l=l.setZone(t.timezone)),l.toFormat(n)):o===!0||!r?r:typeof o=="function"?o(r):o}else console.error("Format Error - 'datetime' formatter is dependant on luxon.js")}function s8(h,t,e){var i=window.DateTime||luxon.DateTime,s=t.inputFormat||"yyyy-MM-dd HH:mm:ss",n=typeof t.invalidPlaceholder<"u"?t.invalidPlaceholder:"",o=typeof t.suffix<"u"?t.suffix:!1,r=typeof t.unit<"u"?t.unit:"days",l=typeof t.humanize<"u"?t.humanize:!1,d=typeof t.date<"u"?t.date:i.now(),c=h.getValue();if(typeof i<"u"){var p;return i.isDateTime(c)?p=c:s==="iso"?p=i.fromISO(String(c)):p=i.fromFormat(String(c),s),p.isValid?l?p.diff(d,r).toHuman()+(o?" "+o:""):parseInt(p.diff(d,r)[r])+(o?" "+o:""):n===!0?c:typeof n=="function"?n(c):n}else console.error("Format Error - 'datetimediff' formatter is dependant on luxon.js")}function a8(h,t,e){var i=h.getValue();return typeof t[i]>"u"?(console.warn("Missing display value for "+i),i):t[i]}function n8(h,t,e){var i=h.getValue(),s=h.getElement(),n=t&&t.stars?t.stars:5,o=document.createElement("span"),r=document.createElementNS("http://www.w3.org/2000/svg","svg"),l='<polygon fill="#FFEA00" stroke="#C1AB60" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>',d='<polygon fill="#D2D2D2" stroke="#686868" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>';o.style.verticalAlign="middle",r.setAttribute("width","14"),r.setAttribute("height","14"),r.setAttribute("viewBox","0 0 512 512"),r.setAttribute("xml:space","preserve"),r.style.padding="0 1px",i=i&&!isNaN(i)?parseInt(i):0,i=Math.max(0,Math.min(i,n));for(var c=1;c<=n;c++){var p=r.cloneNode(!0);p.innerHTML=c<=i?l:d,o.appendChild(p)}return s.style.whiteSpace="nowrap",s.style.overflow="hidden",s.style.textOverflow="ellipsis",s.setAttribute("aria-label",i),o}function o8(h,t,e){var i=this.sanitizeHTML(h.getValue())||0,s=document.createElement("span"),n=t&&t.max?t.max:100,o=t&&t.min?t.min:0,r=t&&typeof t.color<"u"?t.color:["red","orange","green"],l="#666666",d,c;if(!(isNaN(i)||typeof h.getValue()>"u")){switch(s.classList.add("tabulator-traffic-light"),c=parseFloat(i)<=n?parseFloat(i):n,c=parseFloat(c)>=o?parseFloat(c):o,d=(n-o)/100,c=Math.round((c-o)/d),typeof r){case"string":l=r;break;case"function":l=r(i);break;case"object":if(Array.isArray(r)){var p=100/r.length,u=Math.floor(c/p);u=Math.min(u,r.length-1),u=Math.max(u,0),l=r[u];break}}return s.style.backgroundColor=l,s}}function r8(h,t={},e){var i=this.sanitizeHTML(h.getValue())||0,s=h.getElement(),n=t.max?t.max:100,o=t.min?t.min:0,r=t.legendAlign?t.legendAlign:"center",l,d,c,p,u;switch(d=parseFloat(i)<=n?parseFloat(i):n,d=parseFloat(d)>=o?parseFloat(d):o,l=(n-o)/100,d=Math.round((d-o)/l),typeof t.color){case"string":c=t.color;break;case"function":c=t.color(i);break;case"object":if(Array.isArray(t.color)){let b=100/t.color.length,m=Math.floor(d/b);m=Math.min(m,t.color.length-1),m=Math.max(m,0),c=t.color[m];break}default:c="#2DC214"}switch(typeof t.legend){case"string":p=t.legend;break;case"function":p=t.legend(i);break;case"boolean":p=i;break;default:p=!1}switch(typeof t.legendColor){case"string":u=t.legendColor;break;case"function":u=t.legendColor(i);break;case"object":if(Array.isArray(t.legendColor)){let b=100/t.legendColor.length,m=Math.floor(d/b);m=Math.min(m,t.legendColor.length-1),m=Math.max(m,0),u=t.legendColor[m]}break;default:u="#000"}s.style.minWidth="30px",s.style.position="relative",s.setAttribute("aria-label",d);var g=document.createElement("div");g.style.display="inline-block",g.style.width=d+"%",g.style.backgroundColor=c,g.style.height="100%",g.setAttribute("data-max",n),g.setAttribute("data-min",o);var v=document.createElement("div");if(v.style.position="relative",v.style.width="100%",v.style.height="100%",p){var f=document.createElement("div");f.style.position="absolute",f.style.top=0,f.style.left=0,f.style.textAlign=r,f.style.width="100%",f.style.color=u,f.innerHTML=p}return e(function(){if(!(h instanceof Ce)){var b=document.createElement("div");b.style.position="absolute",b.style.top="4px",b.style.bottom="4px",b.style.left="4px",b.style.right="4px",s.appendChild(b),s=b}s.appendChild(v),v.appendChild(g),p&&v.appendChild(f)}),""}function l8(h,t,e){return h.getElement().style.backgroundColor=this.sanitizeHTML(h.getValue()),""}function h8(h,t,e){return'<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#2DC214" clip-rule="evenodd" d="M21.652,3.211c-0.293-0.295-0.77-0.295-1.061,0L9.41,14.34  c-0.293,0.297-0.771,0.297-1.062,0L3.449,9.351C3.304,9.203,3.114,9.13,2.923,9.129C2.73,9.128,2.534,9.201,2.387,9.351  l-2.165,1.946C0.078,11.445,0,11.63,0,11.823c0,0.194,0.078,0.397,0.223,0.544l4.94,5.184c0.292,0.296,0.771,0.776,1.062,1.07  l2.124,2.141c0.292,0.293,0.769,0.293,1.062,0l14.366-14.34c0.293-0.294,0.293-0.777,0-1.071L21.652,3.211z" fill-rule="evenodd"/></svg>'}function d8(h,t,e){return'<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#CE1515" d="M22.245,4.015c0.313,0.313,0.313,0.826,0,1.139l-6.276,6.27c-0.313,0.312-0.313,0.826,0,1.14l6.273,6.272  c0.313,0.313,0.313,0.826,0,1.14l-2.285,2.277c-0.314,0.312-0.828,0.312-1.142,0l-6.271-6.271c-0.313-0.313-0.828-0.313-1.141,0  l-6.276,6.267c-0.313,0.313-0.828,0.313-1.141,0l-2.282-2.28c-0.313-0.313-0.313-0.826,0-1.14l6.278-6.269  c0.313-0.312,0.313-0.826,0-1.14L1.709,5.147c-0.314-0.313-0.314-0.827,0-1.14l2.284-2.278C4.308,1.417,4.821,1.417,5.135,1.73  L11.405,8c0.314,0.314,0.828,0.314,1.141,0.001l6.276-6.267c0.312-0.312,0.826-0.312,1.141,0L22.245,4.015z"/></svg>'}function c8(h,t,e){var i=document.createElement("span"),s=h.getRow(),n=h.getTable();return s.watchPosition(o=>{t.relativeToPage&&(o+=n.modules.page.getPageSize()*(n.modules.page.getPage()-1)),i.innerText=o}),i}function p8(h,t,e){return h.getElement().classList.add("tabulator-row-handle"),"<div class='tabulator-row-handle-box'><div class='tabulator-row-handle-bar'></div><div class='tabulator-row-handle-bar'></div><div class='tabulator-row-handle-bar'></div></div>"}function u8(h,t,e){var i=document.createElement("div"),s=h.getRow()._row.modules.responsiveLayout;i.classList.add("tabulator-responsive-collapse-toggle"),i.innerHTML=`<svg class='tabulator-responsive-collapse-toggle-open' viewbox="0 0 24 24">
  <line x1="7" y1="12" x2="17" y2="12" fill="none" stroke-width="3" stroke-linecap="round" />
  <line y1="7" x1="12" y2="17" x2="12" fill="none" stroke-width="3" stroke-linecap="round" />
</svg>

<svg class='tabulator-responsive-collapse-toggle-close' viewbox="0 0 24 24">
  <line x1="7" y1="12" x2="17" y2="12"  fill="none" stroke-width="3" stroke-linecap="round" />
</svg>`,h.getElement().classList.add("tabulator-row-handle");function n(o){var r=s.element;s.open=o,r&&(s.open?(i.classList.add("open"),r.style.display=""):(i.classList.remove("open"),r.style.display="none"))}return i.addEventListener("click",function(o){o.stopImmediatePropagation(),n(!s.open),h.getTable().rowManager.adjustTableSize()}),n(s.open),i}function g8(h,t,e){var i=document.createElement("input"),s=!1;if(i.type="checkbox",i.setAttribute("aria-label","Select Row"),this.table.modExists("selectRow",!0))if(i.addEventListener("click",o=>{o.stopPropagation()}),typeof h.getRow=="function"){var n=h.getRow();n instanceof tt?(i.addEventListener("change",o=>{this.table.options.selectableRowsRangeMode==="click"&&s?s=!1:n.toggleSelect()}),this.table.options.selectableRowsRangeMode==="click"&&i.addEventListener("click",o=>{s=!0,this.table.modules.selectRow.handleComplexRowClick(n._row,o)}),i.checked=n.isSelected&&n.isSelected(),this.table.modules.selectRow.registerRowSelectCheckbox(n,i)):i=""}else i.addEventListener("change",o=>{this.table.modules.selectRow.selectedRows.length?this.table.deselectRow():this.table.selectRow(t.rowRange)}),this.table.modules.selectRow.registerHeaderSelectCheckbox(i);return i}var f8={plaintext:J6,html:K6,textarea:Y6,money:$6,link:Q6,image:t8,tickCross:e8,datetime:i8,datetimediff:s8,lookup:a8,star:n8,traffic:o8,progress:r8,color:l8,buttonTick:h8,buttonCross:d8,rownum:c8,handle:p8,responsiveCollapse:u8,rowSelection:g8};class V extends M{constructor(t){super(t),this.registerColumnOption("formatter"),this.registerColumnOption("formatterParams"),this.registerColumnOption("formatterPrint"),this.registerColumnOption("formatterPrintParams"),this.registerColumnOption("formatterClipboard"),this.registerColumnOption("formatterClipboardParams"),this.registerColumnOption("formatterHtmlOutput"),this.registerColumnOption("formatterHtmlOutputParams"),this.registerColumnOption("titleFormatter"),this.registerColumnOption("titleFormatterParams")}initialize(){this.subscribe("cell-format",this.formatValue.bind(this)),this.subscribe("cell-rendered",this.cellRendered.bind(this)),this.subscribe("column-layout",this.initializeColumn.bind(this)),this.subscribe("column-format",this.formatHeader.bind(this))}initializeColumn(t){t.modules.format=this.lookupFormatter(t,""),typeof t.definition.formatterPrint<"u"&&(t.modules.format.print=this.lookupFormatter(t,"Print")),typeof t.definition.formatterClipboard<"u"&&(t.modules.format.clipboard=this.lookupFormatter(t,"Clipboard")),typeof t.definition.formatterHtmlOutput<"u"&&(t.modules.format.htmlOutput=this.lookupFormatter(t,"HtmlOutput"))}lookupFormatter(t,e){var i={params:t.definition["formatter"+e+"Params"]||{}},s=t.definition["formatter"+e];switch(typeof s){case"string":V.formatters[s]?i.formatter=V.formatters[s]:(console.warn("Formatter Error - No such formatter found: ",s),i.formatter=V.formatters.plaintext);break;case"function":i.formatter=s;break;default:i.formatter=V.formatters.plaintext;break}return i}cellRendered(t){t.modules.format&&t.modules.format.renderedCallback&&!t.modules.format.rendered&&(t.modules.format.renderedCallback(),t.modules.format.rendered=!0)}formatHeader(t,e,i){var s,n,o,r;return t.definition.titleFormatter?(s=this.getFormatter(t.definition.titleFormatter),o=l=>{t.titleFormatterRendered=l},r={getValue:function(){return e},getElement:function(){return i},getType:function(){return"header"},getColumn:function(){return t.getComponent()},getTable:()=>this.table},n=t.definition.titleFormatterParams||{},n=typeof n=="function"?n():n,s.call(this,r,n,o)):e}formatValue(t){var e=t.getComponent(),i=typeof t.column.modules.format.params=="function"?t.column.modules.format.params(e):t.column.modules.format.params;function s(n){t.modules.format||(t.modules.format={}),t.modules.format.renderedCallback=n,t.modules.format.rendered=!1}return t.column.modules.format.formatter.call(this,e,i,s)}formatExportValue(t,e){var i=t.column.modules.format[e],s;if(i){let n=function(o){t.modules.format||(t.modules.format={}),t.modules.format.renderedCallback=o,t.modules.format.rendered=!1};return s=typeof i.params=="function"?i.params(t.getComponent()):i.params,i.formatter.call(this,t.getComponent(),s,n)}else return this.formatValue(t)}sanitizeHTML(t){if(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=/]/g,function(i){return e[i]})}else return t}emptyToSpace(t){return t===null||typeof t>"u"||t===""?"&nbsp;":t}getFormatter(t){switch(typeof t){case"string":V.formatters[t]?t=V.formatters[t]:(console.warn("Formatter Error - No such formatter found: ",t),t=V.formatters.plaintext);break;case"function":break;default:t=V.formatters.plaintext;break}return t}}V.moduleName="format";V.formatters=f8;class ke extends M{constructor(t){super(t),this.leftColumns=[],this.rightColumns=[],this.initializationMode="left",this.active=!1,this.blocked=!0,this.registerColumnOption("frozen")}reset(){this.initializationMode="left",this.leftColumns=[],this.rightColumns=[],this.active=!1}initialize(){this.subscribe("cell-layout",this.layoutCell.bind(this)),this.subscribe("column-init",this.initializeColumn.bind(this)),this.subscribe("column-width",this.layout.bind(this)),this.subscribe("row-layout-after",this.layoutRow.bind(this)),this.subscribe("table-layout",this.layout.bind(this)),this.subscribe("columns-loading",this.reset.bind(this)),this.subscribe("column-add",this.reinitializeColumns.bind(this)),this.subscribe("column-deleted",this.reinitializeColumns.bind(this)),this.subscribe("column-hide",this.reinitializeColumns.bind(this)),this.subscribe("column-show",this.reinitializeColumns.bind(this)),this.subscribe("columns-loaded",this.reinitializeColumns.bind(this)),this.subscribe("table-redraw",this.layout.bind(this)),this.subscribe("layout-refreshing",this.blockLayout.bind(this)),this.subscribe("layout-refreshed",this.unblockLayout.bind(this)),this.subscribe("scrollbar-vertical",this.adjustForScrollbar.bind(this))}blockLayout(){this.blocked=!0}unblockLayout(){this.blocked=!1}layoutCell(t){this.layoutElement(t.element,t.column)}reinitializeColumns(){this.reset(),this.table.columnManager.columnsByIndex.forEach(t=>{this.initializeColumn(t)}),this.layout()}initializeColumn(t){var e={margin:0,edge:!1};t.isGroup||(this.frozenCheck(t)?(e.position=this.initializationMode,this.initializationMode=="left"?this.leftColumns.push(t):this.rightColumns.unshift(t),this.active=!0,t.modules.frozen=e):this.initializationMode="right")}frozenCheck(t){return t.parent.isGroup&&t.definition.frozen&&console.warn("Frozen Column Error - Parent column group must be frozen, not individual columns or sub column groups"),t.parent.isGroup?this.frozenCheck(t.parent):t.definition.frozen}layoutCalcRows(){this.table.modExists("columnCalcs")&&(this.table.modules.columnCalcs.topInitialized&&this.table.modules.columnCalcs.topRow&&this.layoutRow(this.table.modules.columnCalcs.topRow),this.table.modules.columnCalcs.botInitialized&&this.table.modules.columnCalcs.botRow&&this.layoutRow(this.table.modules.columnCalcs.botRow),this.table.modExists("groupRows")&&this.layoutGroupCalcs(this.table.modules.groupRows.getGroups()))}layoutGroupCalcs(t){t.forEach(e=>{e.calcs.top&&this.layoutRow(e.calcs.top),e.calcs.bottom&&this.layoutRow(e.calcs.bottom),e.groupList&&e.groupList.length&&this.layoutGroupCalcs(e.groupList)})}layoutColumnPosition(t){var e=[],i=0,s=0;this.leftColumns.forEach((n,o)=>{if(n.modules.frozen.marginValue=i,n.modules.frozen.margin=n.modules.frozen.marginValue+"px",n.visible&&(i+=n.getWidth()),o==this.leftColumns.length-1?n.modules.frozen.edge=!0:n.modules.frozen.edge=!1,n.parent.isGroup){var r=this.getColGroupParentElement(n);e.includes(r)||(this.layoutElement(r,n),e.push(r)),r.classList.toggle("tabulator-frozen-left",n.modules.frozen.edge&&n.modules.frozen.position==="left"),r.classList.toggle("tabulator-frozen-right",n.modules.frozen.edge&&n.modules.frozen.position==="right")}else this.layoutElement(n.getElement(),n);t&&n.cells.forEach(l=>{this.layoutElement(l.getElement(!0),n)})}),this.rightColumns.forEach((n,o)=>{n.modules.frozen.marginValue=s,n.modules.frozen.margin=n.modules.frozen.marginValue+"px",n.visible&&(s+=n.getWidth()),o==this.rightColumns.length-1?n.modules.frozen.edge=!0:n.modules.frozen.edge=!1,n.parent.isGroup?this.layoutElement(this.getColGroupParentElement(n),n):this.layoutElement(n.getElement(),n),t&&n.cells.forEach(r=>{this.layoutElement(r.getElement(!0),n)})})}getColGroupParentElement(t){return t.parent.isGroup?this.getColGroupParentElement(t.parent):t.getElement()}layout(){this.active&&!this.blocked&&(this.layoutColumnPosition(),this.reinitializeRows(),this.layoutCalcRows())}reinitializeRows(){var t=this.table.rowManager.getVisibleRows(!0),e=this.table.rowManager.getRows().filter(i=>!t.includes(i));e.forEach(i=>{i.deinitialize()}),t.forEach(i=>{i.type==="row"&&this.layoutRow(i)})}layoutRow(t){this.table.options.layout==="fitDataFill"&&this.rightColumns.length&&(this.table.rowManager.getTableElement().style.minWidth="calc(100% - "+this.rightMargin+")"),this.leftColumns.forEach(e=>{var i=t.getCell(e);i&&this.layoutElement(i.getElement(!0),e)}),this.rightColumns.forEach(e=>{var i=t.getCell(e);i&&this.layoutElement(i.getElement(!0),e)})}layoutElement(t,e){var i;e.modules.frozen&&t&&(t.style.position="sticky",this.table.rtl?i=e.modules.frozen.position==="left"?"right":"left":i=e.modules.frozen.position,t.style[i]=e.modules.frozen.margin,t.classList.add("tabulator-frozen"),t.classList.toggle("tabulator-frozen-left",e.modules.frozen.edge&&e.modules.frozen.position==="left"),t.classList.toggle("tabulator-frozen-right",e.modules.frozen.edge&&e.modules.frozen.position==="right"))}adjustForScrollbar(t){this.rightColumns.length&&(this.table.columnManager.getContentsElement().style.width="calc(100% - "+t+"px)")}_calcSpace(t,e){var i=0;for(let s=0;s<e;s++)t[s].visible&&(i+=t[s].getWidth());return i}}ke.moduleName="frozenColumns";class Te extends M{constructor(t){super(t),this.topElement=document.createElement("div"),this.rows=[],this.registerComponentFunction("row","freeze",this.freezeRow.bind(this)),this.registerComponentFunction("row","unfreeze",this.unfreezeRow.bind(this)),this.registerComponentFunction("row","isFrozen",this.isRowFrozen.bind(this)),this.registerTableOption("frozenRowsField","id"),this.registerTableOption("frozenRows",!1)}initialize(){var t=document.createDocumentFragment();this.rows=[],this.topElement.classList.add("tabulator-frozen-rows-holder"),t.appendChild(document.createElement("br")),t.appendChild(this.topElement),this.table.columnManager.getContentsElement().insertBefore(t,this.table.columnManager.headersElement.nextSibling),this.subscribe("row-deleting",this.detachRow.bind(this)),this.subscribe("rows-visible",this.visibleRows.bind(this)),this.registerDisplayHandler(this.getRows.bind(this),10),this.table.options.frozenRows&&(this.subscribe("data-processed",this.initializeRows.bind(this)),this.subscribe("row-added",this.initializeRow.bind(this)),this.subscribe("table-redrawing",this.resizeHolderWidth.bind(this)),this.subscribe("column-resized",this.resizeHolderWidth.bind(this)),this.subscribe("column-show",this.resizeHolderWidth.bind(this)),this.subscribe("column-hide",this.resizeHolderWidth.bind(this))),this.resizeHolderWidth()}resizeHolderWidth(){this.topElement.style.minWidth=this.table.columnManager.headersElement.offsetWidth+"px"}initializeRows(){this.table.rowManager.getRows().forEach(t=>{this.initializeRow(t)})}initializeRow(t){var e=this.table.options.frozenRows,i=typeof e;i==="number"?t.getPosition()&&t.getPosition()+this.rows.length<=e&&this.freezeRow(t):i==="function"?e.call(this.table,t.getComponent())&&this.freezeRow(t):Array.isArray(e)&&e.includes(t.data[this.options("frozenRowsField")])&&this.freezeRow(t)}isRowFrozen(t){var e=this.rows.indexOf(t);return e>-1}isFrozen(){return!!this.rows.length}visibleRows(t,e){return this.rows.forEach(i=>{e.push(i)}),e}getRows(t){var e=t.slice(0);return this.rows.forEach(function(i){var s=e.indexOf(i);s>-1&&e.splice(s,1)}),e}freezeRow(t){t.modules.frozen?console.warn("Freeze Error - Row is already frozen"):(t.modules.frozen=!0,this.topElement.appendChild(t.getElement()),t.initialize(),t.normalizeHeight(),this.rows.push(t),this.refreshData(!1,"display"),this.table.rowManager.adjustTableSize(),this.styleRows())}unfreezeRow(t){t.modules.frozen?(t.modules.frozen=!1,this.detachRow(t),this.table.rowManager.adjustTableSize(),this.refreshData(!1,"display"),this.rows.length&&this.styleRows()):console.warn("Freeze Error - Row is already unfrozen")}detachRow(t){var e=this.rows.indexOf(t);if(e>-1){var i=t.getElement();i.parentNode&&i.parentNode.removeChild(i),this.rows.splice(e,1)}}styleRows(t){this.rows.forEach((e,i)=>{this.table.rowManager.styleRow(e,i)})}}Te.moduleName="frozenRows";class m8{constructor(t){return this._group=t,this.type="GroupComponent",new Proxy(this,{get:function(e,i,s){return typeof e[i]<"u"?e[i]:e._group.groupManager.table.componentFunctionBinder.handle("group",e._group,i)}})}getKey(){return this._group.key}getField(){return this._group.field}getElement(){return this._group.element}getRows(){return this._group.getRows(!0)}getSubGroups(){return this._group.getSubGroups(!0)}getParentGroup(){return this._group.parent?this._group.parent.getComponent():!1}isVisible(){return this._group.visible}show(){this._group.show()}hide(){this._group.hide()}toggle(){this._group.toggleVisibility()}scrollTo(t,e){return this._group.groupManager.table.rowManager.scrollToRow(this._group,t,e)}_getSelf(){return this._group}getTable(){return this._group.groupManager.table}}class G{constructor(t,e,i,s,n,o,r){this.groupManager=t,this.parent=e,this.key=s,this.level=i,this.field=n,this.hasSubGroups=i<t.groupIDLookups.length-1,this.addRow=this.hasSubGroups?this._addRowToGroup:this._addRow,this.type="group",this.old=r,this.rows=[],this.groups=[],this.groupList=[],this.generator=o,this.element=!1,this.elementContents=!1,this.height=0,this.outerHeight=0,this.initialized=!1,this.calcs={},this.initialized=!1,this.modules={},this.arrowElement=!1,this.visible=r?r.visible:typeof t.startOpen[i]<"u"?t.startOpen[i]:t.startOpen[0],this.component=null,this.createElements(),this.addBindings(),this.createValueGroups()}wipe(t){t||(this.groupList.length?this.groupList.forEach(function(e){e.wipe()}):this.rows.forEach(e=>{e.modules&&delete e.modules.group})),this.element=!1,this.arrowElement=!1,this.elementContents=!1}createElements(){var t=document.createElement("div");t.classList.add("tabulator-arrow"),this.element=document.createElement("div"),this.element.classList.add("tabulator-row"),this.element.classList.add("tabulator-group"),this.element.classList.add("tabulator-group-level-"+this.level),this.element.setAttribute("role","rowgroup"),this.arrowElement=document.createElement("div"),this.arrowElement.classList.add("tabulator-group-toggle"),this.arrowElement.appendChild(t),this.groupManager.table.options.movableRows!==!1&&this.groupManager.table.modExists("moveRow")&&this.groupManager.table.modules.moveRow.initializeGroupHeader(this)}createValueGroups(){var t=this.level+1;this.groupManager.allowedValues&&this.groupManager.allowedValues[t]&&this.groupManager.allowedValues[t].forEach(e=>{this._createGroup(e,t)})}addBindings(){var t;this.groupManager.table.options.groupToggleElement&&(t=this.groupManager.table.options.groupToggleElement=="arrow"?this.arrowElement:this.element,t.addEventListener("click",e=>{this.groupManager.table.options.groupToggleElement==="arrow"&&(e.stopPropagation(),e.stopImmediatePropagation()),setTimeout(()=>{this.toggleVisibility()})}))}_createGroup(t,e){var i=e+"_"+t,s=new G(this.groupManager,this,e,t,this.groupManager.groupIDLookups[e].field,this.groupManager.headerGenerator[e]||this.groupManager.headerGenerator[0],this.old?this.old.groups[i]:!1);this.groups[i]=s,this.groupList.push(s)}_addRowToGroup(t){var e=this.level+1;if(this.hasSubGroups){var i=this.groupManager.groupIDLookups[e].func(t.getData()),s=e+"_"+i;this.groupManager.allowedValues&&this.groupManager.allowedValues[e]?this.groups[s]&&this.groups[s].addRow(t):(this.groups[s]||this._createGroup(i,e),this.groups[s].addRow(t))}}_addRow(t){this.rows.push(t),t.modules.group=this}insertRow(t,e,i){var s=this.conformRowData({});t.updateData(s);var n=this.rows.indexOf(e);n>-1?i?this.rows.splice(n+1,0,t):this.rows.splice(n,0,t):i?this.rows.push(t):this.rows.unshift(t),t.modules.group=this,this.groupManager.table.modExists("columnCalcs")&&this.groupManager.table.options.columnCalcs!="table"&&this.groupManager.table.modules.columnCalcs.recalcGroup(this),this.groupManager.updateGroupRows(!0)}scrollHeader(t){this.arrowElement&&(this.arrowElement.style.marginLeft=t,this.groupList.forEach(function(e){e.scrollHeader(t)}))}getRowIndex(t){}conformRowData(t){return this.field?t[this.field]=this.key:console.warn("Data Conforming Error - Cannot conform row data to match new group as groupBy is a function"),this.parent&&(t=this.parent.conformRowData(t)),t}removeRow(t){var e=this.rows.indexOf(t),i=t.getElement();e>-1&&this.rows.splice(e,1),!this.groupManager.table.options.groupValues&&!this.rows.length?(this.parent?this.parent.removeGroup(this):this.groupManager.removeGroup(this),this.groupManager.updateGroupRows(!0)):(i.parentNode&&i.parentNode.removeChild(i),this.groupManager.blockRedraw||(this.generateGroupHeaderContents(),this.groupManager.table.modExists("columnCalcs")&&this.groupManager.table.options.columnCalcs!="table"&&this.groupManager.table.modules.columnCalcs.recalcGroup(this)))}removeGroup(t){var e=t.level+"_"+t.key,i;this.groups[e]&&(delete this.groups[e],i=this.groupList.indexOf(t),i>-1&&this.groupList.splice(i,1),this.groupList.length||(this.parent?this.parent.removeGroup(this):this.groupManager.removeGroup(this)))}getHeadersAndRows(){var t=[];return t.push(this),this._visSet(),this.calcs.top&&(this.calcs.top.detachElement(),this.calcs.top.deleteCells()),this.calcs.bottom&&(this.calcs.bottom.detachElement(),this.calcs.bottom.deleteCells()),this.visible?this.groupList.length?this.groupList.forEach(function(e){t=t.concat(e.getHeadersAndRows())}):(this.groupManager.table.options.columnCalcs!="table"&&this.groupManager.table.modExists("columnCalcs")&&this.groupManager.table.modules.columnCalcs.hasTopCalcs()&&(this.calcs.top=this.groupManager.table.modules.columnCalcs.generateTopRow(this.rows),t.push(this.calcs.top)),t=t.concat(this.rows),this.groupManager.table.options.columnCalcs!="table"&&this.groupManager.table.modExists("columnCalcs")&&this.groupManager.table.modules.columnCalcs.hasBottomCalcs()&&(this.calcs.bottom=this.groupManager.table.modules.columnCalcs.generateBottomRow(this.rows),t.push(this.calcs.bottom))):!this.groupList.length&&this.groupManager.table.options.columnCalcs!="table"&&this.groupManager.table.modExists("columnCalcs")&&(this.groupManager.table.modules.columnCalcs.hasTopCalcs()&&this.groupManager.table.options.groupClosedShowCalcs&&(this.calcs.top=this.groupManager.table.modules.columnCalcs.generateTopRow(this.rows),t.push(this.calcs.top)),this.groupManager.table.modules.columnCalcs.hasBottomCalcs()&&this.groupManager.table.options.groupClosedShowCalcs&&(this.calcs.bottom=this.groupManager.table.modules.columnCalcs.generateBottomRow(this.rows),t.push(this.calcs.bottom))),t}getData(t,e){var i=[];return this._visSet(),(!t||t&&this.visible)&&this.rows.forEach(s=>{i.push(s.getData(e||"data"))}),i}getRowCount(){var t=0;return this.groupList.length?this.groupList.forEach(e=>{t+=e.getRowCount()}):t=this.rows.length,t}toggleVisibility(){this.visible?this.hide():this.show()}hide(){this.visible=!1,this.groupManager.table.rowManager.getRenderMode()=="basic"&&!this.groupManager.table.options.pagination?(this.element.classList.remove("tabulator-group-visible"),this.groupList.length?this.groupList.forEach(t=>{var e=t.getHeadersAndRows();e.forEach(i=>{i.detachElement()})}):this.rows.forEach(t=>{var e=t.getElement();e.parentNode.removeChild(e)}),this.groupManager.updateGroupRows(!0)):this.groupManager.updateGroupRows(!0),this.groupManager.table.externalEvents.dispatch("groupVisibilityChanged",this.getComponent(),!1)}show(){if(this.visible=!0,this.groupManager.table.rowManager.getRenderMode()=="basic"&&!this.groupManager.table.options.pagination){this.element.classList.add("tabulator-group-visible");var t=this.generateElement();this.groupList.length?this.groupList.forEach(e=>{var i=e.getHeadersAndRows();i.forEach(s=>{var n=s.getElement();t.parentNode.insertBefore(n,t.nextSibling),s.initialize(),t=n})}):this.rows.forEach(e=>{var i=e.getElement();t.parentNode.insertBefore(i,t.nextSibling),e.initialize(),t=i}),this.groupManager.updateGroupRows(!0)}else this.groupManager.updateGroupRows(!0);this.groupManager.table.externalEvents.dispatch("groupVisibilityChanged",this.getComponent(),!0)}_visSet(){var t=[];typeof this.visible=="function"&&(this.rows.forEach(function(e){t.push(e.getData())}),this.visible=this.visible(this.key,this.getRowCount(),t,this.getComponent()))}getRowGroup(t){var e=!1;return this.groupList.length?this.groupList.forEach(function(i){var s=i.getRowGroup(t);s&&(e=s)}):this.rows.find(function(i){return i===t})&&(e=this),e}getSubGroups(t){var e=[];return this.groupList.forEach(function(i){e.push(t?i.getComponent():i)}),e}getRows(t,e){var i=[];return e&&this.groupList.length?this.groupList.forEach(s=>{i=i.concat(s.getRows(t,e))}):this.rows.forEach(function(s){i.push(t?s.getComponent():s)}),i}generateGroupHeaderContents(){var t=[],e=this.getRows(!1,!0);for(e.forEach(function(i){t.push(i.getData())}),this.elementContents=this.generator(this.key,this.getRowCount(),t,this.getComponent());this.element.firstChild;)this.element.removeChild(this.element.firstChild);typeof this.elementContents=="string"?this.element.innerHTML=this.elementContents:this.element.appendChild(this.elementContents),this.element.insertBefore(this.arrowElement,this.element.firstChild)}getPath(t=[]){return t.unshift(this.key),this.parent&&this.parent.getPath(t),t}getElement(){return this.elementContents?this.element:this.generateElement()}generateElement(){this.addBindings=!1,this._visSet(),this.visible?this.element.classList.add("tabulator-group-visible"):this.element.classList.remove("tabulator-group-visible");for(var t=0;t<this.element.childNodes.length;++t)this.element.childNodes[t].parentNode.removeChild(this.element.childNodes[t]);return this.generateGroupHeaderContents(),this.element}detachElement(){this.element&&this.element.parentNode&&this.element.parentNode.removeChild(this.element)}normalizeHeight(){this.setHeight(this.element.clientHeight)}initialize(t){(!this.initialized||t)&&(this.normalizeHeight(),this.initialized=!0)}reinitialize(){this.initialized=!1,this.height=0,C.elVisible(this.element)&&this.initialize(!0)}setHeight(t){this.height!=t&&(this.height=t,this.outerHeight=this.element.offsetHeight)}getHeight(){return this.outerHeight}getGroup(){return this}reinitializeHeight(){}calcHeight(){}setCellHeight(){}clearCellHeight(){}deinitializeHeight(){}rendered(){}getComponent(){return this.component||(this.component=new m8(this)),this.component}}class Se extends M{constructor(t){super(t),this.groupIDLookups=!1,this.startOpen=[function(){return!1}],this.headerGenerator=[function(){return""}],this.groupList=[],this.allowedValues=!1,this.groups={},this.displayHandler=this.getRows.bind(this),this.blockRedraw=!1,this.registerTableOption("groupBy",!1),this.registerTableOption("groupStartOpen",!0),this.registerTableOption("groupValues",!1),this.registerTableOption("groupUpdateOnCellEdit",!1),this.registerTableOption("groupHeader",!1),this.registerTableOption("groupHeaderPrint",null),this.registerTableOption("groupHeaderClipboard",null),this.registerTableOption("groupHeaderHtmlOutput",null),this.registerTableOption("groupHeaderDownload",null),this.registerTableOption("groupToggleElement","arrow"),this.registerTableOption("groupClosedShowCalcs",!1),this.registerTableFunction("setGroupBy",this.setGroupBy.bind(this)),this.registerTableFunction("setGroupValues",this.setGroupValues.bind(this)),this.registerTableFunction("setGroupStartOpen",this.setGroupStartOpen.bind(this)),this.registerTableFunction("setGroupHeader",this.setGroupHeader.bind(this)),this.registerTableFunction("getGroups",this.userGetGroups.bind(this)),this.registerTableFunction("getGroupedData",this.userGetGroupedData.bind(this)),this.registerComponentFunction("row","getGroup",this.rowGetGroup.bind(this))}initialize(){this.subscribe("table-destroy",this._blockRedrawing.bind(this)),this.subscribe("rows-wipe",this._blockRedrawing.bind(this)),this.subscribe("rows-wiped",this._restore_redrawing.bind(this)),this.table.options.groupBy&&(this.table.options.groupUpdateOnCellEdit&&(this.subscribe("cell-value-updated",this.cellUpdated.bind(this)),this.subscribe("row-data-changed",this.reassignRowToGroup.bind(this),0)),this.subscribe("table-built",this.configureGroupSetup.bind(this)),this.subscribe("row-deleting",this.rowDeleting.bind(this)),this.subscribe("row-deleted",this.rowsUpdated.bind(this)),this.subscribe("scroll-horizontal",this.scrollHeaders.bind(this)),this.subscribe("rows-wipe",this.wipe.bind(this)),this.subscribe("rows-added",this.rowsUpdated.bind(this)),this.subscribe("row-moving",this.rowMoving.bind(this)),this.subscribe("row-adding-index",this.rowAddingIndex.bind(this)),this.subscribe("rows-sample",this.rowSample.bind(this)),this.subscribe("render-virtual-fill",this.virtualRenderFill.bind(this)),this.registerDisplayHandler(this.displayHandler,20),this.initialized=!0)}_blockRedrawing(){this.blockRedraw=!0}_restore_redrawing(){this.blockRedraw=!1}configureGroupSetup(){if(this.table.options.groupBy){var t=this.table.options.groupBy,e=this.table.options.groupStartOpen,i=this.table.options.groupHeader;if(this.allowedValues=this.table.options.groupValues,Array.isArray(t)&&Array.isArray(i)&&t.length>i.length&&console.warn("Error creating group headers, groupHeader array is shorter than groupBy array"),this.headerGenerator=[function(){return""}],this.startOpen=[function(){return!1}],this.langBind("groups|item",(n,o)=>{this.headerGenerator[0]=(r,l,d)=>(typeof r>"u"?"":r)+"<span>("+l+" "+(l===1?n:o.groups.items)+")</span>"}),this.groupIDLookups=[],t)this.table.modExists("columnCalcs")&&this.table.options.columnCalcs!="table"&&this.table.options.columnCalcs!="both"&&this.table.modules.columnCalcs.removeCalcs();else if(this.table.modExists("columnCalcs")&&this.table.options.columnCalcs!="group"){var s=this.table.columnManager.getRealColumns();s.forEach(n=>{n.definition.topCalc&&this.table.modules.columnCalcs.initializeTopRow(),n.definition.bottomCalc&&this.table.modules.columnCalcs.initializeBottomRow()})}Array.isArray(t)||(t=[t]),t.forEach((n,o)=>{var r,l;typeof n=="function"?r=n:(l=this.table.columnManager.getColumnByField(n),l?r=function(d){return l.getFieldValue(d)}:r=function(d){return d[n]}),this.groupIDLookups.push({field:typeof n=="function"?!1:n,func:r,values:this.allowedValues?this.allowedValues[o]:!1})}),e&&(Array.isArray(e)||(e=[e]),e.forEach(n=>{}),this.startOpen=e),i&&(this.headerGenerator=Array.isArray(i)?i:[i])}else this.groupList=[],this.groups={}}rowSample(t,e){if(this.table.options.groupBy){var i=this.getGroups(!1)[0];e.push(i.getRows(!1)[0])}return e}virtualRenderFill(){var t=this.table.rowManager.tableElement,e=this.table.rowManager.getVisibleRows();if(this.table.options.groupBy)e=e.filter(i=>i.type!=="group"),t.style.minWidth=e.length?"":this.table.columnManager.getWidth()+"px";else return e}rowAddingIndex(t,e,i){if(this.table.options.groupBy){this.assignRowToGroup(t);var s=t.modules.group.rows;return s.length>1&&(!e||e&&s.indexOf(e)==-1?i?s[0]!==t&&(e=s[0],this.table.rowManager.moveRowInArray(t.modules.group.rows,t,e,!i)):s[s.length-1]!==t&&(e=s[s.length-1],this.table.rowManager.moveRowInArray(t.modules.group.rows,t,e,!i)):this.table.rowManager.moveRowInArray(t.modules.group.rows,t,e,!i)),e}}trackChanges(){this.dispatch("group-changed")}setGroupBy(t){this.table.options.groupBy=t,this.initialized||this.initialize(),this.configureGroupSetup(),!t&&this.table.modExists("columnCalcs")&&this.table.options.columnCalcs===!0&&this.table.modules.columnCalcs.reinitializeCalcs(),this.refreshData(),this.trackChanges()}setGroupValues(t){this.table.options.groupValues=t,this.configureGroupSetup(),this.refreshData(),this.trackChanges()}setGroupStartOpen(t){this.table.options.groupStartOpen=t,this.configureGroupSetup(),this.table.options.groupBy?(this.refreshData(),this.trackChanges()):console.warn("Grouping Update - cant refresh view, no groups have been set")}setGroupHeader(t){this.table.options.groupHeader=t,this.configureGroupSetup(),this.table.options.groupBy?(this.refreshData(),this.trackChanges()):console.warn("Grouping Update - cant refresh view, no groups have been set")}userGetGroups(t){return this.getGroups(!0)}userGetGroupedData(){return this.table.options.groupBy?this.getGroupedData():this.getData()}rowGetGroup(t){return t.modules.group?t.modules.group.getComponent():!1}rowMoving(t,e,i){if(this.table.options.groupBy){!i&&e instanceof G&&(e=this.table.rowManager.prevDisplayRow(t)||e);var s=e instanceof G?e:e.modules.group,n=t instanceof G?t:t.modules.group;s===n?this.table.rowManager.moveRowInArray(s.rows,t,e,i):(n&&n.removeRow(t),s.insertRow(t,e,i))}}rowDeleting(t){this.table.options.groupBy&&t.modules.group&&t.modules.group.removeRow(t)}rowsUpdated(t){this.table.options.groupBy&&this.updateGroupRows(!0)}cellUpdated(t){this.table.options.groupBy&&this.reassignRowToGroup(t.row)}getRows(t){return this.table.options.groupBy&&this.groupIDLookups.length?(this.dispatchExternal("dataGrouping"),this.generateGroups(t),this.subscribedExternal("dataGrouped")&&this.dispatchExternal("dataGrouped",this.getGroups(!0)),this.updateGroupRows()):t.slice(0)}getGroups(t){var e=[];return this.groupList.forEach(function(i){e.push(t?i.getComponent():i)}),e}getChildGroups(t){var e=[];return t||(t=this),t.groupList.forEach(i=>{i.groupList.length?e=e.concat(this.getChildGroups(i)):e.push(i)}),e}wipe(){this.table.options.groupBy&&(this.groupList.forEach(function(t){t.wipe()}),this.groupList=[],this.groups={})}pullGroupListData(t){var e=[];return t.forEach(i=>{var s={};s.level=0,s.rowCount=0,s.headerContent="";var n=[];i.hasSubGroups?(n=this.pullGroupListData(i.groupList),s.level=i.level,s.rowCount=n.length-i.groupList.length,s.headerContent=i.generator(i.key,s.rowCount,i.rows,i),e.push(s),e=e.concat(n)):(s.level=i.level,s.headerContent=i.generator(i.key,i.rows.length,i.rows,i),s.rowCount=i.getRows().length,e.push(s),i.getRows().forEach(o=>{e.push(o.getData("data"))}))}),e}getGroupedData(){return this.pullGroupListData(this.groupList)}getRowGroup(t){var e=!1;return this.options("dataTree")&&(t=this.table.modules.dataTree.getTreeParentRoot(t)),this.groupList.forEach(i=>{var s=i.getRowGroup(t);s&&(e=s)}),e}countGroups(){return this.groupList.length}generateGroups(t){var e=this.groups;this.groups={},this.groupList=[],this.allowedValues&&this.allowedValues[0]?(this.allowedValues[0].forEach(i=>{this.createGroup(i,0,e)}),t.forEach(i=>{this.assignRowToExistingGroup(i,e)})):t.forEach(i=>{this.assignRowToGroup(i,e)}),Object.values(e).forEach(i=>{i.wipe(!0)})}createGroup(t,e,i){var s=e+"_"+t,n;i=i||[],n=new G(this,!1,e,t,this.groupIDLookups[0].field,this.headerGenerator[0],i[s]),this.groups[s]=n,this.groupList.push(n)}assignRowToExistingGroup(t,e){var i=this.groupIDLookups[0].func(t.getData()),s="0_"+i;this.groups[s]&&this.groups[s].addRow(t)}assignRowToGroup(t,e){var i=this.groupIDLookups[0].func(t.getData()),s=!this.groups["0_"+i];return s&&this.createGroup(i,0,e),this.groups["0_"+i].addRow(t),!s}reassignRowToGroup(t){if(t.type==="row"){var e=t.modules.group,i=e.getPath(),s=this.getExpectedPath(t),n;n=i.length==s.length&&i.every((o,r)=>o===s[r]),n||(e.removeRow(t),this.assignRowToGroup(t,this.groups),this.refreshData(!0))}}getExpectedPath(t){var e=[],i=t.getData();return this.groupIDLookups.forEach(s=>{e.push(s.func(i))}),e}updateGroupRows(t){var e=[];return this.blockRedraw||(this.groupList.forEach(i=>{e=e.concat(i.getHeadersAndRows())}),t&&this.refreshData(!0)),e}scrollHeaders(t){this.table.options.groupBy&&(this.table.options.renderHorizontal==="virtual"&&(t-=this.table.columnManager.renderer.vDomPadLeft),t=t+"px",this.groupList.forEach(e=>{e.scrollHeader(t)}))}removeGroup(t){var e=t.level+"_"+t.key,i;this.groups[e]&&(delete this.groups[e],i=this.groupList.indexOf(t),i>-1&&this.groupList.splice(i,1))}checkBasicModeGroupHeaderWidth(){var t=this.table.rowManager.tableElement,e=!0;this.table.rowManager.getDisplayRows().forEach((i,s)=>{this.table.rowManager.styleRow(i,s),t.appendChild(i.getElement()),i.initialize(!0),i.type!=="group"&&(e=!1)}),e?t.style.minWidth=this.table.columnManager.getWidth()+"px":t.style.minWidth=""}}Se.moduleName="groupRows";var v8={cellEdit:function(h){h.component.setValueProcessData(h.data.oldValue),h.component.cellRendered()},rowAdd:function(h){h.component.deleteActual(),this.table.rowManager.checkPlaceholder()},rowDelete:function(h){var t=this.table.rowManager.addRowActual(h.data.data,h.data.pos,h.data.index);this.table.options.groupBy&&this.table.modExists("groupRows")&&this.table.modules.groupRows.updateGroupRows(!0),this._rebindRow(h.component,t),this.table.rowManager.checkPlaceholder()},rowMove:function(h){var t=h.data.posFrom-h.data.posTo>0;this.table.rowManager.moveRowActual(h.component,this.table.rowManager.getRowFromPosition(h.data.posFrom),t),this.table.rowManager.regenerateRowPositions(),this.table.rowManager.reRenderInPosition()}},b8={cellEdit:function(h){h.component.setValueProcessData(h.data.newValue),h.component.cellRendered()},rowAdd:function(h){var t=this.table.rowManager.addRowActual(h.data.data,h.data.pos,h.data.index);this.table.options.groupBy&&this.table.modExists("groupRows")&&this.table.modules.groupRows.updateGroupRows(!0),this._rebindRow(h.component,t),this.table.rowManager.checkPlaceholder()},rowDelete:function(h){h.component.deleteActual(),this.table.rowManager.checkPlaceholder()},rowMove:function(h){this.table.rowManager.moveRowActual(h.component,this.table.rowManager.getRowFromPosition(h.data.posTo),h.data.after),this.table.rowManager.regenerateRowPositions(),this.table.rowManager.reRenderInPosition()}};class I extends M{constructor(t){super(t),this.history=[],this.index=-1,this.registerTableOption("history",!1)}initialize(){this.table.options.history&&(this.subscribe("cell-value-updated",this.cellUpdated.bind(this)),this.subscribe("cell-delete",this.clearComponentHistory.bind(this)),this.subscribe("row-delete",this.rowDeleted.bind(this)),this.subscribe("rows-wipe",this.clear.bind(this)),this.subscribe("row-added",this.rowAdded.bind(this)),this.subscribe("row-move",this.rowMoved.bind(this))),this.registerTableFunction("undo",this.undo.bind(this)),this.registerTableFunction("redo",this.redo.bind(this)),this.registerTableFunction("getHistoryUndoSize",this.getHistoryUndoSize.bind(this)),this.registerTableFunction("getHistoryRedoSize",this.getHistoryRedoSize.bind(this)),this.registerTableFunction("clearHistory",this.clear.bind(this))}rowMoved(t,e,i){this.action("rowMove",t,{posFrom:t.getPosition(),posTo:e.getPosition(),to:e,after:i})}rowAdded(t,e,i,s){this.action("rowAdd",t,{data:e,pos:i,index:s})}rowDeleted(t){var e,i;this.table.options.groupBy?(i=t.getComponent().getGroup()._getSelf().rows,e=i.indexOf(t),e&&(e=i[e-1])):(e=t.table.rowManager.getRowIndex(t),e&&(e=t.table.rowManager.rows[e-1])),this.action("rowDelete",t,{data:t.getData(),pos:!e,index:e})}cellUpdated(t){this.action("cellEdit",t,{oldValue:t.oldValue,newValue:t.value})}clear(){this.history=[],this.index=-1}action(t,e,i){this.history=this.history.slice(0,this.index+1),this.history.push({type:t,component:e,data:i}),this.index++}getHistoryUndoSize(){return this.index+1}getHistoryRedoSize(){return this.history.length-(this.index+1)}clearComponentHistory(t){var e=this.history.findIndex(function(i){return i.component===t});e>-1&&(this.history.splice(e,1),e<=this.index&&this.index--,this.clearComponentHistory(t))}undo(){if(this.index>-1){let t=this.history[this.index];return I.undoers[t.type].call(this,t),this.index--,this.dispatchExternal("historyUndo",t.type,t.component.getComponent(),t.data),!0}else return console.warn(this.options("history")?"History Undo Error - No more history to undo":"History module not enabled"),!1}redo(){if(this.history.length-1>this.index){this.index++;let t=this.history[this.index];return I.redoers[t.type].call(this,t),this.dispatchExternal("historyRedo",t.type,t.component.getComponent(),t.data),!0}else return console.warn(this.options("history")?"History Redo Error - No more history to redo":"History module not enabled"),!1}_rebindRow(t,e){this.history.forEach(function(i){if(i.component instanceof L)i.component===t&&(i.component=e);else if(i.component instanceof X&&i.component.row===t){var s=i.component.column.getField();s&&(i.component=e.getCell(s))}})}}I.moduleName="history";I.undoers=v8;I.redoers=b8;class Ve extends M{constructor(t){super(t),this.fieldIndex=[],this.hasIndex=!1}initialize(){this.tableElementCheck()}tableElementCheck(){this.table.originalElement&&this.table.originalElement.tagName==="TABLE"&&(this.table.originalElement.childNodes.length?this.parseTable():console.warn("Unable to parse data from empty table tag, Tabulator should be initialized on a div tag unless importing data from a table element."))}parseTable(){var t=this.table.originalElement,e=this.table.options,i=t.getElementsByTagName("th"),s=t.getElementsByTagName("tbody")[0],n=[];this.hasIndex=!1,this.dispatchExternal("htmlImporting"),s=s?s.getElementsByTagName("tr"):[],this._extractOptions(t,e),i.length?this._extractHeaders(i,s):this._generateBlankHeaders(i,s);for(var o=0;o<s.length;o++){var r=s[o],l=r.getElementsByTagName("td"),d={};this.hasIndex||(d[e.index]=o);for(var c=0;c<l.length;c++){var p=l[c];typeof this.fieldIndex[c]<"u"&&(d[this.fieldIndex[c]]=p.innerHTML)}n.push(d)}e.data=n,this.dispatchExternal("htmlImported")}_extractOptions(t,e,i){var s=t.attributes,n=Object.keys(i||e),o={};n.forEach(c=>{o[c.toLowerCase()]=c});for(var r in s){var l=s[r],d;l&&typeof l=="object"&&l.name&&l.name.indexOf("tabulator-")===0&&(d=l.name.replace("tabulator-",""),typeof o[d]<"u"&&(e[o[d]]=this._attribValue(l.value)))}}_attribValue(t){return t==="true"?!0:t==="false"?!1:t}_findCol(t){var e=this.table.options.columns.find(i=>i.title===t);return e||!1}_extractHeaders(t,e){for(var i=0;i<t.length;i++){var s=t[i],n=!1,o=this._findCol(s.textContent),r;o?n=!0:o={title:s.textContent.trim()},o.field||(o.field=s.textContent.trim().toLowerCase().replaceAll(" ","_")),r=s.getAttribute("width"),r&&!o.width&&(o.width=r),this._extractOptions(s,o,this.table.columnManager.optionsList.registeredDefaults),this.fieldIndex[i]=o.field,o.field==this.table.options.index&&(this.hasIndex=!0),n||this.table.options.columns.push(o)}}_generateBlankHeaders(t,e){for(var i=0;i<t.length;i++){var s=t[i],n={title:"",field:"col"+i};this.fieldIndex[i]=n.field;var o=s.getAttribute("width");o&&(n.width=o),this.table.options.columns.push(n)}}}Ve.moduleName="htmlTableImport";function M8(h){var t=[],e=0,i=0,s=!1;for(let n=0;n<h.length;n++){let o=h[n],r=h[n+1];if(t[e]||(t[e]=[]),t[e][i]||(t[e][i]=""),o=='"'&&s&&r=='"'){t[e][i]+=o,n++;continue}if(o=='"'){s=!s;continue}if(o==","&&!s){i++;continue}if(o=="\r"&&r==`
`&&!s){i=0,e++,n++;continue}if((o=="\r"||o==`
`)&&!s){i=0,e++;continue}t[e][i]+=o}return t}function y8(h){try{return JSON.parse(h)}catch(t){return console.warn("JSON Import Error - File contents is invalid JSON",t),Promise.reject()}}function w8(h){return h}var x8={csv:M8,json:y8,array:w8};class K extends M{constructor(t){super(t),this.registerTableOption("importFormat"),this.registerTableOption("importReader","text")}initialize(){this.registerTableFunction("import",this.importFromFile.bind(this)),this.table.options.importFormat&&(this.subscribe("data-loading",this.loadDataCheck.bind(this),10),this.subscribe("data-load",this.loadData.bind(this),10))}loadDataCheck(t){return this.table.options.importFormat&&(typeof t=="string"||Array.isArray(t)&&t.length&&Array.isArray(t))}loadData(t,e,i,s,n){return this.importData(this.lookupImporter(),t).then(this.structureData.bind(this)).catch(o=>(console.error("Import Error:",o||"Unable to import data"),Promise.reject(o)))}lookupImporter(t){var e;return t||(t=this.table.options.importFormat),typeof t=="string"?e=K.importers[t]:e=t,e||console.error("Import Error - Importer not found:",t),e}importFromFile(t,e){var i=this.lookupImporter(t);if(i)return this.pickFile(e).then(this.importData.bind(this,i)).then(this.structureData.bind(this)).then(this.setData.bind(this)).catch(s=>(console.error("Import Error:",s||"Unable to import file"),Promise.reject(s)))}pickFile(t){return new Promise((e,i)=>{var s=document.createElement("input");s.type="file",s.accept=t,s.addEventListener("change",n=>{var o=s.files[0],r=new FileReader;switch(this.table.options.importReader){case"buffer":r.readAsArrayBuffer(o);break;case"binary":r.readAsBinaryString(o);break;case"url":r.readAsDataURL(o);break;case"text":default:r.readAsText(o)}r.onload=l=>{e(r.result)},r.onerror=l=>{console.warn("File Load Error - Unable to read file"),i()}}),s.click()})}importData(t,e){var i=t.call(this.table,e);return i instanceof Promise?i:i?Promise.resolve(i):Promise.reject()}structureData(t){var e=[];return Array.isArray(t)&&t.length&&Array.isArray(t[0])?(this.table.options.autoColumns?e=this.structureArrayToObject(t):e=this.structureArrayToColumns(t),e):t}structureArrayToObject(t){var e=t.shift(),i=t.map(s=>{var n={};return e.forEach((o,r)=>{n[o]=s[r]}),n});return i}structureArrayToColumns(t){var e=[],i=this.table.getColumns();return i[0]&&t[0][0]&&i[0].getDefinition().title===t[0][0]&&t.shift(),t.forEach(s=>{var n={};s.forEach((o,r)=>{var l=i[r];l&&(n[l.getField()]=o)}),e.push(n)}),e}setData(t){return this.table.setData(t)}}K.moduleName="import";K.importers=x8;class Ae extends M{constructor(t){super(t),this.eventMap={rowClick:"row-click",rowDblClick:"row-dblclick",rowContext:"row-contextmenu",rowMouseEnter:"row-mouseenter",rowMouseLeave:"row-mouseleave",rowMouseOver:"row-mouseover",rowMouseOut:"row-mouseout",rowMouseMove:"row-mousemove",rowMouseDown:"row-mousedown",rowMouseUp:"row-mouseup",rowTap:"row",rowDblTap:"row",rowTapHold:"row",cellClick:"cell-click",cellDblClick:"cell-dblclick",cellContext:"cell-contextmenu",cellMouseEnter:"cell-mouseenter",cellMouseLeave:"cell-mouseleave",cellMouseOver:"cell-mouseover",cellMouseOut:"cell-mouseout",cellMouseMove:"cell-mousemove",cellMouseDown:"cell-mousedown",cellMouseUp:"cell-mouseup",cellTap:"cell",cellDblTap:"cell",cellTapHold:"cell",headerClick:"column-click",headerDblClick:"column-dblclick",headerContext:"column-contextmenu",headerMouseEnter:"column-mouseenter",headerMouseLeave:"column-mouseleave",headerMouseOver:"column-mouseover",headerMouseOut:"column-mouseout",headerMouseMove:"column-mousemove",headerMouseDown:"column-mousedown",headerMouseUp:"column-mouseup",headerTap:"column",headerDblTap:"column",headerTapHold:"column",groupClick:"group-click",groupDblClick:"group-dblclick",groupContext:"group-contextmenu",groupMouseEnter:"group-mouseenter",groupMouseLeave:"group-mouseleave",groupMouseOver:"group-mouseover",groupMouseOut:"group-mouseout",groupMouseMove:"group-mousemove",groupMouseDown:"group-mousedown",groupMouseUp:"group-mouseup",groupTap:"group",groupDblTap:"group",groupTapHold:"group"},this.subscribers={},this.touchSubscribers={},this.columnSubscribers={},this.touchWatchers={row:{tap:null,tapDbl:null,tapHold:null},cell:{tap:null,tapDbl:null,tapHold:null},column:{tap:null,tapDbl:null,tapHold:null},group:{tap:null,tapDbl:null,tapHold:null}},this.registerColumnOption("headerClick"),this.registerColumnOption("headerDblClick"),this.registerColumnOption("headerContext"),this.registerColumnOption("headerMouseEnter"),this.registerColumnOption("headerMouseLeave"),this.registerColumnOption("headerMouseOver"),this.registerColumnOption("headerMouseOut"),this.registerColumnOption("headerMouseMove"),this.registerColumnOption("headerMouseDown"),this.registerColumnOption("headerMouseUp"),this.registerColumnOption("headerTap"),this.registerColumnOption("headerDblTap"),this.registerColumnOption("headerTapHold"),this.registerColumnOption("cellClick"),this.registerColumnOption("cellDblClick"),this.registerColumnOption("cellContext"),this.registerColumnOption("cellMouseEnter"),this.registerColumnOption("cellMouseLeave"),this.registerColumnOption("cellMouseOver"),this.registerColumnOption("cellMouseOut"),this.registerColumnOption("cellMouseMove"),this.registerColumnOption("cellMouseDown"),this.registerColumnOption("cellMouseUp"),this.registerColumnOption("cellTap"),this.registerColumnOption("cellDblTap"),this.registerColumnOption("cellTapHold")}initialize(){this.initializeExternalEvents(),this.subscribe("column-init",this.initializeColumn.bind(this)),this.subscribe("cell-dblclick",this.cellContentsSelectionFixer.bind(this)),this.subscribe("scroll-horizontal",this.clearTouchWatchers.bind(this)),this.subscribe("scroll-vertical",this.clearTouchWatchers.bind(this))}clearTouchWatchers(){var t=Object.values(this.touchWatchers);t.forEach(e=>{for(let i in e)e[i]=null})}cellContentsSelectionFixer(t,e){var i;if(!(this.table.modExists("edit")&&this.table.modules.edit.currentCell===e)){t.preventDefault();try{document.selection?(i=document.body.createTextRange(),i.moveToElementText(e.getElement()),i.select()):window.getSelection&&(i=document.createRange(),i.selectNode(e.getElement()),window.getSelection().removeAllRanges(),window.getSelection().addRange(i))}catch{}}}initializeExternalEvents(){for(let t in this.eventMap)this.subscriptionChangeExternal(t,this.subscriptionChanged.bind(this,t))}subscriptionChanged(t,e){e?this.subscribers[t]||(this.eventMap[t].includes("-")?(this.subscribers[t]=this.handle.bind(this,t),this.subscribe(this.eventMap[t],this.subscribers[t])):this.subscribeTouchEvents(t)):this.eventMap[t].includes("-")?this.subscribers[t]&&!this.columnSubscribers[t]&&!this.subscribedExternal(t)&&(this.unsubscribe(this.eventMap[t],this.subscribers[t]),delete this.subscribers[t]):this.unsubscribeTouchEvents(t)}subscribeTouchEvents(t){var e=this.eventMap[t];this.touchSubscribers[e+"-touchstart"]||(this.touchSubscribers[e+"-touchstart"]=this.handleTouch.bind(this,e,"start"),this.touchSubscribers[e+"-touchend"]=this.handleTouch.bind(this,e,"end"),this.subscribe(e+"-touchstart",this.touchSubscribers[e+"-touchstart"]),this.subscribe(e+"-touchend",this.touchSubscribers[e+"-touchend"])),this.subscribers[t]=!0}unsubscribeTouchEvents(t){var e=!0,i=this.eventMap[t];if(this.subscribers[t]&&!this.subscribedExternal(t)){delete this.subscribers[t];for(let s in this.eventMap)this.eventMap[s]===i&&this.subscribers[s]&&(e=!1);e&&(this.unsubscribe(i+"-touchstart",this.touchSubscribers[i+"-touchstart"]),this.unsubscribe(i+"-touchend",this.touchSubscribers[i+"-touchend"]),delete this.touchSubscribers[i+"-touchstart"],delete this.touchSubscribers[i+"-touchend"])}}initializeColumn(t){var e=t.definition;for(let i in this.eventMap)e[i]&&(this.subscriptionChanged(i,!0),this.columnSubscribers[i]||(this.columnSubscribers[i]=[]),this.columnSubscribers[i].push(t))}handle(t,e,i){this.dispatchEvent(t,e,i)}handleTouch(t,e,i,s){var n=this.touchWatchers[t];switch(t==="column"&&(t="header"),e){case"start":n.tap=!0,clearTimeout(n.tapHold),n.tapHold=setTimeout(()=>{clearTimeout(n.tapHold),n.tapHold=null,n.tap=null,clearTimeout(n.tapDbl),n.tapDbl=null,this.dispatchEvent(t+"TapHold",i,s)},1e3);break;case"end":n.tap&&(n.tap=null,this.dispatchEvent(t+"Tap",i,s)),n.tapDbl?(clearTimeout(n.tapDbl),n.tapDbl=null,this.dispatchEvent(t+"DblTap",i,s)):n.tapDbl=setTimeout(()=>{clearTimeout(n.tapDbl),n.tapDbl=null},300),clearTimeout(n.tapHold),n.tapHold=null;break}}dispatchEvent(t,e,i){var s=i.getComponent(),n;this.columnSubscribers[t]&&(i instanceof X?n=i.column.definition[t]:i instanceof z&&(n=i.definition[t]),n&&n(e,s)),this.dispatchExternal(t,e,s)}}Ae.moduleName="interaction";var C8={navPrev:"shift + 9",navNext:9,navUp:38,navDown:40,navLeft:37,navRight:39,scrollPageUp:33,scrollPageDown:34,scrollToStart:36,scrollToEnd:35,undo:["ctrl + 90","meta + 90"],redo:["ctrl + 89","meta + 89"],copyToClipboard:["ctrl + 67","meta + 67"],rangeJumpUp:["ctrl + 38","meta + 38"],rangeJumpDown:["ctrl + 40","meta + 40"],rangeJumpLeft:["ctrl + 37","meta + 37"],rangeJumpRight:["ctrl + 39","meta + 39"],rangeExpandUp:"shift + 38",rangeExpandDown:"shift + 40",rangeExpandLeft:"shift + 37",rangeExpandRight:"shift + 39",rangeExpandJumpUp:["ctrl + shift + 38","meta + shift + 38"],rangeExpandJumpDown:["ctrl + shift + 40","meta + shift + 40"],rangeExpandJumpLeft:["ctrl + shift + 37","meta + shift + 37"],rangeExpandJumpRight:["ctrl + shift + 39","meta + shift + 39"]},E8={keyBlock:function(h){h.stopPropagation(),h.preventDefault()},scrollPageUp:function(h){var t=this.table.rowManager,e=t.scrollTop-t.element.clientHeight;h.preventDefault(),t.displayRowsCount&&(e>=0?t.element.scrollTop=e:t.scrollToRow(t.getDisplayRows()[0])),this.table.element.focus()},scrollPageDown:function(h){var t=this.table.rowManager,e=t.scrollTop+t.element.clientHeight,i=t.element.scrollHeight;h.preventDefault(),t.displayRowsCount&&(e<=i?t.element.scrollTop=e:t.scrollToRow(t.getDisplayRows()[t.displayRowsCount-1])),this.table.element.focus()},scrollToStart:function(h){var t=this.table.rowManager;h.preventDefault(),t.displayRowsCount&&t.scrollToRow(t.getDisplayRows()[0]),this.table.element.focus()},scrollToEnd:function(h){var t=this.table.rowManager;h.preventDefault(),t.displayRowsCount&&t.scrollToRow(t.getDisplayRows()[t.displayRowsCount-1]),this.table.element.focus()},navPrev:function(h){this.dispatch("keybinding-nav-prev",h)},navNext:function(h){this.dispatch("keybinding-nav-next",h)},navLeft:function(h){this.dispatch("keybinding-nav-left",h)},navRight:function(h){this.dispatch("keybinding-nav-right",h)},navUp:function(h){this.dispatch("keybinding-nav-up",h)},navDown:function(h){this.dispatch("keybinding-nav-down",h)},rangeJumpLeft:function(h){this.dispatch("keybinding-nav-range",h,"left",!0,!1)},rangeJumpRight:function(h){this.dispatch("keybinding-nav-range",h,"right",!0,!1)},rangeJumpUp:function(h){this.dispatch("keybinding-nav-range",h,"up",!0,!1)},rangeJumpDown:function(h){this.dispatch("keybinding-nav-range",h,"down",!0,!1)},rangeExpandLeft:function(h){this.dispatch("keybinding-nav-range",h,"left",!1,!0)},rangeExpandRight:function(h){this.dispatch("keybinding-nav-range",h,"right",!1,!0)},rangeExpandUp:function(h){this.dispatch("keybinding-nav-range",h,"up",!1,!0)},rangeExpandDown:function(h){this.dispatch("keybinding-nav-range",h,"down",!1,!0)},rangeExpandJumpLeft:function(h){this.dispatch("keybinding-nav-range",h,"left",!0,!0)},rangeExpandJumpRight:function(h){this.dispatch("keybinding-nav-range",h,"right",!0,!0)},rangeExpandJumpUp:function(h){this.dispatch("keybinding-nav-range",h,"up",!0,!0)},rangeExpandJumpDown:function(h){this.dispatch("keybinding-nav-range",h,"down",!0,!0)},undo:function(h){var t=!1;this.table.options.history&&this.table.modExists("history")&&this.table.modExists("edit")&&(t=this.table.modules.edit.currentCell,t||(h.preventDefault(),this.table.modules.history.undo()))},redo:function(h){var t=!1;this.table.options.history&&this.table.modExists("history")&&this.table.modExists("edit")&&(t=this.table.modules.edit.currentCell,t||(h.preventDefault(),this.table.modules.history.redo()))},copyToClipboard:function(h){this.table.modules.edit.currentCell||this.table.modExists("clipboard",!0)&&this.table.modules.clipboard.copy(!1,!0)}};class O extends M{constructor(t){super(t),this.watchKeys=null,this.pressedKeys=null,this.keyupBinding=!1,this.keydownBinding=!1,this.registerTableOption("keybindings",{}),this.registerTableOption("tabEndNewRow",!1)}initialize(){var t=this.table.options.keybindings,e={};this.watchKeys={},this.pressedKeys=[],t!==!1&&(Object.assign(e,O.bindings),Object.assign(e,t),this.mapBindings(e),this.bindEvents()),this.subscribe("table-destroy",this.clearBindings.bind(this))}mapBindings(t){for(let e in t)O.actions[e]?t[e]&&(typeof t[e]!="object"&&(t[e]=[t[e]]),t[e].forEach(i=>{var s=Array.isArray(i)?i:[i];s.forEach(n=>{this.mapBinding(e,n)})})):console.warn("Key Binding Error - no such action:",e)}mapBinding(t,e){var i={action:O.actions[t],keys:[],ctrl:!1,shift:!1,meta:!1},s=e.toString().toLowerCase().split(" ").join("").split("+");s.forEach(n=>{switch(n){case"ctrl":i.ctrl=!0;break;case"shift":i.shift=!0;break;case"meta":i.meta=!0;break;default:n=isNaN(n)?n.toUpperCase().charCodeAt(0):parseInt(n),i.keys.push(n),this.watchKeys[n]||(this.watchKeys[n]=[]),this.watchKeys[n].push(i)}})}bindEvents(){var t=this;this.keyupBinding=function(e){var i=e.keyCode,s=t.watchKeys[i];s&&(t.pressedKeys.push(i),s.forEach(function(n){t.checkBinding(e,n)}))},this.keydownBinding=function(e){var i=e.keyCode,s=t.watchKeys[i];if(s){var n=t.pressedKeys.indexOf(i);n>-1&&t.pressedKeys.splice(n,1)}},this.table.element.addEventListener("keydown",this.keyupBinding),this.table.element.addEventListener("keyup",this.keydownBinding)}clearBindings(){this.keyupBinding&&this.table.element.removeEventListener("keydown",this.keyupBinding),this.keydownBinding&&this.table.element.removeEventListener("keyup",this.keydownBinding)}checkBinding(t,e){var i=!0;return t.ctrlKey==e.ctrl&&t.shiftKey==e.shift&&t.metaKey==e.meta?(e.keys.forEach(s=>{var n=this.pressedKeys.indexOf(s);n==-1&&(i=!1)}),i&&e.action.call(this,t),!0):!1}}O.moduleName="keybindings";O.bindings=C8;O.actions=E8;class De extends M{constructor(t){super(t),this.menuContainer=null,this.nestedMenuBlock=!1,this.currentComponent=null,this.rootPopup=null,this.columnSubscribers={},this.registerTableOption("menuContainer",void 0),this.registerTableOption("rowContextMenu",!1),this.registerTableOption("rowClickMenu",!1),this.registerTableOption("rowDblClickMenu",!1),this.registerTableOption("groupContextMenu",!1),this.registerTableOption("groupClickMenu",!1),this.registerTableOption("groupDblClickMenu",!1),this.registerColumnOption("headerContextMenu"),this.registerColumnOption("headerClickMenu"),this.registerColumnOption("headerDblClickMenu"),this.registerColumnOption("headerMenu"),this.registerColumnOption("headerMenuIcon"),this.registerColumnOption("contextMenu"),this.registerColumnOption("clickMenu"),this.registerColumnOption("dblClickMenu")}initialize(){this.deprecatedOptionsCheck(),this.initializeRowWatchers(),this.initializeGroupWatchers(),this.subscribe("column-init",this.initializeColumn.bind(this))}deprecatedOptionsCheck(){this.deprecationCheck("menuContainer","popupContainer")||(this.table.options.popupContainer=this.table.options.menuContainer)}initializeRowWatchers(){this.table.options.rowContextMenu&&(this.subscribe("row-contextmenu",this.loadMenuEvent.bind(this,this.table.options.rowContextMenu)),this.table.on("rowTapHold",this.loadMenuEvent.bind(this,this.table.options.rowContextMenu))),this.table.options.rowClickMenu&&this.subscribe("row-click",this.loadMenuEvent.bind(this,this.table.options.rowClickMenu)),this.table.options.rowDblClickMenu&&this.subscribe("row-dblclick",this.loadMenuEvent.bind(this,this.table.options.rowDblClickMenu))}initializeGroupWatchers(){this.table.options.groupContextMenu&&(this.subscribe("group-contextmenu",this.loadMenuEvent.bind(this,this.table.options.groupContextMenu)),this.table.on("groupTapHold",this.loadMenuEvent.bind(this,this.table.options.groupContextMenu))),this.table.options.groupClickMenu&&this.subscribe("group-click",this.loadMenuEvent.bind(this,this.table.options.groupClickMenu)),this.table.options.groupDblClickMenu&&this.subscribe("group-dblclick",this.loadMenuEvent.bind(this,this.table.options.groupDblClickMenu))}initializeColumn(t){var e=t.definition;e.headerContextMenu&&!this.columnSubscribers.headerContextMenu&&(this.columnSubscribers.headerContextMenu=this.loadMenuTableColumnEvent.bind(this,"headerContextMenu"),this.subscribe("column-contextmenu",this.columnSubscribers.headerContextMenu),this.table.on("headerTapHold",this.loadMenuTableColumnEvent.bind(this,"headerContextMenu"))),e.headerClickMenu&&!this.columnSubscribers.headerClickMenu&&(this.columnSubscribers.headerClickMenu=this.loadMenuTableColumnEvent.bind(this,"headerClickMenu"),this.subscribe("column-click",this.columnSubscribers.headerClickMenu)),e.headerDblClickMenu&&!this.columnSubscribers.headerDblClickMenu&&(this.columnSubscribers.headerDblClickMenu=this.loadMenuTableColumnEvent.bind(this,"headerDblClickMenu"),this.subscribe("column-dblclick",this.columnSubscribers.headerDblClickMenu)),e.headerMenu&&this.initializeColumnHeaderMenu(t),e.contextMenu&&!this.columnSubscribers.contextMenu&&(this.columnSubscribers.contextMenu=this.loadMenuTableCellEvent.bind(this,"contextMenu"),this.subscribe("cell-contextmenu",this.columnSubscribers.contextMenu),this.table.on("cellTapHold",this.loadMenuTableCellEvent.bind(this,"contextMenu"))),e.clickMenu&&!this.columnSubscribers.clickMenu&&(this.columnSubscribers.clickMenu=this.loadMenuTableCellEvent.bind(this,"clickMenu"),this.subscribe("cell-click",this.columnSubscribers.clickMenu)),e.dblClickMenu&&!this.columnSubscribers.dblClickMenu&&(this.columnSubscribers.dblClickMenu=this.loadMenuTableCellEvent.bind(this,"dblClickMenu"),this.subscribe("cell-dblclick",this.columnSubscribers.dblClickMenu))}initializeColumnHeaderMenu(t){var e=t.definition.headerMenuIcon,i;i=document.createElement("span"),i.classList.add("tabulator-header-popup-button"),e?(typeof e=="function"&&(e=e(t.getComponent())),e instanceof HTMLElement?i.appendChild(e):i.innerHTML=e):i.innerHTML="&vellip;",i.addEventListener("click",s=>{s.stopPropagation(),s.preventDefault(),this.loadMenuEvent(t.definition.headerMenu,s,t)}),t.titleElement.insertBefore(i,t.titleElement.firstChild)}loadMenuTableCellEvent(t,e,i){i._cell&&(i=i._cell),i.column.definition[t]&&this.loadMenuEvent(i.column.definition[t],e,i)}loadMenuTableColumnEvent(t,e,i){i._column&&(i=i._column),i.definition[t]&&this.loadMenuEvent(i.definition[t],e,i)}loadMenuEvent(t,e,i){i._group?i=i._group:i._row&&(i=i._row),t=typeof t=="function"?t.call(this.table,e,i.getComponent()):t,this.loadMenu(e,i,t)}loadMenu(t,e,i,s,n){var o=!(t instanceof MouseEvent),r=document.createElement("div"),l;if(r.classList.add("tabulator-menu"),o||t.preventDefault(),!(!i||!i.length)){if(s)l=n.child(r);else{if(this.nestedMenuBlock){if(this.rootPopup)return}else this.nestedMenuBlock=setTimeout(()=>{this.nestedMenuBlock=!1},100);this.rootPopup&&this.rootPopup.hide(),this.rootPopup=l=this.popup(r)}i.forEach(d=>{var c=document.createElement("div"),p=d.label,u=d.disabled;d.separator?c.classList.add("tabulator-menu-separator"):(c.classList.add("tabulator-menu-item"),typeof p=="function"&&(p=p.call(this.table,e.getComponent())),p instanceof Node?c.appendChild(p):c.innerHTML=p,typeof u=="function"&&(u=u.call(this.table,e.getComponent())),u?(c.classList.add("tabulator-menu-item-disabled"),c.addEventListener("click",g=>{g.stopPropagation()})):d.menu&&d.menu.length?c.addEventListener("click",g=>{g.stopPropagation(),this.loadMenu(g,e,d.menu,c,l)}):d.action&&c.addEventListener("click",g=>{d.action(g,e.getComponent())}),d.menu&&d.menu.length&&c.classList.add("tabulator-menu-item-submenu")),r.appendChild(c)}),r.addEventListener("click",d=>{this.rootPopup&&this.rootPopup.hide()}),l.show(s||t),l===this.rootPopup&&(this.rootPopup.hideOnBlur(()=>{this.rootPopup=null,this.currentComponent&&(this.dispatch("menu-closed",i,l),this.dispatchExternal("menuClosed",this.currentComponent.getComponent()),this.currentComponent=null)}),this.currentComponent=e,this.dispatch("menu-opened",i,l),this.dispatchExternal("menuOpened",e.getComponent()))}}}De.moduleName="menu";class ze extends M{constructor(t){super(t),this.placeholderElement=this.createPlaceholderElement(),this.hoverElement=!1,this.checkTimeout=!1,this.checkPeriod=250,this.moving=!1,this.toCol=!1,this.toColAfter=!1,this.startX=0,this.autoScrollMargin=40,this.autoScrollStep=5,this.autoScrollTimeout=!1,this.touchMove=!1,this.moveHover=this.moveHover.bind(this),this.endMove=this.endMove.bind(this),this.registerTableOption("movableColumns",!1)}createPlaceholderElement(){var t=document.createElement("div");return t.classList.add("tabulator-col"),t.classList.add("tabulator-col-placeholder"),t}initialize(){this.table.options.movableColumns&&(this.subscribe("column-init",this.initializeColumn.bind(this)),this.subscribe("alert-show",this.abortMove.bind(this)))}abortMove(){clearTimeout(this.checkTimeout)}initializeColumn(t){var e=this,i={},s;!t.modules.frozen&&!t.isGroup&&(s=t.getElement(),i.mousemove=(function(n){t.parent===e.moving.parent&&((e.touchMove?n.touches[0].pageX:n.pageX)-C.elOffset(s).left+e.table.columnManager.contentsElement.scrollLeft>t.getWidth()/2?(e.toCol!==t||!e.toColAfter)&&(s.parentNode.insertBefore(e.placeholderElement,s.nextSibling),e.moveColumn(t,!0)):(e.toCol!==t||e.toColAfter)&&(s.parentNode.insertBefore(e.placeholderElement,s),e.moveColumn(t,!1)))}).bind(e),s.addEventListener("mousedown",function(n){e.touchMove=!1,n.which===1&&(e.checkTimeout=setTimeout(function(){e.startMove(n,t)},e.checkPeriod))}),s.addEventListener("mouseup",function(n){n.which===1&&e.checkTimeout&&clearTimeout(e.checkTimeout)}),e.bindTouchEvents(t)),t.modules.moveColumn=i}bindTouchEvents(t){var e=t.getElement(),i=!1,s,n,o,r,l,d;e.addEventListener("touchstart",c=>{this.checkTimeout=setTimeout(()=>{this.touchMove=!0,s=t.nextColumn(),o=s?s.getWidth()/2:0,n=t.prevColumn(),r=n?n.getWidth()/2:0,l=0,d=0,i=!1,this.startMove(c,t)},this.checkPeriod)},{passive:!0}),e.addEventListener("touchmove",c=>{var p,u;this.moving&&(this.moveHover(c),i||(i=c.touches[0].pageX),p=c.touches[0].pageX-i,p>0?s&&p-l>o&&(u=s,u!==t&&(i=c.touches[0].pageX,u.getElement().parentNode.insertBefore(this.placeholderElement,u.getElement().nextSibling),this.moveColumn(u,!0))):n&&-p-d>r&&(u=n,u!==t&&(i=c.touches[0].pageX,u.getElement().parentNode.insertBefore(this.placeholderElement,u.getElement()),this.moveColumn(u,!1))),u&&(s=u.nextColumn(),l=o,o=s?s.getWidth()/2:0,n=u.prevColumn(),d=r,r=n?n.getWidth()/2:0))},{passive:!0}),e.addEventListener("touchend",c=>{this.checkTimeout&&clearTimeout(this.checkTimeout),this.moving&&this.endMove(c)})}startMove(t,e){var i=e.getElement(),s=this.table.columnManager.getContentsElement(),n=this.table.columnManager.getHeadersElement();this.moving=e,this.startX=(this.touchMove?t.touches[0].pageX:t.pageX)-C.elOffset(i).left,this.table.element.classList.add("tabulator-block-select"),this.placeholderElement.style.width=e.getWidth()+"px",this.placeholderElement.style.height=e.getHeight()+"px",i.parentNode.insertBefore(this.placeholderElement,i),i.parentNode.removeChild(i),this.hoverElement=i.cloneNode(!0),this.hoverElement.classList.add("tabulator-moving"),s.appendChild(this.hoverElement),this.hoverElement.style.left="0",this.hoverElement.style.bottom=s.clientHeight-n.offsetHeight+"px",this.touchMove||(this._bindMouseMove(),document.body.addEventListener("mousemove",this.moveHover),document.body.addEventListener("mouseup",this.endMove)),this.moveHover(t)}_bindMouseMove(){this.table.columnManager.columnsByIndex.forEach(function(t){t.modules.moveColumn.mousemove&&t.getElement().addEventListener("mousemove",t.modules.moveColumn.mousemove)})}_unbindMouseMove(){this.table.columnManager.columnsByIndex.forEach(function(t){t.modules.moveColumn.mousemove&&t.getElement().removeEventListener("mousemove",t.modules.moveColumn.mousemove)})}moveColumn(t,e){var i=this.moving.getCells();this.toCol=t,this.toColAfter=e,e?t.getCells().forEach(function(s,n){var o=s.getElement(!0);o.parentNode&&i[n]&&o.parentNode.insertBefore(i[n].getElement(),o.nextSibling)}):t.getCells().forEach(function(s,n){var o=s.getElement(!0);o.parentNode&&i[n]&&o.parentNode.insertBefore(i[n].getElement(),o)})}endMove(t){(t.which===1||this.touchMove)&&(this._unbindMouseMove(),this.placeholderElement.parentNode.insertBefore(this.moving.getElement(),this.placeholderElement.nextSibling),this.placeholderElement.parentNode.removeChild(this.placeholderElement),this.hoverElement.parentNode.removeChild(this.hoverElement),this.table.element.classList.remove("tabulator-block-select"),this.toCol&&this.table.columnManager.moveColumnActual(this.moving,this.toCol,this.toColAfter),this.moving=!1,this.toCol=!1,this.toColAfter=!1,this.touchMove||(document.body.removeEventListener("mousemove",this.moveHover),document.body.removeEventListener("mouseup",this.endMove)))}moveHover(t){var e=this.table.columnManager.getContentsElement(),i=e.scrollLeft,s=(this.touchMove?t.touches[0].pageX:t.pageX)-C.elOffset(e).left+i,n;this.hoverElement.style.left=s-this.startX+"px",s-i<this.autoScrollMargin&&(this.autoScrollTimeout||(this.autoScrollTimeout=setTimeout(()=>{n=Math.max(0,i-5),this.table.rowManager.getElement().scrollLeft=n,this.autoScrollTimeout=!1},1))),i+e.clientWidth-s<this.autoScrollMargin&&(this.autoScrollTimeout||(this.autoScrollTimeout=setTimeout(()=>{n=Math.min(e.clientWidth,i+5),this.table.rowManager.getElement().scrollLeft=n,this.autoScrollTimeout=!1},1)))}}ze.moduleName="moveColumn";class it extends M{constructor(t){super(t),this.placeholderElement=this.createPlaceholderElement(),this.hoverElement=!1,this.checkTimeout=!1,this.checkPeriod=150,this.moving=!1,this.toRow=!1,this.toRowAfter=!1,this.hasHandle=!1,this.startY=0,this.startX=0,this.moveHover=this.moveHover.bind(this),this.endMove=this.endMove.bind(this),this.tableRowDropEvent=!1,this.touchMove=!1,this.connection=!1,this.connectionSelectorsTables=!1,this.connectionSelectorsElements=!1,this.connectionElements=[],this.connections=[],this.connectedTable=!1,this.connectedRow=!1,this.registerTableOption("movableRows",!1),this.registerTableOption("movableRowsConnectedTables",!1),this.registerTableOption("movableRowsConnectedElements",!1),this.registerTableOption("movableRowsSender",!1),this.registerTableOption("movableRowsReceiver","insert"),this.registerColumnOption("rowHandle")}createPlaceholderElement(){var t=document.createElement("div");return t.classList.add("tabulator-row"),t.classList.add("tabulator-row-placeholder"),t}initialize(){this.table.options.movableRows&&(this.connectionSelectorsTables=this.table.options.movableRowsConnectedTables,this.connectionSelectorsElements=this.table.options.movableRowsConnectedElements,this.connection=this.connectionSelectorsTables||this.connectionSelectorsElements,this.subscribe("cell-init",this.initializeCell.bind(this)),this.subscribe("column-init",this.initializeColumn.bind(this)),this.subscribe("row-init",this.initializeRow.bind(this)))}initializeGroupHeader(t){var e=this,i={};i.mouseup=(function(s){e.tableRowDrop(s,t)}).bind(e),i.mousemove=(function(s){var n;s.pageY-C.elOffset(t.element).top+e.table.rowManager.element.scrollTop>t.getHeight()/2?(e.toRow!==t||!e.toRowAfter)&&(n=t.getElement(),n.parentNode.insertBefore(e.placeholderElement,n.nextSibling),e.moveRow(t,!0)):(e.toRow!==t||e.toRowAfter)&&(n=t.getElement(),n.previousSibling&&(n.parentNode.insertBefore(e.placeholderElement,n),e.moveRow(t,!1)))}).bind(e),t.modules.moveRow=i}initializeRow(t){var e=this,i={},s;i.mouseup=(function(n){e.tableRowDrop(n,t)}).bind(e),i.mousemove=(function(n){var o=t.getElement();n.pageY-C.elOffset(o).top+e.table.rowManager.element.scrollTop>t.getHeight()/2?(e.toRow!==t||!e.toRowAfter)&&(o.parentNode.insertBefore(e.placeholderElement,o.nextSibling),e.moveRow(t,!0)):(e.toRow!==t||e.toRowAfter)&&(o.parentNode.insertBefore(e.placeholderElement,o),e.moveRow(t,!1))}).bind(e),this.hasHandle||(s=t.getElement(),s.addEventListener("mousedown",function(n){n.which===1&&(e.checkTimeout=setTimeout(function(){e.startMove(n,t)},e.checkPeriod))}),s.addEventListener("mouseup",function(n){n.which===1&&e.checkTimeout&&clearTimeout(e.checkTimeout)}),this.bindTouchEvents(t,t.getElement())),t.modules.moveRow=i}initializeColumn(t){t.definition.rowHandle&&this.table.options.movableRows!==!1&&(this.hasHandle=!0)}initializeCell(t){if(t.column.definition.rowHandle&&this.table.options.movableRows!==!1){var e=this,i=t.getElement(!0);i.addEventListener("mousedown",function(s){s.which===1&&(e.checkTimeout=setTimeout(function(){e.startMove(s,t.row)},e.checkPeriod))}),i.addEventListener("mouseup",function(s){s.which===1&&e.checkTimeout&&clearTimeout(e.checkTimeout)}),this.bindTouchEvents(t.row,i)}}bindTouchEvents(t,e){var i=!1,s,n,o,r,l,d;e.addEventListener("touchstart",c=>{this.checkTimeout=setTimeout(()=>{this.touchMove=!0,s=t.nextRow(),o=s?s.getHeight()/2:0,n=t.prevRow(),r=n?n.getHeight()/2:0,l=0,d=0,i=!1,this.startMove(c,t)},this.checkPeriod)},{passive:!0}),this.moving,this.toRow,this.toRowAfter,e.addEventListener("touchmove",c=>{var p,u;this.moving&&(c.preventDefault(),this.moveHover(c),i||(i=c.touches[0].pageY),p=c.touches[0].pageY-i,p>0?s&&p-l>o&&(u=s,u!==t&&(i=c.touches[0].pageY,u.getElement().parentNode.insertBefore(this.placeholderElement,u.getElement().nextSibling),this.moveRow(u,!0))):n&&-p-d>r&&(u=n,u!==t&&(i=c.touches[0].pageY,u.getElement().parentNode.insertBefore(this.placeholderElement,u.getElement()),this.moveRow(u,!1))),u&&(s=u.nextRow(),l=o,o=s?s.getHeight()/2:0,n=u.prevRow(),d=r,r=n?n.getHeight()/2:0))}),e.addEventListener("touchend",c=>{this.checkTimeout&&clearTimeout(this.checkTimeout),this.moving&&(this.endMove(c),this.touchMove=!1)})}_bindMouseMove(){this.table.rowManager.getDisplayRows().forEach(t=>{(t.type==="row"||t.type==="group")&&t.modules.moveRow&&t.modules.moveRow.mousemove&&t.getElement().addEventListener("mousemove",t.modules.moveRow.mousemove)})}_unbindMouseMove(){this.table.rowManager.getDisplayRows().forEach(t=>{(t.type==="row"||t.type==="group")&&t.modules.moveRow&&t.modules.moveRow.mousemove&&t.getElement().removeEventListener("mousemove",t.modules.moveRow.mousemove)})}startMove(t,e){var i=e.getElement();this.setStartPosition(t,e),this.moving=e,this.table.element.classList.add("tabulator-block-select"),this.placeholderElement.style.width=e.getWidth()+"px",this.placeholderElement.style.height=e.getHeight()+"px",this.connection?(this.table.element.classList.add("tabulator-movingrow-sending"),this.connectToTables(e)):(i.parentNode.insertBefore(this.placeholderElement,i),i.parentNode.removeChild(i)),this.hoverElement=i.cloneNode(!0),this.hoverElement.classList.add("tabulator-moving"),this.connection?(document.body.appendChild(this.hoverElement),this.hoverElement.style.left="0",this.hoverElement.style.top="0",this.hoverElement.style.width=this.table.element.clientWidth+"px",this.hoverElement.style.whiteSpace="nowrap",this.hoverElement.style.overflow="hidden",this.hoverElement.style.pointerEvents="none"):(this.table.rowManager.getTableElement().appendChild(this.hoverElement),this.hoverElement.style.left="0",this.hoverElement.style.top="0",this._bindMouseMove()),document.body.addEventListener("mousemove",this.moveHover),document.body.addEventListener("mouseup",this.endMove),this.dispatchExternal("rowMoving",e.getComponent()),this.moveHover(t)}setStartPosition(t,e){var i=this.touchMove?t.touches[0].pageX:t.pageX,s=this.touchMove?t.touches[0].pageY:t.pageY,n,o;n=e.getElement(),this.connection?(o=n.getBoundingClientRect(),this.startX=o.left-i+window.pageXOffset,this.startY=o.top-s+window.pageYOffset):this.startY=s-n.getBoundingClientRect().top}endMove(t){(!t||t.which===1||this.touchMove)&&(this._unbindMouseMove(),this.connection||(this.placeholderElement.parentNode.insertBefore(this.moving.getElement(),this.placeholderElement.nextSibling),this.placeholderElement.parentNode.removeChild(this.placeholderElement)),this.hoverElement.parentNode.removeChild(this.hoverElement),this.table.element.classList.remove("tabulator-block-select"),this.toRow?this.table.rowManager.moveRow(this.moving,this.toRow,this.toRowAfter):this.dispatchExternal("rowMoveCancelled",this.moving.getComponent()),this.moving=!1,this.toRow=!1,this.toRowAfter=!1,document.body.removeEventListener("mousemove",this.moveHover),document.body.removeEventListener("mouseup",this.endMove),this.connection&&(this.table.element.classList.remove("tabulator-movingrow-sending"),this.disconnectFromTables()))}moveRow(t,e){this.toRow=t,this.toRowAfter=e}moveHover(t){this.connection?this.moveHoverConnections.call(this,t):this.moveHoverTable.call(this,t)}moveHoverTable(t){var e=this.table.rowManager.getElement(),i=e.scrollTop,s=(this.touchMove?t.touches[0].pageY:t.pageY)-e.getBoundingClientRect().top+i;this.hoverElement.style.top=Math.min(s-this.startY,this.table.rowManager.element.scrollHeight-this.hoverElement.offsetHeight)+"px"}moveHoverConnections(t){this.hoverElement.style.left=this.startX+(this.touchMove?t.touches[0].pageX:t.pageX)+"px",this.hoverElement.style.top=this.startY+(this.touchMove?t.touches[0].pageY:t.pageY)+"px"}elementRowDrop(t,e,i){this.dispatchExternal("movableRowsElementDrop",t,e,i?i.getComponent():!1)}connectToTables(t){var e;this.connectionSelectorsTables&&(e=this.commsConnections(this.connectionSelectorsTables),this.dispatchExternal("movableRowsSendingStart",e),this.commsSend(this.connectionSelectorsTables,"moveRow","connect",{row:t})),this.connectionSelectorsElements&&(this.connectionElements=[],Array.isArray(this.connectionSelectorsElements)||(this.connectionSelectorsElements=[this.connectionSelectorsElements]),this.connectionSelectorsElements.forEach(i=>{typeof i=="string"?this.connectionElements=this.connectionElements.concat(Array.prototype.slice.call(document.querySelectorAll(i))):this.connectionElements.push(i)}),this.connectionElements.forEach(i=>{var s=n=>{this.elementRowDrop(n,i,this.moving)};i.addEventListener("mouseup",s),i.tabulatorElementDropEvent=s,i.classList.add("tabulator-movingrow-receiving")}))}disconnectFromTables(){var t;this.connectionSelectorsTables&&(t=this.commsConnections(this.connectionSelectorsTables),this.dispatchExternal("movableRowsSendingStop",t),this.commsSend(this.connectionSelectorsTables,"moveRow","disconnect")),this.connectionElements.forEach(e=>{e.classList.remove("tabulator-movingrow-receiving"),e.removeEventListener("mouseup",e.tabulatorElementDropEvent),delete e.tabulatorElementDropEvent})}connect(t,e){return this.connectedTable?(console.warn("Move Row Error - Table cannot accept connection, already connected to table:",this.connectedTable),!1):(this.connectedTable=t,this.connectedRow=e,this.table.element.classList.add("tabulator-movingrow-receiving"),this.table.rowManager.getDisplayRows().forEach(i=>{i.type==="row"&&i.modules.moveRow&&i.modules.moveRow.mouseup&&i.getElement().addEventListener("mouseup",i.modules.moveRow.mouseup)}),this.tableRowDropEvent=this.tableRowDrop.bind(this),this.table.element.addEventListener("mouseup",this.tableRowDropEvent),this.dispatchExternal("movableRowsReceivingStart",e,t),!0)}disconnect(t){t===this.connectedTable?(this.connectedTable=!1,this.connectedRow=!1,this.table.element.classList.remove("tabulator-movingrow-receiving"),this.table.rowManager.getDisplayRows().forEach(e=>{e.type==="row"&&e.modules.moveRow&&e.modules.moveRow.mouseup&&e.getElement().removeEventListener("mouseup",e.modules.moveRow.mouseup)}),this.table.element.removeEventListener("mouseup",this.tableRowDropEvent),this.dispatchExternal("movableRowsReceivingStop",t)):console.warn("Move Row Error - trying to disconnect from non connected table")}dropComplete(t,e,i){var s=!1;if(i){switch(typeof this.table.options.movableRowsSender){case"string":s=this.senders[this.table.options.movableRowsSender];break;case"function":s=this.table.options.movableRowsSender;break}s?s.call(this,this.moving?this.moving.getComponent():void 0,e?e.getComponent():void 0,t):this.table.options.movableRowsSender&&console.warn("Mover Row Error - no matching sender found:",this.table.options.movableRowsSender),this.dispatchExternal("movableRowsSent",this.moving.getComponent(),e?e.getComponent():void 0,t)}else this.dispatchExternal("movableRowsSentFailed",this.moving.getComponent(),e?e.getComponent():void 0,t);this.endMove()}tableRowDrop(t,e){var i=!1,s=!1;switch(t.stopImmediatePropagation(),typeof this.table.options.movableRowsReceiver){case"string":i=this.receivers[this.table.options.movableRowsReceiver];break;case"function":i=this.table.options.movableRowsReceiver;break}i?s=i.call(this,this.connectedRow.getComponent(),e?e.getComponent():void 0,this.connectedTable):console.warn("Mover Row Error - no matching receiver found:",this.table.options.movableRowsReceiver),s?this.dispatchExternal("movableRowsReceived",this.connectedRow.getComponent(),e?e.getComponent():void 0,this.connectedTable):this.dispatchExternal("movableRowsReceivedFailed",this.connectedRow.getComponent(),e?e.getComponent():void 0,this.connectedTable),this.commsSend(this.connectedTable,"moveRow","dropcomplete",{row:e,success:s})}commsReceived(t,e,i){switch(e){case"connect":return this.connect(t,i.row);case"disconnect":return this.disconnect(t);case"dropcomplete":return this.dropComplete(t,i.row,i.success)}}}it.prototype.receivers={insert:function(h,t,e){return this.table.addRow(h.getData(),void 0,t),!0},add:function(h,t,e){return this.table.addRow(h.getData()),!0},update:function(h,t,e){return t?(t.update(h.getData()),!0):!1},replace:function(h,t,e){return t?(this.table.addRow(h.getData(),void 0,t),t.delete(),!0):!1}};it.prototype.senders={delete:function(h,t,e){h.delete()}};it.moduleName="moveRow";var R8={};class U extends M{constructor(t){super(t),this.allowedTypes=["","data","edit","clipboard"],this.enabled=!0,this.registerColumnOption("mutator"),this.registerColumnOption("mutatorParams"),this.registerColumnOption("mutatorData"),this.registerColumnOption("mutatorDataParams"),this.registerColumnOption("mutatorEdit"),this.registerColumnOption("mutatorEditParams"),this.registerColumnOption("mutatorClipboard"),this.registerColumnOption("mutatorClipboardParams"),this.registerColumnOption("mutateLink")}initialize(){this.subscribe("cell-value-changing",this.transformCell.bind(this)),this.subscribe("cell-value-changed",this.mutateLink.bind(this)),this.subscribe("column-layout",this.initializeColumn.bind(this)),this.subscribe("row-data-init-before",this.rowDataChanged.bind(this)),this.subscribe("row-data-changing",this.rowDataChanged.bind(this))}rowDataChanged(t,e,i){return this.transformRow(e,"data",i)}initializeColumn(t){var e=!1,i={};this.allowedTypes.forEach(s=>{var n="mutator"+(s.charAt(0).toUpperCase()+s.slice(1)),o;t.definition[n]&&(o=this.lookupMutator(t.definition[n]),o&&(e=!0,i[n]={mutator:o,params:t.definition[n+"Params"]||{}}))}),e&&(t.modules.mutate=i)}lookupMutator(t){var e=!1;switch(typeof t){case"string":U.mutators[t]?e=U.mutators[t]:console.warn("Mutator Error - No such mutator found, ignoring: ",t);break;case"function":e=t;break}return e}transformRow(t,e,i){var s="mutator"+(e.charAt(0).toUpperCase()+e.slice(1)),n;return this.enabled&&this.table.columnManager.traverse(o=>{var r,l,d;o.modules.mutate&&(r=o.modules.mutate[s]||o.modules.mutate.mutator||!1,r&&(n=o.getFieldValue(typeof i<"u"?i:t),(e=="data"&&!i||typeof n<"u")&&(d=o.getComponent(),l=typeof r.params=="function"?r.params(n,t,e,d):r.params,o.setFieldValue(t,r.mutator(n,t,e,l,d)))))}),t}transformCell(t,e){if(t.column.modules.mutate){var i=t.column.modules.mutate.mutatorEdit||t.column.modules.mutate.mutator||!1,s={};if(i)return s=Object.assign(s,t.row.getData()),t.column.setFieldValue(s,e),i.mutator(e,s,"edit",i.params,t.getComponent())}return e}mutateLink(t){var e=t.column.definition.mutateLink;e&&(Array.isArray(e)||(e=[e]),e.forEach(i=>{var s=t.row.getCell(i);s&&s.setValue(s.getValue(),!0,!0)}))}enable(){this.enabled=!0}disable(){this.enabled=!1}}U.moduleName="mutator";U.mutators=R8;function H8(h,t,e,i,s){var n=document.createElement("span"),o=document.createElement("span"),r=document.createElement("span"),l=document.createElement("span"),d=document.createElement("span"),c=document.createElement("span");return this.table.modules.localize.langBind("pagination|counter|showing",p=>{o.innerHTML=p}),this.table.modules.localize.langBind("pagination|counter|of",p=>{l.innerHTML=p}),this.table.modules.localize.langBind("pagination|counter|rows",p=>{c.innerHTML=p}),i?(r.innerHTML=" "+t+"-"+Math.min(t+h-1,i)+" ",d.innerHTML=" "+i+" ",n.appendChild(o),n.appendChild(r),n.appendChild(l),n.appendChild(d),n.appendChild(c)):(r.innerHTML=" 0 ",n.appendChild(o),n.appendChild(r),n.appendChild(c)),n}function L8(h,t,e,i,s){var n=document.createElement("span"),o=document.createElement("span"),r=document.createElement("span"),l=document.createElement("span"),d=document.createElement("span"),c=document.createElement("span");return this.table.modules.localize.langBind("pagination|counter|showing",p=>{o.innerHTML=p}),r.innerHTML=" "+e+" ",this.table.modules.localize.langBind("pagination|counter|of",p=>{l.innerHTML=p}),d.innerHTML=" "+s+" ",this.table.modules.localize.langBind("pagination|counter|pages",p=>{c.innerHTML=p}),n.appendChild(o),n.appendChild(r),n.appendChild(l),n.appendChild(d),n.appendChild(c),n}var k8={rows:H8,pages:L8};class Y extends M{constructor(t){super(t),this.mode="local",this.progressiveLoad=!1,this.element=null,this.pageCounterElement=null,this.pageCounter=null,this.size=0,this.page=1,this.count=5,this.max=1,this.remoteRowCountEstimate=null,this.initialLoad=!0,this.dataChanging=!1,this.pageSizes=[],this.registerTableOption("pagination",!1),this.registerTableOption("paginationMode","local"),this.registerTableOption("paginationSize",!1),this.registerTableOption("paginationInitialPage",1),this.registerTableOption("paginationCounter",!1),this.registerTableOption("paginationCounterElement",!1),this.registerTableOption("paginationButtonCount",5),this.registerTableOption("paginationSizeSelector",!1),this.registerTableOption("paginationElement",!1),this.registerTableOption("paginationAddRow","page"),this.registerTableOption("progressiveLoad",!1),this.registerTableOption("progressiveLoadDelay",0),this.registerTableOption("progressiveLoadScrollMargin",0),this.registerTableFunction("setMaxPage",this.setMaxPage.bind(this)),this.registerTableFunction("setPage",this.setPage.bind(this)),this.registerTableFunction("setPageToRow",this.userSetPageToRow.bind(this)),this.registerTableFunction("setPageSize",this.userSetPageSize.bind(this)),this.registerTableFunction("getPageSize",this.getPageSize.bind(this)),this.registerTableFunction("previousPage",this.previousPage.bind(this)),this.registerTableFunction("nextPage",this.nextPage.bind(this)),this.registerTableFunction("getPage",this.getPage.bind(this)),this.registerTableFunction("getPageMax",this.getPageMax.bind(this)),this.registerComponentFunction("row","pageTo",this.setPageToRow.bind(this))}initialize(){this.table.options.pagination?(this.subscribe("row-deleted",this.rowsUpdated.bind(this)),this.subscribe("row-added",this.rowsUpdated.bind(this)),this.subscribe("data-processed",this.initialLoadComplete.bind(this)),this.subscribe("table-built",this.calculatePageSizes.bind(this)),this.subscribe("footer-redraw",this.footerRedraw.bind(this)),this.table.options.paginationAddRow=="page"&&this.subscribe("row-adding-position",this.rowAddingPosition.bind(this)),this.table.options.paginationMode==="remote"&&(this.subscribe("data-params",this.remotePageParams.bind(this)),this.subscribe("data-loaded",this._parseRemoteData.bind(this))),this.table.options.progressiveLoad&&console.error("Progressive Load Error - Pagination and progressive load cannot be used at the same time"),this.registerDisplayHandler(this.restOnRenderBefore.bind(this),40),this.registerDisplayHandler(this.getRows.bind(this),50),this.createElements(),this.initializePageCounter(),this.initializePaginator()):this.table.options.progressiveLoad&&(this.subscribe("data-params",this.remotePageParams.bind(this)),this.subscribe("data-loaded",this._parseRemoteData.bind(this)),this.subscribe("table-built",this.calculatePageSizes.bind(this)),this.subscribe("data-processed",this.initialLoadComplete.bind(this)),this.initializeProgressive(this.table.options.progressiveLoad),this.table.options.progressiveLoad==="scroll"&&this.subscribe("scroll-vertical",this.scrollVertical.bind(this)))}rowAddingPosition(t,e){var i=this.table.rowManager,s=i.getDisplayRows(),n;return e?s.length?n=s[0]:i.activeRows.length&&(n=i.activeRows[i.activeRows.length-1],e=!1):s.length&&(n=s[s.length-1],e=!(s.length<this.size)),{index:n,top:e}}calculatePageSizes(){var t,e;this.table.options.paginationSize?this.size=this.table.options.paginationSize:(t=document.createElement("div"),t.classList.add("tabulator-row"),t.style.visibility="hidden",e=document.createElement("div"),e.classList.add("tabulator-cell"),e.innerHTML="Page Row Test",t.appendChild(e),this.table.rowManager.getTableElement().appendChild(t),this.size=Math.floor(this.table.rowManager.getElement().clientHeight/t.offsetHeight),this.table.rowManager.getTableElement().removeChild(t)),this.dispatchExternal("pageSizeChanged",this.size),this.generatePageSizeSelectList()}initialLoadComplete(){this.initialLoad=!1}remotePageParams(t,e,i,s){return this.initialLoad||(this.progressiveLoad&&!i||!this.progressiveLoad&&!this.dataChanging)&&this.reset(!0),s.page=this.page,this.size&&(s.size=this.size),s}userSetPageToRow(t){return this.table.options.pagination&&(t=this.table.rowManager.findRow(t),t)?this.setPageToRow(t):Promise.reject()}userSetPageSize(t){return this.table.options.pagination?(this.setPageSize(t),this.setPage(1)):!1}scrollVertical(t,e){var i,s,n;!e&&!this.table.dataLoader.loading&&(i=this.table.rowManager.getElement(),s=i.scrollHeight-i.clientHeight-t,n=this.table.options.progressiveLoadScrollMargin||i.clientHeight*2,s<n&&this.nextPage().catch(()=>{}))}restOnRenderBefore(t,e){return e||this.mode==="local"&&this.reset(),t}rowsUpdated(){this.refreshData(!0,"all")}createElements(){var t;this.element=document.createElement("span"),this.element.classList.add("tabulator-paginator"),this.pagesElement=document.createElement("span"),this.pagesElement.classList.add("tabulator-pages"),t=document.createElement("button"),t.classList.add("tabulator-page"),t.setAttribute("type","button"),t.setAttribute("role","button"),t.setAttribute("aria-label",""),t.setAttribute("title",""),this.firstBut=t.cloneNode(!0),this.firstBut.setAttribute("data-page","first"),this.prevBut=t.cloneNode(!0),this.prevBut.setAttribute("data-page","prev"),this.nextBut=t.cloneNode(!0),this.nextBut.setAttribute("data-page","next"),this.lastBut=t.cloneNode(!0),this.lastBut.setAttribute("data-page","last"),this.table.options.paginationSizeSelector&&(this.pageSizeSelect=document.createElement("select"),this.pageSizeSelect.classList.add("tabulator-page-size"))}generatePageSizeSelectList(){var t=[];if(this.pageSizeSelect){if(Array.isArray(this.table.options.paginationSizeSelector))t=this.table.options.paginationSizeSelector,this.pageSizes=t,this.pageSizes.indexOf(this.size)==-1&&t.unshift(this.size);else if(this.pageSizes.indexOf(this.size)==-1){t=[];for(let e=1;e<5;e++)t.push(this.size*e);this.pageSizes=t}else t=this.pageSizes;for(;this.pageSizeSelect.firstChild;)this.pageSizeSelect.removeChild(this.pageSizeSelect.firstChild);t.forEach(e=>{var i=document.createElement("option");i.value=e,e===!0?this.langBind("pagination|all",function(s){i.innerHTML=s}):i.innerHTML=e,this.pageSizeSelect.appendChild(i)}),this.pageSizeSelect.value=this.size}}initializePageCounter(){var t=this.table.options.paginationCounter,e=null;t&&(typeof t=="function"?e=t:e=Y.pageCounters[t],e?(this.pageCounter=e,this.pageCounterElement=document.createElement("span"),this.pageCounterElement.classList.add("tabulator-page-counter")):console.warn("Pagination Error - No such page counter found: ",t))}initializePaginator(t){var e,i;t||(this.langBind("pagination|first",s=>{this.firstBut.innerHTML=s}),this.langBind("pagination|first_title",s=>{this.firstBut.setAttribute("aria-label",s),this.firstBut.setAttribute("title",s)}),this.langBind("pagination|prev",s=>{this.prevBut.innerHTML=s}),this.langBind("pagination|prev_title",s=>{this.prevBut.setAttribute("aria-label",s),this.prevBut.setAttribute("title",s)}),this.langBind("pagination|next",s=>{this.nextBut.innerHTML=s}),this.langBind("pagination|next_title",s=>{this.nextBut.setAttribute("aria-label",s),this.nextBut.setAttribute("title",s)}),this.langBind("pagination|last",s=>{this.lastBut.innerHTML=s}),this.langBind("pagination|last_title",s=>{this.lastBut.setAttribute("aria-label",s),this.lastBut.setAttribute("title",s)}),this.firstBut.addEventListener("click",()=>{this.setPage(1)}),this.prevBut.addEventListener("click",()=>{this.previousPage()}),this.nextBut.addEventListener("click",()=>{this.nextPage()}),this.lastBut.addEventListener("click",()=>{this.setPage(this.max)}),this.table.options.paginationElement&&(this.element=this.table.options.paginationElement),this.pageSizeSelect&&(e=document.createElement("label"),this.langBind("pagination|page_size",s=>{this.pageSizeSelect.setAttribute("aria-label",s),this.pageSizeSelect.setAttribute("title",s),e.innerHTML=s}),this.element.appendChild(e),this.element.appendChild(this.pageSizeSelect),this.pageSizeSelect.addEventListener("change",s=>{this.setPageSize(this.pageSizeSelect.value=="true"?!0:this.pageSizeSelect.value),this.setPage(1)})),this.element.appendChild(this.firstBut),this.element.appendChild(this.prevBut),this.element.appendChild(this.pagesElement),this.element.appendChild(this.nextBut),this.element.appendChild(this.lastBut),this.table.options.paginationElement||(this.table.options.paginationCounter&&(this.table.options.paginationCounterElement?this.table.options.paginationCounterElement instanceof HTMLElement?this.table.options.paginationCounterElement.appendChild(this.pageCounterElement):typeof this.table.options.paginationCounterElement=="string"&&(i=document.querySelector(this.table.options.paginationCounterElement),i?i.appendChild(this.pageCounterElement):console.warn("Pagination Error - Unable to find element matching paginationCounterElement selector:",this.table.options.paginationCounterElement)):this.footerAppend(this.pageCounterElement)),this.footerAppend(this.element)),this.page=this.table.options.paginationInitialPage,this.count=this.table.options.paginationButtonCount),this.mode=this.table.options.paginationMode}initializeProgressive(t){this.initializePaginator(!0),this.mode="progressive_"+t,this.progressiveLoad=!0}trackChanges(){this.dispatch("page-changed")}setMaxRows(t){t?this.max=this.size===!0?1:Math.ceil(t/this.size):this.max=1,this.page>this.max&&(this.page=this.max)}reset(t){this.initialLoad||(this.mode=="local"||t)&&(this.page=1,this.trackChanges())}setMaxPage(t){t=parseInt(t),this.max=t||1,this.page>this.max&&(this.page=this.max,this.trigger())}setPage(t){switch(t){case"first":return this.setPage(1);case"prev":return this.previousPage();case"next":return this.nextPage();case"last":return this.setPage(this.max)}return t=parseInt(t),t>0&&t<=this.max||this.mode!=="local"?(this.page=t,this.trackChanges(),this.trigger()):(console.warn("Pagination Error - Requested page is out of range of 1 - "+this.max+":",t),Promise.reject())}setPageToRow(t){var e=this.displayRows(-1),i=e.indexOf(t);if(i>-1){var s=this.size===!0?1:Math.ceil((i+1)/this.size);return this.setPage(s)}else return console.warn("Pagination Error - Requested row is not visible"),Promise.reject()}setPageSize(t){t!==!0&&(t=parseInt(t)),t>0&&(this.size=t,this.dispatchExternal("pageSizeChanged",t)),this.pageSizeSelect&&this.generatePageSizeSelectList(),this.trackChanges()}_setPageCounter(t,e,i){var s;if(this.pageCounter)switch(this.mode==="remote"&&(e=this.size,i=(this.page-1)*this.size+1,t=this.remoteRowCountEstimate),s=this.pageCounter.call(this,e,i,this.page,t,this.max),typeof s){case"object":if(s instanceof Node){for(;this.pageCounterElement.firstChild;)this.pageCounterElement.removeChild(this.pageCounterElement.firstChild);this.pageCounterElement.appendChild(s)}else this.pageCounterElement.innerHTML="",s!=null&&console.warn("Page Counter Error - Page Counter has returned a type of object, the only valid page counter object return is an instance of Node, the page counter returned:",s);break;case"undefined":this.pageCounterElement.innerHTML="";break;default:this.pageCounterElement.innerHTML=s}}_setPageButtons(){let t=Math.floor((this.count-1)/2),e=Math.ceil((this.count-1)/2),i=this.max-this.page+t+1<this.count?this.max-this.count+1:Math.max(this.page-t,1),s=this.page<=e?Math.min(this.count,this.max):Math.min(this.page+e,this.max);for(;this.pagesElement.firstChild;)this.pagesElement.removeChild(this.pagesElement.firstChild);this.page==1?(this.firstBut.disabled=!0,this.prevBut.disabled=!0):(this.firstBut.disabled=!1,this.prevBut.disabled=!1),this.page==this.max?(this.lastBut.disabled=!0,this.nextBut.disabled=!0):(this.lastBut.disabled=!1,this.nextBut.disabled=!1);for(let n=i;n<=s;n++)n>0&&n<=this.max&&this.pagesElement.appendChild(this._generatePageButton(n));this.footerRedraw()}_generatePageButton(t){var e=document.createElement("button");return e.classList.add("tabulator-page"),t==this.page&&e.classList.add("active"),e.setAttribute("type","button"),e.setAttribute("role","button"),this.langBind("pagination|page_title",i=>{e.setAttribute("aria-label",i+" "+t),e.setAttribute("title",i+" "+t)}),e.setAttribute("data-page",t),e.textContent=t,e.addEventListener("click",i=>{this.setPage(t)}),e}previousPage(){return this.page>1?(this.page--,this.trackChanges(),this.trigger()):(console.warn("Pagination Error - Previous page would be less than page 1:",0),Promise.reject())}nextPage(){return this.page<this.max?(this.page++,this.trackChanges(),this.trigger()):(this.progressiveLoad||console.warn("Pagination Error - Next page would be greater than maximum page of "+this.max+":",this.max+1),Promise.reject())}getPage(){return this.page}getPageMax(){return this.max}getPageSize(t){return this.size}getMode(){return this.mode}getRows(t){var e=0,i,s,n,o,r=t.filter(l=>l.type==="row");if(this.mode=="local"){i=[],this.setMaxRows(t.length),this.size===!0?(s=0,n=t.length):(s=this.size*(this.page-1),n=s+parseInt(this.size)),this._setPageButtons();for(let l=s;l<n;l++){let d=t[l];d&&(i.push(d),d.type==="row"&&(o||(o=d),e++))}return this._setPageCounter(r.length,e,o?r.indexOf(o)+1:0),i}else return this._setPageButtons(),this._setPageCounter(r.length),t.slice(0)}trigger(){var t;switch(this.mode){case"local":return t=this.table.rowManager.scrollLeft,this.refreshData(),this.table.rowManager.scrollHorizontal(t),this.dispatchExternal("pageLoaded",this.getPage()),Promise.resolve();case"remote":return this.dataChanging=!0,this.reloadData(null).finally(()=>{this.dataChanging=!1});case"progressive_load":case"progressive_scroll":return this.reloadData(null,!0);default:return console.warn("Pagination Error - no such pagination mode:",this.mode),Promise.reject()}}_parseRemoteData(t){var e;if(typeof t.last_page>"u"&&console.warn("Remote Pagination Error - Server response missing '"+(this.options("dataReceiveParams").last_page||"last_page")+"' property"),t.data)if(this.max=parseInt(t.last_page)||1,this.remoteRowCountEstimate=typeof t.last_row<"u"?t.last_row:t.last_page*this.size-(this.page==t.last_page?this.size-t.data.length:0),this.progressiveLoad){switch(this.mode){case"progressive_load":this.page==1?this.table.rowManager.setData(t.data,!1,this.page==1):this.table.rowManager.addRows(t.data),this.page<this.max&&setTimeout(()=>{this.nextPage()},this.table.options.progressiveLoadDelay);break;case"progressive_scroll":t=this.page===1?t.data:this.table.rowManager.getData().concat(t.data),this.table.rowManager.setData(t,this.page!==1,this.page==1),e=this.table.options.progressiveLoadScrollMargin||this.table.rowManager.element.clientHeight*2,this.table.rowManager.element.scrollHeight<=this.table.rowManager.element.clientHeight+e&&this.page<this.max&&setTimeout(()=>{this.nextPage()});break}return!1}else this.dispatchExternal("pageLoaded",this.getPage());else console.warn("Remote Pagination Error - Server response missing '"+(this.options("dataReceiveParams").data||"data")+"' property");return t.data}footerRedraw(){var t=this.table.footerManager.containerElement;Math.ceil(t.clientWidth)-t.scrollWidth<0?this.pagesElement.style.display="none":(this.pagesElement.style.display="",Math.ceil(t.clientWidth)-t.scrollWidth<0&&(this.pagesElement.style.display="none"))}}Y.moduleName="page";Y.pageCounters=k8;var T8={local:function(h,t){var e=localStorage.getItem(h+"-"+t);return e?JSON.parse(e):!1},cookie:function(h,t){var e=document.cookie,i=h+"-"+t,s=e.indexOf(i+"="),n,o;return s>-1&&(e=e.slice(s),n=e.indexOf(";"),n>-1&&(e=e.slice(0,n)),o=e.replace(i+"=","")),o?JSON.parse(o):!1}},S8={local:function(h,t,e){localStorage.setItem(h+"-"+t,JSON.stringify(e))},cookie:function(h,t,e){var i=new Date;i.setDate(i.getDate()+1e4),document.cookie=h+"-"+t+"="+JSON.stringify(e)+"; expires="+i.toUTCString()}};class T extends M{constructor(t){super(t),this.mode="",this.id="",this.defWatcherBlock=!1,this.config={},this.readFunc=!1,this.writeFunc=!1,this.registerTableOption("persistence",!1),this.registerTableOption("persistenceID",""),this.registerTableOption("persistenceMode",!0),this.registerTableOption("persistenceReaderFunc",!1),this.registerTableOption("persistenceWriterFunc",!1)}localStorageTest(){var t="_tabulator_test";try{return window.localStorage.setItem(t,t),window.localStorage.removeItem(t),!0}catch{return!1}}initialize(){if(this.table.options.persistence){var t=this.table.options.persistenceMode,e=this.table.options.persistenceID,i;this.mode=t!==!0?t:this.localStorageTest()?"local":"cookie",this.table.options.persistenceReaderFunc?typeof this.table.options.persistenceReaderFunc=="function"?this.readFunc=this.table.options.persistenceReaderFunc:T.readers[this.table.options.persistenceReaderFunc]?this.readFunc=T.readers[this.table.options.persistenceReaderFunc]:console.warn("Persistence Read Error - invalid reader set",this.table.options.persistenceReaderFunc):T.readers[this.mode]?this.readFunc=T.readers[this.mode]:console.warn("Persistence Read Error - invalid reader set",this.mode),this.table.options.persistenceWriterFunc?typeof this.table.options.persistenceWriterFunc=="function"?this.writeFunc=this.table.options.persistenceWriterFunc:T.writers[this.table.options.persistenceWriterFunc]?this.writeFunc=T.writers[this.table.options.persistenceWriterFunc]:console.warn("Persistence Write Error - invalid reader set",this.table.options.persistenceWriterFunc):T.writers[this.mode]?this.writeFunc=T.writers[this.mode]:console.warn("Persistence Write Error - invalid writer set",this.mode),this.id="tabulator-"+(e||this.table.element.getAttribute("id")||""),this.config={sort:this.table.options.persistence===!0||this.table.options.persistence.sort,filter:this.table.options.persistence===!0||this.table.options.persistence.filter,headerFilter:this.table.options.persistence===!0||this.table.options.persistence.headerFilter,group:this.table.options.persistence===!0||this.table.options.persistence.group,page:this.table.options.persistence===!0||this.table.options.persistence.page,columns:this.table.options.persistence===!0?["title","width","visible"]:this.table.options.persistence.columns},this.config.page&&(i=this.retrieveData("page"),i&&(typeof i.paginationSize<"u"&&(this.config.page===!0||this.config.page.size)&&(this.table.options.paginationSize=i.paginationSize),typeof i.paginationInitialPage<"u"&&(this.config.page===!0||this.config.page.page)&&(this.table.options.paginationInitialPage=i.paginationInitialPage))),this.config.group&&(i=this.retrieveData("group"),i&&(typeof i.groupBy<"u"&&(this.config.group===!0||this.config.group.groupBy)&&(this.table.options.groupBy=i.groupBy),typeof i.groupStartOpen<"u"&&(this.config.group===!0||this.config.group.groupStartOpen)&&(this.table.options.groupStartOpen=i.groupStartOpen),typeof i.groupHeader<"u"&&(this.config.group===!0||this.config.group.groupHeader)&&(this.table.options.groupHeader=i.groupHeader))),this.config.columns&&(this.table.options.columns=this.load("columns",this.table.options.columns),this.subscribe("column-init",this.initializeColumn.bind(this)),this.subscribe("column-show",this.save.bind(this,"columns")),this.subscribe("column-hide",this.save.bind(this,"columns")),this.subscribe("column-moved",this.save.bind(this,"columns"))),this.subscribe("table-built",this.tableBuilt.bind(this),0),this.subscribe("table-redraw",this.tableRedraw.bind(this)),this.subscribe("filter-changed",this.eventSave.bind(this,"filter")),this.subscribe("filter-changed",this.eventSave.bind(this,"headerFilter")),this.subscribe("sort-changed",this.eventSave.bind(this,"sort")),this.subscribe("group-changed",this.eventSave.bind(this,"group")),this.subscribe("page-changed",this.eventSave.bind(this,"page")),this.subscribe("column-resized",this.eventSave.bind(this,"columns")),this.subscribe("column-width",this.eventSave.bind(this,"columns")),this.subscribe("layout-refreshed",this.eventSave.bind(this,"columns"))}this.registerTableFunction("getColumnLayout",this.getColumnLayout.bind(this)),this.registerTableFunction("setColumnLayout",this.setColumnLayout.bind(this))}eventSave(t){this.config[t]&&this.save(t)}tableBuilt(){var t,e,i;this.config.sort&&(t=this.load("sort"),t&&(this.table.options.initialSort=t)),this.config.filter&&(e=this.load("filter"),e&&(this.table.options.initialFilter=e)),this.config.headerFilter&&(i=this.load("headerFilter"),i&&(this.table.options.initialHeaderFilter=i))}tableRedraw(t){t&&this.config.columns&&this.save("columns")}getColumnLayout(){return this.parseColumns(this.table.columnManager.getColumns())}setColumnLayout(t){return this.table.columnManager.setColumns(this.mergeDefinition(this.table.options.columns,t,!0)),!0}initializeColumn(t){var e,i;this.config.columns&&(this.defWatcherBlock=!0,e=t.getDefinition(),i=this.config.columns===!0?Object.keys(e):this.config.columns,i.forEach(s=>{var n=Object.getOwnPropertyDescriptor(e,s),o=e[s];n&&Object.defineProperty(e,s,{set:r=>{o=r,this.defWatcherBlock||this.save("columns"),n.set&&n.set(r)},get:()=>(n.get&&n.get(),o)})}),this.defWatcherBlock=!1)}load(t,e){var i=this.retrieveData(t);return e&&(i=i?this.mergeDefinition(e,i):e),i}retrieveData(t){return this.readFunc?this.readFunc(this.id,t):!1}mergeDefinition(t,e,i){var s=[];return e=e||[],e.forEach((n,o)=>{var r=this._findColumn(t,n),l;r&&(i?l=Object.keys(n):this.config.columns===!0||this.config.columns==null?(l=Object.keys(r),l.push("width")):l=this.config.columns,l.forEach(d=>{d!=="columns"&&typeof n[d]<"u"&&(r[d]=n[d])}),r.columns&&(r.columns=this.mergeDefinition(r.columns,n.columns)),s.push(r))}),t.forEach((n,o)=>{var r=this._findColumn(e,n);r||(s.length>o?s.splice(o,0,n):s.push(n))}),s}_findColumn(t,e){var i=e.columns?"group":e.field?"field":"object";return t.find(function(s){switch(i){case"group":return s.title===e.title&&s.columns.length===e.columns.length;case"field":return s.field===e.field;case"object":return s===e}})}save(t){var e={};switch(t){case"columns":e=this.parseColumns(this.table.columnManager.getColumns());break;case"filter":e=this.table.modules.filter.getFilters();break;case"headerFilter":e=this.table.modules.filter.getHeaderFilters();break;case"sort":e=this.validateSorters(this.table.modules.sort.getSort());break;case"group":e=this.getGroupConfig();break;case"page":e=this.getPageConfig();break}this.writeFunc&&this.writeFunc(this.id,t,e)}validateSorters(t){return t.forEach(function(e){e.column=e.field,delete e.field}),t}getGroupConfig(){var t={};return this.config.group&&((this.config.group===!0||this.config.group.groupBy)&&(t.groupBy=this.table.options.groupBy),(this.config.group===!0||this.config.group.groupStartOpen)&&(t.groupStartOpen=this.table.options.groupStartOpen),(this.config.group===!0||this.config.group.groupHeader)&&(t.groupHeader=this.table.options.groupHeader)),t}getPageConfig(){var t={};return this.config.page&&((this.config.page===!0||this.config.page.size)&&(t.paginationSize=this.table.modules.page.getPageSize()),(this.config.page===!0||this.config.page.page)&&(t.paginationInitialPage=this.table.modules.page.getPage())),t}parseColumns(t){var e=[],i=["headerContextMenu","headerMenu","contextMenu","clickMenu"];return t.forEach(s=>{var n={},o=s.getDefinition(),r;s.isGroup?(n.title=o.title,n.columns=this.parseColumns(s.getColumns())):(n.field=s.getField(),this.config.columns===!0||this.config.columns==null?(r=Object.keys(o),r.push("width"),r.push("visible")):r=this.config.columns,r.forEach(l=>{switch(l){case"width":n.width=s.getWidth();break;case"visible":n.visible=s.visible;break;default:typeof o[l]!="function"&&i.indexOf(l)===-1&&(n[l]=o[l])}})),e.push(n)}),e}}T.moduleName="persistence";T.moduleInitOrder=-10;T.readers=T8;T.writers=S8;class Fe extends M{constructor(t){super(t),this.columnSubscribers={},this.registerTableOption("rowContextPopup",!1),this.registerTableOption("rowClickPopup",!1),this.registerTableOption("rowDblClickPopup",!1),this.registerTableOption("groupContextPopup",!1),this.registerTableOption("groupClickPopup",!1),this.registerTableOption("groupDblClickPopup",!1),this.registerColumnOption("headerContextPopup"),this.registerColumnOption("headerClickPopup"),this.registerColumnOption("headerDblClickPopup"),this.registerColumnOption("headerPopup"),this.registerColumnOption("headerPopupIcon"),this.registerColumnOption("contextPopup"),this.registerColumnOption("clickPopup"),this.registerColumnOption("dblClickPopup"),this.registerComponentFunction("cell","popup",this._componentPopupCall.bind(this)),this.registerComponentFunction("column","popup",this._componentPopupCall.bind(this)),this.registerComponentFunction("row","popup",this._componentPopupCall.bind(this)),this.registerComponentFunction("group","popup",this._componentPopupCall.bind(this))}initialize(){this.initializeRowWatchers(),this.initializeGroupWatchers(),this.subscribe("column-init",this.initializeColumn.bind(this))}_componentPopupCall(t,e,i){this.loadPopupEvent(e,null,t,i)}initializeRowWatchers(){this.table.options.rowContextPopup&&(this.subscribe("row-contextmenu",this.loadPopupEvent.bind(this,this.table.options.rowContextPopup)),this.table.on("rowTapHold",this.loadPopupEvent.bind(this,this.table.options.rowContextPopup))),this.table.options.rowClickPopup&&this.subscribe("row-click",this.loadPopupEvent.bind(this,this.table.options.rowClickPopup)),this.table.options.rowDblClickPopup&&this.subscribe("row-dblclick",this.loadPopupEvent.bind(this,this.table.options.rowDblClickPopup))}initializeGroupWatchers(){this.table.options.groupContextPopup&&(this.subscribe("group-contextmenu",this.loadPopupEvent.bind(this,this.table.options.groupContextPopup)),this.table.on("groupTapHold",this.loadPopupEvent.bind(this,this.table.options.groupContextPopup))),this.table.options.groupClickPopup&&this.subscribe("group-click",this.loadPopupEvent.bind(this,this.table.options.groupClickPopup)),this.table.options.groupDblClickPopup&&this.subscribe("group-dblclick",this.loadPopupEvent.bind(this,this.table.options.groupDblClickPopup))}initializeColumn(t){var e=t.definition;e.headerContextPopup&&!this.columnSubscribers.headerContextPopup&&(this.columnSubscribers.headerContextPopup=this.loadPopupTableColumnEvent.bind(this,"headerContextPopup"),this.subscribe("column-contextmenu",this.columnSubscribers.headerContextPopup),this.table.on("headerTapHold",this.loadPopupTableColumnEvent.bind(this,"headerContextPopup"))),e.headerClickPopup&&!this.columnSubscribers.headerClickPopup&&(this.columnSubscribers.headerClickPopup=this.loadPopupTableColumnEvent.bind(this,"headerClickPopup"),this.subscribe("column-click",this.columnSubscribers.headerClickPopup)),e.headerDblClickPopup&&!this.columnSubscribers.headerDblClickPopup&&(this.columnSubscribers.headerDblClickPopup=this.loadPopupTableColumnEvent.bind(this,"headerDblClickPopup"),this.subscribe("column-dblclick",this.columnSubscribers.headerDblClickPopup)),e.headerPopup&&this.initializeColumnHeaderPopup(t),e.contextPopup&&!this.columnSubscribers.contextPopup&&(this.columnSubscribers.contextPopup=this.loadPopupTableCellEvent.bind(this,"contextPopup"),this.subscribe("cell-contextmenu",this.columnSubscribers.contextPopup),this.table.on("cellTapHold",this.loadPopupTableCellEvent.bind(this,"contextPopup"))),e.clickPopup&&!this.columnSubscribers.clickPopup&&(this.columnSubscribers.clickPopup=this.loadPopupTableCellEvent.bind(this,"clickPopup"),this.subscribe("cell-click",this.columnSubscribers.clickPopup)),e.dblClickPopup&&!this.columnSubscribers.dblClickPopup&&(this.columnSubscribers.dblClickPopup=this.loadPopupTableCellEvent.bind(this,"dblClickPopup"),this.subscribe("cell-click",this.columnSubscribers.dblClickPopup))}initializeColumnHeaderPopup(t){var e=t.definition.headerPopupIcon,i;i=document.createElement("span"),i.classList.add("tabulator-header-popup-button"),e?(typeof e=="function"&&(e=e(t.getComponent())),e instanceof HTMLElement?i.appendChild(e):i.innerHTML=e):i.innerHTML="&vellip;",i.addEventListener("click",s=>{s.stopPropagation(),s.preventDefault(),this.loadPopupEvent(t.definition.headerPopup,s,t)}),t.titleElement.insertBefore(i,t.titleElement.firstChild)}loadPopupTableCellEvent(t,e,i){i._cell&&(i=i._cell),i.column.definition[t]&&this.loadPopupEvent(i.column.definition[t],e,i)}loadPopupTableColumnEvent(t,e,i){i._column&&(i=i._column),i.definition[t]&&this.loadPopupEvent(i.definition[t],e,i)}loadPopupEvent(t,e,i,s){var n;function o(r){n=r}i._group?i=i._group:i._row&&(i=i._row),t=typeof t=="function"?t.call(this.table,e,i.getComponent(),o):t,this.loadPopup(e,i,t,n,s)}loadPopup(t,e,i,s,n){var o=!(t instanceof MouseEvent),r,l;i instanceof HTMLElement?r=i:(r=document.createElement("div"),r.innerHTML=i),r.classList.add("tabulator-popup"),r.addEventListener("click",d=>{d.stopPropagation()}),o||t.preventDefault(),l=this.popup(r),typeof s=="function"&&l.renderCallback(s),t?l.show(t):l.show(e.getElement(),n||"center"),l.hideOnBlur(()=>{this.dispatchExternal("popupClosed",e.getComponent())}),this.dispatchExternal("popupOpened",e.getComponent())}}Fe.moduleName="popup";class Pe extends M{constructor(t){super(t),this.element=!1,this.manualBlock=!1,this.beforeprintEventHandler=null,this.afterprintEventHandler=null,this.registerTableOption("printAsHtml",!1),this.registerTableOption("printFormatter",!1),this.registerTableOption("printHeader",!1),this.registerTableOption("printFooter",!1),this.registerTableOption("printStyled",!0),this.registerTableOption("printRowRange","visible"),this.registerTableOption("printConfig",{}),this.registerColumnOption("print"),this.registerColumnOption("titlePrint")}initialize(){this.table.options.printAsHtml&&(this.beforeprintEventHandler=this.replaceTable.bind(this),this.afterprintEventHandler=this.cleanup.bind(this),window.addEventListener("beforeprint",this.beforeprintEventHandler),window.addEventListener("afterprint",this.afterprintEventHandler),this.subscribe("table-destroy",this.destroy.bind(this))),this.registerTableFunction("print",this.printFullscreen.bind(this))}destroy(){this.table.options.printAsHtml&&(window.removeEventListener("beforeprint",this.beforeprintEventHandler),window.removeEventListener("afterprint",this.afterprintEventHandler))}replaceTable(){this.manualBlock||(this.element=document.createElement("div"),this.element.classList.add("tabulator-print-table"),this.element.appendChild(this.table.modules.export.generateTable(this.table.options.printConfig,this.table.options.printStyled,this.table.options.printRowRange,"print")),this.table.element.style.display="none",this.table.element.parentNode.insertBefore(this.element,this.table.element))}cleanup(){document.body.classList.remove("tabulator-print-fullscreen-hide"),this.element&&this.element.parentNode&&(this.element.parentNode.removeChild(this.element),this.table.element.style.display="")}printFullscreen(t,e,i){var s=window.scrollX,n=window.scrollY,o=document.createElement("div"),r=document.createElement("div"),l=this.table.modules.export.generateTable(typeof i<"u"?i:this.table.options.printConfig,typeof e<"u"?e:this.table.options.printStyled,t||this.table.options.printRowRange,"print"),d,c;this.manualBlock=!0,this.element=document.createElement("div"),this.element.classList.add("tabulator-print-fullscreen"),this.table.options.printHeader&&(o.classList.add("tabulator-print-header"),d=typeof this.table.options.printHeader=="function"?this.table.options.printHeader.call(this.table):this.table.options.printHeader,typeof d=="string"?o.innerHTML=d:o.appendChild(d),this.element.appendChild(o)),this.element.appendChild(l),this.table.options.printFooter&&(r.classList.add("tabulator-print-footer"),c=typeof this.table.options.printFooter=="function"?this.table.options.printFooter.call(this.table):this.table.options.printFooter,typeof c=="string"?r.innerHTML=c:r.appendChild(c),this.element.appendChild(r)),document.body.classList.add("tabulator-print-fullscreen-hide"),document.body.appendChild(this.element),this.table.options.printFormatter&&this.table.options.printFormatter(this.element,l),window.print(),this.cleanup(),window.scrollTo(s,n),this.manualBlock=!1}}Pe.moduleName="print";class Oe extends M{constructor(t){super(t),this.data=!1,this.blocked=!1,this.origFuncs={},this.currentVersion=0,this.registerTableOption("reactiveData",!1)}initialize(){this.table.options.reactiveData&&(this.subscribe("cell-value-save-before",this.block.bind(this,"cellsave")),this.subscribe("cell-value-save-after",this.unblock.bind(this,"cellsave")),this.subscribe("row-data-save-before",this.block.bind(this,"rowsave")),this.subscribe("row-data-save-after",this.unblock.bind(this,"rowsave")),this.subscribe("row-data-init-after",this.watchRow.bind(this)),this.subscribe("data-processing",this.watchData.bind(this)),this.subscribe("table-destroy",this.unwatchData.bind(this)))}watchData(t){var e=this,i;this.currentVersion++,i=this.currentVersion,this.unwatchData(),this.data=t,this.origFuncs.push=t.push,Object.defineProperty(this.data,"push",{enumerable:!1,configurable:!0,value:function(){var s=Array.from(arguments),n;return!e.blocked&&i===e.currentVersion&&(e.block("data-push"),s.forEach(o=>{e.table.rowManager.addRowActual(o,!1)}),n=e.origFuncs.push.apply(t,arguments),e.unblock("data-push")),n}}),this.origFuncs.unshift=t.unshift,Object.defineProperty(this.data,"unshift",{enumerable:!1,configurable:!0,value:function(){var s=Array.from(arguments),n;return!e.blocked&&i===e.currentVersion&&(e.block("data-unshift"),s.forEach(o=>{e.table.rowManager.addRowActual(o,!0)}),n=e.origFuncs.unshift.apply(t,arguments),e.unblock("data-unshift")),n}}),this.origFuncs.shift=t.shift,Object.defineProperty(this.data,"shift",{enumerable:!1,configurable:!0,value:function(){var s,n;return!e.blocked&&i===e.currentVersion&&(e.block("data-shift"),e.data.length&&(s=e.table.rowManager.getRowFromDataObject(e.data[0]),s&&s.deleteActual()),n=e.origFuncs.shift.call(t),e.unblock("data-shift")),n}}),this.origFuncs.pop=t.pop,Object.defineProperty(this.data,"pop",{enumerable:!1,configurable:!0,value:function(){var s,n;return!e.blocked&&i===e.currentVersion&&(e.block("data-pop"),e.data.length&&(s=e.table.rowManager.getRowFromDataObject(e.data[e.data.length-1]),s&&s.deleteActual()),n=e.origFuncs.pop.call(t),e.unblock("data-pop")),n}}),this.origFuncs.splice=t.splice,Object.defineProperty(this.data,"splice",{enumerable:!1,configurable:!0,value:function(){var s=Array.from(arguments),n=s[0]<0?t.length+s[0]:s[0],o=s[1],r=s[2]?s.slice(2):!1,l,d;if(!e.blocked&&i===e.currentVersion){if(e.block("data-splice"),r&&(l=t[n]?e.table.rowManager.getRowFromDataObject(t[n]):!1,l?r.forEach(p=>{e.table.rowManager.addRowActual(p,!0,l,!0)}):(r=r.slice().reverse(),r.forEach(p=>{e.table.rowManager.addRowActual(p,!0,!1,!0)}))),o!==0){var c=t.slice(n,typeof s[1]>"u"?s[1]:n+o);c.forEach((p,u)=>{var g=e.table.rowManager.getRowFromDataObject(p);g&&g.deleteActual(u!==c.length-1)})}(r||o!==0)&&e.table.rowManager.reRenderInPosition(),d=e.origFuncs.splice.apply(t,arguments),e.unblock("data-splice")}return d}})}unwatchData(){if(this.data!==!1)for(var t in this.origFuncs)Object.defineProperty(this.data,t,{enumerable:!0,configurable:!0,writable:!0,value:this.origFuncs.key})}watchRow(t){var e=t.getData();for(var i in e)this.watchKey(t,e,i);this.table.options.dataTree&&this.watchTreeChildren(t)}watchTreeChildren(t){var e=this,i=t.getData()[this.table.options.dataTreeChildField],s={};i&&(s.push=i.push,Object.defineProperty(i,"push",{enumerable:!1,configurable:!0,value:()=>{if(!e.blocked){e.block("tree-push");var n=s.push.apply(i,arguments);this.rebuildTree(t),e.unblock("tree-push")}return n}}),s.unshift=i.unshift,Object.defineProperty(i,"unshift",{enumerable:!1,configurable:!0,value:()=>{if(!e.blocked){e.block("tree-unshift");var n=s.unshift.apply(i,arguments);this.rebuildTree(t),e.unblock("tree-unshift")}return n}}),s.shift=i.shift,Object.defineProperty(i,"shift",{enumerable:!1,configurable:!0,value:()=>{if(!e.blocked){e.block("tree-shift");var n=s.shift.call(i);this.rebuildTree(t),e.unblock("tree-shift")}return n}}),s.pop=i.pop,Object.defineProperty(i,"pop",{enumerable:!1,configurable:!0,value:()=>{if(!e.blocked){e.block("tree-pop");var n=s.pop.call(i);this.rebuildTree(t),e.unblock("tree-pop")}return n}}),s.splice=i.splice,Object.defineProperty(i,"splice",{enumerable:!1,configurable:!0,value:()=>{if(!e.blocked){e.block("tree-splice");var n=s.splice.apply(i,arguments);this.rebuildTree(t),e.unblock("tree-splice")}return n}}))}rebuildTree(t){this.table.modules.dataTree.initializeRow(t),this.table.modules.dataTree.layoutRow(t),this.table.rowManager.refreshActiveData("tree",!1,!0)}watchKey(t,e,i){var s=this,n=Object.getOwnPropertyDescriptor(e,i),o=e[i],r=this.currentVersion;Object.defineProperty(e,i,{set:l=>{if(o=l,!s.blocked&&r===s.currentVersion){s.block("key");var d={};d[i]=l,t.updateData(d),s.unblock("key")}n.set&&n.set(l)},get:()=>(n.get&&n.get(),o)})}unwatchRow(t){var e=t.getData();for(var i in e)Object.defineProperty(e,i,{value:e[i]})}block(t){this.blocked||(this.blocked=t)}unblock(t){this.blocked===t&&(this.blocked=!1)}}Oe.moduleName="reactiveData";class Be extends M{constructor(t){super(t),this.startColumn=!1,this.startX=!1,this.startWidth=!1,this.latestX=!1,this.handle=null,this.initialNextColumn=null,this.nextColumn=null,this.initialized=!1,this.registerColumnOption("resizable",!0),this.registerTableOption("resizableColumnFit",!1)}initialize(){this.subscribe("column-rendered",this.layoutColumnHeader.bind(this))}initializeEventWatchers(){this.initialized||(this.subscribe("cell-rendered",this.layoutCellHandles.bind(this)),this.subscribe("cell-delete",this.deInitializeComponent.bind(this)),this.subscribe("cell-height",this.resizeHandle.bind(this)),this.subscribe("column-moved",this.columnLayoutUpdated.bind(this)),this.subscribe("column-hide",this.deInitializeColumn.bind(this)),this.subscribe("column-show",this.columnLayoutUpdated.bind(this)),this.subscribe("column-width",this.columnWidthUpdated.bind(this)),this.subscribe("column-delete",this.deInitializeComponent.bind(this)),this.subscribe("column-height",this.resizeHandle.bind(this)),this.initialized=!0)}layoutCellHandles(t){t.row.type==="row"&&(this.deInitializeComponent(t),this.initializeColumn("cell",t,t.column,t.element))}layoutColumnHeader(t){t.definition.resizable&&(this.initializeEventWatchers(),this.deInitializeComponent(t),this.initializeColumn("header",t,t,t.element))}columnLayoutUpdated(t){var e=t.prevColumn();this.reinitializeColumn(t),e&&this.reinitializeColumn(e)}columnWidthUpdated(t){t.modules.frozen&&(this.table.modules.frozenColumns.leftColumns.includes(t)?this.table.modules.frozenColumns.leftColumns.forEach(e=>{this.reinitializeColumn(e)}):this.table.modules.frozenColumns.rightColumns.includes(t)&&this.table.modules.frozenColumns.rightColumns.forEach(e=>{this.reinitializeColumn(e)}))}frozenColumnOffset(t){var e=!1;return t.modules.frozen&&(e=t.modules.frozen.marginValue,t.modules.frozen.position==="left"?e+=t.getWidth()-3:e&&(e-=3)),e!==!1?e+"px":!1}reinitializeColumn(t){var e=this.frozenColumnOffset(t);t.cells.forEach(i=>{i.modules.resize&&i.modules.resize.handleEl&&(e&&(i.modules.resize.handleEl.style[t.modules.frozen.position]=e,i.modules.resize.handleEl.style["z-index"]=11),i.element.after(i.modules.resize.handleEl))}),t.modules.resize&&t.modules.resize.handleEl&&(e&&(t.modules.resize.handleEl.style[t.modules.frozen.position]=e),t.element.after(t.modules.resize.handleEl))}initializeColumn(t,e,i,s){var n=this,o=!1,r=i.definition.resizable,l={},d=i.getLastColumn();if(t==="header"&&(o=i.definition.formatter=="textarea"||i.definition.variableHeight,l={variableHeight:o}),(r===!0||r==t)&&this._checkResizability(d)){var c=document.createElement("span");c.className="tabulator-col-resize-handle",c.addEventListener("click",function(u){u.stopPropagation()});var p=function(u){n.startColumn=i,n.initialNextColumn=n.nextColumn=d.nextColumn(),n._mouseDown(u,d,c)};c.addEventListener("mousedown",p),c.addEventListener("touchstart",p,{passive:!0}),c.addEventListener("dblclick",u=>{var g=d.getWidth();u.stopPropagation(),d.reinitializeWidth(!0),g!==d.getWidth()&&(n.dispatch("column-resized",d),n.table.externalEvents.dispatch("columnResized",d.getComponent()))}),i.modules.frozen&&(c.style.position="sticky",c.style[i.modules.frozen.position]=this.frozenColumnOffset(i)),l.handleEl=c,s.parentNode&&i.visible&&s.after(c)}e.modules.resize=l}deInitializeColumn(t){this.deInitializeComponent(t),t.cells.forEach(e=>{this.deInitializeComponent(e)})}deInitializeComponent(t){var e;t.modules.resize&&(e=t.modules.resize.handleEl,e&&e.parentElement&&e.parentElement.removeChild(e))}resizeHandle(t,e){t.modules.resize&&t.modules.resize.handleEl&&(t.modules.resize.handleEl.style.height=e)}_checkResizability(t){return t.definition.resizable}_mouseDown(t,e,i){var s=this;s.table.element.classList.add("tabulator-block-select");function n(r){var l=typeof r.screenX>"u"?r.touches[0].screenX:r.screenX,d=l-s.startX,c=l-s.latestX,p,u;if(s.latestX=l,s.table.rtl&&(d=-d,c=-c),p=e.width==e.minWidth||e.width==e.maxWidth,e.setWidth(s.startWidth+d),u=e.width==e.minWidth||e.width==e.maxWidth,c<0&&(s.nextColumn=s.initialNextColumn),s.table.options.resizableColumnFit&&s.nextColumn&&!(p&&u)){let g=s.nextColumn.getWidth();c>0&&g<=s.nextColumn.minWidth&&(s.nextColumn=s.nextColumn.nextColumn()),s.nextColumn&&s.nextColumn.setWidth(s.nextColumn.getWidth()-c)}s.table.columnManager.rerenderColumns(!0),!s.table.browserSlow&&e.modules.resize&&e.modules.resize.variableHeight&&e.checkCellHeights()}function o(r){s.startColumn.modules.edit&&(s.startColumn.modules.edit.blocked=!1),s.table.browserSlow&&e.modules.resize&&e.modules.resize.variableHeight&&e.checkCellHeights(),document.body.removeEventListener("mouseup",o),document.body.removeEventListener("mousemove",n),i.removeEventListener("touchmove",n),i.removeEventListener("touchend",o),s.table.element.classList.remove("tabulator-block-select"),s.startWidth!==e.getWidth()&&(s.table.columnManager.verticalAlignHeaders(),s.dispatch("column-resized",e),s.table.externalEvents.dispatch("columnResized",e.getComponent()))}t.stopPropagation(),s.startColumn.modules.edit&&(s.startColumn.modules.edit.blocked=!0),s.startX=typeof t.screenX>"u"?t.touches[0].screenX:t.screenX,s.latestX=s.startX,s.startWidth=e.getWidth(),document.body.addEventListener("mousemove",n),document.body.addEventListener("mouseup",o),i.addEventListener("touchmove",n,{passive:!0}),i.addEventListener("touchend",o)}}Be.moduleName="resizeColumns";class _e extends M{constructor(t){super(t),this.startColumn=!1,this.startY=!1,this.startHeight=!1,this.handle=null,this.prevHandle=null,this.registerTableOption("resizableRows",!1)}initialize(){this.table.options.resizableRows&&this.subscribe("row-layout-after",this.initializeRow.bind(this))}initializeRow(t){var e=this,i=t.getElement(),s=document.createElement("div");s.className="tabulator-row-resize-handle";var n=document.createElement("div");n.className="tabulator-row-resize-handle prev",s.addEventListener("click",function(l){l.stopPropagation()});var o=function(l){e.startRow=t,e._mouseDown(l,t,s)};s.addEventListener("mousedown",o),s.addEventListener("touchstart",o,{passive:!0}),n.addEventListener("click",function(l){l.stopPropagation()});var r=function(l){var d=e.table.rowManager.prevDisplayRow(t);d&&(e.startRow=d,e._mouseDown(l,d,n))};n.addEventListener("mousedown",r),n.addEventListener("touchstart",r,{passive:!0}),i.appendChild(s),i.appendChild(n)}_mouseDown(t,e,i){var s=this;s.table.element.classList.add("tabulator-block-select");function n(r){e.setHeight(s.startHeight+((typeof r.screenY>"u"?r.touches[0].screenY:r.screenY)-s.startY))}function o(r){document.body.removeEventListener("mouseup",n),document.body.removeEventListener("mousemove",n),i.removeEventListener("touchmove",n),i.removeEventListener("touchend",o),s.table.element.classList.remove("tabulator-block-select"),s.dispatchExternal("rowResized",e.getComponent())}t.stopPropagation(),s.startY=typeof t.screenY>"u"?t.touches[0].screenY:t.screenY,s.startHeight=e.getHeight(),document.body.addEventListener("mousemove",n),document.body.addEventListener("mouseup",o),i.addEventListener("touchmove",n,{passive:!0}),i.addEventListener("touchend",o)}}_e.moduleName="resizeRows";class Ie extends M{constructor(t){super(t),this.binding=!1,this.visibilityObserver=!1,this.resizeObserver=!1,this.containerObserver=!1,this.tableHeight=0,this.tableWidth=0,this.containerHeight=0,this.containerWidth=0,this.autoResize=!1,this.visible=!1,this.initialized=!1,this.initialRedraw=!1,this.registerTableOption("autoResize",!0)}initialize(){if(this.table.options.autoResize){var t=this.table,e;this.tableHeight=t.element.clientHeight,this.tableWidth=t.element.clientWidth,t.element.parentNode&&(this.containerHeight=t.element.parentNode.clientHeight,this.containerWidth=t.element.parentNode.clientWidth),typeof IntersectionObserver<"u"&&typeof ResizeObserver<"u"&&t.rowManager.getRenderMode()==="virtual"?(this.initializeVisibilityObserver(),this.autoResize=!0,this.resizeObserver=new ResizeObserver(i=>{if(!t.browserMobile||t.browserMobile&&(!t.modules.edit||t.modules.edit&&!t.modules.edit.currentCell)){var s=Math.floor(i[0].contentRect.height),n=Math.floor(i[0].contentRect.width);(this.tableHeight!=s||this.tableWidth!=n)&&(this.tableHeight=s,this.tableWidth=n,t.element.parentNode&&(this.containerHeight=t.element.parentNode.clientHeight,this.containerWidth=t.element.parentNode.clientWidth),this.redrawTable())}}),this.resizeObserver.observe(t.element),e=window.getComputedStyle(t.element),this.table.element.parentNode&&!this.table.rowManager.fixedHeight&&(e.getPropertyValue("max-height")||e.getPropertyValue("min-height"))&&(this.containerObserver=new ResizeObserver(i=>{if(!t.browserMobile||t.browserMobile&&(!t.modules.edit||t.modules.edit&&!t.modules.edit.currentCell)){var s=Math.floor(i[0].contentRect.height),n=Math.floor(i[0].contentRect.width);(this.containerHeight!=s||this.containerWidth!=n)&&(this.containerHeight=s,this.containerWidth=n,this.tableHeight=t.element.clientHeight,this.tableWidth=t.element.clientWidth),this.redrawTable()}}),this.containerObserver.observe(this.table.element.parentNode)),this.subscribe("table-resize",this.tableResized.bind(this))):(this.binding=function(){(!t.browserMobile||t.browserMobile&&(!t.modules.edit||t.modules.edit&&!t.modules.edit.currentCell))&&(t.columnManager.rerenderColumns(!0),t.redraw())},window.addEventListener("resize",this.binding)),this.subscribe("table-destroy",this.clearBindings.bind(this))}}initializeVisibilityObserver(){this.visibilityObserver=new IntersectionObserver(t=>{this.visible=t[0].isIntersecting,this.initialized?this.visible&&(this.redrawTable(this.initialRedraw),this.initialRedraw=!1):(this.initialized=!0,this.initialRedraw=!this.visible)}),this.visibilityObserver.observe(this.table.element)}redrawTable(t){this.initialized&&this.visible&&(this.table.columnManager.rerenderColumns(!0),this.table.redraw(t))}tableResized(){this.table.rowManager.redraw()}clearBindings(){this.binding&&window.removeEventListener("resize",this.binding),this.resizeObserver&&this.resizeObserver.unobserve(this.table.element),this.visibilityObserver&&this.visibilityObserver.unobserve(this.table.element),this.containerObserver&&this.containerObserver.unobserve(this.table.element.parentNode)}}Ie.moduleName="resizeTable";class Ne extends M{constructor(t){super(t),this.columns=[],this.hiddenColumns=[],this.mode="",this.index=0,this.collapseFormatter=[],this.collapseStartOpen=!0,this.collapseHandleColumn=!1,this.registerTableOption("responsiveLayout",!1),this.registerTableOption("responsiveLayoutCollapseStartOpen",!0),this.registerTableOption("responsiveLayoutCollapseUseFormatters",!0),this.registerTableOption("responsiveLayoutCollapseFormatter",!1),this.registerColumnOption("responsive")}initialize(){this.table.options.responsiveLayout&&(this.subscribe("column-layout",this.initializeColumn.bind(this)),this.subscribe("column-show",this.updateColumnVisibility.bind(this)),this.subscribe("column-hide",this.updateColumnVisibility.bind(this)),this.subscribe("columns-loaded",this.initializeResponsivity.bind(this)),this.subscribe("column-moved",this.initializeResponsivity.bind(this)),this.subscribe("column-add",this.initializeResponsivity.bind(this)),this.subscribe("column-delete",this.initializeResponsivity.bind(this)),this.subscribe("table-redrawing",this.tableRedraw.bind(this)),this.table.options.responsiveLayout==="collapse"&&(this.subscribe("row-data-changed",this.generateCollapsedRowContent.bind(this)),this.subscribe("row-init",this.initializeRow.bind(this)),this.subscribe("row-layout",this.layoutRow.bind(this))))}tableRedraw(t){["fitColumns","fitDataStretch"].indexOf(this.layoutMode())===-1&&(t||this.update())}initializeResponsivity(){var t=[];this.mode=this.table.options.responsiveLayout,this.collapseFormatter=this.table.options.responsiveLayoutCollapseFormatter||this.formatCollapsedData,this.collapseStartOpen=this.table.options.responsiveLayoutCollapseStartOpen,this.hiddenColumns=[],this.table.columnManager.columnsByIndex.forEach((e,i)=>{e.modules.responsive&&e.modules.responsive.order&&e.modules.responsive.visible&&(e.modules.responsive.index=i,t.push(e),!e.visible&&this.mode==="collapse"&&this.hiddenColumns.push(e))}),t=t.reverse(),t=t.sort((e,i)=>{var s=i.modules.responsive.order-e.modules.responsive.order;return s||i.modules.responsive.index-e.modules.responsive.index}),this.columns=t,this.mode==="collapse"&&this.generateCollapsedContent();for(let e of this.table.columnManager.columnsByIndex)if(e.definition.formatter=="responsiveCollapse"){this.collapseHandleColumn=e;break}this.collapseHandleColumn&&(this.hiddenColumns.length?this.collapseHandleColumn.show():this.collapseHandleColumn.hide())}initializeColumn(t){var e=t.getDefinition();t.modules.responsive={order:typeof e.responsive>"u"?1:e.responsive,visible:e.visible!==!1}}initializeRow(t){var e;t.type!=="calc"&&(e=document.createElement("div"),e.classList.add("tabulator-responsive-collapse"),t.modules.responsiveLayout={element:e,open:this.collapseStartOpen},this.collapseStartOpen||(e.style.display="none"))}layoutRow(t){var e=t.getElement();t.modules.responsiveLayout&&(e.appendChild(t.modules.responsiveLayout.element),this.generateCollapsedRowContent(t))}updateColumnVisibility(t,e){!e&&t.modules.responsive&&(t.modules.responsive.visible=t.visible,this.initializeResponsivity())}hideColumn(t){var e=this.hiddenColumns.length;t.hide(!1,!0),this.mode==="collapse"&&(this.hiddenColumns.unshift(t),this.generateCollapsedContent(),this.collapseHandleColumn&&!e&&this.collapseHandleColumn.show())}showColumn(t){var e;t.show(!1,!0),t.setWidth(t.getWidth()),this.mode==="collapse"&&(e=this.hiddenColumns.indexOf(t),e>-1&&this.hiddenColumns.splice(e,1),this.generateCollapsedContent(),this.collapseHandleColumn&&!this.hiddenColumns.length&&this.collapseHandleColumn.hide())}update(){for(var t=!0;t;){let e=this.table.modules.layout.getMode()=="fitColumns"?this.table.columnManager.getFlexBaseWidth():this.table.columnManager.getWidth(),i=(this.table.options.headerVisible?this.table.columnManager.element.clientWidth:this.table.element.clientWidth)-e;if(i<0){let s=this.columns[this.index];s?(this.hideColumn(s),this.index++):t=!1}else{let s=this.columns[this.index-1];s&&i>0&&i>=s.getWidth()?(this.showColumn(s),this.index--):t=!1}this.table.rowManager.activeRowsCount||this.table.rowManager.renderEmptyScroll()}}generateCollapsedContent(){var t=this.table.rowManager.getDisplayRows();t.forEach(e=>{this.generateCollapsedRowContent(e)})}generateCollapsedRowContent(t){var e,i;if(t.modules.responsiveLayout){for(e=t.modules.responsiveLayout.element;e.firstChild;)e.removeChild(e.firstChild);i=this.collapseFormatter(this.generateCollapsedRowData(t)),i&&e.appendChild(i)}}generateCollapsedRowData(t){var e=t.getData(),i=[],s;return this.hiddenColumns.forEach(n=>{var o=n.getFieldValue(e);if(n.definition.title&&n.field)if(n.modules.format&&this.table.options.responsiveLayoutCollapseUseFormatters){let r=function(l){l()};s={value:!1,data:{},getValue:function(){return o},getData:function(){return e},getType:function(){return"cell"},getElement:function(){return document.createElement("div")},getRow:function(){return t.getComponent()},getColumn:function(){return n.getComponent()},getTable:()=>this.table},i.push({field:n.field,title:n.definition.title,value:n.modules.format.formatter.call(this.table.modules.format,s,n.modules.format.params,r)})}else i.push({field:n.field,title:n.definition.title,value:o})}),i}formatCollapsedData(t){var e=document.createElement("table");return t.forEach(function(i){var s=document.createElement("tr"),n=document.createElement("td"),o=document.createElement("td"),r,l=document.createElement("strong");n.appendChild(l),this.langBind("columns|"+i.field,function(d){l.innerHTML=d||i.title}),i.value instanceof Node?(r=document.createElement("div"),r.appendChild(i.value),o.appendChild(r)):o.innerHTML=i.value,s.appendChild(n),s.appendChild(o),e.appendChild(s)},this),Object.keys(t).length?e:""}}Ne.moduleName="responsiveLayout";class We extends M{constructor(t){super(t),this.selecting=!1,this.lastClickedRow=!1,this.selectPrev=[],this.selectedRows=[],this.headerCheckboxElement=null,this.registerTableOption("selectableRows","highlight"),this.registerTableOption("selectableRowsRangeMode","drag"),this.registerTableOption("selectableRowsRollingSelection",!0),this.registerTableOption("selectableRowsPersistence",!0),this.registerTableOption("selectableRowsCheck",function(e,i){return!0}),this.registerTableFunction("selectRow",this.selectRows.bind(this)),this.registerTableFunction("deselectRow",this.deselectRows.bind(this)),this.registerTableFunction("toggleSelectRow",this.toggleRow.bind(this)),this.registerTableFunction("getSelectedRows",this.getSelectedRows.bind(this)),this.registerTableFunction("getSelectedData",this.getSelectedData.bind(this)),this.registerComponentFunction("row","select",this.selectRows.bind(this)),this.registerComponentFunction("row","deselect",this.deselectRows.bind(this)),this.registerComponentFunction("row","toggleSelect",this.toggleRow.bind(this)),this.registerComponentFunction("row","isSelected",this.isRowSelected.bind(this))}initialize(){this.deprecatedOptionsCheck(),this.table.options.selectableRows==="highlight"&&this.table.options.selectableRange&&(this.table.options.selectableRows=!1),this.table.options.selectableRows!==!1&&(this.subscribe("row-init",this.initializeRow.bind(this)),this.subscribe("row-deleting",this.rowDeleted.bind(this)),this.subscribe("rows-wipe",this.clearSelectionData.bind(this)),this.subscribe("rows-retrieve",this.rowRetrieve.bind(this)),this.table.options.selectableRows&&!this.table.options.selectableRowsPersistence&&this.subscribe("data-refreshing",this.deselectRows.bind(this)))}deprecatedOptionsCheck(){this.deprecationCheck("selectable","selectableRows",!0),this.deprecationCheck("selectableRollingSelection","selectableRowsRollingSelection",!0),this.deprecationCheck("selectableRangeMode","selectableRowsRangeMode",!0),this.deprecationCheck("selectablePersistence","selectableRowsPersistence",!0),this.deprecationCheck("selectableCheck","selectableRowsCheck",!0)}rowRetrieve(t,e){return t==="selected"?this.selectedRows:e}rowDeleted(t){this._deselectRow(t,!0)}clearSelectionData(t){var e=this.selectedRows.length;this.selecting=!1,this.lastClickedRow=!1,this.selectPrev=[],this.selectedRows=[],e&&t!==!0&&this._rowSelectionChanged()}initializeRow(t){var e=this,i=e.checkRowSelectability(t),s=t.getElement(),n=function(){setTimeout(function(){e.selecting=!1},50),document.body.removeEventListener("mouseup",n)};t.modules.select={selected:!1},s.classList.toggle("tabulator-selectable",i),s.classList.toggle("tabulator-unselectable",!i),e.checkRowSelectability(t)&&e.table.options.selectableRows&&e.table.options.selectableRows!="highlight"&&(e.table.options.selectableRowsRangeMode==="click"?s.addEventListener("click",this.handleComplexRowClick.bind(this,t)):(s.addEventListener("click",function(o){(!e.table.modExists("edit")||!e.table.modules.edit.getCurrentCell())&&e.table._clearSelection(),e.selecting||e.toggleRow(t)}),s.addEventListener("mousedown",function(o){if(o.shiftKey)return e.table._clearSelection(),e.selecting=!0,e.selectPrev=[],document.body.addEventListener("mouseup",n),document.body.addEventListener("keyup",n),e.toggleRow(t),!1}),s.addEventListener("mouseenter",function(o){e.selecting&&(e.table._clearSelection(),e.toggleRow(t),e.selectPrev[1]==t&&e.toggleRow(e.selectPrev[0]))}),s.addEventListener("mouseout",function(o){e.selecting&&(e.table._clearSelection(),e.selectPrev.unshift(t))})))}handleComplexRowClick(t,e){if(e.shiftKey){this.table._clearSelection(),this.lastClickedRow=this.lastClickedRow||t;var i=this.table.rowManager.getDisplayRowIndex(this.lastClickedRow),s=this.table.rowManager.getDisplayRowIndex(t),n=i<=s?i:s,o=i>=s?i:s,r=this.table.rowManager.getDisplayRows().slice(0),l=r.splice(n,o-n+1);e.ctrlKey||e.metaKey?(l.forEach(d=>{d!==this.lastClickedRow&&(this.table.options.selectableRows!==!0&&!this.isRowSelected(t)?this.selectedRows.length<this.table.options.selectableRows&&this.toggleRow(d):this.toggleRow(d))}),this.lastClickedRow=t):(this.deselectRows(void 0,!0),this.table.options.selectableRows!==!0&&l.length>this.table.options.selectableRows&&(l=l.slice(0,this.table.options.selectableRows)),this.selectRows(l)),this.table._clearSelection()}else e.ctrlKey||e.metaKey?(this.toggleRow(t),this.lastClickedRow=t):(this.deselectRows(void 0,!0),this.selectRows(t),this.lastClickedRow=t)}checkRowSelectability(t){return t&&t.type==="row"?this.table.options.selectableRowsCheck.call(this.table,t.getComponent()):!1}toggleRow(t){this.checkRowSelectability(t)&&(t.modules.select&&t.modules.select.selected?this._deselectRow(t):this._selectRow(t))}selectRows(t){var e=[],i,s;switch(typeof t){case"undefined":i=this.table.rowManager.rows;break;case"number":i=this.table.rowManager.findRow(t);break;case"string":i=this.table.rowManager.findRow(t),i||(i=this.table.rowManager.getRows(t));break;default:i=t;break}Array.isArray(i)?i.length&&(i.forEach(n=>{s=this._selectRow(n,!0,!0),s&&e.push(s)}),this._rowSelectionChanged(!1,e)):i&&this._selectRow(i,!1,!0)}_selectRow(t,e,i){if(!isNaN(this.table.options.selectableRows)&&this.table.options.selectableRows!==!0&&!i&&this.selectedRows.length>=this.table.options.selectableRows)if(this.table.options.selectableRowsRollingSelection)this._deselectRow(this.selectedRows[0]);else return!1;var s=this.table.rowManager.findRow(t);if(s){if(this.selectedRows.indexOf(s)==-1)return s.getElement().classList.add("tabulator-selected"),s.modules.select||(s.modules.select={}),s.modules.select.selected=!0,s.modules.select.checkboxEl&&(s.modules.select.checkboxEl.checked=!0),this.selectedRows.push(s),this.table.options.dataTreeSelectPropagate&&this.childRowSelection(s,!0),this.dispatchExternal("rowSelected",s.getComponent()),this._rowSelectionChanged(e,s),s}else e||console.warn("Selection Error - No such row found, ignoring selection:"+t)}isRowSelected(t){return this.selectedRows.indexOf(t)!==-1}deselectRows(t,e){var i=[],s,n;switch(typeof t){case"undefined":s=Object.assign([],this.selectedRows);break;case"number":s=this.table.rowManager.findRow(t);break;case"string":s=this.table.rowManager.findRow(t),s||(s=this.table.rowManager.getRows(t));break;default:s=t;break}Array.isArray(s)?s.length&&(s.forEach(o=>{n=this._deselectRow(o,!0,!0),n&&i.push(n)}),this._rowSelectionChanged(e,[],i)):s&&this._deselectRow(s,e,!0)}_deselectRow(t,e){var i=this,s=i.table.rowManager.findRow(t),n,o;if(s){if(n=i.selectedRows.findIndex(function(r){return r==s}),n>-1)return o=s.getElement(),o&&o.classList.remove("tabulator-selected"),s.modules.select||(s.modules.select={}),s.modules.select.selected=!1,s.modules.select.checkboxEl&&(s.modules.select.checkboxEl.checked=!1),i.selectedRows.splice(n,1),this.table.options.dataTreeSelectPropagate&&this.childRowSelection(s,!1),this.dispatchExternal("rowDeselected",s.getComponent()),i._rowSelectionChanged(e,void 0,s),s}else e||console.warn("Deselection Error - No such row found, ignoring selection:"+t)}getSelectedData(){var t=[];return this.selectedRows.forEach(function(e){t.push(e.getData())}),t}getSelectedRows(){var t=[];return this.selectedRows.forEach(function(e){t.push(e.getComponent())}),t}_rowSelectionChanged(t,e=[],i=[]){this.headerCheckboxElement&&(this.selectedRows.length===0?(this.headerCheckboxElement.checked=!1,this.headerCheckboxElement.indeterminate=!1):this.table.rowManager.rows.length===this.selectedRows.length?(this.headerCheckboxElement.checked=!0,this.headerCheckboxElement.indeterminate=!1):(this.headerCheckboxElement.indeterminate=!0,this.headerCheckboxElement.checked=!1)),t||(Array.isArray(e)||(e=[e]),e=e.map(s=>s.getComponent()),Array.isArray(i)||(i=[i]),i=i.map(s=>s.getComponent()),this.dispatchExternal("rowSelectionChanged",this.getSelectedData(),this.getSelectedRows(),e,i))}registerRowSelectCheckbox(t,e){t._row.modules.select||(t._row.modules.select={}),t._row.modules.select.checkboxEl=e}registerHeaderSelectCheckbox(t){this.headerCheckboxElement=t}childRowSelection(t,e){var i=this.table.modules.dataTree.getChildren(t,!0);if(e)for(let s of i)this._selectRow(s,!0);else for(let s of i)this._deselectRow(s,!0)}}We.moduleName="selectRow";function V8(h,t,e,i,s,n,o){var r=o.alignEmptyValues,l=o.decimalSeparator,d=o.thousandSeparator,c=0;if(h=String(h),t=String(t),d&&(h=h.split(d).join(""),t=t.split(d).join("")),l&&(h=h.split(l).join("."),t=t.split(l).join(".")),h=parseFloat(h),t=parseFloat(t),isNaN(h))c=isNaN(t)?0:-1;else if(isNaN(t))c=1;else return h-t;return(r==="top"&&n==="desc"||r==="bottom"&&n==="asc")&&(c*=-1),c}function A8(h,t,e,i,s,n,o){var r=o.alignEmptyValues,l=0,d;if(!h)l=t?-1:0;else if(!t)l=1;else{switch(typeof o.locale){case"boolean":o.locale&&(d=this.langLocale());break;case"string":d=o.locale;break}return String(h).toLowerCase().localeCompare(String(t).toLowerCase(),d)}return(r==="top"&&n==="desc"||r==="bottom"&&n==="asc")&&(l*=-1),l}function pt(h,t,e,i,s,n,o){var r=window.DateTime||luxon.DateTime,l=o.format||"dd/MM/yyyy HH:mm:ss",d=o.alignEmptyValues,c=0;if(typeof r<"u"){if(r.isDateTime(h)||(l==="iso"?h=r.fromISO(String(h)):h=r.fromFormat(String(h),l)),r.isDateTime(t)||(l==="iso"?t=r.fromISO(String(t)):t=r.fromFormat(String(t),l)),!h.isValid)c=t.isValid?-1:0;else if(!t.isValid)c=1;else return h-t;return(d==="top"&&n==="desc"||d==="bottom"&&n==="asc")&&(c*=-1),c}else console.error("Sort Error - 'datetime' sorter is dependant on luxon.js")}function D8(h,t,e,i,s,n,o){return o.format||(o.format="dd/MM/yyyy"),pt.call(this,h,t,e,i,s,n,o)}function z8(h,t,e,i,s,n,o){return o.format||(o.format="HH:mm"),pt.call(this,h,t,e,i,s,n,o)}function F8(h,t,e,i,s,n,o){var r=h===!0||h==="true"||h==="True"||h===1?1:0,l=t===!0||t==="true"||t==="True"||t===1?1:0;return r-l}function P8(h,t,e,i,s,n,o){var r=o.type||"length",l=o.alignEmptyValues,d=0;function c(p){var u;switch(r){case"length":u=p.length;break;case"sum":u=p.reduce(function(g,v){return g+v});break;case"max":u=Math.max.apply(null,p);break;case"min":u=Math.min.apply(null,p);break;case"avg":u=p.reduce(function(g,v){return g+v})/p.length;break}return u}if(!Array.isArray(h))d=Array.isArray(t)?-1:0;else if(!Array.isArray(t))d=1;else return c(t)-c(h);return(l==="top"&&n==="desc"||l==="bottom"&&n==="asc")&&(d*=-1),d}function O8(h,t,e,i,s,n,o){var r=typeof h>"u"?0:1,l=typeof t>"u"?0:1;return r-l}function B8(h,t,e,i,s,n,o){var r,l,d,c,p=0,u,g=/(\d+)|(\D+)/g,v=/\d/,f=o.alignEmptyValues,b=0;if(!h&&h!==0)b=!t&&t!==0?0:-1;else if(!t&&t!==0)b=1;else{if(isFinite(h)&&isFinite(t))return h-t;if(r=String(h).toLowerCase(),l=String(t).toLowerCase(),r===l)return 0;if(!(v.test(r)&&v.test(l)))return r>l?1:-1;for(r=r.match(g),l=l.match(g),u=r.length>l.length?l.length:r.length;p<u;)if(d=r[p],c=l[p++],d!==c)return isFinite(d)&&isFinite(c)?(d.charAt(0)==="0"&&(d="."+d),c.charAt(0)==="0"&&(c="."+c),d-c):d>c?1:-1;return r.length>l.length}return(f==="top"&&n==="desc"||f==="bottom"&&n==="asc")&&(b*=-1),b}var _8={number:V8,string:A8,date:D8,time:z8,datetime:pt,boolean:F8,array:P8,exists:O8,alphanum:B8};class B extends M{constructor(t){super(t),this.sortList=[],this.changed=!1,this.registerTableOption("sortMode","local"),this.registerTableOption("initialSort",!1),this.registerTableOption("columnHeaderSortMulti",!0),this.registerTableOption("sortOrderReverse",!1),this.registerTableOption("headerSortElement","<div class='tabulator-arrow'></div>"),this.registerTableOption("headerSortClickElement","header"),this.registerColumnOption("sorter"),this.registerColumnOption("sorterParams"),this.registerColumnOption("headerSort",!0),this.registerColumnOption("headerSortStartingDir"),this.registerColumnOption("headerSortTristate")}initialize(){this.subscribe("column-layout",this.initializeColumn.bind(this)),this.subscribe("table-built",this.tableBuilt.bind(this)),this.registerDataHandler(this.sort.bind(this),20),this.registerTableFunction("setSort",this.userSetSort.bind(this)),this.registerTableFunction("getSorters",this.getSort.bind(this)),this.registerTableFunction("clearSort",this.clearSort.bind(this)),this.table.options.sortMode==="remote"&&this.subscribe("data-params",this.remoteSortParams.bind(this))}tableBuilt(){this.table.options.initialSort&&this.setSort(this.table.options.initialSort)}remoteSortParams(t,e,i,s){var n=this.getSort();return n.forEach(o=>{delete o.column}),s.sort=n,s}userSetSort(t,e){this.setSort(t,e),this.refreshSort()}clearSort(){this.clear(),this.refreshSort()}initializeColumn(t){var e=!1,i,s;switch(typeof t.definition.sorter){case"string":B.sorters[t.definition.sorter]?e=B.sorters[t.definition.sorter]:console.warn("Sort Error - No such sorter found: ",t.definition.sorter);break;case"function":e=t.definition.sorter;break}if(t.modules.sort={sorter:e,dir:"none",params:t.definition.sorterParams||{},startingDir:t.definition.headerSortStartingDir||"asc",tristate:t.definition.headerSortTristate},t.definition.headerSort!==!1){switch(i=t.getElement(),i.classList.add("tabulator-sortable"),s=document.createElement("div"),s.classList.add("tabulator-col-sorter"),this.table.options.headerSortClickElement){case"icon":s.classList.add("tabulator-col-sorter-element");break;case"header":i.classList.add("tabulator-col-sorter-element");break;default:i.classList.add("tabulator-col-sorter-element");break}switch(this.table.options.headerSortElement){case"function":break;case"object":s.appendChild(this.table.options.headerSortElement);break;default:s.innerHTML=this.table.options.headerSortElement}t.titleHolderElement.appendChild(s),t.modules.sort.element=s,this.setColumnHeaderSortIcon(t,"none"),this.table.options.headerSortClickElement==="icon"&&s.addEventListener("mousedown",n=>{n.stopPropagation()}),(this.table.options.headerSortClickElement==="icon"?s:i).addEventListener("click",n=>{var o="",r=[],l=!1;if(t.modules.sort){if(t.modules.sort.tristate)t.modules.sort.dir=="none"?o=t.modules.sort.startingDir:t.modules.sort.dir==t.modules.sort.startingDir?o=t.modules.sort.dir=="asc"?"desc":"asc":o="none";else switch(t.modules.sort.dir){case"asc":o="desc";break;case"desc":o="asc";break;default:o=t.modules.sort.startingDir}this.table.options.columnHeaderSortMulti&&(n.shiftKey||n.ctrlKey)?(r=this.getSort(),l=r.findIndex(d=>d.field===t.getField()),l>-1?(r[l].dir=o,l=r.splice(l,1)[0],o!="none"&&r.push(l)):o!="none"&&r.push({column:t,dir:o}),this.setSort(r)):o=="none"?this.clear():this.setSort(t,o),this.refreshSort()}})}}refreshSort(){this.table.options.sortMode==="remote"?this.reloadData(null,!1,!1):this.refreshData(!0)}hasChanged(){var t=this.changed;return this.changed=!1,t}getSort(){var t=this,e=[];return t.sortList.forEach(function(i){i.column&&e.push({column:i.column.getComponent(),field:i.column.getField(),dir:i.dir})}),e}setSort(t,e){var i=this,s=[];Array.isArray(t)||(t=[{column:t,dir:e}]),t.forEach(function(n){var o;o=i.table.columnManager.findColumn(n.column),o?(n.column=o,s.push(n),i.changed=!0):console.warn("Sort Warning - Sort field does not exist and is being ignored: ",n.column)}),i.sortList=s,this.dispatch("sort-changed")}clear(){this.setSort([])}findSorter(t){var e=this.table.rowManager.activeRows[0],i="string",s,n;if(e&&(e=e.getData(),s=t.getField(),s))switch(n=t.getFieldValue(e),typeof n){case"undefined":i="string";break;case"boolean":i="boolean";break;default:!isNaN(n)&&n!==""?i="number":n.match(/((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+$/i)&&(i="alphanum");break}return B.sorters[i]}sort(t){var e=this,i=this.table.options.sortOrderReverse?e.sortList.slice().reverse():e.sortList,s=[],n=[];return this.subscribedExternal("dataSorting")&&this.dispatchExternal("dataSorting",e.getSort()),e.clearColumnHeaders(),this.table.options.sortMode!=="remote"?(i.forEach(function(o,r){var l;o.column&&(l=o.column.modules.sort,l&&(l.sorter||(l.sorter=e.findSorter(o.column)),o.params=typeof l.params=="function"?l.params(o.column.getComponent(),o.dir):l.params,s.push(o)),e.setColumnHeader(o.column,o.dir))}),s.length&&e._sortItems(t,s)):i.forEach(function(o,r){e.setColumnHeader(o.column,o.dir)}),this.subscribedExternal("dataSorted")&&(t.forEach(o=>{n.push(o.getComponent())}),this.dispatchExternal("dataSorted",e.getSort(),n)),t}clearColumnHeaders(){this.table.columnManager.getRealColumns().forEach(t=>{t.modules.sort&&(t.modules.sort.dir="none",t.getElement().setAttribute("aria-sort","none"),this.setColumnHeaderSortIcon(t,"none"))})}setColumnHeader(t,e){t.modules.sort.dir=e,t.getElement().setAttribute("aria-sort",e==="asc"?"ascending":"descending"),this.setColumnHeaderSortIcon(t,e)}setColumnHeaderSortIcon(t,e){var i=t.modules.sort.element,s;if(t.definition.headerSort&&typeof this.table.options.headerSortElement=="function"){for(;i.firstChild;)i.removeChild(i.firstChild);s=this.table.options.headerSortElement.call(this.table,t.getComponent(),e),typeof s=="object"?i.appendChild(s):i.innerHTML=s}}_sortItems(t,e){var i=e.length-1;t.sort((s,n)=>{for(var o,r=i;r>=0;r--){let l=e[r];if(o=this._sortRow(s,n,l.column,l.dir,l.params),o!==0)break}return o})}_sortRow(t,e,i,s,n){var o,r,l=s=="asc"?t:e,d=s=="asc"?e:t;return t=i.getFieldValue(l.getData()),e=i.getFieldValue(d.getData()),t=typeof t<"u"?t:"",e=typeof e<"u"?e:"",o=l.getComponent(),r=d.getComponent(),i.modules.sort.sorter.call(this,t,e,o,r,i.getComponent(),s,n)}}B.moduleName="sort";B.sorters=_8;class I8{constructor(t){return this._range=t,new Proxy(this,{get:function(e,i,s){return typeof e[i]<"u"?e[i]:e._range.table.componentFunctionBinder.handle("range",e._range,i)}})}getElement(){return this._range.element}getData(){return this._range.getData()}getCells(){return this._range.getCells(!0)}getStructuredCells(){return this._range.getStructuredCells()}getRows(){return this._range.getRows().map(t=>t.getComponent())}getColumns(){return this._range.getColumns().map(t=>t.getComponent())}getBounds(){return this._range.getBounds()}getTopEdge(){return this._range.top}getBottomEdge(){return this._range.bottom}getLeftEdge(){return this._range.left}getRightEdge(){return this._range.right}setBounds(t,e){this._range.destroyedGuard("setBounds")&&this._range.setBounds(t&&t._cell,e&&e._cell)}setStartBound(t){this._range.destroyedGuard("setStartBound")&&(this._range.setEndBound(t&&t._cell),this._range.rangeManager.layoutElement())}setEndBound(t){this._range.destroyedGuard("setEndBound")&&(this._range.setEndBound(t&&t._cell),this._range.rangeManager.layoutElement())}clearValues(){this._range.destroyedGuard("clearValues")&&this._range.clearValues()}remove(){this._range.destroyedGuard("remove")&&this._range.destroy(!0)}}class N8 extends k{constructor(t,e,i,s){super(t),this.rangeManager=e,this.element=null,this.initialized=!1,this.initializing={start:!1,end:!1},this.destroyed=!1,this.top=0,this.bottom=0,this.left=0,this.right=0,this.table=t,this.start={row:0,col:0},this.end={row:0,col:0},this.rangeManager.rowHeader&&(this.left=1,this.right=1,this.start.col=1,this.end.col=1),this.initElement(),setTimeout(()=>{this.initBounds(i,s)})}initElement(){this.element=document.createElement("div"),this.element.classList.add("tabulator-range")}initBounds(t,e){this._updateMinMax(),t&&this.setBounds(t,e||t)}setStart(t,e){(this.start.row!==t||this.start.col!==e)&&(this.start.row=t,this.start.col=e,this.initializing.start=!0,this._updateMinMax())}setEnd(t,e){(this.end.row!==t||this.end.col!==e)&&(this.end.row=t,this.end.col=e,this.initializing.end=!0,this._updateMinMax())}setBounds(t,e,i){t&&this.setStartBound(t),this.setEndBound(e||t),this.rangeManager.layoutElement(i)}setStartBound(t){var e,i;t.type==="column"?this.rangeManager.columnSelection&&this.setStart(0,t.getPosition()-1):(e=t.row.position-1,i=t.column.getPosition()-1,t.column===this.rangeManager.rowHeader?this.setStart(e,1):this.setStart(e,i))}setEndBound(t){var e=this._getTableRows().length,i,s,n;t.type==="column"?this.rangeManager.columnSelection&&(this.rangeManager.selecting==="column"?this.setEnd(e-1,t.getPosition()-1):this.rangeManager.selecting==="cell"&&this.setEnd(0,t.getPosition()-1)):(i=t.row.position-1,s=t.column.getPosition()-1,n=t.column===this.rangeManager.rowHeader,this.rangeManager.selecting==="row"?this.setEnd(i,this._getTableColumns().length-1):this.rangeManager.selecting!=="row"&&n?this.setEnd(i,0):this.rangeManager.selecting==="column"?this.setEnd(e-1,s):this.setEnd(i,s))}_updateMinMax(){this.top=Math.min(this.start.row,this.end.row),this.bottom=Math.max(this.start.row,this.end.row),this.left=Math.min(this.start.col,this.end.col),this.right=Math.max(this.start.col,this.end.col),this.initialized?this.dispatchExternal("rangeChanged",this.getComponent()):this.initializing.start&&this.initializing.end&&(this.initialized=!0,this.dispatchExternal("rangeAdded",this.getComponent()))}_getTableColumns(){return this.table.columnManager.getVisibleColumnsByIndex()}_getTableRows(){return this.table.rowManager.getDisplayRows()}layout(){var t=this.table.rowManager.renderer.vDomTop,e=this.table.rowManager.renderer.vDomBottom,i=this.table.columnManager.renderer.leftCol,s=this.table.columnManager.renderer.rightCol,n,o,r,l,d,c;t==null&&(t=0),e==null&&(e=1/0),i==null&&(i=0),s==null&&(s=1/0),this.overlaps(i,t,s,e)&&(n=Math.max(this.top,t),o=Math.min(this.bottom,e),r=Math.max(this.left,i),l=Math.min(this.right,s),d=this.rangeManager.getCell(n,r),c=this.rangeManager.getCell(o,l),this.element.classList.add("tabulator-range-active"),this.element.style.left=d.row.getElement().offsetLeft+d.getElement().offsetLeft+"px",this.element.style.top=d.row.getElement().offsetTop+"px",this.element.style.width=c.getElement().offsetLeft+c.getElement().offsetWidth-d.getElement().offsetLeft+"px",this.element.style.height=c.row.getElement().offsetTop+c.row.getElement().offsetHeight-d.row.getElement().offsetTop+"px")}atTopLeft(t){return t.row.position-1===this.top&&t.column.getPosition()-1===this.left}atBottomRight(t){return t.row.position-1===this.bottom&&t.column.getPosition()-1===this.right}occupies(t){return this.occupiesRow(t.row)&&this.occupiesColumn(t.column)}occupiesRow(t){return this.top<=t.position-1&&t.position-1<=this.bottom}occupiesColumn(t){return this.left<=t.getPosition()-1&&t.getPosition()-1<=this.right}overlaps(t,e,i,s){return!(this.left>i||t>this.right||this.top>s||e>this.bottom)}getData(){var t=[],e=this.getRows(),i=this.getColumns();return e.forEach(s=>{var n=s.getData(),o={};i.forEach(r=>{o[r.field]=n[r.field]}),t.push(o)}),t}getCells(t,e){var i=[],s=this.getRows(),n=this.getColumns();return t?i=s.map(o=>{var r=[];return o.getCells().forEach(l=>{n.includes(l.column)&&r.push(e?l.getComponent():l)}),r}):s.forEach(o=>{o.getCells().forEach(r=>{n.includes(r.column)&&i.push(e?r.getComponent():r)})}),i}getStructuredCells(){return this.getCells(!0,!0)}getRows(){return this._getTableRows().slice(this.top,this.bottom+1)}getColumns(){return this._getTableColumns().slice(this.left,this.right+1)}clearValues(){var t=this.getCells(),e=this.table.options.selectableRangeClearCellsValue;this.table.blockRedraw(),t.forEach(i=>{i.setValue(e)}),this.table.restoreRedraw()}getBounds(t){var e=this.getCells(!1,t),i={start:null,end:null};return e.length?(i.start=e[0],i.end=e[e.length-1]):console.warn("No bounds defined on range"),i}getComponent(){return this.component||(this.component=new I8(this)),this.component}destroy(t){this.destroyed=!0,this.element.remove(),t&&this.rangeManager.rangeRemoved(this),this.initialized&&this.dispatchExternal("rangeRemoved",this.getComponent())}destroyedGuard(t){return this.destroyed&&console.warn("You cannot call the "+t+" function on a destroyed range"),!this.destroyed}}class Ge extends M{constructor(t){super(t),this.selecting="cell",this.mousedown=!1,this.ranges=[],this.overlay=null,this.rowHeader=null,this.layoutChangeTimeout=null,this.columnSelection=!1,this.rowSelection=!1,this.maxRanges=0,this.activeRange=!1,this.blockKeydown=!1,this.keyDownEvent=this._handleKeyDown.bind(this),this.mouseUpEvent=this._handleMouseUp.bind(this),this.registerTableOption("selectableRange",!1),this.registerTableOption("selectableRangeColumns",!1),this.registerTableOption("selectableRangeRows",!1),this.registerTableOption("selectableRangeClearCells",!1),this.registerTableOption("selectableRangeClearCellsValue",void 0),this.registerTableFunction("getRangesData",this.getRangesData.bind(this)),this.registerTableFunction("getRanges",this.getRanges.bind(this)),this.registerTableFunction("addRange",this.addRangeFromComponent.bind(this)),this.registerComponentFunction("cell","getRanges",this.cellGetRanges.bind(this)),this.registerComponentFunction("row","getRanges",this.rowGetRanges.bind(this)),this.registerComponentFunction("column","getRanges",this.colGetRanges.bind(this))}initialize(){this.options("selectableRange")&&(this.options("selectableRows")?console.warn("SelectRange functionality cannot be used in conjunction with row selection"):(this.maxRanges=this.options("selectableRange"),this.initializeTable(),this.initializeWatchers()))}initializeTable(){this.overlay=document.createElement("div"),this.overlay.classList.add("tabulator-range-overlay"),this.rangeContainer=document.createElement("div"),this.rangeContainer.classList.add("tabulator-range-container"),this.activeRangeCellElement=document.createElement("div"),this.activeRangeCellElement.classList.add("tabulator-range-cell-active"),this.overlay.appendChild(this.rangeContainer),this.overlay.appendChild(this.activeRangeCellElement),this.table.rowManager.element.addEventListener("keydown",this.keyDownEvent),this.resetRanges(),this.table.rowManager.element.appendChild(this.overlay),this.table.columnManager.element.setAttribute("tabindex",0),this.table.element.classList.add("tabulator-ranges")}initializeWatchers(){this.columnSelection=this.options("selectableRangeColumns"),this.rowSelection=this.options("selectableRangeRows"),this.subscribe("column-init",this.initializeColumn.bind(this)),this.subscribe("column-mousedown",this.handleColumnMouseDown.bind(this)),this.subscribe("column-mousemove",this.handleColumnMouseMove.bind(this)),this.subscribe("column-resized",this.handleColumnResized.bind(this)),this.subscribe("column-width",this.layoutChange.bind(this)),this.subscribe("column-height",this.layoutChange.bind(this)),this.subscribe("column-resized",this.layoutChange.bind(this)),this.subscribe("columns-loaded",this.updateHeaderColumn.bind(this)),this.subscribe("cell-height",this.layoutChange.bind(this)),this.subscribe("cell-rendered",this.renderCell.bind(this)),this.subscribe("cell-mousedown",this.handleCellMouseDown.bind(this)),this.subscribe("cell-mousemove",this.handleCellMouseMove.bind(this)),this.subscribe("cell-click",this.handleCellClick.bind(this)),this.subscribe("cell-editing",this.handleEditingCell.bind(this)),this.subscribe("page-changed",this.redraw.bind(this)),this.subscribe("scroll-vertical",this.layoutChange.bind(this)),this.subscribe("scroll-horizontal",this.layoutChange.bind(this)),this.subscribe("data-destroy",this.tableDestroyed.bind(this)),this.subscribe("data-processed",this.resetRanges.bind(this)),this.subscribe("table-layout",this.layoutElement.bind(this)),this.subscribe("table-redraw",this.redraw.bind(this)),this.subscribe("table-destroy",this.tableDestroyed.bind(this)),this.subscribe("edit-editor-clear",this.finishEditingCell.bind(this)),this.subscribe("edit-blur",this.restoreFocus.bind(this)),this.subscribe("keybinding-nav-prev",this.keyNavigate.bind(this,"left")),this.subscribe("keybinding-nav-next",this.keyNavigate.bind(this,"right")),this.subscribe("keybinding-nav-left",this.keyNavigate.bind(this,"left")),this.subscribe("keybinding-nav-right",this.keyNavigate.bind(this,"right")),this.subscribe("keybinding-nav-up",this.keyNavigate.bind(this,"up")),this.subscribe("keybinding-nav-down",this.keyNavigate.bind(this,"down")),this.subscribe("keybinding-nav-range",this.keyNavigateRange.bind(this))}initializeColumn(t){this.columnSelection&&t.definition.headerSort&&this.options("headerSortClickElement")!=="icon"&&console.warn("Using column headerSort with selectableRangeColumns option may result in unpredictable behavior. Consider using headerSortClickElement: 'icon'."),t.modules.edit}updateHeaderColumn(){this.rowSelection&&(this.rowHeader=this.table.columnManager.getVisibleColumnsByIndex()[0],this.rowHeader&&(this.rowHeader.definition.cssClass=this.rowHeader.definition.cssClass+" tabulator-range-row-header",this.rowHeader.definition.headerSort&&console.warn("Using column headerSort with selectableRangeRows option may result in unpredictable behavior"),this.rowHeader.definition.editor&&console.warn("Using column editor with selectableRangeRows option may result in unpredictable behavior")))}getRanges(){return this.ranges.map(t=>t.getComponent())}getRangesData(){return this.ranges.map(t=>t.getData())}addRangeFromComponent(t,e){return t=t?t._cell:null,e=e?e._cell:null,this.addRange(t,e)}cellGetRanges(t){var e=[];return t.column===this.rowHeader?e=this.ranges.filter(i=>i.occupiesRow(t.row)):e=this.ranges.filter(i=>i.occupies(t)),e.map(i=>i.getComponent())}rowGetRanges(t){var e=this.ranges.filter(i=>i.occupiesRow(t));return e.map(i=>i.getComponent())}colGetRanges(t){var e=this.ranges.filter(i=>i.occupiesColumn(t));return e.map(i=>i.getComponent())}_handleMouseUp(t){this.mousedown=!1,document.removeEventListener("mouseup",this.mouseUpEvent)}_handleKeyDown(t){if(!this.blockKeydown&&(!this.table.modules.edit||this.table.modules.edit&&!this.table.modules.edit.currentCell)){if(t.key==="Enter"){if(this.table.modules.edit&&this.table.modules.edit.currentCell)return;this.table.modules.edit.editCell(this.getActiveCell()),t.preventDefault()}(t.key==="Backspace"||t.key==="Delete")&&this.options("selectableRangeClearCells")&&this.activeRange&&this.activeRange.clearValues()}}initializeFocus(t){var e;try{document.selection?(e=document.body.createTextRange(),e.moveToElementText(t.getElement()),e.select()):window.getSelection&&(e=document.createRange(),e.selectNode(t.getElement()),window.getSelection().removeAllRanges(),window.getSelection().addRange(e))}catch{}}restoreFocus(t){return this.table.rowManager.element.focus(),!0}handleColumnResized(t){var e;this.selecting!=="column"&&this.selecting!=="all"||(e=this.ranges.some(i=>i.occupiesColumn(t)),e&&this.ranges.forEach(i=>{var s=i.getColumns(!0);s.forEach(n=>{n!==t&&n.setWidth(t.width)})}))}handleColumnMouseDown(t,e){t.button===2&&(this.selecting==="column"||this.selecting==="all")&&this.activeRange.occupiesColumn(e)||(this.mousedown=!0,document.addEventListener("mouseup",this.mouseUpEvent),this.newSelection(t,e))}handleColumnMouseMove(t,e){e===this.rowHeader||!this.mousedown||this.selecting==="all"||this.activeRange.setBounds(!1,e,!0)}renderCell(t){var e=t.getElement(),i=this.ranges.findIndex(s=>s.occupies(t));e.classList.toggle("tabulator-range-selected",i!==-1),e.classList.toggle("tabulator-range-only-cell-selected",this.ranges.length===1&&this.ranges[0].atTopLeft(t)&&this.ranges[0].atBottomRight(t)),e.dataset.range=i}handleCellMouseDown(t,e){t.button===2&&(this.activeRange.occupies(e)||(this.selecting==="row"||this.selecting==="all")&&this.activeRange.occupiesRow(e.row))||(this.mousedown=!0,document.addEventListener("mouseup",this.mouseUpEvent),this.newSelection(t,e))}handleCellMouseMove(t,e){!this.mousedown||this.selecting==="all"||this.activeRange.setBounds(!1,e,!0)}handleCellClick(t,e){this.initializeFocus(e)}handleEditingCell(t){this.activeRange&&this.activeRange.setBounds(t)}finishEditingCell(){this.blockKeydown=!0,this.table.rowManager.element.focus(),setTimeout(()=>{this.blockKeydown=!1},10)}keyNavigate(t,e){this.navigate(!1,!1,t)&&e.preventDefault()}keyNavigateRange(t,e,i,s){this.navigate(i,s,e)&&t.preventDefault()}navigate(t,e,i){var s=!1,n,o,r,l,d,c;if(this.table.modules.edit&&this.table.modules.edit.currentCell)return!1;if(this.ranges.length>1&&(this.ranges=this.ranges.filter(p=>p===this.activeRange?(p.setEnd(p.start.row,p.start.col),!0):(p.destroy(),!1))),n=this.activeRange,o=e?n.end:n.start,r=o.row,l=o.col,t)switch(i){case"left":l=this.findJumpCellLeft(n.start.row,o.col);break;case"right":l=this.findJumpCellRight(n.start.row,o.col);break;case"up":r=this.findJumpCellUp(o.row,n.start.col);break;case"down":r=this.findJumpCellDown(o.row,n.start.col);break}else{if(e&&(this.selecting==="row"&&(i==="left"||i==="right")||this.selecting==="column"&&(i==="up"||i==="down")))return;switch(i){case"left":l=Math.max(l-1,0);break;case"right":l=Math.min(l+1,this.getTableColumns().length-1);break;case"up":r=Math.max(r-1,0);break;case"down":r=Math.min(r+1,this.getTableRows().length-1);break}}if(s=l!==o.col||r!==o.row,e||n.setStart(r,l),n.setEnd(r,l),e||(this.selecting="cell"),s)return d=this.getRowByRangePos(n.end.row),c=this.getColumnByRangePos(n.end.col),(i==="left"||i==="right")&&c.getElement().parentNode===null?c.getComponent().scrollTo(void 0,!1):(i==="up"||i==="down")&&d.getElement().parentNode===null?d.getComponent().scrollTo(void 0,!1):this.autoScroll(n,d.getElement(),c.getElement()),this.layoutElement(),!0}rangeRemoved(t){this.ranges=this.ranges.filter(e=>e!==t),this.activeRange===t&&(this.ranges.length?this.activeRange=this.ranges[this.ranges.length-1]:this.addRange()),this.layoutElement()}findJumpCell(t,e,i,s){var n;e&&(t=t.reverse());for(let o of t){let r=o.getValue();if(i){if(n=o,r)break}else if(s){if(n=o,r)break}else if(r)n=o;else break}return n}findJumpCellLeft(t,e){var i=this.getRowByRangePos(t),s=i.cells.filter(c=>c.column.visible),n=!s[e].getValue(),o=s[e]?!s[e].getValue():!1,r=e,l=this.rowHeader?s.slice(1,e):s.slice(0,e),d=this.findJumpCell(l,!0,n,o);return d&&(r=d.column.getPosition()-1),r}findJumpCellRight(t,e){var i=this.getRowByRangePos(t),s=i.cells.filter(d=>d.column.visible),n=!s[e].getValue(),o=s[e+1]?!s[e+1].getValue():!1,r=e,l=this.findJumpCell(s.slice(e+1,s.length),!1,n,o);return l&&(r=l.column.getPosition()-1),r}findJumpCellUp(t,e){var i=this.getColumnByRangePos(e),s=i.cells.filter(d=>this.table.rowManager.activeRows.includes(d.row)),n=!s[t].getValue(),o=s[t-1]?!s[t-1].getValue():!1,r=t,l=this.findJumpCell(s.slice(0,r),!0,n,o);return l&&(r=l.row.position-1),r}findJumpCellDown(t,e){var i=this.getColumnByRangePos(e),s=i.cells.filter(d=>this.table.rowManager.activeRows.includes(d.row)),n=!s[t].getValue(),o=s[t+1]?!s[t+1].getValue():!1,r=t,l=this.findJumpCell(s.slice(r+1,s.length),!1,n,o);return l&&(r=l.row.position-1),r}newSelection(t,e){var i;if(e.type==="column"){if(!this.columnSelection)return;if(e===this.rowHeader){i=this.resetRanges(),this.selecting="all";var s,n=this.getCell(-1,-1);this.rowHeader?s=this.getCell(0,1):s=this.getCell(0,0),i.setBounds(s,n);return}else this.selecting="column"}else e.column===this.rowHeader?this.selecting="row":this.selecting="cell";t.shiftKey?this.activeRange.setBounds(!1,e):t.ctrlKey?this.addRange().setBounds(e):this.resetRanges().setBounds(e)}autoScroll(t,e,i){var s=this.table.rowManager.element,n,o,r,l,d;typeof e>"u"&&(e=this.getRowByRangePos(t.end.row).getElement()),typeof i>"u"&&(i=this.getColumnByRangePos(t.end.col).getElement()),this.rowHeader&&(n=this.rowHeader.getElement()),o={left:i.offsetLeft,right:i.offsetLeft+i.offsetWidth,top:e.offsetTop,bottom:e.offsetTop+e.offsetHeight},r={left:s.scrollLeft,right:Math.ceil(s.scrollLeft+s.clientWidth),top:s.scrollTop,bottom:s.scrollTop+s.offsetHeight-this.table.rowManager.scrollbarWidth},n&&(r.left+=n.offsetWidth),l=r.left<o.left&&o.left<r.right&&r.left<o.right&&o.right<r.right,d=r.top<o.top&&o.top<r.bottom&&r.top<o.bottom&&o.bottom<r.bottom,l||(o.left<r.left?(s.scrollLeft=o.left,n&&(s.scrollLeft-=n.offsetWidth)):o.right>r.right&&(s.scrollLeft=o.right-s.clientWidth)),d||(o.top<r.top?s.scrollTop=o.top:o.bottom>r.bottom&&(s.scrollTop=o.bottom-s.clientHeight))}layoutChange(){this.overlay.style.visibility="hidden",clearTimeout(this.layoutChangeTimeout),this.layoutChangeTimeout=setTimeout(this.layoutRanges.bind(this),200)}redraw(t){t&&(this.selecting="cell",this.resetRanges(),this.layoutElement())}layoutElement(t){var e;t?e=this.table.rowManager.getVisibleRows(!0):e=this.table.rowManager.getRows(),e.forEach(i=>{i.type==="row"&&(this.layoutRow(i),i.cells.forEach(s=>this.renderCell(s)))}),this.getTableColumns().forEach(i=>{this.layoutColumn(i)}),this.layoutRanges()}layoutRow(t){var e=t.getElement(),i=!1,s=this.ranges.some(n=>n.occupiesRow(t));this.selecting==="row"?i=s:this.selecting==="all"&&(i=!0),e.classList.toggle("tabulator-range-selected",i),e.classList.toggle("tabulator-range-highlight",s)}layoutColumn(t){var e=t.getElement(),i=!1,s=this.ranges.some(n=>n.occupiesColumn(t));this.selecting==="column"?i=s:this.selecting==="all"&&(i=!0),e.classList.toggle("tabulator-range-selected",i),e.classList.toggle("tabulator-range-highlight",s)}layoutRanges(){var t;this.table.initialized&&(t=this.getActiveCell(),t&&(this.activeRangeCellElement.style.left=t.row.getElement().offsetLeft+t.getElement().offsetLeft+"px",this.activeRangeCellElement.style.top=t.row.getElement().offsetTop+"px",this.activeRangeCellElement.style.width=t.getElement().offsetLeft+t.getElement().offsetWidth-t.getElement().offsetLeft+"px",this.activeRangeCellElement.style.height=t.row.getElement().offsetTop+t.row.getElement().offsetHeight-t.row.getElement().offsetTop+"px",this.ranges.forEach(e=>e.layout()),this.overlay.style.visibility="visible"))}getCell(t,e){var i;return e<0&&(e=this.getTableColumns().length+e,e<0)?null:(t<0&&(t=this.getTableRows().length+t),i=this.table.rowManager.getRowFromPosition(t+1),i?i.getCells(!1,!0).filter(s=>s.column.visible)[e]:null)}getActiveCell(){return this.getCell(this.activeRange.start.row,this.activeRange.start.col)}getRowByRangePos(t){return this.getTableRows()[t]}getColumnByRangePos(t){return this.getTableColumns()[t]}getTableRows(){return this.table.rowManager.getDisplayRows()}getTableColumns(){return this.table.columnManager.getVisibleColumnsByIndex()}addRange(t,e){var i;return this.maxRanges!==!0&&this.ranges.length>=this.maxRanges&&this.ranges.shift().destroy(),i=new N8(this.table,this,t,e),this.activeRange=i,this.ranges.push(i),this.rangeContainer.appendChild(i.element),i}resetRanges(){var t,e;return this.ranges.forEach(i=>i.destroy()),this.ranges=[],t=this.addRange(),this.table.rowManager.activeRows.length&&(e=this.table.rowManager.activeRows[0].cells[this.rowHeader?1:0],e&&(t.setBounds(e),this.initializeFocus(e))),t}tableDestroyed(){document.removeEventListener("mouseup",this.mouseUpEvent),this.table.rowManager.element.removeEventListener("keydown",this.keyDownEvent)}selectedRows(t){return t?this.activeRange.getRows().map(e=>e.getComponent()):this.activeRange.getRows()}selectedColumns(t){return t?this.activeRange.getColumns().map(e=>e.getComponent()):this.activeRange.getColumns()}}Ge.moduleName="selectRange";class Ze extends M{constructor(t){super(t),this.tooltipSubscriber=null,this.headerSubscriber=null,this.timeout=null,this.popupInstance=null,this.registerTableOption("tooltipGenerationMode",void 0),this.registerTableOption("tooltipDelay",300),this.registerColumnOption("tooltip"),this.registerColumnOption("headerTooltip")}initialize(){this.deprecatedOptionsCheck(),this.subscribe("column-init",this.initializeColumn.bind(this))}deprecatedOptionsCheck(){this.deprecationCheckMsg("tooltipGenerationMode","This option is no longer needed as tooltips are always generated on hover now")}initializeColumn(t){t.definition.headerTooltip&&!this.headerSubscriber&&(this.headerSubscriber=!0,this.subscribe("column-mousemove",this.mousemoveCheck.bind(this,"headerTooltip")),this.subscribe("column-mouseout",this.mouseoutCheck.bind(this,"headerTooltip"))),t.definition.tooltip&&!this.tooltipSubscriber&&(this.tooltipSubscriber=!0,this.subscribe("cell-mousemove",this.mousemoveCheck.bind(this,"tooltip")),this.subscribe("cell-mouseout",this.mouseoutCheck.bind(this,"tooltip")))}mousemoveCheck(t,e,i){var s=t==="tooltip"?i.column.definition.tooltip:i.definition.headerTooltip;s&&(this.clearPopup(),this.timeout=setTimeout(this.loadTooltip.bind(this,e,i,s),this.table.options.tooltipDelay))}mouseoutCheck(t,e,i){this.popupInstance||this.clearPopup()}clearPopup(t,e,i){clearTimeout(this.timeout),this.timeout=null,this.popupInstance&&this.popupInstance.hide()}loadTooltip(t,e,i){var s,n,o;function r(l){n=l}typeof i=="function"&&(i=i(t,e.getComponent(),r)),i instanceof HTMLElement?s=i:(s=document.createElement("div"),i===!0&&(e instanceof X?i=e.value:e.definition.field?this.langBind("columns|"+e.definition.field,l=>{s.innerHTML=i=l||e.definition.title}):i=e.definition.title),s.innerHTML=i),(i||i===0||i===!1)&&(s.classList.add("tabulator-tooltip"),s.addEventListener("mousemove",l=>l.preventDefault()),this.popupInstance=this.popup(s),typeof n=="function"&&this.popupInstance.renderCallback(n),o=this.popupInstance.containerEventCoords(t),this.popupInstance.show(o.x+15,o.y+15).hideOnBlur(()=>{this.dispatchExternal("TooltipClosed",e.getComponent()),this.popupInstance=null}),this.dispatchExternal("TooltipOpened",e.getComponent()))}}Ze.moduleName="tooltip";var W8={integer:function(h,t,e){return t===""||t===null||typeof t>"u"?!0:(t=Number(t),!isNaN(t)&&isFinite(t)&&Math.floor(t)===t)},float:function(h,t,e){return t===""||t===null||typeof t>"u"?!0:(t=Number(t),!isNaN(t)&&isFinite(t)&&t%1!==0)},numeric:function(h,t,e){return t===""||t===null||typeof t>"u"?!0:!isNaN(t)},string:function(h,t,e){return t===""||t===null||typeof t>"u"?!0:isNaN(t)},alphanumeric:function(h,t,e){if(t===""||t===null||typeof t>"u")return!0;var i=new RegExp(/^[a-z0-9]+$/i);return i.test(t)},max:function(h,t,e){return t===""||t===null||typeof t>"u"?!0:parseFloat(t)<=e},min:function(h,t,e){return t===""||t===null||typeof t>"u"?!0:parseFloat(t)>=e},starts:function(h,t,e){return t===""||t===null||typeof t>"u"?!0:String(t).toLowerCase().startsWith(String(e).toLowerCase())},ends:function(h,t,e){return t===""||t===null||typeof t>"u"?!0:String(t).toLowerCase().endsWith(String(e).toLowerCase())},minLength:function(h,t,e){return t===""||t===null||typeof t>"u"?!0:String(t).length>=e},maxLength:function(h,t,e){return t===""||t===null||typeof t>"u"?!0:String(t).length<=e},in:function(h,t,e){return t===""||t===null||typeof t>"u"?!0:(typeof e=="string"&&(e=e.split("|")),e.indexOf(t)>-1)},regex:function(h,t,e){if(t===""||t===null||typeof t>"u")return!0;var i=new RegExp(e);return i.test(t)},unique:function(h,t,e){if(t===""||t===null||typeof t>"u")return!0;var i=!0,s=h.getData(),n=h.getColumn()._getSelf();return this.table.rowManager.rows.forEach(function(o){var r=o.getData();r!==s&&t==n.getFieldValue(r)&&(i=!1)}),i},required:function(h,t,e){return t!==""&&t!==null&&typeof t<"u"}};class $ extends M{constructor(t){super(t),this.invalidCells=[],this.registerTableOption("validationMode","blocking"),this.registerColumnOption("validator"),this.registerTableFunction("getInvalidCells",this.getInvalidCells.bind(this)),this.registerTableFunction("clearCellValidation",this.userClearCellValidation.bind(this)),this.registerTableFunction("validate",this.userValidate.bind(this)),this.registerComponentFunction("cell","isValid",this.cellIsValid.bind(this)),this.registerComponentFunction("cell","clearValidation",this.clearValidation.bind(this)),this.registerComponentFunction("cell","validate",this.cellValidate.bind(this)),this.registerComponentFunction("column","validate",this.columnValidate.bind(this)),this.registerComponentFunction("row","validate",this.rowValidate.bind(this))}initialize(){this.subscribe("cell-delete",this.clearValidation.bind(this)),this.subscribe("column-layout",this.initializeColumnCheck.bind(this)),this.subscribe("edit-success",this.editValidate.bind(this)),this.subscribe("edit-editor-clear",this.editorClear.bind(this)),this.subscribe("edit-edited-clear",this.editedClear.bind(this))}editValidate(t,e,i){var s=this.table.options.validationMode!=="manual"?this.validate(t.column.modules.validate,t,e):!0;return s!==!0&&setTimeout(()=>{t.getElement().classList.add("tabulator-validation-fail"),this.dispatchExternal("validationFailed",t.getComponent(),e,s)}),s}editorClear(t,e){e&&t.column.modules.validate&&this.cellValidate(t),t.getElement().classList.remove("tabulator-validation-fail")}editedClear(t){t.modules.validate&&(t.modules.validate.invalid=!1)}cellIsValid(t){return t.modules.validate&&t.modules.validate.invalid||!0}cellValidate(t){return this.validate(t.column.modules.validate,t,t.getValue())}columnValidate(t){var e=[];return t.cells.forEach(i=>{this.cellValidate(i)!==!0&&e.push(i.getComponent())}),e.length?e:!0}rowValidate(t){var e=[];return t.cells.forEach(i=>{this.cellValidate(i)!==!0&&e.push(i.getComponent())}),e.length?e:!0}userClearCellValidation(t){t||(t=this.getInvalidCells()),Array.isArray(t)||(t=[t]),t.forEach(e=>{this.clearValidation(e._getSelf())})}userValidate(t){var e=[];return this.table.rowManager.rows.forEach(i=>{i=i.getComponent();var s=i.validate();s!==!0&&(e=e.concat(s))}),e.length?e:!0}initializeColumnCheck(t){typeof t.definition.validator<"u"&&this.initializeColumn(t)}initializeColumn(t){var e=this,i=[],s;t.definition.validator&&(Array.isArray(t.definition.validator)?t.definition.validator.forEach(n=>{s=e._extractValidator(n),s&&i.push(s)}):(s=this._extractValidator(t.definition.validator),s&&i.push(s)),t.modules.validate=i.length?i:!1)}_extractValidator(t){var e,i,s;switch(typeof t){case"string":return s=t.indexOf(":"),s>-1?(e=t.substring(0,s),i=t.substring(s+1)):e=t,this._buildValidator(e,i);case"function":return this._buildValidator(t);case"object":return this._buildValidator(t.type,t.parameters)}}_buildValidator(t,e){var i=typeof t=="function"?t:$.validators[t];return i?{type:typeof t=="function"?"function":t,func:i,params:e}:(console.warn("Validator Setup Error - No matching validator found:",t),!1)}validate(t,e,i){var s=this,n=[],o=this.invalidCells.indexOf(e);return t&&t.forEach(r=>{r.func.call(s,e.getComponent(),i,r.params)||n.push({type:r.type,parameters:r.params})}),e.modules.validate||(e.modules.validate={}),n.length?(e.modules.validate.invalid=n,this.table.options.validationMode!=="manual"&&e.getElement().classList.add("tabulator-validation-fail"),o==-1&&this.invalidCells.push(e)):(e.modules.validate.invalid=!1,e.getElement().classList.remove("tabulator-validation-fail"),o>-1&&this.invalidCells.splice(o,1)),n.length?n:!0}getInvalidCells(){var t=[];return this.invalidCells.forEach(e=>{t.push(e.getComponent())}),t}clearValidation(t){var e;t.modules.validate&&t.modules.validate.invalid&&(t.getElement().classList.remove("tabulator-validation-fail"),t.modules.validate.invalid=!1,e=this.invalidCells.indexOf(t),e>-1&&this.invalidCells.splice(e,1))}}$.moduleName="validate";$.validators=W8;var G8=Object.freeze({__proto__:null,AccessorModule:Z,AjaxModule:A,ClipboardModule:_,ColumnCalcsModule:P,DataTreeModule:He,DownloadModule:j,EditModule:J,ExportModule:Le,FilterModule:F,FormatModule:V,FrozenColumnsModule:ke,FrozenRowsModule:Te,GroupRowsModule:Se,HistoryModule:I,HtmlTableImportModule:Ve,ImportModule:K,InteractionModule:Ae,KeybindingsModule:O,MenuModule:De,MoveColumnsModule:ze,MoveRowsModule:it,MutatorModule:U,PageModule:Y,PersistenceModule:T,PopupModule:Fe,PrintModule:Pe,ReactiveDataModule:Oe,ResizeColumnsModule:Be,ResizeRowsModule:_e,ResizeTableModule:Ie,ResponsiveLayoutModule:Ne,SelectRowModule:We,SortModule:B,SelectRangeModule:Ge,TooltipModule:Ze,ValidateModule:$}),Z8={debugEventsExternal:!1,debugEventsInternal:!1,debugInvalidOptions:!0,debugInvalidComponentFuncs:!0,debugInitialization:!0,debugDeprecation:!0,height:!1,minHeight:!1,maxHeight:!1,columnHeaderVertAlign:"top",popupContainer:!1,columns:[],columnDefaults:{},data:!1,autoColumns:!1,autoColumnsDefinitions:!1,nestedFieldSeparator:".",footerElement:!1,index:"id",textDirection:"auto",addRowPos:"bottom",headerVisible:!0,renderVertical:"virtual",renderHorizontal:"basic",renderVerticalBuffer:0,scrollToRowPosition:"top",scrollToRowIfVisible:!0,scrollToColumnPosition:"left",scrollToColumnIfVisible:!0,rowFormatter:!1,rowFormatterPrint:null,rowFormatterClipboard:null,rowFormatterHtmlOutput:null,rowHeight:null,placeholder:!1,dataLoader:!0,dataLoaderLoading:!1,dataLoaderError:!1,dataLoaderErrorTimeout:3e3,dataSendParams:{},dataReceiveParams:{}};class je{constructor(t,e,i={}){this.table=t,this.msgType=e,this.registeredDefaults=Object.assign({},i)}register(t,e){this.registeredDefaults[t]=e}generate(t,e={}){var i=Object.assign({},this.registeredDefaults),s=this.table.options.debugInvalidOptions||e.debugInvalidOptions===!0;Object.assign(i,t);for(let n in e)i.hasOwnProperty(n)||(s&&console.warn("Invalid "+this.msgType+" option:",n),i[n]=e.key);for(let n in i)n in e?i[n]=e[n]:Array.isArray(i[n])?i[n]=Object.assign([],i[n]):typeof i[n]=="object"&&i[n]!==null?i[n]=Object.assign({},i[n]):typeof i[n]>"u"&&delete i[n];return i}}class st extends k{constructor(t){super(t),this.elementVertical=t.rowManager.element,this.elementHorizontal=t.columnManager.element,this.tableElement=t.rowManager.tableElement,this.verticalFillMode="fit"}initialize(){}clearRows(){}clearColumns(){}reinitializeColumnWidths(t){}renderRows(){}renderColumns(){}rerenderRows(t){t&&t()}rerenderColumns(t,e){}renderRowCells(t){}rerenderRowCells(t,e){}scrollColumns(t,e){}scrollRows(t,e){}resize(){}scrollToRow(t){}scrollToRowNearestTop(t){}visibleRows(t){return[]}rows(){return this.table.rowManager.getDisplayRows()}styleRow(t,e){var i=t.getElement();e%2?(i.classList.add("tabulator-row-even"),i.classList.remove("tabulator-row-odd")):(i.classList.add("tabulator-row-odd"),i.classList.remove("tabulator-row-even"))}clear(){this.clearRows(),this.clearColumns()}render(){this.renderRows(),this.renderColumns()}rerender(t){this.rerenderRows(),this.rerenderColumns()}scrollToRowPosition(t,e,i){var s=this.rows().indexOf(t),n=t.getElement(),o=0;return new Promise((r,l)=>{if(s>-1){if(typeof i>"u"&&(i=this.table.options.scrollToRowIfVisible),!i&&C.elVisible(n)&&(o=C.elOffset(n).top-C.elOffset(this.elementVertical).top,o>0&&o<this.elementVertical.clientHeight-n.offsetHeight))return r(),!1;switch(typeof e>"u"&&(e=this.table.options.scrollToRowPosition),e==="nearest"&&(e=this.scrollToRowNearestTop(t)?"top":"bottom"),this.scrollToRow(t),e){case"middle":case"center":this.elementVertical.scrollHeight-this.elementVertical.scrollTop==this.elementVertical.clientHeight?this.elementVertical.scrollTop=this.elementVertical.scrollTop+(n.offsetTop-this.elementVertical.scrollTop)-(this.elementVertical.scrollHeight-n.offsetTop)/2:this.elementVertical.scrollTop=this.elementVertical.scrollTop-this.elementVertical.clientHeight/2;break;case"bottom":this.elementVertical.scrollHeight-this.elementVertical.scrollTop==this.elementVertical.clientHeight?this.elementVertical.scrollTop=this.elementVertical.scrollTop-(this.elementVertical.scrollHeight-n.offsetTop)+n.offsetHeight:this.elementVertical.scrollTop=this.elementVertical.scrollTop-this.elementVertical.clientHeight+n.offsetHeight;break;case"top":this.elementVertical.scrollTop=n.offsetTop;break}r()}else console.warn("Scroll Error - Row not visible"),l("Scroll Error - Row not visible")})}}class j8 extends st{constructor(t){super(t)}renderRowCells(t,e){const i=document.createDocumentFragment();t.cells.forEach(s=>{i.appendChild(s.getElement())}),t.element.appendChild(i),e||t.cells.forEach(s=>{s.cellRendered()})}reinitializeColumnWidths(t){t.forEach(function(e){e.reinitializeWidth()})}}class U8 extends st{constructor(t){super(t),this.leftCol=0,this.rightCol=0,this.scrollLeft=0,this.vDomScrollPosLeft=0,this.vDomScrollPosRight=0,this.vDomPadLeft=0,this.vDomPadRight=0,this.fitDataColAvg=0,this.windowBuffer=200,this.visibleRows=null,this.initialized=!1,this.isFitData=!1,this.columns=[]}initialize(){this.compatibilityCheck(),this.layoutCheck(),this.vertScrollListen()}compatibilityCheck(){this.options("layout")=="fitDataTable"&&console.warn("Horizontal Virtual DOM is not compatible with fitDataTable layout mode"),this.options("responsiveLayout")&&console.warn("Horizontal Virtual DOM is not compatible with responsive columns"),this.options("rtl")&&console.warn("Horizontal Virtual DOM is not currently compatible with RTL text direction")}layoutCheck(){this.isFitData=this.options("layout").startsWith("fitData")}vertScrollListen(){this.subscribe("scroll-vertical",this.clearVisRowCache.bind(this)),this.subscribe("data-refreshed",this.clearVisRowCache.bind(this))}clearVisRowCache(){this.visibleRows=null}renderColumns(t,e){this.dataChange()}scrollColumns(t,e){this.scrollLeft!=t&&(this.scrollLeft=t,this.scroll(t-(this.vDomScrollPosLeft+this.windowBuffer)))}calcWindowBuffer(){var t=this.elementVertical.clientWidth;this.table.columnManager.columnsByIndex.forEach(e=>{if(e.visible){var i=e.getWidth();i>t&&(t=i)}}),this.windowBuffer=t*2}rerenderColumns(t,e){var i={cols:this.columns,leftCol:this.leftCol,rightCol:this.rightCol},s=0;t&&!this.initialized||(this.clear(),this.calcWindowBuffer(),this.scrollLeft=this.elementVertical.scrollLeft,this.vDomScrollPosLeft=this.scrollLeft-this.windowBuffer,this.vDomScrollPosRight=this.scrollLeft+this.elementVertical.clientWidth+this.windowBuffer,this.table.columnManager.columnsByIndex.forEach(n=>{var o={},r;n.visible&&(n.modules.frozen||(r=n.getWidth(),o.leftPos=s,o.rightPos=s+r,o.width=r,this.isFitData&&(o.fitDataCheck=n.modules.vdomHoz?n.modules.vdomHoz.fitDataCheck:!0),s+r>this.vDomScrollPosLeft&&s<this.vDomScrollPosRight?(this.leftCol==-1&&(this.leftCol=this.columns.length,this.vDomPadLeft=s),this.rightCol=this.columns.length):this.leftCol!==-1&&(this.vDomPadRight+=r),this.columns.push(n),n.modules.vdomHoz=o,s+=r))}),this.tableElement.style.paddingLeft=this.vDomPadLeft+"px",this.tableElement.style.paddingRight=this.vDomPadRight+"px",this.initialized=!0,e||(!t||this.reinitChanged(i))&&this.reinitializeRows(),this.elementVertical.scrollLeft=this.scrollLeft)}renderRowCells(t){if(this.initialized)this.initializeRow(t);else{const e=document.createDocumentFragment();t.cells.forEach(i=>{e.appendChild(i.getElement())}),t.element.appendChild(e),t.cells.forEach(i=>{i.cellRendered()})}}rerenderRowCells(t,e){this.reinitializeRow(t,e)}reinitializeColumnWidths(t){for(let e=this.leftCol;e<=this.rightCol;e++)this.columns[e].reinitializeWidth()}deinitialize(){this.initialized=!1}clear(){this.columns=[],this.leftCol=-1,this.rightCol=0,this.vDomScrollPosLeft=0,this.vDomScrollPosRight=0,this.vDomPadLeft=0,this.vDomPadRight=0}dataChange(){var t=!1,e,i;if(this.isFitData){if(this.table.columnManager.columnsByIndex.forEach(s=>{!s.definition.width&&s.visible&&(t=!0)}),t&&this.table.rowManager.getDisplayRows().length&&(this.vDomScrollPosRight=this.scrollLeft+this.elementVertical.clientWidth+this.windowBuffer,e=this.chain("rows-sample",[1],[],()=>this.table.rowManager.getDisplayRows())[0],e)){i=e.getElement(),e.generateCells(),this.tableElement.appendChild(i);for(let s=0;s<e.cells.length;s++){let n=e.cells[s];i.appendChild(n.getElement()),n.column.reinitializeWidth()}i.parentNode.removeChild(i),this.rerenderColumns(!1,!0)}}else this.options("layout")==="fitColumns"&&(this.layoutRefresh(),this.rerenderColumns(!1,!0))}reinitChanged(t){var e=!0;return t.cols.length!==this.columns.length||t.leftCol!==this.leftCol||t.rightCol!==this.rightCol?!0:(t.cols.forEach((i,s)=>{i!==this.columns[s]&&(e=!1)}),!e)}reinitializeRows(){var t=this.getVisibleRows(),e=this.table.rowManager.getRows().filter(i=>!t.includes(i));t.forEach(i=>{this.reinitializeRow(i,!0)}),e.forEach(i=>{i.deinitialize()})}getVisibleRows(){return this.visibleRows||(this.visibleRows=this.table.rowManager.getVisibleRows()),this.visibleRows}scroll(t){this.vDomScrollPosLeft+=t,this.vDomScrollPosRight+=t,Math.abs(t)>this.windowBuffer/2?this.rerenderColumns():t>0?(this.addColRight(),this.removeColLeft()):(this.addColLeft(),this.removeColRight())}colPositionAdjust(t,e,i){for(let s=t;s<e;s++){let n=this.columns[s];n.modules.vdomHoz.leftPos+=i,n.modules.vdomHoz.rightPos+=i}}addColRight(){for(var t=!1,e=!0;e;){let i=this.columns[this.rightCol+1];i&&i.modules.vdomHoz.leftPos<=this.vDomScrollPosRight?(t=!0,this.getVisibleRows().forEach(s=>{if(s.type!=="group"){var n=s.getCell(i);s.getElement().insertBefore(n.getElement(),s.getCell(this.columns[this.rightCol]).getElement().nextSibling),n.cellRendered()}}),this.fitDataColActualWidthCheck(i),this.rightCol++,this.getVisibleRows().forEach(s=>{s.type!=="group"&&(s.modules.vdomHoz.rightCol=this.rightCol)}),this.rightCol>=this.columns.length-1?this.vDomPadRight=0:this.vDomPadRight-=i.getWidth()):e=!1}t&&(this.tableElement.style.paddingRight=this.vDomPadRight+"px")}addColLeft(){for(var t=!1,e=!0;e;){let i=this.columns[this.leftCol-1];if(i)if(i.modules.vdomHoz.rightPos>=this.vDomScrollPosLeft){t=!0,this.getVisibleRows().forEach(n=>{if(n.type!=="group"){var o=n.getCell(i);n.getElement().insertBefore(o.getElement(),n.getCell(this.columns[this.leftCol]).getElement()),o.cellRendered()}}),this.leftCol--,this.getVisibleRows().forEach(n=>{n.type!=="group"&&(n.modules.vdomHoz.leftCol=this.leftCol)}),this.leftCol<=0?this.vDomPadLeft=0:this.vDomPadLeft-=i.getWidth();let s=this.fitDataColActualWidthCheck(i);s&&(this.scrollLeft=this.elementVertical.scrollLeft=this.elementVertical.scrollLeft+s,this.vDomPadRight-=s)}else e=!1;else e=!1}t&&(this.tableElement.style.paddingLeft=this.vDomPadLeft+"px")}removeColRight(){for(var t=!1,e=!0;e;){let i=this.columns[this.rightCol];i&&i.modules.vdomHoz.leftPos>this.vDomScrollPosRight?(t=!0,this.getVisibleRows().forEach(s=>{if(s.type!=="group"){var n=s.getCell(i);try{s.getElement().removeChild(n.getElement())}catch(o){console.warn("Could not removeColRight",o.message)}}}),this.vDomPadRight+=i.getWidth(),this.rightCol--,this.getVisibleRows().forEach(s=>{s.type!=="group"&&(s.modules.vdomHoz.rightCol=this.rightCol)})):e=!1}t&&(this.tableElement.style.paddingRight=this.vDomPadRight+"px")}removeColLeft(){for(var t=!1,e=!0;e;){let i=this.columns[this.leftCol];i&&i.modules.vdomHoz.rightPos<this.vDomScrollPosLeft?(t=!0,this.getVisibleRows().forEach(s=>{if(s.type!=="group"){var n=s.getCell(i);try{s.getElement().removeChild(n.getElement())}catch(o){console.warn("Could not removeColLeft",o.message)}}}),this.vDomPadLeft+=i.getWidth(),this.leftCol++,this.getVisibleRows().forEach(s=>{s.type!=="group"&&(s.modules.vdomHoz.leftCol=this.leftCol)})):e=!1}t&&(this.tableElement.style.paddingLeft=this.vDomPadLeft+"px")}fitDataColActualWidthCheck(t){var e,i;return t.modules.vdomHoz.fitDataCheck&&(t.reinitializeWidth(),e=t.getWidth(),i=e-t.modules.vdomHoz.width,i&&(t.modules.vdomHoz.rightPos+=i,t.modules.vdomHoz.width=e,this.colPositionAdjust(this.columns.indexOf(t)+1,this.columns.length,i)),t.modules.vdomHoz.fitDataCheck=!1),i}initializeRow(t){if(t.type!=="group"){t.modules.vdomHoz={leftCol:this.leftCol,rightCol:this.rightCol},this.table.modules.frozenColumns&&this.table.modules.frozenColumns.leftColumns.forEach(e=>{this.appendCell(t,e)});for(let e=this.leftCol;e<=this.rightCol;e++)this.appendCell(t,this.columns[e]);this.table.modules.frozenColumns&&this.table.modules.frozenColumns.rightColumns.forEach(e=>{this.appendCell(t,e)})}}appendCell(t,e){if(e&&e.visible){let i=t.getCell(e);t.getElement().appendChild(i.getElement()),i.cellRendered()}}reinitializeRow(t,e){if(t.type!=="group"&&(e||!t.modules.vdomHoz||t.modules.vdomHoz.leftCol!==this.leftCol||t.modules.vdomHoz.rightCol!==this.rightCol)){for(var i=t.getElement();i.firstChild;)i.removeChild(i.firstChild);this.initializeRow(t)}}}class q8 extends k{constructor(t){super(t),this.blockHozScrollEvent=!1,this.headersElement=null,this.contentsElement=null,this.element=null,this.columns=[],this.columnsByIndex=[],this.columnsByField={},this.scrollLeft=0,this.optionsList=new je(this.table,"column definition",Re),this.redrawBlock=!1,this.redrawBlockUpdate=null,this.renderer=null}initialize(){this.initializeRenderer(),this.headersElement=this.createHeadersElement(),this.contentsElement=this.createHeaderContentsElement(),this.element=this.createHeaderElement(),this.contentsElement.insertBefore(this.headersElement,this.contentsElement.firstChild),this.element.insertBefore(this.contentsElement,this.element.firstChild),this.initializeScrollWheelWatcher(),this.subscribe("scroll-horizontal",this.scrollHorizontal.bind(this)),this.subscribe("scrollbar-vertical",this.padVerticalScrollbar.bind(this))}padVerticalScrollbar(t){this.table.rtl?this.headersElement.style.marginLeft=t+"px":this.headersElement.style.marginRight=t+"px"}initializeRenderer(){var t,e={virtual:U8,basic:j8};typeof this.table.options.renderHorizontal=="string"?t=e[this.table.options.renderHorizontal]:t=this.table.options.renderHorizontal,t?(this.renderer=new t(this.table,this.element,this.tableElement),this.renderer.initialize()):console.error("Unable to find matching renderer:",this.table.options.renderHorizontal)}createHeadersElement(){var t=document.createElement("div");return t.classList.add("tabulator-headers"),t.setAttribute("role","row"),t}createHeaderContentsElement(){var t=document.createElement("div");return t.classList.add("tabulator-header-contents"),t.setAttribute("role","rowgroup"),t}createHeaderElement(){var t=document.createElement("div");return t.classList.add("tabulator-header"),t.setAttribute("role","rowgroup"),this.table.options.headerVisible||t.classList.add("tabulator-header-hidden"),t}getElement(){return this.element}getContentsElement(){return this.contentsElement}getHeadersElement(){return this.headersElement}scrollHorizontal(t){this.contentsElement.scrollLeft=t,this.scrollLeft=t,this.renderer.scrollColumns(t)}initializeScrollWheelWatcher(){this.contentsElement.addEventListener("wheel",t=>{var e;t.deltaX&&(e=this.contentsElement.scrollLeft+t.deltaX,this.table.rowManager.scrollHorizontal(e),this.table.columnManager.scrollHorizontal(e))})}generateColumnsFromRowData(t){var e=[],i=this.table.options.autoColumnsDefinitions,s,n;if(t&&t.length){s=t[0];for(var o in s){let r={field:o,title:o},l=s[o];switch(typeof l){case"undefined":n="string";break;case"boolean":n="boolean";break;case"object":Array.isArray(l)?n="array":n="string";break;default:!isNaN(l)&&l!==""?n="number":l.match(/((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+$/i)?n="alphanum":n="string";break}r.sorter=n,e.push(r)}if(i)switch(typeof i){case"function":this.table.options.columns=i.call(this.table,e);break;case"object":Array.isArray(i)?e.forEach(r=>{var l=i.find(d=>d.field===r.field);l&&Object.assign(r,l)}):e.forEach(r=>{i[r.field]&&Object.assign(r,i[r.field])}),this.table.options.columns=e;break}else this.table.options.columns=e;this.setColumns(this.table.options.columns)}}setColumns(t,e){for(;this.headersElement.firstChild;)this.headersElement.removeChild(this.headersElement.firstChild);this.columns=[],this.columnsByIndex=[],this.columnsByField={},this.dispatch("columns-loading"),t.forEach((i,s)=>{this._addColumn(i)}),this._reIndexColumns(),this.dispatch("columns-loaded"),this.rerenderColumns(!1,!0),this.redraw(!0)}_addColumn(t,e,i){var s=new z(t,this),n=s.getElement(),o=i&&this.findColumnIndex(i);if(i&&o>-1){var r=i.getTopColumn(),l=this.columns.indexOf(r),d=r.getElement();e?(this.columns.splice(l,0,s),d.parentNode.insertBefore(n,d)):(this.columns.splice(l+1,0,s),d.parentNode.insertBefore(n,d.nextSibling))}else e?(this.columns.unshift(s),this.headersElement.insertBefore(s.getElement(),this.headersElement.firstChild)):(this.columns.push(s),this.headersElement.appendChild(s.getElement()));return s.columnRendered(),s}registerColumnField(t){t.definition.field&&(this.columnsByField[t.definition.field]=t)}registerColumnPosition(t){this.columnsByIndex.push(t)}_reIndexColumns(){this.columnsByIndex=[],this.columns.forEach(function(t){t.reRegisterPosition()})}verticalAlignHeaders(){var t=0;this.redrawBlock||(this.headersElement.style.height="",this.columns.forEach(e=>{e.clearVerticalAlign()}),this.columns.forEach(e=>{var i=e.getHeight();i>t&&(t=i)}),this.headersElement.style.height=t+"px",this.columns.forEach(e=>{e.verticalAlign(this.table.options.columnHeaderVertAlign,t)}),this.table.rowManager.adjustTableSize())}findColumn(t){var e;if(typeof t=="object"){if(t instanceof z)return t;if(t instanceof Ee)return t._getSelf()||!1;if(typeof HTMLElement<"u"&&t instanceof HTMLElement)return e=[],this.columns.forEach(s=>{e.push(s),e=e.concat(s.getColumns(!0))}),e.find(s=>s.element===t)||!1}else return this.columnsByField[t]||!1;return!1}getColumnByField(t){return this.columnsByField[t]}getColumnsByFieldRoot(t){var e=[];return Object.keys(this.columnsByField).forEach(i=>{var s=this.table.options.nestedFieldSeparator?i.split(this.table.options.nestedFieldSeparator)[0]:i;s===t&&e.push(this.columnsByField[i])}),e}getColumnByIndex(t){return this.columnsByIndex[t]}getFirstVisibleColumn(){var t=this.columnsByIndex.findIndex(e=>e.visible);return t>-1?this.columnsByIndex[t]:!1}getVisibleColumnsByIndex(){return this.columnsByIndex.filter(t=>t.visible)}getColumns(){return this.columns}findColumnIndex(t){return this.columnsByIndex.findIndex(e=>t===e)}getRealColumns(){return this.columnsByIndex}traverse(t){this.columnsByIndex.forEach((e,i)=>{t(e,i)})}getDefinitions(t){var e=[];return this.columnsByIndex.forEach(i=>{(!t||t&&i.visible)&&e.push(i.getDefinition())}),e}getDefinitionTree(){var t=[];return this.columns.forEach(e=>{t.push(e.getDefinition(!0))}),t}getComponents(t){var e=[],i=t?this.columns:this.columnsByIndex;return i.forEach(s=>{e.push(s.getComponent())}),e}getWidth(){var t=0;return this.columnsByIndex.forEach(e=>{e.visible&&(t+=e.getWidth())}),t}moveColumn(t,e,i){e.element.parentNode.insertBefore(t.element,e.element),i&&e.element.parentNode.insertBefore(e.element,t.element),this.moveColumnActual(t,e,i),this.verticalAlignHeaders(),this.table.rowManager.reinitialize()}moveColumnActual(t,e,i){t.parent.isGroup?this._moveColumnInArray(t.parent.columns,t,e,i):this._moveColumnInArray(this.columns,t,e,i),this._moveColumnInArray(this.columnsByIndex,t,e,i,!0),this.rerenderColumns(!0),this.dispatch("column-moved",t,e,i),this.subscribedExternal("columnMoved")&&this.dispatchExternal("columnMoved",t.getComponent(),this.table.columnManager.getComponents())}_moveColumnInArray(t,e,i,s,n){var o=t.indexOf(e),r,l=[];o>-1&&(t.splice(o,1),r=t.indexOf(i),r>-1?s&&(r=r+1):r=o,t.splice(r,0,e),n&&(l=this.chain("column-moving-rows",[e,i,s],null,[])||[],l=l.concat(this.table.rowManager.rows),l.forEach(function(d){if(d.cells.length){var c=d.cells.splice(o,1)[0];d.cells.splice(r,0,c)}})))}scrollToColumn(t,e,i){var s=0,n=t.getLeftOffset(),o=0,r=t.getElement();return new Promise((l,d)=>{if(typeof e>"u"&&(e=this.table.options.scrollToColumnPosition),typeof i>"u"&&(i=this.table.options.scrollToColumnIfVisible),t.visible){switch(e){case"middle":case"center":o=-this.element.clientWidth/2;break;case"right":o=r.clientWidth-this.headersElement.clientWidth;break}if(!i&&n>0&&n+r.offsetWidth<this.element.clientWidth)return!1;s=n+o,s=Math.max(Math.min(s,this.table.rowManager.element.scrollWidth-this.table.rowManager.element.clientWidth),0),this.table.rowManager.scrollHorizontal(s),this.scrollHorizontal(s),l()}else console.warn("Scroll Error - Column not visible"),d("Scroll Error - Column not visible")})}generateCells(t){var e=[];return this.columnsByIndex.forEach(i=>{e.push(i.generateCell(t))}),e}getFlexBaseWidth(){var t=this.table.element.clientWidth,e=0;return this.table.rowManager.element.scrollHeight>this.table.rowManager.element.clientHeight&&(t-=this.table.rowManager.element.offsetWidth-this.table.rowManager.element.clientWidth),this.columnsByIndex.forEach(function(i){var s,n,o;i.visible&&(s=i.definition.width||0,n=parseInt(i.minWidth),typeof s=="string"?s.indexOf("%")>-1?o=t/100*parseInt(s):o=parseInt(s):o=s,e+=o>n?o:n)}),e}addColumn(t,e,i){return new Promise((s,n)=>{var o=this._addColumn(t,e,i);this._reIndexColumns(),this.dispatch("column-add",t,e,i),this.layoutMode()!="fitColumns"&&o.reinitializeWidth(),this.redraw(!0),this.table.rowManager.reinitialize(),this.rerenderColumns(),s(o)})}deregisterColumn(t){var e=t.getField(),i;e&&delete this.columnsByField[e],i=this.columnsByIndex.indexOf(t),i>-1&&this.columnsByIndex.splice(i,1),i=this.columns.indexOf(t),i>-1&&this.columns.splice(i,1),this.verticalAlignHeaders(),this.redraw()}rerenderColumns(t,e){this.redrawBlock?(t===!1||t===!0&&this.redrawBlockUpdate===null)&&(this.redrawBlockUpdate=t):this.renderer.rerenderColumns(t,e)}blockRedraw(){this.redrawBlock=!0,this.redrawBlockUpdate=null}restoreRedraw(){this.redrawBlock=!1,this.verticalAlignHeaders(),this.renderer.rerenderColumns(this.redrawBlockUpdate)}redraw(t){C.elVisible(this.element)&&this.verticalAlignHeaders(),t&&(this.table.rowManager.resetScroll(),this.table.rowManager.reinitialize()),this.confirm("table-redrawing",t)||this.layoutRefresh(t),this.dispatch("table-redraw",t),this.table.footerManager.redraw()}}class X8 extends st{constructor(t){super(t),this.verticalFillMode="fill",this.scrollTop=0,this.scrollLeft=0,this.scrollTop=0,this.scrollLeft=0}clearRows(){for(var t=this.tableElement;t.firstChild;)t.removeChild(t.firstChild);t.scrollTop=0,t.scrollLeft=0,t.style.minWidth="",t.style.minHeight="",t.style.display="",t.style.visibility=""}renderRows(){var t=this.tableElement,e=!0,i=document.createDocumentFragment(),s=this.rows();s.forEach((n,o)=>{this.styleRow(n,o),n.initialize(!1,!0),n.type!=="group"&&(e=!1),i.appendChild(n.getElement())}),t.appendChild(i),s.forEach(n=>{n.rendered(),n.heightInitialized||n.calcHeight(!0)}),s.forEach(n=>{n.heightInitialized||n.setCellHeight()}),e?t.style.minWidth=this.table.columnManager.getWidth()+"px":t.style.minWidth=""}rerenderRows(t){this.clearRows(),t&&t(),this.renderRows(),this.rows().length||this.table.rowManager.tableEmpty()}scrollToRowNearestTop(t){var e=C.elOffset(t.getElement()).top;return!(Math.abs(this.elementVertical.scrollTop-e)>Math.abs(this.elementVertical.scrollTop+this.elementVertical.clientHeight-e))}scrollToRow(t){var e=t.getElement();this.elementVertical.scrollTop=C.elOffset(e).top-C.elOffset(this.elementVertical).top+this.elementVertical.scrollTop}visibleRows(t){return this.rows()}}class J8 extends st{constructor(t){super(t),this.verticalFillMode="fill",this.scrollTop=0,this.scrollLeft=0,this.vDomRowHeight=20,this.vDomTop=0,this.vDomBottom=0,this.vDomScrollPosTop=0,this.vDomScrollPosBottom=0,this.vDomTopPad=0,this.vDomBottomPad=0,this.vDomMaxRenderChain=90,this.vDomWindowBuffer=0,this.vDomWindowMinTotalRows=20,this.vDomWindowMinMarginRows=5,this.vDomTopNewRows=[],this.vDomBottomNewRows=[]}clearRows(){for(var t=this.tableElement;t.firstChild;)t.removeChild(t.firstChild);t.style.paddingTop="",t.style.paddingBottom="",t.style.minHeight="",t.style.display="",t.style.visibility="",this.elementVertical.scrollTop=0,this.elementVertical.scrollLeft=0,this.scrollTop=0,this.scrollLeft=0,this.vDomTop=0,this.vDomBottom=0,this.vDomTopPad=0,this.vDomBottomPad=0,this.vDomScrollPosTop=0,this.vDomScrollPosBottom=0}renderRows(){this._virtualRenderFill()}rerenderRows(t){for(var e=this.elementVertical.scrollTop,i=!1,s=!1,n=this.table.rowManager.scrollLeft,o=this.rows(),r=this.vDomTop;r<=this.vDomBottom;r++)if(o[r]){var l=e-o[r].getElement().offsetTop;if(s===!1||Math.abs(l)<s)s=l,i=r;else break}o.forEach(d=>{d.deinitializeHeight()}),t&&t(),this.rows().length?this._virtualRenderFill(i===!1?this.rows.length-1:i,!0,s||0):(this.clear(),this.table.rowManager.tableEmpty()),this.scrollColumns(n)}scrollColumns(t){this.table.rowManager.scrollHorizontal(t)}scrollRows(t,e){var i=t-this.vDomScrollPosTop,s=t-this.vDomScrollPosBottom,n=this.vDomWindowBuffer*2,o=this.rows();if(this.scrollTop=t,-i>n||s>n){var r=this.table.rowManager.scrollLeft;this._virtualRenderFill(Math.floor(this.elementVertical.scrollTop/this.elementVertical.scrollHeight*o.length)),this.scrollColumns(r)}else e?(i<0&&this._addTopRow(o,-i),s<0&&(this.vDomScrollHeight-this.scrollTop>this.vDomWindowBuffer?this._removeBottomRow(o,-s):this.vDomScrollPosBottom=this.scrollTop)):(s>=0&&this._addBottomRow(o,s),i>=0&&(this.scrollTop>this.vDomWindowBuffer?this._removeTopRow(o,i):this.vDomScrollPosTop=this.scrollTop))}resize(){this.vDomWindowBuffer=this.table.options.renderVerticalBuffer||this.elementVertical.clientHeight}scrollToRowNearestTop(t){var e=this.rows().indexOf(t);return!(Math.abs(this.vDomTop-e)>Math.abs(this.vDomBottom-e))}scrollToRow(t){var e=this.rows().indexOf(t);e>-1&&this._virtualRenderFill(e,!0)}visibleRows(t){var e=this.elementVertical.scrollTop,i=this.elementVertical.clientHeight+e,s=!1,n=0,o=0,r=this.rows();if(t)n=this.vDomTop,o=this.vDomBottom;else for(var l=this.vDomTop;l<=this.vDomBottom;l++)if(r[l])if(s)if(i-r[l].getElement().offsetTop>=0)o=l;else break;else if(e-r[l].getElement().offsetTop>=0)n=l;else if(s=!0,i-r[l].getElement().offsetTop>=0)o=l;else break;return r.slice(n,o+1)}_virtualRenderFill(t,e,i){var s=this.tableElement,n=this.elementVertical,o=0,r=0,l=0,d=0,c=0,p=0,u=this.rows(),g=u.length,v=0,f,b,m=[],y=0,E=0,x=this.table.rowManager.fixedHeight,R=this.elementVertical.clientHeight,D=this.table.options.rowHeight,W=!0;if(t=t||0,i=i||0,!t)this.clear();else{for(;s.firstChild;)s.removeChild(s.firstChild);d=(g-t+1)*this.vDomRowHeight,d<R&&(t-=Math.ceil((R-d)/this.vDomRowHeight),t<0&&(t=0)),o=Math.min(Math.max(Math.floor(this.vDomWindowBuffer/this.vDomRowHeight),this.vDomWindowMinMarginRows),t),t-=o}if(g&&C.elVisible(this.elementVertical)){for(this.vDomTop=t,this.vDomBottom=t-1,x||this.table.options.maxHeight?(D&&(E=R/D+this.vDomWindowBuffer/D),E=Math.max(this.vDomWindowMinTotalRows,Math.ceil(E))):E=g;(E==g||r<=R+this.vDomWindowBuffer||y<this.vDomWindowMinTotalRows)&&this.vDomBottom<g-1;){for(m=[],b=document.createDocumentFragment(),p=0;p<E&&this.vDomBottom<g-1;)v=this.vDomBottom+1,f=u[v],this.styleRow(f,v),f.initialize(!1,!0),!f.heightInitialized&&!this.table.options.rowHeight&&f.clearCellHeight(),b.appendChild(f.getElement()),m.push(f),this.vDomBottom++,p++;if(!m.length)break;s.appendChild(b),m.forEach(H=>{H.rendered(),H.heightInitialized||H.calcHeight(!0)}),m.forEach(H=>{H.heightInitialized||H.setCellHeight()}),m.forEach(H=>{l=H.getHeight(),y<o?c+=l:r+=l,l>this.vDomWindowBuffer&&(this.vDomWindowBuffer=l*2),y++}),W=this.table.rowManager.adjustTableSize(),R=this.elementVertical.clientHeight,W&&(x||this.table.options.maxHeight)&&(D=r/y,E=Math.max(this.vDomWindowMinTotalRows,Math.ceil(R/D+this.vDomWindowBuffer/D)))}t?(this.vDomTopPad=e?this.vDomRowHeight*this.vDomTop+i:this.scrollTop-c,this.vDomBottomPad=this.vDomBottom==g-1?0:Math.max(this.vDomScrollHeight-this.vDomTopPad-r-c,0)):(this.vDomTopPad=0,this.vDomRowHeight=Math.floor((r+c)/y),this.vDomBottomPad=this.vDomRowHeight*(g-this.vDomBottom-1),this.vDomScrollHeight=c+r+this.vDomBottomPad-R),s.style.paddingTop=this.vDomTopPad+"px",s.style.paddingBottom=this.vDomBottomPad+"px",e&&(this.scrollTop=this.vDomTopPad+c+i-(this.elementVertical.scrollWidth>this.elementVertical.clientWidth?this.elementVertical.offsetHeight-R:0)),this.scrollTop=Math.min(this.scrollTop,this.elementVertical.scrollHeight-R),this.elementVertical.scrollWidth>this.elementVertical.clientWidth&&e&&(this.scrollTop+=this.elementVertical.offsetHeight-R),this.vDomScrollPosTop=this.scrollTop,this.vDomScrollPosBottom=this.scrollTop,n.scrollTop=this.scrollTop,this.dispatch("render-virtual-fill")}}_addTopRow(t,e){for(var i=this.tableElement,s=[],n=0,o=this.vDomTop-1,r=0,l=!0;l;)if(this.vDomTop){let d=t[o],c,p;d&&r<this.vDomMaxRenderChain?(c=d.getHeight()||this.vDomRowHeight,p=d.initialized,e>=c?(this.styleRow(d,o),i.insertBefore(d.getElement(),i.firstChild),(!d.initialized||!d.heightInitialized)&&s.push(d),d.initialize(),p||(c=d.getElement().offsetHeight,c>this.vDomWindowBuffer&&(this.vDomWindowBuffer=c*2)),e-=c,n+=c,this.vDomTop--,o--,r++):l=!1):l=!1}else l=!1;for(let d of s)d.clearCellHeight();this._quickNormalizeRowHeight(s),n&&(this.vDomTopPad-=n,this.vDomTopPad<0&&(this.vDomTopPad=o*this.vDomRowHeight),o<1&&(this.vDomTopPad=0),i.style.paddingTop=this.vDomTopPad+"px",this.vDomScrollPosTop-=n)}_removeTopRow(t,e){for(var i=[],s=0,n=0,o=!0;o;){let r=t[this.vDomTop],l;r&&n<this.vDomMaxRenderChain?(l=r.getHeight()||this.vDomRowHeight,e>=l?(this.vDomTop++,e-=l,s+=l,i.push(r),n++):o=!1):o=!1}for(let r of i){let l=r.getElement();l.parentNode&&l.parentNode.removeChild(l)}s&&(this.vDomTopPad+=s,this.tableElement.style.paddingTop=this.vDomTopPad+"px",this.vDomScrollPosTop+=this.vDomTop?s:s+this.vDomWindowBuffer)}_addBottomRow(t,e){for(var i=this.tableElement,s=[],n=0,o=this.vDomBottom+1,r=0,l=!0;l;){let d=t[o],c,p;d&&r<this.vDomMaxRenderChain?(c=d.getHeight()||this.vDomRowHeight,p=d.initialized,e>=c?(this.styleRow(d,o),i.appendChild(d.getElement()),(!d.initialized||!d.heightInitialized)&&s.push(d),d.initialize(),p||(c=d.getElement().offsetHeight,c>this.vDomWindowBuffer&&(this.vDomWindowBuffer=c*2)),e-=c,n+=c,this.vDomBottom++,o++,r++):l=!1):l=!1}for(let d of s)d.clearCellHeight();this._quickNormalizeRowHeight(s),n&&(this.vDomBottomPad-=n,(this.vDomBottomPad<0||o==t.length-1)&&(this.vDomBottomPad=0),i.style.paddingBottom=this.vDomBottomPad+"px",this.vDomScrollPosBottom+=n)}_removeBottomRow(t,e){for(var i=[],s=0,n=0,o=!0;o;){let r=t[this.vDomBottom],l;r&&n<this.vDomMaxRenderChain?(l=r.getHeight()||this.vDomRowHeight,e>=l?(this.vDomBottom--,e-=l,s+=l,i.push(r),n++):o=!1):o=!1}for(let r of i){let l=r.getElement();l.parentNode&&l.parentNode.removeChild(l)}s&&(this.vDomBottomPad+=s,this.vDomBottomPad<0&&(this.vDomBottomPad=0),this.tableElement.style.paddingBottom=this.vDomBottomPad+"px",this.vDomScrollPosBottom-=s)}_quickNormalizeRowHeight(t){for(let e of t)e.calcHeight();for(let e of t)e.setCellHeight()}}class K8 extends k{constructor(t){super(t),this.element=this.createHolderElement(),this.tableElement=this.createTableElement(),this.heightFixer=this.createTableElement(),this.placeholder=null,this.placeholderContents=null,this.firstRender=!1,this.renderMode="virtual",this.fixedHeight=!1,this.rows=[],this.activeRowsPipeline=[],this.activeRows=[],this.activeRowsCount=0,this.displayRows=[],this.displayRowsCount=0,this.scrollTop=0,this.scrollLeft=0,this.redrawBlock=!1,this.redrawBlockRestoreConfig=!1,this.redrawBlockRenderInPosition=!1,this.dataPipeline=[],this.displayPipeline=[],this.scrollbarWidth=0,this.renderer=null}createHolderElement(){var t=document.createElement("div");return t.classList.add("tabulator-tableholder"),t.setAttribute("tabindex",0),t}createTableElement(){var t=document.createElement("div");return t.classList.add("tabulator-table"),t.setAttribute("role","rowgroup"),t}initializePlaceholder(){var t=this.table.options.placeholder;if(typeof t=="function"&&(t=t.call(this.table)),t=this.chain("placeholder",[t],t,t)||t,t){let e=document.createElement("div");if(e.classList.add("tabulator-placeholder"),typeof t=="string"){let i=document.createElement("div");i.classList.add("tabulator-placeholder-contents"),i.innerHTML=t,e.appendChild(i),this.placeholderContents=i}else typeof HTMLElement<"u"&&t instanceof HTMLElement?(e.appendChild(t),this.placeholderContents=t):(console.warn("Invalid placeholder provided, must be string or HTML Element",t),this.el=null);this.placeholder=e}}getElement(){return this.element}getTableElement(){return this.tableElement}initialize(){this.initializePlaceholder(),this.initializeRenderer(),this.element.appendChild(this.tableElement),this.firstRender=!0,this.element.addEventListener("scroll",()=>{var t=this.element.scrollLeft,e=this.scrollLeft>t,i=this.element.scrollTop,s=this.scrollTop>i;this.scrollLeft!=t&&(this.scrollLeft=t,this.dispatch("scroll-horizontal",t,e),this.dispatchExternal("scrollHorizontal",t,e),this._positionPlaceholder()),this.scrollTop!=i&&(this.scrollTop=i,this.renderer.scrollRows(i,s),this.dispatch("scroll-vertical",i,s),this.dispatchExternal("scrollVertical",i,s))})}findRow(t){if(typeof t=="object"){if(t instanceof L)return t;if(t instanceof tt)return t._getSelf()||!1;if(typeof HTMLElement<"u"&&t instanceof HTMLElement)return this.rows.find(i=>i.getElement()===t)||!1;if(t===null)return!1}else return typeof t>"u"?!1:this.rows.find(i=>i.data[this.table.options.index]==t)||!1;return!1}getRowFromDataObject(t){var e=this.rows.find(i=>i.data===t);return e||!1}getRowFromPosition(t){return this.getDisplayRows().find(e=>e.getPosition()===t&&e.isDisplayed())}scrollToRow(t,e,i){return this.renderer.scrollToRowPosition(t,e,i)}setData(t,e,i){return new Promise((s,n)=>{e&&this.getDisplayRows().length?this.table.options.pagination?this._setDataActual(t,!0):this.reRenderInPosition(()=>{this._setDataActual(t)}):(this.table.options.autoColumns&&i&&this.table.initialized&&this.table.columnManager.generateColumnsFromRowData(t),this.resetScroll(),this._setDataActual(t)),s()})}_setDataActual(t,e){this.dispatchExternal("dataProcessing",t),this._wipeElements(),Array.isArray(t)?(this.dispatch("data-processing",t),t.forEach((i,s)=>{if(i&&typeof i=="object"){var n=new L(i,this);this.rows.push(n)}else console.warn("Data Loading Warning - Invalid row data detected and ignored, expecting object but received:",i)}),this.refreshActiveData(!1,!1,e),this.dispatch("data-processed",t),this.dispatchExternal("dataProcessed",t)):console.error(`Data Loading Error - Unable to process data due to invalid data type 
Expecting: array 
Received: `,typeof t,`
Data:     `,t)}_wipeElements(){this.dispatch("rows-wipe"),this.destroy(),this.adjustTableSize(),this.dispatch("rows-wiped")}destroy(){this.rows.forEach(t=>{t.wipe()}),this.rows=[],this.activeRows=[],this.activeRowsPipeline=[],this.activeRowsCount=0,this.displayRows=[],this.displayRowsCount=0}deleteRow(t,e){var i=this.rows.indexOf(t),s=this.activeRows.indexOf(t);s>-1&&this.activeRows.splice(s,1),i>-1&&this.rows.splice(i,1),this.setActiveRows(this.activeRows),this.displayRowIterator(n=>{var o=n.indexOf(t);o>-1&&n.splice(o,1)}),e||this.reRenderInPosition(),this.regenerateRowPositions(),this.dispatchExternal("rowDeleted",t.getComponent()),this.displayRowsCount||this.tableEmpty(),this.subscribedExternal("dataChanged")&&this.dispatchExternal("dataChanged",this.getData())}addRow(t,e,i,s){var n=this.addRowActual(t,e,i,s);return n}addRows(t,e,i,s){var n=[];return new Promise((o,r)=>{e=this.findAddRowPos(e),Array.isArray(t)||(t=[t]),(typeof i>"u"&&e||typeof i<"u"&&!e)&&t.reverse(),t.forEach((l,d)=>{var c=this.addRow(l,e,i,!0);n.push(c),this.dispatch("row-added",c,l,e,i)}),this.refreshActiveData(s?"displayPipeline":!1,!1,!0),this.regenerateRowPositions(),this.displayRowsCount&&this._clearPlaceholder(),o(n)})}findAddRowPos(t){return typeof t>"u"&&(t=this.table.options.addRowPos),t==="pos"&&(t=!0),t==="bottom"&&(t=!1),t}addRowActual(t,e,i,s){var n=t instanceof L?t:new L(t||{},this),o=this.findAddRowPos(e),r=-1,l,d;return i||(d=this.chain("row-adding-position",[n,o],null,{index:i,top:o}),i=d.index,o=d.top),typeof i<"u"&&(i=this.findRow(i)),i=this.chain("row-adding-index",[n,i,o],null,i),i&&(r=this.rows.indexOf(i)),i&&r>-1?(l=this.activeRows.indexOf(i),this.displayRowIterator(function(c){var p=c.indexOf(i);p>-1&&c.splice(o?p:p+1,0,n)}),l>-1&&this.activeRows.splice(o?l:l+1,0,n),this.rows.splice(o?r:r+1,0,n)):o?(this.displayRowIterator(function(c){c.unshift(n)}),this.activeRows.unshift(n),this.rows.unshift(n)):(this.displayRowIterator(function(c){c.push(n)}),this.activeRows.push(n),this.rows.push(n)),this.setActiveRows(this.activeRows),this.dispatchExternal("rowAdded",n.getComponent()),this.subscribedExternal("dataChanged")&&this.dispatchExternal("dataChanged",this.table.rowManager.getData()),s||this.reRenderInPosition(),n}moveRow(t,e,i){this.dispatch("row-move",t,e,i),this.moveRowActual(t,e,i),this.regenerateRowPositions(),this.dispatch("row-moved",t,e,i),this.dispatchExternal("rowMoved",t.getComponent())}moveRowActual(t,e,i){this.moveRowInArray(this.rows,t,e,i),this.moveRowInArray(this.activeRows,t,e,i),this.displayRowIterator(s=>{this.moveRowInArray(s,t,e,i)}),this.dispatch("row-moving",t,e,i)}moveRowInArray(t,e,i,s){var n,o,r,l;if(e!==i&&(n=t.indexOf(e),n>-1&&(t.splice(n,1),o=t.indexOf(i),o>-1?s?t.splice(o+1,0,e):t.splice(o,0,e):t.splice(n,0,e)),t===this.getDisplayRows())){r=n<o?n:o,l=o>n?o:n+1;for(let d=r;d<=l;d++)t[d]&&this.styleRow(t[d],d)}}clearData(){this.setData([])}getRowIndex(t){return this.findRowIndex(t,this.rows)}getDisplayRowIndex(t){var e=this.getDisplayRows().indexOf(t);return e>-1?e:!1}nextDisplayRow(t,e){var i=this.getDisplayRowIndex(t),s=!1;return i!==!1&&i<this.displayRowsCount-1&&(s=this.getDisplayRows()[i+1]),s&&(!(s instanceof L)||s.type!="row")?this.nextDisplayRow(s,e):s}prevDisplayRow(t,e){var i=this.getDisplayRowIndex(t),s=!1;return i&&(s=this.getDisplayRows()[i-1]),e&&s&&(!(s instanceof L)||s.type!="row")?this.prevDisplayRow(s,e):s}findRowIndex(t,e){var i;return t=this.findRow(t),t&&(i=e.indexOf(t),i>-1)?i:!1}getData(t,e){var i=[],s=this.getRows(t);return s.forEach(function(n){n.type=="row"&&i.push(n.getData(e||"data"))}),i}getComponents(t){var e=[],i=this.getRows(t);return i.forEach(function(s){e.push(s.getComponent())}),e}getDataCount(t){var e=this.getRows(t);return e.length}scrollHorizontal(t){this.scrollLeft=t,this.element.scrollLeft=t,this.dispatch("scroll-horizontal",t)}registerDataPipelineHandler(t,e){typeof e<"u"?(this.dataPipeline.push({handler:t,priority:e}),this.dataPipeline.sort((i,s)=>i.priority-s.priority)):console.error("Data pipeline handlers must have a priority in order to be registered")}registerDisplayPipelineHandler(t,e){typeof e<"u"?(this.displayPipeline.push({handler:t,priority:e}),this.displayPipeline.sort((i,s)=>i.priority-s.priority)):console.error("Display pipeline handlers must have a priority in order to be registered")}refreshActiveData(t,e,i){var s=this.table,n="",o=0,r=["all","dataPipeline","display","displayPipeline","end"];if(!this.table.destroyed){if(typeof t=="function")if(o=this.dataPipeline.findIndex(l=>l.handler===t),o>-1)n="dataPipeline",e&&(o==this.dataPipeline.length-1?n="display":o++);else if(o=this.displayPipeline.findIndex(l=>l.handler===t),o>-1)n="displayPipeline",e&&(o==this.displayPipeline.length-1?n="end":o++);else{console.error("Unable to refresh data, invalid handler provided",t);return}else n=t||"all",o=0;if(this.redrawBlock){(!this.redrawBlockRestoreConfig||this.redrawBlockRestoreConfig&&(this.redrawBlockRestoreConfig.stage===n&&o<this.redrawBlockRestoreConfig.index||r.indexOf(n)<r.indexOf(this.redrawBlockRestoreConfig.stage)))&&(this.redrawBlockRestoreConfig={handler:t,skipStage:e,renderInPosition:i,stage:n,index:o});return}else C.elVisible(this.element)?i?this.reRenderInPosition(this.refreshPipelines.bind(this,t,n,o,i)):(this.refreshPipelines(t,n,o,i),t||this.table.columnManager.renderer.renderColumns(),this.renderTable(),s.options.layoutColumnsOnNewData&&this.table.columnManager.redraw(!0)):this.refreshPipelines(t,n,o,i),this.dispatch("data-refreshed")}}refreshPipelines(t,e,i,s){switch(this.dispatch("data-refreshing"),(!t||!this.activeRowsPipeline[0])&&(this.activeRowsPipeline[0]=this.rows.slice(0)),e){case"all":case"dataPipeline":for(let n=i;n<this.dataPipeline.length;n++){let o=this.dataPipeline[n].handler(this.activeRowsPipeline[n].slice(0));this.activeRowsPipeline[n+1]=o||this.activeRowsPipeline[n].slice(0)}this.setActiveRows(this.activeRowsPipeline[this.dataPipeline.length]);case"display":i=0,this.resetDisplayRows();case"displayPipeline":for(let n=i;n<this.displayPipeline.length;n++){let o=this.displayPipeline[n].handler((n?this.getDisplayRows(n-1):this.activeRows).slice(0),s);this.setDisplayRows(o||this.getDisplayRows(n-1).slice(0),n)}case"end":this.regenerateRowPositions()}this.getDisplayRows().length&&this._clearPlaceholder()}regenerateRowPositions(){var t=this.getDisplayRows(),e=1;t.forEach(i=>{i.type==="row"&&(i.setPosition(e),e++)})}setActiveRows(t){this.activeRows=this.activeRows=Object.assign([],t),this.activeRowsCount=this.activeRows.length}resetDisplayRows(){this.displayRows=[],this.displayRows.push(this.activeRows.slice(0)),this.displayRowsCount=this.displayRows[0].length}setDisplayRows(t,e){this.displayRows[e]=t,e==this.displayRows.length-1&&(this.displayRowsCount=this.displayRows[this.displayRows.length-1].length)}getDisplayRows(t){return typeof t>"u"?this.displayRows.length?this.displayRows[this.displayRows.length-1]:[]:this.displayRows[t]||[]}getVisibleRows(t,e){var i=Object.assign([],this.renderer.visibleRows(!e));return t&&(i=this.chain("rows-visible",[e],i,i)),i}displayRowIterator(t){this.activeRowsPipeline.forEach(t),this.displayRows.forEach(t),this.displayRowsCount=this.displayRows[this.displayRows.length-1].length}getRows(t){var e=[];switch(t){case"active":e=this.activeRows;break;case"display":e=this.table.rowManager.getDisplayRows();break;case"visible":e=this.getVisibleRows(!1,!0);break;default:e=this.chain("rows-retrieve",t,null,this.rows)||this.rows}return e}reRenderInPosition(t){this.redrawBlock?t?t():this.redrawBlockRenderInPosition=!0:(this.dispatchExternal("renderStarted"),this.renderer.rerenderRows(t),this.fixedHeight||this.adjustTableSize(),this.scrollBarCheck(),this.dispatchExternal("renderComplete"))}scrollBarCheck(){var t=0;this.element.scrollHeight>this.element.clientHeight&&(t=this.element.offsetWidth-this.element.clientWidth),t!==this.scrollbarWidth&&(this.scrollbarWidth=t,this.dispatch("scrollbar-vertical",t))}initializeRenderer(){var t,e={virtual:J8,basic:X8};typeof this.table.options.renderVertical=="string"?t=e[this.table.options.renderVertical]:t=this.table.options.renderVertical,t?(this.renderMode=this.table.options.renderVertical,this.renderer=new t(this.table,this.element,this.tableElement),this.renderer.initialize(),(this.table.element.clientHeight||this.table.options.height)&&!(this.table.options.minHeight&&this.table.options.maxHeight)?this.fixedHeight=!0:this.fixedHeight=!1):console.error("Unable to find matching renderer:",this.table.options.renderVertical)}getRenderMode(){return this.renderMode}renderTable(){this.dispatchExternal("renderStarted"),this.element.scrollTop=0,this._clearTable(),this.displayRowsCount?(this.renderer.renderRows(),this.firstRender&&(this.firstRender=!1,this.fixedHeight||this.adjustTableSize(),this.layoutRefresh(!0))):this.renderEmptyScroll(),this.fixedHeight||this.adjustTableSize(),this.dispatch("table-layout"),this.displayRowsCount||this._showPlaceholder(),this.scrollBarCheck(),this.dispatchExternal("renderComplete")}renderEmptyScroll(){this.placeholder?this.tableElement.style.display="none":this.tableElement.style.minWidth=this.table.columnManager.getWidth()+"px"}_clearTable(){this._clearPlaceholder(),this.scrollTop=0,this.scrollLeft=0,this.renderer.clearRows()}tableEmpty(){this.renderEmptyScroll(),this._showPlaceholder()}checkPlaceholder(){this.displayRowsCount?this._clearPlaceholder():this.tableEmpty()}_showPlaceholder(){this.placeholder&&(this.placeholder&&this.placeholder.parentNode&&this.placeholder.parentNode.removeChild(this.placeholder),this.initializePlaceholder(),this.placeholder.setAttribute("tabulator-render-mode",this.renderMode),this.getElement().appendChild(this.placeholder),this._positionPlaceholder(),this.adjustTableSize())}_clearPlaceholder(){this.placeholder&&this.placeholder.parentNode&&this.placeholder.parentNode.removeChild(this.placeholder),this.tableElement.style.minWidth="",this.tableElement.style.display=""}_positionPlaceholder(){this.placeholder&&this.placeholder.parentNode&&(this.placeholder.style.width=this.table.columnManager.getWidth()+"px",this.placeholderContents.style.width=this.table.rowManager.element.clientWidth+"px",this.placeholderContents.style.marginLeft=this.scrollLeft+"px")}styleRow(t,e){var i=t.getElement();e%2?(i.classList.add("tabulator-row-even"),i.classList.remove("tabulator-row-odd")):(i.classList.add("tabulator-row-odd"),i.classList.remove("tabulator-row-even"))}normalizeHeight(){this.activeRows.forEach(function(t){t.normalizeHeight()})}adjustTableSize(){let t=this.element.clientHeight,e,i=!1;if(this.renderer.verticalFillMode==="fill"){let s=Math.floor(this.table.columnManager.getElement().getBoundingClientRect().height+(this.table.footerManager&&this.table.footerManager.active&&!this.table.footerManager.external?this.table.footerManager.getElement().getBoundingClientRect().height:0));if(this.fixedHeight){e=isNaN(this.table.options.minHeight)?this.table.options.minHeight:this.table.options.minHeight+"px";const n="calc(100% - "+s+"px)";this.element.style.minHeight=e||"calc(100% - "+s+"px)",this.element.style.height=n,this.element.style.maxHeight=n}else this.element.style.height="",this.element.style.height=this.table.element.clientHeight-s+"px",this.element.scrollTop=this.scrollTop;this.renderer.resize(),!this.fixedHeight&&t!=this.element.clientHeight&&(i=!0,this.subscribed("table-resize")?this.dispatch("table-resize"):this.redraw()),this.scrollBarCheck()}return this._positionPlaceholder(),i}reinitialize(){this.rows.forEach(function(t){t.reinitialize(!0)})}blockRedraw(){this.redrawBlock=!0,this.redrawBlockRestoreConfig=!1}restoreRedraw(){this.redrawBlock=!1,this.redrawBlockRestoreConfig?(this.refreshActiveData(this.redrawBlockRestoreConfig.handler,this.redrawBlockRestoreConfig.skipStage,this.redrawBlockRestoreConfig.renderInPosition),this.redrawBlockRestoreConfig=!1):this.redrawBlockRenderInPosition&&this.reRenderInPosition(),this.redrawBlockRenderInPosition=!1}redraw(t){this.adjustTableSize(),this.table.tableWidth=this.table.element.clientWidth,t?this.renderTable():(this.reRenderInPosition(),this.scrollHorizontal(this.scrollLeft))}resetScroll(){if(this.element.scrollLeft=0,this.element.scrollTop=0,this.table.browser==="ie"){var t=document.createEvent("Event");t.initEvent("scroll",!1,!0),this.element.dispatchEvent(t)}else this.element.dispatchEvent(new Event("scroll"))}}class Y8 extends k{constructor(t){super(t),this.active=!1,this.element=this.createElement(),this.containerElement=this.createContainerElement(),this.external=!1}initialize(){this.initializeElement()}createElement(){var t=document.createElement("div");return t.classList.add("tabulator-footer"),t}createContainerElement(){var t=document.createElement("div");return t.classList.add("tabulator-footer-contents"),this.element.appendChild(t),t}initializeElement(){if(this.table.options.footerElement)switch(typeof this.table.options.footerElement){case"string":this.table.options.footerElement[0]==="<"?this.containerElement.innerHTML=this.table.options.footerElement:(this.external=!0,this.containerElement=document.querySelector(this.table.options.footerElement));break;default:this.element=this.table.options.footerElement;break}}getElement(){return this.element}append(t){this.activate(),this.containerElement.appendChild(t),this.table.rowManager.adjustTableSize()}prepend(t){this.activate(),this.element.insertBefore(t,this.element.firstChild),this.table.rowManager.adjustTableSize()}remove(t){t.parentNode.removeChild(t),this.deactivate()}deactivate(t){(!this.element.firstChild||t)&&(this.external||this.element.parentNode.removeChild(this.element),this.active=!1)}activate(){this.active||(this.active=!0,this.external||(this.table.element.appendChild(this.getElement()),this.table.element.style.display=""))}redraw(){this.dispatch("footer-redraw")}}class $8 extends k{constructor(t){super(t),this.el=null,this.abortClasses=["tabulator-headers","tabulator-table"],this.previousTargets={},this.listeners=["click","dblclick","contextmenu","mouseenter","mouseleave","mouseover","mouseout","mousemove","mouseup","mousedown","touchstart","touchend"],this.componentMap={"tabulator-cell":"cell","tabulator-row":"row","tabulator-group":"group","tabulator-col":"column"},this.pseudoTrackers={row:{subscriber:null,target:null},cell:{subscriber:null,target:null},group:{subscriber:null,target:null},column:{subscriber:null,target:null}},this.pseudoTracking=!1}initialize(){this.el=this.table.element,this.buildListenerMap(),this.bindSubscriptionWatchers()}buildListenerMap(){var t={};this.listeners.forEach(e=>{t[e]={handler:null,components:[]}}),this.listeners=t}bindPseudoEvents(){Object.keys(this.pseudoTrackers).forEach(t=>{this.pseudoTrackers[t].subscriber=this.pseudoMouseEnter.bind(this,t),this.subscribe(t+"-mouseover",this.pseudoTrackers[t].subscriber)}),this.pseudoTracking=!0}pseudoMouseEnter(t,e,i){this.pseudoTrackers[t].target!==i&&(this.pseudoTrackers[t].target&&this.dispatch(t+"-mouseleave",e,this.pseudoTrackers[t].target),this.pseudoMouseLeave(t,e),this.pseudoTrackers[t].target=i,this.dispatch(t+"-mouseenter",e,i))}pseudoMouseLeave(t,e){var i=Object.keys(this.pseudoTrackers),s={row:["cell"],cell:["row"]};i=i.filter(n=>{var o=s[t];return n!==t&&(!o||o&&!o.includes(n))}),i.forEach(n=>{var o=this.pseudoTrackers[n].target;this.pseudoTrackers[n].target&&(this.dispatch(n+"-mouseleave",e,o),this.pseudoTrackers[n].target=null)})}bindSubscriptionWatchers(){var t=Object.keys(this.listeners),e=Object.values(this.componentMap);for(let i of e)for(let s of t){let n=i+"-"+s;this.subscriptionChange(n,this.subscriptionChanged.bind(this,i,s))}this.subscribe("table-destroy",this.clearWatchers.bind(this))}subscriptionChanged(t,e,i){var s=this.listeners[e].components,n=s.indexOf(t),o=!1;i?n===-1&&(s.push(t),o=!0):this.subscribed(t+"-"+e)||n>-1&&(s.splice(n,1),o=!0),(e==="mouseenter"||e==="mouseleave")&&!this.pseudoTracking&&this.bindPseudoEvents(),o&&this.updateEventListeners()}updateEventListeners(){for(let t in this.listeners){let e=this.listeners[t];e.components.length?e.handler||(e.handler=this.track.bind(this,t),this.el.addEventListener(t,e.handler)):e.handler&&(this.el.removeEventListener(t,e.handler),e.handler=null)}}track(t,e){var i=e.composedPath&&e.composedPath()||e.path,s=this.findTargets(i);s=this.bindComponents(t,s),this.triggerEvents(t,e,s),this.pseudoTracking&&(t=="mouseover"||t=="mouseleave")&&!Object.keys(s).length&&this.pseudoMouseLeave("none",e)}findTargets(t){var e={};let i=Object.keys(this.componentMap);for(let s of t){let n=s.classList?[...s.classList]:[];if(n.filter(l=>this.abortClasses.includes(l)).length)break;let r=n.filter(l=>i.includes(l));for(let l of r)e[this.componentMap[l]]||(e[this.componentMap[l]]=s)}return e.group&&e.group===e.row&&delete e.row,e}bindComponents(t,e){var i=Object.keys(e).reverse(),s=this.listeners[t],n={},o={};for(let r of i){let l,d=e[r],c=this.previousTargets[r];if(c&&c.target===d)l=c.component;else switch(r){case"row":case"group":(s.components.includes("row")||s.components.includes("cell")||s.components.includes("group"))&&(l=this.table.rowManager.getVisibleRows(!0).find(u=>u.getElement()===d),e.row&&e.row.parentNode&&e.row.parentNode.closest(".tabulator-row")&&(e[r]=!1));break;case"column":s.components.includes("column")&&(l=this.table.columnManager.findColumn(d));break;case"cell":s.components.includes("cell")&&(n.row instanceof L?l=n.row.findCell(d):e.row&&console.warn("Event Target Lookup Error - The row this cell is attached to cannot be found, has the table been reinitialized without being destroyed first?"));break}l&&(n[r]=l,o[r]={target:d,component:l})}return this.previousTargets=o,n}triggerEvents(t,e,i){var s=this.listeners[t];for(let n in i)i[n]&&s.components.includes(n)&&this.dispatch(n+"-"+t,e,i[n])}clearWatchers(){for(let t in this.listeners){let e=this.listeners[t];e.handler&&(this.el.removeEventListener(t,e.handler),e.handler=null)}}}class Q8{constructor(t){this.table=t,this.bindings={}}bind(t,e,i){this.bindings[t]||(this.bindings[t]={}),this.bindings[t][e]?console.warn("Unable to bind component handler, a matching function name is already bound",t,e,i):this.bindings[t][e]=i}handle(t,e,i){if(this.bindings[t]&&this.bindings[t][i]&&typeof this.bindings[t][i].bind=="function")return this.bindings[t][i].bind(null,e);i!=="then"&&typeof i=="string"&&!i.startsWith("_")&&this.table.options.debugInvalidComponentFuncs&&console.error("The "+t+" component does not have a "+i+" function, have you checked that you have the correct Tabulator module installed?")}}class t7 extends k{constructor(t){super(t),this.requestOrder=0,this.loading=!1}initialize(){}load(t,e,i,s,n,o){var r=++this.requestOrder;if(this.table.destroyed)return Promise.resolve();if(this.dispatchExternal("dataLoading",t),t&&(t.indexOf("{")==0||t.indexOf("[")==0)&&(t=JSON.parse(t)),this.confirm("data-loading",[t,e,i,n])){this.loading=!0,n||this.alertLoader(),e=this.chain("data-params",[t,i,n],e||{},e||{}),e=this.mapParams(e,this.table.options.dataSendParams);var l=this.chain("data-load",[t,e,i,n],!1,Promise.resolve([]));return l.then(d=>{if(this.table.destroyed)console.warn("Data Load Response Blocked - Table has been destroyed");else{!Array.isArray(d)&&typeof d=="object"&&(d=this.mapParams(d,this.objectInvert(this.table.options.dataReceiveParams)));var c=this.chain("data-loaded",d,null,d);r==this.requestOrder?(this.clearAlert(),c!==!1&&(this.dispatchExternal("dataLoaded",c),this.table.rowManager.setData(c,s,typeof o>"u"?!s:o))):console.warn("Data Load Response Blocked - An active data load request was blocked by an attempt to change table data while the request was being made")}}).catch(d=>{console.error("Data Load Error: ",d),this.dispatchExternal("dataLoadError",d),n||this.alertError(),setTimeout(()=>{this.clearAlert()},this.table.options.dataLoaderErrorTimeout)}).finally(()=>{this.loading=!1})}else return this.dispatchExternal("dataLoaded",t),t||(t=[]),this.table.rowManager.setData(t,s,typeof o>"u"?!s:o),Promise.resolve()}mapParams(t,e){var i={};for(let s in t)i[e.hasOwnProperty(s)?e[s]:s]=t[s];return i}objectInvert(t){var e={};for(let i in t)e[t[i]]=i;return e}blockActiveLoad(){this.requestOrder++}alertLoader(){var t=typeof this.table.options.dataLoader=="function"?this.table.options.dataLoader():this.table.options.dataLoader;t&&this.table.alertManager.alert(this.table.options.dataLoaderLoading||this.langText("data|loading"))}alertError(){this.table.alertManager.alert(this.table.options.dataLoaderError||this.langText("data|error"),"error")}clearAlert(){this.table.alertManager.clear()}}class e7{constructor(t,e,i){this.table=t,this.events={},this.optionsList=e||{},this.subscriptionNotifiers={},this.dispatch=i?this._debugDispatch.bind(this):this._dispatch.bind(this),this.debug=i}subscriptionChange(t,e){this.subscriptionNotifiers[t]||(this.subscriptionNotifiers[t]=[]),this.subscriptionNotifiers[t].push(e),this.subscribed(t)&&this._notifySubscriptionChange(t,!0)}subscribe(t,e){this.events[t]||(this.events[t]=[]),this.events[t].push(e),this._notifySubscriptionChange(t,!0)}unsubscribe(t,e){var i;if(this.events[t])if(e)if(i=this.events[t].findIndex(s=>s===e),i>-1)this.events[t].splice(i,1);else{console.warn("Cannot remove event, no matching event found:",t,e);return}else delete this.events[t];else{console.warn("Cannot remove event, no events set on:",t);return}this._notifySubscriptionChange(t,!1)}subscribed(t){return this.events[t]&&this.events[t].length}_notifySubscriptionChange(t,e){var i=this.subscriptionNotifiers[t];i&&i.forEach(s=>{s(e)})}_dispatch(){var t=Array.from(arguments),e=t.shift(),i;return this.events[e]&&this.events[e].forEach((s,n)=>{let o=s.apply(this.table,t);n||(i=o)}),i}_debugDispatch(){var t=Array.from(arguments),e=t[0];return t[0]="ExternalEvent:"+t[0],(this.debug===!0||this.debug.includes(e))&&console.log(...t),this._dispatch(...arguments)}}class i7{constructor(t){this.events={},this.subscriptionNotifiers={},this.dispatch=t?this._debugDispatch.bind(this):this._dispatch.bind(this),this.chain=t?this._debugChain.bind(this):this._chain.bind(this),this.confirm=t?this._debugConfirm.bind(this):this._confirm.bind(this),this.debug=t}subscriptionChange(t,e){this.subscriptionNotifiers[t]||(this.subscriptionNotifiers[t]=[]),this.subscriptionNotifiers[t].push(e),this.subscribed(t)&&this._notifySubscriptionChange(t,!0)}subscribe(t,e,i=1e4){this.events[t]||(this.events[t]=[]),this.events[t].push({callback:e,priority:i}),this.events[t].sort((s,n)=>s.priority-n.priority),this._notifySubscriptionChange(t,!0)}unsubscribe(t,e){var i;if(this.events[t]){if(e)if(i=this.events[t].findIndex(s=>s.callback===e),i>-1)this.events[t].splice(i,1);else{console.warn("Cannot remove event, no matching event found:",t,e);return}}else{console.warn("Cannot remove event, no events set on:",t);return}this._notifySubscriptionChange(t,!1)}subscribed(t){return this.events[t]&&this.events[t].length}_chain(t,e,i,s){var n=i;return Array.isArray(e)||(e=[e]),this.subscribed(t)?(this.events[t].forEach((o,r)=>{n=o.callback.apply(this,e.concat([n]))}),n):typeof s=="function"?s():s}_confirm(t,e){var i=!1;return Array.isArray(e)||(e=[e]),this.subscribed(t)&&this.events[t].forEach((s,n)=>{s.callback.apply(this,e)&&(i=!0)}),i}_notifySubscriptionChange(t,e){var i=this.subscriptionNotifiers[t];i&&i.forEach(s=>{s(e)})}_dispatch(){var t=Array.from(arguments),e=t.shift();this.events[e]&&this.events[e].forEach(i=>{i.callback.apply(this,t)})}_debugDispatch(){var t=Array.from(arguments),e=t[0];return t[0]="InternalEvent:"+e,(this.debug===!0||this.debug.includes(e))&&console.log(...t),this._dispatch(...arguments)}_debugChain(){var t=Array.from(arguments),e=t[0];return t[0]="InternalEvent:"+e,(this.debug===!0||this.debug.includes(e))&&console.log(...t),this._chain(...arguments)}_debugConfirm(){var t=Array.from(arguments),e=t[0];return t[0]="InternalEvent:"+e,(this.debug===!0||this.debug.includes(e))&&console.log(...t),this._confirm(...arguments)}}class s7 extends k{constructor(t){super(t)}_warnUser(){this.options("debugDeprecation")&&console.warn(...arguments)}check(t,e,i){var s="";return typeof this.options(t)<"u"?(s="Deprecated Setup Option - Use of the %c"+t+"%c option is now deprecated",e?(s=s+", Please use the %c"+e+"%c option instead",this._warnUser(s,"font-weight: bold;","font-weight: normal;","font-weight: bold;","font-weight: normal;"),i&&(this.table.options[e]=this.table.options[t])):this._warnUser(s,"font-weight: bold;","font-weight: normal;"),!1):!0}checkMsg(t,e){return typeof this.options(t)<"u"?(this._warnUser("%cDeprecated Setup Option - Use of the %c"+t+" %c option is now deprecated, "+e,"font-weight: normal;","font-weight: bold;","font-weight: normal;"),!1):!0}msg(t){this._warnUser(t)}}class S{static register(t){S.tables.push(t)}static deregister(t){var e=S.tables.indexOf(t);e>-1&&S.tables.splice(e,1)}static lookupTable(t,e){var i=[],s,n;if(typeof t=="string"){if(s=document.querySelectorAll(t),s.length)for(var o=0;o<s.length;o++)n=S.matchElement(s[o]),n&&i.push(n)}else typeof HTMLElement<"u"&&t instanceof HTMLElement||t instanceof N?(n=S.matchElement(t),n&&i.push(n)):Array.isArray(t)?t.forEach(function(r){i=i.concat(S.lookupTable(r))}):e||console.warn("Table Connection Error - Invalid Selector",t);return i}static matchElement(t){return S.tables.find(function(e){return t instanceof N?e===t:e.element===t})}}S.tables=[];function a7(h,t){t&&this.table.columnManager.renderer.reinitializeColumnWidths(h),this.table.options.responsiveLayout&&this.table.modExists("responsiveLayout",!0)&&this.table.modules.responsiveLayout.update()}function ye(h,t){h.forEach(function(e){e.reinitializeWidth()}),this.table.options.responsiveLayout&&this.table.modExists("responsiveLayout",!0)&&this.table.modules.responsiveLayout.update()}function n7(h,t){var e=0,i=this.table.rowManager.element.clientWidth,s=0,n=!1;h.forEach((o,r)=>{o.widthFixed||o.reinitializeWidth(),(this.table.options.responsiveLayout?o.modules.responsive.visible:o.visible)&&(n=o),o.visible&&(e+=o.getWidth())}),n?(s=i-e+n.getWidth(),this.table.options.responsiveLayout&&this.table.modExists("responsiveLayout",!0)&&(n.setWidth(0),this.table.modules.responsiveLayout.update()),s>0?n.setWidth(s):n.reinitializeWidth()):this.table.options.responsiveLayout&&this.table.modExists("responsiveLayout",!0)&&this.table.modules.responsiveLayout.update()}function o7(h,t){var e=this.table.rowManager.element.getBoundingClientRect().width,i=0,s=0,n=0,o=0,r=[],l=[],d=0,c=0,p=0;function u(v){var f;return typeof v=="string"?v.indexOf("%")>-1?f=e/100*parseInt(v):f=parseInt(v):f=v,f}function g(v,f,b,m){var y=[],E=0,x=0,R=0,D=n,W=0,H=0,at=[];function ut(w){return b*(w.column.definition.widthGrow||1)}function gt(w){return u(w.width)-b*(w.column.definition.widthShrink||0)}return v.forEach(function(w,p7){var ft=m?gt(w):ut(w);w.column.minWidth>=ft?y.push(w):w.column.maxWidth&&w.column.maxWidth<ft?(w.width=w.column.maxWidth,f-=w.column.maxWidth,D-=m?w.column.definition.widthShrink||1:w.column.definition.widthGrow||1,D&&(b=Math.floor(f/D))):(at.push(w),H+=m?w.column.definition.widthShrink||1:w.column.definition.widthGrow||1)}),y.length?(y.forEach(function(w){E+=m?w.width-w.column.minWidth:w.column.minWidth,w.width=w.column.minWidth}),x=f-E,R=H?Math.floor(x/H):x,W=g(at,x,R,m)):(W=H?f-Math.floor(f/H)*H:f,at.forEach(function(w){w.width=m?gt(w):ut(w)})),W}this.table.options.responsiveLayout&&this.table.modExists("responsiveLayout",!0)&&this.table.modules.responsiveLayout.update(),this.table.rowManager.element.scrollHeight>this.table.rowManager.element.clientHeight&&(e-=this.table.rowManager.element.offsetWidth-this.table.rowManager.element.clientWidth),h.forEach(function(v){var f,b,m;v.visible&&(f=v.definition.width,b=parseInt(v.minWidth),f?(m=u(f),i+=m>b?m:b,v.definition.widthShrink&&(l.push({column:v,width:m>b?m:b}),d+=v.definition.widthShrink)):(r.push({column:v,width:0}),n+=v.definition.widthGrow||1))}),s=e-i,o=Math.floor(s/n),p=g(r,s,o,!1),r.length&&p>0&&(r[r.length-1].width+=p),r.forEach(function(v){s-=v.width}),c=Math.abs(p)+s,c>0&&d&&(p=g(l,c,Math.floor(c/d),!0)),p&&l.length&&(l[l.length-1].width-=p),r.forEach(function(v){v.column.setWidth(v.width)}),l.forEach(function(v){v.column.setWidth(v.width)})}var r7={fitData:a7,fitDataFill:ye,fitDataTable:ye,fitDataStretch:n7,fitColumns:o7};class q extends M{constructor(t){super(t,"layout"),this.mode=null,this.registerTableOption("layout","fitData"),this.registerTableOption("layoutColumnsOnNewData",!1),this.registerColumnOption("widthGrow"),this.registerColumnOption("widthShrink")}initialize(){var t=this.table.options.layout;q.modes[t]?this.mode=t:(console.warn("Layout Error - invalid mode set, defaulting to 'fitData' : "+t),this.mode="fitData"),this.table.element.setAttribute("tabulator-layout",this.mode),this.subscribe("column-init",this.initializeColumn.bind(this))}initializeColumn(t){t.definition.widthGrow&&(t.definition.widthGrow=Number(t.definition.widthGrow)),t.definition.widthShrink&&(t.definition.widthShrink=Number(t.definition.widthShrink))}getMode(){return this.mode}layout(t){this.dispatch("layout-refreshing"),q.modes[this.mode].call(this,this.table.columnManager.columnsByIndex,t),this.dispatch("layout-refreshed")}}q.moduleName="layout";q.modes=r7;var l7={default:{groups:{item:"item",items:"items"},columns:{},data:{loading:"Loading",error:"Error"},pagination:{page_size:"Page Size",page_title:"Show Page",first:"First",first_title:"First Page",last:"Last",last_title:"Last Page",prev:"Prev",prev_title:"Prev Page",next:"Next",next_title:"Next Page",all:"All",counter:{showing:"Showing",of:"of",rows:"rows",pages:"pages"}},headerFilters:{default:"filter column...",columns:{}}}};class Q extends M{constructor(t){super(t),this.locale="default",this.lang=!1,this.bindings={},this.langList={},this.registerTableOption("locale",!1),this.registerTableOption("langs",{})}initialize(){this.langList=C.deepClone(Q.langs),this.table.options.columnDefaults.headerFilterPlaceholder!==!1&&this.setHeaderFilterPlaceholder(this.table.options.columnDefaults.headerFilterPlaceholder);for(let t in this.table.options.langs)this.installLang(t,this.table.options.langs[t]);this.setLocale(this.table.options.locale),this.registerTableFunction("setLocale",this.setLocale.bind(this)),this.registerTableFunction("getLocale",this.getLocale.bind(this)),this.registerTableFunction("getLang",this.getLang.bind(this))}setHeaderFilterPlaceholder(t){this.langList.default.headerFilters.default=t}installLang(t,e){this.langList[t]?this._setLangProp(this.langList[t],e):this.langList[t]=e}_setLangProp(t,e){for(let i in e)t[i]&&typeof t[i]=="object"?this._setLangProp(t[i],e[i]):t[i]=e[i]}setLocale(t){t=t||"default";function e(i,s){for(var n in i)typeof i[n]=="object"?(s[n]||(s[n]={}),e(i[n],s[n])):s[n]=i[n]}if(t===!0&&navigator.language&&(t=navigator.language.toLowerCase()),t&&!this.langList[t]){let i=t.split("-")[0];this.langList[i]?(console.warn("Localization Error - Exact matching locale not found, using closest match: ",t,i),t=i):(console.warn("Localization Error - Matching locale not found, using default: ",t),t="default")}this.locale=t,this.lang=C.deepClone(this.langList.default||{}),t!="default"&&e(this.langList[t],this.lang),this.dispatchExternal("localized",this.locale,this.lang),this._executeBindings()}getLocale(t){return this.locale}getLang(t){return t?this.langList[t]:this.lang}getText(t,e){var i=e?t+"|"+e:t,s=i.split("|"),n=this._getLangElement(s,this.locale);return n||""}_getLangElement(t,e){var i=this.lang;return t.forEach(function(s){var n;i&&(n=i[s],typeof n<"u"?i=n:i=!1)}),i}bind(t,e){this.bindings[t]||(this.bindings[t]=[]),this.bindings[t].push(e),e(this.getText(t),this.lang)}_executeBindings(){for(let t in this.bindings)this.bindings[t].forEach(e=>{e(this.getText(t),this.lang)})}}Q.moduleName="localize";Q.langs=l7;class Ue extends M{constructor(t){super(t)}initialize(){this.registerTableFunction("tableComms",this.receive.bind(this))}getConnections(t){var e=[],i;return i=S.lookupTable(t),i.forEach(s=>{this.table!==s&&e.push(s)}),e}send(t,e,i,s){var n=this.getConnections(t);n.forEach(o=>{o.tableComms(this.table.element,e,i,s)}),!n.length&&t&&console.warn("Table Connection Error - No tables matching selector found",t)}receive(t,e,i,s){if(this.table.modExists(e))return this.table.modules[e].commsReceived(t,i,s);console.warn("Inter-table Comms Error - no such module:",e)}}Ue.moduleName="comms";var h7=Object.freeze({__proto__:null,LayoutModule:q,LocalizeModule:Q,CommsModule:Ue});class qe{constructor(t,e){this.bindStaticFunctionality(t),this.bindModules(t,h7,!0),e&&this.bindModules(t,e)}bindStaticFunctionality(t){t.moduleBindings={},t.extendModule=function(e,i,s){if(t.moduleBindings[e]){var n=t.moduleBindings[e][i];if(n)if(typeof s=="object")for(let o in s)n[o]=s[o];else console.warn("Module Error - Invalid value type, it must be an object");else console.warn("Module Error - property does not exist:",i)}else console.warn("Module Error - module does not exist:",e)},t.registerModule=function(e){Array.isArray(e)||(e=[e]),e.forEach(i=>{t.registerModuleBinding(i)})},t.registerModuleBinding=function(e){t.moduleBindings[e.moduleName]=e},t.findTable=function(e){var i=S.lookupTable(e,!0);return Array.isArray(i)&&!i.length?!1:i},t.prototype.bindModules=function(){var e=[],i=[],s=[];this.modules={};for(var n in t.moduleBindings){let o=t.moduleBindings[n],r=new o(this);this.modules[n]=r,o.prototype.moduleCore?this.modulesCore.push(r):o.moduleInitOrder?o.moduleInitOrder<0?e.push(r):i.push(r):s.push(r)}e.sort((o,r)=>o.moduleInitOrder>r.moduleInitOrder?1:-1),i.sort((o,r)=>o.moduleInitOrder>r.moduleInitOrder?1:-1),this.modulesRegular=e.concat(s.concat(i))}}bindModules(t,e,i){var s=Object.values(e);i&&s.forEach(n=>{n.prototype.moduleCore=!0}),t.registerModule(s)}}class d7 extends k{constructor(t){super(t),this.element=this._createAlertElement(),this.msgElement=this._createMsgElement(),this.type=null,this.element.appendChild(this.msgElement)}_createAlertElement(){var t=document.createElement("div");return t.classList.add("tabulator-alert"),t}_createMsgElement(){var t=document.createElement("div");return t.classList.add("tabulator-alert-msg"),t.setAttribute("role","alert"),t}_typeClass(){return"tabulator-alert-state-"+this.type}alert(t,e="msg"){if(t){for(this.clear(),this.dispatch("alert-show",e),this.type=e;this.msgElement.firstChild;)this.msgElement.removeChild(this.msgElement.firstChild);this.msgElement.classList.add(this._typeClass()),typeof t=="function"&&(t=t()),t instanceof HTMLElement?this.msgElement.appendChild(t):this.msgElement.innerHTML=t,this.table.element.appendChild(this.element)}}clear(){this.dispatch("alert-hide",this.type),this.element.parentNode&&this.element.parentNode.removeChild(this.element),this.msgElement.classList.remove(this._typeClass())}}class N{constructor(t,e){this.options={},this.columnManager=null,this.rowManager=null,this.footerManager=null,this.alertManager=null,this.vdomHoz=null,this.externalEvents=null,this.eventBus=null,this.interactionMonitor=!1,this.browser="",this.browserSlow=!1,this.browserMobile=!1,this.rtl=!1,this.originalElement=null,this.componentFunctionBinder=new Q8(this),this.dataLoader=!1,this.modules={},this.modulesCore=[],this.modulesRegular=[],this.deprecationAdvisor=new s7(this),this.optionsList=new je(this,"table constructor"),this.initialized=!1,this.destroyed=!1,this.initializeElement(t)&&(this.initializeCoreSystems(e),setTimeout(()=>{this._create()})),S.register(this)}initializeElement(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement?(this.element=t,!0):typeof t=="string"?(this.element=document.querySelector(t),this.element?!0:(console.error("Tabulator Creation Error - no element found matching selector: ",t),!1)):(console.error("Tabulator Creation Error - Invalid element provided:",t),!1)}initializeCoreSystems(t){this.columnManager=new q8(this),this.rowManager=new K8(this),this.footerManager=new Y8(this),this.dataLoader=new t7(this),this.alertManager=new d7(this),this.bindModules(),this.options=this.optionsList.generate(N.defaultOptions,t),this._clearObjectPointers(),this._mapDeprecatedFunctionality(),this.externalEvents=new e7(this,this.options,this.options.debugEventsExternal),this.eventBus=new i7(this.options.debugEventsInternal),this.interactionMonitor=new $8(this),this.dataLoader.initialize(),this.footerManager.initialize()}_mapDeprecatedFunctionality(){}_clearSelection(){this.element.classList.add("tabulator-block-select"),window.getSelection?window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges():document.selection&&document.selection.empty(),this.element.classList.remove("tabulator-block-select")}_create(){this.externalEvents.dispatch("tableBuilding"),this.eventBus.dispatch("table-building"),this._rtlCheck(),this._buildElement(),this._initializeTable(),this._loadInitialData(),this.initialized=!0,this.externalEvents.dispatch("tableBuilt")}_rtlCheck(){var t=window.getComputedStyle(this.element);switch(this.options.textDirection){case"auto":if(t.direction!=="rtl")break;case"rtl":this.element.classList.add("tabulator-rtl"),this.rtl=!0;break;case"ltr":this.element.classList.add("tabulator-ltr");default:this.rtl=!1}}_clearObjectPointers(){this.options.columns=this.options.columns.slice(0),Array.isArray(this.options.data)&&!this.options.reactiveData&&(this.options.data=this.options.data.slice(0))}_buildElement(){var t=this.element,e=this.options,i;if(t.tagName==="TABLE"){this.originalElement=this.element,i=document.createElement("div");var s=t.attributes;for(var n in s)typeof s[n]=="object"&&i.setAttribute(s[n].name,s[n].value);t.parentNode.replaceChild(i,t),this.element=t=i}for(t.classList.add("tabulator"),t.setAttribute("role","grid");t.firstChild;)t.removeChild(t.firstChild);e.height&&(e.height=isNaN(e.height)?e.height:e.height+"px",t.style.height=e.height),e.minHeight!==!1&&(e.minHeight=isNaN(e.minHeight)?e.minHeight:e.minHeight+"px",t.style.minHeight=e.minHeight),e.maxHeight!==!1&&(e.maxHeight=isNaN(e.maxHeight)?e.maxHeight:e.maxHeight+"px",t.style.maxHeight=e.maxHeight)}_initializeTable(){var t=this.element,e=this.options;this.interactionMonitor.initialize(),this.columnManager.initialize(),this.rowManager.initialize(),this._detectBrowser(),this.modulesCore.forEach(i=>{i.initialize()}),t.appendChild(this.columnManager.getElement()),t.appendChild(this.rowManager.getElement()),e.footerElement&&this.footerManager.activate(),e.autoColumns&&e.data&&this.columnManager.generateColumnsFromRowData(this.options.data),this.modulesRegular.forEach(i=>{i.initialize()}),this.columnManager.setColumns(e.columns),this.eventBus.dispatch("table-built")}_loadInitialData(){this.dataLoader.load(this.options.data),this.columnManager.verticalAlignHeaders()}destroy(){var t=this.element;for(this.destroyed=!0,S.deregister(this),this.eventBus.dispatch("table-destroy"),this.rowManager.destroy();t.firstChild;)t.removeChild(t.firstChild);t.classList.remove("tabulator"),this.externalEvents.dispatch("tableDestroyed")}_detectBrowser(){var t=navigator.userAgent||navigator.vendor||window.opera;t.indexOf("Trident")>-1?(this.browser="ie",this.browserSlow=!0):t.indexOf("Edge")>-1?(this.browser="edge",this.browserSlow=!0):t.indexOf("Firefox")>-1?(this.browser="firefox",this.browserSlow=!1):t.indexOf("Mac OS")>-1?(this.browser="safari",this.browserSlow=!1):(this.browser="other",this.browserSlow=!1),this.browserMobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(t.slice(0,4))}initGuard(t,e){var i,s;return this.options.debugInitialization&&!this.initialized&&(t||(i=new Error().stack.split(`
`),s=i[0]=="Error"?i[2]:i[1],s[0]==" "?t=s.trim().split(" ")[1].split(".")[1]:t=s.trim().split("@")[0]),console.warn("Table Not Initialized - Calling the "+t+" function before the table is initialized may result in inconsistent behavior, Please wait for the `tableBuilt` event before calling this function."+(e?" "+e:""))),this.initialized}blockRedraw(){this.initGuard(),this.eventBus.dispatch("redraw-blocking"),this.rowManager.blockRedraw(),this.columnManager.blockRedraw(),this.eventBus.dispatch("redraw-blocked")}restoreRedraw(){this.initGuard(),this.eventBus.dispatch("redraw-restoring"),this.rowManager.restoreRedraw(),this.columnManager.restoreRedraw(),this.eventBus.dispatch("redraw-restored")}setData(t,e,i){return this.initGuard(!1,"To set initial data please use the 'data' property in the table constructor."),this.dataLoader.load(t,e,i,!1)}clearData(){this.initGuard(),this.dataLoader.blockActiveLoad(),this.rowManager.clearData()}getData(t){return this.rowManager.getData(t)}getDataCount(t){return this.rowManager.getDataCount(t)}replaceData(t,e,i){return this.initGuard(),this.dataLoader.load(t,e,i,!0,!0)}updateData(t){var e=0;return this.initGuard(),new Promise((i,s)=>{this.dataLoader.blockActiveLoad(),typeof t=="string"&&(t=JSON.parse(t)),t&&t.length>0?t.forEach(n=>{var o=this.rowManager.findRow(n[this.options.index]);o?(e++,o.updateData(n).then(()=>{e--,e||i()}).catch(r=>{s("Update Error - Unable to update row",n,r)})):s("Update Error - Unable to find row",n)}):(console.warn("Update Error - No data provided"),s("Update Error - No data provided"))})}addData(t,e,i){return this.initGuard(),new Promise((s,n)=>{this.dataLoader.blockActiveLoad(),typeof t=="string"&&(t=JSON.parse(t)),t?this.rowManager.addRows(t,e,i).then(o=>{var r=[];o.forEach(function(l){r.push(l.getComponent())}),s(r)}):(console.warn("Update Error - No data provided"),n("Update Error - No data provided"))})}updateOrAddData(t){var e=[],i=0;return this.initGuard(),new Promise((s,n)=>{this.dataLoader.blockActiveLoad(),typeof t=="string"&&(t=JSON.parse(t)),t&&t.length>0?t.forEach(o=>{var r=this.rowManager.findRow(o[this.options.index]);i++,r?r.updateData(o).then(()=>{i--,e.push(r.getComponent()),i||s(e)}):this.rowManager.addRows(o).then(l=>{i--,e.push(l[0].getComponent()),i||s(e)})}):(console.warn("Update Error - No data provided"),n("Update Error - No data provided"))})}getRow(t){var e=this.rowManager.findRow(t);return e?e.getComponent():(console.warn("Find Error - No matching row found:",t),!1)}getRowFromPosition(t){var e=this.rowManager.getRowFromPosition(t);return e?e.getComponent():(console.warn("Find Error - No matching row found:",t),!1)}deleteRow(t){var e=[];this.initGuard(),Array.isArray(t)||(t=[t]);for(let i of t){let s=this.rowManager.findRow(i,!0);if(s)e.push(s);else return console.error("Delete Error - No matching row found:",i),Promise.reject("Delete Error - No matching row found")}return e.sort((i,s)=>this.rowManager.rows.indexOf(i)>this.rowManager.rows.indexOf(s)?1:-1),e.forEach(i=>{i.delete()}),this.rowManager.reRenderInPosition(),Promise.resolve()}addRow(t,e,i){return this.initGuard(),typeof t=="string"&&(t=JSON.parse(t)),this.rowManager.addRows(t,e,i,!0).then(s=>s[0].getComponent())}updateOrAddRow(t,e){var i=this.rowManager.findRow(t);return this.initGuard(),typeof e=="string"&&(e=JSON.parse(e)),i?i.updateData(e).then(()=>i.getComponent()):this.rowManager.addRows(e).then(s=>s[0].getComponent())}updateRow(t,e){var i=this.rowManager.findRow(t);return this.initGuard(),typeof e=="string"&&(e=JSON.parse(e)),i?i.updateData(e).then(()=>Promise.resolve(i.getComponent())):(console.warn("Update Error - No matching row found:",t),Promise.reject("Update Error - No matching row found"))}scrollToRow(t,e,i){var s=this.rowManager.findRow(t);return s?this.rowManager.scrollToRow(s,e,i):(console.warn("Scroll Error - No matching row found:",t),Promise.reject("Scroll Error - No matching row found"))}moveRow(t,e,i){var s=this.rowManager.findRow(t);this.initGuard(),s?s.moveToRow(e,i):console.warn("Move Error - No matching row found:",t)}getRows(t){return this.rowManager.getComponents(t)}getRowPosition(t){var e=this.rowManager.findRow(t);return e?e.getPosition():(console.warn("Position Error - No matching row found:",t),!1)}setColumns(t){this.initGuard(!1,"To set initial columns please use the 'columns' property in the table constructor"),this.columnManager.setColumns(t)}getColumns(t){return this.columnManager.getComponents(t)}getColumn(t){var e=this.columnManager.findColumn(t);return e?e.getComponent():(console.warn("Find Error - No matching column found:",t),!1)}getColumnDefinitions(){return this.columnManager.getDefinitionTree()}showColumn(t){var e=this.columnManager.findColumn(t);if(this.initGuard(),e)e.show();else return console.warn("Column Show Error - No matching column found:",t),!1}hideColumn(t){var e=this.columnManager.findColumn(t);if(this.initGuard(),e)e.hide();else return console.warn("Column Hide Error - No matching column found:",t),!1}toggleColumn(t){var e=this.columnManager.findColumn(t);if(this.initGuard(),e)e.visible?e.hide():e.show();else return console.warn("Column Visibility Toggle Error - No matching column found:",t),!1}addColumn(t,e,i){var s=this.columnManager.findColumn(i);return this.initGuard(),this.columnManager.addColumn(t,e,s).then(n=>n.getComponent())}deleteColumn(t){var e=this.columnManager.findColumn(t);return this.initGuard(),e?e.delete():(console.warn("Column Delete Error - No matching column found:",t),Promise.reject())}updateColumnDefinition(t,e){var i=this.columnManager.findColumn(t);return this.initGuard(),i?i.updateDefinition(e):(console.warn("Column Update Error - No matching column found:",t),Promise.reject())}moveColumn(t,e,i){var s=this.columnManager.findColumn(t),n=this.columnManager.findColumn(e);this.initGuard(),s?n?this.columnManager.moveColumn(s,n,i):console.warn("Move Error - No matching column found:",n):console.warn("Move Error - No matching column found:",t)}scrollToColumn(t,e,i){return new Promise((s,n)=>{var o=this.columnManager.findColumn(t);return o?this.columnManager.scrollToColumn(o,e,i):(console.warn("Scroll Error - No matching column found:",t),Promise.reject("Scroll Error - No matching column found"))})}redraw(t){this.initGuard(),this.columnManager.redraw(t),this.rowManager.redraw(t)}setHeight(t){this.options.height=isNaN(t)?t:t+"px",this.element.style.height=this.options.height,this.rowManager.initializeRenderer(),this.rowManager.redraw(!0)}on(t,e){this.externalEvents.subscribe(t,e)}off(t,e){this.externalEvents.unsubscribe(t,e)}dispatchEvent(){var t=Array.from(arguments);t.shift(),this.externalEvents.dispatch(...arguments)}alert(t,e){this.initGuard(),this.alertManager.alert(t,e)}clearAlert(){this.initGuard(),this.alertManager.clear()}modExists(t,e){return this.modules[t]?!0:(e&&console.error("Tabulator Module Not Installed: "+t),!1)}module(t){var e=this.modules[t];return e||console.error("Tabulator module not installed: "+t),e}}N.defaultOptions=Z8;new qe(N);class c7 extends N{}new qe(c7,G8);export{c7 as T,g7 as c,u7 as i};
