import{d as _,a5 as u,A as h,f as s,g as t,t as o,U as c,F as f,ak as g,o as a,i as v,e as x,ae as b}from"../modules/vue-DfO42fcw.js";import{a as k,u as y,o as d}from"../index-Dx0mw1cF.js";import{_ as N}from"./NoteDisplay.vue_vue_type_style_index_0_lang-NDt9SCqW.js";import"../modules/shiki-00tX9yRG.js";const w={id:"page-root"},L={class:"m-4"},T={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},H={class:"text-lg"},S={class:"font-bold flex gap-2"},A={class:"opacity-50"},C={key:0,class:"border-main mb-8"},z=_({__name:"print",setup(D){const{slides:m,total:p}=k();u(`
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
`),y({title:`Notes - ${d.title}`});const i=h(()=>m.value.map(e=>e.meta?.slide).filter(e=>e!==void 0&&e.noteHTML!==""));return(e,n)=>(a(),s("div",w,[t("div",L,[t("div",T,[t("h1",V,o(c(d).title),1),t("div",B,o(new Date().toLocaleString()),1)]),(a(!0),s(f,null,g(i.value,(l,r)=>(a(),s("div",{key:r,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",H,[t("div",S,[t("div",A,o(l?.no)+"/"+o(c(p)),1),b(" "+o(l?.title)+" ",1),n[0]||(n[0]=t("div",{class:"flex-auto"},null,-1))])]),x(N,{"note-html":l.noteHTML,class:"max-w-full"},null,8,["note-html"])]),r<i.value.length-1?(a(),s("hr",C)):v("v-if",!0)]))),128))])]))}});export{z as default};
