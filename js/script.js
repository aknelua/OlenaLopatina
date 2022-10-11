const select = document.querySelector('select');
const allLang = ['en', 'ua'];
select.addEventListener('change', changeURLLanguage);
function changeURLLanguage() {
	let lang = select.value;
	location.href = window.location.pathname + '#' + lang;
	location.reload();
}
function changeLenguege() {
	let hash = window.location.hash;
	hash = hash.substring(1);
	if (!allLang.includes(hash)) {
		location.href = window.location.pathname + '#en';
		location.reload();
	}
	select.value = hash;
	for (let key in langArr) {
		let elem = document.querySelector('.lng-' + key);
		if (elem) {
			elem.innerHTML = langArr[key][hash];
		}
	}
}
changeLenguege();

const smoothLinks = document.querySelectorAll("a[href^='#']");
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute("href");

        document.querySelector(id).scrollIntoView({
            behavior: "smooth",
            block: "end"
        });
    });
};

//const sloganReload = document.querySelector("intro_slogan");
// sloganReload.onclick = function () {
// 	location.reload();
// }
// sloganReload.addEventListener("click", , function () {
// 	location.reload()
// });
