(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{153:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var a=t(2),r=t(9),l=(t(0),t(162)),i={id:"vqa_challenge",title:"VQA Challenge",sidebar_label:"VQA Challenge"},o={id:"challenges/vqa_challenge",title:"VQA Challenge",description:"VQA Challenge is available at this link.",source:"@site/docs/challenges/vqa_challenge.md",permalink:"/docs/challenges/vqa_challenge",editUrl:"https://github.com/facebookresearch/mmf/edit/master/website/docs/challenges/vqa_challenge.md",lastUpdatedBy:"Vedanuj Goswami",lastUpdatedAt:1591998211,sidebar_label:"VQA Challenge",sidebar:"docs",previous:{title:"TextVQA Challenge",permalink:"/docs/challenges/textvqa_challenge"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Training and Evaluation",id:"training-and-evaluation",children:[{value:"Training",id:"training",children:[]},{value:"Evaluation",id:"evaluation",children:[]}]},{value:"Predictions for Challenge",id:"predictions-for-challenge",children:[]},{value:"Submission for Challenge",id:"submission-for-challenge",children:[]}],s={rightToc:c};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"VQA Challenge is available at ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://visualqa.org/challenge.html"}),"this link"),"."),Object(l.b)("p",null,"In MMF, we provide the starter code for various baseline models for this challenge. VQA2.0 dataset will also be automatically downloaded during first training."),Object(l.b)("p",null,"In this tutorial, we provide steps for running training and evaluation with VisualBERT model on VQA2.0 dataset and generating submission file for the challenge. The same steps can be used for other models."),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("p",null,"Follow the prerequisites for installation of mmf ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://mmf.sh/docs/getting_started/installation"}),"here"),"."),Object(l.b)("h2",{id:"training-and-evaluation"},"Training and Evaluation"),Object(l.b)("h3",{id:"training"},"Training"),Object(l.b)("p",null,"For running training on train set, run the following command:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mmf_run config=projects/visual_bert/configs/vqa2/defaults.yaml \\\n    model=visual_bert \\\n    dataset=vqa2 \\\n    run_type=train\n")),Object(l.b)("p",null,"This will train the ",Object(l.b)("inlineCode",{parentName:"p"},"visual_bert")," model on the dataset and generate the checkpoints and best trained model (",Object(l.b)("inlineCode",{parentName:"p"},"visual_bert_final.pth"),") will be stored in an experiment folder under the ",Object(l.b)("inlineCode",{parentName:"p"},"./save")," directory by default."),Object(l.b)("h3",{id:"evaluation"},"Evaluation"),Object(l.b)("p",null,"Next run evaluation on the validation set:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mmf_run config=projects/visual_bert/configs/vqa2/defaults.yaml \\\n    model=visual_bert \\\n    dataset=vqa2 \\\n    run_type=val \\\n    checkpoint.resume_file=<path_to_trained_model>\n")),Object(l.b)("p",null,"This will give you the performance of your model on the validation set. The metric will be VQA Accuracy."),Object(l.b)("h2",{id:"predictions-for-challenge"},"Predictions for Challenge"),Object(l.b)("p",null,"After training the model and evaluated on the validation set, we will generate the predictions on the ",Object(l.b)("inlineCode",{parentName:"p"},"test-dev")," and ",Object(l.b)("inlineCode",{parentName:"p"},"test-std")," set. The prediction file should contain the following for each sample:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Question ID, ",Object(l.b)("inlineCode",{parentName:"li"},"question_id")),Object(l.b)("li",{parentName:"ul"},"Answer, ",Object(l.b)("inlineCode",{parentName:"li"},"answer"))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "question_id": "INT",\n    "answer": "STRING"\n  },\n  {\n    "question_id": "...",\n    "answer": "..."\n  }\n]\n')),Object(l.b)("p",null,"With MMF you can directly generate the predictions in the required submission format with the following command:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mmf_predict config=projects/visual_bert/configs/vqa2/defaults.yaml \\\n    model=visual_bert \\\n    dataset=vqa2 \\\n    run_type=test \\\n    checkpoint.resume_file=<path_to_trained_model>\n")),Object(l.b)("p",null,"This command will output where the generated predictions JSON file is stored."),Object(l.b)("h2",{id:"submission-for-challenge"},"Submission for Challenge"),Object(l.b)("p",null,"Next you can upload the generated json file to EvalAI page for VQA ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://evalai.cloudcv.org/web/challenges/challenge-page/514/my-submission"}),"here"),". To check your results, you can go in 'My submissions' section and check the phase where you submitted your results file."))}u.isMDXComponent=!0},162:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(t),p=a,h=d["".concat(i,".").concat(p)]||d[p]||b[p]||l;return t?r.a.createElement(h,o(o({ref:n},s),{},{components:t})):r.a.createElement(h,o({ref:n},s))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);