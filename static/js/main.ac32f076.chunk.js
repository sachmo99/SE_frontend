(this.webpackJsonpquizapp=this.webpackJsonpquizapp||[]).push([[0],{37:function(e,t,a){e.exports=a.p+"static/media/sekalu.d546ecc2.jpg"},40:function(e,t,a){e.exports=a(80)},45:function(e,t,a){},46:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(30),l=a.n(o),s=(a(45),a(3)),c=a(6),i=a(4),u=a(5),m=(a(46),a(1)),d=a.n(m),h=a(7),p=(a(49),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"quizApptitle",className:"jumbotron bcc"},r.a.createElement("h1",{className:"h0"},"Quiz App"))}}]),t}(n.Component)),f=(a(50),a(17)),E=a(21),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).onUsernameChanged=function(e){a.setState({username:e.target.value})},a.onPasswordChanged=function(e){a.setState({password:e.target.value})},a.verifyUserLogin=function(e){a.state.userFound?(d.a.save("username",a.state.username,{path:"/"}),e.push("/sequizapp/#/dashboard")):(d.a.remove("username",{path:"/"}),console.log(a.state.userFound))},a.handleSignin=function(e){var t=d.a.load("ipaddress");fetch("http://".concat(t,":5000/login?username=").concat(a.state.username,"&&password=").concat(a.state.password),{method:"GET"}).then((function(e){return e.json()})).then((function(t){a.setState((function(){return t}),(function(){this.verifyUserLogin(e)}))}))},a.state={username:"",password:""},a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=Object(f.f)((function(t){var a=t.history;return r.a.createElement("button",{id:"signinButton",className:"btn-lg btn btn-success indent ",type:"submit",value:"Sign In",onClick:function(){e.handleSignin(a)}},"Sign In")}));return r.a.createElement("div",{id:"siginOuter"},r.a.createElement(E.a,{id:"signinCard"},r.a.createElement("form",{id:"inputboxes"},r.a.createElement("div",{className:"form-group row "},r.a.createElement("label",{htmlFor:"username",className:"col-form-label"},"Username"),r.a.createElement("input",{type:"username",className:"form-control",id:"username",placeholder:"Enter your Username",onChange:this.onUsernameChanged})),r.a.createElement("div",{className:"form-group row "},r.a.createElement("label",{htmlFor:"password",className:"col-form-label"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Enter your Password",onChange:this.onPasswordChanged}))),!1===this.state.userFound?r.a.createElement("p",{id:"NoUserErrorMsg"},"User doesn't exist or Wrong Password"):null,r.a.createElement("div",{id:"signInButtton"},r.a.createElement(t,null))))}}]),t}(n.Component),v=(a(56),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",wrongUsernameFormat:!1},a.handleUsernameChange=function(e){a.setState({username:e.target.value})},a.handlePasswordChange=function(e){a.setState({password:e.target.value})},a.handleRollNoChange=function(e){a.setState({rollNo:e.target.value})},a.handleEmailChange=function(e){a.setState({email:e.target.value})},a.handleMobileChange=function(e){a.setState({mobile:e.target.value})},a.checkRegex=function(){return""!==a.state.username||(a.setState({wrongUsernameFormat:1}),!1)},a.goToHomePage=function(){window.location.href=window.location.origin+"/"},a.handleRegister=function(){var e=d.a.load("ipaddress");fetch("http://".concat(e,":5000/register?username=").concat(a.state.username,"&&password=").concat(a.state.password,"&&email=").concat(a.state.email,"&&rollNo=").concat(a.state.rollNo,"&&mobile=").concat(a.state.mobile),{method:"GET"}).then((function(e){return e.json()})).then((function(e){return a.setState((function(){return e}),(function(){console.log(this.state),this.state.isRegisterSuccess?(window.location.href=window.location.origin+"/",alert("Successfully Registered\nLogin to use the App")):alert("User already exits\nTry a different Username")}))}))},a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){this.setState({isRegisterSuccess:!1}),console.log(this.state)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"registerPage"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{for:"username",className:"col-sm-2 col-form-label"},"Username:"),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{type:"username",className:"form-control",id:"username",placeholder:"Enter your Username",onChange:this.handleUsernameChange}))),this.state.wrongUsernameFormat?r.a.createElement("p",{className:"indentErrorMsg"},"Wrong Username Format"):null,r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{for:"email",className:"col-sm-2 col-form-label"},"Email: "),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter your Email",onChange:this.handleEmailChange}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{for:"rollNo",className:"col-sm-2 col-form-label"},"Roll No:"),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{type:"text",className:"form-control",id:"rollNo",placeholder:"Enter your Roll No",onChange:this.handleRollNoChange}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{for:"phoneNo",className:"col-sm-2 col-form-label"},"Phone:"),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{type:"number",className:"form-control",id:"phoneNo",placeholder:"Enter your Mobile Number",onChange:this.handleMobileChange}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{for:"password",className:"col-sm-2 col-form-label"},"Password:"),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Enter your Password",onChange:this.handlePasswordChange})))),r.a.createElement("div",{className:"text-center centrify"},r.a.createElement((function(){return r.a.createElement("button",{className:"btn-md btn btn-success",id:"registerButton",value:"Register",onClick:function(t){e.checkRegex()?e.handleRegister():console.log("Hello ",e.state)}},"Register")}),null)),r.a.createElement("div",{className:"text-center registerButton"},r.a.createElement("p",null,"Already have an account ?"),r.a.createElement("button",{id:"loginBackButton",className:"btn-md btn btn-dark",onClick:this.goToHomePage},"Log In")))}}]),t}(n.Component)),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={isLoggedin:!1,ifSignupPage:!1},a.onRegisterhandler=function(){a.setState({ifSignupPage:!0})},a.render=function(){return d.a.save("ipaddress","192.168.99.100",{path:"/sequizapp"}),void 0!==d.a.load("username",{path:"/sequizapp"})&&(window.location.href=window.location.origin+"/sequizapp/#/dashboard"),r.a.createElement("div",{class:"background"},a.state.isLoggedin?null:r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement("div",null,a.state.ifSignupPage?r.a.createElement(v,null):r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement("div",{id:"signupDiv"},r.a.createElement("p",null,"Don't have Account ?  ",r.a.createElement("br",null)),r.a.createElement("button",{id:"toSignupPageButton",onClick:a.onRegisterhandler,className:"btn-lg btn btn-dark"},"Sign Up for Quiz App"))))))},a}return Object(u.a)(t,e),t}(n.Component),w=(a(57),a(24),a(58),a(8)),C=a.n(w),N=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={username:null},a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){this.setState({username:d.a.load("username")})}},{key:"render",value:function(){var e=Object(f.f)((function(e){var t=e.history;return r.a.createElement("div",null,r.a.createElement(C.a,{id:"sidenav",onSelect:function(e){}},r.a.createElement(C.a.Toggle,{id:"navToggleButton"}),r.a.createElement(C.a.Nav,null,r.a.createElement(w.NavItem,{id:"navToDashboard",eventKey:"home",onClick:function(){t.push("/dashboard")}},r.a.createElement(w.NavIcon,null,r.a.createElement("i",{className:"fa fa-fw fa-home",style:{fontSize:"1.75em"}})),r.a.createElement(w.NavText,null,"Home")),r.a.createElement(w.NavItem,{id:"navToSettings",eventKey:""},r.a.createElement(w.NavIcon,null,r.a.createElement("i",{className:"fa fa-fw fa-cogs","aria-hidden":"true"})),r.a.createElement(w.NavText,null,"Settings"),r.a.createElement(w.NavItem,{eventKey:"charts/linechart"},r.a.createElement(w.NavText,null,"Profile Settings")),r.a.createElement(w.NavItem,{eventKey:"charts/barchart"},r.a.createElement(w.NavText,null,"Change Password"))),r.a.createElement(w.NavItem,{id:"navToComments"},r.a.createElement(w.NavIcon,null,r.a.createElement("i",{className:"fa fa-comments","aria-hidden":"true"})),r.a.createElement(w.NavText,null,"Comments")),r.a.createElement(w.NavItem,{id:"navToLogout",onClick:function(){d.a.remove("username",{path:"/"}),t.push("/")}},r.a.createElement(w.NavIcon,null,r.a.createElement("i",{className:"fa fa-window-close","aria-hidden":"true"})),r.a.createElement(w.NavText,null,"Logout")))))}));return r.a.createElement("div",null,r.a.createElement(e,null))}}]),t}(n.Component),y=(a(62),a(63),a(81)),O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).handleButtonClick=function(){!0===a.props.prvQuiz?(d.a.save("quizCode",a.props.id,{path:"/"}),window.location.href=window.location.origin+"/viewResult"):(d.a.save("quizCode",a.props.id,{path:"/"}),window.location.href=window.location.origin+"/testArena")},a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e,t;return 1===this.props.flag?e="warning":(e="dark",t="white"),r.a.createElement(E.a,{bg:e,text:t},r.a.createElement(E.a.Body,null,r.a.createElement(E.a.Title,null,this.props.title),r.a.createElement(y.a,{id:this.props.id,onClick:this.handleButtonClick,className:"taketest indent50pRight",variant:"primary"},!1===this.props.prvQuiz?"Take Test":"View Result"),r.a.createElement("div",{id:"quizDetails"},this.props.prvQuiz?r.a.createElement(E.a.Text,null,r.a.createElement("b",null,"Quiz-Topics "),r.a.createElement("span",null,":   ",this.props.topics),r.a.createElement("br",null),r.a.createElement("b",null,"Date "),r.a.createElement("span",null,":   ",this.props.date),r.a.createElement("br",null),r.a.createElement("b",null,"Score "),r.a.createElement("span",null,":   ",this.props.score)):r.a.createElement(E.a.Text,null,r.a.createElement("b",null,"Quiz-Topics "),r.a.createElement("span",null,":   ",this.props.topics),r.a.createElement("br",null),r.a.createElement("b",null,"Due-DateTime "),r.a.createElement("span",null,":   ",this.props.due)))))}}]),t}(n.Component),j=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={};var n=d.a.load("username"),r=d.a.load("ipaddress");return fetch("http://".concat(r,":5000/getQuizes?prvQuiz=",!1,"&username=").concat(n),{method:"GET"}).then((function(e){return e.json()})).then((function(e){return a.setState({quizes:e})})),a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"avaiableQuizesPage"},r.a.createElement(E.a,null,r.a.createElement(E.a.Header,null,"Available Quizes")),null==this.state.quizes?r.a.createElement("h1",null,"Component loading wait"):this.state.quizes.map((function(e){return r.a.createElement(O,{title:e.course,bg:"dark",text:"white",id:e.quizCode,prvQuiz:!1,flag:e.flag,topics:e.topic,due:e.due})})))}}]),t}(n.Component),q=(a(64),function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={};var n=d.a.load("username"),r=d.a.load("ipaddress");return fetch("http://".concat(r,":5000/getQuizes?prvQuiz=",!0,"&username=").concat(n),{method:"GET"}).then((function(e){return e.json()})).then((function(e){return a.setState({quizes:e})})),a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"previousQuizesPage"},r.a.createElement(E.a,null,r.a.createElement(E.a.Header,null,"Previous Quizes")),null==this.state.quizes?r.a.createElement("h1",null,"Component loading wait"):this.state.quizes.map((function(e){return r.a.createElement(O,{title:e.course,id:e.quizCode,bg:"warning",prvQuiz:!0,flag:e.flag,topics:e.topic,date:e.date,score:e.marks})})))}}]),t}(n.Component)),z=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={username:null},a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){this.setState({username:d.a.load("username")})}},{key:"render",value:function(){return r.a.createElement("div",null,null!=this.state.username?r.a.createElement("div",null,r.a.createElement("div",{id:"dashboardPage"},r.a.createElement("h1",{className:"text-center",id:"welcomeMsg"},"Welcome, ",this.state.username),r.a.createElement(j,null),r.a.createElement("br",null),r.a.createElement(q,null),r.a.createElement(N,null))):r.a.createElement("h1",{id:"luvda",className:"jumbotron text-center"},r.a.createElement("button",{onClick:function(){window.location.href=window.location.origin+"/"},class:"btn btn-lg btn-primary"},"Please Login ",r.a.createElement("i",{className:"far fa-heart"}))))}}]),t}(n.Component),S=(a(65),a(66),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={username:null},a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){this.setState({username:d.a.load("facultyName")})}},{key:"render",value:function(){var e=Object(f.f)((function(e){var t=e.history;return r.a.createElement("div",null,r.a.createElement(C.a,{id:"sidenav",onSelect:function(e){}},r.a.createElement(C.a.Toggle,{id:"navToggleButton"}),r.a.createElement(C.a.Nav,null,r.a.createElement(w.NavItem,{id:"navToDashboard",eventKey:"home",onClick:function(){t.push("/facultydashboard")}},r.a.createElement(w.NavIcon,null,r.a.createElement("i",{className:"fa fa-fw fa-home",style:{fontSize:"1.75em"}})),r.a.createElement(w.NavText,null,"Home")),r.a.createElement(w.NavItem,{id:"navToSettings",eventKey:""},r.a.createElement(w.NavIcon,null,r.a.createElement("i",{className:"fa fa-fw fa-cogs","aria-hidden":"true"})),r.a.createElement(w.NavText,null,"Settings"),r.a.createElement(w.NavItem,{eventKey:"charts/linechart"},r.a.createElement(w.NavText,null,"Profile Settings")),r.a.createElement(w.NavItem,{eventKey:"charts/barchart"},r.a.createElement(w.NavText,null,"Change Password"))),r.a.createElement(w.NavItem,{id:"navToLogout",onClick:function(){d.a.remove("facultyName",{path:"/"}),t.push("/admin")}},r.a.createElement(w.NavIcon,null,r.a.createElement("i",{className:"fa fa-window-close","aria-hidden":"true"})),r.a.createElement(w.NavText,null,"Logout")))))}));return r.a.createElement("div",null,r.a.createElement(e,null))}}]),t}(n.Component)),T=(a(67),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).handleButtonClick=function(){},a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){for(var e=this.props.scores,t=0,a=0;a<e.length;a++)t+=e[a].score;this.setState({noOfStudents:this.props.scores.length,avg:t/e.length}),console.log(this.props.scores.length)}},{key:"render",value:function(){var e,t;this.state={},this.props.flag%2?(e="danger",t="white"):e="warning";for(var a=0,n=this.props.scores,o=0;o<n.length;o++)a+=n[o].score;var l=a/n.length;return r.a.createElement(E.a,{bg:e,text:t},r.a.createElement(E.a.Body,null,r.a.createElement(E.a.Title,null,this.props.title),r.a.createElement(y.a,{id:this.props.id,onClick:this.handleButtonClick,className:"viewStatistics indent50pRight",variant:"primary"},"View Statistics"),r.a.createElement("div",{id:"quizDetails"},this.state.noOfStudents?r.a.createElement(E.a.Text,null,r.a.createElement("b",null,"Quiz-Topics "),r.a.createElement("span",null,":   ",this.props.topics),r.a.createElement("br",null),r.a.createElement("b",null,"Date "),r.a.createElement("span",null,":   ",this.props.date),r.a.createElement("br",null),r.a.createElement("b",null,"Score "),r.a.createElement("span",null,":   ",this.props.score)):r.a.createElement(E.a.Text,null,r.a.createElement("b",null,"Quiz-Topics "),r.a.createElement("span",null,":   ",this.props.topics),r.a.createElement("br",null),r.a.createElement("b",null,"No of Students Attempted "),r.a.createElement("span",null,":   ",this.props.scores.length),r.a.createElement("br",null),r.a.createElement("b",null,"Average "),r.a.createElement("span",null,":   ",l)))))}}]),t}(n.Component)),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={username:null},a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.setState({username:d.a.load("facultyName")});var t=d.a.load("facultyName"),a=d.a.load("ipaddress");fetch("http://".concat(a,":5000/getFacultyQuizes?facultyName=").concat(t),{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState(t,(function(){for(var e=this,t=this.state.QuizInfo,n=function(n){o=t[n].quizCode,console.log(o),fetch("http://".concat(a,":5000/getQuizBasicDetails?quizCode=").concat(o),{method:"GET"}).then((function(e){return e.json()})).then((function(a){return e.setState({},(function(){t[n].course=a.course,t[n].topic=a.topic,this.setState({QuizInfo:t})}))}))},r=0;r<t.length;r++){var o;n(r)}}))}))}},{key:"render",value:function(){var e=0;return r.a.createElement("div",null,null!=this.state.username?r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement("div",{id:"dashboardPage"},r.a.createElement("h1",{className:"text-center"},r.a.createElement("i",{className:"fad fa-h1",id:"welcomeMsg"},"Welcome, ",this.state.username)),this.state.QuizInfo?this.state.QuizInfo.map((function(t){return r.a.createElement(T,{title:t.course,bg:"dark",text:"white",id:t.quizCode,flag:e++,topics:t.topic,scores:t.scores})})):null,r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{id:"createQuizButton",className:"btn btn-success btn-lg",onClick:function(){window.location.href=window.location.origin+"/createquiz"}},"Create Quiz")))):r.a.createElement("h1",{id:"luvda",className:"jumbotron text-center"},r.a.createElement("button",{onClick:function(){window.location.href=window.location.origin+"/admin"},class:"btn btn-lg btn-primary"},"Please Login ",r.a.createElement("i",{className:"far fa-heart"}))))}}]),t}(n.Component),A=(a(68),a(69),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).onUsernameChanged=function(e){a.setState({username:e.target.value})},a.onPasswordChanged=function(e){a.setState({password:e.target.value})},a.verifyUserLogin=function(e){a.state.userFound?(d.a.save("facultyName",a.state.username,{path:"/"}),e.push("/facultydashboard")):(d.a.remove("facultyName",{path:"/"}),console.log(a.state.userFound))},a.handleSignin=function(e){var t=d.a.load("ipaddress");fetch("http://".concat(t,":5000/facultylogin?username=").concat(a.state.username,"&&password=").concat(a.state.password),{method:"GET"}).then((function(e){return e.json()})).then((function(t){a.setState((function(){return t}),(function(){this.verifyUserLogin(e)}))}))},a.state={username:"",password:""},a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=Object(f.f)((function(t){var a=t.history;return r.a.createElement("button",{id:"signinButton",className:"btn-lg btn btn-success indent ",type:"submit",value:"Sign In",onClick:function(){e.handleSignin(a)}},"Sign In")}));return r.a.createElement("div",{id:"siginOuter"},r.a.createElement(E.a,{id:"signinCard"},r.a.createElement("form",{id:"inputboxes"},r.a.createElement("div",{className:"form-group row "},r.a.createElement("label",{htmlFor:"username",className:"col-form-label"},"Username"),r.a.createElement("input",{type:"username",className:"form-control",id:"username",placeholder:"Enter your Username",onChange:this.onUsernameChanged})),r.a.createElement("div",{className:"form-group row "},r.a.createElement("label",{htmlFor:"password",className:"col-form-label"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Enter your Password",onChange:this.onPasswordChanged}))),!1===this.state.userFound?r.a.createElement("p",{id:"NoUserErrorMsg"},"User doesn't exist or Wrong Password"):null,r.a.createElement("div",{id:"signInButtton"},r.a.createElement(t,null))))}}]),t}(n.Component)),Q=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={isLoggedin:!1},a.render=function(){return void 0!==d.a.load("facultyName",{path:"/"})&&(window.location.href=window.location.origin+"/facultydashboard"),r.a.createElement("div",{class:"background"},a.state.isLoggedin?null:r.a.createElement("div",null,r.a.createElement("div",{id:"quizApptitle",className:"jumbotron bcc"},r.a.createElement("h1",{className:"h0"},"Faculty Login")),r.a.createElement(A,null)))},a}return Object(u.a)(t,e),t}(n.Component),x=(a(70),a(71),a(19)),I=a(18),R=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={},a.handleAnsChange=function(e){a.props.onSelectAns(a.props.question.questionCode,e)},a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:this.props.question.questionCode,className:"question"},r.a.createElement(E.a,{style:{width:"80%"}},r.a.createElement(E.a.Header,null,this.props.question.question),r.a.createElement(x.a,{variant:"flush"},r.a.createElement(I.RadioGroup,{name:this.props.question.questionCode,selectedValue:this.state.selectedOption,onChange:this.handleAnsChange},this.props.question.options.map((function(e){return r.a.createElement(x.a.Item,null,r.a.createElement(I.Radio,{value:e[0]}),"  ",e[1])}))))))}}]),t}(n.Component),P=(a(73),a(38)),B=(a(74),(new Date).getTime()),U=0,D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={nodeValue:0,submitted:0},a.updateTime=function(){var e=600-((new Date).getTime()-B)/1e3;U=Math.max(0,Math.floor(e/60))+":"+Math.max(0,Math.floor(e%60));var t=100*e/600;a.setState({nodeValue:U,width:t}),e<0&&!a.state.submitted&&(a.setState({submitted:1}),a.props.submitQuiz())},a.state={},a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){setTimeout(setInterval(this.updateTime,1e3),5e3);return r.a.createElement("div",null,r.a.createElement("h4",{className:"timerHeader"},"Time Left : ",this.state.nodeValue,"mins"),r.a.createElement("div",{style:{width:"150px",height:"150px"}},r.a.createElement(P.a,{percent:this.state.width,strokeWidth:"6",strokeLinecap:"round",strokeColor:{"0%":"#FF8ee9","100%":"#00FF00"}})))}}]),t}(n.Component),M=(a(75),a(37)),F=a.n(M),L=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={answers:{}},a.onAnswer=function(e,t){var n=a.state.answers;n[e]=t,a.setState({answers:n})},a.submitQuiz=function(){for(var e=0,t=a.state.questions,n=a.state.answers,r={},o={},l=0;l<t.length;l++){var s=t[l],c=s.questionCode;o[c]=n[c]===s.correctAns,r[c]=s.correctAns,n[c]===s.correctAns&&(e+=1)}var i=JSON.stringify({username:d.a.load("username",{path:"/"}),QuizInfo:{quizCode:d.a.load("quizCode",{path:"/"}),correctAns:r,isCorrect:o,answers:n,marks:e,prvQuiz:!0}});console.log(i);var u=d.a.load("ipaddress");fetch("http://".concat(u,":5000/submitQuiz?quizResult=").concat(i),{method:"GET"}).then((function(e){return e.json()})),alert("Your Answers have been submitted successfully"),window.location.href=window.location.origin+"/dashboard",d.a.remove("quizCode",{path:"/"})};var n=d.a.load("quizCode",{path:"/"});if(void 0===n)setTimeout((function(){window.location.href=window.location.origin+"/dashboard",alert("You can't hack this.. Test has already been submitted")}),500);else{var r=d.a.load("ipaddress");fetch("http://".concat(r,":5000/getTestQuestions?quizCode=").concat(n),{method:"GET"}).then((function(e){return e.json()})).then((function(e){return a.setState({questions:e.questions,course:e.course,topic:e.topic},(function(){}))}))}return a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,void 0!==d.a.load("quizCode",{path:"/"})?r.a.createElement("div",{id:"pageMargin"},r.a.createElement("div",{id:"Timer"},r.a.createElement("div",{id:"header"},r.a.createElement(D,{submitQuiz:this.submitQuiz})),r.a.createElement("div",{id:"title"},r.a.createElement("h2",{className:"courseHeader"},this.state.course),r.a.createElement("h3",{className:"topicHeader"},this.state.topic),r.a.createElement("div",{id:"EndTestButton"},r.a.createElement("button",{onClick:this.submitQuiz,class:"btn btn-lg btn-danger"},"End Test")))),this.state.questions?this.state.questions.map((function(t){return r.a.createElement(R,{question:t,onSelectAns:e.onAnswer})})):null):r.a.createElement("div",null,r.a.createElement("img",{src:F.a,alt:"Italian Trulli",id:"sekalu"})))}}]),t}(n.Component),H=(a(76),a(77),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={viewResult:!1,toggleButtonText:"Show Result",toggleButtonClass:"success"},a.handleAnsChange=function(){},a.onResultToggle=function(){a.state.viewResult?a.setState({viewResult:!1,toggleButtonText:"Show result",toggleButtonClass:"success"}):a.setState({viewResult:!0,toggleButtonText:"Hide Result",toggleButtonClass:"danger"})},a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.props),r.a.createElement("div",{id:this.props.question.questionCode,className:"question"},r.a.createElement(E.a,{style:{width:"80%"}},r.a.createElement(E.a.Header,null,this.props.question.question),this.state.viewResult?r.a.createElement("div",null,r.a.createElement(x.a,{variant:"flush"},r.a.createElement(I.RadioGroup,{name:this.props.question.questionCode,selectedValue:this.state.selectedOption,onChange:this.handleAnsChange},this.props.question.options.map((function(t){return r.a.createElement(x.a.Item,null,r.a.createElement(I.Radio,{value:t[0],checked:t[0]===e.props.answer}),t[0]===e.props.question.correctAns?r.a.createElement("span",{className:"green"}," ",t[1]," "):r.a.createElement("span",null,t[0]!==e.props.question.correctAns&&t[0]===e.props.answer?r.a.createElement("span",{className:"red"}," ",t[1]," "):r.a.createElement("span",null," ",t[1]," ")))})))),this.props.question.correctAns===this.props.answer?r.a.createElement("h6",{className:"comment"},"Result: ",r.a.createElement("span",{className:"green"},"You got it right !!")):r.a.createElement("div",null,r.a.createElement("h6",{className:"comment"},"Result: ",r.a.createElement("span",{className:"red"},"You missed it !!")),r.a.createElement("p",{className:"correctTag"},'Correct answer is "',this.props.question.correctAns,'"'))):r.a.createElement("div",null,r.a.createElement(x.a,{variant:"flush"},r.a.createElement(I.RadioGroup,{name:this.props.question.questionCode,selectedValue:this.state.selectedOption,onChange:this.handleAnsChange},this.props.question.options.map((function(t){return r.a.createElement(x.a.Item,null,r.a.createElement(I.Radio,{value:t[0],checked:t[0]===e.props.answer}),r.a.createElement("span",null," ",t[1]," "))})))))),r.a.createElement("button",{id:"toggleResult",onClick:this.onResultToggle,className:"btn btn-"+this.state.toggleButtonClass},this.state.toggleButtonText))}}]),t}(n.Component)),W=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={};var n=d.a.load("quizCode",{path:"/"}),r=d.a.load("ipaddress");fetch("http://".concat(r,":5000/getTestQuestions?quizCode=").concat(n),{method:"GET"}).then((function(e){return e.json()})).then((function(e){return a.setState({questions:e.questions,course:e.course,topic:e.topic},(function(){}))}));var o=d.a.load("username",{path:"/"});return r=d.a.load("ipaddress"),fetch("http://".concat(r,":5000/getUser?username=").concat(o),{method:"GET"}).then((function(e){return e.json()})).then((function(e){return a.setState({},(function(){console.log(e.QuizInfo);for(var t=0;t<e.QuizInfo.length;t++)console.log(e.QuizInfo[t].quizCode),e.QuizInfo[t].quizCode===n&&this.setState({quizData:e.QuizInfo[t]})}))})),a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement("h1",{className:"courseHeader text-center"},this.state.course),r.a.createElement("h3",{className:"topicHeader text-center"},this.state.topic),r.a.createElement("div",{className:"page"},this.state.questions&&this.state.quizData?this.state.questions.map((function(t){return r.a.createElement(H,{question:t,answer:e.state.quizData.answers[t.questionCode]})})):null))}}]),t}(n.Component),G=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(n.Component),K=(a(78),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={username:null,courseTitle:"",courseCode:"",quizTopic:"",random_int:0,due:"",noOfquestions:2,questions:[{question:"",options:[["A",""],["B",""]],correctAns:"",noOfoptions:2}]},a.handleCourseTitleChange=function(e){a.setState({courseTitle:e.target.value})},a.handleCourseCodeChange=function(e){a.setState({courseCode:e.target.value})},a.handleQuizTopicChange=function(e){a.setState({quizTopic:e.target.value})},a.handleDurationChange=function(e){a.setState({duration:e.target.value})},a.handleQuestionUpdate=function(e,t){a.state.questions[e].question=t.target.value},a.handleAnswerUpdate=function(e,t){a.state.questions[e].correctAns=t.target.value},a.handleOptionsChange=function(e,t,n){a.state.questions[e].options[t.charCodeAt(0)-"A".charCodeAt(0)][1]=n.target.value},a.handleAddOption=function(e){var t=a.state.questions;t[e].options.push([String.fromCharCode(t[e].noOfoptions+65),""]),t[e].noOfoptions+=1,a.setState({questions:a.state.questions})},a.dateTimeChange=function(e){a.setState({due:e.target.value})},a.submitQuiz=function(){for(var e=new Date,t=a.state.username.toLowerCase(),n=a.state.questions,r=a.state.courseCode+"_"+e.getTime(),o=0;o<n.length;o++)n[o].questionCode=r+"_Q"+o;var l={facultyName:t,quizCode:r,course:a.state.courseTitle,topic:a.state.quizTopic,due:a.state.due,date:a.state.due,duration:a.state.duration,questions:a.state.questions};console.log(l);var s=d.a.load("ipaddress");fetch("http://".concat(s,":5000/submitNewQuiz"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then((function(e){console.log(e),window.location.href=window.location.origin+"/facultydashboard"}))},a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){this.setState({username:d.a.load("facultyName")})}},{key:"render",value:function(){var e=this,t=0;return r.a.createElement("div",{id:"createQuizPage"},null!=this.state.username?r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement("div",{className:"quizHeader"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-sm-6"},r.a.createElement(x.a.Item,null,r.a.createElement("input",{className:"form-control",placeholder:"Enter Course Title",onChange:this.handleCourseTitleChange}))),r.a.createElement("div",{class:"col-sm-6"},r.a.createElement(x.a.Item,null,r.a.createElement("input",{className:"form-control",placeholder:"Enter Course Code ex:CSExxx ",onChange:this.handleCourseCodeChange})))),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-sm-1"}),r.a.createElement("div",{class:"col-sm-3"},r.a.createElement(x.a.Item,null,r.a.createElement("input",{className:"form-control ",placeholder:"Enter Quiz duration (mins)",onChange:this.handleDurationChange}))),r.a.createElement("div",{className:"col-sm-3"},r.a.createElement(x.a.Item,null,r.a.createElement("input",{className:"form-control ",placeholder:"Enter Due Date-time",onChange:this.dateTimeChange}))),r.a.createElement("div",{class:"col-sm-3"},r.a.createElement(x.a.Item,null,r.a.createElement("input",{className:"form-control",placeholder:"Enter Quiz Topic",onChange:this.handleQuizTopicChange})))))),r.a.createElement("button",{onClick:function(){console.log(e.state),console.log()}},"Print State"),this.state.questions.map((function(a){return r.a.createElement("div",{id:"newQuestion"},r.a.createElement(E.a,{id:t,className:"bg-dark"},r.a.createElement(E.a.Header,null,r.a.createElement("input",{className:"form-control",placeholder:"Enter Question Name",onChange:e.handleQuestionUpdate.bind(e,t)})),r.a.createElement(x.a,null,a.options.map((function(a){return r.a.createElement(x.a.Item,null,r.a.createElement("input",{className:"form-control",placeholder:"Enter option "+a[0],onChange:e.handleOptionsChange.bind(e,t,a[0])}))}))),r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-sm-2"},r.a.createElement("button",{className:"btn btn-success btn-md",id:"addOption",onClick:e.handleAddOption.bind(e,t)},"Add Option")),r.a.createElement("div",{class:"col-sm-6"},r.a.createElement("input",{className:"form-control correctOption",placeholder:"Enter Correct Option eg: A,B,C..",onChange:e.handleAnswerUpdate.bind(e,t++)}))))))})),r.a.createElement("button",{className:"btn btn-success btn-lg",id:"addQuestion",onClick:function(){e.state.questions.push({question:"",options:[["A",""],["B",""]],correctAns:"",noOfoptions:2}),e.setState({noOfquestions:e.state.noOfquestions+1,questions:e.state.questions})}},"Add Question"),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{id:"submitButton",className:"btn btn-dark btn-lg ",onClick:this.submitQuiz},"Submit Quiz"))):null)}}]),t}(n.Component)),V=a(16),J=function(){return r.a.createElement("div",{id:"420",className:"jumbotron text-center"},r.a.createElement("h1",null,"Page Not Found"),r.a.createElement("h2",null,"Error 404 (+ 16 specially for you with ",r.a.createElement("i",{className:"far fa-heart"}),")"))},Y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).render=function(){return r.a.createElement(V.b,null,r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/",component:b,exact:!0}),r.a.createElement(f.a,{path:"/dashboard",component:z}),r.a.createElement(f.a,{path:"/viewResult",component:W}),r.a.createElement(f.a,{path:"/testArena",component:L}),r.a.createElement(f.a,{path:"/admin",component:Q}),r.a.createElement(f.a,{path:"/facultydashboard",component:k}),r.a.createElement(f.a,{path:"/createquiz",component:K}),r.a.createElement(f.a,{path:"/viewStatistics",Component:G}),r.a.createElement(f.a,{component:J})))},a}return Object(u.a)(t,e),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(79);l.a.render(r.a.createElement(V.a,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.ac32f076.chunk.js.map