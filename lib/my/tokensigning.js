var tokensigning=function(){"use strict";var i="invalid_argument",t=null,s=0,r=0,e=1,n=2,o=3,a=4,u=5,c=6,f={get_browser:function(){var r,e=navigator.userAgent,n=e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(n[1])?{name:"IE",version:(r=/\brv[ :]+(\d+)/g.exec(e)||[])[1]||""}:"Chrome"===n[1]&&null!==(r=e.match(/\b(OPR|Edge)\/(\d+)/))?{name:r.slice(1)[0].replace("OPR","Opera"),version:r.slice(1)[1]}:(n=n[2]?[n[1],n[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(r=e.match(/version\/(\d+)/i))&&n.splice(1,1,r[1]),{name:n[0],version:n[1]})},checkBrowser:function(){var r=f.get_browser();switch(r.name.toLowerCase()){case"chrome":if(52<r.version)return!0;case"firefox":if(49<r.version)return!0;case"opera":if(26<r.version)return!0;case"edge":if(15<r.version)return!0;case"ie":if(6<r.version)return!0;case"msie":if(6<r.version)return!0;case"safari":if(10<r.version)return!0;default:return!1}}},l=f.checkBrowser();f.getKey=function(){for(var r=document.getElementsByTagName("meta"),e=0;e<r.length;e++)if("tokensigning-verification"===r[e].getAttribute("name"))return r[e].getAttribute("content");return null};var g=f.getKey(),h={};return h.key=g,f.forward=function(n){return l?window.Promise?g?(n=JSON.stringify(n),new Promise(function(e,r){null===t||1!==s?t=new WebSocket("wss://localhost:4667/tokensigning"):t.send(n),t.onopen=function(){s=1,t.send(n)},t.onclose=function(){s=0},t.onmessage=function(r){e(r.data)},t.onerror=function(){s=0,r(new Error("tokensigning_connect_failed"))}})):Promise.reject(new Error("not_found_key")):Promise.reject(new Error("promise_unsupported_browser")):Promise.reject(new Error("unsupported_browser"))},f.checkTokenSigning=function(){return h.functionID=r,this.forward(h)},f.getVersion=function(){return h.functionID=e,this.forward(h)},f.selectCertificate=function(r){h.functionID=n;var e=[JSON.stringify(r)];return h.args=e,this.forward(h)},f.signXml=function(r,e){if(!r)return Promise.reject(new Error(i));h.functionID=o;var n=[r,JSON.stringify(e)];return h.args=n,this.forward(h)},f.signPdf=function(r,e){if(!r)return Promise.reject(new Error(i));h.functionID=a;var n=[r,JSON.stringify(e)];return h.args=n,this.forward(h)},f.signOOxml=function(r,e){if(!r)return Promise.reject(new Error(i));h.functionID=u;var n=[r,JSON.stringify(e)];return h.args=n,this.forward(h)},f.signCms=function(r,e){if(!r)return Promise.reject(new Error(i));h.functionID=c;var n=[r,JSON.stringify(e)];return h.args=n,this.forward(h)},f}();function PdfSignatureOption(){this.page=1,this.llx=0,this.lly=0,this.urx=150,this.ury=75,this.SigTextSize=9,this.Signer=null,this.SigningTime=null,this.Description=null,this.ImageBase64=null,this.OnlyDescription=!1,this.ValidationOption=!0,this.SigColorRGB=null,this.PagesArray=null,this.certificateSerial=null,this.certStore=1,this.tsaUrl=null,this.tsaUserName=null,this.tsaPass=null,this.metadatas={}}