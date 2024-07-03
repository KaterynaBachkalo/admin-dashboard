"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[641],{641:(e,s,a)=>{a.r(s),a.d(s,{default:()=>A});const c="DashboardPage_container__cx3UH",l="DashboardPage_tables__AX9Yo";var n=a(3003),o=a(7713);const r="Statistics_cells__Zt+h6",t="Statistics_border__ZN9hW",m="Statistics_wrapText__7Eyz7",d="Statistics_text__2FcsI",i="Statistics_number__O18Jn";var u=a(1525),_=a(579);const h=()=>{const e=(0,n.d4)(u.rP),s=(0,n.d4)(u._X),a=(0,n.d4)(u.Sf);return(0,_.jsxs)("div",{className:r,children:[(0,_.jsxs)("div",{className:t,children:[(0,_.jsxs)("div",{className:m,children:[(0,_.jsx)(o.A,{name:"coins"}),(0,_.jsx)("p",{className:d,children:"All products"})]}),(0,_.jsx)("p",{className:i,children:e-1})]}),(0,_.jsxs)("div",{className:t,children:[(0,_.jsxs)("div",{className:m,children:[(0,_.jsx)(o.A,{name:"customers"}),(0,_.jsx)("p",{className:d,children:"All suppliers"})]}),(0,_.jsx)("p",{className:i,children:s})]}),(0,_.jsxs)("div",{className:t,children:[(0,_.jsxs)("div",{className:m,children:[(0,_.jsx)(o.A,{name:"customers"}),(0,_.jsx)("p",{className:d,children:"All customers"})]}),(0,_.jsx)("p",{className:i,children:a})]})]})};var p=a(8931),x=a(7111);const j={table:"RecentCustomers_table__xZpnM",header:"RecentCustomers_header__CL-SH",subheader:"RecentCustomers_subheader__VIjJy",row:"RecentCustomers_row__N8Umx",cellWrap:"RecentCustomers_cellWrap__LSejU",avatar:"RecentCustomers_avatar__40m05","col-name":"RecentCustomers_col-name__f17X0","col-email":"RecentCustomers_col-email__p86CW","col-spent":"RecentCustomers_col-spent__ZizsT"};var g=a(5043);const N=[{header:"Recent Customers",footer:e=>e.column.id,columns:[{accessorKey:"name",header:"Name",cell:e=>{let{row:s}=e;return(0,_.jsxs)("div",{className:j.cellWrap,children:[(0,_.jsx)("img",{src:s.original.avatar,alt:s.original.name,className:j.avatar}),(0,_.jsx)("p",{className:j.name,children:s.original.name})]})},footer:e=>e.column.id},{accessorKey:"email",header:"Email",footer:e=>e.column.id},{accessorKey:"spent",header:"Spent",footer:e=>e.column.id}]}],b=()=>{const e=(0,n.d4)(u.wQ).map((e=>({avatar:e.image||e.photo,name:e.name,email:e.email,spent:e.spent}))).slice(-5),s=(0,g.useMemo)((()=>e),[e]),a=(0,p.N4)({data:s,columns:N,enableColumnResizing:!0,columnResizeMode:"onChange",getCoreRowModel:(0,x.HT)(),debugTable:!1,debugHeaders:!1,debugColumns:!1});return(0,_.jsxs)("table",{className:j.table,children:[(0,_.jsx)("thead",{children:a.getHeaderGroups().map(((e,s)=>(0,_.jsx)("tr",{className:0===s?j.header:j.subheader,children:e.headers.map((e=>(0,_.jsx)("th",{colSpan:e.colSpan,className:0===s?j.header:j.subheader,children:e.isPlaceholder?null:(0,p.Kv)(e.column.columnDef.header,e.getContext())},e.id)))},e.id)))}),(0,_.jsx)("tbody",{children:a.getRowModel().rows.map((e=>(0,_.jsx)("tr",{children:e.getVisibleCells().map((e=>{const s=e.getValue();return(0,_.jsx)("td",{title:s,className:"".concat(j.row," ").concat("name"===e.column.id?j["col-name"]:"email"===e.column.id?j["col-email"]:"spent"===e.column.id?j["col-spent"]:""),style:{width:e.column.getSize()},children:(0,p.Kv)(e.column.columnDef.cell,e.getContext())},e.id)}))},e.id)))})]})},C="IncomeExpenses_table__8KaYT",v="IncomeExpenses_header__GX2wp",w="IncomeExpenses_subheader__0p4dg",y="IncomeExpenses_row__S-o6w",f="IncomeExpenses_expense__m8kcp",R="IncomeExpenses_income__1wuMn",E="IncomeExpenses_error__Qw1TQ",S="IncomeExpenses_col3Red__DX8ZZ",I="IncomeExpenses_col3Green__t6UYX",K="IncomeExpenses_col3Error__KX61c",M=[{header:"Income/Expenses",footer:e=>e.column.id,columns:[{accessorKey:"type",header:"Today",footer:e=>e.column.id},{accessorKey:"name",header:"",footer:e=>e.column.id},{accessorKey:"amount",header:"",footer:e=>e.column.id}]}],z=()=>{const e=(0,n.d4)(u.X6),s=(0,g.useMemo)((()=>e.slice(-6)),[e]),a=(0,p.N4)({data:s,columns:M,enableColumnResizing:!0,columnResizeMode:"onChange",getCoreRowModel:(0,x.HT)(),debugTable:!1,debugHeaders:!1,debugColumns:!1}),c=e=>"Expense"===e?S:"Income"===e?I:K;return(0,_.jsxs)("table",{className:C,children:[(0,_.jsx)("thead",{children:a.getHeaderGroups().map(((e,s)=>(0,_.jsx)("tr",{className:0===s?v:w,children:e.headers.map((e=>(0,_.jsx)("th",{colSpan:e.colSpan,className:0===s?v:w,style:{width:e.getSize()},children:e.isPlaceholder?null:(0,p.Kv)(e.column.columnDef.header,e.getContext())},e.id)))},e.id)))}),(0,_.jsx)("tbody",{children:a.getRowModel().rows.map((e=>(0,_.jsx)("tr",{children:e.getVisibleCells().map((s=>{return(0,_.jsx)("td",{className:y,style:{width:s.column.getSize()},children:"type"===s.column.id?(0,_.jsx)("span",{className:(a=e.original.type,"Expense"===a?f:"Income"===a?R:E),children:e.original.type}):"amount"===s.column.id?(0,_.jsx)("span",{className:c(e.original.type),children:e.original.amount}):(0,p.Kv)(s.column.columnDef.cell,s.getContext())},s.id);var a}))},e.id)))})]})};var T=a(6886);const A=()=>{const e=(0,n.wA)();return(0,g.useEffect)((()=>{e((0,T.Fd)())}),[e]),(0,_.jsxs)("section",{className:c,children:[(0,_.jsx)(h,{}),(0,_.jsxs)("div",{className:l,children:[(0,_.jsx)(b,{}),(0,_.jsx)(z,{})]})]})}}}]);
//# sourceMappingURL=641.1290cd13.chunk.js.map