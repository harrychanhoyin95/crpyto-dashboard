(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,t,n){e.exports=n(170)},170:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),i=n.n(c),l=n(12),o=n(41),u=n(95),s=n(34),p=n(111),h=n(10),m=n(35),d=n(7),g=n(172),f=n(201),E=n(207),b=n(203),v=n(204),O=n(200),y=n(202),w=n(71),x=n(206),j=n(205),D=n(102),C=n.n(D),S=n(105),k=n.n(S),T=n(104),_=n.n(T),H=n(197),N=n(198),B=n(199),I=n(106),R=n.n(I),A=n(108),P=n.n(A),U=n(107),K=n.n(U),L=n(109),M=n.n(L),F=n(60),z=n.n(F),G=n(50),W=n(19),$=n(14),V=n(22),X=n(20),J=n(21),q=n(4),Y=n(5),Q=n(25),Z=n.n(Q),ee=n(53),te=n(38),ne=n.n(te),ae=ne.a.create({baseURL:"https://rest.coinapi.io/",headers:{"X-CoinAPI-Key":"D684FDE7-8C62-4E87-AA88-5CA4B3630316"}}),re=ne.a.create({baseURL:"https://free.currconv.com"}),ce=ne.a.create({baseURL:"https://api.coincap.io/v2"}),ie=ne.a.create({baseURL:"https://cryptocontrol.io",headers:{"x-api-key":"dd8378e9cdb6a3042efb7a74aaad9108"}}),le=function(){return{type:"SIGN_IN"}},oe=function(){return function(){var e=Object(ee.a)(Z.a.mark(function e(t){var n;return Z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"2a0cfbcaf9a179566ac5",e.next=3,re.get("/api/v7/convert?q=USD_HKD,HKD_USD&compact=ultra&apiKey=".concat("2a0cfbcaf9a179566ac5"));case 3:n=e.sent,t({type:"GET_EXCHANGE_RATE",payload:n.data});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()};function ue(){var e=Object(q.a)(["\n  font-size: 0.8em;\n\tcolor: #888;\n"]);return ue=function(){return e},e}function se(){var e=Object(q.a)(["\n\tposition: absolute;\n\tbottom: 0;\n\tleft: 0;\n\tmargin-left: 5%;\n\tfont-size: 1.2em\n\tfont-weight: bold;\n\n\t@media only screen and (min-width: 1024px) {\n\t\tfont-size: 1em\n\t}\n"]);return se=function(){return e},e}function pe(){var e=Object(q.a)(["\n\twidth: 100%;\n\tmax-width: 100%;\n"]);return pe=function(){return e},e}function he(){var e=Object(q.a)(["\n\tposition: relative;\n\tcolor: #FFF;\n"]);return he=function(){return e},e}function me(){var e=Object(q.a)(["\n\tdisplay: grid;\n\t\n\t@media only screen and (min-width: 768px) {\n\t\tgrid-template-columns: 1fr 1fr;\n\t}\n\n\t@media only screen and (min-width: 1024px) {\n\t\tgrid-template-columns: 1fr 1fr 1fr 1fr;\n\t}\n"]);return me=function(){return e},e}function de(){var e=Object(q.a)(["\n  color: rgba(0, 0, 0, 0.54);\n\tfont-size: 1.5em;\n\tfont-weight: bold;\n\tmargin-top: 0;\n"]);return de=function(){return e},e}var ge=Y.a.p(de()),fe=Y.a.div(me()),Ee=Y.a.a(he()),be=Y.a.img(pe()),ve=Y.a.p(se()),Oe=Y.a.span(ue()),ye=function(e){function t(){return Object(W.a)(this,t),Object(V.a)(this,Object(X.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object($.a)(t,[{key:"componentDidMount",value:function(){this.props.getNews()}},{key:"renderNews",value:function(){if(null!==this.props.newsData.newsData)return this.props.newsData.newsData.slice(31,this.length)}},{key:"renderLocalDate",value:function(e){return new Date(e).toDateString()}},{key:"render",value:function(){var e=this;return console.log(this.renderNews()),r.a.createElement(a.Fragment,null,r.a.createElement(ge,null,"Lastest News"),r.a.createElement(fe,null,void 0===this.renderNews()?null:this.renderNews().map(function(t){return r.a.createElement(Ee,{key:t.title,href:t.url},r.a.createElement(be,{src:t.thumbnail}),r.a.createElement(ve,null,t.title,r.a.createElement("br",null),r.a.createElement(Oe,null,e.renderLocalDate(t.publishedAt))))})))}}]),t}(r.a.Component),we=Object(l.b)(function(e){return{newsData:e.newsData}},{getNews:function(){return function(){var e=Object(ee.a)(Z.a.mark(function e(t){var n;return Z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie.get("/api/v1/public/news");case 2:n=e.sent,t({type:"GET_NEWS",payload:n.data});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(ye),xe=n(58),je=n.n(xe),De=n(196);function Ce(){var e=Object(q.a)(["\n  color: red;\n"]);return Ce=function(){return e},e}function Se(){var e=Object(q.a)(["\n  color: green;\n"]);return Se=function(){return e},e}function ke(){var e=Object(q.a)(["\n  padding: 12px;\t\n\n\t&:first-child {\n\t\ttext-align: center;\n\t}\n\n\t&:nth-child(2) {\n\t\ttext-align: left\n\t}\n\n\t&:nth-child(n+3) {\n\t\ttext-align: right;\n\t}\n\t\n\t@media only screen and (max-width: 767px) {\n\t\tpadding: 12px 0;\n\n\t\t&:nth-child(1),\n\t\t&:nth-child(4),\n\t\t&:nth-child(5),\n\t\t&:nth-child(6),\n\t\t&:nth-child(7) {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n"]);return ke=function(){return e},e}function Te(){var e=Object(q.a)(["\n\tfont-weight: bold;\n\tbackground-color: rgb(240, 240, 240);\n\tpadding: 12px;\t\n\n\t&:first-child {\n\t\ttext-align: center;\n\t}\n\n\t&:nth-child(2) {\n\t\ttext-align: left\n\t}\n\n\t&:nth-child(n+3) {\n\t\ttext-align: right;\n\t}\n\n\t@media only screen and (max-width: 767px) {\n\t\tpadding: 12px 6px;\n\t\t\n\t\t&:nth-child(1),\n\t\t&:nth-child(4),\n\t\t&:nth-child(5),\n\t\t&:nth-child(6),\n\t\t&:nth-child(7) {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n"]);return Te=function(){return e},e}function _e(){var e=Object(q.a)(["\n  text-align: center;\n"]);return _e=function(){return e},e}function He(){var e=Object(q.a)(["\n\tborder-collapse: separate;\n\tborder-spacing: 0;\n"]);return He=function(){return e},e}function Ne(){var e=Object(q.a)(["\n\tborder: 2px solid rgb(240,240,240);\n\tborder-spacing: 0;\n\tborder-radius: 5px;\n  width: 100%;\n  white-space: nowrap;\n"]);return Ne=function(){return e},e}function Be(){var e=Object(q.a)(["\n  margin-top: 100px;\n\ttext-align: center;\n"]);return Be=function(){return e},e}var Ie=Y.a.div(Be()),Re=Y.a.table(Ne()),Ae=Y.a.thead(He()),Pe=Y.a.tr(_e()),Ue=Y.a.th(Te()),Ke=Y.a.td(ke()),Le=Y.a.span(Se()),Me=Y.a.span(Ce()),Fe=function(e){function t(){return Object(W.a)(this,t),Object(V.a)(this,Object(X.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object($.a)(t,[{key:"componentDidMount",value:function(){this.props.getExchangeRate(),this.props.getTableArray(),console.log(this.props)}},{key:"renderWholeNumber",value:function(e){return null===this.props.exchangeData.exchangeRate?null:"HKD"===this.props.settings.defaultCurrency?je()(e*this.props.exchangeData.exchangeRate.USD_HKD).format("$0,0.00"):je()(e).format("$0,0.00")}},{key:"renderBigNumber",value:function(e){return null===this.props.exchangeData.exchangeRate?null:"HKD"===this.props.settings.defaultCurrency?je()(e*this.props.exchangeData.exchangeRate.USD_HKD).format("$0.00a"):je()(e).format("$0.00a")}},{key:"renderPercentage",value:function(e){var t=je()(e).format("0.00%");return e>0?r.a.createElement(Le,null,t):e<0?r.a.createElement(Me,null,t):{newNumber:t}}},{key:"renderTable",value:function(){var e=this;return console.log(this.props.exchangeData.exchangeRate),r.a.createElement(Re,null,r.a.createElement(Ae,null,r.a.createElement(Pe,null,r.a.createElement(Ue,{colSpan:1},"Rank"),r.a.createElement(Ue,{colSpan:2},"Name"),r.a.createElement(Ue,{colSpan:1},"Price"),r.a.createElement(Ue,{colSpan:1},"Market Cap"),r.a.createElement(Ue,{colSpan:1},"VWAP (24h)"),r.a.createElement(Ue,{colSpan:1},"Supply"),r.a.createElement(Ue,{colSpan:1},"Volume (24h)"),r.a.createElement(Ue,{colSpan:1},"Change (24h)"))),r.a.createElement("tbody",null,this.props.tableData.data.map(function(t){return r.a.createElement("tr",{key:t.name},r.a.createElement(Ke,null,t.rank),r.a.createElement(Ke,{colSpan:2},t.name),r.a.createElement(Ke,null,e.renderWholeNumber(t.priceUsd)),r.a.createElement(Ke,null,e.renderBigNumber(t.marketCapUsd)),r.a.createElement(Ke,null,e.renderWholeNumber(t.vwap24Hr)),r.a.createElement(Ke,null,e.renderBigNumber(t.supply)),r.a.createElement(Ke,null,e.renderBigNumber(t.volumeUsd24Hr)),r.a.createElement(Ke,null,e.renderPercentage(t.changePercent24Hr/100)))})))}},{key:"render",value:function(){return null===this.props.tableData?r.a.createElement(Ie,null,r.a.createElement(De.a,null)):r.a.createElement("div",{className:"content"},this.renderTable())}}]),t}(r.a.Component),ze=Object(l.b)(function(e){return{tableData:e.table.tableData,exchangeData:e.exchangeData,settings:e.settings}},{getTableArray:function(){return function(){var e=Object(ee.a)(Z.a.mark(function e(t){var n;return Z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce.get("/assets?limit=20");case 2:n=e.sent,t({type:"GET_TABLE_ARRAY",payload:n.data});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},getExchangeRate:oe})(Fe),Ge=n(99),We=n.n(Ge),$e=n(44);n(157);function Ve(){var e=Object(q.a)(["\n\tmargin: 0 auto;\n\tpadding: 30px 0;\n"]);return Ve=function(){return e},e}var Xe=Object(Y.a)($e.a)(Ve()),Je=function(e){function t(){var e,n;Object(W.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(V.a)(this,(e=Object(X.a)(t)).call.apply(e,[this].concat(r)))).data=n.props.currencies.map(function(e){return{x:new Date(e.time_period_start),y:e.price_close}}),n}return Object(J.a)(t,e),Object($.a)(t,[{key:"tooltipPosition",value:function(){return{x:this.props.datapoint.x,y:this.props.datapoint.y}}},{key:"parseDate",value:function(e){var t=e.getFullYear(),n=e.getMonth()+1,a=e.getDate();return"".concat(a,"/").concat(n,", ").concat(t)}},{key:"render",value:function(){var e=this;return r.a.createElement(Xe,{xType:"time",margin:{left:50},height:300},r.a.createElement($e.c,null),r.a.createElement($e.e,null),r.a.createElement($e.d,{data:this.data,lineStyle:{stroke:"#737373"},markStyle:{stroke:"#444444",fill:"#444444"},onValueMouseOver:function(t){e.props.showTooltip(),e.props.getDatapoint(t)},onValueMouseOut:function(){e.props.closeTooltip()}}),this.props.isShownTooltip?r.a.createElement($e.b,{value:this.tooltipPosition()},r.a.createElement("div",{style:{background:"#e2e2e2",padding:"0 10px"}},r.a.createElement("p",{style:{marginTop:"1.8em",color:"black",fontWeight:"bold",padding:"5px 0"}},"US$",this.props.datapoint.y," ",r.a.createElement("br",null),r.a.createElement("span",{style:{opacity:"0.7",fontSize:"0.8em",fontWeight:"normal"}},this.parseDate(this.props.datapoint.x)," ",r.a.createElement("br",null),this.props.datapoint.x.getHours(),":00:00 GMT+8")))):null,r.a.createElement($e.f,{tickTotal:4}),r.a.createElement($e.g,{tickTotal:6}))}}]),t}(r.a.Component),qe=Object(l.b)(function(e){return{currencies:e.priceChart.currency,isShownTooltip:e.priceChart.showTooltip,datapoint:e.priceChart.datapoint}},{showTooltip:function(){return{type:"SHOW_TOOLTIP"}},closeTooltip:function(){return{type:"CLOSE_TOOLTIP"}},getDatapoint:function(e){return{type:"GET_DATAPOINT",payload:e}}})(Je);function Ye(){var e=Object(q.a)(["\n  font-size: 0.8em;\n  font-weight: normal;\n\tmargin: 0 0 0 auto;\n\talign-self: flex-end;\n"]);return Ye=function(){return e},e}function Qe(){var e=Object(q.a)(["\n\tcolor: #5CBB26;\n\tfont-size: 0.9em;\n"]);return Qe=function(){return e},e}function Ze(){var e=Object(q.a)(["\n\tcolor: #F03800;\n\tfont-size: 0.9em;\n"]);return Ze=function(){return e},e}function et(){var e=Object(q.a)(["\n  margin-right: 10px;\n"]);return et=function(){return e},e}function tt(){var e=Object(q.a)(["\n  margin: 0;\n"]);return tt=function(){return e},e}function nt(){var e=Object(q.a)(["\n  margin-right: 5px;\n"]);return nt=function(){return e},e}function at(){var e=Object(q.a)(["\n\tdisplay: flex;\n\tfont-size: 1.2em;\n\tfont-weight: bold;\n"]);return at=function(){return e},e}function rt(){var e=Object(q.a)(["\n  margin-top: 20px;\n"]);return rt=function(){return e},e}function ct(){var e=Object(q.a)(["\n  margin-top: 100px;\n\ttext-align: center;\n"]);return ct=function(){return e},e}var it=Y.a.div(ct()),lt=Y.a.div(rt()),ot=Y.a.div(at()),ut=Y.a.div(nt()),st=Y.a.p(tt()),pt=Y.a.span(et()),ht=Y.a.span(Ze()),mt=Y.a.span(Qe()),dt=Y.a.div(Ye()),gt=function(e){function t(){return Object(W.a)(this,t),Object(V.a)(this,Object(X.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object($.a)(t,[{key:"componentDidMount",value:function(){this.props.getBitcoin(),this.props.getExchangeRate()}},{key:"renderHKD",value:function(){var e=this.props.exchangeData.exchangeRate.USD_HKD;return"USD"===this.props.settings.defaultCurrency?r.a.createElement(pt,null,"US$",this.props.priceChart.currency[0].price_close):"HKD"===this.props.settings.defaultCurrency?r.a.createElement(pt,null,"HK$",Math.round(this.props.priceChart.currency[0].price_close*e*100)/100," "):void 0}},{key:"renderPriceAndPercentage",value:function(e){var t=e[e.length-1].price_close,n=e[0].price_close,a=Math.round((n-t)/t*1e4)/100;return a>0?r.a.createElement("div",null,r.a.createElement(st,null,"Bitcoin Price(BTC)"),r.a.createElement(st,null,this.renderHKD(),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"11",className:"price-arrow"},r.a.createElement("path",{fill:"#5CBB26",fillRule:"evenodd",d:"M6 0L0 11h12L6 0z"})),r.a.createElement(mt,null,a,"%"))):a<0?r.a.createElement("div",null,r.a.createElement(st,null,"Bitcoin Price(BTC)"),r.a.createElement(st,null,this.renderHKD(),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"11",className:"price-arrow"},r.a.createElement("path",{fill:"#F03800",fillRule:"evenodd",d:"M6 11l6-11H0z"})),r.a.createElement(ht,null,a,"%"))):r.a.createElement("div",null,r.a.createElement(st,null,"Bitcoin Price(BTC)"),r.a.createElement(st,null,this.renderHKD(),a,"%"))}},{key:"render",value:function(){return null===this.props.priceChart.currency?r.a.createElement(it,null,r.a.createElement(De.a,null)):r.a.createElement(lt,null,r.a.createElement(ot,null,r.a.createElement(ut,null,r.a.createElement("img",{src:"https://img.icons8.com/color/48/000000/bitcoin.png",alt:"bitcoin"})),this.renderPriceAndPercentage(this.props.priceChart.currency),r.a.createElement(dt,null,"Last 24h")),r.a.createElement(qe,null))}}]),t}(r.a.Component),ft=Object(l.b)(function(e){return{priceChart:e.priceChart,settings:e.settings,exchangeData:e.exchangeData}},{getBitcoin:function(){return function(){var e=Object(ee.a)(Z.a.mark(function e(t){var n,a,r;return Z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=(new Date).toISOString(),a=n.replace(/([.])\w+/g,""),e.next=4,ae.get("/v1/ohlcv/BTC/USD/history?period_id=1HRS&time_end=".concat(a,"&limit=24"));case 4:r=e.sent,t({type:"FETCH_BITCOIN",payload:r.data});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},getExchangeRate:oe})(gt);function Et(){var e=Object(q.a)(["\n  font-size: 0.8em;\n  font-weight: normal;\n\tmargin: 0 0 0 auto;\n\talign-self: flex-end;\n"]);return Et=function(){return e},e}function bt(){var e=Object(q.a)(["\n\tcolor: #5CBB26;\n\tfont-size: 0.9em;\n"]);return bt=function(){return e},e}function vt(){var e=Object(q.a)(["\n\tcolor: #F03800;\n\tfont-size: 0.9em;\n"]);return vt=function(){return e},e}function Ot(){var e=Object(q.a)(["\n  margin-right: 10px;\n"]);return Ot=function(){return e},e}function yt(){var e=Object(q.a)(["\n  margin: 0;\n"]);return yt=function(){return e},e}function wt(){var e=Object(q.a)(["\n  margin-right: 5px;\n"]);return wt=function(){return e},e}function xt(){var e=Object(q.a)(["\n\tdisplay: flex;\n\tfont-size: 1.2em;\n\tfont-weight: bold;\n"]);return xt=function(){return e},e}function jt(){var e=Object(q.a)(["\n  margin-top: 20px;\n"]);return jt=function(){return e},e}function Dt(){var e=Object(q.a)(["\n  margin-top: 100px;\n\ttext-align: center;\n"]);return Dt=function(){return e},e}var Ct=Y.a.div(Dt()),St=Y.a.div(jt()),kt=Y.a.div(xt()),Tt=Y.a.div(wt()),_t=Y.a.p(yt()),Ht=Y.a.span(Ot()),Nt=Y.a.span(vt()),Bt=Y.a.span(bt()),It=Y.a.div(Et()),Rt=function(e){function t(){return Object(W.a)(this,t),Object(V.a)(this,Object(X.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object($.a)(t,[{key:"componentDidMount",value:function(){this.props.getEthereum(),this.props.getExchangeRate()}},{key:"renderHKD",value:function(){var e=this.props.exchangeData.exchangeRate.USD_HKD;return"USD"===this.props.settings.defaultCurrency?r.a.createElement(Ht,null,"US$",this.props.priceChart.currency[0].price_close):"HKD"===this.props.settings.defaultCurrency?r.a.createElement(Ht,null,"HK$",Math.round(this.props.priceChart.currency[0].price_close*e*100)/100," "):void 0}},{key:"renderPriceAndPercentage",value:function(e){var t=e[e.length-1].price_close,n=e[0].price_close,a=Math.round((n-t)/t*1e4)/100;return a>0?r.a.createElement("div",null,r.a.createElement(_t,null,"Ethereum Price(ETH)"),r.a.createElement(_t,null,this.renderHKD(),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"11",className:"price-arrow"},r.a.createElement("path",{fill:"#5CBB26",fillRule:"evenodd",d:"M6 0L0 11h12L6 0z"})),r.a.createElement(Bt,null,a,"%"))):a<0?r.a.createElement("div",null,r.a.createElement(_t,null,"Ethereum Price(ETH)"),r.a.createElement(_t,null,this.renderHKD(),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"11",className:"price-arrow"},r.a.createElement("path",{fill:"#F03800",fillRule:"evenodd",d:"M6 11l6-11H0z"})),r.a.createElement(Nt,null,a,"%"))):r.a.createElement("div",null,r.a.createElement(_t,null,"Ethereum Price(ETH)"),r.a.createElement(_t,null,this.renderHKD(),a,"%"))}},{key:"render",value:function(){return console.log(this.props),null===this.props.priceChart.currency?r.a.createElement(Ct,null,r.a.createElement(De.a,null)):r.a.createElement(St,null,r.a.createElement(kt,null,r.a.createElement(Tt,null,r.a.createElement("img",{src:"https://img.icons8.com/color/48/000000/ethereum.png",alt:"ethereum"})),this.renderPriceAndPercentage(this.props.priceChart.currency),r.a.createElement(It,null,"Last 24h")),r.a.createElement(qe,null))}}]),t}(r.a.Component),At=Object(l.b)(function(e){return{priceChart:e.priceChart,settings:e.settings,exchangeData:e.exchangeData}},{getEthereum:function(){return function(){var e=Object(ee.a)(Z.a.mark(function e(t){var n,a,r;return Z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=(new Date).toISOString(),a=n.replace(/([.])\w+/g,""),e.next=4,ae.get("/v1/ohlcv/ETH/USD/history?period_id=1HRS&time_end=".concat(a,"&limit=24"));case 4:r=e.sent,t({type:"FETCH_ETHEREUM",payload:r.data});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},getExchangeRate:oe})(Rt);function Pt(){var e=Object(q.a)(["\n  font-size: 0.8em;\n  font-weight: normal;\n\tmargin: 0 0 0 auto;\n\talign-self: flex-end;\n"]);return Pt=function(){return e},e}function Ut(){var e=Object(q.a)(["\n\tcolor: #5CBB26;\n\tfont-size: 0.9em;\n"]);return Ut=function(){return e},e}function Kt(){var e=Object(q.a)(["\n\tcolor: #F03800;\n\tfont-size: 0.9em;\n"]);return Kt=function(){return e},e}function Lt(){var e=Object(q.a)(["\n  margin-right: 10px;\n"]);return Lt=function(){return e},e}function Mt(){var e=Object(q.a)(["\n  margin: 0;\n"]);return Mt=function(){return e},e}function Ft(){var e=Object(q.a)(["\n  margin-right: 5px;\n"]);return Ft=function(){return e},e}function zt(){var e=Object(q.a)(["\n\tdisplay: flex;\n\tfont-size: 1.2em;\n\tfont-weight: bold;\n"]);return zt=function(){return e},e}function Gt(){var e=Object(q.a)(["\n  margin-top: 20px;\n"]);return Gt=function(){return e},e}function Wt(){var e=Object(q.a)(["\n  margin-top: 100px;\n\ttext-align: center;\n"]);return Wt=function(){return e},e}var $t=Y.a.div(Wt()),Vt=Y.a.div(Gt()),Xt=Y.a.div(zt()),Jt=Y.a.div(Ft()),qt=Y.a.p(Mt()),Yt=Y.a.span(Lt()),Qt=Y.a.span(Kt()),Zt=Y.a.span(Ut()),en=Y.a.div(Pt()),tn=function(e){function t(){return Object(W.a)(this,t),Object(V.a)(this,Object(X.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object($.a)(t,[{key:"componentDidMount",value:function(){this.props.getBitcoinCash(),this.props.getExchangeRate()}},{key:"renderHKD",value:function(){var e=this.props.exchangeData.exchangeRate.USD_HKD;return"USD"===this.props.settings.defaultCurrency?r.a.createElement(Yt,null,"US$",this.props.priceChart.currency[0].price_close):"HKD"===this.props.settings.defaultCurrency?r.a.createElement(Yt,null,"HK$",Math.round(this.props.priceChart.currency[0].price_close*e*100)/100," "):void 0}},{key:"renderPriceAndPercentage",value:function(e){var t=e[e.length-1].price_close,n=e[0].price_close,a=Math.round((n-t)/t*1e4)/100;return a>0?r.a.createElement("div",null,r.a.createElement(qt,null,"BitcoinCash Price(BTH)"),r.a.createElement(qt,null,this.renderHKD(),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"11",className:"price-arrow"},r.a.createElement("path",{fill:"#5CBB26",fillRule:"evenodd",d:"M6 0L0 11h12L6 0z"})),r.a.createElement(Zt,null,a,"%"))):a<0?r.a.createElement("div",null,r.a.createElement(qt,null,"BitcoinCash Price(BTH)"),r.a.createElement(qt,null,this.renderHKD(),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"11",className:"price-arrow"},r.a.createElement("path",{fill:"#F03800",fillRule:"evenodd",d:"M6 11l6-11H0z"})),r.a.createElement(Qt,null,a,"%"))):r.a.createElement("div",null,r.a.createElement(qt,null,"BitcoinCash Price(BTH)"),r.a.createElement(qt,null,this.renderHKD(),a,"%"))}},{key:"render",value:function(){return console.log(this.props),null===this.props.priceChart.currency?r.a.createElement($t,null,r.a.createElement(De.a,null)):r.a.createElement(Vt,null,r.a.createElement(Xt,null,r.a.createElement(Jt,null,r.a.createElement("img",{src:"https://i.imgur.com/MJ4hg8G.png",alt:"bitcoin_cash"})),this.renderPriceAndPercentage(this.props.priceChart.currency),r.a.createElement(en,null,"Last 24h")),r.a.createElement(qe,null))}}]),t}(r.a.Component),nn=Object(l.b)(function(e){return{priceChart:e.priceChart,settings:e.settings,exchangeData:e.exchangeData}},{getBitcoinCash:function(){return function(){var e=Object(ee.a)(Z.a.mark(function e(t){var n,a,r;return Z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=(new Date).toISOString(),a=n.replace(/([.])\w+/g,""),e.next=4,ae.get("/v1/ohlcv/BTH/USD/history?period_id=1HRS&time_end=".concat(a,"&limit=24"));case 4:r=e.sent,t({type:"FETCH_BITCOIN_CASH",payload:r.data});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},getExchangeRate:oe})(tn);function an(){var e=Object(q.a)(["\n  padding-bottom: 10px;\n  font-weight: bold;\n  text-decoration: none;\n"]);return an=function(){return e},e}function rn(){var e=Object(q.a)(["\n\tmargin-top: 10px;\t\n\n  @media (min-width: 768px) {\n\t\tvertical-align: middle;\n\t\tmargin-top: 0;\n\t\tmargin-right: 10px;\n\t}\n"]);return rn=function(){return e},e}function cn(){var e=Object(q.a)(["\n\tdisplay: grid;\n\tgrid-gap: 10px;\n\tjustify-items: center;\n\tborder: 1px solid #737373;\n\tborder-radius: 10px;\n\tcolor: #000000;\n\ttext-align: center;\n\ttext-decoration: none;\n\n\t&:hover {\n\t\tbackground-color: #c5c5c5;\n\t}\n\n\t@media (min-width: 768px) {\n\t\tdisplay: block;\n\t\tjustify-items: initial;\n\t\tpadding: 10px 0;\n\t}\n"]);return cn=function(){return e},e}function ln(){var e=Object(q.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr 1fr;\n\tgrid-gap: 5px;\n\n\t@media (min-width: 768px) {\n\t\twidth: 70%;\n\t\tmargin: 0 auto;\n\t}\n"]);return ln=function(){return e},e}function on(){var e=Object(q.a)(["\n\tfill: rgba(0, 0, 0, 0.54) !important;\n\tmargin-right: 10px;\n"]);return on=function(){return e},e}function un(){var e=Object(q.a)(["\n\tdisplay: flex;\n\tbackground-color: #FFCEC6;\n\tcolor: rgba(0, 0, 0, 0.54);\n\ttext-align: center;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 20px;\n"]);return un=function(){return e},e}var sn=Y.a.div(un()),pn=Object(Y.a)(We.a)(on()),hn=Y.a.div(ln()),mn=Object(Y.a)(s.b)(cn()),dn=Y.a.img(rn()),gn=Y.a.span(an()),fn=Object(l.b)(function(e){return{auth:e.auth,priceChart:e.priceChart}},{signIn:le})(function(e){return null===e.auth.isSignedIn||!1===e.auth.isSignedIn?r.a.createElement(sn,null,r.a.createElement(pn,null),"Please login in your Google account to access the price chart"):r.a.createElement("div",{className:"content"},r.a.createElement(hn,null,r.a.createElement(mn,{to:"/price-chart/bitcoin"},r.a.createElement(dn,{src:"https://img.icons8.com/color/48/000000/bitcoin.png"}),r.a.createElement(gn,null,"Bitcoin")),r.a.createElement(mn,{to:"/price-chart/ethereum"},r.a.createElement(dn,{src:"https://img.icons8.com/color/48/000000/ethereum.png"}),r.a.createElement(gn,null,"Ethereum")),r.a.createElement(mn,{to:"/price-chart/bitcoin-cash"},r.a.createElement(dn,{src:"https://i.imgur.com/MJ4hg8G.png"}),r.a.createElement(gn,null,"BitcoinCash"))),r.a.createElement(G.c,null,r.a.createElement(G.a,{path:"/",exact:!0}),r.a.createElement(G.a,{path:"/price-chart/bitcoin",component:ft}),r.a.createElement(G.a,{path:"/price-chart/ethereum",component:At}),r.a.createElement(G.a,{path:"/price-chart/bitcoin-cash",component:nn})))}),En=n(110),bn={option:function(e){return Object(h.a)({},e,{backgroundColor:"#FFFFFF",color:"#000000"})}},vn=[{value:"USD",label:"USD"},{value:"HKD",label:"HKD"}],On=Object(l.b)(function(e){return{settings:e.settings}},{setHKD:function(){return{type:"SET_HKD"}},setUSD:function(){return{type:"SET_USD"}}})(function(e){return r.a.createElement("div",null,r.a.createElement("p",null,"Default Currency"),r.a.createElement(En.a,{styles:bn,options:vn,onChange:function(t){e.settings.defaultCurrency!==t.value&&("USD"===t.value?e.setUSD():e.setHKD())},defaultValue:{value:e.settings.defaultCurrency,label:e.settings.defaultCurrency}}))}),yn=function(e){function t(){var e,n;Object(W.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(V.a)(this,(e=Object(X.a)(t)).call.apply(e,[this].concat(r)))).onAuthChange=function(e){e?n.props.signIn():n.props.signOut()},n.onClickSignIn=function(){n.auth.signIn()},n.onClickSignOut=function(){n.auth.signOut()},n}return Object(J.a)(t,e),Object($.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",function(){window.gapi.client.init({clientId:"839328378204-jjqt2aer47ltfp46b7fi3do4r7g7o3df.apps.googleusercontent.com",scope:"email"}).then(function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)})})}},{key:"renderButton",value:function(){return null===this.props.isSignedIn?null:this.props.isSignedIn?r.a.createElement(H.a,{onClick:this.onClickSignOut,button:!0,key:"sign-out"},r.a.createElement(N.a,null,r.a.createElement(z.a,null)),r.a.createElement(B.a,{primary:"Sign Out"})):r.a.createElement(H.a,{onClick:this.onClickSignIn,button:!0,key:"sign-in"},r.a.createElement(N.a,null,r.a.createElement(z.a,null)),r.a.createElement(B.a,{primary:"Sign In"}))}},{key:"render",value:function(){return r.a.createElement(O.a,null,this.renderButton())}}]),t}(r.a.Component),wn=Object(l.b)(function(e){return{isSignedIn:e.auth.isSignedIn}},{signIn:le,signOut:function(){return{type:"SIGN_OUT"}}})(yn),xn=Object(g.a)(function(e){return{root:{display:"flex"},appBar:{backgroundColor:"rgba(0, 0, 0, 0.54)",boxShadow:"none",zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(m.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(h.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)},link:{color:"initial",textDecoration:"none"},googleAuth:{padding:0}}});var jn=function(){var e,t,n=xn(),a=Object(f.a)(),c=r.a.useState(!1),i=Object(p.a)(c,2),l=i[0],o=i[1];return r.a.createElement("div",{className:n.root},r.a.createElement(y.a,null),r.a.createElement(b.a,{position:"fixed",className:Object(d.a)(n.appBar,Object(m.a)({},n.appBarShift,l))},r.a.createElement(v.a,null,r.a.createElement(j.a,{color:"inherit","aria-label":"Open drawer",onClick:function(){o(!0)},edge:"start",className:Object(d.a)(n.menuButton,Object(m.a)({},n.hide,l))},r.a.createElement(C.a,null)),r.a.createElement(w.a,{variant:"h6",noWrap:!0},"Cryptocurrency Dashboard"))),r.a.createElement(E.a,{variant:"permanent",className:Object(d.a)(n.drawer,(e={},Object(m.a)(e,n.drawerOpen,l),Object(m.a)(e,n.drawerClose,!l),e)),classes:{paper:Object(d.a)((t={},Object(m.a)(t,n.drawerOpen,l),Object(m.a)(t,n.drawerClose,!l),t))},open:l},r.a.createElement("div",{className:n.toolbar},r.a.createElement(j.a,{onClick:function(){o(!1)}},"rtl"===a.direction?r.a.createElement(_.a,null):r.a.createElement(k.a,null))),r.a.createElement(x.a,null),r.a.createElement(s.b,{to:"/",className:n.link},r.a.createElement(O.a,null,["Home"].map(function(e){return r.a.createElement(H.a,{button:!0,key:e},r.a.createElement(N.a,null,r.a.createElement(R.a,null)),r.a.createElement(B.a,{primary:e}))}))),r.a.createElement(s.b,{to:"/table",className:n.link},r.a.createElement(O.a,null,["Table"].map(function(e){return r.a.createElement(H.a,{button:!0,key:e},r.a.createElement(N.a,null,r.a.createElement(K.a,null)),r.a.createElement(B.a,{primary:e}))}))),r.a.createElement(s.b,{to:"/price-chart",className:n.link},r.a.createElement(O.a,null,["Price Chart"].map(function(e){return r.a.createElement(H.a,{button:!0,key:e},r.a.createElement(N.a,null,r.a.createElement(P.a,null)),r.a.createElement(B.a,{primary:e}))}))),r.a.createElement(x.a,null),r.a.createElement(s.b,{to:"/googleOAuth2",className:n.link},["Login/Logout"].map(function(e){return r.a.createElement(H.a,{button:!0,key:e},r.a.createElement(N.a,null,r.a.createElement(z.a,null)),r.a.createElement(B.a,{primary:e}))})),r.a.createElement(s.b,{to:"/settings",className:n.link},r.a.createElement(O.a,null,["Settings"].map(function(e){return r.a.createElement(H.a,{button:!0,key:e},r.a.createElement(N.a,null,r.a.createElement(M.a,null)),r.a.createElement(B.a,{primary:e}))})))),r.a.createElement("main",{className:n.content},r.a.createElement("div",{className:n.toolbar}),r.a.createElement(G.c,null,r.a.createElement(G.a,{path:"/",exact:!0,component:we}),r.a.createElement(G.a,{path:"/price-chart",component:fn}),r.a.createElement(G.a,{path:"/table",component:ze}),r.a.createElement(G.a,{path:"/settings",component:On}),r.a.createElement(G.a,{path:"/googleOAuth2",component:wn}))))},Dn=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(jn,null)))},Cn={isSignedIn:null},Sn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Cn;switch((arguments.length>1?arguments[1]:void 0).type){case"SIGN_IN":return Object(h.a)({},e,{isSignedIn:!0});case"SIGN_OUT":return Object(h.a)({},e,{isSignedIn:!1});default:return e}},kn={currency:null,showTooltip:!1,datapoint:null},Tn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{defaultCurrency:"USD"};switch((arguments.length>1?arguments[1]:void 0).type){case"SET_HKD":return Object(h.a)({},e,{defaultCurrency:"HKD"});case"SET_USD":return Object(h.a)({},e,{defaultCurrency:"USD"});default:return e}},_n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{exchangeRate:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_EXCHANGE_RATE":return Object(h.a)({},e,{exchangeRate:t.payload});default:return e}},Hn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{tableData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TABLE_ARRAY":return Object(h.a)({},e,{tableData:t.payload});default:return e}},Nn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{newsData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_NEWS":return Object(h.a)({},e,{newsData:t.payload});default:return e}},Bn=Object(o.c)({auth:Sn,priceChart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BITCOIN":case"FETCH_ETHEREUM":case"FETCH_BITCOIN_CASH":return Object(h.a)({},e,{currency:t.payload});case"SHOW_TOOLTIP":return Object(h.a)({},e,{showTooltip:!0});case"CLOSE_TOOLTIP":return Object(h.a)({},e,{showTooltip:!1});case"GET_DATAPOINT":return Object(h.a)({},e,{datapoint:t.payload});default:return e}},settings:Tn,exchangeData:_n,table:Hn,newsData:Nn}),In=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,Rn=Object(o.e)(Bn,In(Object(o.a)(u.a)));i.a.render(r.a.createElement(l.a,{store:Rn},r.a.createElement(Dn,null)),document.querySelector("#root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.2816839d.chunk.js.map