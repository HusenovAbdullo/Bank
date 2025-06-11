import{P as a}from"./index-jpOUjCXS.js";import{_ as c}from"./Button.vue_vue_type_script_setup_true_lang-B_0nlnlX.js";import{d as w,r as b,g as k,o as _,h as T,O as C,aT as S,aU as B,aV as N,X as L,c as v,a as P,u as e,b as F,i as s,j as o,w as l,F as D,L as n,k as i,q as h,t as u,y}from"./index-BkxZ8ppa.js";import{_ as H,g as I}from"./colors-Cz3PgzZz.js";const g=w({__name:"TippyContent",props:{to:{},refKey:{},options:{}},setup(f){const d=f,t=b(),r=(m,p)=>{S(`[data-tooltip="${p.to}"]`,{plugins:[B],content:m,allowHTML:!0,arrow:N,popperOptions:{modifiers:[{name:"preventOverflow",options:{rootBoundary:"viewport"}}]},animateFill:!1,animation:"shift-away",theme:"light",trigger:"click",...p.options})},x=m=>{if(d.refKey){const p=L(`bind[${d.refKey}]`);p&&p(m)}};return k(()=>{t.value&&(r(t.value,d),x(t.value))}),(m,p)=>(_(),T("div",{ref_key:"tippyRef",ref:t},[C(m.$slots,"default")],512))}}),M=w({__name:"SimpleLineChart1",props:{width:{},height:{},lineColor:{}},setup(f){const d=f,t=v(()=>F().colorScheme),r=v(()=>{var m;return{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"# of Votes",data:[0,200,250,200,500,450,850,1050,950,1100,900,1200],borderWidth:2,borderColor:t.value&&((m=d.lineColor)!=null&&m.length)?d.lineColor:I("primary",.8),backgroundColor:"transparent",pointBorderColor:"transparent",tension:.4}]}}),x=v(()=>({maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{ticks:{display:!1},grid:{display:!1},border:{display:!1}},y:{ticks:{display:!1},grid:{display:!1},border:{display:!1}}}}));return(m,p)=>(_(),P(e(H),{type:"line",width:d.width,height:d.height,data:r.value,options:x.value},null,8,["width","height","data","options"]))}}),E={class:"grid grid-cols-12 gap-6 mt-5"},A={class:"col-span-12 intro-y lg:col-span-6"},$={class:"flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"},O={class:"p-5"},R={class:"text-center"},V={class:"flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"},G={class:"p-5"},U={class:"text-center"},W={class:"flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"},J={class:"p-5"},K={class:"text-center"},j={class:"col-span-12 intro-y lg:col-span-6"},q={class:"flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"},X={class:"p-5"},z={class:"text-center"},Q={class:"tooltip-content"},Y={class:"relative flex items-center py-1"},Z={class:"w-12 h-12 image-fit"},tt=["src"],et={class:"ml-4 mr-auto"},ot={class:"font-medium leading-relaxed dark:text-slate-200"},st={class:"flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"},lt={class:"p-5"},at={class:"text-center"},it={class:"tooltip-content"},nt={class:"flex items-center mt-2 sm:mt-0"},rt={class:"w-24 sm:w-32 lg:w-56"},ct=w({__name:"Tooltip",setup(f){return(d,t)=>(_(),T(D,null,[t[23]||(t[23]=s("div",{class:"flex items-center mt-8 intro-y"},[s("h2",{class:"mr-auto text-lg font-medium"},"Tooltip")],-1)),s("div",E,[s("div",A,[o(e(a),{class:"intro-y box"},{default:l(({toggle:r})=>[s("div",$,[t[1]||(t[1]=s("h2",{class:"mr-auto text-base font-medium"},"Basic Tooltip",-1)),o(e(n),{class:"w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0"},{default:l(()=>[o(e(n).Label,{htmlFor:"show-example-1"},{default:l(()=>t[0]||(t[0]=[i(" Show example code ")])),_:1}),o(e(n).Input,{id:"show-example-1",onClick:r,class:"ml-3 mr-0",type:"checkbox"},null,8,["onClick"])]),_:2},1024)]),s("div",O,[o(e(a).Panel,null,{default:l(()=>[s("div",R,[o(e(h),{as:e(c),variant:"primary",content:"This is awesome tooltip example!"},{default:l(()=>t[2]||(t[2]=[i(" Show Tooltip ")])),_:1},8,["as"])])]),_:1}),o(e(a).Panel,{type:"source"},{default:l(()=>[o(e(a).Highlight,null,{default:l(()=>t[3]||(t[3]=[i(u(`
              <div class="text-center">
                <Tippy
                  :as="Button"
                  variant="primary"
                  content="This is awesome tooltip example!"
                >
                  Show Tooltip
                </Tippy>
              </div>
              `))])),_:1})]),_:1})])]),_:1}),o(e(a),{class:"mt-5 intro-y box"},{default:l(({toggle:r})=>[s("div",V,[t[5]||(t[5]=s("h2",{class:"mr-auto text-base font-medium"},"On Click Tooltip",-1)),o(e(n),{class:"w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0"},{default:l(()=>[o(e(n).Label,{htmlFor:"show-example-2"},{default:l(()=>t[4]||(t[4]=[i(" Show example code ")])),_:1}),o(e(n).Input,{id:"show-example-2",onClick:r,class:"ml-3 mr-0",type:"checkbox"},null,8,["onClick"])]),_:2},1024)]),s("div",G,[o(e(a).Panel,null,{default:l(()=>[s("div",U,[o(e(h),{as:e(c),variant:"primary",content:"This is awesome tooltip example!",options:{trigger:"click"}},{default:l(()=>t[6]||(t[6]=[i(" Show Tooltip ")])),_:1},8,["as"])])]),_:1}),o(e(a).Panel,{type:"source"},{default:l(()=>[o(e(a).Highlight,null,{default:l(()=>t[7]||(t[7]=[i(u(`
              <div class="text-center">
                <Tippy
                  :as="Button"
                  variant="primary"
                  content="This is awesome tooltip example!"
                  :options="{
                    trigger: 'click',
                  }"
                >
                  Show Tooltip
                </Tippy>
              </div>
              `))])),_:1})]),_:1})])]),_:1}),o(e(a),{class:"mt-5 intro-y box"},{default:l(({toggle:r})=>[s("div",W,[t[9]||(t[9]=s("h2",{class:"mr-auto text-base font-medium"},"Light Tooltip",-1)),o(e(n),{class:"w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0"},{default:l(()=>[o(e(n).Label,{htmlFor:"show-example-3"},{default:l(()=>t[8]||(t[8]=[i(" Show example code ")])),_:1}),o(e(n).Input,{id:"show-example-3",onClick:r,class:"ml-3 mr-0",type:"checkbox"},null,8,["onClick"])]),_:2},1024)]),s("div",J,[o(e(a).Panel,null,{default:l(()=>[s("div",K,[o(e(h),{as:e(c),variant:"primary",content:"This is awesome tooltip example!",options:{theme:"light"}},{default:l(()=>t[10]||(t[10]=[i(" Show Tooltip ")])),_:1},8,["as"])])]),_:1}),o(e(a).Panel,{type:"source"},{default:l(()=>[o(e(a).Highlight,null,{default:l(()=>t[11]||(t[11]=[i(u(`
              <div class="text-center">
                <Tippy
                  :as="Button"
                  variant="primary"
                  content="This is awesome tooltip example!"
                  :options="{
                    theme: 'light',
                  }"
                >
                  Show Tooltip
                </Tippy>
              </div>
              `))])),_:1})]),_:1})])]),_:1})]),s("div",j,[o(e(a),{class:"intro-y box"},{default:l(({toggle:r})=>[s("div",q,[t[13]||(t[13]=s("h2",{class:"mr-auto text-base font-medium"},"Custom Tooltip Content",-1)),o(e(n),{class:"w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0"},{default:l(()=>[o(e(n).Label,{htmlFor:"show-example-4"},{default:l(()=>t[12]||(t[12]=[i(" Show example code ")])),_:1}),o(e(n).Input,{id:"show-example-4",onClick:r,class:"ml-3 mr-0",type:"checkbox"},null,8,["onClick"])]),_:2},1024)]),s("div",X,[o(e(a).Panel,null,{default:l(()=>[s("div",z,[o(e(c),{variant:"primary","data-tooltip":"custom-tooltip-content"},{default:l(()=>t[14]||(t[14]=[i(" Show Tooltip ")])),_:1})]),s("div",Q,[o(e(g),{to:"custom-tooltip-content"},{default:l(()=>[s("div",Y,[s("div",Z,[s("img",{alt:"Midone Tailwind HTML Admin Template",class:"rounded-full",src:e(y)[0].photos[0]},null,8,tt)]),s("div",et,[s("div",ot,u(e(y)[0].users[0].name),1),t[15]||(t[15]=s("div",{class:"text-slate-500 dark:text-slate-400"}," TailwindCSS 3+ HTML Admin Template ",-1))])])]),_:1})])]),_:1}),o(e(a).Panel,{type:"source"},{default:l(()=>[o(e(a).Highlight,null,{default:l(()=>t[16]||(t[16]=[i(u(`
              <!-- BEGIN: Custom Tooltip Toggle -->
              <div class="text-center">
                <Button variant="primary" data-tooltip="custom-tooltip-content">
                  Show Tooltip
                </Button>
              </div>
              <!-- END: Custom Tooltip Toggle -->
              <!-- BEGIN: Custom Tooltip Content -->
              <div class="tooltip-content">
                <TippyContent to="custom-tooltip-content">
                  <div class="relative flex items-center py-1">
                    <div class="w-12 h-12 image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        class="rounded-full"
                        :src="fakerData[0].photos[0]"
                      />
                    </div>
                    <div class="ml-4 mr-auto">
                      <div
                        class="font-medium leading-relaxed dark:text-slate-200"
                      >
                        {{ fakerData[0].users[0].name }}
                      </div>
                      <div class="text-slate-500 dark:text-slate-400">
                        TailwindCSS 3+ HTML Admin Template
                      </div>
                    </div>
                  </div>
                </TippyContent>
              </div>
              <!-- END: Custom Tooltip Content -->
              `))])),_:1})]),_:1})])]),_:1}),o(e(a),{class:"mt-5 intro-y box"},{default:l(({toggle:r})=>[s("div",st,[t[18]||(t[18]=s("h2",{class:"mr-auto text-base font-medium"},"Chart Tooltip",-1)),o(e(n),{class:"w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0"},{default:l(()=>[o(e(n).Label,{htmlFor:"show-example-5"},{default:l(()=>t[17]||(t[17]=[i(" Show example code ")])),_:1}),o(e(n).Input,{id:"show-example-5",onClick:r,class:"ml-3 mr-0",type:"checkbox"},null,8,["onClick"])]),_:2},1024)]),s("div",lt,[o(e(a).Panel,null,{default:l(()=>[s("div",at,[o(e(c),{variant:"primary","data-tooltip":"chart-tooltip"},{default:l(()=>t[19]||(t[19]=[i(" Show Tooltip ")])),_:1})]),s("div",it,[o(e(g),{to:"chart-tooltip",class:"py-1"},{default:l(()=>[t[21]||(t[21]=s("div",{class:"font-medium dark:text-slate-200"},"Net Worth",-1)),s("div",nt,[t[20]||(t[20]=s("div",{class:"flex w-20 mr-2 dark:text-slate-400"},[i(" USP: "),s("span",{class:"ml-auto font-medium text-success"}," +23% ")],-1)),s("div",rt,[o(e(M),{height:30})])])]),_:1})])]),_:1}),o(e(a).Panel,{type:"source"},{default:l(()=>[o(e(a).Highlight,null,{default:l(()=>t[22]||(t[22]=[i(u(`
              <!-- BEGIN: Custom Tooltip Toggle -->
              <div class="text-center">
                <Button variant="primary" data-tooltip="chart-tooltip">
                  Show Tooltip
                </Button>
              </div>
              <!-- END: Custom Tooltip Toggle -->
              <!-- BEGIN: Custom Tooltip Content -->
              <div class="tooltip-content">
                <TippyContent to="chart-tooltip" class="py-1">
                  <div class="font-medium dark:text-slate-200">Net Worth</div>
                  <div class="flex items-center mt-2 sm:mt-0">
                    <div class="flex w-20 mr-2 dark:text-slate-400">
                      USP:
                      <span class="ml-auto font-medium text-success">
                        +23%
                      </span>
                    </div>
                    <div class="w-24 sm:w-32 lg:w-56">
                      <SimpleLineChart1 :height="30" />
                    </div>
                  </div>
                </TippyContent>
              </div>
              <!-- END: Custom Tooltip Content -->
              `))])),_:1})]),_:1})])]),_:1})])])],64))}});export{ct as default};
