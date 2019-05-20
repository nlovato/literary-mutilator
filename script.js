//Change font color
document.getElementById("one").style.color ="#5b5fff";
document.getElementById("two").style.color ="#df80ff";
document.getElementById("three").style.color ="#eb5368";

//change font style
document.getElementById("one").style.fontFamily = "fantasy";
document.getElementById("two").style.fontFamily = "cursive";
document.getElementById("three").style.fontFamily = "monospace";

//change background color
document.getElementById("one").style.backgroundColor = "#ffffb4";
document.getElementById("two").style.backgroundColor = "#ffffb4";
document.getElementById("three").style.backgroundColor = "#ffffb4";

//replace and switch taco with yum
function () {
	let tacoPara = document.getElementById("three");
	let regex = /taco/;
	tacoPara.innerHTML = tacoPara.innerHTML.replace(regex, 'YUM')
}