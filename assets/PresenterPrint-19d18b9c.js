import{d,i as _,a as p,u as h,b as u,c as m,e as f,f as n,g as t,t as o,h as a,F as v,r as g,n as x,j as y,o as l,k as b,l as N,m as k,p as P,q as w,_ as S}from"./index-65a14477.js";import{N as T}from"./NoteDisplay-39594d62.js";const V={class:"m-4"},j={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},C={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},z=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=d({__name:"PresenterPrint",setup(q){_(p),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${m.title}`});const r=f(()=>y.slice(0,-1).map(s=>{var i;return(i=s.meta)==null?void 0:i.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,i)=>(l(),n("div",{id:"page-root",style:x(a(w))},[t("div",V,[t("div",j,[t("h1",L,o(a(m).title),1),t("div",B,o(new Date().toLocaleString()),1)]),(l(!0),n(v,null,g(a(r),(e,c)=>(l(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",D,[t("div",H,o(e==null?void 0:e.no)+"/"+o(a(b)),1),N(" "+o(e==null?void 0:e.title)+" ",1),z])]),k(T,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(r).length-1?(l(),n("hr",F)):P("v-if",!0)]))),128))])],4))}}),R=S(M,[["__file","/Users/xy/dev/Ts/slidev/node_modules/.pnpm/@slidev+client@0.40.16_postcss@8.4.31_vite@4.5.0/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};
