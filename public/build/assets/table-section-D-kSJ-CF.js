import{u as s,j as t,h as e}from"./app-4zaeLUIG.js";import l from"./update-section--agrLw1R.js";import n from"./delete-section-BUrEjthB.js";import{T as d,a as c,b as x,c as m,d as r,e as h}from"./TableRow-TM8vObMc.js";import{P as j}from"./Paper-Dg8SvZFW.js";import"./department-thunk-CfOpleu3.js";import"./Snackbar-BiRA8y8c.js";import"./DefaultPropsProvider-KEunUbnd.js";import"./useSlot-DCW9KenC.js";import"./resolveComponentProps-66Eu5LAc.js";import"./ButtonBase-DLXIb26o.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-BA_QHjjU.js";import"./IconButton-Ck6aPjQ-.js";import"./useTheme-pStYO19w.js";import"./useSlotProps-Dr7-rmYK.js";import"./Modal-BEimG7iS.js";import"./ownerWindow-6z4QwRpV.js";import"./utils-Cxt2Du0-.js";import"./Grow-BENwxKdU.js";import"./Edit-C8HmKYwz.js";import"./Drawer-DGze2q5f.js";import"./index-CQObzbwy.js";import"./Slide-DMVtGXjE.js";import"./debounce-Be36O1Ab.js";import"./Box-DtzXDXe-.js";import"./extendSxProp-CCFeVLg-.js";import"./TextField-BOC8-Ijy.js";import"./Select-nmPnboQC.js";import"./InputBase-Dbncs1Sn.js";import"./isHostComponent-DVu5iVWx.js";import"./index-DfeEFFw8.js";import"./Popover-D_v2rG0t.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-DjFGmbVV.js";import"./useId-BL6g8VD4.js";import"./CircularProgress-C34daSCh.js";import"./Delete-CeZ-2yCz.js";import"./Typography-CWneYVd9.js";function ot(){const{departments:i}=s(o=>o.department);return console.log("departments",i),t.jsx(d,{component:j,children:t.jsxs(c,{sx:{minWidth:650},"aria-label":"simple table",children:[t.jsx(x,{children:t.jsxs(m,{children:[t.jsx(r,{children:"Employee ID"}),t.jsx(r,{children:"Created At"}),t.jsx(r,{children:"Action"})]})}),t.jsx(h,{children:i==null?void 0:i.data.map((o,p)=>{const a=e(o.dob,"YYYY-MM-DD");return e().diff(a,"years"),t.jsxs(m,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[t.jsx(r,{component:"th",scope:"row",children:o.name}),t.jsx(r,{children:e(o.created_at).format("LL")}),t.jsx(r,{children:t.jsxs("div",{className:"flex gap-2",children:[t.jsx(l,{data:o}),t.jsx(n,{data:o})]})})]},p)})})]})})}export{ot as default};