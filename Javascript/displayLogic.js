/*
* Code copied from my other HTML5 game 'Spirit-Vein-Cultivation'. 
* That story was dropped, and the game was dropped too, sad.
*/

window.addEventListener("load", function () { menuController.init() });

// Menu Control
var menuController = 
{
    init: function() 
    {
        console.log("Menu Loaded!");

        menuController.hideScreens();
        menuController.showStartScreen();
    },

    hideScreens: function() 
    {
        var screens = document.getElementsByClassName("gamelayer");
        
        for(let i = screens.length - 1; i>=0; i--) 
        {
            var screen = screens[i];
            screen.style.display = "none";
        }
    },

    hideScreen: function(id) 
    {
        var screen = document.getElementById(id);
        screen.style.display = "none";
    },

    /**
     * Disables all display elements, and only shows the element with the provided id.
     * 
     * Accepts all ids, but please reference the list of valid game screens before use.
     * 
     * @param {string} id The ID of the screen to show in the game.
     * 
     */
    showScreen: function(id) 
    {
        var screen = document.getElementById(id);
        menuController.hideScreens();
        screen.style.display = "block";
    },

    // Debating whether I should replace all of these with a switch
    showGameScreen: function() {
        var screen = document.getElementById("gamescreen");
        menuController.hideScreens();
        screen.style.display = "block";
    },
    
    showSettingsScreen: function() {
        var screen = document.getElementById("settingsscreen");
        menuController.hideScreens();
        screen.style.display = "block";
    },

    showStartScreen: function() {
        var screen = document.getElementById("startscreen");
        menuController.hideScreens();
        screen.style.display = "block";
    }
}