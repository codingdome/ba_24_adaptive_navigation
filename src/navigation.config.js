/* 
© Dominik Englert, 2024
all rights reserved. 
*/

/*
Settings: 
responsible to set the Navigation-Mode
responsible to define all adaptive routes/paths
*/

const settings = {
    mode: 'adaptive', //options: traditional, adaptive
    // each set route will be rendered in runtime, they have to be available as soon as the app renders.
    routes: {
        featured: '/themen/gesundheitundsoziales/gesundheit/erstehilfe', //options: diverse paths which will be featured buttons
        fixed: [ //options: list of paths which will fall into "Unsere Auswahl"
            '/themen/kulturundfreizeit/kultur/filmundkino', 
        ],
        adaptive: [ //options: list of paths which will be desplayed as "Angepasste Vorschläge"
            '/virtuellesamt/persoenlichedokumente/aufenthalt/aufenthaltfuerewrbuergerundschweizer/anmeldebescheinigungfuerewrbuergerundschweizer',
            '/virtuellesamt/persoenlichedokumente/verwaltungundpolitik/meldeservice/anmeldeneineswohnsitzes',
        ]
    },
}
export default settings;