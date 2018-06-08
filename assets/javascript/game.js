//Javascript for Star Wars RPG Game.
//UM Coding Boot Camp. 2018. Joed Machado.

function Character ( name, health, aPower, caPower, pic, team ) {
    this.name = name;
    this.healthPoints = health;
    this.baseAttackPower = aPower;
    this.attackPower = aPower;
    this.counterAttackPower = caPower;
    this.picturePath = pic;
    this.team = team;
    this.increaseAttackPower = function () {
        this.attackPower += this.baseAttackPower;
    };
    this.attack = function ( character ) {
        //code for attack, character will be an object of prototype Character

        this.increaseAttackPower();
    };
    this.counterAttack = function ( character ) {
        //code for counter attack, character will be an object of prototype Character
    };
}// end of Character

var characters = [ new Character( 'Obi-Wan Kenobi', 120, 6, 4, 'assets/images/obi-wan.png', 'jedi'),
                   new Character( 'Luke Skywalker', 100, 10, 8, 'assets/images/luke-skywalker.png', 'jedi'), 
                   new Character( 'Darth Sidious', 150, 15, 10, 'assets/images/darth-sidious.png', 'sith'),
                   new Character( 'Darth Maul', 180, 12, 6, 'assets/images/darth-maul.png', 'sith')
                 ]; //array of characters

             

function showInitCards() {
    for (var i = 0; i < characters.length; i++ ) {

        var col = $('<div>').addClass( 'col-xs-6 col-sm-4 col-md-3' );

        switch (characters[i].team) {
            case 'jedi': var card = $('<div>').addClass( 'card bg-success text-white text-center' );
                         col.append( card );
                         break;
            case 'sith': var card = $('<div>').addClass( 'card bg-danger text-white text-center' );
                         col.append( card );
                         break;
            default: var card = $('<div>').addClass( 'card bg-warning text-white text-center' );
                         col.append( card );
        }

        card.attr('value', i);


        var cardBody = $('<div>').addClass( 'card-body' );
        card.append( cardBody );

        var cName = $('<p>').addClass( 'card-text' ).html( characters[i].name );
        cardBody.append( cName );

        //var cPicture = $('<img>').addClass( 'card-image' ).attr( 'src', characters[i].picturePath ); 
        var cPicture = $('<img>').addClass( 'card-image' ).attr( {
            src: characters[i].picturePath,
            alt: characters[i].name,
            width: "200px",
            height: "100px"
        } ); 
        cardBody.append( cPicture );

        var attackPower = $('<p>').addClass( 'card-text' ).html( characters[i].healthPoints );
        cardBody.append( attackPower );
        
        $('.pick-character').append( col );
        console.log( characters[i].name );
        
    }

    //$('.pick-character').append( $('<p>').html('Your Character').addClass('card-text') );
    $('.card').click( cardClick( $('.card') ) );
}     

function moveCard( card, destination ) {
    $( destination ).append( card );
}



function cardClick( card ) {
    return function(){
        console.log( 'Card clicked: ' + card.val() );
    }
}    



var gameover = false;
var wins = 0;
var losses = 0;


$(document).ready( function() {
    //Show initial cards of characters
    showInitCards();
} );
