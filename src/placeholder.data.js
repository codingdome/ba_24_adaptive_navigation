import Altbauenschutz from './assets/placeholder/altbauenschutz.png';
import Sprachkompetenzen from './assets/placeholder/sprachkompetenzen.png';
import Wienliebe from './assets/placeholder/wienliebe.png';
import Zukunftspflege from './assets/placeholder/zukunftpflege.png';
import ErsteHilfe from './assets/placeholder/erstehilfe.jpg';
import Kultur from './assets/placeholder/kultur.jpg';
import Kutlurprater from './assets/placeholder/kulturprater.png';
import Freibad from './assets/placeholder/freibad.png';

const data = {
    home: {
        articles: [
            {
                img: Altbauenschutz,
                title: 'Mehr Kontrollen beim Altbautenschutz',
                text: 'Mit der Offensive Altbautenschutz kämpf die Stadt gegen die Vernachlässigung von Gründerzeithäusern an. Kontrolliert wurden im ersten Jahr rund 2.800 Gebäude. Nun wird die Aktion ausgeweitet.',
            },
            {
                img: Zukunftspflege,
                title: 'Zukunft der Pflege gesichert',
                text: 'Bis 2030 werden in Wien rund 16.000 Pflegekräfte ausgebildet. Im Herbst stehen bereits 2.000 von der Stadt finanzierte Stadtplätze quer durch alle Ausbildungen zur Verfügung.',
            },
            {
                img: Wienliebe,
                title: '#wienliebe Festival im Mai',
                text: 'Im Mittelpunkt des Fests vom 24. bis 26. Mai steht die Wiener Lebensfreude. "Die dreitägige Veranstaltung am Rathausplatz umfasst Kultur, Kulinarik und Kunsthandwerk", kündigt Bürgermeister Ludwig an.',
            },
            {
                img: Sprachkompetenzen,
                title: 'Sprachkompetenzen stärken',
                text: 'Wien setzt 5-Punkte-Plan für mehr Sprachkompetenz bei Kindern und Jugendlichen um. Ganztagsschulen und Deutschangebote werden ausgebaut. Die Sprachförderung im Kindergarten wird forciert.',
            },
        ]
    },
    erstehilfe: {
        img: ErsteHilfe,
        text: 'Die Erste Hilfe ist eine unerlässliche Fähigkeit, die es ermöglicht, in Notsituationen effektiv zu reagieren. Dieses Handbuch gibt Ihnen grundlegende Anweisungen, wie Sie im Falle verschiedener medizinischer Notfälle handeln sollten. Die Informationen sind in klare Schritte unterteilt, um Ihnen zu helfen, ruhig und effizient zu reagieren.',
    },
    kulturundfreizeit: {
        img: Kultur,
    },
    kultur: {
        img: Kutlurprater,
    },
    freizeit: {
        img: Freibad,
    },
    virtuellesamt: {
        text: 'Das Virtuelle Amt ist Ihre zentrale Anlaufstelle für digitale Dienstleistungen der Stadtverwaltung Wien. Hier können Sie unabhängig von Öffnungszeiten und bequem von zu Hause aus eine Vielzahl von Amtsangelegenheiten online erledigen. Von der Anmeldung eines Wohnsitzes über die Beantragung von Dokumenten bis hin zur Zahlung von Gebühren – unser digitales Angebot ist sicher, effizient und benutzerfreundlich gestaltet.',
    },
    aufenthalt: {
        text: 'Bürger des Europäischen Wirtschaftsraums (EWR) genießen Freizügigkeit in Österreich und können ohne Visum einreisen und sich aufhalten; lediglich eine Anmeldung bei der örtlichen Meldebehörde ist erforderlich, wenn der Aufenthalt 3 Monate überschreitet. Drittstaatsangehörige müssen hingegen für längere Aufenthalte ein Visum oder eine Aufenthaltsgenehmigung beantragen, abhängig vom Zweck ihres Aufenthalts wie Arbeit, Studium oder Familienzusammenführung. Die genauen Bedingungen und Anforderungen variieren je nach Herkunftsland und Aufenthaltsgrund.',
    },
    aufenthaltewr: {
        text: 'Wenn Sie planen länger in Österreich zu bleiben füllen Sie bitte die unten angeführte Bescheinigung aus und bringen Sie sie aufs Amt.'
    }
}
export default data;