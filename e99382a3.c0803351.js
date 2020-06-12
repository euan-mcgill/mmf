(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),l=n(9),r=(n(0),n(162)),i={id:"textvqa_challenge",title:"TextVQA Challenge",sidebar_label:"TextVQA Challenge"},o={id:"challenges/textvqa_challenge",title:"TextVQA Challenge",description:"TextVQA Challenge is available at this link.",source:"@site/docs/challenges/textvqa_challenge.md",permalink:"/docs/challenges/textvqa_challenge",editUrl:"https://github.com/facebookresearch/mmf/edit/master/website/docs/challenges/textvqa_challenge.md",lastUpdatedBy:"Vedanuj Goswami",lastUpdatedAt:1591998211,sidebar_label:"TextVQA Challenge",sidebar:"docs",previous:{title:"Hateful Memes Challenge",permalink:"/docs/challenges/hateful_memes_challenge"},next:{title:"VQA Challenge",permalink:"/docs/challenges/vqa_challenge"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Training and Evaluation",id:"training-and-evaluation",children:[{value:"Training",id:"training",children:[]},{value:"Evaluation",id:"evaluation",children:[]}]},{value:"Predictions for Challenge",id:"predictions-for-challenge",children:[]},{value:"Submission for Challenge",id:"submission-for-challenge",children:[]}],s={rightToc:c};function d(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"TextVQA Challenge is available at ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://textvqa.org/challenge/"}),"this link"),"."),Object(r.b)("p",null,"In MMF, we provide the starter code for various baseline models for this challenge. TextVQA dataset will also be automatically downloaded during first training."),Object(r.b)("p",null,"In this tutorial, we provide steps for running training and evaluation with M4C model on TextVQA dataset and generating submission file for the challenge. The same steps can be used for other models."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"Follow the prerequisites for installation of mmf ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://mmf.sh/docs/getting_started/installation"}),"here"),"."),Object(r.b)("h2",{id:"training-and-evaluation"},"Training and Evaluation"),Object(r.b)("h3",{id:"training"},"Training"),Object(r.b)("p",null,"For running training on ",Object(r.b)("inlineCode",{parentName:"p"},"train")," set, run the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mmf_run config=projects/m4c/configs/textvqa/defaults.yaml \\\n    datasets=textvqa \\\n    model=m4c \\\n    run_type=train\n")),Object(r.b)("p",null,"This will train the ",Object(r.b)("inlineCode",{parentName:"p"},"m4c")," model on the dataset and generate the checkpoints and best trained model (",Object(r.b)("inlineCode",{parentName:"p"},"m4c_final.pth"),") will be stored in an experiment folder under the ",Object(r.b)("inlineCode",{parentName:"p"},"./save")," directory by default (unless ",Object(r.b)("inlineCode",{parentName:"p"},"env.save_dir")," is overriden)."),Object(r.b)("h3",{id:"evaluation"},"Evaluation"),Object(r.b)("p",null,"Next run evaluation on the validation ",Object(r.b)("inlineCode",{parentName:"p"},"val")," set:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mmf_run config=projects/m4c/configs/textvqa/defaults.yaml \\\n    datasets=textvqa \\\n    model=m4c \\\n    run_type=val \\\n    checkpoint.resume_file=<path_to_trained_model>\n")),Object(r.b)("p",null,"This will give you the performance of your model on the validation set. The metric will be TextVQA Accuracy."),Object(r.b)("h2",{id:"predictions-for-challenge"},"Predictions for Challenge"),Object(r.b)("p",null,"After we trained the model and evaluated on the validation set, we will generate the predictions on the ",Object(r.b)("inlineCode",{parentName:"p"},"test")," set which can be submitted to the Test Standard phase. The prediction file should contain the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Question ID, ",Object(r.b)("inlineCode",{parentName:"li"},"question_id")),Object(r.b)("li",{parentName:"ul"},"Answer, ",Object(r.b)("inlineCode",{parentName:"li"},"answer"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "question_id": "INT",\n    "answer": "STRING"\n  },\n  {\n    "question_id": "...",\n    "answer": "..."\n  }\n]\n')),Object(r.b)("p",null,"With MMF you can directly generate the predictions in the required submission format with the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mmf_predict config=projects/m4c/configs/textvqa/defaults.yaml \\\n    datasets=textvqa \\\n    model=m4c \\\n    run_type=test \\\n    checkpoint.resume_file=<path_to_trained_model>\n")),Object(r.b)("p",null,"This command will output where the generated predictions JSON file is stored."),Object(r.b)("h2",{id:"submission-for-challenge"},"Submission for Challenge"),Object(r.b)("p",null,"Next you can upload the generated json file to EvalAI page for TextVQA ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://evalai.cloudcv.org/web/challenges/challenge-page/551/submission"}),"here"),". Follow these steps:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"> Go to https://evalai.cloudcv.org/web/challenges/challenge-page/551/overview\n> Select Submit Tab\n> Select Validation Phase\n> Select the file by click Upload file\n> Write a model name\n> Upload\n")),Object(r.b)("p",null,"To check your results, you can go in 'My submissions' section and select 'Validation Phase' and click on 'Result file'."),Object(r.b)("p",null,"Now, you can either edit the M4C model to create your own model on top of it or create your own model inside MMF to beat M4C in challenge."))}d.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=l.a.createContext({}),d=function(e){var t=l.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},p=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),p=a,h=u["".concat(i,".").concat(p)]||u[p]||b[p]||r;return n?l.a.createElement(h,o(o({ref:t},s),{},{components:n})):l.a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);