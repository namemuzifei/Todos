webpackJsonp([1],[,,,,,,,,,,,,,function(t,e,n){"use strict";var s=n(0),a=n(55);s.a.use(a.a),e.a=new a.a({})},function(t,e,n){"use strict";var s=n(0),a=n(5),i=n(20),o=n(19);s.a.use(a.d),e.a=new a.d.Store({state:{tasks:[{name:"vue.js",done:!1},{name:"react",done:!0}],choice:"all"},mutations:i.a,getters:o.a})},function(t,e,n){function s(t){n(51)}var a=n(12)(n(16),n(54),s,null,null);t.exports=a.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(6),a=n.n(s),i=n(49),o=(n.n(i),n(52)),c=n.n(o),r=n(5);e.default={name:"app",components:{li_task:c.a},computed:a()({},n.i(r.a)(["tasks","choice"]),n.i(r.b)(["allState","remaining","tasks_filter"])),methods:a()({choose:function(t){this.$store.commit("choose",t.target.innerHTML)},add:function(t){var e=t.target.value.trim();e&&this.$store.commit("add",e),t.target.value=""}},n.i(r.c)(["toggleAll","clear"]))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(6),a=n.n(s),i=n(5);e.default={data:function(){return{editing:!1}},props:{task:{type:Object,required:!0}},methods:a()({},n.i(i.c)(["remove","toggleState","updateEdit"]),{cancelEdit:function(){this.editing=!1},submitEdit:function(t){var e=t.target.value.trim();e?this.updateEdit({task:this.task,newName:e}):this.remove(this.task),this.editing=!1}}),directives:{focus:function(t,e){e.value&&t.focus()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(0),a=n(15),i=n.n(a),o=n(13),c=n(14);s.a.config.productionTip=!1,new s.a({el:"#app",router:o.a,store:c.a,template:"<app/>",components:{app:i.a}})},function(t,e,n){"use strict";e.a={tasks_filter:function(t){switch(t.choice){case"all":return t.tasks;case"active":return t.tasks.filter(function(t){return!t.done});case"completed":return t.tasks.filter(function(t){return t.done})}},allState:function(t){return t.tasks.every(function(t){return t.done})},remaining:function(t){return t.tasks.filter(function(t){return!t.done}).length}}},function(t,e,n){"use strict";e.a={add:function(t,e){return t.tasks.unshift({name:e,done:!1})},remove:function(t,e){var n=t.tasks.findIndex(function(t){return t==e});if(-1!=n)return t.tasks.splice(n,1)},toggleState:function(t,e){var n=t.tasks.findIndex(function(t){return t==e});-1!=n&&(t.tasks[n].done=!t.tasks[n].done)},toggleAll:function(t,e){t.tasks.forEach(function(t){t.done=e})},choose:function(t,e){return t.choice=e},clear:function(t){t.tasks=t.tasks.filter(function(t){return!t.done})},updateEdit:function(t,e){var n=e.task,s=e.newName,a=t.tasks.findIndex(function(t){return t==n});-1!=a&&(t.tasks[a].name=s)}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e,n){function s(t){n(50)}var a=n(12)(n(17),n(53),s,null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"todo ",class:{completed:t.task.done,editing:t.editing}},[n("div",{staticClass:"view"},[n("input",{staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:t.task.done},on:{click:function(e){t.toggleState(t.task)}}}),t._v(" "),n("label",{on:{dblclick:function(e){t.editing=!0}}},[t._v(t._s(t.task.name))]),t._v(" "),n("button",{staticClass:"destroy",on:{click:function(e){t.remove(t.task)}}})]),t._v(" "),n("input",{directives:[{name:"focus",rawName:"v-focus",value:t.editing,expression:"editing"}],staticClass:"edit",attrs:{type:"text"},domProps:{value:t.task.name},on:{keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.submitEdit(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27))return null;t.cancelEdit(e)}],blur:function(e){t.submitEdit(e)}}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("section",{staticClass:"todoapp"},[n("header",{staticClass:"header"},[n("h1",[t._v("todos")]),t._v(" "),n("input",{staticClass:"new-todo",attrs:{type:"text",placeholder:"what need to be done?"},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.add(e)}}})]),t._v(" "),n("section",{staticClass:"main"},[n("input",{staticClass:"toggle-all",attrs:{type:"checkbox"},domProps:{checked:t.allState},on:{click:function(e){t.toggleAll(!t.allState)}}}),t._v(" "),n("transition-group",{staticClass:"todo-list",attrs:{name:"slider",tag:"ul"}},t._l(t.tasks_filter,function(t){return n("li_task",{key:t.name,attrs:{task:t}})}))],1),t._v(" "),n("footer",{directives:[{name:"show",rawName:"v-show",value:t.tasks_filter.length,expression:"tasks_filter.length"}],staticClass:"footer"},[n("span",{staticClass:"todo-count"},[n("strong",[t._v(t._s(t.remaining))]),t._v(" items left")]),t._v(" "),n("ul",{staticClass:"filters"},[n("li",[n("a",{class:{selected:"all"==t.choice},attrs:{href:""},on:{click:function(e){e.preventDefault(),t.choose(e)}}},[t._v("all")])]),t._v(" "),n("li",[n("a",{class:{selected:"active"==t.choice},attrs:{href:""},on:{click:function(e){e.preventDefault(),t.choose(e)}}},[t._v("active")])]),t._v(" "),n("li",[n("a",{class:{selected:"completed"==t.choice},attrs:{href:""},on:{click:function(e){e.preventDefault(),t.choose(e)}}},[t._v("completed")])])]),t._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:t.tasks.length>t.remaining,expression:"tasks.length > remaining"}],staticClass:"clear-completed",on:{click:t.clear}},[t._v("clear completed")])])])])},staticRenderFns:[]}}],[18]);
//# sourceMappingURL=app.1c8d731d13cb1aa9b26b.js.map