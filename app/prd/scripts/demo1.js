!function(e){function t(i){if(o[i])return o[i].exports;var r=o[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(2)},,function(e,t){angular.module("myApp",[]).controller("demo1",["$scope",function(e){var t=[{user:"marry",email:"marry@sohu.com"},{user:"Lili",email:"Lili@sohu.com"}];e.user=t,e.isShow=!1,e.counter=0,e.add=function(){this.counter++},e.items=[],e.addItem=function(t){"13"==t.keyCode&&(e.items.unshift(e.item),e.item="")},e.limit=4,e.books=[{name:"JavaScript高级程序设计",publite:!1,updated:1480574804538},{name:"Angular权威指南",publite:!0,updated:1470574804525},{name:"Vue实战",publite:!1,updated:1480374804538},{name:"Node全栈开发",publite:!0,updated:1480271504538}],e.price=199.98}])}]);