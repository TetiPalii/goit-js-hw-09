const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let o=null;console.log(e),t.addEventListener("click",(function(){t.disabled=!0,o=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.f5389607.js.map
