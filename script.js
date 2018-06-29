//les variables sont préfixées du $ pour les différencier des variables locales purement javascript
var $erreurSaisie=false;

var $pseudo = $("#pseudo"),
    $mdp = $("#mdp"),
    $confirmation = $("#confirm"),
    $email = $("#mail"),
    $envoyer = $("#envoi"),
    $reset = $("#rafraichir"),
    $erreur = $("#erreur"),
    $champs = $(".champ");
    
function verifier(){
    var erreur=false;
    var msg="";
    //controle pseudo
    if(document.getElementById("pseudo").value == "" || document.getElementById("pseudo").value.length < 5)
    {
        erreur=true;
        msg += "\n le pseudo est obligatoire et doit être contenir au moins 5 caractères";
        document.getElementById("pseudo").style.borderColor = 'red';
    }
    else 
    {
        document.getElementById("pseudo").style.borderColor = 'blue';
    };
    //controle mdp
    if(document.getElementById("mdp").value == "") 
    {
        erreur=true;
        msg += "\n le mot de passe est obligatoire";
        document.getElementById("mdp").style.borderColor = 'red';
    }
    else 
    {
        document.getElementById("mdp").style.borderColor = 'blue';
    };
    //controle confirmation
    if(document.getElementById("confirm").value == "")
    {
        erreur=true;
        msg += "\n la confirmation du mot de passe est obligatoire";
        document.getElementById("confirm").style.borderColor = 'red';
    }
    else 
    {
        document.getElementById("confirm").style.borderColor = 'blue';
    };
    //controle correlation mdp et confirmation
    if(document.getElementById("mdp").value != document.getElementById("confirm").value)
    {
        erreur=true;
        msg += "\n le mot de passe doit correspondre avec la confirmation";
        document.getElementById("confirm").style.borderColor = 'red';
    };
    //affichage du message d'erreur dans fenêtre de dialogue et sur le formulaire
    if(erreur)
    {
        document.getElementById("erreur").style.display= 'block';
        alert(msg);
    };
    return !erreur;
};