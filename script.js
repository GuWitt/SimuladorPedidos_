function calcular(){
    //=============================
    // 1. pegar os elementos da tela
    //=============================
    
    // Aqui pegamos cada checkbox por id
    let hamburguer = document.getElementById("hamburguer")
    let batata = document.getElementById("batata")
    let refrigerante = document.getElementById("refrigerante")
    let nuggets = document.getElementById("nuggets")
    let sorvete = document.getElementById("sorvete")
    let molhos = document.getElementById("Molhos")
    //=============================
    // 2. variaveis iniciais
    //=============================
    // total começa com 0
    let total = 0
    // string para guardar os itens escolhidos
    let itens = ""
    //=============================
    // 3. verificar cada produto
    //=============================
    // se o checkbox estiver marcado (true)
    if(hamburguer.checked){
        total = total + 32.50
        itens = itens + "Hambúrger 🍔<br>"
    }
    
    if(batata.checked){
        total = total + 16.50
        itens = itens + "Batata-frita 🍟<br>"
    }

    if(refrigerante.checked){
        total = total + 12.50
        itens = itens + "Refrigerante 🥤<br>"
    }

    if(nuggets.checked){
        total = total + 16.50
        itens = itens + "Nuggets 🍟<br>"
    }

    if(sorvete.checked){
        total = total + 12.50
        itens = itens + "Sorvete 🍦<br>"
    }

    if(molhos.checked){
        total = total + 2
        itens = itens + "Molho 🥫<br>"
    }

    //=================================
    // 4. pegar div do resultado
    //=================================
    let resultado = document.getElementById("resultado")

    //=================================
    // 5. validação 
    //================================
    // se nao escolheu nada
    if(total === 0){
        resultado.innerHTML = "Escolha pelo menos um item!"
        return // para função aqui
    }
    
    //=================================
    //6. desconto
    //=================================

    let subtotal = total
    let desconto = 0
    //se o valor for maior ou igual a 50, aaplicamos o desconto de 10%
    if(subtotal >= 50){
        desconto = subtotal * 0.10 // 10%
    }
    //==================================
    // 7. entrega
    //==================================
    let entrega = 5
    //se passar de 70 -> entrega gratis 😎
    if(subtotal - desconto >= 70){
     entrega = 0
    }
    //==================================
    // 8. total final
    //==================================
    let totalFinal = subtotal - desconto + entrega
    
    //==================================
    // 9. mostrar o resultado
    //==================================
    resultado.innerHTML =
    "<strong>Itens:</strong><br>"+
    itens +
    "<br> Subtotal: R$ " + subtotal.toFixed(2)+
    "<br> Desconto: R$ " + desconto.toFixed(2)+
    "<br> Entrega: R$ " + entrega.toFixed(2)+
    "<br><strong> Total: R$  " + totalFinal.toFixed(2) + "</strong>"
}
