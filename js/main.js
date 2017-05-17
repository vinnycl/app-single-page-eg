$( ".ler-jornal .link-download a" ).click(function() {
	$( ".ler-jornal .link-download a span" ).removeClass();
	$( ".ler-jornal .link-download a span" ).addClass("icon-baixado");
	$( ".ler-jornal .link-download a i" ).text("Baixado");
});

$( ".ler-jornal .link-ler a" ).click(function() {
	$( ".ler-jornal .chamar-lista-acoes" ).removeClass("hidden");
});