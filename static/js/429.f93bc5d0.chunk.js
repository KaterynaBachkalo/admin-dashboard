"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[429],{5738:(e,s,a)=>{a.d(s,{A:()=>c});const l="FilterForm_wrap__dKOTC",t="FilterForm_icon__23iPD",n="FilterForm_input__NJviq",r="FilterForm_button__2yayb";var d=a(4858),i=a(7713),o=a(579);const c=e=>{let{setSearchQuery:s,placeholder:a}=e;const{register:c,handleSubmit:u}=(0,d.mN)(),m=e=>{s(e.name)};return(0,o.jsx)("form",{onSubmit:u(m),children:(0,o.jsxs)("div",{className:l,children:[(0,o.jsx)("input",{...c("name"),className:n,placeholder:a,onBlur:()=>{u(m)()}}),(0,o.jsxs)("button",{type:"submit",className:r,children:[(0,o.jsx)("div",{className:t,children:(0,o.jsx)(i.A,{name:"filter",width:14,height:14})}),"Filter"]})]})})}},4229:(e,s,a)=>{a.d(s,{A:()=>h});var l=a(5043),t=a(7950);const n="Modal_backdrop__xTnIT",r="Modal_container__Ha+Ky",d="Modal_modal__DJDMv",i="Modal_btnClose__oHdcJ",o="Modal_title__3HkNf",c=(e,s,a)=>{(0,l.useEffect)((()=>{const a=s=>{"Escape"===s.code&&e(!1)},l=a=>{s.current&&!s.current.contains(a.target)&&e(!1)};return window.addEventListener("keydown",a),document.addEventListener("mousedown",l),document.body.classList.add("body-scroll-lock"),()=>{window.removeEventListener("keydown",a),document.removeEventListener("mousedown",l),document.body.classList.remove("body-scroll-lock")}}),[e,s,a])};var u=a(7713),m=a(579);const p=document.querySelector("#root-modal"),h=e=>{let{onClose:s,children:a,title:h}=e;const _=(0,l.useRef)(null);return c(s,_),p&&(0,t.createPortal)((0,m.jsx)("div",{className:n,children:(0,m.jsx)("div",{className:r,children:(0,m.jsxs)("div",{className:d,ref:_,onClick:e=>e.stopPropagation(),children:[(0,m.jsx)("button",{className:i,onClick:()=>s(!1),children:(0,m.jsx)(u.A,{name:"close",width:24,height:24})}),(0,m.jsx)("div",{className:o,children:h}),(0,m.jsx)("div",{children:a})]})})}),p)}},7240:(e,s,a)=>{a.d(s,{A:()=>d});const l="RenderPaginationDots_pagination__HG7kX",t="RenderPaginationDots_dot__MjI2h",n="RenderPaginationDots_activeDot__xOgyA";var r=a(579);const d=e=>{let{currentPage:s,total:a,handlePageChange:d}=e;const i=Math.ceil(a/5),o=[],c=Math.floor(2.5);let u=Math.max(1,s-c),m=Math.min(i,s+c);s<=c?m=Math.min(i,5):s>i-c&&(u=Math.max(1,i-5+1));for(let l=u;l<=m;l++)o.push((0,r.jsx)("button",{onClick:()=>d(l),className:"".concat(t," ").concat(s===l?n:"")},l));return u>1&&(o.unshift((0,r.jsx)("span",{children:"..."},"startEllipsis")),o.unshift((0,r.jsx)("button",{onClick:()=>d(1),className:"".concat(t," ").concat(1===s?n:"")},1))),m<i&&(o.push((0,r.jsx)("span",{children:"..."},"endEllipsis")),o.push((0,r.jsx)("button",{onClick:()=>d(i),className:"".concat(t," ").concat(s===i?n:"")},i))),(0,r.jsx)("div",{className:l,children:o})}},4782:(e,s,a)=>{a.r(s),a.d(s,{default:()=>he});var l=a(5043),t=a(7170),n=a(5738);const r="AddNewSupplier_button__d3IGa";var d=a(4229),i=(a(6097),a(6726)),o=a(7713),c=a(4858),u=a(8403),m=a(899);const p="Dropdown_dropDown__ZVp5f",h="Dropdown_list__ga3Hp",_="Dropdown_stat__RbQB7";var j=a(6962),v=a(579);const x=l.forwardRef(((e,s)=>{let{onSelect:a,onClose:t}=e;const n=(0,l.useRef)(null);return(0,j.A)(t,n,s),(0,v.jsx)("div",{className:p,ref:n,children:(0,v.jsx)("ul",{className:h,children:["Active","Deactive"].map((e=>(0,v.jsx)("li",{onClick:()=>{a(e)},className:_,children:e},e)))})})})),N="AddNewSupplierModal_wrap__V+wOy",g="AddNewSupplierModal_inputWrap__IxVCM",S="AddNewSupplierModal_input__OLvYr",b="AddNewSupplierModal_errormessage__AIkKV",f="AddNewSupplierModal_iconChevron__lEUnL",A="AddNewSupplierModal_buttonWrap__W3odG",w="AddNewSupplierModal_buttonAdd__bR6Sj",C="AddNewSupplierModal_buttonCancel__1zpgK",y="AddNewSupplierModal_calendar__1KLPG",M="AddNewSupplierModal_tile__naLTt",k="AddNewSupplierModal_label__Ay5o3",E="AddNewSupplierModal_iconCalendar__V0gU-";var q=a(3003),D=a(1525);const L=e=>{var s,a,t,n,r,d;let{onClose:p,onAddSupplier:h}=e;const[_,L]=(0,l.useState)(!1),[R,T]=(0,l.useState)(""),[I,F]=(0,l.useState)(!1),[K,Y]=(0,l.useState)(null),P=(0,q.d4)(D.ix),V=null===K||void 0===K?void 0:K.toString(),H=null===V||void 0===V?void 0:V.split(" ").slice(1,4),W=H&&["".concat(H[0]," ").concat(H[1]),H[2]],Q=null===W||void 0===W?void 0:W.join(", "),U=(0,l.useRef)(null),z=(0,l.useRef)(null),G=(0,l.useRef)(null),B=m.Ik({name:m.Yj().required("Suppliers Info is required"),address:m.Yj().required("Address is required"),suppliers:m.Yj().required("Company is required"),date:m.Yj().required("Date is required"),amount:m.ai().required("Ammount is required and must be a number"),status:m.Yj().required("Status is required")}).required(),{register:X,handleSubmit:O,control:J,setValue:Z,formState:{errors:$}}=(0,c.mN)({resolver:(0,u.t)(B)});return(0,l.useEffect)((()=>{Z("status",R),Q&&Z("date",Q)}),[R,Q,Z]),(0,j.A)(F,G,z),(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("form",{onSubmit:O((e=>{const s={id:P[0].id+1,name:e.name,address:e.address,suppliers:e.suppliers,date:e.date,amount:"\u09f3 ".concat(e.amount.toString()),status:e.status};h(s),p()})),children:[(0,v.jsxs)("div",{className:N,children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("input",{...X("name"),className:S,placeholder:"Suppliers Info"}),(0,v.jsx)("p",{className:b,children:null===(s=$.name)||void 0===s?void 0:s.message})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("input",{...X("address"),className:S,placeholder:"Address"}),(0,v.jsx)("p",{className:b,children:null===(a=$.address)||void 0===a?void 0:a.message})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("input",{...X("suppliers"),className:S,placeholder:"Company"}),(0,v.jsx)("p",{className:b,children:null===(t=$.suppliers)||void 0===t?void 0:t.message})]}),(0,v.jsxs)("div",{className:g,children:[(0,v.jsx)(c.xI,{name:"date",control:J,render:e=>{let{field:s}=e;return(0,v.jsx)("input",{...s,className:S,placeholder:"Delivery date",value:Q})}}),!Q&&(0,v.jsx)("p",{className:b,children:null===(n=$.date)||void 0===n?void 0:n.message}),(0,v.jsx)("div",{className:E,onClick:()=>F(!I),ref:z,children:(0,v.jsx)(o.A,{name:"calendar",width:16,height:16})}),I&&(0,v.jsx)("div",{ref:G,children:(0,v.jsx)(i.Ay,{onChange:e=>{Y(e),F(!1)},value:Q,locale:"en-US",className:y,tileClassName:M,navigationLabel:e=>{let{label:s}=e;return(0,v.jsx)("span",{className:k,children:s})},formatShortWeekday:(e,s)=>s.toLocaleDateString(e,{weekday:"short"}).substring(0,2),minDate:new Date})})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)(c.xI,{name:"amount",control:J,render:e=>{let{field:s}=e;return(0,v.jsx)("input",{...s,className:S,placeholder:"Amount",type:"number",onChange:e=>{const a=e.target.value.replace(",",".");s.onChange(a)}})}}),(0,v.jsx)("p",{className:b,children:null===(r=$.amount)||void 0===r?void 0:r.message})]}),(0,v.jsxs)("div",{className:g,children:[(0,v.jsx)(c.xI,{name:"status",control:J,render:e=>{let{field:s}=e;return(0,v.jsx)("input",{...s,className:S,placeholder:"Status",value:R,onChange:e=>T(e.target.value)})}}),!R&&(0,v.jsx)("p",{className:b,children:null===(d=$.status)||void 0===d?void 0:d.message}),(0,v.jsx)("div",{className:f,onClick:()=>L(!_),ref:U,children:(0,v.jsx)(o.A,{name:"chevron-down",width:16,height:16})}),_&&(0,v.jsx)(x,{onSelect:e=>{T(e),L(!1)},onClose:L,ref:U})]})]}),(0,v.jsxs)("div",{className:A,children:[(0,v.jsx)("button",{type:"submit",className:w,children:"Add"}),(0,v.jsx)("button",{type:"button",className:C,onClick:p,children:"Cancel"})]})]})})},R=e=>{let{onAddSupplier:s}=e;const[a,t]=(0,l.useState)(!1),n=()=>{t(!1)};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("button",{className:r,onClick:()=>t(!0),children:"Add a new suppliers"}),a&&(0,v.jsx)(d.A,{onClose:n,title:"Add a new supplier",children:(0,v.jsx)(L,{onClose:n,onAddSupplier:s})})]})};var T=a(8931),I=a(7111);const F="AllSuppliersTable_table__oNX8f",K="AllSuppliersTable_header__edyYm",Y="AllSuppliersTable_subheader__es9F8",P="AllSuppliersTable_row__8epUH",V="AllSuppliersTable_noResults__o4Xr0",H="AllSuppliersTable_col-info__aYutU",W="AllSuppliersTable_col-category__nMAdV",Q="AllSuppliersTable_col-stock__TC0oL",U="AllSuppliersTable_buttonEdit__k7hGn",z="AllSuppliersTable_greenStatus__8-1RI",G="AllSuppliersTable_redStatus__+0L4+",B="EditModal_wrap__WdunL",X="EditModal_inputWrap__fq0wA",O="EditModal_input__6aNia",J="EditModal_errormessage__QEDXY",Z="EditModal_iconChevron__DKAUP",$="EditModal_iconCalendar__bBuuB",ee="EditModal_buttonWrap__ssqiW",se="EditModal_buttonSave__BGkmN",ae="EditModal_buttonCancel__3ebza",le="EditModal_calendar__MH5dc",te="EditModal_tile__oDmrg",ne="EditModal_label__F+x5p";var re=a(6886),de=a(1036);const ie=e=>{var s,a,t,n,r,d;let{data:p,onClose:h}=e;const[_,N]=(0,l.useState)(!1),[g,S]=(0,l.useState)(p.status),[b,f]=(0,l.useState)(!1),A=(0,q.wA)(),w=p.date,C=new Date(w),[y,M]=(0,l.useState)(C),k=null===y||void 0===y?void 0:y.toString(),E=null===k||void 0===k?void 0:k.split(" ").slice(1,4),D=E&&["".concat(E[0]," ").concat(E[1]),E[2]],L=null===D||void 0===D?void 0:D.join(", "),R=(0,l.useRef)(null),T=(0,l.useRef)(null),I=(0,l.useRef)(null),F=m.Ik({name:m.Yj().required("Suppliers Info is required"),address:m.Yj().required("Address is required"),suppliers:m.Yj().required("Company is required"),date:m.Yj().required("Date is required"),amount:m.ai().typeError("Ammount is required and must be a number").required(),status:m.Yj().required("Status is required")}).required(),K=Number(p.amount.split(" ").slice(1).join()),{register:Y,handleSubmit:P,control:V,setValue:H,formState:{errors:W}}=(0,c.mN)({resolver:(0,u.t)(F),defaultValues:{name:p.name,address:p.address,suppliers:p.suppliers,date:p.date,amount:K,status:p.status}});return(0,l.useEffect)((()=>{H("status",g),H("amount",K),L&&H("date",L)}),[g,H,K,L]),(0,j.A)(f,I,T),(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("form",{onSubmit:P((e=>{const s={...p,name:e.name,address:e.address,suppliers:e.suppliers,date:e.date,amount:"\u09f3 ".concat(e.amount.toString()),status:e.status},{_id:a,...l}=s;A((0,re.jf)({_id:p._id,...l})),de.oR.success("The supplier was successfully updated"),h()})),children:[(0,v.jsxs)("div",{className:B,children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("input",{...Y("name"),className:O,placeholder:"Suppliers Info"}),(0,v.jsx)("p",{className:J,children:null===(s=W.name)||void 0===s?void 0:s.message})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("input",{...Y("address"),className:O,placeholder:"Address"}),(0,v.jsx)("p",{className:J,children:null===(a=W.address)||void 0===a?void 0:a.message})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("input",{...Y("suppliers"),className:O,placeholder:"Company"}),(0,v.jsx)("p",{className:J,children:null===(t=W.suppliers)||void 0===t?void 0:t.message})]}),(0,v.jsxs)("div",{className:X,children:[(0,v.jsx)(c.xI,{name:"date",control:V,render:e=>{let{field:s}=e;return(0,v.jsx)("input",{...s,className:O,placeholder:"Delivery date",value:L})}}),(0,v.jsx)("p",{className:J,children:null===(n=W.date)||void 0===n?void 0:n.message}),(0,v.jsx)("div",{className:$,onClick:()=>f(!b),ref:T,children:(0,v.jsx)(o.A,{name:"calendar",width:16,height:16})}),b&&(0,v.jsx)("div",{ref:I,children:(0,v.jsx)(i.Ay,{onChange:e=>{M(e),f(!1)},value:y,locale:"en-US",className:le,tileClassName:te,navigationLabel:e=>{let{label:s}=e;return(0,v.jsx)("span",{className:ne,children:s})},formatShortWeekday:(e,s)=>s.toLocaleDateString(e,{weekday:"short"}).substring(0,2)})})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)(c.xI,{name:"amount",control:V,render:e=>{let{field:s}=e;return(0,v.jsx)("input",{...s,className:O,placeholder:"Amount",type:"number",onChange:e=>{const a=e.target.value.replace(",",".");s.onChange(a)}})}}),(0,v.jsx)("p",{className:J,children:null===(r=W.amount)||void 0===r?void 0:r.message})]}),(0,v.jsxs)("div",{className:X,children:[(0,v.jsx)(c.xI,{name:"status",control:V,render:e=>{let{field:s}=e;return(0,v.jsx)("input",{...s,className:O,placeholder:"Status",value:g,onChange:e=>S(e.target.value)})}}),(0,v.jsx)("p",{className:J,children:null===(d=W.status)||void 0===d?void 0:d.message}),(0,v.jsx)("div",{className:Z,onClick:()=>N(!_),ref:R,children:(0,v.jsx)(o.A,{name:"chevron-down",width:16,height:16})}),_&&(0,v.jsx)(x,{onSelect:e=>{S(e),N(!1)},onClose:N,ref:R})]})]}),(0,v.jsxs)("div",{className:ee,children:[(0,v.jsx)("button",{type:"submit",className:se,children:"Save"}),(0,v.jsx)("button",{type:"button",className:ae,onClick:h,children:"Cancel"})]})]})})};var oe=a(5431);const ce=e=>{let{searchQuery:s}=e;const a=(0,q.d4)(D.Di),t=(0,q.d4)(D.ix),n=[{header:"All suppliers",footer:e=>e.column.id,columns:[{accessorKey:"name",header:"Suppliers Info",footer:e=>e.column.id},{accessorKey:"address",header:"Address",footer:e=>e.column.id},{accessorKey:"suppliers",header:"Company",footer:e=>e.column.id},{accessorKey:"date",header:"Delivery date",footer:e=>e.column.id},{accessorKey:"amount",header:"Amount",footer:e=>e.column.id},{accessorKey:"status",header:"Status",footer:e=>e.column.id},{accessorKey:"action",header:"Action",cell:e=>{let{row:s}=e;return(0,v.jsxs)("div",{className:U,onClick:()=>u(s.original),children:[(0,v.jsx)(o.A,{name:"edit",width:13,height:13}),"Edit"]})},footer:e=>e.column.id}]}],r=(0,l.useMemo)((()=>t),[t]),[i,c]=(0,l.useState)(null),u=e=>{c(e)},m=()=>{c(null)},p=(0,T.N4)({data:r,columns:n,enableColumnResizing:!0,columnResizeMode:"onChange",getCoreRowModel:(0,I.HT)(),debugTable:!1,debugHeaders:!1,debugColumns:!1});return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("table",{className:F,children:[(0,v.jsx)("thead",{children:p.getHeaderGroups().map(((e,s)=>(0,v.jsx)("tr",{className:0===s?K:Y,children:e.headers.map((e=>(0,v.jsx)("th",{colSpan:e.colSpan,className:0===s?K:Y,style:{width:e.getSize()},children:e.isPlaceholder?null:(0,T.Kv)(e.column.columnDef.header,e.getContext())},e.id)))},e.id)))}),(0,v.jsx)("tbody",{children:p.getRowModel().rows.map((e=>(0,v.jsx)("tr",{children:e.getVisibleCells().map((s=>{return(0,v.jsx)("td",{className:"".concat(P," ").concat("info"===s.column.id?H:"category"===s.column.id?W:"stock"===s.column.id?Q:""),style:{width:s.column.getSize()},children:"status"===s.column.id?(0,v.jsx)("span",{className:(a=e.original.status,"Active"===a?z:G),children:e.original.status}):(0,T.Kv)(s.column.columnDef.cell,s.getContext())},s.id);var a}))},e.id)))})]}),a&&0===r.length&&(0,v.jsx)(oe.A,{}),!a&&0===r.length&&(0,v.jsx)("div",{className:V,children:"No results found for your search query."}),i&&(0,v.jsx)(d.A,{onClose:m,title:"Edit supplier",children:(0,v.jsx)(ie,{onClose:m,data:i})})]})};var ue=a(7240),me=a(196),pe=a(5377);const he=()=>{const[e,s]=(0,l.useState)(""),a=(0,q.wA)(),r=(0,q.d4)(D.Vs),d=(0,q.d4)(D._X);(0,l.useEffect)((()=>{const s={page:r,limit:5,...e&&{name:e}};a((0,re.qQ)(s))}),[r,a,e]),(0,l.useEffect)((()=>{a((0,me.Tm)(1))}),[e,a]);return(0,v.jsxs)("section",{className:t.A.container,children:[(0,v.jsxs)("div",{className:t.A.wrap,children:[(0,v.jsx)(n.A,{setSearchQuery:s,placeholder:"User Name"}),(0,v.jsx)(R,{onAddSupplier:async s=>{await pe.bc.post("/admin/suppliers",s),a((0,re.qQ)({page:r,limit:5,...e&&{name:e}}))}})]}),(0,v.jsx)(ce,{searchQuery:e}),(0,v.jsx)(ue.A,{currentPage:r,total:d,handlePageChange:e=>{a((0,me.Tm)(e))}})]})}},6962:(e,s,a)=>{a.d(s,{A:()=>t});var l=a(5043);const t=(e,s,a)=>{(0,l.useEffect)((()=>{const l=s=>{"Escape"===s.code&&e(!1)},t=l=>{!s.current||s.current.contains(l.target)||null===a||void 0===a||!a.current||null!==a&&void 0!==a&&a.current.contains(l.target)||e(!1)};return window.addEventListener("keydown",l),document.addEventListener("mousedown",t),()=>{window.removeEventListener("keydown",l),document.removeEventListener("mousedown",t)}}),[e,s,a])}},7170:(e,s,a)=>{a.d(s,{A:()=>l});const l={container:"ContainerStyles_container__c-Ay4",wrap:"ContainerStyles_wrap__Zujzm"}}}]);
//# sourceMappingURL=429.f93bc5d0.chunk.js.map