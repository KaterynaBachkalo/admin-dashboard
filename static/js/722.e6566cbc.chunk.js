"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[722],{5738:(e,a,s)=>{s.d(a,{A:()=>d});const l="FilterForm_wrap__dKOTC",t="FilterForm_icon__23iPD",n="FilterForm_input__NJviq",o="FilterForm_button__2yayb";var r=s(4858),c=s(7713),i=s(579);const d=e=>{let{setSearchQuery:a,placeholder:s}=e;const{register:d,handleSubmit:m}=(0,r.mN)();return(0,i.jsx)("form",{onSubmit:m((e=>{a(e.name)})),children:(0,i.jsxs)("div",{className:l,children:[(0,i.jsx)("input",{...d("name"),className:n,placeholder:s}),(0,i.jsxs)("button",{type:"submit",className:o,children:[(0,i.jsx)("div",{className:t,children:(0,i.jsx)(c.A,{name:"filter",width:14,height:14})}),"Filter"]})]})})}},7240:(e,a,s)=>{s.d(a,{A:()=>r});const l="RenderPaginationDots_pagination__HG7kX",t="RenderPaginationDots_dot__MjI2h",n="RenderPaginationDots_activeDot__xOgyA";var o=s(579);const r=e=>{let{currentPage:a,total:s,handlePageChange:r}=e;const c=Math.ceil(s/5),i=[],d=Math.floor(2.5);let m=Math.max(1,a-d),u=Math.min(c,a+d);a<=d?u=Math.min(c,5):a>c-d&&(m=Math.max(1,c-5+1));for(let l=m;l<=u;l++)i.push((0,o.jsx)("button",{onClick:()=>r(l),className:"".concat(t," ").concat(a===l?n:"")},l));return m>1&&(i.unshift((0,o.jsx)("span",{children:"..."},"startEllipsis")),i.unshift((0,o.jsx)("button",{onClick:()=>r(1),className:"".concat(t," ").concat(1===a?n:"")},1))),u<c&&(i.push((0,o.jsx)("span",{children:"..."},"endEllipsis")),i.push((0,o.jsx)("button",{onClick:()=>r(c),className:"".concat(t," ").concat(a===c?n:"")},c))),(0,o.jsx)("div",{className:l,children:i})}},6722:(e,a,s)=>{s.r(a),s.d(a,{default:()=>w});var l=s(5043),t=s(7170),n=s(5738),o=s(8931),r=s(7111);const c="AllCustomersTable_table__PSBKH",i="AllCustomersTable_header__maKLA",d="AllCustomersTable_subheader__h0Dd7",m="AllCustomersTable_row__Ir6db",u="AllCustomersTable_cellWrap__6UH-R",h="AllCustomersTable_avatar__JQDfn",_="AllCustomersTable_noResults__OZ4yU",p="AllCustomersTable_col-name__y+yg7",g="AllCustomersTable_col-email__2w+TJ",x="AllCustomersTable_col-address__L0PN9",b="AllCustomersTable_col-phone__oOE1D",j="AllCustomersTable_col-date__rSJpv";var C=s(3003),y=s(1525),f=s(579);const A=e=>{let{searchQuery:a}=e;const s=(0,C.d4)(y.wQ),t=[{header:"Customers Data",footer:e=>e.column.id,columns:[{accessorKey:"name",header:"Name",cell:e=>{let{row:a}=e;return(0,f.jsxs)("div",{className:u,children:[(0,f.jsx)("img",{src:a.original.avatar,alt:a.original.name,className:h}),a.original.name]})},footer:e=>e.column.id},{accessorKey:"email",header:"Email",footer:e=>e.column.id},{accessorKey:"address",header:"Address",footer:e=>e.column.id},{accessorKey:"phone",header:"Phone",footer:e=>e.column.id},{accessorKey:"date",header:"Register date",footer:e=>e.column.id}]}],n=(0,l.useMemo)((()=>s.map((e=>({avatar:e.image||e.photo,name:e.name,email:e.email,address:e.address,phone:e.phone,date:e.register_date})))),[s]),A=(0,o.N4)({data:n,columns:t,enableColumnResizing:!0,columnResizeMode:"onChange",getCoreRowModel:(0,r.HT)()});return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("table",{className:c,children:[(0,f.jsx)("thead",{children:A.getHeaderGroups().map(((e,a)=>(0,f.jsx)("tr",{className:0===a?i:d,children:e.headers.map((e=>(0,f.jsx)("th",{colSpan:e.colSpan,className:0===a?i:d,style:{width:e.getSize()},children:e.isPlaceholder?null:(0,o.Kv)(e.column.columnDef.header,e.getContext())},e.id)))},e.id)))}),(0,f.jsx)("tbody",{children:A.getRowModel().rows.map((e=>(0,f.jsx)("tr",{children:e.getVisibleCells().map((e=>(0,f.jsx)("td",{className:"".concat(m," ").concat("name"===e.column.id?p:"email"===e.column.id?g:"address"===e.column.id?x:"phone"===e.column.id?b:"date"===e.column.id?j:""),style:{width:e.column.getSize()},children:(0,o.Kv)(e.column.columnDef.cell,e.getContext())},e.id)))},e.id)))})]}),0===n.length&&(0,f.jsx)("div",{className:_,children:"No results found for your search query."})]})};var N=s(6886),v=s(7240),T=s(196);const w=()=>{const[e,a]=(0,l.useState)(""),s=(0,C.wA)(),o=(0,C.d4)(y.Vs),r=(0,C.d4)(y.Sf);return(0,l.useEffect)((()=>{const a={page:o,limit:5,...e&&{name:e}};s((0,N.gn)(a))}),[o,s,e]),(0,l.useEffect)((()=>{s((0,T.Tm)(1))}),[e,s]),(0,f.jsxs)("section",{className:t.A.container,children:[(0,f.jsx)(n.A,{setSearchQuery:a,placeholder:"User name"}),(0,f.jsx)(A,{searchQuery:e}),(0,f.jsx)(v.A,{currentPage:o,total:r,handlePageChange:e=>{s((0,T.Tm)(e))}})]})}},7170:(e,a,s)=>{s.d(a,{A:()=>l});const l={container:"ContainerStyles_container__c-Ay4",wrap:"ContainerStyles_wrap__Zujzm"}}}]);
//# sourceMappingURL=722.e6566cbc.chunk.js.map