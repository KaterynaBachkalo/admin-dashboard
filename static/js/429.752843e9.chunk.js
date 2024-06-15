"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[429],{5738:(e,s,a)=>{a.d(s,{A:()=>c});const l="FilterForm_wrap__dKOTC",n="FilterForm_icon__23iPD",t="FilterForm_input__NJviq",r="FilterForm_button__2yayb";var d=a(4858),o=a(7713),i=a(579);const c=e=>{let{setSearchQuery:s,placeholder:a}=e;const{register:c,handleSubmit:u}=(0,d.mN)();return(0,i.jsx)("form",{onSubmit:u((e=>{s(e.name)})),children:(0,i.jsxs)("div",{className:l,children:[(0,i.jsx)("input",{...c("name"),className:t,placeholder:a}),(0,i.jsxs)("button",{type:"submit",className:r,children:[(0,i.jsx)("div",{className:n,children:(0,i.jsx)(o.A,{name:"filter",width:14,height:14})}),"Filter"]})]})})}},4229:(e,s,a)=>{a.d(s,{A:()=>h});var l=a(5043),n=a(7950);const t="Modal_backdrop__xTnIT",r="Modal_container__Ha+Ky",d="Modal_modal__DJDMv",o="Modal_btnClose__oHdcJ",i="Modal_title__3HkNf",c=(e,s,a)=>{(0,l.useEffect)((()=>{const a=s=>{"Escape"===s.code&&e(!1)},l=a=>{s.current&&!s.current.contains(a.target)&&e(!1)};return window.addEventListener("keydown",a),document.addEventListener("mousedown",l),document.body.classList.add("body-scroll-lock"),()=>{window.removeEventListener("keydown",a),document.removeEventListener("mousedown",l),document.body.classList.remove("body-scroll-lock")}}),[e,s,a])};var u=a(7713),m=a(579);const p=document.querySelector("#root-modal"),h=e=>{let{onClose:s,children:a,title:h}=e;const _=(0,l.useRef)(null);return c(s,_),p&&(0,n.createPortal)((0,m.jsx)("div",{className:t,children:(0,m.jsx)("div",{className:r,children:(0,m.jsxs)("div",{className:d,ref:_,onClick:e=>e.stopPropagation(),children:[(0,m.jsx)("button",{className:o,onClick:()=>s(!1),children:(0,m.jsx)(u.A,{name:"close",width:24,height:24})}),(0,m.jsx)("div",{className:i,children:h}),(0,m.jsx)("div",{children:a})]})})}),p)}},7240:(e,s,a)=>{a.d(s,{A:()=>d});const l="RenderPaginationDots_pagination__HG7kX",n="RenderPaginationDots_dot__MjI2h",t="RenderPaginationDots_activeDot__xOgyA";var r=a(579);const d=e=>{let{currentPage:s,total:a,handlePageChange:d}=e;const o=Math.ceil(a/5),i=[],c=Math.floor(2.5);let u=Math.max(1,s-c),m=Math.min(o,s+c);s<=c?m=Math.min(o,5):s>o-c&&(u=Math.max(1,o-5+1));for(let l=u;l<=m;l++)i.push((0,r.jsx)("button",{onClick:()=>d(l),className:"".concat(n," ").concat(s===l?t:"")},l));return u>1&&(i.unshift((0,r.jsx)("span",{children:"..."},"startEllipsis")),i.unshift((0,r.jsx)("button",{onClick:()=>d(1),className:"".concat(n," ").concat(1===s?t:"")},1))),m<o&&(i.push((0,r.jsx)("span",{children:"..."},"endEllipsis")),i.push((0,r.jsx)("button",{onClick:()=>d(o),className:"".concat(n," ").concat(s===o?t:"")},o))),(0,r.jsx)("div",{className:l,children:i})}},4782:(e,s,a)=>{a.r(s),a.d(s,{default:()=>ue});var l=a(5043),n=a(7170),t=a(5738);const r="AddNewSupplier_button__d3IGa";var d=a(4229),o=(a(6097),a(6726)),i=a(7713),c=a(4858),u=a(8403),m=a(899);const p="Dropdown_dropDown__ZVp5f",h="Dropdown_list__ga3Hp",_="Dropdown_stat__RbQB7";var j=a(6962),x=a(579);const v=l.forwardRef(((e,s)=>{let{onSelect:a,onClose:n}=e;const t=(0,l.useRef)(null);return(0,j.A)(n,t,s),(0,x.jsx)("div",{className:p,ref:t,children:(0,x.jsx)("ul",{className:h,children:["Active","Deactive"].map((e=>(0,x.jsx)("li",{onClick:()=>{a(e)},className:_,children:e},e)))})})})),N="AddNewSupplierModal_wrap__V+wOy",g="AddNewSupplierModal_inputWrap__IxVCM",S="AddNewSupplierModal_input__OLvYr",f="AddNewSupplierModal_errormessage__AIkKV",b="AddNewSupplierModal_iconChevron__lEUnL",A="AddNewSupplierModal_buttonWrap__W3odG",w="AddNewSupplierModal_buttonAdd__bR6Sj",y="AddNewSupplierModal_buttonCancel__1zpgK",C="AddNewSupplierModal_calendar__1KLPG",M="AddNewSupplierModal_tile__naLTt",k="AddNewSupplierModal_label__Ay5o3",E="AddNewSupplierModal_iconCalendar__V0gU-",q=e=>{var s,a,n,t,r,d;let{onClose:p}=e;const[h,_]=(0,l.useState)(!1),[q,D]=(0,l.useState)(""),[L,R]=(0,l.useState)(!1),[T,I]=(0,l.useState)(null),P=null===T||void 0===T?void 0:T.toString(),F=null===P||void 0===P?void 0:P.split(" ").slice(1,4),K=F&&["".concat(F[0]," ").concat(F[1]),F[2]],Y=null===K||void 0===K?void 0:K.join(", "),V=(0,l.useRef)(null),H=(0,l.useRef)(null),W=(0,l.useRef)(null),Q=m.Ik({info:m.Yj().required("Suppliers Info is required"),address:m.Yj().required("Address is required"),company:m.Yj().required("Company is required"),date:m.Yj().required("Date is required"),ammount:m.ai().typeError("Ammount is required and must be a number").required(),status:m.Yj().required("Status is required")}).required(),{register:U,handleSubmit:z,control:G,setValue:X,formState:{errors:O}}=(0,c.mN)({resolver:(0,u.t)(Q)});return(0,l.useEffect)((()=>{X("status",q),Y&&X("date",Y)}),[q,Y,X]),(0,j.A)(R,W,H),(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("form",{onSubmit:z((e=>{console.log(e),p()})),children:[(0,x.jsxs)("div",{className:N,children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("input",{...U("info"),className:S,placeholder:"Suppliers Info"}),(0,x.jsx)("p",{className:f,children:null===(s=O.info)||void 0===s?void 0:s.message})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("input",{...U("address"),className:S,placeholder:"Address"}),(0,x.jsx)("p",{className:f,children:null===(a=O.address)||void 0===a?void 0:a.message})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("input",{...U("company"),className:S,placeholder:"Company"}),(0,x.jsx)("p",{className:f,children:null===(n=O.company)||void 0===n?void 0:n.message})]}),(0,x.jsxs)("div",{className:g,children:[(0,x.jsx)(c.xI,{name:"date",control:G,render:e=>{let{field:s}=e;return(0,x.jsx)("input",{...s,className:S,placeholder:"Delivery date",value:Y})}}),(0,x.jsx)("p",{className:f,children:null===(t=O.date)||void 0===t?void 0:t.message}),(0,x.jsx)("div",{className:E,onClick:()=>R(!L),ref:H,children:(0,x.jsx)(i.A,{name:"calendar",width:16,height:16})}),L&&(0,x.jsx)("div",{ref:W,children:(0,x.jsx)(o.Ay,{onChange:e=>{I(e),R(!1)},value:T,locale:"en-US",className:C,tileClassName:M,navigationLabel:e=>{let{label:s}=e;return(0,x.jsx)("span",{className:k,children:s})},formatShortWeekday:(e,s)=>s.toLocaleDateString(e,{weekday:"short"}).substring(0,2)})})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("input",{...U("ammount"),className:S,placeholder:"Ammount"}),(0,x.jsx)("p",{className:f,children:null===(r=O.ammount)||void 0===r?void 0:r.message})]}),(0,x.jsxs)("div",{className:g,children:[(0,x.jsx)(c.xI,{name:"status",control:G,render:e=>{let{field:s}=e;return(0,x.jsx)("input",{...s,className:S,placeholder:"Status",value:q,onChange:e=>D(e.target.value)})}}),(0,x.jsx)("p",{className:f,children:null===(d=O.status)||void 0===d?void 0:d.message}),(0,x.jsx)("div",{className:b,onClick:()=>_(!h),ref:V,children:(0,x.jsx)(i.A,{name:"chevron-down",width:16,height:16})}),h&&(0,x.jsx)(v,{onSelect:e=>{D(e),_(!1)},onClose:_,ref:V})]})]}),(0,x.jsxs)("div",{className:A,children:[(0,x.jsx)("button",{type:"submit",className:w,children:"Add"}),(0,x.jsx)("button",{type:"button",className:y,onClick:p,children:"Cancel"})]})]})})},D=()=>{const[e,s]=(0,l.useState)(!1),a=()=>{s(!1)};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("button",{className:r,onClick:()=>s(!0),children:"Add a new suppliers"}),e&&(0,x.jsx)(d.A,{onClose:a,title:"Add a new supplier",children:(0,x.jsx)(q,{onClose:a})})]})};var L=a(8931),R=a(7111);const T="AllSuppliersTable_table__oNX8f",I="AllSuppliersTable_header__edyYm",P="AllSuppliersTable_subheader__es9F8",F="AllSuppliersTable_row__8epUH",K="AllSuppliersTable_noResults__o4Xr0",Y="AllSuppliersTable_col-info__aYutU",V="AllSuppliersTable_col-category__nMAdV",H="AllSuppliersTable_col-stock__TC0oL",W="AllSuppliersTable_buttonEdit__k7hGn",Q="AllSuppliersTable_greenStatus__8-1RI",U="AllSuppliersTable_redStatus__+0L4+",z="EditModal_wrap__WdunL",G="EditModal_inputWrap__fq0wA",X="EditModal_input__6aNia",O="EditModal_errormessage__QEDXY",B="EditModal_iconChevron__DKAUP",J="EditModal_iconCalendar__bBuuB",Z="EditModal_buttonWrap__ssqiW",$="EditModal_buttonSave__BGkmN",ee="EditModal_buttonCancel__3ebza",se="EditModal_calendar__MH5dc",ae="EditModal_tile__oDmrg",le="EditModal_label__F+x5p",ne=e=>{var s,a,n,t,r,d;let{data:p,onClose:h}=e;const[_,N]=(0,l.useState)(!1),[g,S]=(0,l.useState)(p.status),[f,b]=(0,l.useState)(!1),A=p.date,w=new Date(A),[y,C]=(0,l.useState)(w),M=null===y||void 0===y?void 0:y.toString(),k=null===M||void 0===M?void 0:M.split(" ").slice(1,4),E=k&&["".concat(k[0]," ").concat(k[1]),k[2]],q=null===E||void 0===E?void 0:E.join(", "),D=(0,l.useRef)(null),L=(0,l.useRef)(null),R=(0,l.useRef)(null),T=m.Ik({name:m.Yj().required("Suppliers Info is required"),address:m.Yj().required("Address is required"),suppliers:m.Yj().required("Company is required"),date:m.Yj().required("Date is required"),amount:m.Yj().typeError("Ammount is required and must be a number").required(),status:m.Yj().required("Status is required")}).required(),{register:I,handleSubmit:P,control:F,setValue:K,formState:{errors:Y}}=(0,c.mN)({resolver:(0,u.t)(T),defaultValues:{name:p.name,address:p.address,suppliers:p.suppliers,date:p.date,amount:p.amount,status:p.status}});return(0,l.useEffect)((()=>{K("status",g)}),[g,K]),(0,j.A)(b,R,L),(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("form",{onSubmit:P((e=>{console.log(e),h()})),children:[(0,x.jsxs)("div",{className:z,children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("input",{...I("name"),className:X,placeholder:"Suppliers Info"}),(0,x.jsx)("p",{className:O,children:null===(s=Y.name)||void 0===s?void 0:s.message})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("input",{...I("address"),className:X,placeholder:"Address"}),(0,x.jsx)("p",{className:O,children:null===(a=Y.address)||void 0===a?void 0:a.message})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("input",{...I("suppliers"),className:X,placeholder:"Company"}),(0,x.jsx)("p",{className:O,children:null===(n=Y.suppliers)||void 0===n?void 0:n.message})]}),(0,x.jsxs)("div",{className:G,children:[(0,x.jsx)(c.xI,{name:"date",control:F,render:e=>{let{field:s}=e;return(0,x.jsx)("input",{...s,className:X,placeholder:"Delivery date",value:q})}}),(0,x.jsx)("p",{className:O,children:null===(t=Y.date)||void 0===t?void 0:t.message}),(0,x.jsx)("div",{className:J,onClick:()=>b(!f),ref:L,children:(0,x.jsx)(i.A,{name:"calendar",width:16,height:16})}),f&&(0,x.jsx)("div",{ref:R,children:(0,x.jsx)(o.Ay,{onChange:e=>{C(e),b(!1)},value:y,locale:"en-US",className:se,tileClassName:ae,navigationLabel:e=>{let{label:s}=e;return(0,x.jsx)("span",{className:le,children:s})},formatShortWeekday:(e,s)=>s.toLocaleDateString(e,{weekday:"short"}).substring(0,2)})})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("input",{...I("amount"),className:X,placeholder:"Amount"}),(0,x.jsx)("p",{className:O,children:null===(r=Y.amount)||void 0===r?void 0:r.message})]}),(0,x.jsxs)("div",{className:G,children:[(0,x.jsx)(c.xI,{name:"status",control:F,render:e=>{let{field:s}=e;return(0,x.jsx)("input",{...s,className:X,placeholder:"Status",value:g,onChange:e=>S(e.target.value)})}}),(0,x.jsx)("p",{className:O,children:null===(d=Y.status)||void 0===d?void 0:d.message}),(0,x.jsx)("div",{className:B,onClick:()=>N(!_),ref:D,children:(0,x.jsx)(i.A,{name:"chevron-down",width:16,height:16})}),_&&(0,x.jsx)(v,{onSelect:e=>{S(e),N(!1)},onClose:N,ref:D})]})]}),(0,x.jsxs)("div",{className:Z,children:[(0,x.jsx)("button",{type:"submit",className:$,children:"Save"}),(0,x.jsx)("button",{type:"button",className:ee,onClick:h,children:"Cancel"})]})]})})};var te=a(7240),re=a(3003),de=a(1525),oe=a(196);const ie=e=>{let{searchQuery:s}=e;const a=(0,re.wA)(),n=(0,re.d4)(de.ix),t=(0,re.d4)(de.Vs),r=(0,re.d4)(de._X),o=[{header:"All suppliers",footer:e=>e.column.id,columns:[{accessorKey:"name",header:"Suppliers Info",footer:e=>e.column.id},{accessorKey:"address",header:"Address",footer:e=>e.column.id},{accessorKey:"suppliers",header:"Company",footer:e=>e.column.id},{accessorKey:"date",header:"Delivery date",footer:e=>e.column.id},{accessorKey:"amount",header:"Amount",footer:e=>e.column.id},{accessorKey:"status",header:"Status",footer:e=>e.column.id},{accessorKey:"action",header:"Action",cell:e=>{let{row:s}=e;return(0,x.jsxs)("div",{className:W,onClick:()=>_(s.original),children:[(0,x.jsx)(i.A,{name:"edit",width:13,height:13}),"Edit"]})},footer:e=>e.column.id}]}],c=(0,l.useMemo)((()=>n),[n]),[u,m]=(0,l.useState)(c),[p,h]=(0,l.useState)(null),_=e=>{h(e)},j=()=>{h(null)};(0,l.useEffect)((()=>{const e=s.toLowerCase();m(c.filter((s=>s.name.toLowerCase().includes(e))))}),[s,c]);const v=(0,L.N4)({data:u,columns:o,enableColumnResizing:!0,columnResizeMode:"onChange",getCoreRowModel:(0,R.HT)(),debugTable:!1,debugHeaders:!1,debugColumns:!1});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("table",{className:T,children:[(0,x.jsx)("thead",{children:v.getHeaderGroups().map(((e,s)=>(0,x.jsx)("tr",{className:0===s?I:P,children:e.headers.map((e=>(0,x.jsx)("th",{colSpan:e.colSpan,className:0===s?I:P,style:{width:e.getSize()},children:e.isPlaceholder?null:(0,L.Kv)(e.column.columnDef.header,e.getContext())},e.id)))},e.id)))}),(0,x.jsx)("tbody",{children:v.getRowModel().rows.map((e=>(0,x.jsx)("tr",{children:e.getVisibleCells().map((s=>{return(0,x.jsx)("td",{className:"".concat(F," ").concat("info"===s.column.id?Y:"category"===s.column.id?V:"stock"===s.column.id?H:""),style:{width:s.column.getSize()},children:"status"===s.column.id?(0,x.jsx)("span",{className:(a=e.original.status,"Active"===a?Q:U),children:e.original.status}):(0,L.Kv)(s.column.columnDef.cell,s.getContext())},s.id);var a}))},e.id)))})]}),(0,x.jsx)(te.A,{currentPage:t,total:r,handlePageChange:e=>{a((0,oe.Tm)(e))}}),0===u.length&&(0,x.jsx)("div",{className:K,children:"No results found for your search query."}),p&&(0,x.jsx)(d.A,{onClose:j,title:"Edit supplier",children:(0,x.jsx)(ne,{onClose:j,data:p})})]})};var ce=a(6886);const ue=()=>{const[e,s]=(0,l.useState)(""),a=(0,re.wA)(),r=(0,re.d4)(de.Vs);return(0,l.useEffect)((()=>{const s={page:r,limit:5,...e&&{name:e}};a((0,ce.qQ)(s))}),[r,a,e]),(0,x.jsxs)("section",{className:n.A.container,children:[(0,x.jsxs)("div",{className:n.A.wrap,children:[(0,x.jsx)(t.A,{setSearchQuery:s,placeholder:"User Name"}),(0,x.jsx)(D,{})]}),(0,x.jsx)(ie,{searchQuery:e})]})}},1525:(e,s,a)=>{a.d(s,{Qx:()=>m,Sf:()=>i,VW:()=>l,Vs:()=>o,X6:()=>r,_X:()=>u,ee:()=>d,ix:()=>n,rP:()=>c,wQ:()=>t});const l=e=>e.admin.products,n=e=>e.admin.suppliers,t=e=>e.admin.customers,r=e=>e.admin.incomeExpenses,d=e=>e.admin.orders,o=e=>e.admin.currentPage,i=e=>e.admin.totalCustomers,c=e=>e.admin.totalProducts,u=e=>e.admin.totalSuppliers,m=e=>e.admin.totalOrders},6962:(e,s,a)=>{a.d(s,{A:()=>n});var l=a(5043);const n=(e,s,a)=>{(0,l.useEffect)((()=>{const l=s=>{"Escape"===s.code&&e(!1)},n=l=>{!s.current||s.current.contains(l.target)||null===a||void 0===a||!a.current||null!==a&&void 0!==a&&a.current.contains(l.target)||e(!1)};return window.addEventListener("keydown",l),document.addEventListener("mousedown",n),()=>{window.removeEventListener("keydown",l),document.removeEventListener("mousedown",n)}}),[e,s,a])}},7170:(e,s,a)=>{a.d(s,{A:()=>l});const l={container:"ContainerStyles_container__c-Ay4",wrap:"ContainerStyles_wrap__Zujzm"}}}]);
//# sourceMappingURL=429.752843e9.chunk.js.map