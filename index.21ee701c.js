var e=document.querySelectorAll("form"),r=!0,t=!1,l=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done);r=!0){var n=o.value.querySelectorAll("input"),i=!0,u=!1,c=void 0;try{for(var f,y=n[Symbol.iterator]();!(i=(f=y.next()).done);i=!0){var s=f.value,v=document.createElement("label");v.setAttribute("for",s.id),v.textContent=s.name,v.className="field-label",s.before(v),s.setAttribute("placeholder",function(e){for(var r=e.toLowerCase(),t=0;t<e.length;t++)e[t]!==e[t].toLowerCase()&&(r=r.slice(0,t)+" "+r.slice(t));return r[0].toUpperCase()+r.slice(1)}(s.name))}}catch(e){u=!0,c=e}finally{try{i||null==y.return||y.return()}finally{if(u)throw c}}}}catch(e){t=!0,l=e}finally{try{r||null==a.return||a.return()}finally{if(t)throw l}}
//# sourceMappingURL=index.21ee701c.js.map
