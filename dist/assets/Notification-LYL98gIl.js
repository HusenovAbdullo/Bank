import{P as n}from"./index-jpOUjCXS.js";import{d as D,r as m,h as A,i as e,j as o,w as s,u as i,F as I,p as u,o as P,L as c,k as l,t as r,_ as x,y as p}from"./index-BkxZ8ppa.js";import{_ as v}from"./Notification.vue_vue_type_script_setup_true_lang-CdgX5JSP.js";import{_ as f}from"./Button.vue_vue_type_script_setup_true_lang-B_0nlnlX.js";const H={class:"grid grid-cols-12 gap-6 mt-5"},K={class:"col-span-12 intro-y lg:col-span-6"},G={class:"flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"},L={class:"p-5"},R={class:"text-center"},j={class:"flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"},F={class:"p-5"},M={class:"text-center"},V={class:"flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"},U={class:"p-5"},Y={class:"text-center"},$={class:"col-span-12 intro-y lg:col-span-6"},q={class:"flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"},z={class:"p-5"},J={class:"text-center"},O={class:"flex-none w-10 h-10 overflow-hidden rounded-full image-fit"},Q=["src"],X={class:"ml-4 sm:mr-28"},Z={class:"font-medium"},tt={class:"flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"},it={class:"p-5"},ot={class:"text-center"},et={class:"flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400"},st={class:"p-5"},at={class:"text-center"},nt={class:"ml-4 mr-5 sm:mr-20"},lt={class:"font-medium"},ct={class:"mt-2.5"},vt=D({__name:"Notification",setup(rt){const N=m(),S=()=>{var a;(a=N.value)==null||a.showToast()};u("bind[basicNonStickyNotification]",a=>{N.value=a});const h=m(),B=()=>{var a;(a=h.value)==null||a.showToast()};u("bind[basicStickyNotification]",a=>{h.value=a});const g=m(),T=()=>{var a;(a=g.value)==null||a.showToast()};u("bind[successNotification]",a=>{g.value=a});const w=m(),C=()=>{var a;(a=w.value)==null||a.showToast()};u("bind[notificationWithActions]",a=>{w.value=a});const y=m(),_=()=>{var a;(a=y.value)==null||a.showToast()};u("bind[notificationWithAvatar]",a=>{y.value=a});const b=m(),W=()=>{var a;(a=b.value)==null||a.showToast()};u("bind[notificationWithSplitButtons]",a=>{b.value=a});const k=m(),E=()=>{var a;(a=k.value)==null||a.showToast()};return u("bind[notificationWithButtonsBelow]",a=>{k.value=a}),(a,t)=>(P(),A(I,null,[t[41]||(t[41]=e("div",{class:"flex items-center mt-8 intro-y"},[e("h2",{class:"mr-auto text-lg font-medium"},"Notification")],-1)),e("div",H,[e("div",K,[o(i(n),{class:"intro-y box"},{default:s(({toggle:d})=>[e("div",G,[t[1]||(t[1]=e("h2",{class:"mr-auto text-base font-medium"},"Basic Notification",-1)),o(i(c),{class:"w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0"},{default:s(()=>[o(i(c).Label,{htmlFor:"show-example-1"},{default:s(()=>t[0]||(t[0]=[l(" Show example code ")])),_:1}),o(i(c).Input,{id:"show-example-1",onClick:d,class:"ml-3 mr-0",type:"checkbox"},null,8,["onClick"])]),_:2},1024)]),e("div",L,[o(i(n).Panel,null,{default:s(()=>[e("div",R,[o(i(v),{refKey:"basicNonStickyNotification",options:{duration:3e3},class:"flex flex-col sm:flex-row"},{default:s(()=>t[2]||(t[2]=[e("div",{class:"font-medium"},"Yay! Updates Published!",-1),e("a",{class:"mt-1 font-medium text-primary dark:text-slate-400 sm:mt-0 sm:ml-40",href:""}," Review Changes ",-1)])),_:1}),o(i(v),{refKey:"basicStickyNotification",class:"flex flex-col sm:flex-row"},{default:s(()=>t[3]||(t[3]=[e("div",{class:"font-medium"},"Yay! Updates Published!",-1),e("a",{class:"mt-1 font-medium text-primary dark:text-slate-400 sm:mt-0 sm:ml-40",href:""}," Review Changes ",-1)])),_:1}),o(i(f),{variant:"primary",class:"mr-1",onClick:S},{default:s(()=>t[4]||(t[4]=[l(" Show Non Sticky Notification ")])),_:1}),o(i(f),{variant:"primary",class:"mt-2 sm:mt-0",onClick:B},{default:s(()=>t[5]||(t[5]=[l(" Show Sticky Notification ")])),_:1})])]),_:1}),o(i(n).Panel,{type:"source"},{default:s(()=>[o(i(n).Highlight,null,{default:s(()=>t[6]||(t[6]=[l(r(`
              <div class="text-center">
                <!-- BEGIN: Basic Non Sticky Notification Content -->
                <Notification
                  refKey="basicNonStickyNotification"
                  :options="{
                    duration: 3000,
                  }"
                  class="flex flex-col sm:flex-row"
                >
                  <div class="font-medium">Yay! Updates Published!</div>
                  <a
                    class="mt-1 font-medium text-primary dark:text-slate-400 sm:mt-0 sm:ml-40"
                    href=""
                  >
                    Review Changes
                  </a>
                </Notification>
                <!-- END: Basic Non Sticky Notification Content -->
                <!-- BEGIN: Basic Sticky Notification Content -->
                <Notification
                  refKey="basicStickyNotification"
                  class="flex flex-col sm:flex-row"
                >
                  <div class="font-medium">Yay! Updates Published!</div>
                  <a
                    class="mt-1 font-medium text-primary dark:text-slate-400 sm:mt-0 sm:ml-40"
                    href=""
                  >
                    Review Changes
                  </a>
                </Notification>
                <!-- END: Basic Sticky Notification Content -->
                <!-- BEGIN: Notification Toggle -->
                <Button
                  variant="primary"
                  class="mr-1"
                  @click="basicNonStickyNotificationToggle"
                >
                  Show Non Sticky Notification
                </Button>
                <Button
                  variant="primary"
                  class="mt-2 sm:mt-0"
                  @click="basicStickyNotificationToggle"
                >
                  Show Sticky Notification
                </Button>
                <!-- END: Notification Toggle -->
              </div>
              `))])),_:1}),o(i(n).Highlight,{type:"javascript",class:"mt-5"},{default:s(()=>t[7]||(t[7]=[l(r(`
                // Basic non sticky notification
                const basicNonStickyNotification = ref<NotificationElement>();
                const basicNonStickyNotificationToggle = () => {
                  // Show notification
                  basicNonStickyNotification.current?.showToast();
                };
              
                // Basic sticky notification
                const basicStickyNotification = ref<NotificationElement>();
                const basicStickyNotificationToggle = () => {
                  // Show notification
                  basicStickyNotification.current?.showToast();
                };
              `))])),_:1})]),_:1})])]),_:1}),o(i(n),{class:"mt-5 intro-y box"},{default:s(({toggle:d})=>[e("div",j,[t[9]||(t[9]=e("h2",{class:"mr-auto text-base font-medium"},"Success Notification",-1)),o(i(c),{class:"w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0"},{default:s(()=>[o(i(c).Label,{htmlFor:"show-example-2"},{default:s(()=>t[8]||(t[8]=[l(" Show example code ")])),_:1}),o(i(c).Input,{id:"show-example-2",onClick:d,class:"ml-3 mr-0",type:"checkbox"},null,8,["onClick"])]),_:2},1024)]),e("div",F,[o(i(n).Panel,null,{default:s(()=>[e("div",M,[o(i(v),{refKey:"successNotification",class:"flex"},{default:s(()=>[o(i(x),{icon:"CheckCircle",class:"text-success"}),t[10]||(t[10]=e("div",{class:"ml-4 mr-4"},[e("div",{class:"font-medium"},"Message Saved!"),e("div",{class:"mt-1 text-slate-500"}," The message will be sent in 5 minutes. ")],-1))]),_:1}),o(i(f),{variant:"primary",onClick:T},{default:s(()=>t[11]||(t[11]=[l(" Show Notification ")])),_:1})])]),_:1}),o(i(n).Panel,{type:"source"},{default:s(()=>[o(i(n).Highlight,null,{default:s(()=>t[12]||(t[12]=[l(r(`
                <div class="text-center">
                  <!-- BEGIN: Notification Content -->
                  <Notification refKey="successNotification" class="flex">
                    <Lucide icon="CheckCircle" class="text-success" />
                    <div class="ml-4 mr-4">
                      <div class="font-medium">Message Saved!</div>
                      <div class="mt-1 text-slate-500">
                        The message will be sent in 5 minutes.
                      </div>
                    </div>
                  </Notification>
                  <!-- END: Notification Content -->
                  <!-- BEGIN: Notification Toggle -->
                  <Button variant="primary" @click="successNotificationToggle">
                    Show Notification
                  </Button>
                  <!-- END: Notification Toggle -->
                </div>
              `))])),_:1}),o(i(n).Highlight,{type:"javascript",class:"mt-5"},{default:s(()=>t[13]||(t[13]=[l(r(`
                // Success notification
                const successNotification = ref<NotificationElement>();
                const successNotificationToggle = () => {
                  // Show notification
                  successNotification.current?.showToast();
                };
              `))])),_:1})]),_:1})])]),_:1}),o(i(n),{class:"mt-5 intro-y box"},{default:s(({toggle:d})=>[e("div",V,[t[15]||(t[15]=e("h2",{class:"mr-auto text-base font-medium"}," Notification With Actions ",-1)),o(i(c),{class:"w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0"},{default:s(()=>[o(i(c).Label,{htmlFor:"show-example-3"},{default:s(()=>t[14]||(t[14]=[l(" Show example code ")])),_:1}),o(i(c).Input,{id:"show-example-3",onClick:d,class:"ml-3 mr-0",type:"checkbox"},null,8,["onClick"])]),_:2},1024)]),e("div",U,[o(i(n).Panel,null,{default:s(()=>[e("div",Y,[o(i(v),{refKey:"notificationWithActions",class:"flex"},{default:s(()=>[o(i(x),{icon:"HardDrive"}),t[16]||(t[16]=e("div",{class:"ml-4 mr-4"},[e("div",{class:"font-medium"},"Storage Removed!"),e("div",{class:"mt-1 text-slate-500"},[l(" The server will restart in 30 seconds, don't make "),e("br"),l(" changes during the update process! ")]),e("div",{class:"font-medium flex mt-1.5"},[e("a",{class:"text-primary dark:text-slate-400",href:""}," Restart Now "),e("a",{class:"ml-3 text-slate-500",href:""}," Cancel ")])],-1))]),_:1}),o(i(f),{variant:"primary",onClick:C},{default:s(()=>t[17]||(t[17]=[l(" Show Notification ")])),_:1})])]),_:1}),o(i(n).Panel,{type:"source"},{default:s(()=>[o(i(n).Highlight,null,{default:s(()=>t[18]||(t[18]=[l(r(`
              <div class="text-center">
                <!-- BEGIN: Notification Content -->
                <Notification refKey="notificationWithActions" class="flex">
                  <Lucide icon="HardDrive" />
                  <div class="ml-4 mr-4">
                    <div class="font-medium">Storage Removed!</div>
                    <div class="mt-1 text-slate-500">
                      The server will restart in 30 seconds, don't make
                      <br />
                      changes during the update process!
                    </div>
                    <div class="font-medium flex mt-1.5">
                      <a class="text-primary dark:text-slate-400" href="">
                        Restart Now
                      </a>
                      <a class="ml-3 text-slate-500" href=""> Cancel </a>
                    </div>
                  </div>
                </Notification>
                <!-- END: Notification Content -->
                <!-- BEGIN: Notification Toggle -->
                <Button
                  variant="primary"
                  @click="notificationWithActionsToggle"
                >
                  Show Notification
                </Button>
                <!-- END: Notification Toggle -->
              </div>
              `))])),_:1}),o(i(n).Highlight,{type:"javascript",class:"mt-5"},{default:s(()=>t[19]||(t[19]=[l(r(`
                // Notification with actions
                const notificationWithActions = ref<NotificationElement>();
                const notificationWithActionsToggle = () => {
                  // Show notification
                  notificationWithActions.current?.showToast();
                };  
              `))])),_:1})]),_:1})])]),_:1})]),e("div",$,[o(i(n),{class:"intro-y box"},{default:s(({toggle:d})=>[e("div",q,[t[21]||(t[21]=e("h2",{class:"mr-auto text-base font-medium"}," Notification With Avatar ",-1)),o(i(c),{class:"w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0"},{default:s(()=>[o(i(c).Label,{htmlFor:"show-example-4"},{default:s(()=>t[20]||(t[20]=[l(" Show example code ")])),_:1}),o(i(c).Input,{id:"show-example-4",onClick:d,class:"ml-3 mr-0",type:"checkbox"},null,8,["onClick"])]),_:2},1024)]),e("div",z,[o(i(n).Panel,null,{default:s(()=>[e("div",J,[o(i(v),{refKey:"notificationWithAvatar",options:{close:!1},class:"flex"},{default:s(()=>[e("div",O,[e("img",{alt:"Midone Tailwind HTML Admin Template",src:i(p)[0].photos[0]},null,8,Q)]),e("div",X,[e("div",Z,r(i(p)[0].users[0].name),1),t[22]||(t[22]=e("div",{class:"mt-1 text-slate-500"},"See you later! 😃😃😃",-1))]),t[23]||(t[23]=e("a",{"data-dismiss":"notification",class:"absolute top-0 bottom-0 right-0 flex items-center px-6 font-medium border-l border-slate-200/60 dark:border-darkmode-400 text-primary dark:text-slate-400",href:"#"}," Reply ",-1))]),_:1}),o(i(f),{variant:"primary",onClick:_},{default:s(()=>t[24]||(t[24]=[l(" Show Notification ")])),_:1})])]),_:1}),o(i(n).Panel,{type:"source"},{default:s(()=>[o(i(n).Highlight,null,{default:s(()=>t[25]||(t[25]=[l(r(`
              <div class="text-center">
                <!-- BEGIN: Notification Content -->
                <Notification
                  refKey="notificationWithAvatar"
                  :options="{
                    close: false,
                  }"
                  class="flex"
                >
                  <div
                    class="flex-none w-10 h-10 overflow-hidden rounded-full image-fit"
                  >
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      :src="fakerData[0].photos[0]"
                    />
                  </div>
                  <div class="ml-4 sm:mr-28">
                    <div class="font-medium">
                      {{ fakerData[0].users[0].name }}
                    </div>
                    <div class="mt-1 text-slate-500">See you later! 😃😃😃</div>
                  </div>
                  <a
                    data-dismiss="notification"
                    class="absolute top-0 bottom-0 right-0 flex items-center px-6 font-medium border-l border-slate-200/60 dark:border-darkmode-400 text-primary dark:text-slate-400"
                    href="#"
                  >
                    Reply
                  </a>
                </Notification>
                <!-- END: Notification Content -->
                <!-- BEGIN: Notification Toggle -->
                <Button variant="primary" @click="notificationWithAvatarToggle">
                  Show Notification
                </Button>
                <!-- END: Notification Toggle -->
              </div>
              `))])),_:1}),o(i(n).Highlight,{type:"javascript",class:"mt-5"},{default:s(()=>t[26]||(t[26]=[l(r(`
                // Notification with avatar
                const notificationWithAvatar = ref<NotificationElement>();
                const notificationWithAvatarToggle = () => {
                  // Show notification
                  notificationWithAvatar.current?.showToast();
                };
              `))])),_:1})]),_:1})])]),_:1}),o(i(n),{class:"mt-5 intro-y box"},{default:s(({toggle:d})=>[e("div",tt,[t[28]||(t[28]=e("h2",{class:"mr-auto text-base font-medium"}," Notification With Split Buttons ",-1)),o(i(c),{class:"w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0"},{default:s(()=>[o(i(c).Label,{htmlFor:"show-example-5"},{default:s(()=>t[27]||(t[27]=[l(" Show example code ")])),_:1}),o(i(c).Input,{id:"show-example-5",onClick:d,class:"ml-3 mr-0",type:"checkbox"},null,8,["onClick"])]),_:2},1024)]),e("div",it,[o(i(n).Panel,null,{default:s(()=>[e("div",ot,[o(i(v),{refKey:"notificationWithSplitButtons",options:{close:!1},class:"flex"},{default:s(()=>t[29]||(t[29]=[e("div",{class:"sm:mr-40"},[e("div",{class:"font-medium"},"Introducing new theme"),e("div",{class:"mt-1 text-slate-500"},"Release version 2.3.3")],-1),e("div",{class:"absolute top-0 bottom-0 right-0 flex flex-col border-l border-slate-200/60 dark:border-darkmode-400"},[e("a",{class:"flex items-center justify-center flex-1 px-6 font-medium border-b text-primary dark:text-slate-400 border-slate-200/60 dark:border-darkmode-400",href:"#"}," View Details "),e("a",{"data-dismiss":"notification",class:"flex items-center justify-center flex-1 px-6 font-medium text-slate-500",href:"#"}," Dismiss ")],-1)])),_:1}),o(i(f),{variant:"primary",onClick:W},{default:s(()=>t[30]||(t[30]=[l(" Show Notification ")])),_:1})])]),_:1}),o(i(n).Panel,{type:"source"},{default:s(()=>[o(i(n).Highlight,null,{default:s(()=>t[31]||(t[31]=[l(r(`
              <div class="text-center">
                <!-- BEGIN: Notification Content -->
                <Notification
                  refKey="notificationWithSplitButtons"
                  :options="{
                    close: false,
                  }"
                  class="flex"
                >
                  <div class="sm:mr-40">
                    <div class="font-medium">Introducing new theme</div>
                    <div class="mt-1 text-slate-500">Release version 2.3.3</div>
                  </div>
                  <div
                    class="absolute top-0 bottom-0 right-0 flex flex-col border-l border-slate-200/60 dark:border-darkmode-400"
                  >
                    <a
                      class="flex items-center justify-center flex-1 px-6 font-medium border-b text-primary dark:text-slate-400 border-slate-200/60 dark:border-darkmode-400"
                      href="#"
                    >
                      View Details
                    </a>
                    <a
                      data-dismiss="notification"
                      class="flex items-center justify-center flex-1 px-6 font-medium text-slate-500"
                      href="#"
                    >
                      Dismiss
                    </a>
                  </div>
                </Notification>
                <!-- END: Notification Content -->
                <!-- BEGIN: Notification Toggle -->
                <Button
                  variant="primary"
                  @click="notificationWithSplitButtonsToggle"
                >
                  Show Notification
                </Button>
                <!-- END: Notification Toggle -->
              </div>
              `))])),_:1}),o(i(n).Highlight,{type:"javascript",class:"mt-5"},{default:s(()=>t[32]||(t[32]=[l(r(`
                // Notification with split buttons
                const notificationWithSplitButtons = ref<NotificationElement>();
                const notificationWithSplitButtonsToggle = () => {
                  // Show notification
                  notificationWithSplitButtons.current?.showToast();
                };
              `))])),_:1})]),_:1})])]),_:1}),o(i(n),{class:"mt-5 intro-y box"},{default:s(({toggle:d})=>[e("div",et,[t[34]||(t[34]=e("h2",{class:"mr-auto text-base font-medium"}," Notification With Buttons Below ",-1)),o(i(c),{class:"w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0"},{default:s(()=>[o(i(c).Label,{htmlFor:"show-example-6"},{default:s(()=>t[33]||(t[33]=[l(" Show example code ")])),_:1}),o(i(c).Input,{id:"show-example-6",onClick:d,class:"ml-3 mr-0",type:"checkbox"},null,8,["onClick"])]),_:2},1024)]),e("div",st,[o(i(n).Panel,null,{default:s(()=>[e("div",at,[o(i(v),{refKey:"notificationWithButtonsBelow",options:{close:!1},class:"flex"},{default:s(()=>[o(i(x),{icon:"FileText"}),e("div",nt,[e("div",lt,r(i(p)[0].users[0].name),1),t[37]||(t[37]=e("div",{class:"mt-1 text-slate-500"},"Sent you new documents.",-1)),e("div",ct,[o(i(f),{variant:"primary",as:"a",class:"px-2 py-1 mr-2",href:""},{default:s(()=>t[35]||(t[35]=[l(" Preview ")])),_:1}),o(i(f),{variant:"outline-secondary",as:"a",class:"px-2 py-1",href:""},{default:s(()=>t[36]||(t[36]=[l(" Download ")])),_:1})])])]),_:1}),o(i(f),{variant:"primary",onClick:E},{default:s(()=>t[38]||(t[38]=[l(" Show Notification ")])),_:1})])]),_:1}),o(i(n).Panel,{type:"source"},{default:s(()=>[o(i(n).Highlight,null,{default:s(()=>t[39]||(t[39]=[l(r(`
              <div class="text-center">
                <!-- BEGIN: Notification Content -->
                <Notification
                  refKey="notificationWithButtonsBelow"
                  :options="{
                    close: false,
                  }"
                  class="flex"
                >
                  <Lucide icon="FileText" />
                  <div class="ml-4 mr-5 sm:mr-20">
                    <div class="font-medium">
                      {{ fakerData[0].users[0].name }}
                    </div>
                    <div class="mt-1 text-slate-500">
                      Sent you new documents.
                    </div>
                    <div class="mt-2.5">
                      <Button
                        variant="primary"
                        as="a"
                        class="px-2 py-1 mr-2"
                        href=""
                      >
                        Preview
                      </Button>
                      <Button
                        variant="outline-secondary"
                        as="a"
                        class="px-2 py-1"
                        href=""
                      >
                        Download
                      </Button>
                    </div>
                  </div>
                </Notification>
                <!-- END: Notification Content -->
                <!-- BEGIN: Notification Toggle -->
                <Button
                  variant="primary"
                  @click="notificationWithButtonsBelowToggle"
                >
                  Show Notification
                </Button>
                <!-- END: Notification Toggle -->
              </div>
              `))])),_:1}),o(i(n).Highlight,{type:"javascript",class:"mt-5"},{default:s(()=>t[40]||(t[40]=[l(r(`
                // Notification with buttons below
                const notificationWithButtonsBelow = ref<NotificationElement>();
                const notificationWithButtonsBelowToggle = () => {
                  // Show notification
                  notificationWithButtonsBelow.current?.showToast();
                };
              `))])),_:1})]),_:1})])]),_:1})])])],64))}});export{vt as default};
