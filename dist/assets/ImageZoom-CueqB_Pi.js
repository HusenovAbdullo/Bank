import{P as x}from"./index-Qxwy0n5N.js";import{d as W,o as j,h as H,i as o,j as d,w as p,u as s,F as z,L as C,k as M,y as R,t as _}from"./index-Tdtmmhim.js";import"./Button.vue_vue_type_script_setup_true_lang-DdNVJ4XG.js";+function(){function y(h){var f=h.getBoundingClientRect(),g=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,l=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return{top:f.top+g,left:f.left+l}}var T=80,a=function(){function h(){var i=document.createElement("img");i.onload=function(){b=Number(i.height),w=Number(i.width),f()},i.src=e.currentSrc||e.src}function f(){r=document.createElement("div"),r.className="zoom-img-wrap",r.style.position="absolute",r.style.top=y(e).top+"px",r.style.left=y(e).left+"px",c=e.cloneNode(),c.style.visibility="hidden",e.style.width=e.offsetWidth+"px",e.parentNode.replaceChild(c,e),document.body.appendChild(r),r.appendChild(e),e.classList.add("zoom-img"),e.setAttribute("data-action","zoom-out"),n=document.createElement("div"),n.className="zoom-overlay",document.body.appendChild(n),g(),l()}function g(){e.offsetWidth;var i=w,t=b,m=i/e.width,k=window.innerHeight-T,B=window.innerWidth-T,S=i/t,L=B/k;v=i<B&&t<k?m:S<L?k/t*m:B/i*m}function l(){e.offsetWidth;var i=y(e),t=window.pageYOffset,m=t+window.innerHeight/2,k=window.innerWidth/2,B=i.top+e.height/2,S=i.left+e.width/2,L=Math.round(m-B),N=Math.round(k-S),A="scale("+v+")",E="translate("+N+"px, "+L+"px) translateZ(0)";e.style.webkitTransform=A,e.style.msTransform=A,e.style.transform=A,r.style.webkitTransform=E,r.style.msTransform=E,r.style.transform=E,document.body.classList.add("zoom-overlay-open")}function P(){if(document.body.classList.remove("zoom-overlay-open"),document.body.classList.add("zoom-overlay-transitioning"),e.style.webkitTransform="",e.style.msTransform="",e.style.transform="",r.style.webkitTransform="",r.style.msTransform="",r.style.transform="",!1 in document.body.style)return u();r.addEventListener("transitionend",u),r.addEventListener("webkitTransitionEnd",u)}function u(){e.removeEventListener("transitionend",u),e.removeEventListener("webkitTransitionEnd",u),r&&r.parentNode&&(e.classList.remove("zoom-img"),e.style.width="",e.setAttribute("data-action","zoom"),c.parentNode.replaceChild(e,c),r.parentNode.removeChild(r),n.parentNode.removeChild(n),document.body.classList.remove("zoom-overlay-transitioning"))}var b=null,w=null,n=null,v=null,e=null,r=null,c=null;return function(i){return e=i,{zoomImage:h,close:P,dispose:u}}}();(function(){function h(){document.body.addEventListener("click",function(t){t.target.getAttribute("data-action")==="zoom"&&t.target.tagName==="IMG"&&f(t)})}function f(t){if(t.stopPropagation(),!document.body.classList.contains("zoom-overlay-open")){if(t.metaKey||t.ctrlKey)return g();l({forceDispose:!0}),r=a(t.target),r.zoomImage(),P()}}function g(){window.open(event.target.getAttribute("data-original")||event.target.currentSrc||event.target.src,"_blank")}function l(t){t=t||{forceDispose:!1},r&&(r[t.forceDispose?"dispose":"close"](),u(),r=null)}function P(){window.addEventListener("scroll",b),document.addEventListener("click",n),document.addEventListener("keyup",w),document.addEventListener("touchstart",v),document.addEventListener("touchend",n)}function u(){window.removeEventListener("scroll",b),document.removeEventListener("keyup",w),document.removeEventListener("click",n),document.removeEventListener("touchstart",v),document.removeEventListener("touchend",n)}function b(t){c===null&&(c=window.pageYOffset);var m=c-window.pageYOffset;Math.abs(m)>=40&&l()}function w(t){t.keyCode==27&&l()}function n(t){t.stopPropagation(),t.preventDefault(),l()}function v(t){i=t.touches[0].pageY,t.target.addEventListener("touchmove",e)}function e(t){Math.abs(t.touches[0].pageY-i)<=10||(l(),t.target.removeEventListener("touchmove",e))}var r=null,c=null,i=null;return{listen:h}})().listen()}();const q={"data-action":"zoom"},O=W({__name:"ImageZoom",setup(y){return(T,a)=>(j(),H("img",q))}}),D={class:"grid grid-cols-12 gap-6 mt-5"},F={class:"col-span-12 intro-y lg:col-span-6"},I={class:"flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"},Y={class:"p-5"},X={class:"leading-relaxed"},V={class:"w-full h-64 my-5 image-fit"},K={class:"float-left w-3/5 h-64 mr-6 image-fit"},$=W({__name:"ImageZoom",setup(y){return(T,a)=>(j(),H(z,null,[a[11]||(a[11]=o("div",{class:"flex items-center mt-8 intro-y"},[o("h2",{class:"mr-auto text-lg font-medium"},"Image Zoom")],-1)),o("div",D,[o("div",F,[d(s(x),{class:"intro-y box"},{default:p(({toggle:h})=>[o("div",I,[a[1]||(a[1]=o("h2",{class:"mr-auto text-base font-medium"},"Implementation",-1)),d(s(C),{class:"w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0"},{default:p(()=>[d(s(C).Label,{htmlFor:"show-example-1"},{default:p(()=>a[0]||(a[0]=[M(" Show example code ")])),_:1}),d(s(C).Input,{id:"show-example-1",onClick:h,class:"ml-3 mr-0",type:"checkbox"},null,8,["onClick"])]),_:2},1024)]),o("div",Y,[d(s(x).Panel,null,{default:p(()=>[o("div",X,[a[2]||(a[2]=o("p",{class:"mb-5"}," Trust fund seitan chia, wolf lomo letterpress Bushwick before they sold out. Carles kogi fixie, squid twee Tonx readymade cred typewriter scenester locavore kale chips vegan organic. Meggings pug wolf Shoreditch typewriter skateboard. McSweeney's iPhone chillwave, food truck direct trade disrupt flannel irony tousled Cosby sweater single-origin coffee. Organic disrupt bicycle rights, tattooed messenger bag flannel craft beer fashion axe bitters. Readymade sartorial craft beer, quinoa sustainable butcher Marfa Echo Park Terry Richardson gluten-free flannel retro cred mlkshk banjo. Salvia 90's art party Blue Bottle, PBR&B cardigan 8-bit. ",-1)),a[3]||(a[3]=o("p",{class:"mb-5"}," Meggings irony fashion axe, tattooed master cleanse Blue Bottle stumptown bitters authentic flannel freegan paleo letterpress ugh sriracha. Wolf PBR&B art party aesthetic meh cliche. Sartorial before they sold out deep v, aesthetic PBR&B craft beer post-ironic synth keytar pork belly skateboard pour-over. Tonx cray pug Etsy, gastropub ennui wolf ethnic Odd Future viral master cleanse skateboard banjo. Pitchfork scenester cornhole, whatever try-hard ethnic banjo +1 gastropub American Apparel vinyl skateboard Shoreditch seitan. Blue Bottle keffiyeh Austin Helvetica art party. Portland ethnic fixie, beard retro direct trade ugh scenester Tumblr readymade authentic plaid pickled hashtag biodiesel. ",-1)),o("div",V,[d(s(O),{alt:"Midone Tailwind HTML Admin Template",src:s(R)[0].images[0],class:"w-full rounded-md"},null,8,["src"])]),a[4]||(a[4]=o("p",{class:"mb-5"}," Thundercats freegan Truffaut, four loko twee Austin scenester lo-fi seitan High Life paleo quinoa cray. Schlitz butcher ethical Tumblr, pop-up DIY keytar ethnic iPhone PBR sriracha. Tonx direct trade bicycle rights gluten-free flexitarian asymmetrical. Whatever drinking vinegar PBR XOXO Bushwick gentrify. Cliche semiotics banjo retro squid Wes Anderson. Fashion axe dreamcatcher you probably haven't heard of them bicycle rights. Tote bag organic four loko ethical selfies gastropub, PBR fingerstache tattooed bicycle rights. ",-1)),a[5]||(a[5]=o("p",{class:"mb-5"}," Ugh Portland Austin, distillery tattooed typewriter polaroid pug Banksy Neutra keffiyeh. Shoreditch mixtape wolf PBR&B, tote bag dreamcatcher literally bespoke Odd Future selfies 90's master cleanse vegan. Flannel tofu deep v next level pickled, authentic Etsy Shoreditch literally swag photo booth iPhone pug semiotics banjo. Bicycle rights butcher Blue Bottle, actually DIY semiotics Banksy banjo mixtape Austin pork belly post-ironic. American Apparel gastropub hashtag, McSweeney's master cleanse occupy High Life bitters wayfarers next level bicycle rights. Wolf chia Terry Richardson, pop-up plaid kitsch ugh. Butcher +1 Carles, swag selfies Blue Bottle viral. ",-1)),a[6]||(a[6]=o("p",{class:"mb-5"}," Keffiyeh food truck organic letterpress leggings iPhone four loko hella pour-over occupy, Wes Anderson cray post-ironic. Neutra retro fixie gastropub +1, High Life semiotics. Vinyl distillery Etsy freegan flexitarian cliche jean shorts, Schlitz wayfarers skateboard tousled irony locavore XOXO meh. Ethnic Wes Anderson McSweeney's messenger bag, mixtape XOXO slow-carb cornhole aesthetic Marfa banjo Thundercats bitters. Raw denim banjo typewriter cray Tumblr, High Life single-origin coffee. 90's Tumblr cred, Terry Richardson occupy raw denim tofu fashion axe photo booth banh mi. Trust fund locavore Helvetica, fashion axe selvage authentic Shoreditch swag selfies stumptown +1. ",-1)),o("div",K,[d(s(O),{alt:"Midone Tailwind HTML Admin Template",src:s(R)[0].images[1],class:"w-full rounded-md"},null,8,["src"])]),a[7]||(a[7]=o("p",{class:"mb-5"}," Scenester chambray slow-carb, trust fund biodiesel ugh bicycle rights cornhole. Gentrify messenger bag Truffaut tousled roof party pork belly leggings, photo booth jean shorts. Austin readymade PBR plaid chambray. Squid Echo Park pour-over, wayfarers forage whatever locavore typewriter artisan deep v four loko. Locavore occupy Neutra Pitchfork McSweeney's, wayfarers fingerstache. Actually asymmetrical drinking vinegar yr brunch biodiesel. Before they sold out sustainable readymade craft beer Portland gastropub squid Austin, roof party Thundercats chambray narwhal Bushwick pug. ",-1)),a[8]||(a[8]=o("p",{class:"mb-5"}," Literally typewriter chillwave, bicycle rights Carles flannel wayfarers. Biodiesel farm-to-table actually, locavore keffiyeh hella shabby chic pour-over try-hard Bushwick. Sriracha American Apparel Brooklyn, synth cray stumptown blog Bushwick +1 VHS hashtag. Wolf umami Carles Marfa, 90's food truck Cosby sweater. Fanny pack try-hard keytar pop-up readymade, master cleanse four loko trust fund polaroid salvia. Photo booth kitsch forage chambray, Carles scenester slow-carb lomo cardigan dreamcatcher. Swag asymmetrical leggings, biodiesel Tonx shabby chic ethnic master cleanse freegan. ",-1)),a[9]||(a[9]=o("p",null," Raw denim Banksy shabby chic, 8-bit salvia narwhal fashion axe. Ethical Williamsburg four loko, chia kale chips distillery Shoreditch messenger bag swag iPhone Pitchfork. Viral PBR&B single-origin coffee quinoa readymade, ethical chillwave drinking vinegar gluten-free Wes Anderson kitsch Tumblr synth actually bitters. Butcher McSweeney's forage mlkshk kogi fingerstache. Selvage scenester butcher Shoreditch, Carles beard plaid disrupt DIY. Pug readymade selvage retro, Austin salvia vinyl master cleanse flexitarian deep v bicycle rights plaid Terry Richardson mlkshk pour-over. Trust fund try-hard banh mi Brooklyn, 90's Etsy kogi YOLO salvia. ",-1))])]),_:1}),d(s(x).Panel,{type:"source"},{default:p(()=>[d(s(x).Highlight,null,{default:p(()=>a[10]||(a[10]=[M(_(`
              <div class="leading-relaxed">
                <p class="mb-5">
                  Trust fund seitan chia, wolf lomo letterpress Bushwick before
                  they sold out. Carles kogi fixie, squid twee Tonx readymade
                  cred typewriter scenester locavore kale chips vegan organic.
                  Meggings pug wolf Shoreditch typewriter skateboard.
                  McSweeney's iPhone chillwave, food truck direct trade disrupt
                  flannel irony tousled Cosby sweater single-origin coffee.
                  Organic disrupt bicycle rights, tattooed messenger bag flannel
                  craft beer fashion axe bitters. Readymade sartorial craft
                  beer, quinoa sustainable butcher Marfa Echo Park Terry
                  Richardson gluten-free flannel retro cred mlkshk banjo. Salvia
                  90's art party Blue Bottle, PBR&B cardigan 8-bit.
                </p>
                <p class="mb-5">
                  Meggings irony fashion axe, tattooed master cleanse Blue
                  Bottle stumptown bitters authentic flannel freegan paleo
                  letterpress ugh sriracha. Wolf PBR&B art party aesthetic meh
                  cliche. Sartorial before they sold out deep v, aesthetic PBR&B
                  craft beer post-ironic synth keytar pork belly skateboard
                  pour-over. Tonx cray pug Etsy, gastropub ennui wolf ethnic Odd
                  Future viral master cleanse skateboard banjo. Pitchfork
                  scenester cornhole, whatever try-hard ethnic banjo +1
                  gastropub American Apparel vinyl skateboard Shoreditch seitan.
                  Blue Bottle keffiyeh Austin Helvetica art party. Portland
                  ethnic fixie, beard retro direct trade ugh scenester Tumblr
                  readymade authentic plaid pickled hashtag biodiesel.
                </p>
                <div class="w-full h-64 my-5 image-fit">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    :src="fakerData[0].images[0]"
                    class="w-full rounded-md"
                  />
                </div>
                <p class="mb-5">
                  Thundercats freegan Truffaut, four loko twee Austin scenester
                  lo-fi seitan High Life paleo quinoa cray. Schlitz butcher
                  ethical Tumblr, pop-up DIY keytar ethnic iPhone PBR sriracha.
                  Tonx direct trade bicycle rights gluten-free flexitarian
                  asymmetrical. Whatever drinking vinegar PBR XOXO Bushwick
                  gentrify. Cliche semiotics banjo retro squid Wes Anderson.
                  Fashion axe dreamcatcher you probably haven't heard of them
                  bicycle rights. Tote bag organic four loko ethical selfies
                  gastropub, PBR fingerstache tattooed bicycle rights.
                </p>
                <p class="mb-5">
                  Ugh Portland Austin, distillery tattooed typewriter polaroid
                  pug Banksy Neutra keffiyeh. Shoreditch mixtape wolf PBR&B,
                  tote bag dreamcatcher literally bespoke Odd Future selfies
                  90's master cleanse vegan. Flannel tofu deep v next level
                  pickled, authentic Etsy Shoreditch literally swag photo booth
                  iPhone pug semiotics banjo. Bicycle rights butcher Blue
                  Bottle, actually DIY semiotics Banksy banjo mixtape Austin
                  pork belly post-ironic. American Apparel gastropub hashtag,
                  McSweeney's master cleanse occupy High Life bitters wayfarers
                  next level bicycle rights. Wolf chia Terry Richardson, pop-up
                  plaid kitsch ugh. Butcher +1 Carles, swag selfies Blue Bottle
                  viral.
                </p>
                <p class="mb-5">
                  Keffiyeh food truck organic letterpress leggings iPhone four
                  loko hella pour-over occupy, Wes Anderson cray post-ironic.
                  Neutra retro fixie gastropub +1, High Life semiotics. Vinyl
                  distillery Etsy freegan flexitarian cliche jean shorts,
                  Schlitz wayfarers skateboard tousled irony locavore XOXO meh.
                  Ethnic Wes Anderson McSweeney's messenger bag, mixtape XOXO
                  slow-carb cornhole aesthetic Marfa banjo Thundercats bitters.
                  Raw denim banjo typewriter cray Tumblr, High Life
                  single-origin coffee. 90's Tumblr cred, Terry Richardson
                  occupy raw denim tofu fashion axe photo booth banh mi. Trust
                  fund locavore Helvetica, fashion axe selvage authentic
                  Shoreditch swag selfies stumptown +1.
                </p>
                <div class="float-left w-3/5 h-64 mr-6 image-fit">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    :src="fakerData[0].images[1]"
                    class="w-full rounded-md"
                  />
                </div>
                <p class="mb-5">
                  Scenester chambray slow-carb, trust fund biodiesel ugh bicycle
                  rights cornhole. Gentrify messenger bag Truffaut tousled roof
                  party pork belly leggings, photo booth jean shorts. Austin
                  readymade PBR plaid chambray. Squid Echo Park pour-over,
                  wayfarers forage whatever locavore typewriter artisan deep v
                  four loko. Locavore occupy Neutra Pitchfork McSweeney's,
                  wayfarers fingerstache. Actually asymmetrical drinking vinegar
                  yr brunch biodiesel. Before they sold out sustainable
                  readymade craft beer Portland gastropub squid Austin, roof
                  party Thundercats chambray narwhal Bushwick pug.
                </p>
                <p class="mb-5">
                  Literally typewriter chillwave, bicycle rights Carles flannel
                  wayfarers. Biodiesel farm-to-table actually, locavore keffiyeh
                  hella shabby chic pour-over try-hard Bushwick. Sriracha
                  American Apparel Brooklyn, synth cray stumptown blog Bushwick
                  +1 VHS hashtag. Wolf umami Carles Marfa, 90's food truck
                  Cosby sweater. Fanny pack try-hard keytar pop-up readymade,
                  master cleanse four loko trust fund polaroid salvia. Photo
                  booth kitsch forage chambray, Carles scenester slow-carb lomo
                  cardigan dreamcatcher. Swag asymmetrical leggings, biodiesel
                  Tonx shabby chic ethnic master cleanse freegan.
                </p>
                <p>
                  Raw denim Banksy shabby chic, 8-bit salvia narwhal fashion
                  axe. Ethical Williamsburg four loko, chia kale chips
                  distillery Shoreditch messenger bag swag iPhone Pitchfork.
                  Viral PBR&B single-origin coffee quinoa readymade, ethical
                  chillwave drinking vinegar gluten-free Wes Anderson kitsch
                  Tumblr synth actually bitters. Butcher McSweeney's forage
                  mlkshk kogi fingerstache. Selvage scenester butcher
                  Shoreditch, Carles beard plaid disrupt DIY. Pug readymade
                  selvage retro, Austin salvia vinyl master cleanse flexitarian
                  deep v bicycle rights plaid Terry Richardson mlkshk pour-over.
                  Trust fund try-hard banh mi Brooklyn, 90's Etsy kogi YOLO
                  salvia.
                </p>
              </div>
              `))])),_:1})]),_:1})])]),_:1})])])],64))}});export{$ as default};
