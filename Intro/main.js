var banners = [
	"Espero que esteja funcionando",
	"Está funcionando!!",
	"Praise the sun \\o/"
	];

var bannerAtual = -1;

function trocaBanner() {
	bannerAtual = (bannerAtual + 1);
	if (bannerAtual>2){
		bannerAtual=0;
	}
	document.querySelector('h2#mensagem').textContent = banners[bannerAtual];
}

setInterval(trocaBanner, 2000);
