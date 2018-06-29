//les variables sont préfixées du $ pour les différencier des variables locales purement javascript
var $erreurSaisie=false;

$(document).ready(function(){


    var $pseudo = $("#pseudo"),
        $mdp = $("#mdp"),
        $confirmation = $("#confirm"),
        $email = $("#mail"),
        $envoyer = $("#envoi"),
        $reset = $("#rafraichir"),
        $erreur = $("#erreur"),
        $champs = $(".champ");

    $champs.keyup(function(){
        if($(this).val().length <5)
        {
            $(this).css({
                borderColor : 'red',
                color : 'red'
            });
        }
        else
        {
            $(this).css({
                borderColor : 'blue',
                color : 'blue'
            });
        }
    });

    $confirmation.keyup(function(){
        if($(this).val() != $mdp.val())
        {
            $(this).css({
                borderColor : 'red',
                color : 'red'
            });
        }
        else
        {
            $(this).css({
                borderColor : 'blue',
                color : 'blue'
            });
        }
    });


    function verifier(champ){
        
        if(champ.val().length<5)
        {
            $erreur.css('display', 'block');
            champ.css({
                borderColor : 'red',
                color : 'red'
            });
            $erreurSaisie=true;
        }
       
    };

    $envoyer.click(function(e){
        $erreurSaisie = false;

        verifier($pseudo);
        verifier($mdp);
        verifier($confirmation);
        if($erreurSaisie)
        {
            e.preventDefault();
        }
    });

    $reset.click(function(){
        $champs.css({
            borderColor : 'black',
            color : 'black'
        });
        $erreur.css('display', 'none');
    });    
});