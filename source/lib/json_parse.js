// https://raw.github.com/douglascrockford/JSON-js/master/json_parse.js
var json_parse=function(){var h,a,l={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},k,e=function(a){throw{name:"SyntaxError",message:a,at:h,text:k};},c=function(b){b&&b!==a&&e("Expected '"+b+"' instead of '"+a+"'");a=k.charAt(h);h+=1;return a},m=function(){var b;b="";"-"===a&&(b="-",c("-"));for(;"0"<=a&&"9">=a;)b+=a,c();if("."===a)for(b+=".";c()&&"0"<=a&&"9">=a;)b+=a;if("e"===a||"E"===a){b+=a;c();if("-"===a||"+"===a)b+=a,c();for(;"0"<=a&&"9">=a;)b+=a,c()}b=+b;if(isFinite(b))return b; e("Bad number")},n=function(){var b,g,f="",d;if('"'===a)for(;c();){if('"'===a)return c(),f;if("\\"===a)if(c(),"u"===a){for(g=d=0;4>g;g+=1){b=parseInt(c(),16);if(!isFinite(b))break;d=16*d+b}f+=String.fromCharCode(d)}else if("string"===typeof l[a])f+=l[a];else break;else f+=a}e("Bad string")},d=function(){for(;a&&" ">=a;)c()},p=function(){switch(a){case "t":return c("t"),c("r"),c("u"),c("e"),!0;case "f":return c("f"),c("a"),c("l"),c("s"),c("e"),!1;case "n":return c("n"),c("u"),c("l"),c("l"),null}e("Unexpected '"+ a+"'")},j;j=function(){d();switch(a){case "{":var b;a:{var g={};if("{"===a){c("{");d();if("}"===a){c("}");b=g;break a}for(;a;){b=n();d();c(":");Object.hasOwnProperty.call(g,b)&&e('Duplicate key "'+b+'"');g[b]=j();d();if("}"===a){c("}");b=g;break a}c(",");d()}}e("Bad object");b=void 0}return b;case "[":a:{b=[];if("["===a){c("[");d();if("]"===a){c("]");break a}for(;a;){b.push(j());d();if("]"===a){c("]");break a}c(",");d()}}e("Bad array");b=void 0}return b;case '"':return n();case "-":return m();default:return"0"<= a&&"9">=a?m():p()}};return function(b,c){var f;k=b;h=0;a=" ";f=j();d();a&&e("Syntax error");return"function"===typeof c?function q(a,b){var d,f,e=a[b];if(e&&"object"===typeof e)for(d in e)Object.prototype.hasOwnProperty.call(e,d)&&(f=q(e,d),void 0!==f?e[d]=f:delete e[d]);return c.call(a,b,e)}({"":f},""):f}}();