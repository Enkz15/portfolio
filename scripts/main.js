document.addEventListener("DOMContentLoaded", function () {

    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        document.querySelector(`.color-option[data-theme="${savedTheme}"]`)?.click();
    }

    const savedLightMode = localStorage.getItem("lightMode");
    if (savedLightMode === "true") {
        document.documentElement.style.setProperty("--color-background", "234, 225, 216");
        document.documentElement.style.setProperty("--color-text", "29, 29, 29");
        document.documentElement.style.setProperty("--image-lune", "url('../images/lune-black.png')");
        document.documentElement.style.setProperty("--image-palette", "url('../images/palette-black.png')");
        document.documentElement.style.setProperty("--Creative", "url('../images/creativity.png')");
        document.documentElement.style.setProperty("--Patience", "url('../images/time.png')");
        document.documentElement.style.setProperty("--Organized", "url('../images/orga.png')");
        document.documentElement.style.setProperty("--Openminded", "url('../images/om.png')");
        isLightMode = true;
    } else if (savedLightMode === "false") {
        document.documentElement.style.setProperty("--color-background", "18, 18, 18");
        document.documentElement.style.setProperty("--color-text", "234, 234, 234");
        document.documentElement.style.setProperty("--image-lune", "url('../images/lune-white.png')");
        document.documentElement.style.setProperty("--image-palette", "url('../images/palette-white.png')");
        document.documentElement.style.setProperty("--Creative", "url('../images/creativity-white.png')");
        document.documentElement.style.setProperty("--Patience", "url('../images/time-white.png')");
        document.documentElement.style.setProperty("--Organized", "url('../images/orga-white.png')");
        document.documentElement.style.setProperty("--Openminded", "url('../images/om-white.png')");
        isLightMode = false;
    }

    const menuGaucheItems = document.querySelectorAll(".menu-item-gauche");
    const menuHautItems = document.querySelectorAll(".menu-item-haut");
    const menuCercleItems = document.querySelectorAll(".menu-item-cercle");

    function addHoverEffect(items, index) {
        items[index].addEventListener("mouseenter", function () {
            if (menuGaucheItems[index]) applyHoverEffect(menuGaucheItems[index]);
            if (menuHautItems[index]) applyHoverEffect(menuHautItems[index]);
            if (menuCercleItems[index]) applyHoverEffect(menuCercleItems[index]);
        });

        items[index].addEventListener("mouseleave", function () {
            resetColors();
        });
    }

    function applyHoverEffect(element) {
        element.style.filter = "brightness(1.2)";
        element.style.color = "white";
    }

    function resetColors() {
        menuGaucheItems.forEach((item) => resetElement(item));
        menuHautItems.forEach((item) => resetElement(item));
        menuCercleItems.forEach((item) => resetElement(item));
    }

    function resetElement(element) {
        element.style.filter = "";
        element.style.color = "";
    }

    for (let i = 0; i < menuGaucheItems.length; i++) {
        addHoverEffect(menuGaucheItems, i);
        addHoverEffect(menuHautItems, i);
        addHoverEffect(menuCercleItems, i);
    }
});

let isLightMode = false;

document.getElementById("light-dark-btn").addEventListener("click", () => {
    if (isLightMode) {
        document.documentElement.style.setProperty("--color-background", "18, 18, 18");
        document.documentElement.style.setProperty("--color-text", "234, 234, 234");
        document.documentElement.style.setProperty("--image-lune", "url('../images/lune-white.png')");
        document.documentElement.style.setProperty("--image-palette", "url('../images/palette-white.png')");
        document.documentElement.style.setProperty("--Creative", "url('../images/creativity-white.png')");
        document.documentElement.style.setProperty("--Patience", "url('../images/time-white.png')");
        document.documentElement.style.setProperty("--Organized", "url('../images/orga-white.png')");
        document.documentElement.style.setProperty("--Openminded", "url('../images/om-white.png')");
        localStorage.setItem("lightMode", "false");
    } else {
        document.documentElement.style.setProperty("--color-background", "234, 225, 216");
        document.documentElement.style.setProperty("--color-text", "29, 29, 29");
        document.documentElement.style.setProperty("--image-lune", "url('../images/lune-black.png')");
        document.documentElement.style.setProperty("--image-palette", "url('../images/palette-black.png')");
        document.documentElement.style.setProperty("--Creative", "url('../images/creativity.png')");
        document.documentElement.style.setProperty("--Patience", "url('../images/time.png')");
        document.documentElement.style.setProperty("--Organized", "url('../images/orga.png')");
        document.documentElement.style.setProperty("--Openminded", "url('../images/om.png')");
        localStorage.setItem("lightMode", "true");
    }
    isLightMode = !isLightMode;
});


/* Couleurs
document.documentElement.style.setProperty('--color1', '236, 204, 133'); 
document.documentElement.style.setProperty('--color2', '231, 180, 52');  
document.documentElement.style.setProperty('--color3', '222, 139, 52'); 
document.documentElement.style.setProperty('--color4', '232, 100, 54');  
document.documentElement.style.setProperty('--color5', '130, 53, 43');

document.documentElement.style.setProperty('--color1', '201, 154, 76');
document.documentElement.style.setProperty('--color2', '215, 155, 46');
document.documentElement.style.setProperty('--color3', '197, 112, 46');
document.documentElement.style.setProperty('--color4', '184, 78, 46');
document.documentElement.style.setProperty('--color5', '100, 40, 34');  
*/

document.querySelectorAll('.color-option').forEach(button => {
    button.addEventListener('click', function () {
        const theme = this.getAttribute('data-theme');

        localStorage.setItem('selectedTheme', theme);

        switch (theme) {
            case 'default':
                setTheme({
                    color1: '236, 204, 133',
                    color2: '231, 180, 52',
                    color3: '222, 139, 52',
                    color4: '232, 100, 54',
                    color5: '130, 53, 43',
                    colorborder: '255, 255, 255'
                });
                break;
            case 'theme1':
                setTheme({
                    color1: '206, 106, 107',
                    color2: '235, 172, 162',
                    color3: '190, 211, 195',
                    color4: '74, 145, 158',
                    color5: '33, 46, 83',
                    colorborder: '128, 128, 128'
                });
                break;
            case 'theme2':
                setTheme({
                    color1: '255, 205, 255',
                    color2: '227, 189, 255',
                    color3: '193, 173, 255',
                    color4: '175, 184, 255',
                    color5: '178, 202, 255',
                    colorborder: '0, 0, 0'
                });
                break;
            case 'theme3':
                setTheme({
                    color5: '18, 70, 96',
                    color4: '27, 148, 118',
                    color3: '139, 213, 158',
                    color2: '199, 219, 194',
                    color1: '244, 235, 214',
                    colorborder: '255, 255, 255'
                });
                break;
            default:
                console.log("Thème non défini");
        }
    });
});

function setTheme(colors) {
    document.documentElement.style.setProperty(
        "--color1",
        `${colors.color1}`
    );
    document.documentElement.style.setProperty(
        "--color2",
        `${colors.color2}`
    );
    document.documentElement.style.setProperty(
        "--color3",
        `${colors.color3}`
    );
    document.documentElement.style.setProperty(
        "--color4",
        `${colors.color4}`
    );
    document.documentElement.style.setProperty(
        "--color5",
        `${colors.color5}`
    );
    document.documentElement.style.setProperty(
        "--color-border",
        `${colors.colorborder}`
    );
}

