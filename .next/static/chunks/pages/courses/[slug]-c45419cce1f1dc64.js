(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[355],{6800:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/courses/[slug]",function(){return s(4496)}])},7645:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let s=r.default,a=(null==t?void 0:t.suspense)?{}:{loading(e){let{error:t,isLoading:s,pastDelay:l}=e;return null}};if(e instanceof Promise?a.loader=()=>e:"function"==typeof e?a.loader=e:"object"==typeof e&&(a=l({},a,e)),(a=l({},a,t)).suspense&&(delete a.ssr,delete a.loading),a.loadableGenerated&&delete(a=l({},a,a.loadableGenerated)).loadableGenerated,"boolean"==typeof a.ssr&&!a.suspense){if(!a.ssr)return delete a.ssr,i(s,a);delete a.ssr}return s(a)},t.noSSR=i;var l=s(6495).Z,a=s(2648).Z,r=(a(s(7294)),a(s(4588)));function i(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3644:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var l=(0,s(2648).Z)(s(7294));let a=l.default.createContext(null);t.LoadableContext=a},4588:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=s(6495).Z,a=(0,s(1598).Z)(s(7294)),r=s(3644);let i=[],n=[],d=!1;function c(e){let t=e(),s={loading:!0,loaded:null,error:null};return s.promise=t.then(e=>(s.loading=!1,s.loaded=e,e)).catch(e=>{throw s.loading=!1,s.error=e,e}),s}class o{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=l({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function m(e){return function(e,t){let s=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);s.suspense&&(s.lazy=a.default.lazy(s.loader));let i=null;function c(){if(!i){let t=new o(e,s);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()}if(!d){let m=s.webpack?s.webpack():s.modules;m&&n.push(e=>{for(let t of m)if(-1!==e.indexOf(t))return c()})}function u(){c();let e=a.default.useContext(r.LoadableContext);e&&Array.isArray(s.modules)&&s.modules.forEach(t=>{e(t)})}let x=s.suspense?function(e,t){return u(),a.default.createElement(s.lazy,l({},e,{ref:t}))}:function(e,t){u();let l=a.useSyncExternalStore(i.subscribe,i.getCurrentValue,i.getCurrentValue);return a.default.useImperativeHandle(t,()=>({retry:i.retry}),[]),a.default.useMemo(()=>{var t;return l.loading||l.error?a.default.createElement(s.loading,{isLoading:l.loading,pastDelay:l.pastDelay,timedOut:l.timedOut,error:l.error,retry:i.retry}):l.loaded?a.default.createElement((t=l.loaded)&&t.__esModule?t.default:t,e):null},[e,l])};return x.preload=()=>c(),x.displayName="LoadableComponent",a.default.forwardRef(x)}(c,e)}function u(e,t){let s=[];for(;e.length;){let l=e.pop();s.push(l(t))}return Promise.all(s).then(()=>{if(e.length)return u(e,t)})}m.preloadAll=()=>new Promise((e,t)=>{u(i).then(e,t)}),m.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let s=()=>(d=!0,t());u(n,e).then(s,s)})},window.__NEXT_PRELOADREADY=m.preloadReady,t.default=m},734:function(e,t,s){"use strict";var l=s(5893),a=s(7294),r=s(5152),i=s.n(r);s(9398);let n=null,d=!1,c=i()(async()=>{let e=await s.e(453).then(s.bind(s,4453));return d=!0,null!=n&&n(),e},{loadableGenerated:{webpack:()=>[4453]},ssr:!1,loading:()=>0}),o=e=>{let{studentsTrained:t,workshopsConducted:s,placementDrives:r}=e,[i,o]=(0,a.useState)(d),[m,u]=(0,a.useState)(1),[x,h]=(0,a.useState)(1),[p,f]=(0,a.useState)(1);return n=()=>{o(!0)},(0,a.useEffect)(()=>{i||(u(1),h(1),f(1))},[i]),(0,a.useEffect)(()=>{i&&(u(t),h(s),f(r))},[t,s,r,i]),(0,l.jsxs)("div",{className:"mdxl:w-76 shadow rounded mx-5 md:mx-auto py-8 md:-mt-20 mb-8 md:mb-20 bg-white flex flex-col justify-center items-center md:flex-row md:justify-evenly",children:[(0,l.jsxs)("div",{className:"flex flex-col justify-center items-center pb-7 mb-7 md:mb-0 border-primary2 border-b md:border-0 md:border-r h-30 md:h-20 w-64 md:w-1/3",children:[(0,l.jsxs)("p",{className:"text-5xl text-primary font-semibold relative",children:[(0,l.jsx)(c,{value:m,format:"(,ddd)",theme:"default"}),(0,l.jsx)("span",{className:"relative z-10 mb-4",style:{letterSpacing:0},children:" +"})]}),(0,l.jsx)("p",{className:"text-xl text-primary3 font-normal z-10",children:"Students Trained"})]}),(0,l.jsxs)("div",{className:"flex flex-col justify-center items-center h-30 md:h-20 w-64 md:w-1/3 pb-7 mb-7 md:mb-0 border-primary2 border-b md:border-0 md:border-r",children:[(0,l.jsxs)("p",{className:"text-5xl text-primary font-semibold relative",children:[(0,l.jsx)(c,{value:x,format:"(,ddd)",theme:"default"}),(0,l.jsx)("span",{className:"relative z-10 mb-4",style:{letterSpacing:0},children:" +"})]}),(0,l.jsx)("p",{className:"text-xl text-primary3 font-normal z-10",children:"Workshops Conducted"})]}),(0,l.jsxs)("div",{className:"flex flex-col justify-center items-center h-30 md:h-20 w-64 md:w-1/3",children:[(0,l.jsxs)("p",{className:"text-5xl text-primary font-semibold relative",children:[(0,l.jsx)(c,{value:p,format:"(,ddd)",theme:"default"}),(0,l.jsx)("span",{className:"relative z-10 mb-4",style:{letterSpacing:0},children:" +"})]}),(0,l.jsx)("p",{className:"text-xl text-primary3 font-normal z-10",children:"Placement Drives"})]})]})};t.Z=o},4024:function(e,t,s){"use strict";var l=s(5893);s(7294);var a=s(4539),r=s(3934),i=s(4184),n=s.n(i),d=s(9653),c=s(3178);let o=e=>{let{className:t}=e,{t:s}=(0,r.$G)(),i=t?t.split(" "):[],{isOpen:o,onOpen:m,onClose:u}=(0,d.qY)();return(0,l.jsxs)(a.Z,{variant:"bg-tertiary",rounded:"rounded-sm",className:n()("px-5 py-3 w-full",...i),onClick:m,children:[(0,l.jsx)("p",{className:"text-white text-sm lg:text-lg font-medium",children:s("Register Now")}),(0,l.jsx)(c.Z,{isOpen:o,onClose:u})]})};t.Z=o},3048:function(e,t,s){"use strict";var l=s(5893);s(7294);var a=s(4539),r=s(3934),i=s(9653),n=s(3178);let d=()=>{let{t:e}=(0,r.$G)(),{isOpen:t,onOpen:s,onClose:d}=(0,i.qY)();return(0,l.jsxs)(a.Z,{buttonStyleClass:"outlineButton",variant:"bg-transparent",rounded:"rounded-sm",className:"px-3 md:px-7 py-3 w-full mb-3 md:mb-0",onClick:s,children:[(0,l.jsx)("p",{className:"text-secondary text-xs md:text-base font-medium",children:e("Attend a FREE Workshop")}),(0,l.jsx)(n.Z,{isOpen:t,onClose:d})]})};t.Z=d},9966:function(e,t,s){"use strict";s.d(t,{Z:function(){return h}});var l=s(5893),a=s(7294),r=s(5675),i=s.n(r),n=s(1664),d=s.n(n);let c=e=>{let{studentName:t,collegeCourseName:s,collegeName:a,designation:r,ctc:n,companyImage:d,studentImage:c}=e;return(0,l.jsxs)("div",{className:"card rounded shadow w-full md:w-96 flex flex-col items-center py-7 md:py-8",children:[(0,l.jsx)("div",{className:"rounded-full overflow-hidden h-16 w-16 lg:w-28 lg:h-28 grid place-items-center mb-4 border",children:(0,l.jsx)(i(),{src:null==c?void 0:c.url,width:114,height:114,alt:t})}),(0,l.jsx)("p",{className:"studentName mb-4 md:text-2xl text-primary font-semibold",children:t}),(0,l.jsx)("p",{className:"courseName text-tertiary text-sm md:text-base font-medium",children:s}),(0,l.jsx)("p",{className:"collegeName text-desc text-xs md:text-base mb-5 md:mb-10",children:a}),(0,l.jsx)("div",{className:"mb-6 md:mb-10 grow",children:(0,l.jsx)(i(),{src:null==d?void 0:d.url,width:152,height:39,alt:"Priya"})}),(0,l.jsx)("p",{className:"designation text-primary text-sm md:text-base font-semibold",children:r}),(0,l.jsxs)("p",{className:"ctc md:text-2xl text-tertiary font-bold",children:[n," LPA"]})]})};var o=s(4947),m=s(3031),u=s(9552);let x=e=>{let{headline:t,subHeadline:s,placementList:r,showReadMore:n=!0}=e,[x,h]=(0,a.useState)([]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("a",{id:"success-stories"}),(0,l.jsx)(o.Z,{title:t,subtitle:s,className:"mb-4 md:mb-10 mx-5"}),(0,l.jsxs)("div",{className:"xl:w-76 mx-auto relative pt-10 mb-14 md:mb-20",children:[n&&(0,l.jsxs)("div",{className:"read_more absolute right-5 top-0 flex gap-3 align-middle",children:[(0,l.jsx)(d(),{href:u.Z.studentReviews(),children:(0,l.jsx)("p",{className:"text-tertiary",children:"Read more"})}),(0,l.jsx)(i(),{src:"/img/arrow_right_blue.png",width:20,height:20,alt:"Right arrow"})]}),(0,l.jsx)("div",{className:"cardContainer w-42 lg:grid-cols-2 xl:grid-cols-3 gap-14 grid mx-5 md:mx-0 mb-4",children:(null==x?void 0:x.length)>0&&x.map(e=>(0,l.jsx)(c,{studentName:e.studentName,collegeCourseName:e.collegeCourseName,collegeName:e.collegeName,designation:e.designation,ctc:e.ctc,companyImage:e.companyImage,studentImage:e.studentImage},e.id))}),(0,l.jsx)(m.Z,{fullList:r,pageSize:3,setCurrentList:h,autoScroll:3e3})]})]})};var h=x},4496:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return ey},default:function(){return eN}});var l=s(5893),a=s(1458),r=s(7117),i=s(7294),n=s(5675),d=s.n(n);let c=e=>{let{imgSrc:t,price:s}=e;return(0,l.jsxs)("div",{className:"relative flex flex-col xl:w-76 mb-12 md:mb-28 mx-5 md:mx-auto mt-48 md:mt-0 md:pl-64 place-items-center",children:[(0,l.jsx)("a",{id:"pricing"}),(0,l.jsx)(d(),{src:t,className:"coding_bootcamp absolute left-3 md:left-0 -top-48 md:-top-20",width:364,height:366,alt:"Value for money"}),(0,l.jsxs)("div",{className:"textSection flex flex-col items-center gap-4 w-full md:py-7 md:pl-40 md:pr-8 pt-44 px-5 md:px-0 bg-tertiary rounded",children:[(0,l.jsx)("p",{className:"text-lg md:text-3xl font-semibold text-white md:mb-4 text-center md:text-left",children:"Get the best value for your money"}),(0,l.jsxs)("p",{className:"text-5xl md:text-7xl font-semibold text-price-yellow mb-5",children:["₹ ",s]}),(0,l.jsx)("p",{className:"text-white mb-5 md:mb-0 text-center",children:"Pay in two installments in the first month of your course joining"})]})]})};var o=s(6281),m=s(2370),u=s.n(m);let x=e=>{let{courseName:t,faqList:s}=e,a=(0,i.useRef)(0),r=e=>{a.current=e;let t=document.querySelectorAll(".courseFaqCard");t[e].classList.add(u().activeCard),[1,2].includes(a.current)&&t[0].classList.remove(u().activeCard)},n=e=>{let t=document.querySelectorAll(".courseFaqCard");t[e].classList.remove(u().activeCard),[1,2].includes(a.current)&&(a.current=0,t[0].classList.add(u().activeCard))},d=e=>a.current===e?u().activeCard:"";return(0,l.jsxs)("div",{className:"mx-5 md:mx-auto xl:w-76",children:[(0,l.jsxs)("h2",{className:"text-primary text-center text-lg md:text-3xl font-semibold mb-5 md:mb-12",children:["Why",(0,l.jsxs)("span",{className:"text-tertiary",children:["\xa0",t,"\xa0"]}),"?"]}),(0,l.jsx)("div",{className:u().faqContainer,children:(null==s?void 0:s.length)>0&&s.map((e,t)=>(0,l.jsxs)("div",{className:"courseFaqCard ".concat(u().faqcard," ").concat(d(t)),onMouseEnter:()=>r(t),onMouseLeave:()=>n(t),children:[(0,l.jsxs)("div",{className:u().question,children:[(0,l.jsxs)("p",{className:u().questionNumber,children:["Q",t+1]}),(0,l.jsx)("p",{className:u().questionText,children:e.question}),(0,l.jsx)("p",{className:u().questionText2,children:e.question})]}),(0,l.jsx)("p",{className:u().answer,children:e.answer})]},(0,o.Vj)()))})]})};var h=s(1664),p=s.n(h),f=s(1163),b=s(4024);let j=()=>{let e=(0,f.useRouter)(),t=e.asPath.split("#")[1];return(0,l.jsxs)("div",{className:" gap-8 items-center mb-5 mx-auto sticky top-0 bg-white shadow-courseDetailNav py-4 w-screen z-30",children:[(0,l.jsxs)("div",{className:"hidden lg:flex w-full justify-between place-items-center xl:w-76 mx-auto",children:[(0,l.jsx)(p(),{href:"#course-overview",children:(0,l.jsx)("p",{className:"font-bold ".concat("course-overview"===t?"text-tertiary":"text-primary"),children:"Course Overview"})}),(0,l.jsx)(p(),{href:"#course-curriculum",children:(0,l.jsx)("p",{className:"font-bold ".concat("course-curriculum"===t?"text-tertiary":"text-primary"),children:"Course Curriculum"})}),(0,l.jsx)(p(),{href:"#why-tap-academy",children:(0,l.jsx)("p",{className:"font-bold ".concat("why-tap-academy"===t?"text-tertiary":"text-primary"),children:"Why Tap Academy?"})}),(0,l.jsx)(p(),{href:"#success-stories",children:(0,l.jsx)("p",{className:"font-bold ".concat("success-stories"===t?"text-tertiary":"text-primary"),children:"Success Stories"})}),(0,l.jsx)(p(),{href:"#pricing",children:(0,l.jsx)("p",{className:"font-bold ".concat("pricing"===t?"text-tertiary":"text-primary"),children:"Pricing"})}),(0,l.jsx)(p(),{href:"#faqs",children:(0,l.jsx)("p",{className:"font-bold ".concat("faqs"===t?"text-tertiary":"text-primary"),children:"FAQs"})}),(0,l.jsx)("div",{className:"justify-end md:flex-none",children:(0,l.jsx)(b.Z,{})})]}),(0,l.jsx)("div",{className:"w-full flex justify-end px-5 lg:hidden",children:(0,l.jsx)("div",{children:(0,l.jsx)(b.Z,{})})})]})};var g=s(4184),v=s.n(g);let y=e=>{let{children:t,className:s}=e;return(0,l.jsx)("div",{className:v()("xl:w-76 mx-auto",s),children:t})};var N=s(4947),w=s(4493),_=s(2067);let C=i.forwardRef((e,t)=>{let s=(0,w.xD)({...e,ref:t}),a=!!s["aria-selected"],{topTab:r,bottomTab:i}=e,n=(0,_.jC)("Tabs",s);return(0,l.jsx)("div",{style:n,className:v()({"bg-tertiary text-white w-full p-6 h-22 cursor-pointer":!0,"border-l-8 border-yellow text-price-yellow bg-why-us-selected":a,"rounded-tl":r,"rounded-bl":i}),...s,children:s.children})});C.displayName="Curriculum Tab";let k=e=>{let{curriculumList:t}=e;return(0,l.jsxs)("div",{className:"bg-loader-gray w-76 mb-36 mx-auto rounded grid place-items-center",children:[(0,l.jsxs)(w.mQ,{isFitted:!0,variant:"unstyled",orientation:"vertical",className:"border-0 border-b border-tertiary grid grid-cols-2 w-full",children:[(0,l.jsx)(w.td,{className:"w-full justify-between",children:(null==t?void 0:t.length)>0&&t.map((e,s)=>(0,l.jsx)(C,{topTab:0===s,bottomTab:t.length-1===s,children:(0,l.jsxs)("div",{className:"flex items-center gap-6",children:[(0,l.jsx)("p",{className:"index text-3xl font-semibold px-16",children:s+1}),(0,l.jsx)("p",{className:"text-2xl font-semibold",children:e.title})]})},s))}),(0,l.jsx)(w.nP,{children:(null==t?void 0:t.length)>0&&t.map((e,t)=>{var s;return(0,l.jsx)(w.x4,{padding:0,className:"h-42",children:(0,l.jsx)("div",{className:"bg-loader-gray h-full p-11 flex flex-col rounded-r",children:(0,l.jsxs)("div",{className:" bg-white rounded flex-1 p-11 relative",children:[(0,l.jsx)("p",{className:"text-xl font-semibold mb-8",children:e.text1}),(null===(s=e.text2)||void 0===s?void 0:s.length)>0&&e.text2.map((e,t)=>(0,l.jsx)("p",{className:"text-aphonic",children:e},t))]})})},t)})})]}),(0,l.jsx)("button",{className:"bg-tertiary text-white py-3.5 px-44 rounded my-9 ",children:"Download Curriculum"})]})},A=e=>{let{curriculumList:t}=e;return(0,l.jsx)(y,{className:"hidden xl:block",children:(null==t?void 0:t.length)>0&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("a",{id:"course-curriculum"}),(0,l.jsx)(N.Z,{title:"Course Curriculum",subtitle:"Dowload the course curriculum",className:"mb-8"}),(0,l.jsx)(k,{curriculumList:t})]})})};var S=s(3934),L=s(7786),E=s(7671),q=s(3048),T=s(734);let Z=e=>{let{children:t}=e;return(0,l.jsx)("div",{style:{background:"url(/img/home/homeHeroBg.png) no-repeat top left",backgroundSize:"100% 100%",backgroundPosition:"top left"},children:t})};var F=s(2115);let D=e=>{let{headline:t,subHeadline:s,heroImage:a,heroVideo:r,numberOfStudents:i,studentsTrained:n,workshopsConducted:c,placementDrives:o}=e,{t:m}=(0,S.$G)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(Z,{children:[(0,l.jsxs)("div",{className:"grid md:grid-cols-2 md:gap-8 xl:w-76 mx-5 md:mx-auto mb-6 md:mb-32 items-center",children:[(0,l.jsxs)("div",{className:"flex flex-col md:pt-20",children:[(0,l.jsx)("h1",{className:"text-3xl md:text-hero text-primary",children:"Master Course"}),(0,l.jsxs)("h1",{className:"text-3xl md:text-hero font-semibold text-primary mb-5",children:[t,":"]}),(0,l.jsx)("p",{className:"text-aphonic text-lg md:text-2xl mb-4 md:mb-10",children:s}),(0,l.jsxs)("div",{className:"course-rating flex place-items-center mb-6 md:mb-14",children:[(0,l.jsx)(E.Z,{rating:4}),(0,l.jsxs)("p",{className:"student-number text-desc font-normal",children:[" ",i," students"]})]}),(0,l.jsxs)("div",{className:"hidden md:flex md:flex-row md:gap-14 md:mb-20 pr-8",children:[(0,l.jsx)(q.Z,{}),(0,l.jsx)(b.Z,{})]})]}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("div",{className:"relative w-full h-52 md:h-96 max-w-full md:mt-5 mb-6 md:mb-14",children:r?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"hidden lg:block",children:(0,l.jsx)(d(),{src:"/img/course_detail.png",alt:"Course Detail Image",fill:!0})}),(0,l.jsx)("iframe",{className:"absolute w-full lg:left-12 lg:top-8 lg:w-10/12 h-full lg:h-72 rounded",src:null!=r?r:"https://www.youtube.com/embed/2E73SftV0co",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]}):(0,l.jsx)(d(),{src:a,alt:"Course Detail Image",fill:!0})}),(0,l.jsxs)("div",{className:"flex-col md:hidden gap-10 mb-6 md:mb-10",children:[(0,l.jsx)(q.Z,{}),(0,l.jsx)(b.Z,{})]}),(0,l.jsx)(L.Z,{})]})]}),(0,l.jsx)(T.Z,{studentsTrained:n,workshopsConducted:c,placementDrives:o})]}),(0,l.jsx)(F.Z,{})]})};var M=s(1220),P=s(9966);let I=e=>{let{text:t,className:s}=e;return(0,l.jsx)("p",{className:v()("text-primary md:text-3xl font-semibold",s),children:t})},O=e=>{let{children:t,className:s}=e;return(0,l.jsx)("div",{className:s,children:t})},R=()=>{let{t:e}=(0,S.$G)();return(0,l.jsx)(O,{className:"md:mt-16",children:(0,l.jsxs)("div",{className:"flex flex-col gap-5 md:gap-8",children:[(0,l.jsxs)("div",{className:"point place-items-center flex gap-8",children:[(0,l.jsx)("div",{className:"relative flex-none w-7 h-7 md:w-10 md:h-10",children:(0,l.jsx)(d(),{src:"/img/course/ar.png",fill:!0,alt:"AR"})}),(0,l.jsx)("p",{className:"text-xs md:text-lg text-primary font-medium",children:"Augumented Reality enabled  Training"})]}),(0,l.jsxs)("div",{className:"point place-items-center flex gap-8",children:[(0,l.jsx)("div",{className:"relative flex-none w-7 h-7 md:w-10 md:h-10",children:(0,l.jsx)(d(),{src:"/img/course/community.png",fill:!0,alt:"Large Community of our alumini"})}),(0,l.jsx)("p",{className:"text-xs md:text-lg text-primary font-medium",children:"Large Community of our alumini"})]}),(0,l.jsxs)("div",{className:"point place-items-center flex gap-8",children:[(0,l.jsx)("div",{className:"relative flex-none w-7 h-7 md:w-10 md:h-10",children:(0,l.jsx)(d(),{src:"/img/course/person.png",fill:!0,alt:"Mock interviews & feedback sessions"})}),(0,l.jsx)("p",{className:"text-xs md:text-lg text-primary font-medium",children:"Mock interviews & feedback sessions"})]}),(0,l.jsxs)("div",{className:"point place-items-center flex gap-8",children:[(0,l.jsx)("div",{className:"relative flex-none w-7 h-7 md:w-10 md:h-10",children:(0,l.jsx)(d(),{src:"/img/course/linkedin.png",fill:!0,alt:"Resume & Linkedin profile building sessions"})}),(0,l.jsx)("p",{className:"text-xs md:text-lg text-primary font-medium",children:"Resume & Linkedin profile building sessions"})]}),(0,l.jsxs)("div",{className:"point place-items-center flex gap-8",children:[(0,l.jsx)("div",{className:"relative flex-none w-7 h-7 md:w-10 md:h-10",children:(0,l.jsx)(d(),{src:"/img/course/business-card.png",fill:!0,alt:"Company specific grooming sessions"})}),(0,l.jsx)("p",{className:"text-xs md:text-lg text-primary font-medium",children:"Company specific grooming sessions"})]})]})})},G=e=>{let{aboutCourse:t}=e;return(0,l.jsxs)("div",{className:"mt-12 mb-12 md:mb-24",children:[(0,l.jsx)("a",{id:"course-overview"}),(0,l.jsx)(N.Z,{title:"Course Overview",subtitle:"Know the details of the course",className:"mb-3 md:mb-8"}),(0,l.jsxs)("div",{className:"grid md:grid-cols-3 mb-10 mx-auto md:mb-24 px-5 xl:w-76",children:[(0,l.jsxs)("div",{className:"md:col-span-2 mb-5 md:mb-0",children:[(0,l.jsx)(I,{text:"About Course",className:"mb-1 md:mb-8 text-sm md:text-lg"}),(0,l.jsx)("p",{className:"text-aphonic mr-12 text-sm md:text-base",children:t})]}),(0,l.jsx)(R,{})]}),(0,l.jsxs)("div",{className:"grid grid-cols-2 gap-5 md:grid-cols-7 place-items-center md:gap-8 px-5 md:px-20 xl:w-76 mx-auto",children:[(0,l.jsxs)("div",{className:"course_attr flex flex-col place-items-center w-28 md:w-48",children:[(0,l.jsx)("div",{className:"relative w-20 h-20 md:w-32 md:h-32",children:(0,l.jsx)(d(),{src:"/img/daily_course_material.png",alt:"course material",fill:!0})}),(0,l.jsx)("div",{className:"text-tertiary text-sm md:text-2xl font-semibold text-center",children:"Daily Course Material"})]}),(0,l.jsx)("div",{className:"hidden md:block relative w-20 h-0.5",children:(0,l.jsx)(d(),{src:"/img/dotted_line.png",alt:"line",fill:!0})}),(0,l.jsxs)("div",{className:"course_attr flex flex-col place-items-center w-28 md:w-48",children:[(0,l.jsx)("div",{className:"relative w-20 h-20 md:w-32 md:h-32",children:(0,l.jsx)(d(),{src:"/img/lifetime_access.png",alt:"Lifetime access",fill:!0})}),(0,l.jsx)("div",{className:"text-tertiary text-sm md:text-2xl font-semibold text-center",children:"Lifetime LMS Access"})]}),(0,l.jsx)("div",{className:"hidden md:block relative w-20 h-0.5",children:(0,l.jsx)(d(),{src:"/img/dotted_line.png",alt:"line",fill:!0})}),(0,l.jsxs)("div",{className:"course_attr flex flex-col place-items-center w-28 md:w-48",children:[(0,l.jsx)("div",{className:"relative w-20 h-20 md:w-32 md:h-32",children:(0,l.jsx)(d(),{src:"/img/course_content.png",alt:"300+ hours course content",fill:!0})}),(0,l.jsx)("div",{className:"text-tertiary text-sm md:text-2xl font-semibold text-center",children:"300+ hours Course Content"})]}),(0,l.jsx)("div",{className:"hidden md:block relative w-20 h-0.5",children:(0,l.jsx)(d(),{src:"/img/dotted_line.png",alt:"line",fill:!0})}),(0,l.jsxs)("div",{className:"course_attr flex flex-col place-items-center w-28 md:w-48",children:[(0,l.jsx)("div",{className:"relative w-20 h-20 md:w-32 md:h-32",children:(0,l.jsx)(d(),{src:"/img/support.png",alt:"Support",fill:!0})}),(0,l.jsx)("div",{className:"text-tertiary text-sm md:text-2xl font-semibold text-center",children:"Dedicated Support"})]})]})]})},H=e=>{let{summaryList:t}=e;return(0,l.jsxs)(y,{children:[(0,l.jsx)("a",{id:"course-summary"}),(0,l.jsxs)("div",{className:"flex flex-col-reverse lg:flex-row place-items-center px-5 mb-8 mx-auto",children:[(0,l.jsx)("div",{className:"lg:mr-24 mx-auto",children:(0,l.jsx)(d(),{src:"/img/placement_assistance.png",width:300,height:374,alt:"Placement Assistance"})}),(0,l.jsxs)("div",{className:"md:col-span-2",children:[(0,l.jsx)(I,{text:"What will you learn?",className:"mb-8"}),(0,l.jsx)("ul",{className:"mb-8 px-5 md:px-0",style:{listStyleImage:"url('/img/bullet.png')",listStylePosition:"outside"},children:(null==t?void 0:t.length)>0&&t.map(e=>(0,l.jsx)("li",{className:"mb-4 pl-4",children:e},(0,o.Vj)()))})]})]})]})};var z=s(9430),Q=s(8387),V=(s(2494),s(8053)),$=s(6734),B=s(1197),U=s(4520),Y=(...e)=>e.filter(Boolean).join(" "),K=e=>{let{condition:t,message:s}=e};function W(...e){return function(t){e.some(e=>(null==e||e(t),null==t?void 0:t.defaultPrevented))}}var[X,J]=(0,Q.k)({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[ee,et]=(0,Q.k)({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[es,el,ea,er]=(0,z.n)(),ei=(0,_.Gp)(function(e,t){let{getButtonProps:s}=et(),l=s(e,t),a=J(),r={display:"flex",alignItems:"center",width:"100%",outline:0,...a.button};return i.createElement(_.m$.button,{...l,className:Y("chakra-accordion__button",e.className),__css:r})});ei.displayName="AccordionButton";var[en,ed]=(0,Q.k)({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"}),ec=(0,_.Gp)(function(e,t){let{children:s,className:l}=e,{htmlProps:a,...r}=function(e){var t;let{isDisabled:s,isFocusable:l,id:a,...r}=e,{getAccordionItemProps:n,setFocusedIndex:d}=ed(),c=(0,i.useRef)(null),o=(0,i.useId)(),m=a??o,u=`accordion-button-${m}`,x=`accordion-panel-${m}`;K({condition:!!(e.isFocusable&&!e.isDisabled),message:`Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `});let{register:h,index:p,descendants:f}=er({disabled:s&&!l}),{isOpen:b,onChange:j}=n(-1===p?null:p);K({condition:(t={isOpen:b,isDisabled:s}).isOpen&&!!t.isDisabled,message:"Cannot open a disabled accordion item"});let g=()=>{null==j||j(!0)},v=()=>{null==j||j(!1)},y=(0,i.useCallback)(()=>{null==j||j(!b),d(p)},[p,d,b,j]),N=(0,i.useCallback)(e=>{let t={ArrowDown(){let e=f.nextEnabled(p);null==e||e.node.focus()},ArrowUp(){let e=f.prevEnabled(p);null==e||e.node.focus()},Home(){let e=f.firstEnabled();null==e||e.node.focus()},End(){let e=f.lastEnabled();null==e||e.node.focus()}}[e.key];t&&(e.preventDefault(),t(e))},[f,p]),w=(0,i.useCallback)(()=>{d(p)},[d,p]),_=(0,i.useCallback)(function(e={},t=null){return{...e,type:"button",ref:(0,$.lq)(h,c,t),id:u,disabled:!!s,"aria-expanded":!!b,"aria-controls":x,onClick:W(e.onClick,y),onFocus:W(e.onFocus,w),onKeyDown:W(e.onKeyDown,N)}},[u,s,b,y,w,N,x,h]),C=(0,i.useCallback)(function(e={},t=null){return{...e,ref:t,role:"region",id:x,"aria-labelledby":u,hidden:!b}},[u,b,x]);return{isOpen:b,isDisabled:s,isFocusable:l,onOpen:g,onClose:v,getButtonProps:_,getPanelProps:C,htmlProps:r}}(e),n=J(),d={...n.container,overflowAnchor:"none"},c=(0,i.useMemo)(()=>r,[r]);return i.createElement(ee,{value:c},i.createElement(_.m$.div,{ref:t,...a,className:Y("chakra-accordion__item",l),__css:d},"function"==typeof s?s({isExpanded:!!r.isOpen,isDisabled:!!r.isDisabled}):s))});ec.displayName="AccordionItem";var eo=(0,_.Gp)(function(e,t){let{className:s,motionProps:l,...a}=e,{reduceMotion:r}=ed(),{getPanelProps:n,isOpen:d}=et(),c=n(a,t),o=Y("chakra-accordion__panel",s),m=J();r||delete c.hidden;let u=i.createElement(_.m$.div,{...c,__css:m.panel,className:o});return r?u:i.createElement(B.UO,{in:d,...l},u)});eo.displayName="AccordionPanel";var em=(0,_.Gp)(function({children:e,reduceMotion:t,...s},l){let a=(0,_.jC)("Accordion",s),r=(0,U.Lr)(s),{htmlProps:n,descendants:d,...c}=function(e){let{onChange:t,defaultIndex:s,index:l,allowMultiple:a,allowToggle:r,...n}=e;(function(e){let t=e.index||e.defaultIndex,s=null!=t&&!Array.isArray(t)&&e.allowMultiple;K({condition:!!s,message:`If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof t},`})})(e),K({condition:!!(e.allowMultiple&&e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"});let d=ea(),[c,o]=(0,i.useState)(-1);(0,i.useEffect)(()=>()=>{o(-1)},[]);let[m,u]=(0,V.T)({value:l,defaultValue:()=>a?s??[]:s??-1,onChange:t}),x=e=>{let t=!1;null!==e&&(t=Array.isArray(m)?m.includes(e):m===e);let s=t=>{if(null!==e){if(a&&Array.isArray(m)){let s=t?m.concat(e):m.filter(t=>t!==e);u(s)}else t?u(e):r&&u(-1)}};return{isOpen:t,onChange:s}};return{index:m,setIndex:u,htmlProps:n,getAccordionItemProps:x,focusedIndex:c,setFocusedIndex:o,descendants:d}}(r),o=(0,i.useMemo)(()=>({...c,reduceMotion:!!t}),[c,t]);return i.createElement(es,{value:d},i.createElement(en,{value:o},i.createElement(X,{value:a},i.createElement(_.m$.div,{ref:l,...n,className:Y("chakra-accordion",s.className),__css:a.root},e))))});em.displayName="Accordion";var eu=s(639),ex=s(8193);let eh=e=>{let{headline:t,faqList:s}=e;return(0,l.jsx)("div",{className:"shadow rounded-sm mx-5 md:mx-0",children:(0,l.jsxs)(em,{allowToggle:!0,className:"pt-8 md:pt-11 mb-8 md:mb-0",children:[(0,l.jsx)("p",{className:"p text-xl md:text-2xl text-tertiary font-semibold text-center mb-8",children:t}),s.map(e=>(0,l.jsx)(ec,{children(t){let{isExpanded:s}=t;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{children:(0,l.jsxs)(ei,{flex:1,justifyContent:"space-between",children:[(0,l.jsx)(eu.xu,{as:"span",className:"ml-4 my-2",textAlign:"left",children:(0,l.jsx)("p",{className:"text-primary font-semibold md:text-xl",children:e.question})}),(0,l.jsx)("div",{className:"flex-none",children:s?(0,l.jsx)(ex.ywL,{fontSize:"20px"}):(0,l.jsx)(ex.Lfi,{fontSize:"20px"})})]})}),(0,l.jsx)(eo,{children:(0,l.jsx)("p",{className:"text-aphonic pt-4 pb-3 pl-5",children:e.answer})})]})}},e.id))]})})},ep=e=>{let{headline:t,subHeadline:s,faqList1:a,faqList2:r}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("a",{id:"faqs"}),((null==a?void 0:a.length)>0||(null==r?void 0:r.length)>0)&&(0,l.jsxs)("div",{className:"mb-12",children:[(0,l.jsx)(N.Z,{title:t,subtitle:s,className:"mb-4 md:mb-10 mx-5"}),(0,l.jsxs)("div",{className:"md:grid md:grid-cols-2 gap-4 xl:w-76 mx-auto",children:[(null==a?void 0:a.length)>0&&(0,l.jsx)(eh,{headline:"About Course",faqList:a}),(null==r?void 0:r.length)>0&&(0,l.jsx)(eh,{headline:"Course Impact",faqList:r})]})]})]})};var ef=s(4539);let eb=e=>{let{percentage:t,text:s,label:a}=e;return(0,l.jsxs)("div",{className:"flex flex-col",children:[a&&(0,l.jsx)("p",{className:"italic mb-2",children:a}),(0,l.jsx)("div",{className:"bg-loader-gray relative rounded-lg w-full border",children:(0,l.jsx)("div",{className:v()("bg-tertiary abosolute rounded-lg p-1.5 pl-7 left-0 ","".concat(t)),children:s&&(0,l.jsx)("p",{className:"text-white font-medium",children:s})})})]})},ej=()=>(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsxs)("div",{className:"w-full flex my-3 md:my-8 justify-between items-baseline gap-1",children:[(0,l.jsx)("div",{className:"w-16 rounded h-20 bg-gd-salary-bar-gray"}),(0,l.jsx)("div",{className:"w-16 rounded h-36 bg-gd-salary-bar-blue"}),(0,l.jsx)("div",{className:"w-16 rounded h-28 bg-gd-salary-bar-gray"}),(0,l.jsx)("div",{className:"w-16 rounded h-16 bg-gd-salary-bar-gray"}),(0,l.jsx)("div",{className:"w-16 rounded h-8 bg-gd-salary-bar-gray"}),(0,l.jsx)("div",{className:"w-16 rounded h-6 bg-gd-salary-bar-gray"}),(0,l.jsx)("div",{className:"w-16 rounded h-5 bg-gd-salary-bar-gray"}),(0,l.jsx)("div",{className:"w-16 rounded h-4 bg-gd-salary-bar-gray"}),(0,l.jsx)("div",{className:"w-16 rounded h-3 bg-gd-salary-bar-gray"}),(0,l.jsx)("div",{className:"w-16 rounded h-2 bg-gd-salary-bar-gray"})]}),(0,l.jsxs)("div",{className:"limits flex justify-between",children:[(0,l.jsx)("div",{className:"flex flex-col items-center",children:(0,l.jsx)("p",{className:"lowerlimit text-xs text-primary",children:"₹3L"})}),(0,l.jsxs)("div",{className:"flex flex-col items-center",children:[(0,l.jsx)("p",{className:"lowerlimit text-xs text-primary"}),(0,l.jsx)("p",{className:"lowerlimit text-xs text-primary",children:"Median: ₹7L"})]}),(0,l.jsx)("div",{className:"flex flex-col items-center",children:(0,l.jsx)("p",{className:"upperlimit text-xs text-primary",children:"₹15L"})})]})]}),eg=()=>(0,l.jsx)("div",{className:"w-full px-5",children:(0,l.jsxs)("div",{className:" mx-auto xl:w-76 mt-52 mb-20 pt-115 xs:pt-80 md:pt-96 lg:pt-56 border border-primary2 rounded relative",children:[(0,l.jsxs)("div",{className:"header w-10/12 mx-auto rounded-3xl shadow-gdSalaryBox absolute -top-14 -mt-20 left-0 right-0 bg-white p-10 mb-18 flex flex-col lg:flex-row",children:[(0,l.jsxs)("div",{className:"mr-20",children:[(0,l.jsx)("p",{className:"text-sm lg:text-base font-semibold",children:"Average Base Pay"}),(0,l.jsxs)("p",{className:"text-lg lg:text-3xl font-bold",children:["₹ 6,50,000 ",(0,l.jsx)("span",{className:"text-aphonic",children:"/yr"})]}),(0,l.jsx)("p",{className:"text-sm lg:text-base mb-4 lg:mb-10",children:"Same as national average"}),(0,l.jsx)("p",{className:"text-sm lg:text-base mb-5 text-aphonic",children:"Not including cash compensation"}),(0,l.jsx)(ef.Z,{variant:"bg-transparent",className:"px-3 md:px-7 py-3 w-42 mb-3 md:mb-0 border border-primary2 rounded",children:(0,l.jsx)("p",{className:"text-primary text-xs md:text-base font-bold",children:"See More Insights"})})]}),(0,l.jsx)("div",{className:"w-full lg:w-7/12 flex items-end",children:(0,l.jsx)(ej,{})})]}),(0,l.jsx)("p",{className:"text-2xl lg:text-4xl font-bold text-center mb-4 lg:mb-8",children:"Market Salaries"}),(0,l.jsxs)("div",{className:"mx-10 mb-9 grid lg:grid-cols-3 gap-7",children:[(0,l.jsx)(eb,{percentage:"w-7/12",text:"Rs.23.7 LPA",label:"Maximum"}),(0,l.jsx)(eb,{percentage:"w-9/12",text:"Rs.10.7 LPA",label:"Average"}),(0,l.jsx)(eb,{percentage:"w-7/12",text:"Rs.3 LPA",label:"Minimum"})]}),(0,l.jsxs)("p",{className:"text-center text-primary font-bold mb-9",children:["View source:\xa0",(0,l.jsx)(p(),{target:"_blank",href:"https://www.glassdoor.co.in/Salaries/pune-full-stack-developer-salary-SRCH_IL.0,4_IM1072_KO5,25.htm#:~:text=The%20average%20salary%20for%20Full,7%2C500%20%2D%20%E2%82%B94%2C04%2C016.",children:(0,l.jsx)("span",{className:"font-normal text-tertiary italic underline ",children:"Glassdoor"})})]})]})}),ev=e=>{var t;let{course:s,courseDetailPageInfo:i,placementList:n,faqList1:d,faqList2:o,placementPagination:m,courseList:u}=e;return(0,l.jsxs)("div",{children:[(0,l.jsx)(a.Z,{courseList:u}),(0,l.jsx)(D,{headline:s.courseName,subHeadline:s.description,heroVideo:s.heroVideo,heroImage:null===(t=s.heroImage)||void 0===t?void 0:t.data[0].attributes.url,numberOfStudents:s.numberOfStudents,studentsTrained:i.studentsTrained,workshopsConducted:i.workshopsConducted,placementDrives:i.placementDrives}),(0,l.jsx)(j,{}),(0,l.jsx)(G,{aboutCourse:s.aboutCourse}),s.courseSummary&&(0,l.jsx)(H,{summaryList:s.courseSummary}),(0,l.jsx)(eg,{}),s.courseFAQ&&(0,l.jsx)(x,{courseName:s.courseName,faqList:s.courseFAQ}),(0,l.jsx)(A,{curriculumList:s.curriculumList}),(0,l.jsx)(M.Z,{headline:i.whyUsHeadline,subHeadline:i.whyUsSubHeadline}),(0,l.jsx)(P.Z,{headline:i.achievementHeadline,subHeadline:i.achievementSubHeadline,placementList:n,placementPagination:m}),(0,l.jsx)(c,{imgSrc:"/img/price-tag.png",price:s.price}),(0,l.jsx)(ep,{headline:i.faqHeadline,subHeadline:i.faqSubHeadline,faqList1:d,faqList2:o}),(0,l.jsx)(r.Z,{showFooterTop:!0})]})};var ey=!0,eN=ev},2370:function(e){e.exports={faqContainer:"courseFAQ_faqContainer__ryd37",faqcard:"courseFAQ_faqcard__pRik4",question:"courseFAQ_question__yNapd",questionNumber:"courseFAQ_questionNumber__FTUYK",questionText:"courseFAQ_questionText__I04bg",questionText2:"courseFAQ_questionText2__DxrHM",answer:"courseFAQ_answer__jfEB0",activeCard:"courseFAQ_activeCard__RmOUs"}},9398:function(){},5152:function(e,t,s){e.exports=s(7645)}},function(e){e.O(0,[158,617,942,92,835,281,291,445,774,888,179],function(){return e(e.s=6800)}),_N_E=e.O()}]);