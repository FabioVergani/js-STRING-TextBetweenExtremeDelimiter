String.BetweenExtremeDelimiters=function(s,a,b){var j,i;return (i=s.indexOf(a))>=0&&(j=s.lastIndexOf(b))?s.substring(i+1+a.length,j):''};

function TextBetweenExtremeDelimiter(s,a,b){var j,i;return (i=s.indexOf(a))>=0&&(j=s.lastIndexOf(b))?s.substring(i+1+a.length,j):''};

/*
The difference is in the second argument. 
into substring is the index to stop at (but not include), 
into substr is the maximum length to return.
(\[object\s+)(.*)(\s*\])

*/


function TextBetweenExtremeDelimiter(s,a,b){var r='',i=s.indexOf(a);if(i>=0){var j=s.lastIndexOf(b);if(j>0){r=s.substring(i+1+a.length,j)}};return r};
//
console.clear();
[" [object   Array]",
"[object	Array33]",
"   [object Array-33]",
"[object Array super]",
"[object Array super-33]",
"[object Array 33]   ",
"[object Array 33 super ]",
"[object Ar[ray 3]3]   ",
].forEach(function(x,j){
var t=TextBetweenExtremeDelimiter(x,'[object',']');
console.log(t);
console.log(t.trim());
});




