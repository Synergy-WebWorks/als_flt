import{i as n,n as c}from"./app-B3J6A2bz.js";async function a(){try{return await n.get("/api/subject")}catch(t){return t}}async function u(t){try{return await n.get(`/api/subject/${t}`)}catch(e){return e}}async function o(t){try{return await n.post("/api/subject",t)}catch(e){return e}}async function i(t){try{return await n.put(`/api/subject/${t.id}`,t)}catch(e){return e}}async function _(t){try{return await n.delete(`/api/subject/${t}`)}catch(e){return e}}function p(){return async function(t,e){const r=await a();return console.log("res.data.response",r.data.response),t(c.actions.setSubjects(r.data.response)),r}}function d(t){return async function(e,r){const s=await u(t);return e(c.actions.setHandleds(s.data.response)),s}}function j(t){return async function(e,r){return o(t)}}function y(t){return async function(e,r){return i(t)}}function f(t){return async function(e,r){return _(t)}}export{d as a,f as d,p as g,j as s,y as u};