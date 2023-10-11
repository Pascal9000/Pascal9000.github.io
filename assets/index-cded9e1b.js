(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function C(){const n=[["a1","a2","a3"],["b1","b2","b3"],["c1","c2","c3"],["a1","b1","c1"],["a2","b2","c2"],["a3","b3","c3"],["a1","b2","c3"],["a3","b2","c1"]],r=["A","B","C"];let a={p1:"x",p2:"o",mainGameBoard:{scoreBoard:n.map(t=>t.map(l=>l.toUpperCase())),result:null,numerator:null}};const o=3,e=3;for(let t=0;t<o;t++)for(let l=0;l<e;l++){const s=t+1,i=`${r[l]}${s}`,c={scoreBoard:[...n],result:null,numerator:null};a[i]=c}return a}function E(n,r,a){const o=document.getElementById("smallBoardTemplate"),e=document.importNode(o.content,!0),t=e.querySelector(".smallBoardWrapper"),l=e.querySelector(".smallBoardElement"),s=a+1,i=`smallBoardWrapper-${n[r]}${s}`;t.setAttribute("id",i),t.classList.add(`${n[r]}${s}`);const c=`smallBoardElement-${n[r]}${s}`;l.setAttribute("id",c);const g=3,f=3;for(let p=0;p<g;p++)for(let B=0;B<f;B++){const h=y(n,B,p);l.appendChild(h)}t.appendChild(l);const u=document.createDocumentFragment();return u.appendChild(t),u}function y(n,r,a){const o=document.getElementById("fieldButtonTemplate"),t=document.importNode(o.content,!0).querySelector("button"),l=`field-button-${n[r].toLowerCase()}${a+1}`;t.setAttribute("id",l),t.classList.add(`${n[r].toLowerCase()}${a+1}`);const s=document.createDocumentFragment();return s.appendChild(t),s}function b(){const n=document.getElementById("gameBoard"),r=document.getElementById("mainGameBoardTemplate"),o=document.importNode(r.content,!0).querySelector("div"),e=["A","B","C"],t=document.createDocumentFragment();for(let l=0;l<3;l++)for(let s=0;s<3;s++){const i=E(e,s,l);t.appendChild(i)}o.appendChild(t),n.appendChild(o)}function S(n,r,a){return a==n?r:n}function L(n,r,a){return r.map(e=>e.map(t=>t===n?a:t))}function $(n,r,a){return r.map(e=>e.map(t=>t===n?a:t))}function w(n,r,a){if(r<3)return null;for(let e=0;e<n.length;e++){if(n[e].filter(l=>l!==a).length===0)return a;if(r===9)return"draw"}return null}function G(n,r){if(n.mainGameBoard.numerator<3)return null;{const a=n.mainGameBoard.scoreBoard;for(let e=0;e<a.length;e++)if(a[e].filter(l=>l!==r).length===0)return n.mainGameBoard.result=r,r;const o=[];for(let e="A";e<="C";e++)for(let t=1;t<=3;t++){const l=e+t,s=n[l];o.push(s.result)}return o.includes(null)?null:"Draw!"}}function I(n,r){const a=n.toUpperCase(),o=[],e=["A","B","C"];if(r[a].result===null)return o.push(`smallBoardElement-${a}`),o;for(let t=0;t<3;t++)for(let l=0;l<3;l++){const s=`${e[t]}${l+1}`;r[s].result||o.push(`smallBoardElement-${s}`)}return o}document.addEventListener("DOMContentLoaded",function(){const n=document.getElementById("gameBoard"),r=document.getElementById("playerDisplay");let a=["smallBoardElement-A1","smallBoardElement-A2","smallBoardElement-A3","smallBoardElement-B1","smallBoardElement-B2","smallBoardElement-B3","smallBoardElement-C1","smallBoardElement-C2","smallBoardElement-C3"];b();let o=[];o=C();let e=o.p1;function t(l){const s=l.target,i=s.parentNode.id,c=s.parentNode.id.slice(-2),g=s.classList.contains("p1-icon")||s.classList.contains("p2-icon");if(s.matches("button")&&!g&&a.includes(i)){const f=s.id.slice(-2);o[c].numerator+=1,r.textContent=`Player: ${e===o.p1?o.p2:o.p1}`;const u=e==="x"?"p1-icon":"p2-icon";s.classList.add(u),o[c].scoreBoard=L(f,o[c].scoreBoard,e);const p=w(o[c].scoreBoard,o[c].numerator,e);if(p!==null){o[c].result=p,o.mainGameBoard.scoreBoard=$(c,o.mainGameBoard.scoreBoard,e),o.mainGameBoard.numerator+=1;const d=document.getElementById(`smallBoardWrapper-${c}`);for(;d.firstChild;)d.removeChild(d.firstChild);const m=document.createElement("div");console.log(m),m.classList.add(u,"w-full","h-full"),console.log(u),d.appendChild(m)}const B=document.querySelectorAll('[id^="smallBoardElement"]');for(let d=0;d<B.length;d++)B[d].classList.remove("bg-orange-200");if(G(o,e)){r.textContent=`${e} Wins!`;const d=document.querySelectorAll("div.playerIcon");for(let m=0;m<d.length;m++)d[m].classList.add("bg-blue-200");n.removeEventListener("click",t)}else{a=I(f,o);for(let d=0;d<a.length;d++)document.getElementById(a[d]).classList.add("bg-orange-200")}e=S(o.p1,o.p2,e)}}n.addEventListener("click",t)});
