import{f as r,i as a}from"./app-BEIpjE_9.js";import{a as s}from"./examinations-service-CW6kY7d2.js";async function i(){try{return await r.get("/api/booklet")}catch(t){return t}}async function c(t){try{return await r.get(`/api/booklet/${t}`)}catch(e){return e}}async function u(t){try{return await r.post("/api/booklet",t)}catch(e){return e}}function b(){return async function(t,e){const o=await i();return t(a.actions.setBooklets(o.data.response)),o}}function l(t){return async function(e,o){const n=await c(t);return e(a.actions.setBooklet(n.data.response)),n}}function f(t){return async function(e,o){return u(t)}}function g(t){return async function(e,o){const n=await s(t);return console.log("waaaa",n.data.response),e(a.actions.setExaminations(n.data.response)),n}}export{g as a,b,l as g,f as s};