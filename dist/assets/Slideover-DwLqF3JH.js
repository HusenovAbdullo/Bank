import{P as d}from"./index-jpOUjCXS.js";import{d as W,r as p,h as _,i as r,j as l,w as o,u as t,F as $,o as J,L as v,k as i,aS as s,t as S,_ as g,T as c,v as w}from"./index-BkxZ8ppa.js";import{_ as f}from"./FormLabel.vue_vue_type_script_setup_true_lang-LHLFXlDs.js";import{_ as X}from"./FormSelect.vue_vue_type_script_setup_true_lang-JXBXw0sz.js";import{_ as m}from"./Button.vue_vue_type_script_setup_true_lang-B_0nlnlX.js";const j={class:"grid grid-cols-12 gap-6 mt-5"},V={class:"col-span-12 intro-y lg:col-span-6"},q={class:"flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"},A={id:"blank-slideover",class:"p-5"},K={class:"text-center"},Q={class:"flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"},R={id:"slideover-size",class:"p-5"},U={class:"text-center"},Y={class:"flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"},Z={id:"button-slideover",class:"p-5"},ee={class:"text-center"},le={class:"col-span-12 intro-y lg:col-span-6"},te={class:"flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"},oe={id:"overlapping-slideover",class:"p-5"},re={class:"text-center"},ie={class:"text-center"},se={class:"flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"},ae={id:"header-footer-slideover",class:"p-5"},de={class:"text-center"},ne={class:"mt-3"},ve={class:"mt-3"},me={class:"mt-3"},ue={class:"mt-3"},pe={class:"mt-3"},Se={class:"flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"},fe={id:"programmatically-show-hide-slideover",class:"p-5"},ge={class:"text-center"},Pe=W({__name:"Slideover",setup(we){const P=p(!1),D=n=>{P.value=n},k=p(!1),B=n=>{k.value=n},T=p(!1),C=n=>{T.value=n},h=p(!1),E=n=>{h.value=n},F=p(!1),N=n=>{F.value=n},O=p(!1),x=n=>{O.value=n},I=p(!1),y=n=>{I.value=n},M=p(!1),L=n=>{M.value=n},z=p(!1),H=n=>{z.value=n},G=p(!1),b=n=>{G.value=n};return(n,e)=>(J(),_($,null,[e[84]||(e[84]=r("div",{class:"flex items-center mt-8 intro-y"},[r("h2",{class:"mr-auto text-lg font-medium"},"Slide Over")],-1)),r("div",j,[r("div",V,[l(t(d),{class:"intro-y box"},{default:o(({toggle:u})=>[r("div",q,[e[26]||(e[26]=r("h2",{class:"mr-auto text-base font-medium"},"Blank Slide Over",-1)),l(t(v),{class:"w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0"},{default:o(()=>[l(t(v).Label,{htmlFor:"show-example-1"},{default:o(()=>e[25]||(e[25]=[i(" Show example code ")])),_:1}),l(t(v).Input,{id:"show-example-1",onClick:u,class:"ml-3 mr-0",type:"checkbox"},null,8,["onClick"])]),_:2},1024)]),r("div",A,[l(t(d).Panel,null,{default:o(()=>[r("div",K,[l(t(m),{as:"a",href:"#",variant:"primary",onClick:e[0]||(e[0]=a=>{a.preventDefault(),D(!0)})},{default:o(()=>e[27]||(e[27]=[i(" Show Slide Over ")])),_:1})]),l(t(s),{open:P.value,onClose:e[1]||(e[1]=()=>{D(!1)})},{default:o(()=>[l(t(s).Panel,null,{default:o(()=>[l(t(s).Title,{class:"p-5"},{default:o(()=>e[28]||(e[28]=[r("h2",{class:"mr-auto text-base font-medium"}," Blank Slide Over ",-1)])),_:1}),l(t(s).Description,null,{default:o(()=>e[29]||(e[29]=[i(" This is totally awesome blank slide over! ")])),_:1})]),_:1})]),_:1},8,["open"])]),_:1}),l(t(d).Panel,{type:"source"},{default:o(()=>[l(t(d).Highlight,null,{default:o(()=>e[30]||(e[30]=[i(S(`
              <!-- BEGIN: Slide Over Toggle -->
              <div class="text-center">
                <Button
                  as="a"
                  href="#"
                  variant="primary"
                  @click="(event: MouseEvent) => {
                      event.preventDefault();
                      setBasicSlideoverPreview(true);
                    }"
                >
                  Show Slide Over
                </Button>
              </div>
              <!-- END: Slide Over Toggle -->
              <!-- BEGIN: Slide Over Content -->
              <Slideover
                :open="basicSlideoverPreview"
                @close="
                  () => {
                    setBasicSlideoverPreview(false);
                  }
                "
              >
                <Slideover.Panel>
                  <Slideover.Title class="p-5">
                    <h2 class="mr-auto text-base font-medium">
                      Blank Slide Over
                    </h2>
                  </Slideover.Title>
                  <Slideover.Description>
                    This is totally awesome blank slide over!
                  </Slideover.Description>
                </Slideover.Panel>
              </Slideover>
              <!-- END: Slide Over Content -->
              `))])),_:1})]),_:1})])]),_:1}),l(t(d),{class:"mt-5 intro-y box"},{default:o(({toggle:u})=>[r("div",Q,[e[32]||(e[32]=r("h2",{class:"mr-auto text-base font-medium"},"Slide Over Size",-1)),l(t(v),{class:"w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0"},{default:o(()=>[l(t(v).Label,{htmlFor:"show-example-2"},{default:o(()=>e[31]||(e[31]=[i(" Show example code ")])),_:1}),l(t(v).Input,{id:"show-example-2",onClick:u,class:"ml-3 mr-0",type:"checkbox"},null,8,["onClick"])]),_:2},1024)]),r("div",R,[l(t(d).Panel,null,{default:o(()=>[r("div",U,[l(t(m),{as:"a",href:"#",variant:"primary",onClick:e[2]||(e[2]=a=>{a.preventDefault(),B(!0)}),class:"mb-2 mr-1"},{default:o(()=>e[33]||(e[33]=[i(" Show Small Slide Over ")])),_:1}),l(t(m),{as:"a",href:"#",variant:"primary",onClick:e[3]||(e[3]=a=>{a.preventDefault(),C(!0)}),class:"mb-2 mr-1"},{default:o(()=>e[34]||(e[34]=[i(" Show Medium Slide Over ")])),_:1}),l(t(m),{as:"a",href:"#",variant:"primary",onClick:e[4]||(e[4]=a=>{a.preventDefault(),E(!0)}),class:"mb-2 mr-1"},{default:o(()=>e[35]||(e[35]=[i(" Show Large Slide Over ")])),_:1}),l(t(m),{as:"a",href:"#",variant:"primary",onClick:e[5]||(e[5]=a=>{a.preventDefault(),N(!0)}),class:"mb-2 mr-1"},{default:o(()=>e[36]||(e[36]=[i(" Show Superlarge Slide Over ")])),_:1})]),l(t(s),{size:"sm",open:k.value,onClose:e[6]||(e[6]=()=>{B(!1)})},{default:o(()=>[l(t(s).Panel,null,{default:o(()=>[l(t(s).Title,{class:"p-5"},{default:o(()=>e[37]||(e[37]=[r("h2",{class:"mr-auto text-base font-medium"}," Small Slide Over ",-1)])),_:1}),l(t(s).Description,null,{default:o(()=>e[38]||(e[38]=[i(" This is totally awesome small slide over! ")])),_:1})]),_:1})]),_:1},8,["open"]),l(t(s),{open:T.value,onClose:e[7]||(e[7]=()=>{C(!1)})},{default:o(()=>[l(t(s).Panel,null,{default:o(()=>[l(t(s).Title,{class:"p-5"},{default:o(()=>e[39]||(e[39]=[r("h2",{class:"mr-auto text-base font-medium"}," Medium Slide Over ",-1)])),_:1}),l(t(s).Description,null,{default:o(()=>e[40]||(e[40]=[i(" This is totally awesome medium slide over! ")])),_:1})]),_:1})]),_:1},8,["open"]),l(t(s),{size:"lg",open:h.value,onClose:e[8]||(e[8]=()=>{E(!1)})},{default:o(()=>[l(t(s).Panel,null,{default:o(()=>[l(t(s).Title,{class:"p-5"},{default:o(()=>e[41]||(e[41]=[r("h2",{class:"mr-auto text-base font-medium"}," Large Slide Over ",-1)])),_:1}),l(t(s).Description,null,{default:o(()=>e[42]||(e[42]=[i(" This is totally awesome large slide over! ")])),_:1})]),_:1})]),_:1},8,["open"]),l(t(s),{size:"xl",open:F.value,onClose:e[9]||(e[9]=()=>{N(!1)})},{default:o(()=>[l(t(s).Panel,null,{default:o(()=>[l(t(s).Title,{class:"p-5"},{default:o(()=>e[43]||(e[43]=[r("h2",{class:"mr-auto text-base font-medium"}," Superlarge Slide Over ",-1)])),_:1}),l(t(s).Description,null,{default:o(()=>e[44]||(e[44]=[i(" This is totally awesome superlarge slide over! ")])),_:1})]),_:1})]),_:1},8,["open"])]),_:1}),l(t(d).Panel,{type:"source"},{default:o(()=>[l(t(d).Highlight,null,{default:o(()=>e[45]||(e[45]=[i(S(`
              <div class="text-center">
                <!-- BEGIN: Small Slide Over Toggle -->
                <Button
                  as="a"
                  href="#"
                  variant="primary"
                  @click="(event: MouseEvent) => {
                      event.preventDefault();
                      setSmallSlideoverSizePreview(true);
                    }"
                  class="mb-2 mr-1"
                >
                  Show Small Slide Over
                </Button>
                <!-- END: Small Slide Over Toggle -->
                <!-- BEGIN: Medium Slide Over Toggle -->
                <Button
                  as="a"
                  href="#"
                  variant="primary"
                  @click="(event: MouseEvent) => {
                      event.preventDefault();
                      setMediumSlideoverSizePreview(true);
                    }"
                  class="mb-2 mr-1"
                >
                  Show Medium Slide Over
                </Button>
                <!-- END: Medium Slide Over Toggle -->
                <!-- BEGIN: Large Slide Over Toggle -->
                <Button
                  as="a"
                  href="#"
                  variant="primary"
                  @click="(event: MouseEvent) => {
                      event.preventDefault();
                      setLargeSlideoverSizePreview(true);
                    }"
                  class="mb-2 mr-1"
                >
                  Show Large Slide Over
                </Button>
                <!-- END: Large Slide Over Toggle -->
                <!-- BEGIN: Super Large Slide Over Toggle -->
                <Button
                  as="a"
                  href="#"
                  variant="primary"
                  @click="(event: MouseEvent) => {
                      event.preventDefault();
                      setSuperlargeSlideoverSizePreview(true);
                    }"
                  class="mb-2 mr-1"
                >
                  Show Superlarge Slide Over
                </Button>
                <!-- END: Super Large Slide Over Toggle -->
              </div>
              <!-- BEGIN: Small Slide Over Content -->
              <Slideover
                size="sm"
                :open="smallSlideoverSizePreview"
                @close="
                  () => {
                    setSmallSlideoverSizePreview(false);
                  }
                "
              >
                <Slideover.Panel>
                  <Slideover.Title class="p-5">
                    <h2 class="mr-auto text-base font-medium">
                      Small Slide Over
                    </h2>
                  </Slideover.Title>
                  <Slideover.Description>
                    This is totally awesome small slide over!
                  </Slideover.Description>
                </Slideover.Panel>
              </Slideover>
              <!-- END: Small Slide Over Content -->
              <!-- BEGIN: Medium Slide Over Content -->
              <Slideover
                :open="mediumSlideoverSizePreview"
                @close="
                  () => {
                    setMediumSlideoverSizePreview(false);
                  }
                "
              >
                <Slideover.Panel>
                  <Slideover.Title class="p-5">
                    <h2 class="mr-auto text-base font-medium">
                      Medium Slide Over
                    </h2>
                  </Slideover.Title>
                  <Slideover.Description>
                    This is totally awesome medium slide over!
                  </Slideover.Description>
                </Slideover.Panel>
              </Slideover>
              <!-- END: Medium Slide Over Content -->
              <!-- BEGIN: Large Slide Over Content -->
              <Slideover
                size="lg"
                :open="largeSlideoverSizePreview"
                @close="
                  () => {
                    setLargeSlideoverSizePreview(false);
                  }
                "
              >
                <Slideover.Panel>
                  <Slideover.Title class="p-5">
                    <h2 class="mr-auto text-base font-medium">
                      Large Slide Over
                    </h2>
                  </Slideover.Title>
                  <Slideover.Description>
                    This is totally awesome large slide over!
                  </Slideover.Description>
                </Slideover.Panel>
              </Slideover>
              <!-- END: Large Slide Over Content -->
              <!-- BEGIN: Super Large Slide Over Content -->
              <Slideover
                size="xl"
                :open="superlargeSlideoverSizePreview"
                @close="
                  () => {
                    setSuperlargeSlideoverSizePreview(false);
                  }
                "
              >
                <Slideover.Panel>
                  <Slideover.Title class="p-5">
                    <h2 class="mr-auto text-base font-medium">
                      Superlarge Slide Over
                    </h2>
                  </Slideover.Title>
                  <Slideover.Description>
                    This is totally awesome superlarge slide over!
                  </Slideover.Description>
                </Slideover.Panel>
              </Slideover>
              <!-- END: Super Large Slide Over Content -->
              `))])),_:1})]),_:1})])]),_:1}),l(t(d),{class:"mt-5 intro-y box"},{default:o(({toggle:u})=>[r("div",Y,[e[47]||(e[47]=r("h2",{class:"mr-auto text-base font-medium"}," Slide Over With Close Button ",-1)),l(t(v),{class:"w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0"},{default:o(()=>[l(t(v).Label,{htmlFor:"show-example-3"},{default:o(()=>e[46]||(e[46]=[i(" Show example code ")])),_:1}),l(t(v).Input,{id:"show-example-3",onClick:u,class:"ml-3 mr-0",type:"checkbox"},null,8,["onClick"])]),_:2},1024)]),r("div",Z,[l(t(d).Panel,null,{default:o(()=>[r("div",ee,[l(t(m),{as:"a",href:"#",variant:"primary",onClick:e[10]||(e[10]=a=>{a.preventDefault(),y(!0)})},{default:o(()=>e[48]||(e[48]=[i(" Show Slide Over ")])),_:1})]),l(t(s),{backdrop:"static",open:I.value,onClose:e[12]||(e[12]=()=>{y(!1)})},{default:o(()=>[l(t(s).Panel,null,{default:o(()=>[r("a",{onClick:e[11]||(e[11]=a=>{a.preventDefault(),y(!1)}),class:"absolute top-0 left-0 right-auto mt-4 -ml-12",href:"#"},[l(t(g),{icon:"X",class:"w-8 h-8 text-slate-400"})]),l(t(s).Title,{class:"p-5"},{default:o(()=>e[49]||(e[49]=[r("h2",{class:"mr-auto text-base font-medium"}," Slide Over With Close Button ",-1)])),_:1}),l(t(s).Description,null,{default:o(()=>e[50]||(e[50]=[i(" This is totally awesome slide over with close button! ")])),_:1})]),_:1})]),_:1},8,["open"])]),_:1}),l(t(d).Panel,{type:"source"},{default:o(()=>[l(t(d).Highlight,null,{default:o(()=>e[51]||(e[51]=[i(S(`
              <!-- BEGIN: Modal Toggle -->
              <div class="text-center">
                <Button
                  as="a"
                  href="#"
                  variant="primary"
                  @click="(event: MouseEvent) => {
                      event.preventDefault();
                      setButtonSlideoverPreview(true);
                    }"
                >
                  Show Slide Over
                </Button>
              </div>
              <!-- END: Modal Toggle -->
              <!-- BEGIN: Modal Content -->
              <Slideover
                backdrop="static"
                :open="buttonSlideoverPreview"
                @close="
                  () => {
                    setButtonSlideoverPreview(false);
                  }
                "
              >
                <Slideover.Panel>
                  <a
                    @click="(event: MouseEvent) => {
                        event.preventDefault();
                        setButtonSlideoverPreview(false);
                      }"
                    class="absolute top-0 left-0 right-auto mt-4 -ml-12"
                    href="#"
                  >
                    <Lucide icon="X" class="w-8 h-8 text-slate-400" />
                  </a>
                  <Slideover.Title class="p-5">
                    <h2 class="mr-auto text-base font-medium">
                      Slide Over With Close Button
                    </h2>
                  </Slideover.Title>
                  <Slideover.Description>
                    This is totally awesome slide over with close button!
                  </Slideover.Description>
                </Slideover.Panel>
              </Slideover>
              <!-- END: Modal Content -->
              `))])),_:1})]),_:1})])]),_:1})]),r("div",le,[l(t(d),{class:"intro-y box"},{default:o(({toggle:u})=>[r("div",te,[e[53]||(e[53]=r("h2",{class:"mr-auto text-base font-medium"},"Overlapping Slide Over",-1)),l(t(v),{class:"w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0"},{default:o(()=>[l(t(v).Label,{htmlFor:"show-example-4"},{default:o(()=>e[52]||(e[52]=[i(" Show example code ")])),_:1}),l(t(v).Input,{id:"show-example-4",onClick:u,class:"ml-3 mr-0",type:"checkbox"},null,8,["onClick"])]),_:2},1024)]),r("div",oe,[l(t(d).Panel,null,{default:o(()=>[r("div",re,[l(t(m),{as:"a",href:"#",variant:"primary",onClick:e[13]||(e[13]=a=>{a.preventDefault(),L(!0)})},{default:o(()=>e[54]||(e[54]=[i(" Show Slide Over ")])),_:1})]),l(t(s),{open:M.value,onClose:e[16]||(e[16]=()=>{L(!1)})},{default:o(()=>[l(t(s).Panel,null,{default:o(()=>[l(t(s).Title,{class:"p-5"},{default:o(()=>e[55]||(e[55]=[r("h2",{class:"mr-auto text-base font-medium"}," Overlapping Slide Over ",-1)])),_:1}),l(t(s).Description,{class:"px-5 py-10"},{default:o(()=>[r("div",ie,[e[59]||(e[59]=r("div",{class:"mb-5"}," Click button bellow to show overlapping slide over! ",-1)),l(t(m),{as:"a",href:"#",variant:"primary",onClick:e[14]||(e[14]=a=>{a.preventDefault(),H(!0)})},{default:o(()=>e[56]||(e[56]=[i(" Show Overlapping Slide Over ")])),_:1}),l(t(s),{open:z.value,onClose:e[15]||(e[15]=()=>{H(!1)})},{default:o(()=>[l(t(s).Panel,null,{default:o(()=>[l(t(s).Title,{class:"p-5"},{default:o(()=>e[57]||(e[57]=[r("h2",{class:"mr-auto text-base font-medium"}," Overlapping Slide Over ",-1)])),_:1}),l(t(s).Description,{class:"text-center"},{default:o(()=>e[58]||(e[58]=[i(" This is totally awesome overlapping slide over! ")])),_:1})]),_:1})]),_:1},8,["open"])])]),_:1})]),_:1})]),_:1},8,["open"])]),_:1}),l(t(d).Panel,{type:"source"},{default:o(()=>[l(t(d).Highlight,null,{default:o(()=>e[60]||(e[60]=[i(S(`
              <!-- BEGIN: Slide Over Toggle -->
              <div class="text-center">
                <Button
                  as="a"
                  href="#"
                  variant="primary"
                  @click="(event: MouseEvent) => {
                      event.preventDefault();
                      setOverlappingSlideoverPreview(true);
                    }"
                >
                  Show Slide Over
                </Button>
              </div>
              <!-- END: Slide Over Toggle -->
              <!-- BEGIN: Slide Over Content -->
              <Slideover
                :open="overlappingSlideoverPreview"
                @close="
                  () => {
                    setOverlappingSlideoverPreview(false);
                  }
                "
              >
                <Slideover.Panel>
                  <Slideover.Title class="p-5">
                    <h2 class="mr-auto text-base font-medium">
                      Overlapping Slide Over
                    </h2>
                  </Slideover.Title>
                  <Slideover.Description class="px-5 py-10">
                    <div class="text-center">
                      <div class="mb-5">
                        Click button bellow to show overlapping slide over!
                      </div>
                      <!-- BEGIN: Overlapping Slide Over Toggle -->
                      <Button
                        as="a"
                        href="#"
                        variant="primary"
                        @click="(event: MouseEvent) => {
                            event.preventDefault();
                            setNextOverlappingSlideoverPreview(true);
                          }"
                      >
                        Show Overlapping Slide Over
                      </Button>
                      <!-- END: Overlapping Slide Over Toggle -->
                      <!-- BEGIN: Overlapping Slide Over Content -->
                      <Slideover
                        :open="nextOverlappingSlideoverPreview"
                        @close="
                          () => {
                            setNextOverlappingSlideoverPreview(false);
                          }
                        "
                      >
                        <Slideover.Panel>
                          <Slideover.Title class="p-5">
                            <h2 class="mr-auto text-base font-medium">
                              Overlapping Slide Over
                            </h2>
                          </Slideover.Title>
                          <Slideover.Description class="text-center">
                            This is totally awesome overlapping slide over!
                          </Slideover.Description>
                        </Slideover.Panel>
                      </Slideover>
                      <!-- END: Overlapping Slide Over Content -->
                    </div>
                  </Slideover.Description>
                </Slideover.Panel>
              </Slideover>
              <!-- END: Slide Over Content -->
              `))])),_:1})]),_:1})])]),_:1}),l(t(d),{class:"mt-5 intro-y box"},{default:o(({toggle:u})=>[r("div",se,[e[62]||(e[62]=r("h2",{class:"mr-auto text-base font-medium"}," Header & Footer Slide Over ",-1)),l(t(v),{class:"w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0"},{default:o(()=>[l(t(v).Label,{htmlFor:"show-example-5"},{default:o(()=>e[61]||(e[61]=[i(" Show example code ")])),_:1}),l(t(v).Input,{id:"show-example-5",onClick:u,class:"ml-3 mr-0",type:"checkbox"},null,8,["onClick"])]),_:2},1024)]),r("div",ae,[l(t(d).Panel,null,{default:o(()=>[r("div",de,[l(t(m),{as:"a",href:"#",variant:"primary",onClick:e[17]||(e[17]=a=>{a.preventDefault(),b(!0)})},{default:o(()=>e[63]||(e[63]=[i(" Show Slide Over ")])),_:1})]),l(t(s),{backdrop:"static",open:G.value,onClose:e[20]||(e[20]=()=>{b(!1)})},{default:o(()=>[l(t(s).Panel,null,{default:o(()=>[r("a",{onClick:e[18]||(e[18]=a=>{a.preventDefault(),b(!1)}),class:"absolute top-0 left-0 right-auto mt-4 -ml-12",href:"#"},[l(t(g),{icon:"X",class:"w-8 h-8 text-slate-400"})]),l(t(s).Title,null,{default:o(()=>[e[66]||(e[66]=r("h2",{class:"mr-auto text-base font-medium"}," Broadcast Message ",-1)),l(t(m),{variant:"outline-secondary",class:"hidden sm:flex"},{default:o(()=>[l(t(g),{icon:"File",class:"w-4 h-4 mr-2"}),e[64]||(e[64]=i(" Download Docs "))]),_:1}),l(t(c),{class:"sm:hidden"},{default:o(()=>[l(t(c).Button,{as:"a",class:"block w-5 h-5",href:"#"},{default:o(()=>[l(t(g),{icon:"MoreHorizontal",class:"w-5 h-5 text-slate-500"})]),_:1}),l(t(c).Items,{class:"w-40"},{default:o(()=>[l(t(c).Item,null,{default:o(()=>[l(t(g),{icon:"File",class:"w-4 h-4 mr-2"}),e[65]||(e[65]=i(" Download Docs "))]),_:1})]),_:1})]),_:1})]),_:1}),l(t(s).Description,null,{default:o(()=>[r("div",null,[l(t(f),{htmlFor:"modal-form-1"},{default:o(()=>e[67]||(e[67]=[i("From")])),_:1}),l(t(w),{id:"modal-form-1",type:"text",placeholder:"example@gmail.com"})]),r("div",ne,[l(t(f),{htmlFor:"modal-form-2"},{default:o(()=>e[68]||(e[68]=[i("To")])),_:1}),l(t(w),{id:"modal-form-2",type:"text",placeholder:"example@gmail.com"})]),r("div",ve,[l(t(f),{htmlFor:"modal-form-3"},{default:o(()=>e[69]||(e[69]=[i(" Subject ")])),_:1}),l(t(w),{id:"modal-form-3",type:"text",placeholder:"Important Meeting"})]),r("div",me,[l(t(f),{htmlFor:"modal-form-4"},{default:o(()=>e[70]||(e[70]=[i(" Has the Words ")])),_:1}),l(t(w),{id:"modal-form-4",type:"text",placeholder:"Job, Work, Documentation"})]),r("div",ue,[l(t(f),{htmlFor:"modal-form-5"},{default:o(()=>e[71]||(e[71]=[i(" Doesn't Have ")])),_:1}),l(t(w),{id:"modal-form-5",type:"text",placeholder:"Job, Work, Documentation"})]),r("div",pe,[l(t(f),{htmlFor:"modal-form-6"},{default:o(()=>e[72]||(e[72]=[i("Size")])),_:1}),l(t(X),{id:"modal-form-6"},{default:o(()=>e[73]||(e[73]=[r("option",null,"10",-1),r("option",null,"25",-1),r("option",null,"35",-1),r("option",null,"50",-1)])),_:1})])]),_:1}),l(t(s).Footer,null,{default:o(()=>[l(t(m),{variant:"outline-secondary",type:"button",onClick:e[19]||(e[19]=()=>{b(!1)}),class:"w-20 mr-1"},{default:o(()=>e[74]||(e[74]=[i(" Cancel ")])),_:1}),l(t(m),{variant:"primary",type:"button",class:"w-20"},{default:o(()=>e[75]||(e[75]=[i(" Send ")])),_:1})]),_:1})]),_:1})]),_:1},8,["open"])]),_:1}),l(t(d).Panel,{type:"source"},{default:o(()=>[l(t(d).Highlight,null,{default:o(()=>e[76]||(e[76]=[i(S(`
              <!-- BEGIN: Slide Over Toggle -->
              <div class="text-center">
                <Button
                  as="a"
                  href="#"
                  variant="primary"
                  @click="(event: MouseEvent) => {
                      event.preventDefault();
                      setHeaderFooterSlideoverPreview(true);
                    }"
                >
                  Show Slide Over
                </Button>
              </div>
              <!-- END: Slide Over Toggle -->
              <!-- BEGIN: Slide Over Content -->
              <Slideover
                backdrop="static"
                :open="headerFooterSlideoverPreview"
                @close="
                  () => {
                    setHeaderFooterSlideoverPreview(false);
                  }
                "
              >
                <!-- BEGIN: Slide Over Header -->
                <Slideover.Panel>
                  <a
                    @click="(event: MouseEvent) => {
                        event.preventDefault();
                        setHeaderFooterSlideoverPreview(false);
                      }"
                    class="absolute top-0 left-0 right-auto mt-4 -ml-12"
                    href="#"
                  >
                    <Lucide icon="X" class="w-8 h-8 text-slate-400" />
                  </a>
                  <Slideover.Title>
                    <h2 class="mr-auto text-base font-medium">
                      Broadcast Message
                    </h2>
                    <Button variant="outline-secondary" class="hidden sm:flex">
                      <Lucide icon="File" class="w-4 h-4 mr-2" />
                      Download Docs
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
                  </Slideover.Title>
                  <!-- END: Slide Over Header -->
                  <!-- BEGIN: Slide Over Body -->
                  <Slideover.Description>
                    <div>
                      <FormLabel htmlFor="modal-form-1"> From </FormLabel>
                      <FormInput
                        id="modal-form-1"
                        type="text"
                        placeholder="example@gmail.com"
                      />
                    </div>
                    <div class="mt-3">
                      <FormLabel htmlFor="modal-form-2"> To </FormLabel>
                      <FormInput
                        id="modal-form-2"
                        type="text"
                        placeholder="example@gmail.com"
                      />
                    </div>
                    <div class="mt-3">
                      <FormLabel htmlFor="modal-form-3"> Subject </FormLabel>
                      <FormInput
                        id="modal-form-3"
                        type="text"
                        placeholder="Important Meeting"
                      />
                    </div>
                    <div class="mt-3">
                      <FormLabel htmlFor="modal-form-4">
                        Has the Words
                      </FormLabel>
                      <FormInput
                        id="modal-form-4"
                        type="text"
                        placeholder="Job, Work, Documentation"
                      />
                    </div>
                    <div class="mt-3">
                      <FormLabel htmlFor="modal-form-5">
                        Doesn't Have
                      </FormLabel>
                      <FormInput
                        id="modal-form-5"
                        type="text"
                        placeholder="Job, Work, Documentation"
                      />
                    </div>
                    <div class="mt-3">
                      <FormLabel htmlFor="modal-form-6"> Size </FormLabel>
                      <FormSelect id="modal-form-6">
                        <option>10</option>
                        <option>25</option>
                        <option>35</option>
                        <option>50</option>
                      </FormSelect>
                    </div>
                  </Slideover.Description>
                  <!-- END: Slide Over Body -->
                  <!-- BEGIN: Slide Over Footer -->
                  <Slideover.Footer>
                    <Button
                      variant="outline-secondary"
                      type="button"
                      @click="
                        () => {
                          setHeaderFooterSlideoverPreview(false);
                        }
                      "
                      class="w-20 mr-1"
                    >
                      Cancel
                    </Button>
                    <Button variant="primary" type="button" class="w-20">
                      Send
                    </Button>
                  </Slideover.Footer>
                </Slideover.Panel>
                <!-- END: Slide Over Footer -->
              </Slideover>
              <!-- END: Slide Over Content -->
              `))])),_:1})]),_:1})])]),_:1}),l(t(d),{class:"mt-5 intro-y box"},{default:o(({toggle:u})=>[r("div",Se,[e[78]||(e[78]=r("h2",{class:"mr-auto text-base font-medium"}," Programmatically Show/Hide Slide Over ",-1)),l(t(v),{class:"w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0"},{default:o(()=>[l(t(v).Label,{htmlFor:"show-example-6"},{default:o(()=>e[77]||(e[77]=[i(" Show example code ")])),_:1}),l(t(v).Input,{id:"show-example-6",onClick:u,class:"ml-3 mr-0",type:"checkbox"},null,8,["onClick"])]),_:2},1024)]),r("div",fe,[l(t(d).Panel,null,{default:o(()=>[r("div",ge,[l(t(m),{as:"a",id:"programmatically-show-slideover",href:"#",variant:"primary",class:"mb-2 mr-1",onClick:e[21]||(e[21]=a=>{a.preventDefault(),x(!0)})},{default:o(()=>e[79]||(e[79]=[i(" Show Slide Over ")])),_:1})]),l(t(s),{open:O.value,onClose:e[24]||(e[24]=()=>{x(!1)})},{default:o(()=>[l(t(s).Panel,null,{default:o(()=>[l(t(s).Title,{class:"p-5"},{default:o(()=>e[80]||(e[80]=[r("h2",{class:"mr-auto text-base font-medium"}," Programmatically Show/Hide Slide Over ",-1)])),_:1}),l(t(s).Description,{class:"p-10 text-center"},{default:o(()=>[l(t(m),{as:"a",id:"programmatically-hide-slideover",href:"#",variant:"primary",class:"mr-1",onClick:e[22]||(e[22]=a=>{a.preventDefault(),x(!1)})},{default:o(()=>e[81]||(e[81]=[i(" Hide Slide Over ")])),_:1}),l(t(m),{as:"a",id:"programmatically-toggle-slideover",href:"#",variant:"primary",class:"mt-2 mr-1 sm:mt-0",onClick:e[23]||(e[23]=a=>{a.preventDefault(),x(!O.value)})},{default:o(()=>e[82]||(e[82]=[i(" Toggle Slide Over ")])),_:1})]),_:1})]),_:1})]),_:1},8,["open"])]),_:1}),l(t(d).Panel,{type:"source"},{default:o(()=>[l(t(d).Highlight,null,{default:o(()=>e[83]||(e[83]=[i(S(`
              <!-- BEGIN: Show Slide Over Toggle -->
              <div class="text-center">
                <Button
                  as="a"
                  id="programmatically-show-slideover"
                  href="#"
                  variant="primary"
                  class="mb-2 mr-1"
                  @click="(event: MouseEvent) => {
                      event.preventDefault();
                      setProgrammaticallySlideover(true);
                    }"
                >
                  Show Slide Over
                </Button>
              </div>
              <!-- END: Show Slide Over Toggle -->
              <!-- BEGIN: Slide Over Content -->
              <Slideover
                :open="programmaticallySlideover"
                @close="
                  () => {
                    setProgrammaticallySlideover(false);
                  }
                "
              >
                <Slideover.Panel>
                  <Slideover.Title class="p-5">
                    <h2 class="mr-auto text-base font-medium">
                      Programmatically Show/Hide Slide Over
                    </h2>
                  </Slideover.Title>
                  <Slideover.Description class="p-10 text-center">
                    <!-- BEGIN: Hide Slide Over Toggle -->
                    <Button
                      as="a"
                      id="programmatically-hide-slideover"
                      href="#"
                      variant="primary"
                      class="mr-1"
                      @click="(event: MouseEvent) => {
                          event.preventDefault();
                          setProgrammaticallySlideover(false);
                        }"
                    >
                      Hide Slide Over
                    </Button>
                    <!-- END: Hide Slide Over Toggle -->
                    <!-- BEGIN: Toggle Slide Over Toggle -->
                    <Button
                      as="a"
                      id="programmatically-toggle-slideover"
                      href="#"
                      variant="primary"
                      class="mt-2 mr-1 sm:mt-0"
                      @click="(event: MouseEvent) => {
                          event.preventDefault();
                          setProgrammaticallySlideover(
                            !programmaticallySlideover
                          );
                        }"
                    >
                      Toggle Slide Over
                    </Button>
                    <!-- END: Toggle Slide Over Toggle -->
                  </Slideover.Description>
                </Slideover.Panel>
              </Slideover>
              <!-- END: Slide Over Content -->
              `))])),_:1})]),_:1})])]),_:1})])])],64))}});export{Pe as default};
