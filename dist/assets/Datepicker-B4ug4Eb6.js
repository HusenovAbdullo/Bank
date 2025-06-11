import{P as s}from"./index-Qxwy0n5N.js";import{d as M,r as c,h as _,i as a,j as l,w as o,u as t,F,o as B,L as n,k as r,t as f,_ as w,G as m,T as k}from"./index-Tdtmmhim.js";import{_ as D}from"./FormLabel.vue_vue_type_script_setup_true_lang-CC6k60Me.js";import{_ as p}from"./Litepicker.vue_vue_type_script_setup_true_lang-7Wf1je6B.js";import{_ as b}from"./Button.vue_vue_type_script_setup_true_lang-DdNVJ4XG.js";const C={class:"grid grid-cols-12 gap-6 mt-5 intro-y"},N={class:"col-span-12 lg:col-span-6"},P={class:"flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"},Y={class:"p-5"},L={class:"flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"},V={class:"p-5"},I={class:"relative w-56 mx-auto"},E={class:"absolute flex items-center justify-center w-10 h-full border rounded-l bg-slate-100 text-slate-500 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400"},S={class:"col-span-12 lg:col-span-6"},A={class:"flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"},T={class:"p-5"},W={class:"flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"},H={class:"p-5"},G={class:"text-center"},R={class:"col-span-12 sm:col-span-6"},U={class:"col-span-12 sm:col-span-6"},K=M({__name:"Datepicker",setup(O){const u=c(""),v=c(""),y=c(!1),x=h=>{y.value=h},g=c(null);return(h,e)=>(B(),_(F,null,[e[28]||(e[28]=a("div",{class:"flex items-center mt-8 intro-y"},[a("h2",{class:"mr-auto text-lg font-medium"},"Datepicker")],-1)),a("div",C,[a("div",N,[l(t(s),{class:"intro-y box"},{default:o(({toggle:i})=>[a("div",P,[e[9]||(e[9]=a("h2",{class:"mr-auto text-base font-medium"},"Basic Date Picker",-1)),l(t(n),{class:"w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0"},{default:o(()=>[l(t(n).Label,{htmlFor:"show-example-1"},{default:o(()=>e[8]||(e[8]=[r(" Show example code ")])),_:1}),l(t(n).Input,{id:"show-example-1",onClick:i,class:"ml-3 mr-0",type:"checkbox"},null,8,["onClick"])]),_:2},1024)]),a("div",Y,[l(t(s).Panel,null,{default:o(()=>[l(t(p),{modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=d=>u.value=d),options:{autoApply:!1,showWeekNumbers:!0,dropdowns:{minYear:1990,maxYear:null,months:!0,years:!0},lockDays:["2024-05-28","2024-28-05"]},class:"block w-56 mx-auto"},null,8,["modelValue"])]),_:1}),l(t(s).Panel,{type:"source"},{default:o(()=>[l(t(s).Highlight,null,{default:o(()=>e[10]||(e[10]=[r(f(`
              <Litepicker
                v-model="date"
                :options="{
                  autoApply: false,
                  showWeekNumbers: true,
                  dropdowns: {
                    minYear: 1990,
                    maxYear: null,
                    months: true,
                    years: true,
                  },
                }"
                class="block w-56 mx-auto"
              />
              `))])),_:1})]),_:1})])]),_:1}),l(t(s),{class:"mt-5 intro-y box"},{default:o(({toggle:i})=>[a("div",L,[e[12]||(e[12]=a("h2",{class:"mr-auto text-base font-medium"},"Input Group",-1)),l(t(n),{class:"w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0"},{default:o(()=>[l(t(n).Label,{htmlFor:"show-example-2"},{default:o(()=>e[11]||(e[11]=[r(" Show example code ")])),_:1}),l(t(n).Input,{id:"show-example-2",onClick:i,class:"ml-3 mr-0",type:"checkbox"},null,8,["onClick"])]),_:2},1024)]),a("div",V,[l(t(s).Panel,null,{default:o(()=>[a("div",I,[a("div",E,[l(t(w),{icon:"Calendar",class:"w-4 h-4"})]),l(t(p),{modelValue:u.value,"onUpdate:modelValue":e[1]||(e[1]=d=>u.value=d),options:{autoApply:!1,showWeekNumbers:!0,dropdowns:{minYear:1990,maxYear:null,months:!0,years:!0}},class:"pl-12"},null,8,["modelValue"])])]),_:1}),l(t(s).Panel,{type:"source"},{default:o(()=>[l(t(s).Highlight,null,{default:o(()=>e[13]||(e[13]=[r(f(`
              <div class="relative w-56 mx-auto">
                <div
                  class="absolute flex items-center justify-center w-10 h-full border rounded-l bg-slate-100 text-slate-500 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400"
                >
                  <Lucide icon="Calendar" class="w-4 h-4" />
                </div>
                <Litepicker
                  v-model="date"
                  :options="{
                    autoApply: false,
                    showWeekNumbers: true,
                    dropdowns: {
                      minYear: 1990,
                      maxYear: null,
                      months: true,
                      years: true,
                    },
                  }"
                  class="pl-12"
                />
              </div>
              `))])),_:1})]),_:1})])]),_:1})]),a("div",S,[l(t(s),{class:"intro-y box"},{default:o(({toggle:i})=>[a("div",A,[e[15]||(e[15]=a("h2",{class:"mr-auto text-base font-medium"},"Date Range Picker",-1)),l(t(n),{class:"w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0"},{default:o(()=>[l(t(n).Label,{htmlFor:"show-example-3"},{default:o(()=>e[14]||(e[14]=[r(" Show example code ")])),_:1}),l(t(n).Input,{id:"show-example-3",onClick:i,class:"ml-3 mr-0",type:"checkbox"},null,8,["onClick"])]),_:2},1024)]),a("div",T,[l(t(s).Panel,null,{default:o(()=>[l(t(p),{modelValue:v.value,"onUpdate:modelValue":e[2]||(e[2]=d=>v.value=d),options:{autoApply:!1,singleMode:!1,numberOfColumns:2,numberOfMonths:2,showWeekNumbers:!0,dropdowns:{minYear:1990,maxYear:null,months:!0,years:!0}},class:"block w-56 mx-auto"},null,8,["modelValue"])]),_:1}),l(t(s).Panel,{type:"source"},{default:o(()=>[l(t(s).Highlight,null,{default:o(()=>e[16]||(e[16]=[r(f(`
              <Litepicker
                v-model="daterange"
                :options="{
                  autoApply: false,
                  singleMode: false,
                  numberOfColumns: 2,
                  numberOfMonths: 2,
                  showWeekNumbers: true,
                  dropdowns: {
                    minYear: 1990,
                    maxYear: null,
                    months: true,
                    years: true,
                  },
                }"
                class="block w-56 mx-auto"
              />
              `))])),_:1})]),_:1})])]),_:1}),l(t(s),{class:"mt-5 intro-y box"},{default:o(({toggle:i})=>[a("div",W,[e[18]||(e[18]=a("h2",{class:"mr-auto text-base font-medium"},"Modal Date Picker",-1)),l(t(n),{class:"w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0"},{default:o(()=>[l(t(n).Label,{htmlFor:"show-example-4"},{default:o(()=>e[17]||(e[17]=[r(" Show example code ")])),_:1}),l(t(n).Input,{id:"show-example-4",onClick:i,class:"ml-3 mr-0",type:"checkbox"},null,8,["onClick"])]),_:2},1024)]),a("div",H,[l(t(s).Panel,null,{default:o(()=>[a("div",G,[l(t(b),{as:"a",href:"#",variant:"primary",onClick:e[3]||(e[3]=d=>{d.preventDefault(),x(!0)})},{default:o(()=>e[19]||(e[19]=[r(" Show Modal ")])),_:1})]),l(t(m),{open:y.value,onClose:e[7]||(e[7]=()=>{x(!1)}),initialFocus:g.value},{default:o(()=>[l(t(m).Panel,null,{default:o(()=>[l(t(m).Title,null,{default:o(()=>[e[22]||(e[22]=a("h2",{class:"mr-auto text-base font-medium"},"Filter by Date",-1)),l(t(b),{variant:"outline-secondary",class:"hidden sm:flex"},{default:o(()=>[l(t(w),{icon:"File",class:"w-4 h-4 mr-2"}),e[20]||(e[20]=r(" Download Docs "))]),_:1}),l(t(k),{class:"sm:hidden"},{default:o(()=>[l(t(k).Button,{as:"a",class:"block w-5 h-5",href:"#"},{default:o(()=>[l(t(w),{icon:"MoreHorizontal",class:"w-5 h-5 text-slate-500"})]),_:1}),l(t(k).Items,{class:"w-40"},{default:o(()=>[l(t(k).Item,null,{default:o(()=>[l(t(w),{icon:"File",class:"w-4 h-4 mr-2"}),e[21]||(e[21]=r(" Download Docs "))]),_:1})]),_:1})]),_:1})]),_:1}),l(t(m).Description,{class:"grid grid-cols-12 gap-4 gap-y-3"},{default:o(()=>[a("div",R,[l(t(D),{htmlFor:"modal-datepicker-1"},{default:o(()=>e[23]||(e[23]=[r(" From ")])),_:1}),l(t(p),{id:"modal-datepicker-1",modelValue:u.value,"onUpdate:modelValue":e[4]||(e[4]=d=>u.value=d),options:{autoApply:!1,showWeekNumbers:!0,dropdowns:{minYear:1990,maxYear:null,months:!0,years:!0}}},null,8,["modelValue"])]),a("div",U,[l(t(D),{htmlFor:"modal-datepicker-2"},{default:o(()=>e[24]||(e[24]=[r(" To ")])),_:1}),l(t(p),{id:"modal-datepicker-2",modelValue:u.value,"onUpdate:modelValue":e[5]||(e[5]=d=>u.value=d),options:{autoApply:!1,showWeekNumbers:!0,dropdowns:{minYear:1990,maxYear:null,months:!0,years:!0}}},null,8,["modelValue"])])]),_:1}),l(t(m).Footer,{class:"text-right"},{default:o(()=>[l(t(b),{variant:"outline-secondary",type:"button",onClick:e[6]||(e[6]=()=>{x(!1)}),class:"w-20 mr-1"},{default:o(()=>e[25]||(e[25]=[r(" Cancel ")])),_:1}),l(t(b),{variant:"primary",type:"button",class:"w-20",ref_key:"cancelButtonRef",ref:g},{default:o(()=>e[26]||(e[26]=[r(" Submit ")])),_:1},512)]),_:1})]),_:1})]),_:1},8,["open","initialFocus"])]),_:1}),l(t(s).Panel,{type:"source"},{default:o(()=>[l(t(s).Highlight,null,{default:o(()=>e[27]||(e[27]=[r(f(`
              <!-- BEGIN: Show Modal Toggle -->
              <div class="text-center">
                <Button
                  as="a"
                  href="#"
                  variant="primary"
                  @click="(event: MouseEvent) => {
                    event.preventDefault();
                    setDatepickerModalPreview(true);
                  }"
                >
                  Show Modal
                </Button>
              </div>
              <!-- END: Show Modal Toggle -->
              <!-- BEGIN: Modal Content -->
              <Dialog
                :open="datepickerModalPreview"
                @close="
                  () => {
                    setDatepickerModalPreview(false);
                  }
                "
                :initialFocus="cancelButtonRef"
              >
                <Dialog.Panel>
                  <!-- BEGIN: Modal Header -->
                  <Dialog.Title>
                    <h2 class="mr-auto text-base font-medium">
                      Filter by Date
                    </h2>
                    <Button variant="outline-secondary" class="hidden sm:flex">
                      <Lucide icon="File" class="w-4 h-4 mr-2" /> Download Docs
                    </Button>
                    <Menu class="sm:hidden">
                      <Menu.Button as="a" class="block w-5 h-5" href="#">
                        <Lucide
                          icon="MoreHorizontal"
                          class="w-5 h-5 text-slate-500"
                        />
                      </Menu.Button>
                      <Menu.Items class="w-40">
                        <Menu.Item>
                          <Lucide icon="File" class="w-4 h-4 mr-2" />
                          Download Docs
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  </Dialog.Title>
                  <!-- END: Modal Header -->
                  <!-- BEGIN: Modal Body -->
                  <Dialog.Description class="grid grid-cols-12 gap-4 gap-y-3">
                    <div class="col-span-12 sm:col-span-6">
                      <FormLabel htmlFor="modal-datepicker-1"> From </FormLabel>
                      <Litepicker
                        id="modal-datepicker-1"
                        v-model="date"
                        :options="{
                          autoApply: false,
                          showWeekNumbers: true,
                          dropdowns: {
                            minYear: 1990,
                            maxYear: null,
                            months: true,
                            years: true,
                          },
                        }"
                      />
                    </div>
                    <div class="col-span-12 sm:col-span-6">
                      <FormLabel htmlFor="modal-datepicker-2"> To </FormLabel>
                      <Litepicker
                        id="modal-datepicker-2"
                        v-model="date"
                        :options="{
                          autoApply: false,
                          showWeekNumbers: true,
                          dropdowns: {
                            minYear: 1990,
                            maxYear: null,
                            months: true,
                            years: true,
                          },
                        }"
                      />
                    </div>
                  </Dialog.Description>
                  <!-- END: Modal Body -->
                  <!-- BEGIN: Modal Footer -->
                  <Dialog.Footer class="text-right">
                    <Button
                      variant="outline-secondary"
                      type="button"
                      @click="
                        () => {
                          setDatepickerModalPreview(false);
                        }
                      "
                      class="w-20 mr-1"
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="primary"
                      type="button"
                      class="w-20"
                      ref="cancelButtonRef"
                    >
                      Submit
                    </Button>
                  </Dialog.Footer>
                  <!-- END: Modal Footer -->
                </Dialog.Panel>
              </Dialog>
              <!-- END: Modal Content -->
              `))])),_:1})]),_:1})])]),_:1})])])],64))}});export{K as default};
