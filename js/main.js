$( ".escolha-download .ler-jornal .link-download a" ).click(function() {
	$( ".escolha-download .ler-jornal .link-download a span" ).removeClass();
	$( ".escolha-download .ler-jornal .link-download a span" ).addClass("icon-baixado");
	$( ".escolha-download .ler-jornal .link-download a i" ).text("Baixado");
});

$( ".escolha-download .ler-jornal .link-ler a" ).click(function() {
	$( ".escolha-download .ler-jornal .chamar-lista-acoes" ).removeClass("hidden");
});

$( ".ordenacao.publicacoes .item-selecionado" ).click(function(e) {
	e.preventDefault();
	$( ".ordenacao.publicacoes .lista-selecionar" ).removeClass("hidden");
	$( ".ordenacao.publicacoes .lista-ordem" ).addClass("ativo");
});

$( ".ordenacao.data .item-selecionado" ).click(function(e) {
	e.preventDefault();
	$( ".ordenacao.data .lista-selecionar" ).removeClass("hidden");
	$( ".ordenacao.data .lista-ordem" ).addClass("ativo");
});

$( ".ordenacao.publicacoes .lista-selecionar ul li a" ).click(function() {
	$(".ordenacao.publicacoes .lista-selecionar ul li a").removeClass("ativo");
	$(this).addClass("ativo");
});

$( ".ordenacao.data .lista-selecionar ul li a" ).click(function() {
	$(".ordenacao.data .lista-selecionar ul li a").removeClass("ativo");
	$(this).addClass("ativo");
});
$(".ordenacao.publicacoes .lista-selecionar a").click(function(e) {
	e.preventDefault();
	var trocaTexto = $(this).text();
	$(".ordenacao.publicacoes .item-selecionado a").text(trocaTexto);
	$( ".ordenacao.publicacoes .lista-selecionar" ).addClass("hidden");
	$( ".ordenacao.publicacoes .lista-ordem" ).removeClass("ativo");
});

$(".ordenacao.data .lista-selecionar a").click(function(e) {
	e.preventDefault();
	var trocaTexto = $(this).text();
	$(".ordenacao.data .item-selecionado a").text(trocaTexto);
	$( ".ordenacao.data .lista-selecionar" ).addClass("hidden");
	$( ".ordenacao.data .lista-ordem" ).removeClass("ativo");
});