import{P as n}from"./index-BcpGk5sn.js";import{_ as p}from"./TomSelect.vue_vue_type_script_setup_true_lang-WOBMnv-K.js";import{d as b,r as v,h as w,i as o,j as l,w as a,u as t,F as x,o as y,Q as s,k as r,t as m}from"./index-DrwtuItr.js";import"./Button.vue_vue_type_script_setup_true_lang-BEdiinS3.js";const k={class:"grid grid-cols-12 gap-6 mt-5"},S={class:"col-span-12 intro-y lg:col-span-6"},J={class:"flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"},g={class:"p-5"},D={class:"mt-2"},L={class:"mt-3"},C={class:"mt-2"},h={class:"flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"},V={class:"p-5"},F={class:"flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"},_={class:"p-5"},M={class:"col-span-12 intro-y lg:col-span-6"},T={class:"flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"},A={class:"p-5"},P={class:"flex"},R={class:"flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"},N={class:"p-5"},B={class:"flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"},H={class:"p-5"},O=b({__name:"TomSelect",setup(I){const d=v("1"),f=v(["1","3"]),c=v(["2","3","5"]);return(E,e)=>(y(),w(x,null,[e[35]||(e[35]=o("div",{class:"flex items-center mt-8 intro-y"},[o("h2",{class:"mr-auto text-lg font-medium"},"Tom Select")],-1)),o("div",k,[o("div",S,[l(t(n),{class:"intro-y box"},{default:a(({toggle:u})=>[o("div",J,[e[8]||(e[8]=o("h2",{class:"mr-auto text-base font-medium"},"Basic Select",-1)),l(t(s),{class:"w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0"},{default:a(()=>[l(t(s).Label,{htmlFor:"show-example-1"},{default:a(()=>e[7]||(e[7]=[r(" Show example code ")])),_:1}),l(t(s).Input,{id:"show-example-1",onClick:u,class:"ml-3 mr-0",type:"checkbox"},null,8,["onClick"])]),_:2},1024)]),o("div",g,[l(t(n).Panel,null,{default:a(()=>[o("div",null,[e[10]||(e[10]=o("label",null,"Basic",-1)),o("div",D,[l(t(p),{modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=i=>d.value=i),options:{placeholder:"Select your favorite actors"},class:"w-full"},{default:a(()=>e[9]||(e[9]=[o("option",{value:"1"},"Leonardo DiCaprio",-1),o("option",{value:"2"},"Johnny Deep",-1),o("option",{value:"3"},"Robert Downey, Jr",-1),o("option",{value:"4"},"Samuel L. Jackson",-1),o("option",{value:"5"},"Morgan Freeman",-1)])),_:1},8,["modelValue"])])]),o("div",L,[e[12]||(e[12]=o("label",null,"Nested",-1)),o("div",C,[l(t(p),{modelValue:d.value,"onUpdate:modelValue":e[1]||(e[1]=i=>d.value=i),options:{placeholder:"Select your favorite actors"},class:"w-full"},{default:a(()=>e[11]||(e[11]=[o("optgroup",{label:"American Actors"},[o("option",{value:"1"},"Leonardo DiCaprio"),o("option",{value:"2"},"Johnny Deep"),o("option",{value:"3"},"Robert Downey, Jr"),o("option",{value:"4"},"Samuel L. Jackson"),o("option",{value:"5"},"Morgan Freeman")],-1),o("optgroup",{label:"American Actresses"},[o("option",{value:"6"},"Scarlett Johansson"),o("option",{value:"7"},"Jessica Alba"),o("option",{value:"8"},"Jennifer Lawrence"),o("option",{value:"9"},"Emma Stone"),o("option",{value:"10"},"Angelina Jolie")],-1)])),_:1},8,["modelValue"])])])]),_:1}),l(t(n).Panel,{type:"source"},{default:a(()=>[l(t(n).Highlight,null,{default:a(()=>e[13]||(e[13]=[r(m(`
              <!-- BEGIN: Basic Select -->
              <div>
                <label>Basic</label>
                <div class="mt-2">
                  <TomSelect
                    v-model="select"
                    :options="{
                      placeholder: 'Select your favorite actors',
                    }"
                    class="w-full"
                  >
                    <option value="1">Leonardo DiCaprio</option>
                    <option value="2">Johnny Deep</option>
                    <option value="3">Robert Downey, Jr</option>
                    <option value="4">Samuel L. Jackson</option>
                    <option value="5">Morgan Freeman</option>
                  </TomSelect>
                </div>
              </div>
              <!-- END: Basic Select -->
              <!-- BEGIN: Nested Select -->
              <div class="mt-3">
                <label>Nested</label>
                <div class="mt-2">
                  <TomSelect
                    v-model="select"
                    :options="{
                      placeholder: 'Select your favorite actors',
                    }"
                    class="w-full"
                  >
                    <optgroup label="American Actors">
                      <option value="1">Leonardo DiCaprio</option>
                      <option value="2">Johnny Deep</option>
                      <option value="3">Robert Downey, Jr</option>
                      <option value="4">Samuel L. Jackson</option>
                      <option value="5">Morgan Freeman</option>
                    </optgroup>
                    <optgroup label="American Actresses">
                      <option value="6">Scarlett Johansson</option>
                      <option value="7">Jessica Alba</option>
                      <option value="8">Jennifer Lawrence</option>
                      <option value="9">Emma Stone</option>
                      <option value="10">Angelina Jolie</option>
                    </optgroup>
                  </TomSelect>
                </div>
              </div>
              <!-- END: Nested Select -->
              `))])),_:1})]),_:1})])]),_:1}),l(t(n),{class:"mt-5 intro-y box"},{default:a(({toggle:u})=>[o("div",h,[e[15]||(e[15]=o("h2",{class:"mr-auto text-base font-medium"},"Multiple Select",-1)),l(t(s),{class:"w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0"},{default:a(()=>[l(t(s).Label,{htmlFor:"show-example-2"},{default:a(()=>e[14]||(e[14]=[r(" Show example code ")])),_:1}),l(t(s).Input,{id:"show-example-2",onClick:u,class:"ml-3 mr-0",type:"checkbox"},null,8,["onClick"])]),_:2},1024)]),o("div",V,[l(t(n).Panel,null,{default:a(()=>[l(t(p),{modelValue:f.value,"onUpdate:modelValue":e[2]||(e[2]=i=>f.value=i),options:{placeholder:"Select your favorite actors"},class:"w-full",multiple:""},{default:a(()=>e[16]||(e[16]=[o("option",{value:"1"},"Leonardo DiCaprio",-1),o("option",{value:"2"},"Johnny Deep",-1),o("option",{value:"3"},"Robert Downey, Jr",-1),o("option",{value:"4"},"Samuel L. Jackson",-1),o("option",{value:"5"},"Morgan Freeman",-1)])),_:1},8,["modelValue"])]),_:1}),l(t(n).Panel,{type:"source"},{default:a(()=>[l(t(n).Highlight,null,{default:a(()=>e[17]||(e[17]=[r(m(`
              <TomSelect
                v-model="selectMultiple"
                :options="{
                  placeholder: 'Select your favorite actors',
                }"
                class="w-full"
                multiple
              >
                <option value="1">Leonardo DiCaprio</option>
                <option value="2">Johnny Deep</option>
                <option value="3">Robert Downey, Jr</option>
                <option value="4">Samuel L. Jackson</option>
                <option value="5">Morgan Freeman</option>
              </TomSelect>
              `))])),_:1})]),_:1})])]),_:1}),l(t(n),{class:"mt-5 intro-y box"},{default:a(({toggle:u})=>[o("div",F,[e[19]||(e[19]=o("h2",{class:"mr-auto text-base font-medium"},"Header",-1)),l(t(s),{class:"w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0"},{default:a(()=>[l(t(s).Label,{htmlFor:"show-example-3"},{default:a(()=>e[18]||(e[18]=[r(" Show example code ")])),_:1}),l(t(s).Input,{id:"show-example-3",onClick:u,class:"ml-3 mr-0",type:"checkbox"},null,8,["onClick"])]),_:2},1024)]),o("div",_,[l(t(n).Panel,null,{default:a(()=>[l(t(p),{modelValue:c.value,"onUpdate:modelValue":e[3]||(e[3]=i=>c.value=i),options:{placeholder:"Select your favorite actors",plugins:{dropdown_header:{title:"Actors"}}},class:"w-full",multiple:""},{default:a(()=>e[20]||(e[20]=[o("option",{value:"1"},"Leonardo DiCaprio",-1),o("option",{value:"2"},"Johnny Deep",-1),o("option",{value:"3"},"Robert Downey, Jr",-1),o("option",{value:"4"},"Samuel L. Jackson",-1),o("option",{value:"5"},"Morgan Freeman",-1)])),_:1},8,["modelValue"])]),_:1}),l(t(n).Panel,{type:"source"},{default:a(()=>[l(t(n).Highlight,null,{default:a(()=>e[21]||(e[21]=[r(m(`
              <TomSelect
                v-model="selectHeader"
                :options="{
                  placeholder: 'Select your favorite actors',
                  plugins: {
                    dropdown_header: {
                      title: 'Actors',
                    },
                  },
                }"
                class="w-full"
                multiple
              >
                <option value="1">Leonardo DiCaprio</option>
                <option value="2">Johnny Deep</option>
                <option value="3">Robert Downey, Jr</option>
                <option value="4">Samuel L. Jackson</option>
                <option value="5">Morgan Freeman</option>
              </TomSelect>
              `))])),_:1})]),_:1})])]),_:1})]),o("div",M,[l(t(n),{class:"intro-y box"},{default:a(({toggle:u})=>[o("div",T,[e[23]||(e[23]=o("h2",{class:"mr-auto text-base font-medium"},"Input Group",-1)),l(t(s),{class:"w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0"},{default:a(()=>[l(t(s).Label,{htmlFor:"show-example-4"},{default:a(()=>e[22]||(e[22]=[r(" Show example code ")])),_:1}),l(t(s).Input,{id:"show-example-4",onClick:u,class:"ml-3 mr-0",type:"checkbox"},null,8,["onClick"])]),_:2},1024)]),o("div",A,[l(t(n).Panel,null,{default:a(()=>[o("div",P,[e[25]||(e[25]=o("div",{class:"z-30 flex items-center justify-center w-10 -mr-1 border rounded-l bg-slate-100 text-slate-600 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400"}," @ ",-1)),l(t(p),{modelValue:d.value,"onUpdate:modelValue":e[4]||(e[4]=i=>d.value=i),class:"w-full"},{default:a(()=>e[24]||(e[24]=[o("option",{value:"1"},"Leonardo DiCaprio",-1),o("option",{value:"2"},"Johnny Deep",-1),o("option",{value:"3"},"Robert Downey, Jr",-1),o("option",{value:"4"},"Samuel L. Jackson",-1),o("option",{value:"5"},"Morgan Freeman",-1)])),_:1},8,["modelValue"])])]),_:1}),l(t(n).Panel,{type:"source"},{default:a(()=>[l(t(n).Highlight,null,{default:a(()=>e[26]||(e[26]=[r(m(`
              <div class="flex">
                <div class="flex">
                  <div
                    class="z-30 flex items-center justify-center w-10 -mr-1 border rounded-l bg-slate-100 text-slate-600 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400"
                  >
                    @
                  </div>
                  <TomSelect v-model="select" class="w-full">
                    <option value="1">Leonardo DiCaprio</option>
                    <option value="2">Johnny Deep</option>
                    <option value="3">Robert Downey, Jr</option>
                    <option value="4">Samuel L. Jackson</option>
                    <option value="5">Morgan Freeman</option>
                  </TomSelect>
                </div>
              </div>
              `))])),_:1})]),_:1})])]),_:1}),l(t(n),{class:"mt-5 intro-y box"},{default:a(({toggle:u})=>[o("div",R,[e[28]||(e[28]=o("h2",{class:"mr-auto text-base font-medium"},"Disabled",-1)),l(t(s),{class:"w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0"},{default:a(()=>[l(t(s).Label,{htmlFor:"show-example-5"},{default:a(()=>e[27]||(e[27]=[r(" Show example code ")])),_:1}),l(t(s).Input,{id:"show-example-5",onClick:u,class:"ml-3 mr-0",type:"checkbox"},null,8,["onClick"])]),_:2},1024)]),o("div",N,[l(t(n).Panel,null,{default:a(()=>[l(t(p),{modelValue:d.value,"onUpdate:modelValue":e[5]||(e[5]=i=>d.value=i),class:"w-full",disabled:""},{default:a(()=>e[29]||(e[29]=[o("option",{value:"1"},"Leonardo DiCaprio",-1),o("option",{value:"2"},"Johnny Deep",-1),o("option",{value:"3"},"Robert Downey, Jr",-1),o("option",{value:"4"},"Samuel L. Jackson",-1),o("option",{value:"5"},"Morgan Freeman",-1)])),_:1},8,["modelValue"])]),_:1}),l(t(n).Panel,{type:"source"},{default:a(()=>[l(t(n).Highlight,null,{default:a(()=>e[30]||(e[30]=[r(m(`
              <TomSelect v-model="select" class="w-full" disabled>
                <option value="1">Leonardo DiCaprio</option>
                <option value="2">Johnny Deep</option>
                <option value="3">Robert Downey, Jr</option>
                <option value="4">Samuel L. Jackson</option>
                <option value="5">Morgan Freeman</option>
              </TomSelect>
              `))])),_:1})]),_:1})])]),_:1}),l(t(n),{class:"mt-5 intro-y box"},{default:a(({toggle:u})=>[o("div",B,[e[32]||(e[32]=o("h2",{class:"mr-auto text-base font-medium"},"Disabled Option",-1)),l(t(s),{class:"w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0"},{default:a(()=>[l(t(s).Label,{htmlFor:"show-example-6"},{default:a(()=>e[31]||(e[31]=[r(" Show example code ")])),_:1}),l(t(s).Input,{id:"show-example-6",onClick:u,class:"ml-3 mr-0",type:"checkbox"},null,8,["onClick"])]),_:2},1024)]),o("div",H,[l(t(n).Panel,null,{default:a(()=>[l(t(p),{modelValue:d.value,"onUpdate:modelValue":e[6]||(e[6]=i=>d.value=i),class:"w-full"},{default:a(()=>e[33]||(e[33]=[o("option",{value:"1",disabled:""},"Leonardo DiCaprio",-1),o("option",{value:"2"},"Johnny Deep",-1),o("option",{value:"3"},"Robert Downey, Jr",-1),o("option",{value:"4",disabled:""},"Samuel L. Jackson",-1),o("option",{value:"5"},"Morgan Freeman",-1)])),_:1},8,["modelValue"])]),_:1}),l(t(n).Panel,{type:"source"},{default:a(()=>[l(t(n).Highlight,null,{default:a(()=>e[34]||(e[34]=[r(m(`
              <TomSelect v-model="select" class="w-full">
                <option value="1" disabled>Leonardo DiCaprio</option>
                <option value="2">Johnny Deep</option>
                <option value="3">Robert Downey, Jr</option>
                <option value="4" disabled>Samuel L. Jackson</option>
                <option value="5">Morgan Freeman</option>
              </TomSelect>
              `))])),_:1})]),_:1})])]),_:1})])])],64))}});export{O as default};
