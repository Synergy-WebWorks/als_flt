import{u as n,j as i,h as e,y as l}from"./app-y1rag3B6.js";import d from"./update-section-CybFyyYV.js";import c from"./delete-section-CNGjEznk.js";import{T as x,a as h,b as j,c as a,d as r,e as b}from"./TableRow-eFfGQjZI.js";import{P as f}from"./Paper-B6ertVN0.js";import{B as u}from"./Modal-DMjM8gUU.js";import{V as T}from"./Visibility-CgT6xgeg.js";import"./instructor-thunk-C94WH99-.js";import"./user-service-C_KQRdHW.js";import"./Snackbar-D72C-FYl.js";import"./DefaultPropsProvider-P21UKgst.js";import"./useSlot-r7Uep_YH.js";import"./resolveComponentProps-CpSXl1wZ.js";import"./ButtonBase-uIdGj_ea.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-RHsXJ-LT.js";import"./IconButton-UbLo4pOA.js";import"./useTheme-BexII04O.js";import"./useSlotProps-DomT0ugK.js";import"./ownerWindow-6z4QwRpV.js";import"./Grow-D5gwgent.js";import"./utils-BkrdOhea.js";import"./Edit-iRrXrL6X.js";import"./Drawer-SwpFR5tR.js";import"./index-H7D3G1rN.js";import"./Slide-CWF9xhAv.js";import"./debounce-Be36O1Ab.js";import"./Box-CVwlxSgh.js";import"./extendSxProp-Do5N4VLF.js";import"./TextField-IUTJTyXb.js";import"./Select-DGqrL5LK.js";import"./InputBase-DJkSRKF7.js";import"./isHostComponent-DVu5iVWx.js";import"./index-uQOUMjJ8.js";import"./Popover-CkagVUBg.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-CmTtYR0b.js";import"./useId-BU7uB5fp.js";import"./MenuItem-BK0SHxeh.js";import"./listItemTextClasses-DDQJR2be.js";import"./CircularProgress-CDV3ypm1.js";import"./Delete-DHMIWhbD.js";import"./Typography-DzGpmCc3.js";function ni(){const{instructors:o}=n(t=>t.instructors);return i.jsx(x,{component:f,children:i.jsxs(h,{sx:{minWidth:650},"aria-label":"simple table",children:[i.jsx(j,{children:i.jsxs(a,{children:[i.jsx(r,{children:"Employee ID"}),i.jsx(r,{children:"Firstname"}),i.jsx(r,{children:"Lastname"}),i.jsx(r,{children:"Email"}),i.jsx(r,{children:"Department"}),i.jsx(r,{children:"Action"})]})}),i.jsx(b,{children:o==null?void 0:o.data.map((t,s)=>{var m;const p=e(t.dob,"YYYY-MM-DD");return e().diff(p,"years"),i.jsxs(a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[i.jsx(r,{component:"th",scope:"row",children:t.user_id}),i.jsx(r,{children:t.fname}),i.jsx(r,{children:t.lname}),i.jsx(r,{children:t.email}),i.jsx(r,{children:((m=t==null?void 0:t.department)==null?void 0:m.name)??""}),i.jsx(r,{children:i.jsxs("div",{className:"flex gap-2",children:[i.jsx(d,{data:t}),i.jsx(c,{data:t}),i.jsx(u,{onClick:()=>l.visit(`/administrator/instructor/${t.user_id}/create_grades`),size:"small",variant:"contained",color:"success",children:i.jsx(T,{})})]})})]},s)})})]})})}export{ni as default};