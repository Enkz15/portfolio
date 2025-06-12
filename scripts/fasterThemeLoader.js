(function () {
    const savedLightMode = localStorage.getItem("lightMode");
    const savedTheme = localStorage.getItem("selectedTheme");

    const lang = localStorage.getItem("lang") || "fr";
    document.documentElement.setAttribute("lang", lang);

    if (savedLightMode === "true") {
        document.documentElement.style.setProperty("--color-background", "234, 225, 216");
        document.documentElement.style.setProperty("--color-text", "29, 29, 29");
        document.documentElement.style.setProperty("--image-lune", "url('../images/lune-white.png')");
        document.documentElement.style.setProperty("--image-palette", "url('../images/palette-white.png')");

    } else if (savedLightMode === "false") {
        document.documentElement.style.setProperty("--color-background", "18, 18, 18");
        document.documentElement.style.setProperty("--color-text", "234, 234, 234");
        document.documentElement.style.setProperty("--image-lune", "url('../images/lune-black.png')");
        document.documentElement.style.setProperty("--image-palette", "url('../images/palette-black.png')");
    }

    const themes = {
        "default": {
            "--color1": "236, 204, 133",
            "--color2": "231, 180, 52",
            "--color3": "222, 139, 52",
            "--color4": "232, 100, 54",
            "--color5": "130, 53, 43",
            "--color-border": "255, 255, 255"
        },
        "theme1": {
            "--color1": "206, 106, 107",
            "--color2": "235, 172, 162",
            "--color3": "190, 211, 195",
            "--color4": "74, 145, 158",
            "--color5": "33, 46, 83",
            "--color-border": "128, 128, 128"
        },
        "theme2": {
            "--color1": "255, 205, 255",
            "--color2": "227, 189, 255",
            "--color3": "193, 173, 255",
            "--color4": "175, 184, 255",
            "--color5": "178, 202, 255",
            "--color-border": "0, 0, 0"
        },
        "theme3": {
            "--color1": "244, 235, 214",
            "--color2": "199, 219, 194",
            "--color3": "139, 213, 158",
            "--color4": "27, 148, 118",
            "--color5": "18, 70, 96",
            "--color-border": "255, 255, 255"
        }
    };

    if (savedTheme && themes[savedTheme]) {
        const colors = themes[savedTheme];
        for (const variable in colors) {
            document.documentElement.style.setProperty(variable, colors[variable]);
        }
    }
})();

