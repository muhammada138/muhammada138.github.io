import{j as s}from"./ThemeToggle.BL6aRmNx.js";import{r as o}from"./index.CVf8TyFT.js";function c(){const[t,e]=o.useState(!1);o.useEffect(()=>{e(localStorage.getItem("muted")==="true")},[]);function n(){const r=!t;e(r),localStorage.setItem("muted",String(r))}return s.jsx("button",{onClick:n,className:`text-[10px] text-[#7a82a4] dark:text-[#4b5070]
                 hover:text-[#0d1124] dark:hover:text-[#dde0f0]
                 transition-colors bg-transparent border-none cursor-pointer font-[inherit]`,children:t?"[unmute]":"[mute]"})}export{c as M};
