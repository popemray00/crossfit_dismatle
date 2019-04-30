(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){},108:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(49),c=a.n(r),o=a(3),i=a(4),s=a(6),m=a(5),u=a(7),d=a(13),g=a(16),h=(a(59),a(17)),p=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"Navbar"},l.a.createElement("img",{src:"Logo.png",className:"Navlogo",alt:"Crossfit Dismantle"}),l.a.createElement(d.b,{className:"Link",to:"/"},"Home"),l.a.createElement(d.b,{className:"Link",to:"/schedule"},"Schedule"),l.a.createElement(d.b,{className:"Link",to:"/wod"},"WOD"),l.a.createElement(d.b,{className:"Link",to:"/momstrong"},"Mom Strong"),l.a.createElement("div",{className:"icons"},l.a.createElement("h4",null,"Follow Us!"),l.a.createElement("br",null),l.a.createElement("a",{href:"https://www.facebook.com/CrossFit-Dismantle-1524864784486908/",target:"blank"},l.a.createElement(h.a,{icon:["fab","facebook"],size:"5x",className:"Facebook"})),l.a.createElement("a",{href:"https://www.instagram.com/crossfitdismantle/",target:"blank"},l.a.createElement(h.a,{icon:["fab","instagram"],size:"5x",className:"Instagram"})))))},E=a(52),w=a.n(E),b=a(9),f=a.n(b),k=(a(70),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"Container"},l.a.createElement(w.a,{className:"Jumbo"},l.a.createElement("h1",null,"CrossFit ",l.a.createElement(h.a,{icon:"dumbbell",className:"Dumbbell"})," Dismantle"))),l.a.createElement("div",{className:"Home-Header"},l.a.createElement("h2",null,"Dismantle --- ",l.a.createElement("p",null,"To take something apart or down.")),l.a.createElement("div",{className:"quote"},l.a.createElement("p",null,l.a.createElement(h.a,{icon:"quote-left",className:"QuoteLeft",size:"2x"}),"When I think dismantle I automatically think of mindsets and bad habits. In order to get breakthrough you have to dismantle old thought patterns and habits in life. That isn\u2019t always easy. Your going to feel resistance but you push through anyways. That\u2019s where true breakthrough comes. Not in what\u2019s comfortable but getting uncomfortable, getting raw and finding grit and pushing past your norm.",l.a.createElement(h.a,{icon:"quote-right",className:"Quoteright",size:"2x"})))),l.a.createElement(f.a,null,l.a.createElement(f.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:"images/image1.jpg",alt:"First slide"})),l.a.createElement(f.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:"images/image2.jpg",alt:"Second slide"})),l.a.createElement(f.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:"images/image3.jpg",alt:"Third slide"})),l.a.createElement(f.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:"images/image4.jpg",alt:"Fourth slide"})),l.a.createElement(f.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:"images/image5.jpg",alt:"Fifth slide"})),l.a.createElement(f.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:"images/image6.jpg",alt:"Sixth slide"})),l.a.createElement(f.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:"images/image7.jpg",alt:"Seventh slide"})),l.a.createElement(f.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:"images/image12.jpg",alt:"Eight slide"})),l.a.createElement(f.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:"images/image13.jpg",alt:"Ninth slide"})),l.a.createElement(f.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:"images/gma.jpg",alt:"Tenth slide"}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"Container"},l.a.createElement("h1",null,"About Us..."),l.a.createElement("h1",null,"Coming Soon!!!")))}}]),t}(l.a.Component)),j=a(26),v=(a(43),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).handleClick=function(){a.props.onClick(a.props.wod.id)},a.handleDelete=function(){a.props.onDelete(a.props.wod.id)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"tile"},l.a.createElement("span",{className:"deleteButton",onClick:this.handleDelete},"x"),l.a.createElement("h4",null,this.props.wod.title),l.a.createElement("p",null,this.props.wod.date),l.a.createElement("p",null,this.props.wod.workout),l.a.createElement("p",{id:"Edit",onClick:this.handleClick},"."))}}]),t}(n.Component)),N=a(20),y=a.n(N),O=a(27),I=a.n(O),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleInput=function(e){a.setState(Object(j.a)({},e.target.name,e.target.value))},a.handleBlur=function(){var e={title:a.state.title,date:a.state.date,workout:a.state.workout,workout1:a.state.workout1,workout2:a.state.workout2,workout3:a.state.workout3,workout4:a.state.workout4,workout5:a.state.workout5,workout6:a.state.workout6,workout7:a.state.workout7};y.a.put("http://localhost:3000/api/v1/wods/".concat(a.props.wod.id),{wods:e}).then(function(e){console.log(e),a.props.updateWod(e.data)}).catch(function(e){return console.log(e)})},a.state={title:a.props.title,date:a.props.wod.date,workout:a.props.workout},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"tile"},l.a.createElement("form",{onBlur:this.handleBlur},l.a.createElement("input",{className:"input",type:"text",name:"title",placeholder:"Enter a Title",value:this.state.title,onChange:this.handleInput,ref:this.props.titleRef}),l.a.createElement("input",{className:"input",type:"date",placeholder:"Enter Date",value:this.state.date,onChange:this.handleInput}),l.a.createElement("textarea",{className:"input",name:"workout",placeholder:"Enter Workout",value:this.state.workout,onChange:this.handleInput})))}}]),t}(n.Component),W=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).addNewWod=function(){y.a.post("http://localhost:3001/api/v1/wods.json",{wods:{title:"WOD",date:Date(),workout:"1"}}).then(function(e){console.log(e);var t=I()(a.state.wods,{$splice:[[0,0,e.data]]});a.setState({wods:t,editingWodId:e.data.id}),console.log(a.state)}).catch(function(e){return console.log(e)})},a.updateWod=function(e){var t=a.state.wods.findIndex(function(t){return t.id===e.id}),n=I()(a.state.wods,Object(j.a)({},t,{$set:e}));console.log(e),a.setState({wods:n})},a.deleteWod=function(e){y.a.delete("http://localhost:3000/api/v1/wods/".concat(e)).then(function(t){var n=a.state.wods.findIndex(function(t){return t.id===e}),l=I()(a.state.wods,{$splice:[[n,1]]});a.setState({wods:l})}).catch(function(e){return console.log(e)})},a.enableEditing=function(e){a.setState({editingWodId:e},function(){a.title.focus()})},a.state={wods:[],editingWodId:null},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("http://localhost:3001/api/v1/wods.json").then(function(t){console.log(t),e.setState({wods:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"Header"},l.a.createElement("h1",null," W.O.D. ")," ",l.a.createElement("h2",null," (Work Out of the Day ",l.a.createElement("button",{className:"newWodButton",onClick:this.addNewWod}," ",l.a.createElement("h2",null," ) ")))," ",l.a.createElement("div",{className:"WodBox"}," ",this.state.wods.map(function(t){return e.state.editingWodId===t.id?l.a.createElement(C,{wod:t,key:t.id,updateWod:e.updateWod,titleRef:function(t){return e.title=t}}):l.a.createElement(v,{wod:t,key:t.id,onClick:e.enableEditing,onDelete:e.deleteWod})})," ")," ")}}]),t}(l.a.Component),D=(a(107),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"Content"},l.a.createElement("h1",null,"Mom Strong Is...")),l.a.createElement("div",{className:"Bottom-Image"},l.a.createElement("div",{class:"gallery"},l.a.createElement("a",{target:"_blank",href:"images/image8.jpg"},l.a.createElement("img",{src:"images/image8.jpg",alt:"image8",width:"600",height:"400"}))),l.a.createElement("div",{class:"gallery"},l.a.createElement("a",{target:"_blank",href:"images/image9.jpg"},l.a.createElement("img",{src:"images/image9.jpg",alt:"image9",width:"600",height:"400"}))),l.a.createElement("div",{class:"gallery"},l.a.createElement("a",{target:"_blank",href:"images/image11.jpg"},l.a.createElement("img",{src:"images/image11.jpg",alt:"image11",width:"600",height:"400"}))),l.a.createElement("div",{class:"gallery"},l.a.createElement("a",{target:"_blank",href:"images/image10.jpg"},l.a.createElement("img",{src:"images/image10.jpg",alt:"image10",width:"600",height:"400"}))),l.a.createElement("div",{class:"gallery"},l.a.createElement("a",{target:"_blank",href:"images/image12.jpg"},l.a.createElement("img",{src:"images/image12.jpg",alt:"image12",width:"600",height:"400"}))),l.a.createElement("div",{class:"gallery"},l.a.createElement("a",{target:"_blank",href:"images/image13.jpg"},l.a.createElement("img",{src:"images/image13.jpg",alt:"image13",width:"600",height:"400"}))),l.a.createElement("div",{class:"gallery"},l.a.createElement("a",{target:"_blank",href:"images/image14.jpg"},l.a.createElement("img",{src:"images/image14.jpg",alt:"image14",width:"600",height:"400"}))),l.a.createElement("div",{class:"gallery"},l.a.createElement("a",{target:"_blank",href:"images/image15.jpg"},l.a.createElement("img",{src:"images/image15.jpg",alt:"image15",width:"600",height:"400"}))),l.a.createElement("div",{class:"gallery"},l.a.createElement("a",{target:"_blank",href:"images/image16.jpg"},l.a.createElement("img",{src:"images/image16.jpg",alt:"image16",width:"600",height:"400"})))))}}]),t}(l.a.Component)),x=(a(108),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"Top"},l.a.createElement("h1",null,"Dismantle Days")),l.a.createElement("div",{className:"Hours"},l.a.createElement("h1",{className:"Hours-Title"},"CrossFit Hours"),l.a.createElement("h1",null,"Monday - Friday  5:15pm"),l.a.createElement("h1",null,"Saturday 10am")),l.a.createElement("div",{className:"Hours2"},l.a.createElement("h1",{className:"Hours-Title"},"Mom Strong"),l.a.createElement("h1",null,"Monday - Friday  9:00am")))}}]),t}(l.a.Component)),S=a(23),F=a(53),B=a(21);S.b.add(F.a,B.a,B.b,B.c,B.d,B.e);var H=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",{className:"app"},l.a.createElement(g.a,{exact:!0,path:"/",component:k}),l.a.createElement(g.a,{exact:!0,path:"/schedule",component:x}),l.a.createElement(g.a,{exact:!0,path:"/wod",component:W}),l.a.createElement(g.a,{exact:!0,path:"/momstrong",component:D}),l.a.createElement(p,null)))}}]),t}(n.Component);a(109),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(d.a,null,l.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},43:function(e,t,a){},54:function(e,t,a){e.exports=a(110)},59:function(e,t,a){},70:function(e,t,a){}},[[54,1,2]]]);
//# sourceMappingURL=main.68d514df.chunk.js.map