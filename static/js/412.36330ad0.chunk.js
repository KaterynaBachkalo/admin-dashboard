"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[412],{5738:(e,s,t)=>{t.d(s,{A:()=>i});const r="FilterForm_wrap__dKOTC",l="FilterForm_icon__23iPD",a="FilterForm_input__NJviq",o="FilterForm_button__2yayb";var n=t(4858),c=t(7713),d=t(579);const i=e=>{let{setSearchQuery:s,placeholder:t}=e;const{register:i,handleSubmit:u}=(0,n.mN)();return(0,d.jsx)("form",{onSubmit:u((e=>{s(e.name)})),children:(0,d.jsxs)("div",{className:r,children:[(0,d.jsx)("input",{...i("name"),className:a,placeholder:t}),(0,d.jsxs)("button",{type:"submit",className:o,children:[(0,d.jsx)("div",{className:l,children:(0,d.jsx)(c.A,{name:"filter",width:14,height:14})}),"Filter"]})]})})}},4229:(e,s,t)=>{t.d(s,{A:()=>p});var r=t(5043),l=t(7950);const a="Modal_backdrop__xTnIT",o="Modal_container__Ha+Ky",n="Modal_modal__DJDMv",c="Modal_btnClose__oHdcJ",d="Modal_title__3HkNf",i=(e,s,t)=>{(0,r.useEffect)((()=>{const t=s=>{"Escape"===s.code&&e(!1)},r=t=>{s.current&&!s.current.contains(t.target)&&e(!1)};return window.addEventListener("keydown",t),document.addEventListener("mousedown",r),document.body.classList.add("body-scroll-lock"),()=>{window.removeEventListener("keydown",t),document.removeEventListener("mousedown",r),document.body.classList.remove("body-scroll-lock")}}),[e,s,t])};var u=t(7713),m=t(579);const h=document.querySelector("#root-modal"),p=e=>{let{onClose:s,children:t,title:p}=e;const _=(0,r.useRef)(null);return i(s,_),h&&(0,l.createPortal)((0,m.jsx)("div",{className:a,children:(0,m.jsx)("div",{className:o,children:(0,m.jsxs)("div",{className:n,ref:_,onClick:e=>e.stopPropagation(),children:[(0,m.jsx)("button",{className:c,onClick:()=>s(!1),children:(0,m.jsx)(u.A,{name:"close",width:24,height:24})}),(0,m.jsx)("div",{className:d,children:p}),(0,m.jsx)("div",{children:t})]})})}),h)}},7240:(e,s,t)=>{t.d(s,{A:()=>n});const r="RenderPaginationDots_pagination__HG7kX",l="RenderPaginationDots_dot__MjI2h",a="RenderPaginationDots_activeDot__xOgyA";var o=t(579);const n=e=>{let{currentPage:s,total:t,handlePageChange:n}=e;const c=Math.ceil(t/5),d=[],i=Math.floor(2.5);let u=Math.max(1,s-i),m=Math.min(c,s+i);s<=i?m=Math.min(c,5):s>c-i&&(u=Math.max(1,c-5+1));for(let r=u;r<=m;r++)d.push((0,o.jsx)("button",{onClick:()=>n(r),className:"".concat(l," ").concat(s===r?a:"")},r));return u>1&&(d.unshift((0,o.jsx)("span",{children:"..."},"startEllipsis")),d.unshift((0,o.jsx)("button",{onClick:()=>n(1),className:"".concat(l," ").concat(1===s?a:"")},1))),m<c&&(d.push((0,o.jsx)("span",{children:"..."},"endEllipsis")),d.push((0,o.jsx)("button",{onClick:()=>n(c),className:"".concat(l," ").concat(s===c?a:"")},c))),(0,o.jsx)("div",{className:r,children:d})}},2412:(e,s,t)=>{t.r(s),t.d(s,{default:()=>ie});var r=t(5043),l=t(5738),a=t(7170);const o="AddNewProduct_icon__MFMLA";var n=t(7713),c=t(4229);const d="AddNewProductModal_wrap__U+mpS",i="AddNewProductModal_inputWrap__jAL8w",u="AddNewProductModal_input__SF6J9",m="AddNewProductModal_errormessage__sDoOW",h="AddNewProductModal_iconChevron__edSiP",p="AddNewProductModal_buttonWrap__cJclg",_="AddNewProductModal_buttonAdd__wSxIX",x="AddNewProductModal_buttonCancel__5dJ84";var j=t(4858),v=t(8403),g=t(899);const N="Dropdown_dropDown__VO0hG",y="Dropdown_container__wdJNh",b="Dropdown_list__T+o5-",w="Dropdown_category__mKHwx";var C=t(6962);const f=["Medicine","Head","Hand","Dental Care","Skin Care","Eye Care","Vitamins & Supplements","Orthopedic Products","Baby Care"];var A=t(579);const k=r.forwardRef(((e,s)=>{let{onSelect:t,onClose:l}=e;const a=(0,r.useRef)(null);return(0,C.A)(l,a,s),(0,A.jsx)("div",{className:N,ref:a,children:(0,A.jsx)("div",{className:y,children:(0,A.jsx)("ul",{className:b,children:f.map((e=>(0,A.jsx)("li",{onClick:()=>{t(e)},className:w,children:e},e)))})})})}));var S=t(3003),P=t(6886);const M=e=>{var s,t,l,a,o;let{onClose:c}=e;const[N,y]=(0,r.useState)(!1),[b,w]=(0,r.useState)(""),[C,f]=(0,r.useState)(""),[M,E]=(0,r.useState)(""),D=(0,r.useRef)(null),q=(0,S.wA)(),T=g.Ik({name:g.Yj().required("Product info is required"),category:g.Yj().required("Category is required"),suppliers:g.Yj().required("Suppliers is required"),stock:g.Yj().matches(/^\d*\.?\d*$/,"Stock must be a valid number").required("Stock is required"),price:g.Yj().matches(/^\d*\.?\d*$/,"Price must be a valid number").required("Price is required")}).required(),{register:F,handleSubmit:K,control:R,setValue:L,formState:{errors:I}}=(0,j.mN)({resolver:(0,v.t)(T)});(0,r.useEffect)((()=>{L("category",b)}),[b,L]);return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)("form",{onSubmit:K((e=>{const s={name:e.name,category:e.category,suppliers:e.suppliers,stock:e.stock.toString(),price:e.price.toString()};q((0,P.Bj)(s)),c()})),children:[(0,A.jsxs)("div",{className:d,children:[(0,A.jsxs)("div",{children:[(0,A.jsx)("input",{...F("name"),className:u,placeholder:"Product info"}),(0,A.jsx)("p",{className:m,children:null===(s=I.name)||void 0===s?void 0:s.message})]}),(0,A.jsxs)("div",{className:i,children:[(0,A.jsx)(j.xI,{name:"category",control:R,render:e=>{let{field:s}=e;return(0,A.jsx)("input",{...s,className:u,placeholder:"Category",value:b})}}),!b&&(0,A.jsx)("p",{className:m,children:null===(t=I.category)||void 0===t?void 0:t.message}),(0,A.jsx)("div",{className:h,onClick:()=>y(!N),ref:D,children:(0,A.jsx)(n.A,{name:"chevron-down",width:16,height:16})}),N&&(0,A.jsx)(k,{onSelect:e=>{w(e),y(!1)},onClose:y,ref:D})]}),(0,A.jsxs)("div",{children:[(0,A.jsx)("input",{...F("suppliers"),className:u,placeholder:"Suppliers"}),(0,A.jsx)("p",{className:m,children:null===(l=I.suppliers)||void 0===l?void 0:l.message})]}),(0,A.jsxs)("div",{children:[(0,A.jsx)(j.xI,{name:"stock",control:R,render:e=>{let{field:s}=e;return(0,A.jsx)("input",{...s,className:u,placeholder:"Stock",type:"text",value:C,onChange:e=>{const t=e.target.value.replace(",",".");/^\d*\.?\d*$/.test(t)&&(f(t),s.onChange(t))}})}}),(0,A.jsx)("p",{className:m,children:null===(a=I.stock)||void 0===a?void 0:a.message})]}),(0,A.jsxs)("div",{children:[(0,A.jsx)(j.xI,{name:"price",control:R,render:e=>{let{field:s}=e;return(0,A.jsx)("input",{...s,className:u,placeholder:"Price",type:"text",value:M,onChange:e=>{const t=e.target.value.replace(",",".");/^\d*\.?\d*$/.test(t)&&(E(t),s.onChange(t))}})}}),(0,A.jsx)("p",{className:m,children:null===(o=I.price)||void 0===o?void 0:o.message})]})]}),(0,A.jsxs)("div",{className:p,children:[(0,A.jsx)("button",{type:"submit",className:_,children:"Add"}),(0,A.jsx)("button",{type:"button",className:x,onClick:c,children:"Cancel"})]})]})})},E=()=>{const[e,s]=(0,r.useState)(!1),t=()=>{s(!1)};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("div",{className:o,onClick:()=>s(!0),children:(0,A.jsx)(n.A,{name:"add",width:20,height:20})}),e&&(0,A.jsx)(c.A,{onClose:t,title:"Add a new product",children:(0,A.jsx)(M,{onClose:t})})]})};var D=t(8931),q=t(7111);const T="AllProductsTable_table__RucKg",F="AllProductsTable_header__L8aca",K="AllProductsTable_subheader__AUKOw",R="AllProductsTable_row__-xfsz",L="AllProductsTable_noResults__dcB5-",I="AllProductsTable_col-info__KTKqG",H="AllProductsTable_col-category__K37vU",J="AllProductsTable_col-stock__7Jp11",V="AllProductsTable_buttonsWrap__S3MdH",W="AllProductsTable_buttonEdit__yCkyO",Y="AllProductsTable_buttonDelete__hTPUZ",O="EditModal_wrap__6LjQN",z="EditModal_inputWrap__8rLVE",Q="EditModal_input__DemmQ",G="EditModal_errormessage__Twc9m",U="EditModal_iconChevron__Y44qd",$="EditModal_buttonWrap__wH5ct",B="EditModal_buttonAdd__MgbNJ",X="EditModal_buttonCancel__nZEvv";var Z=t(1036);const ee=e=>{var s,t,l,a,o;let{data:c,onClose:d}=e;const[i,u]=(0,r.useState)(!1),[m,h]=(0,r.useState)(c.category),p=(0,r.useRef)(null),_=(0,S.wA)(),x=g.Ik({name:g.Yj().required("Product info is required"),category:g.Yj().required("Category is required"),suppliers:g.Yj().required("Suppliers is required"),stock:g.ai().typeError("Stock is required and must be a number").required(),price:g.ai().typeError("Price is required and must be a number").required()}).required(),{register:N,handleSubmit:y,control:b,setValue:w,formState:{errors:C}}=(0,j.mN)({resolver:(0,v.t)(x),defaultValues:{name:c.name,category:c.category,suppliers:c.suppliers,stock:Number(c.stock),price:Number(c.price)}});return(0,r.useEffect)((()=>{w("category",m)}),[m,w]),(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)("form",{onSubmit:y((e=>{const s={...c,name:e.name,category:e.category,suppliers:e.suppliers,stock:e.stock.toString(),price:e.price.toString()},{_id:t,...r}=s;_((0,P.WG)({_id:c._id,...r})),Z.oR.success("The product was successfully updated"),d()})),children:[(0,A.jsxs)("div",{className:O,children:[(0,A.jsxs)("div",{children:[(0,A.jsx)("input",{...N("name"),className:Q,placeholder:"Product info"}),(0,A.jsx)("p",{className:G,children:null===(s=C.name)||void 0===s?void 0:s.message})]}),(0,A.jsxs)("div",{className:z,children:[(0,A.jsx)(j.xI,{name:"category",control:b,render:e=>{let{field:s}=e;return(0,A.jsx)("input",{...s,className:Q,placeholder:"Category",value:m,onChange:e=>h(e.target.value)})}}),(0,A.jsx)("p",{className:G,children:null===(t=C.category)||void 0===t?void 0:t.message}),(0,A.jsx)("div",{className:U,onClick:()=>u(!i),ref:p,children:(0,A.jsx)(n.A,{name:"chevron-down",width:16,height:16})}),i&&(0,A.jsx)(k,{onSelect:e=>{h(e),u(!1)},onClose:u,ref:p})]}),(0,A.jsxs)("div",{children:[(0,A.jsx)("input",{...N("suppliers"),className:Q,placeholder:"Suppliers"}),(0,A.jsx)("p",{className:G,children:null===(l=C.suppliers)||void 0===l?void 0:l.message})]}),(0,A.jsxs)("div",{children:[(0,A.jsx)(j.xI,{name:"stock",control:b,render:e=>{let{field:s}=e;return(0,A.jsx)("input",{...s,className:Q,placeholder:"Stock",type:"number",onChange:e=>{const t=e.target.value.replace(",",".");s.onChange(t)}})}}),(0,A.jsx)("p",{className:G,children:null===(a=C.stock)||void 0===a?void 0:a.message})]}),(0,A.jsxs)("div",{children:[(0,A.jsx)(j.xI,{name:"price",control:b,render:e=>{let{field:s}=e;return(0,A.jsx)("input",{...s,className:Q,placeholder:"Price",type:"number",onChange:e=>{const t=e.target.value.replace(",",".");s.onChange(t)}})}}),(0,A.jsx)("p",{className:G,children:null===(o=C.price)||void 0===o?void 0:o.message})]})]}),(0,A.jsxs)("div",{className:$,children:[(0,A.jsx)("button",{type:"submit",className:B,children:"Edit"}),(0,A.jsx)("button",{type:"button",className:X,onClick:d,children:"Cancel"})]})]})})},se="DeleteModal_text__Uq4Ab",te="DeleteModal_buttonWrap__Xs998",re="DeleteModal_buttonDelete__pHkcD",le="DeleteModal_buttonCancel__IoVJ7",ae=e=>{let{data:s,onClose:t,handleDelete:r}=e;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)("p",{className:se,children:["Are you sure you want to delete ",s.name,"?"]}),(0,A.jsxs)("div",{className:te,children:[(0,A.jsx)("button",{type:"submit",className:re,onClick:r,children:"Delete"}),(0,A.jsx)("button",{type:"button",className:le,onClick:t,children:"Cancel"})]})]})};var oe=t(1525);const ne=e=>{let{searchQuery:s}=e;const t=(0,S.d4)(oe.VW),l=(0,S.wA)(),a=[{header:"All products",footer:e=>e.column.id,columns:[{accessorKey:"name",header:"Product Info",footer:e=>e.column.id},{accessorKey:"category",header:"Category",footer:e=>e.column.id},{accessorKey:"stock",header:"Stock",footer:e=>e.column.id},{accessorKey:"suppliers",header:"Suppliers",footer:e=>e.column.id},{accessorKey:"price",header:"Price",footer:e=>e.column.id},{accessorKey:"action",header:"Action",cell:e=>{let{row:s}=e;return(0,A.jsxs)("div",{className:V,children:[(0,A.jsx)("div",{className:W,onClick:()=>h(s.original),children:(0,A.jsx)(n.A,{name:"edit",width:13,height:13})}),(0,A.jsx)("div",{className:Y,onClick:()=>p(s.original),children:(0,A.jsx)(n.A,{name:"delete",width:13,height:13})})]})},footer:e=>e.column.id}]}],o=(0,r.useMemo)((()=>t.filter((e=>!e.hasOwnProperty("seq_value")))),[t]),[d,i]=(0,r.useState)(null),[u,m]=(0,r.useState)(null),h=e=>{i(e)},p=e=>{m(e)},_=()=>{i(null)},x=()=>{m(null)},j=(0,D.N4)({data:o,columns:a,enableColumnResizing:!0,columnResizeMode:"onChange",getCoreRowModel:(0,q.HT)()});return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)("table",{className:T,children:[(0,A.jsx)("thead",{children:j.getHeaderGroups().map(((e,s)=>(0,A.jsx)("tr",{className:0===s?F:K,children:e.headers.map((e=>(0,A.jsx)("th",{colSpan:e.colSpan,className:0===s?F:K,style:{width:e.getSize()},children:e.isPlaceholder?null:(0,D.Kv)(e.column.columnDef.header,e.getContext())},e.id)))},e.id)))}),(0,A.jsx)("tbody",{children:j.getRowModel().rows.map((e=>(0,A.jsx)("tr",{children:e.getVisibleCells().map((e=>(0,A.jsx)("td",{className:"".concat(R," ").concat("name"===e.column.id?I:"category"===e.column.id?H:"stock"===e.column.id?J:""),style:{width:e.column.getSize()},children:(0,D.Kv)(e.column.columnDef.cell,e.getContext())},e.id)))},e.id)))})]}),0===o.length&&(0,A.jsx)("div",{className:L,children:"No results found for your search query."}),d&&(0,A.jsx)(c.A,{onClose:_,title:"Edit product",children:(0,A.jsx)(ee,{onClose:_,data:d})}),u&&(0,A.jsx)(c.A,{onClose:x,title:"Delete Product",children:(0,A.jsx)(ae,{onClose:x,data:u,handleDelete:()=>{return e=u._id,l((0,P.DD)(e)),Z.oR.success("The product is successfully deleted"),void x();var e}})})]})};var ce=t(7240),de=t(196);const ie=()=>{const[e,s]=(0,r.useState)(""),t=(0,S.wA)(),o=(0,S.d4)(oe.Vs),n=(0,S.d4)(oe.rP);return(0,r.useEffect)((()=>{const s={page:o,limit:5,...e&&{name:e}};t((0,P.j0)(s))}),[o,t,e]),(0,r.useEffect)((()=>{t((0,de.Tm)(1))}),[e,t]),(0,A.jsxs)("section",{className:a.A.container,children:[(0,A.jsx)(l.A,{setSearchQuery:s,placeholder:"Product Name"}),(0,A.jsx)(E,{}),(0,A.jsx)(ne,{searchQuery:e}),(0,A.jsx)(ce.A,{currentPage:o,total:n-1,handlePageChange:e=>{t((0,de.Tm)(e))}})]})}},6962:(e,s,t)=>{t.d(s,{A:()=>l});var r=t(5043);const l=(e,s,t)=>{(0,r.useEffect)((()=>{const r=s=>{"Escape"===s.code&&e(!1)},l=r=>{!s.current||s.current.contains(r.target)||null===t||void 0===t||!t.current||null!==t&&void 0!==t&&t.current.contains(r.target)||e(!1)};return window.addEventListener("keydown",r),document.addEventListener("mousedown",l),()=>{window.removeEventListener("keydown",r),document.removeEventListener("mousedown",l)}}),[e,s,t])}},7170:(e,s,t)=>{t.d(s,{A:()=>r});const r={container:"ContainerStyles_container__c-Ay4",wrap:"ContainerStyles_wrap__Zujzm"}}}]);
//# sourceMappingURL=412.36330ad0.chunk.js.map