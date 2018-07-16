function placeHero (x, y) {
    // get the hero element by it's id attribute
    var hero = document.getElementById('hero');

    
    x = Math.max(0, Math.min(350, x));
    y = Math.max(0, Math.min(350, y));

    // setting the element's left css property
    hero.style.left = x + 'px';
    // setting the element's top css property
    hero.style.top = y + 'px';
    // setting the value of global variable hero_x
    hero_x = x;
    // setting the value of global variable hero_y
    hero_y = y;
}

    var hero_x; //current hero x coordinate
    var hero_y; //current hero y coordinate

    placeHero(150, 150);

    var upKeyHeld = false;
         downKeyHeld = false;
        leftKeyHeld = false;
        rightKeyHeld = false;

    // list for keypresses on the document
    document.addEventListener('keyup', function(event){
        console.log(event);
        if(event.keyCode == 39) {
            // move right
            placeHero(hero_x + 50, hero_y);
        } else if (event.keyCode == 37){
            //move left
            placeHero(hero_x - 50, hero_y);
        } else if (event.keyCode == 38){
            //move up
            placeHero(hero_x, hero_y - 50);
        } else if (event.keyCode == 40){
            //move down
            placeHero(hero_x, hero_y + 50);
        }
    });