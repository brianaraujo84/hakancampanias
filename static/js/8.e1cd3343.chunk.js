(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[8],{1383:function(e,a,t){"use strict";t.r(a);var n=t(140),c=t(144),o=t(1302),r=t(219),s=t(0),l=t.n(s),m=t(42);a.default=function(){return l.a.createElement(c.a,{header:l.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},l.a.createElement("div",{className:"flex flex-col"},l.a.createElement("div",{className:"flex items-center mb-16"},l.a.createElement(o.a,{className:"text-18",color:"action"},"home"),l.a.createElement(o.a,{className:"text-16",color:"action"},"chevron_right"),l.a.createElement(r.a,{color:"textSecondary"},"Documentation"),l.a.createElement(o.a,{className:"text-16",color:"action"},"chevron_right"),l.a.createElement(r.a,{color:"textSecondary"},"Authentication")),l.a.createElement(r.a,{variant:"h6"},"Firebase Authentication"))),content:l.a.createElement("div",{className:"p-24 max-w-2xl"},l.a.createElement(r.a,{className:"mb-16",component:"p"},"With Firebase Authentication in Fuse React."),l.a.createElement("ul",null,l.a.createElement("li",{className:"mb-12"},"You can ",l.a.createElement(m.a,{to:"/register"},"register"),"."),l.a.createElement("li",{className:"mb-12"},"You can ",l.a.createElement(m.a,{to:"/login"},"login"),"."),l.a.createElement("li",{className:"mb-12"},"Also saves user data (user shortcuts, layout and theme settings) to FirebaseDb.")),l.a.createElement(r.a,{className:"mt-32 mb-16",component:"p"},"Related Service folder is located at ",l.a.createElement("code",null,"/src/firebaseService")),l.a.createElement(r.a,{className:"my-24 italic",component:"p",color:"textSecondary"},"Note: Make sure ","<Router>"," component wrapped with ","<Auth>"," component in",l.a.createElement("code",null,"src/app/App.js"),"."),l.a.createElement(r.a,{className:"mt-32 mb-8",variant:"h5"},"Configuration"),l.a.createElement(r.a,{className:"mb-16",component:"p"},"You need to paste the configuration of your Firebase Project into",l.a.createElement("code",null,"src/app/services/firebaseService/firebaseServiceConfig.js")),l.a.createElement(n.a,{component:"pre",className:"language-jsx my-16"},'\n                                const prodConfig = {\n                                    apiKey           : "YOUR_API_KEY",\n                                    authDomain       : "your-app.firebaseapp.com",\n                                    databaseURL      : "https://your-app.firebaseio.com",\n                                    projectId        : "your-app",\n                                    storageBucket    : "your-app.appspot.com",\n                                    messagingSenderId: "YOUR_MESSAGING_SENDER_ID"\n                                };\n\n                                const devConfig = {\n                                    apiKey           : "YOUR_API_KEY",\n                                    authDomain       : "your-app.firebaseapp.com",\n                                    databaseURL      : "https://your-app.firebaseio.com",\n                                    projectId        : "your-app",\n                                    storageBucket    : "your-app.appspot.com",\n                                    messagingSenderId: "YOUR_MESSAGING_SENDER_ID"\n                                };\n                            '))})}}}]);