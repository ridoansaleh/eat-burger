(this["webpackJsonpeat-burger"]=this["webpackJsonpeat-burger"]||[]).push([[20],{435:function(e,a,t){"use strict";t.r(a);var n=t(34),r=t(29),l=t(0),c=t.n(l),o=t(12),i=t(408),m=t(379),s=t(68),d=t(412),p=t(415),u=t(414),E=t(261),g=t(262),b=t(264),f=t(263),h=t(97),v=t(373),x=t(354),w=t(427),y=t(357),N=t(358),j=t(359),O=t(20),k=t(147),S=Object(k.a)((function(e){return{container:Object(O.a)({display:"flex",justifyContent:"center",minHeight:"calc(100vh - 318px)",padding:"20px 10px"},e.breakpoints.up("md"),{padding:0,paddingTop:"40px"}),wrapper:Object(O.a)({width:"100%",position:"relative"},e.breakpoints.up("md"),{width:"800px"}),orderInfo:Object(O.a)({listStyleType:"none",padding:"0",margin:"20px 0"},e.breakpoints.up("md"),{margin:"40px 0 20px"}),infoItem:{display:"flex"},infoItemSkeleton:{marginLeft:"5px"},accordion:{boxShadow:"none"},accordionTitle:{marginLeft:"10px"},accordionSummary:{backgroundColor:"#D5D8DC",border:"1px solid rgba(0, 0, 0, .125)"},data:{height:"30px",marginBottom:"10px"},paper:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"25px",padding:"15px 0"},confirmBtn:Object(O.a)({marginTop:"20px"},e.breakpoints.up("md"),{width:"150px"})}})),I=t(26),T=t(79),C=t(51),D=[1,2,3];a.default=function(){var e=Object(l.useState)({fullname:"",address:"",phone_number:"",menus:[],total_price:"",time:"",status:""}),a=Object(r.a)(e,2),t=a[0],O=a[1],k=Object(l.useState)(!0),_=Object(r.a)(k,2),z=_[0],B=_[1],F=S(),q=Object(o.g)(),L=Object(l.useContext)(I.a).db,P=function(e){L.collection(C.b).doc(e).get().then((function(e){var a=t;e.exists&&(a=e.data()),O(a),B(!1)})).catch((function(e){console.log("Error getting order detail: ",e)}))};return Object(l.useEffect)((function(){var e=sessionStorage.getItem(T.b);e&&P(e)}),[]),c.a.createElement("div",{className:F.container},c.a.createElement("div",{className:F.wrapper},c.a.createElement(i.a,{separator:c.a.createElement(w.a,{fontSize:"small"}),"aria-label":"breadcrumb"},c.a.createElement(m.a,{color:"inherit",onClick:function(){q.goBack()}},"Order List"),c.a.createElement(s.a,{color:"textPrimary"},"Detail")),c.a.createElement("div",{className:F.orderInfo},c.a.createElement("div",{className:F.infoItem},"Order Time :"," ",z?c.a.createElement(x.a,{variant:"rect",animation:"wave",width:"35%",className:F.infoItemSkeleton}):c.a.createElement(c.a.Fragment,null,t.time.split(",")[0],","," ",t.time.split(",")[2]," ",t.time.split(",")[1])),c.a.createElement("div",{className:F.infoItem},"Status :"," ",z?c.a.createElement(x.a,{variant:"rect",animation:"wave",width:"20%",className:F.infoItemSkeleton}):c.a.createElement(c.a.Fragment,null,t.status))),c.a.createElement(d.a,{square:!0,expanded:!0,className:F.accordion},c.a.createElement(p.a,{"aria-controls":"panel1d-content",id:"panel1d-header",className:F.accordionSummary},c.a.createElement(y.a,null),c.a.createElement(s.a,{className:F.accordionTitle},"Menu")),c.a.createElement(u.a,null,c.a.createElement(E.a,{size:"small","aria-label":"a dense table"},c.a.createElement(g.a,null,z?D.map((function(e){return c.a.createElement(b.a,{key:e},c.a.createElement(x.a,{variant:"rect",animation:"wave",classes:{root:F.data}}))})):c.a.createElement(c.a.Fragment,null,t.menus.map((function(e){return c.a.createElement(b.a,{key:e.name},c.a.createElement(f.a,{component:"th",scope:"row"},e.name),c.a.createElement(f.a,{align:"right"},e.count),c.a.createElement(f.a,{align:"right"},"$ ",e.total_price))}))))))),c.a.createElement(d.a,{square:!0,expanded:!0,className:F.accordion},c.a.createElement(p.a,{"aria-controls":"panel2d-content",id:"panel2d-header",className:F.accordionSummary},c.a.createElement(N.a,null),c.a.createElement(s.a,{className:F.accordionTitle},"Delivery Info")),c.a.createElement(u.a,null,c.a.createElement(E.a,{size:"small","aria-label":"a dense table"},c.a.createElement(g.a,null,c.a.createElement(b.a,null,c.a.createElement(f.a,{component:"th",scope:"row"},"Name"),c.a.createElement(f.a,{align:"right"},z?c.a.createElement(x.a,{variant:"rect",animation:"wave"}):t.fullname)),c.a.createElement(b.a,null,c.a.createElement(f.a,{component:"th",scope:"row"},"Address"),c.a.createElement(f.a,{align:"right"},z?c.a.createElement(x.a,{variant:"rect",animation:"wave"}):t.address)),c.a.createElement(b.a,null,c.a.createElement(f.a,{component:"th",scope:"row"},"Phone"),c.a.createElement(f.a,{align:"right"},z?c.a.createElement(x.a,{variant:"rect",animation:"wave"}):t.phone_number)))))),c.a.createElement(d.a,{square:!0,expanded:!0,className:F.accordion},c.a.createElement(p.a,{"aria-controls":"panel3d-content",id:"panel3d-header",className:F.accordionSummary},c.a.createElement(j.a,null),c.a.createElement(s.a,{className:F.accordionTitle},"Payment")),c.a.createElement(u.a,null,c.a.createElement(E.a,{size:"small","aria-label":"a dense table"},c.a.createElement(g.a,null,c.a.createElement(b.a,null,c.a.createElement(f.a,{scope:"row"},"Total"),c.a.createElement(f.a,{align:"right"},z?c.a.createElement(x.a,{variant:"rect",animation:"wave"}):c.a.createElement(c.a.Fragment,null,"$ ",t.total_price))))))),"process"===t.status&&c.a.createElement(h.a,{elevation:1,className:F.paper},c.a.createElement(s.a,{variant:"h6",component:"h6"},"Have your order arrived?"),c.a.createElement(v.a,{variant:"contained",color:"primary",className:F.confirmBtn,onClick:function(){var e=sessionStorage.getItem(T.b);e&&L.collection(C.b).doc(e).update(Object(n.a)(Object(n.a)({},t),{},{status:"completed"})).then((function(){console.log("Document successfully updated!"),P(e)})).catch((function(e){console.error("Error updating document: ",e)}))}},"Confirm"))))}}}]);
//# sourceMappingURL=20.ccbbcdef.chunk.js.map