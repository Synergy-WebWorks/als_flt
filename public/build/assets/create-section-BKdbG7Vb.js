import{r,u as C,j as t,s as u}from"./app-y1rag3B6.js";import{s as v,g as S}from"./sections-thunk-DGFMM3Hf.js";import{S as w,A as b}from"./Snackbar-D72C-FYl.js";import{B as d}from"./Modal-DMjM8gUU.js";import{D as y}from"./Drawer-SwpFR5tR.js";import{B as k}from"./Box-CVwlxSgh.js";import{T as N}from"./TextField-IUTJTyXb.js";import{C as D}from"./CircularProgress-CDV3ypm1.js";import"./DefaultPropsProvider-P21UKgst.js";import"./useSlot-r7Uep_YH.js";import"./resolveComponentProps-CpSXl1wZ.js";import"./ButtonBase-uIdGj_ea.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-RHsXJ-LT.js";import"./Paper-B6ertVN0.js";import"./useTheme-BexII04O.js";import"./IconButton-UbLo4pOA.js";import"./useSlotProps-DomT0ugK.js";import"./ownerWindow-6z4QwRpV.js";import"./Grow-D5gwgent.js";import"./utils-BkrdOhea.js";import"./index-H7D3G1rN.js";import"./Slide-CWF9xhAv.js";import"./debounce-Be36O1Ab.js";import"./extendSxProp-Do5N4VLF.js";import"./Select-DGqrL5LK.js";import"./InputBase-DJkSRKF7.js";import"./isHostComponent-DVu5iVWx.js";import"./index-uQOUMjJ8.js";import"./Popover-CkagVUBg.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-CmTtYR0b.js";import"./useId-BU7uB5fp.js";function nt(){const[x,i]=r.useState(!1),[n,a]=r.useState(!1),[l,h]=r.useState({semester:"1st Semester"}),[s,m]=r.useState({}),[j,c]=r.useState(!1);C(e=>e.sections);const p=e=>()=>{i(e)};async function g(e){a(!0);const o=await u.dispatch(v(l));o.status==200?(await u.dispatch(S()),c(!0),m({}),a(!1)):(a(!1),m(o.response.data.errors))}const f=(e,o)=>{o!=="clickaway"&&(c(!1),i(!1))};return t.jsxs("div",{children:[t.jsx(w,{open:j,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:f,children:t.jsx(b,{onClose:f,severity:"success",variant:"filled",sx:{width:"100%"},children:"Successfully Created!"})}),t.jsx(d,{variant:"contained",onClick:p(!0),children:"Create sections"}),t.jsx(y,{anchor:"right",open:x,onClose:p(!1),children:t.jsx(k,{className:"w-[500px] h-full flex",role:"presentation",children:t.jsxs("div",{className:"pt-20 px-3 w-full flex flex-col items-center justify-between pb-5",children:[t.jsxs("div",{className:"flex flex-col gap-3  w-full",children:[t.jsx("div",{className:"text-2xl font-black",children:"Create sections"}),t.jsx(N,{onChange:e=>h({...l,[e.target.name]:e.target.value}),error:!!(s!=null&&s.name),helperText:(s==null?void 0:s.name)??"",name:"name",type:"text",id:"outlined-basic",label:"Name of sections",variant:"outlined"})]}),t.jsx(d,{onClick:g,disabled:n,variant:"contained",className:" w-full",children:n?t.jsx(D,{size:24,color:"inherit"}):"Submit"})]})})})]})}export{nt as default};