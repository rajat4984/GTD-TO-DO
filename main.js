(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{Q:()=>ke,X:()=>xe});class t{constructor(e,t="",n,r){this.title=e,this.desc=t,this.id=n,this.dueDate=r}}function n(e){let t=e.array;const n=document.querySelectorAll(".todo-icons > .bi-trash"),r=document.querySelectorAll(".todo-label"),a=(n,r)=>{t.splice(r,1),localStorage[e.name]=JSON.stringify(t),n.remove()},o=e=>{const t=document.querySelector(".todo-list");let n=e.target.parentNode.previousElementSibling.parentNode,r=Array.from(t.children).indexOf(n);a(n,r)},i=e=>{const t=document.querySelector(".todo-list");let n=e.target.parentNode.parentNode.parentNode,r=Array.from(t.children).indexOf(n);a(n,r)};n.forEach((e=>{e.addEventListener("click",o)})),r.forEach((e=>{e.addEventListener("click",i)}))}function r(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function a(e){return r(1,arguments),e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)}function o(e){r(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function i(e){if(r(1,arguments),!a(e)&&"number"!=typeof e)return!1;var t=o(e);return!isNaN(Number(t))}var u={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};const c=function(e,t,n){var r,a=u[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function s(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}var d={date:s({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:s({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:s({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var l={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function m(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=a.width?String(a.width):o;r=e.formattingValues[i]||e.formattingValues[o]}else{var u=e.defaultWidth,c=a.width?String(a.width):e.defaultWidth;r=e.values[c]||e.values[u]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function h(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(a);if(!o)return null;var i,u=o[0],c=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(c)?g(c,(function(e){return e.test(u)})):f(c,(function(e){return e.test(u)}));i=e.valueCallback?e.valueCallback(s):s,i=n.valueCallback?n.valueCallback(i):i;var d=t.slice(u.length);return{value:i,rest:d}}}function f(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function g(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}var y;const v={code:"en-US",formatDistance:c,formatLong:d,formatRelative:function(e,t,n,r){return l[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:m({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:m({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:m({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:m({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:m({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(y={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(y.matchPattern);if(!n)return null;var r=n[0],a=e.match(y.parsePattern);if(!a)return null;var o=y.valueCallback?y.valueCallback(a[0]):a[0];o=t.valueCallback?t.valueCallback(o):o;var i=e.slice(r.length);return{value:o,rest:i}}),era:h({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:h({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:h({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:h({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:h({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function w(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function b(e,t){r(2,arguments);var n=o(e).getTime(),a=w(t);return new Date(n+a)}function p(e,t){r(2,arguments);var n=w(t);return b(e,-n)}var S=864e5;function T(e){r(1,arguments);var t=1,n=o(e),a=n.getUTCDay(),i=(a<t?7:0)+a-t;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function M(e){r(1,arguments);var t=o(e),n=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var i=T(a),u=new Date(0);u.setUTCFullYear(n,0,4),u.setUTCHours(0,0,0,0);var c=T(u);return t.getTime()>=i.getTime()?n+1:t.getTime()>=c.getTime()?n:n-1}function C(e){r(1,arguments);var t=M(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var a=T(n);return a}var k=6048e5;function x(e,t){r(1,arguments);var n=t||{},a=n.locale,i=a&&a.options&&a.options.weekStartsOn,u=null==i?0:w(i),c=null==n.weekStartsOn?u:w(n.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=o(e),d=s.getUTCDay(),l=(d<c?7:0)+d-c;return s.setUTCDate(s.getUTCDate()-l),s.setUTCHours(0,0,0,0),s}function D(e,t){r(1,arguments);var n=o(e),a=n.getUTCFullYear(),i=t||{},u=i.locale,c=u&&u.options&&u.options.firstWeekContainsDate,s=null==c?1:w(c),d=null==i.firstWeekContainsDate?s:w(i.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(a+1,0,d),l.setUTCHours(0,0,0,0);var m=x(l,t),h=new Date(0);h.setUTCFullYear(a,0,d),h.setUTCHours(0,0,0,0);var f=x(h,t);return n.getTime()>=m.getTime()?a+1:n.getTime()>=f.getTime()?a:a-1}function q(e,t){r(1,arguments);var n=t||{},a=n.locale,o=a&&a.options&&a.options.firstWeekContainsDate,i=null==o?1:w(o),u=null==n.firstWeekContainsDate?i:w(n.firstWeekContainsDate),c=D(e,t),s=new Date(0);s.setUTCFullYear(c,0,u),s.setUTCHours(0,0,0,0);var d=x(s,t);return d}var E=6048e5;function U(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const P={y:function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return U("yy"===t?r%100:r,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):U(n+1,2)},d:function(e,t){return U(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return U(e.getUTCHours()%12||12,t.length)},H:function(e,t){return U(e.getUTCHours(),t.length)},m:function(e,t){return U(e.getUTCMinutes(),t.length)},s:function(e,t){return U(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,r=e.getUTCMilliseconds();return U(Math.floor(r*Math.pow(10,n-3)),t.length)}};var N="midnight",O="noon",j="morning",L="afternoon",W="evening",Y="night",A={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return P.y(e,t)},Y:function(e,t,n,r){var a=D(e,r),o=a>0?a:1-a;return"YY"===t?U(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):U(o,t.length)},R:function(e,t){return U(M(e),t.length)},u:function(e,t){return U(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return U(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return U(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return P.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return U(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,a){var i=function(e,t){r(1,arguments);var n=o(e),a=x(n,t).getTime()-q(n,t).getTime();return Math.round(a/E)+1}(e,a);return"wo"===t?n.ordinalNumber(i,{unit:"week"}):U(i,t.length)},I:function(e,t,n){var a=function(e){r(1,arguments);var t=o(e),n=T(t).getTime()-C(t).getTime();return Math.round(n/k)+1}(e);return"Io"===t?n.ordinalNumber(a,{unit:"week"}):U(a,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):P.d(e,t)},D:function(e,t,n){var a=function(e){r(1,arguments);var t=o(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=t.getTime(),i=n-a;return Math.floor(i/S)+1}(e);return"Do"===t?n.ordinalNumber(a,{unit:"dayOfYear"}):U(a,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return U(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return U(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return U(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?O:0===a?N:a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?W:a>=12?L:a>=4?j:Y,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return P.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):P.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):U(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):U(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):P.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):P.s(e,t)},S:function(e,t){return P.S(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return F(a);case"XXXX":case"XX":return I(a);default:return I(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return F(a);case"xxxx":case"xx":return I(a);default:return I(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+H(a,":");default:return"GMT"+I(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+H(a,":");default:return"GMT"+I(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return U(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return U((r._originalDate||e).getTime(),t.length)}};function H(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=t||"";return n+String(a)+i+U(o,2)}function F(e,t){return e%60==0?(e>0?"-":"+")+U(Math.abs(e)/60,2):I(e,t)}function I(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+U(Math.floor(a/60),2)+n+U(a%60,2)}const z=A;function J(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}}function Q(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}}var X={p:Q,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return J(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",J(a,t)).replace("{{time}}",Q(o,t))}};const G=X;function B(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var R=["D","DD"],$=["YY","YYYY"];function _(e){return-1!==R.indexOf(e)}function V(e){return-1!==$.indexOf(e)}function K(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var Z=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ee=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,te=/^'([^]*?)'?$/,ne=/''/g,re=/[a-zA-Z]/;function ae(e,t,n){r(2,arguments);var a=String(t),u=n||{},c=u.locale||v,s=c.options&&c.options.firstWeekContainsDate,d=null==s?1:w(s),l=null==u.firstWeekContainsDate?d:w(u.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=c.options&&c.options.weekStartsOn,h=null==m?0:w(m),f=null==u.weekStartsOn?h:w(u.weekStartsOn);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!c.localize)throw new RangeError("locale must contain localize property");if(!c.formatLong)throw new RangeError("locale must contain formatLong property");var g=o(e);if(!i(g))throw new RangeError("Invalid time value");var y=B(g),b=p(g,y),S={firstWeekContainsDate:l,weekStartsOn:f,locale:c,_originalDate:g},T=a.match(ee).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,G[t])(e,c.formatLong,S):e})).join("").match(Z).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return oe(n);var a=z[r];if(a)return!u.useAdditionalWeekYearTokens&&V(n)&&K(n,t,e),!u.useAdditionalDayOfYearTokens&&_(n)&&K(n,t,e),a(b,n,c.localize,S);if(r.match(re))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return T}function oe(e){return e.match(te)[1].replace(ne,"'")}function ie(e){let t=e.array;const n=document.querySelectorAll(".todo-icons > .bi-pencil"),r=n=>{const r=document.querySelector(".edit-modal-content"),a=document.querySelector(".edit-modal-title-input"),o=document.querySelector(".edit-modal-desc-input"),i=document.querySelector(".edit-modal-date-input"),u=document.querySelector(".edit-modal-todo-btn > button"),c=document.querySelector(".edit-modal-cross-icon"),s=document.querySelector(".todo-list");r.style.display="flex";let d=ae(new Date,"yyyy-MM-dd");i.setAttribute("min",d);let l=n.target.parentNode.previousElementSibling.parentNode,m=Array.from(s.children).indexOf(l);let h=(e=>{let t=e.split("-"),n=t[0];return t[0]=t[2],t[2]=n,t=t.toString(),t=t.replace(/,/g,"-"),t})(t[m].dueDate);a.value=t[m].title,o.value=t[m].desc,i.value=h;const f=()=>{let n=ce(i.value);r.style.display="none",t[m].title=a.value,t[m].desc=o.value,t[m].dueDate=n,localStorage[e.name]=JSON.stringify(t),ue(e),u.removeEventListener("click",f)};u.addEventListener("click",f),c.addEventListener("click",(()=>{r.style.display="none",u.removeEventListener("click",f)}))};n.forEach((e=>{e.addEventListener("click",r)}))}function ue(e){let t=e.array;const r=document.querySelector(".todo-list");r.innerHTML="";for(let e=0;e<t.length;e++)r.innerHTML+=` <div class="todo-item">\n    <div class="todo-info">\n      <div class="todo-title">\n        <input class="todo-checkbox" type="checkbox" id=${t[e].id} />\n        <label class="todo-label" for=${t[e].id}> ${t[e].title}</label>\n        <div class="todo-due-date">${t[e].dueDate}</div>\n      </div>\n      <div class="todo-desc">${t[e].desc}</div>\n    </div>\n    <div class="todo-icons">\n      <i class="bi bi-pencil todo-icon-item"></i>\n      <i class="bi bi-trash todo-icon-item"></i>\n    </div>\n  </div>`;n(e),ie(e)}const ce=e=>{let t=e.split("-"),n=t[0];return t[0]=t[2],t[2]=n,t=t.toString(),t=t.replace(/,/g,"-"),t};class se{constructor(e,t){this.name=e,this.array=[],this.projectId=t}addInArray(e){e.push(this)}}function de(e){const t=document.querySelector(".project-list");t.innerHTML="";for(let n=0;n<e.length;n++)t.innerHTML+=0===n?`<p id=${e[n].projectId} class="project-name">\n            <span class="bullet-points">&#9679;</span>\n            <span class="project-name-text"> ${e[n].name} </span>\n            </p>`:`<p id=${e[n].projectId} class="project-name">\n        <span class="bullet-points">&#9679;</span>\n        <span class="project-name-text"> ${e[n].name} </span>\n          <i class="bi bi-trash project-name-btn"></i>\n        </p>`;document.querySelectorAll(".project-name-text").forEach((e=>{e.addEventListener("click",ke.bind(e))}));document.querySelectorAll(".project-name-btn").forEach((e=>{e.addEventListener("click",xe.bind(e))}))}const le=document.querySelector(".new-todo-btn"),me=document.querySelector(".new-project-btn"),he=document.querySelector(".todo-heading"),fe=document.querySelectorAll(".project-name-text"),ge=document.querySelector(".todo-heading-date"),ye=document.querySelectorAll(".project-name-btn"),ve=document.querySelector(".project-list"),we=document.querySelector(".hamburger"),be=document.querySelector(".project-section");let pe=[];const Se=new se("Today",pe.length);Se.addInArray(pe),localStorage.getItem("Today")||localStorage.setItem(Se.name,JSON.stringify(Se.array)),localStorage.getItem("projectsArray")||localStorage.setItem("projectsArray",JSON.stringify(pe));let Te=JSON.parse(localStorage.getItem("projectsArray"));pe=Te;let Me=Se,Ce=localStorage.getItem(Me.name);Me.array=JSON.parse(Ce),ge.textContent=ae(new Date,"dd-MM-yyyy"),ue(Me),n(Me),ie(Me);const ke=e=>{let t=e.target.parentNode,r=Array.from(ve.children).indexOf(t);he.innerText=pe[r].name,Me=pe[r];let a=localStorage.getItem(Me.name);Me.array=JSON.parse(a),ge.innerText=ae(new Date,"dd/MM/yyyy"),we.classList.remove("active"),be.classList.remove("active"),ue(Me),n(Me),ie(Me)},xe=e=>{let t=e.target.parentNode,n=Array.from(ve.children).indexOf(t),r=pe[n];pe.splice(n,1),localStorage.setItem("projectsArray",JSON.stringify(pe)),localStorage.removeItem(r.name),de(pe)};de(pe),le.addEventListener("click",(()=>{!function(e){const n=document.querySelector(".modal-content"),r=document.querySelector(".modal-title-input"),a=document.querySelector(".modal-desc-input"),o=document.querySelector(".modal-todo-btn > button"),i=document.querySelector(".modal-cross-icon"),u=document.querySelector(".modal-date-input");let c=localStorage.getItem(e.name);e.array=JSON.parse(c);let s=e.array;n.style.display="flex";let d=ae(new Date,"yyyy-MM-dd");u.setAttribute("min",d);const l=()=>{""===u.value&&(u.value=d);let n=ce(u.value);if(""===r.value)return;let o=new t(r.value,a.value,s.length,n);s.push(o),ue(e),localStorage[e.name]=JSON.stringify(s),r.value=a.value=u.value=""};o.addEventListener("click",l),i.addEventListener("click",(()=>{n.style.display="none",o.removeEventListener("click",l)}))}(Me)})),me.addEventListener("click",(()=>{we.classList.remove("active"),be.classList.remove("active"),function(e){const t=document.querySelector(".project-modal-content"),n=document.querySelector(".project-modal-cross-icon"),r=document.querySelector(".project-modal-title-input"),a=document.querySelector(".project-modal-add-btn");t.style.display="flex";const o=()=>{if(""===r.value)return;t.style.display="none";const n=new se(r.value,e.length);n.addInArray(e),localStorage.setItem("projectsArray",JSON.stringify(e)),localStorage.setItem(n.name,JSON.stringify(n.array)),de(e),a.removeEventListener("click",o)};r.value="",a.addEventListener("click",o),n.addEventListener("click",(()=>{t.style.display="none",a.removeEventListener("click",o)}))}(pe)})),fe.forEach((e=>{e.addEventListener("click",ke.bind(e))})),ye.forEach((e=>{e.addEventListener("click",xe.bind(e))})),we.addEventListener("click",(()=>{we.classList.toggle("active"),be.classList.toggle("active")}))})();