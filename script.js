function AskingName()
{
    var nameOk = false;

    while (!nameOk) {

    var name = prompt("Informe o seu nome abaixo:")

        if (name==''){
        window.alert("Por favor, informe seu nome.");
        nameOk = false;
        }

        else {
        window.alert("Obrigado! Seja bem-vindo " + name + "!");
        nameOk = true;
        }

    }
}