
//AQUI ESTAMOS ALTERNANDO A MARCACAO DOS ITENS NA LISTA.
//A MANEIRA MAIS SIMPLES E EFICAZ É CRIAR UMA CLASSE. 

$("ul").on("click","li", function(){

    $(this).toggleClass("selecao");
    // if($(this).css("color") === "rgb(128, 128, 128)"){
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //     })
    // }else{
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through"
    //     });
    // }
    
});

    //AQUI A LOGICA PARA DELETAR ITENS DA LISTA
$("ul").on("click", "span", function(event){
    $(this).parent("li").fadeOut(500,function(){
        $(this).remove();
    })
    event.stopPropagation();

})

    //ADICIONANDO NOVOS ITENS NA LISTA
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var novaTarefa = $(this).val();
        var adicionaTarefa = "<li><span><i class='fa fa-trash'></i></span> " + novaTarefa + "</li>";
        $("ul").append(adicionaTarefa);
        $("input[type='text']").val("");
    }
})

    //ESCONDENDO O INPUT QUANDO CLICAMOS NO ICONE PLUS
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle(300,function(){

    });
});