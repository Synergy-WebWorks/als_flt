import{r as n,u as C,j as a,s as x}from"./app-omUNyjzv.js";import{a as w,g as y}from"./instructor-thunk-C8Dy3NEe.js";import{S,A as _}from"./Snackbar-Dz7gOaef.js";import{B as h}from"./Modal-CNH0lrZ1.js";import{D}from"./Drawer-WCcvh9I0.js";import{B as N}from"./Box-RdddCxhl.js";import{T as r}from"./TextField-iCpMh_rU.js";import{F as k,I as T,S as I}from"./Select-hxIEynWP.js";import{M as E}from"./MenuItem-DLz4QJDp.js";import{C as F}from"./CircularProgress-5SrN-7rm.js";import"./user-service-CmNewI5Z.js";import"./DefaultPropsProvider-VQKvwWmR.js";import"./useSlot-BJX2j-m7.js";import"./resolveComponentProps-CyQwpA92.js";import"./ButtonBase-DgU_byNd.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-QzAHz-7Z.js";import"./Paper-D9NQaLyB.js";import"./useTheme-DFbGCw3n.js";import"./IconButton-C1HpFZye.js";import"./useSlotProps-COFXV-j8.js";import"./ownerWindow-6z4QwRpV.js";import"./Grow-iQ_WIjqf.js";import"./utils-tDi9NdlV.js";import"./index-CQAXQtBe.js";import"./Slide-h9ROQ5uP.js";import"./debounce-Be36O1Ab.js";import"./extendSxProp-Dir5kXy-.js";import"./useId-DFXX_8az.js";import"./InputBase-DF531pHd.js";import"./isHostComponent-DVu5iVWx.js";import"./index-CuTuWY8S.js";import"./Popover-DfKuNKZD.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-Dy34LR35.js";import"./listItemTextClasses-jPZP3obW.js";function xe(){const[g,m]=n.useState(!1),[p,o]=n.useState(!1),[s,i]=n.useState({}),[e,c]=n.useState({}),[j,d]=n.useState(!1),{departments:v}=C(t=>t.department),u=t=>()=>{m(t)};async function b(t){o(!0);const l=await x.dispatch(w({...s,user_type:2}));l.status==200?(await x.dispatch(y()),d(!0),c({}),o(!1)):(o(!1),c(l.response.data.errors))}const f=(t,l)=>{l!=="clickaway"&&(d(!1),m(!1))};return a.jsxs("div",{children:[a.jsx(S,{open:j,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:f,children:a.jsx(_,{onClose:f,severity:"success",variant:"filled",sx:{width:"100%"},children:"Successfully Created!"})}),a.jsx(h,{variant:"contained",onClick:u(!0),children:"Create Instructor"}),a.jsx(D,{anchor:"right",open:g,onClose:u(!1),children:a.jsx(N,{className:"w-[500px] h-full flex",role:"presentation",children:a.jsxs("div",{className:"pt-20 px-3 w-full flex flex-col items-center justify-between pb-5",children:[a.jsxs("div",{className:"flex flex-col gap-3  w-full",children:[a.jsx("div",{className:"text-2xl font-black",children:"Create Instructor"}),a.jsx(r,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.user_id),helperText:(e==null?void 0:e.user_id)??"",name:"user_id",type:"text",id:"outlined-basic",label:"Employee ID",variant:"outlined"}),a.jsx(r,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.fname),helperText:(e==null?void 0:e.fname)??"",name:"fname",type:"text",id:"outlined-basic",label:"First Name",variant:"outlined"}),a.jsx(r,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.lname),helperText:(e==null?void 0:e.lname)??"",name:"lname",type:"text",id:"outlined-basic",label:"Last Name",variant:"outlined"}),a.jsx(r,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.email),helperText:(e==null?void 0:e.email)??"",name:"email",type:"email",id:"outlined-basic",label:"Email",variant:"outlined"}),a.jsx(r,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.password),helperText:(e==null?void 0:e.password)??"",name:"password",type:"password",id:"outlined-basic",label:"Password",variant:"outlined"}),a.jsxs(k,{fullWidth:!0,children:[a.jsx(T,{id:"demo-simple-select-label",children:"Department"}),a.jsx(I,{id:"demo-simple-select",name:"department_id",label:"Department",onChange:t=>i({...s,[t.target.name]:t.target.value}),children:v.data.map((t,l)=>a.jsx(E,{value:t.id,children:t.name},l))})]})]}),a.jsx(h,{onClick:b,disabled:p,variant:"contained",className:" w-full",children:p?a.jsx(F,{size:24,color:"inherit"}):"Submit"})]})})})]})}export{xe as default};