(this.webpackJsonpquizapp=this.webpackJsonpquizapp||[]).push([[0],{37:function(e,t,a){e.exports=a.p+"static/media/sekalu.d546ecc2.jpg"},40:function(e,t,a){e.exports=a(80)},45:function(e,t,a){},46:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(30),s=a.n(r),l=(a(45),a(3)),i=a(6),c=a(4),u=a(5),m=(a(46),a(2)),d=a.n(m),h=a(7),p=(a(49),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"quizApptitle",className:"jumbotron bcc"},o.a.createElement("h1",{className:"h0"},"Quiz App"))}}]),t}(n.Component)),f=(a(50),a(17)),E=a(21),g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).onUsernameChanged=function(e){a.setState({username:e.target.value})},a.onPasswordChanged=function(e){a.setState({password:e.target.value})},a.verifyUserLogin=function(e){a.state.userFound?(d.a.save("username",a.state.username,{path:"/sequizapp"}),e.push("/sequizapp/#/dashboard")):(d.a.remove("username",{path:"/sequizapp"}),console.log(a.state.userFound))},a.handleSignin=function(e){var t=d.a.load("ipaddress");fetch("".concat(t,"/login?username=").concat(a.state.username,"&&password=").concat(a.state.password),{method:"GET"}).then((function(e){return e.json()})).then((function(t){a.setState((function(){return t}),(function(){this.verifyUserLogin(e)}))}))},a.state={username:"",password:""},a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=Object(f.f)((function(t){var a=t.history;return o.a.createElement("button",{id:"signinButton",className:"btn-lg btn btn-success indent ",type:"submit",value:"Sign In",onClick:function(){e.handleSignin(a)}},"Sign In")}));return o.a.createElement("div",{id:"siginOuter"},o.a.createElement(E.a,{id:"signinCard"},o.a.createElement("form",{id:"inputboxes"},o.a.createElement("div",{className:"form-group row "},o.a.createElement("label",{htmlFor:"username",className:"col-form-label"},"Username"),o.a.createElement("input",{type:"username",className:"form-control",id:"username",placeholder:"Enter your Username",onChange:this.onUsernameChanged})),o.a.createElement("div",{className:"form-group row "},o.a.createElement("label",{htmlFor:"password",className:"col-form-label"},"Password"),o.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Enter your Password",onChange:this.onPasswordChanged}))),!1===this.state.userFound?o.a.createElement("p",{id:"NoUserErrorMsg"},"User doesn't exist or Wrong Password"):null,o.a.createElement("div",{id:"signInButtton"},o.a.createElement(t,null))))}}]),t}(n.Component),v=(a(56),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={username:"",wrongUsernameFormat:!1,password:"",email:"",mobile:"",rollNo:""},a.handleUsernameChange=function(e){a.setState({username:e.target.value})},a.handlePasswordChange=function(e){a.setState({password:e.target.value})},a.handleRollNoChange=function(e){a.setState({rollNo:e.target.value})},a.handleEmailChange=function(e){a.setState({email:e.target.value})},a.handleMobileChange=function(e){a.setState({mobile:e.target.value})},a.checkRegex=function(){return""!==a.state.username||(a.setState({wrongUsernameFormat:1}),!1)},a.goToHomePage=function(){window.location.href=window.location.origin+"/sequizapp/#/"},a.handleRegister=function(){if(console.log(a.state),0===a.state.username.length||0===a.state.email.length||0===a.state.rollNo.length||0===a.state.password.length||0===a.state.mobile.length)return alert("fields cannot be empty. please fill correctly"),void console.log("entered incorrect");var e=d.a.load("ipaddress");fetch("".concat(e,"/register?username=").concat(a.state.username,"&&password=").concat(a.state.password,"&&email=").concat(a.state.email,"&&rollNo=").concat(a.state.rollNo,"&&mobile=").concat(a.state.mobile),{method:"GET"}).then((function(e){return e.json()})).then((function(e){return a.setState((function(){return e}),(function(){console.log(this.state),this.state.isRegisterSuccess?(window.location.href=window.location.origin+"/sequizapp/#/",alert("Successfully Registered\nLogin to use the App")):alert("User already exits\nTry a different Username")}))}))},a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){this.setState({isRegisterSuccess:!1}),console.log(this.state)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"registerPage"},o.a.createElement("form",null,o.a.createElement("div",{className:"form-group row"},o.a.createElement("label",{for:"username",className:"col-sm-2 col-form-label"},"Username:"),o.a.createElement("div",{className:"col-sm-6"},o.a.createElement("input",{type:"username",className:"form-control",id:"username",placeholder:"Enter your Username",onChange:this.handleUsernameChange}))),this.state.wrongUsernameFormat?o.a.createElement("p",{className:"indentErrorMsg"},"Wrong Username Format"):null,o.a.createElement("div",{className:"form-group row"},o.a.createElement("label",{for:"email",className:"col-sm-2 col-form-label"},"Email: "),o.a.createElement("div",{className:"col-sm-6"},o.a.createElement("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter your Email",onChange:this.handleEmailChange}))),o.a.createElement("div",{className:"form-group row"},o.a.createElement("label",{for:"rollNo",className:"col-sm-2 col-form-label"},"Roll No:"),o.a.createElement("div",{className:"col-sm-6"},o.a.createElement("input",{type:"text",className:"form-control",id:"rollNo",placeholder:"Enter your Roll No",onChange:this.handleRollNoChange}))),o.a.createElement("div",{className:"form-group row"},o.a.createElement("label",{for:"phoneNo",className:"col-sm-2 col-form-label"},"Phone:"),o.a.createElement("div",{className:"col-sm-6"},o.a.createElement("input",{type:"number",className:"form-control",id:"phoneNo",placeholder:"Enter your Mobile Number",onChange:this.handleMobileChange}))),o.a.createElement("div",{className:"form-group row"},o.a.createElement("label",{for:"password",className:"col-sm-2 col-form-label"},"Password:"),o.a.createElement("div",{className:"col-sm-6"},o.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Enter your Password",onChange:this.handlePasswordChange})))),o.a.createElement("div",{className:"text-center centrify"},o.a.createElement((function(){return o.a.createElement("button",{className:"btn-md btn btn-success",id:"registerButton",value:"Register",onClick:function(t){e.checkRegex()?e.handleRegister():console.log("Hello ",e.state)}},"Register")}),null)),o.a.createElement("div",{className:"text-center registerButton"},o.a.createElement("p",null,"Already have an account ?"),o.a.createElement("button",{id:"loginBackButton",className:"btn-md btn btn-dark",onClick:this.goToHomePage},"Log In")))}}]),t}(n.Component)),b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={isLoggedin:!1,ifSignupPage:!1},a.onRegisterhandler=function(){a.setState({ifSignupPage:!0})},a.render=function(){return d.a.save("ipaddress","https://lit-headland-82372.herokuapp.com/",{path:"/sequizapp"}),void 0!==d.a.load("username",{path:"/sequizapp"})&&(window.location.href=window.location.origin+"/sequizapp/#/dashboard"),o.a.createElement("div",{class:"background"},a.state.isLoggedin?null:o.a.createElement("div",null,o.a.createElement(p,null),o.a.createElement("div",null,a.state.ifSignupPage?o.a.createElement(v,null):o.a.createElement("div",null,o.a.createElement(g,null),o.a.createElement("div",{id:"signupDiv"},o.a.createElement("p",null,"Don't have Account ?  ",o.a.createElement("br",null)),o.a.createElement("button",{id:"toSignupPageButton",onClick:a.onRegisterhandler,className:"btn-lg btn btn-dark"},"Sign Up for Quiz App"))))))},a}return Object(u.a)(t,e),t}(n.Component),w=(a(57),a(24),a(58),a(8)),C=a.n(w),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={username:null},a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){this.setState({username:d.a.load("username")})}},{key:"render",value:function(){var e=Object(f.f)((function(e){var t=e.history;return o.a.createElement("div",null,o.a.createElement(C.a,{id:"sidenav",onSelect:function(e){}},o.a.createElement(C.a.Toggle,{id:"navToggleButton"}),o.a.createElement(C.a.Nav,null,o.a.createElement(w.NavItem,{id:"navToDashboard",eventKey:"home",onClick:function(){t.push("/sequizapp/#/dashboard")}},o.a.createElement(w.NavIcon,null,o.a.createElement("i",{className:"fa fa-fw fa-home",style:{fontSize:"1.75em"}})),o.a.createElement(w.NavText,null,"Home")),o.a.createElement(w.NavItem,{id:"navToSettings",eventKey:""},o.a.createElement(w.NavIcon,null,o.a.createElement("i",{className:"fa fa-fw fa-cogs","aria-hidden":"true"})),o.a.createElement(w.NavText,null,"Settings"),o.a.createElement(w.NavItem,{eventKey:"charts/linechart"},o.a.createElement(w.NavText,null,"Profile Settings")),o.a.createElement(w.NavItem,{eventKey:"charts/barchart"},o.a.createElement(w.NavText,null,"Change Password"))),o.a.createElement(w.NavItem,{id:"navToComments"},o.a.createElement(w.NavIcon,null,o.a.createElement("i",{className:"fa fa-comments","aria-hidden":"true"})),o.a.createElement(w.NavText,null,"Comments")),o.a.createElement(w.NavItem,{id:"navToLogout",onClick:function(){d.a.remove("username",{path:"/sequizapp"}),t.push("/sequizapp")}},o.a.createElement(w.NavIcon,null,o.a.createElement("i",{className:"fa fa-window-close","aria-hidden":"true"})),o.a.createElement(w.NavText,null,"Logout")))))}));return o.a.createElement("div",null,o.a.createElement(e,null))}}]),t}(n.Component),O=(a(62),a(63),a(81)),y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).handleButtonClick=function(){!0===a.props.prvQuiz?(d.a.save("quizCode",a.props.id,{path:"/sequizapp"}),window.location.href=window.location.origin+"/sequizapp/#/viewResult"):(d.a.save("quizCode",a.props.id,{path:"/sequizapp"}),window.location.href=window.location.origin+"/sequizapp/#/testArena")},a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e,t;return 1===this.props.flag?e="warning":(e="dark",t="white"),o.a.createElement(E.a,{bg:e,text:t},o.a.createElement(E.a.Body,null,o.a.createElement(E.a.Title,null,this.props.title),o.a.createElement(O.a,{id:this.props.id,onClick:this.handleButtonClick,className:"taketest indent50pRight",variant:"primary"},!1===this.props.prvQuiz?"Take Test":"View Result"),o.a.createElement("div",{id:"quizDetails"},this.props.prvQuiz?o.a.createElement(E.a.Text,null,o.a.createElement("b",null,"Quiz-Topics "),o.a.createElement("span",null,":   ",this.props.topics),o.a.createElement("br",null),o.a.createElement("b",null,"Date "),o.a.createElement("span",null,":   ",this.props.date),o.a.createElement("br",null),o.a.createElement("b",null,"Score "),o.a.createElement("span",null,":   ",this.props.score)):o.a.createElement(E.a.Text,null,o.a.createElement("b",null,"Quiz-Topics "),o.a.createElement("span",null,":   ",this.props.topics),o.a.createElement("br",null),o.a.createElement("b",null,"Due-DateTime "),o.a.createElement("span",null,":   ",this.props.due)))))}}]),t}(n.Component),q=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={};var n=d.a.load("username"),o=d.a.load("ipaddress");return fetch("".concat(o,"/getQuizes?prvQuiz=",!1,"&username=").concat(n),{method:"GET"}).then((function(e){return e.json()})).then((function(e){return a.setState({quizes:e})})),a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"avaiableQuizesPage"},o.a.createElement(E.a,null,o.a.createElement(E.a.Header,null,"Available Quizes")),null==this.state.quizes?o.a.createElement("h1",null,"Component loading wait"):this.state.quizes.map((function(e){return o.a.createElement(y,{title:e.course,bg:"dark",text:"white",id:e.quizCode,prvQuiz:!1,flag:e.flag,topics:e.topic,due:e.due})})))}}]),t}(n.Component),j=(a(64),function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={};var n=d.a.load("username"),o=d.a.load("ipaddress");return fetch("".concat(o,"/getQuizes?prvQuiz=",!0,"&username=").concat(n),{method:"GET"}).then((function(e){return e.json()})).then((function(e){return a.setState({quizes:e})})),a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"previousQuizesPage"},o.a.createElement(E.a,null,o.a.createElement(E.a.Header,null,"Previous Quizes")),null==this.state.quizes?o.a.createElement("h1",null,"Component loading wait"):this.state.quizes.map((function(e){return o.a.createElement(y,{title:e.course,id:e.quizCode,bg:"warning",prvQuiz:!0,flag:e.flag,topics:e.topic,date:e.date,score:e.marks})})))}}]),t}(n.Component)),z=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={username:null},a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){this.setState({username:d.a.load("username")})}},{key:"render",value:function(){return o.a.createElement("div",null,null!=this.state.username?o.a.createElement("div",null,o.a.createElement("div",{id:"dashboardPage"},o.a.createElement("h1",{className:"text-center",id:"welcomeMsg"},"Welcome, ",this.state.username),o.a.createElement(q,null),o.a.createElement("br",null),o.a.createElement(j,null),o.a.createElement(N,null))):o.a.createElement("h1",{id:"luvda",className:"jumbotron text-center"},o.a.createElement("button",{onClick:function(){window.location.href=window.location.origin+"/sequizapp/#/"},class:"btn btn-lg btn-primary"},"Please Login ",o.a.createElement("i",{className:"far fa-heart"}))))}}]),t}(n.Component),S=(a(65),a(66),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={username:null},a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){this.setState({username:d.a.load("facultyName")})}},{key:"render",value:function(){var e=Object(f.f)((function(e){var t=e.history;return o.a.createElement("div",null,o.a.createElement(C.a,{id:"sidenav",onSelect:function(e){}},o.a.createElement(C.a.Toggle,{id:"navToggleButton"}),o.a.createElement(C.a.Nav,null,o.a.createElement(w.NavItem,{id:"navToDashboard",eventKey:"home",onClick:function(){t.push("/sequizapp/#/facultydashboard")}},o.a.createElement(w.NavIcon,null,o.a.createElement("i",{className:"fa fa-fw fa-home",style:{fontSize:"1.75em"}})),o.a.createElement(w.NavText,null,"Home")),o.a.createElement(w.NavItem,{id:"navToSettings",eventKey:""},o.a.createElement(w.NavIcon,null,o.a.createElement("i",{className:"fa fa-fw fa-cogs","aria-hidden":"true"})),o.a.createElement(w.NavText,null,"Settings"),o.a.createElement(w.NavItem,{eventKey:"charts/linechart"},o.a.createElement(w.NavText,null,"Profile Settings")),o.a.createElement(w.NavItem,{eventKey:"charts/barchart"},o.a.createElement(w.NavText,null,"Change Password"))),o.a.createElement(w.NavItem,{id:"navToLogout",onClick:function(){d.a.remove("facultyName",{path:"/sequizapp"}),t.push("/sequizapp/#/admin")}},o.a.createElement(w.NavIcon,null,o.a.createElement("i",{className:"fa fa-window-close","aria-hidden":"true"})),o.a.createElement(w.NavText,null,"Logout")))))}));return o.a.createElement("div",null,o.a.createElement(e,null))}}]),t}(n.Component)),T=(a(67),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).handleButtonClick=function(){},a.state={noOfStudents:0,avg:0},a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){for(var e=this.props.scores,t=0,a=0;a<e.length;a++)t+=e[a].score;this.setState({noOfStudents:this.props.scores.length,avg:t/e.length}),console.log(this.props.scores.length)}},{key:"render",value:function(){var e,t;this.props.flag%2?(e="danger",t="white"):e="warning";for(var a=0,n=this.props.scores,r=0;r<n.length;r++)a+=n[r].score;var s=a/n.length;return o.a.createElement(E.a,{bg:e,text:t},o.a.createElement(E.a.Body,null,o.a.createElement(E.a.Title,null,this.props.title),o.a.createElement(O.a,{id:this.props.id,onClick:this.handleButtonClick,className:"viewStatistics indent50pRight",variant:"primary"},"View Statistics"),o.a.createElement("div",{id:"quizDetails"},this.state.noOfStudents?o.a.createElement(E.a.Text,null,o.a.createElement("b",null,"Quiz-Topics "),o.a.createElement("span",null,":   ",this.props.topics),o.a.createElement("br",null),o.a.createElement("b",null,"Date "),o.a.createElement("span",null,":   ",this.props.date),o.a.createElement("br",null),o.a.createElement("b",null,"Score "),o.a.createElement("span",null,":   ",this.props.score)):o.a.createElement(E.a.Text,null,o.a.createElement("b",null,"Quiz-Topics "),o.a.createElement("span",null,":   ",this.props.topics),o.a.createElement("br",null),o.a.createElement("b",null,"No of Students Attempted "),o.a.createElement("span",null,":   ",this.props.scores.length),o.a.createElement("br",null),o.a.createElement("b",null,"Average "),o.a.createElement("span",null,":   ",s)))))}}]),t}(n.Component)),k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={username:null},a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.setState({username:d.a.load("facultyName")});var t=d.a.load("facultyName"),a=d.a.load("ipaddress");fetch("".concat(a,"/getFacultyQuizes?facultyName=").concat(t),{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState(t,(function(){for(var e=this,t=this.state.QuizInfo,n=function(n){r=t[n].quizCode,console.log(r),fetch("".concat(a,"/getQuizBasicDetails?quizCode=").concat(r),{method:"GET"}).then((function(e){return e.json()})).then((function(a){return e.setState({},(function(){t[n].course=a.course,t[n].topic=a.topic,this.setState({QuizInfo:t})}))}))},o=0;o<t.length;o++){var r;n(o)}}))}))}},{key:"render",value:function(){var e=0;return o.a.createElement("div",null,null!=this.state.username?o.a.createElement("div",null,o.a.createElement(S,null),o.a.createElement("div",{id:"dashboardPage"},o.a.createElement("h1",{className:"text-center"},o.a.createElement("i",{className:"fad fa-h1",id:"welcomeMsg"},"Welcome, ",this.state.username)),this.state.QuizInfo?this.state.QuizInfo.map((function(t){return o.a.createElement(T,{title:t.course,bg:"dark",text:"white",id:t.quizCode,flag:e++,topics:t.topic,scores:t.scores})})):null,o.a.createElement("div",{className:"text-center"},o.a.createElement("button",{id:"createQuizButton",className:"btn btn-success btn-lg",onClick:function(){window.location.href=window.location.origin+"/sequizapp/#/createquiz"}},"Create Quiz")))):o.a.createElement("h1",{id:"luvda",className:"jumbotron text-center"},o.a.createElement("button",{onClick:function(){window.location.href=window.location.origin+"/sequizapp/#/admin"},class:"btn btn-lg btn-primary"},"Please Login ",o.a.createElement("i",{className:"far fa-heart"}))))}}]),t}(n.Component),Q=(a(68),a(69),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).onUsernameChanged=function(e){a.setState({username:e.target.value})},a.onPasswordChanged=function(e){a.setState({password:e.target.value})},a.verifyUserLogin=function(e){a.state.userFound?(d.a.save("facultyName",a.state.username,{path:"/sequizapp"}),e.push("/sequizapp/#/facultydashboard")):(d.a.remove("facultyName",{path:"/sequizapp"}),console.log(a.state.userFound))},a.handleSignin=function(e){var t=d.a.load("ipaddress");fetch("".concat(t,"/facultylogin?username=").concat(a.state.username,"&&password=").concat(a.state.password),{method:"GET"}).then((function(e){return e.json()})).then((function(t){a.setState((function(){return t}),(function(){this.verifyUserLogin(e)}))}))},a.state={username:"",password:""},a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=Object(f.f)((function(t){var a=t.history;return o.a.createElement("button",{id:"signinButton",className:"btn-lg btn btn-success indent ",type:"submit",value:"Sign In",onClick:function(){e.handleSignin(a)}},"Sign In")}));return o.a.createElement("div",{id:"siginOuter"},o.a.createElement(E.a,{id:"signinCard"},o.a.createElement("form",{id:"inputboxes"},o.a.createElement("div",{className:"form-group row "},o.a.createElement("label",{htmlFor:"username",className:"col-form-label"},"Username"),o.a.createElement("input",{type:"username",className:"form-control",id:"username",placeholder:"Enter your Username",onChange:this.onUsernameChanged})),o.a.createElement("div",{className:"form-group row "},o.a.createElement("label",{htmlFor:"password",className:"col-form-label"},"Password"),o.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Enter your Password",onChange:this.onPasswordChanged}))),!1===this.state.userFound?o.a.createElement("p",{id:"NoUserErrorMsg"},"User doesn't exist or Wrong Password"):null,o.a.createElement("div",{id:"signInButtton"},o.a.createElement(t,null))))}}]),t}(n.Component)),A=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={isLoggedin:!1},a.render=function(){return void 0!==d.a.load("facultyName",{path:"/sequizapp"})&&(window.location.href=window.location.origin+"/sequizapp/#/facultydashboard"),o.a.createElement("div",{class:"background"},a.state.isLoggedin?null:o.a.createElement("div",null,o.a.createElement("div",{id:"quizApptitle",className:"jumbotron bcc"},o.a.createElement("h1",{className:"h0"},"Faculty Login")),o.a.createElement(Q,null)))},a}return Object(u.a)(t,e),t}(n.Component),x=(a(70),a(71),a(19)),I=a(18),R=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={},a.handleAnsChange=function(e){a.props.onSelectAns(a.props.question.questionCode,e)},a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:this.props.question.questionCode,className:"question"},o.a.createElement(E.a,{style:{width:"80%"}},o.a.createElement(E.a.Header,null,this.props.question.question),o.a.createElement(x.a,{variant:"flush"},o.a.createElement(I.RadioGroup,{name:this.props.question.questionCode,selectedValue:this.state.selectedOption,onChange:this.handleAnsChange},this.props.question.options.map((function(e){return o.a.createElement(x.a.Item,null,o.a.createElement(I.Radio,{value:e[0]}),"  ",e[1])}))))))}}]),t}(n.Component),P=(a(73),a(38)),B=(a(74),(new Date).getTime()),U=0,D=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={nodeValue:0,submitted:0},a.updateTime=function(){var e=600-((new Date).getTime()-B)/1e3;U=Math.max(0,Math.floor(e/60))+":"+Math.max(0,Math.floor(e%60));var t=100*e/600;a.setState({nodeValue:U,width:t}),e<0&&!a.state.submitted&&(a.setState({submitted:1}),a.props.submitQuiz())},a.state={},a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){setTimeout(setInterval(this.updateTime,1e3),5e3);return o.a.createElement("div",null,o.a.createElement("h4",{className:"timerHeader"},"Time Left : ",this.state.nodeValue,"mins"),o.a.createElement("div",{style:{width:"150px",height:"150px"}},o.a.createElement(P.a,{percent:this.state.width,strokeWidth:"6",strokeLinecap:"round",strokeColor:{"0%":"#FF8ee9","100%":"#00FF00"}})))}}]),t}(n.Component),M=(a(75),a(37)),F=a.n(M),L=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={answers:{}},a.onAnswer=function(e,t){var n=a.state.answers;n[e]=t,a.setState({answers:n})},a.submitQuiz=function(){for(var e=0,t=a.state.questions,n=a.state.answers,o={},r={},s=0;s<t.length;s++){var l=t[s],i=l.questionCode;r[i]=n[i]===l.correctAns,o[i]=l.correctAns,n[i]===l.correctAns&&(e+=1)}var c=JSON.stringify({username:d.a.load("username",{path:"/sequizapp"}),QuizInfo:{quizCode:d.a.load("quizCode",{path:"/sequizapp"}),correctAns:o,isCorrect:r,answers:n,marks:e,prvQuiz:!0}});console.log(c);var u=d.a.load("ipaddress");fetch("".concat(u,"/submitQuiz?quizResult=").concat(c),{method:"GET"}).then((function(e){return e.json()})),alert("Your Answers have been submitted successfully"),window.location.href=window.location.origin+"/sequizapp/#/dashboard",d.a.remove("quizCode",{path:"/sequizapp"})};var n=d.a.load("quizCode",{path:"/sequizapp"});if(void 0===n)setTimeout((function(){window.location.href=window.location.origin+"/sequizapp/#/dashboard",alert("You can't hack this.. Test has already been submitted")}),500);else{var o=d.a.load("ipaddress");fetch("".concat(o,"/getTestQuestions?quizCode=").concat(n),{method:"GET"}).then((function(e){return e.json()})).then((function(e){return a.setState({questions:e.questions,course:e.course,topic:e.topic},(function(){}))}))}return a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,void 0!==d.a.load("quizCode",{path:"/sequizapp"})?o.a.createElement("div",{id:"pageMargin"},o.a.createElement("div",{id:"Timer"},o.a.createElement("div",{id:"header"},o.a.createElement(D,{submitQuiz:this.submitQuiz})),o.a.createElement("div",{id:"title"},o.a.createElement("h2",{className:"courseHeader"},this.state.course),o.a.createElement("h3",{className:"topicHeader"},this.state.topic),o.a.createElement("div",{id:"EndTestButton"},o.a.createElement("button",{onClick:this.submitQuiz,class:"btn btn-lg btn-danger"},"End Test")))),this.state.questions?this.state.questions.map((function(t){return o.a.createElement(R,{question:t,onSelectAns:e.onAnswer})})):null):o.a.createElement("div",null,o.a.createElement("img",{src:F.a,alt:"Italian Trulli",id:"sekalu"})))}}]),t}(n.Component),H=(a(76),a(77),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={viewResult:!1,toggleButtonText:"Show Result",toggleButtonClass:"success"},a.handleAnsChange=function(){},a.onResultToggle=function(){a.state.viewResult?a.setState({viewResult:!1,toggleButtonText:"Show result",toggleButtonClass:"success"}):a.setState({viewResult:!0,toggleButtonText:"Hide Result",toggleButtonClass:"danger"})},a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.props),o.a.createElement("div",{id:this.props.question.questionCode,className:"question"},o.a.createElement(E.a,{style:{width:"80%"}},o.a.createElement(E.a.Header,null,this.props.question.question),this.state.viewResult?o.a.createElement("div",null,o.a.createElement(x.a,{variant:"flush"},o.a.createElement(I.RadioGroup,{name:this.props.question.questionCode,selectedValue:this.state.selectedOption,onChange:this.handleAnsChange},this.props.question.options.map((function(t){return o.a.createElement(x.a.Item,null,o.a.createElement(I.Radio,{value:t[0],checked:t[0]===e.props.answer}),t[0]===e.props.question.correctAns?o.a.createElement("span",{className:"green"}," ",t[1]," "):o.a.createElement("span",null,t[0]!==e.props.question.correctAns&&t[0]===e.props.answer?o.a.createElement("span",{className:"red"}," ",t[1]," "):o.a.createElement("span",null," ",t[1]," ")))})))),this.props.question.correctAns===this.props.answer?o.a.createElement("h6",{className:"comment"},"Result: ",o.a.createElement("span",{className:"green"},"You got it right !!")):o.a.createElement("div",null,o.a.createElement("h6",{className:"comment"},"Result: ",o.a.createElement("span",{className:"red"},"You missed it !!")),o.a.createElement("p",{className:"correctTag"},'Correct answer is "',this.props.question.correctAns,'"'))):o.a.createElement("div",null,o.a.createElement(x.a,{variant:"flush"},o.a.createElement(I.RadioGroup,{name:this.props.question.questionCode,selectedValue:this.state.selectedOption,onChange:this.handleAnsChange},this.props.question.options.map((function(t){return o.a.createElement(x.a.Item,null,o.a.createElement(I.Radio,{value:t[0],checked:t[0]===e.props.answer}),o.a.createElement("span",null," ",t[1]," "))})))))),o.a.createElement("button",{id:"toggleResult",onClick:this.onResultToggle,className:"btn btn-"+this.state.toggleButtonClass},this.state.toggleButtonText))}}]),t}(n.Component)),W=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={};var n=d.a.load("quizCode",{path:"/sequizapp"}),o=d.a.load("ipaddress");fetch("".concat(o,"/getTestQuestions?quizCode=").concat(n),{method:"GET"}).then((function(e){return e.json()})).then((function(e){return a.setState({questions:e.questions,course:e.course,topic:e.topic},(function(){}))}));var r=d.a.load("username",{path:"/sequizapp"});return o=d.a.load("ipaddress"),fetch("".concat(o,"/getUser?username=").concat(r),{method:"GET"}).then((function(e){return e.json()})).then((function(e){return a.setState({},(function(){console.log(e.QuizInfo);for(var t=0;t<e.QuizInfo.length;t++)console.log(e.QuizInfo[t].quizCode),e.QuizInfo[t].quizCode===n&&this.setState({quizData:e.QuizInfo[t]})}))})),a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(N,null),o.a.createElement("h1",{className:"courseHeader text-center"},this.state.course),o.a.createElement("h3",{className:"topicHeader text-center"},this.state.topic),o.a.createElement("div",{className:"page"},this.state.questions&&this.state.quizData?this.state.questions.map((function(t){return o.a.createElement(H,{question:t,answer:e.state.quizData.answers[t.questionCode]})})):null))}}]),t}(n.Component),G=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null)}}]),t}(n.Component),K=(a(78),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={username:null,courseTitle:"",courseCode:"",quizTopic:"",random_int:0,due:"",noOfquestions:2,questions:[{question:"",options:[["A",""],["B",""]],correctAns:"",noOfoptions:2}]},a.handleCourseTitleChange=function(e){a.setState({courseTitle:e.target.value})},a.handleCourseCodeChange=function(e){a.setState({courseCode:e.target.value})},a.handleQuizTopicChange=function(e){a.setState({quizTopic:e.target.value})},a.handleDurationChange=function(e){a.setState({duration:e.target.value})},a.handleQuestionUpdate=function(e,t){a.state.questions[e].question=t.target.value},a.handleAnswerUpdate=function(e,t){a.state.questions[e].correctAns=t.target.value},a.handleOptionsChange=function(e,t,n){a.state.questions[e].options[t.charCodeAt(0)-"A".charCodeAt(0)][1]=n.target.value},a.handleAddOption=function(e){var t=a.state.questions;t[e].options.push([String.fromCharCode(t[e].noOfoptions+65),""]),t[e].noOfoptions+=1,a.setState({questions:a.state.questions})},a.dateTimeChange=function(e){a.setState({due:e.target.value})},a.submitQuiz=function(){for(var e=new Date,t=a.state.username.toLowerCase(),n=a.state.questions,o=a.state.courseCode+"_"+e.getTime(),r=0;r<n.length;r++)n[r].questionCode=o+"_Q"+r;var s={facultyName:t,quizCode:o,course:a.state.courseTitle,topic:a.state.quizTopic,due:a.state.due,date:a.state.due,duration:a.state.duration,questions:a.state.questions};console.log(s);var l=d.a.load("ipaddress");fetch("http://".concat(l,":5000/submitNewQuiz"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then((function(e){console.log(e),window.location.href=window.location.origin+"/sequizapp/#/facultydashboard"}))},a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){this.setState({username:d.a.load("facultyName")})}},{key:"render",value:function(){var e=this,t=0;return o.a.createElement("div",{id:"createQuizPage"},null!=this.state.username?o.a.createElement("div",null,o.a.createElement(S,null),o.a.createElement("div",{className:"quizHeader"},o.a.createElement("div",{class:"container"},o.a.createElement("div",{class:"row"},o.a.createElement("div",{class:"col-sm-6"},o.a.createElement(x.a.Item,null,o.a.createElement("input",{className:"form-control",placeholder:"Enter Course Title",onChange:this.handleCourseTitleChange}))),o.a.createElement("div",{class:"col-sm-6"},o.a.createElement(x.a.Item,null,o.a.createElement("input",{className:"form-control",placeholder:"Enter Course Code ex:CSExxx ",onChange:this.handleCourseCodeChange})))),o.a.createElement("div",{class:"row"},o.a.createElement("div",{class:"col-sm-1"}),o.a.createElement("div",{class:"col-sm-3"},o.a.createElement(x.a.Item,null,o.a.createElement("input",{className:"form-control ",placeholder:"Enter Quiz duration (mins)",onChange:this.handleDurationChange}))),o.a.createElement("div",{className:"col-sm-3"},o.a.createElement(x.a.Item,null,o.a.createElement("input",{className:"form-control ",placeholder:"Enter Due Date-time",onChange:this.dateTimeChange}))),o.a.createElement("div",{class:"col-sm-3"},o.a.createElement(x.a.Item,null,o.a.createElement("input",{className:"form-control",placeholder:"Enter Quiz Topic",onChange:this.handleQuizTopicChange})))))),o.a.createElement("button",{onClick:function(){console.log(e.state),console.log()}},"Print State"),this.state.questions.map((function(a){return o.a.createElement("div",{id:"newQuestion"},o.a.createElement(E.a,{id:t,className:"bg-dark"},o.a.createElement(E.a.Header,null,o.a.createElement("input",{className:"form-control",placeholder:"Enter Question Name",onChange:e.handleQuestionUpdate.bind(e,t)})),o.a.createElement(x.a,null,a.options.map((function(a){return o.a.createElement(x.a.Item,null,o.a.createElement("input",{className:"form-control",placeholder:"Enter option "+a[0],onChange:e.handleOptionsChange.bind(e,t,a[0])}))}))),o.a.createElement("div",{class:"container"},o.a.createElement("div",{class:"row"},o.a.createElement("div",{class:"col-sm-2"},o.a.createElement("button",{className:"btn btn-success btn-md",id:"addOption",onClick:e.handleAddOption.bind(e,t)},"Add Option")),o.a.createElement("div",{class:"col-sm-6"},o.a.createElement("input",{className:"form-control correctOption",placeholder:"Enter Correct Option eg: A,B,C..",onChange:e.handleAnswerUpdate.bind(e,t++)}))))))})),o.a.createElement("button",{className:"btn btn-success btn-lg",id:"addQuestion",onClick:function(){e.state.questions.push({question:"",options:[["A",""],["B",""]],correctAns:"",noOfoptions:2}),e.setState({noOfquestions:e.state.noOfquestions+1,questions:e.state.questions})}},"Add Question"),o.a.createElement("div",{className:"text-center"},o.a.createElement("button",{id:"submitButton",className:"btn btn-dark btn-lg ",onClick:this.submitQuiz},"Submit Quiz"))):null)}}]),t}(n.Component)),V=a(16),J=function(){return o.a.createElement("div",{id:"420",className:"jumbotron text-center"},o.a.createElement("h1",null,"Page Not Found"),o.a.createElement("h2",null,"Error 404 (+ 16 specially for you with ",o.a.createElement("i",{className:"far fa-heart"}),")"))},Y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).render=function(){return o.a.createElement(V.b,null,o.a.createElement(f.c,null,o.a.createElement(f.a,{path:"/",component:b,exact:!0}),o.a.createElement(f.a,{path:"/dashboard",component:z}),o.a.createElement(f.a,{path:"/viewResult",component:W}),o.a.createElement(f.a,{path:"/testArena",component:L}),o.a.createElement(f.a,{path:"/admin",component:A}),o.a.createElement(f.a,{path:"/facultydashboard",component:k}),o.a.createElement(f.a,{path:"/createquiz",component:K}),o.a.createElement(f.a,{path:"/viewStatistics",Component:G}),o.a.createElement(f.a,{component:J})))},a}return Object(u.a)(t,e),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(79);s.a.render(o.a.createElement(V.a,null,o.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.a8f0defd.chunk.js.map