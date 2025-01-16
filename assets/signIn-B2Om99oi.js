import{g as i}from"./get-element-u0L3Yg2z.js";let n=null;function s(e){window.innerWidth<=767&&n!=="mobile"?(n="mobile",e.innerHTML=`<div class="sing-in__mobile">
<a class="sing-in__mobile-link">
<svg class="sing-in__mobile-svg"><use href="#arrow"></use></svg>
</a>
<span class="sing-in__mobile-title">Account</span>
</div>`):window.innerWidth>=767&&n!=="desktop"&&(n="desktop",e.innerHTML=`<a
class="sing-in__logo-link"
href="#">
<svg class="sing-in__logo-svg">
<use href="#logo"></use>
</svg>
</a>`)}function o(e){addEventListener("resize",()=>{s(e)})}document.addEventListener("DOMContentLoaded",async function(){s(i(".sing-in__header")),o(i(".sing-in__header"))});
