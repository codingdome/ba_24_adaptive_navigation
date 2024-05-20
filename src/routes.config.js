/* 
© Dominik Englert, 2024
all rights reserved. 
*/

/*
Routes Config: 
list of all available paths. Will be generated on build.
name (e.g. virtuelles amt): defines route
label: defines visible label
component: connects a component to the corresponding route
color: defines color for traditional navigation
sub: genereates list for sub-links
--> each child follows the same rules.
*/

import DeadEnd from "./pages/main/DeadEnd";
import PageAufenthalt from "./pages/end/PageAufenthalt";
import PageVerwaltungUndPolitik from "./pages/main/PageVerwaltungUndPolitik";
import PagePersoenlicheDokumente from "./pages/main/PagePersoenlicheDokumente";
import PageGesundheitUndSoziales from "./pages/main/PageGesundheitUndSoziales";
import PageKulturUndFreizeit from "./pages/main/PageKulturUndFreizeit";
import PageBauenUndWohnen from "./pages/end/PageBauenUndWohnen";
import PageMeldeservice from "./pages/end/PageMeldeservice";
import PageAnmeldenEinesWohnsitzes from "./pages/end/PageAnmeldenEinesWohnsitzes";
import PageMeldeserviceDerStadtWien from "./pages/end/PageMeldeserviceDerStadtWien";
import PageOnlineTerminReservierung from "./pages/end/PageOnlineTerminReservierung";
import PageAufenthaltFuerEwrBuergerUndSchweizer from "./pages/end/PageAufenthaltFuerEwrBuergerUndSchweizer";
import PageAnmeldebescheinigungFuerEwrBuergerUndSchweizer from "./pages/end/PageAnmeldebescheinigungFuerEwrBuergerUndSchweizer";
import PageErsteHilfe from "./pages/end/PageErsteHilfe";
import PageBewusstlosigkeit from "./pages/end/PageBewusstlosigkeit";
import PageFilmUndKino from "./pages/end/PageFilmUndKino";
import PageGesundheit from "./pages/end/PageGesundheit";
import PageSoziales from "./pages/end/PageSoziales";
import PageKultur from "./pages/end/PageKultur";
import PageFreizeit from "./pages/end/PageFreizeit";
import PageVirtuellesAmt from "./pages/main/PageVirtuellesAmt";
import PageThemen from "./pages/main/PageThemen";
import PageStadtplan from "./pages/main/PageStadtplan";
import PageVideo from "./pages/main/PageVideo";
import PageMeinBezirk from "./pages/main/PageMeinBezirk";
import PageFormularAnmeldung from "./pages/end/PageFormularAnmeldung";

const routes = {
    virtuellesamt: {
        label: 'Virtuelles Amt',
        component: PageVirtuellesAmt,
        color: '#aad7ef',
        sub: {
            persoenlichedokumente: {
                label: 'Persönliche Dokumente',
                component: PagePersoenlicheDokumente,
                sub: {
                    aufenthalt: {
                        label: 'Aufenthalt',
                        component: PageAufenthalt,
                        sub: {
                            aufenthaltfuerewrbuergerundschweizer: {
                                label: 'Aufenthalt für EWR Bürger:innen und Schweizer:innen',
                                component: PageAufenthaltFuerEwrBuergerUndSchweizer,
                                sub: {
                                    anmeldebescheinigungfuerewrbuergerundschweizer: {
                                        label: 'Anmeldebescheinigung für EWR-Bürger:innen und Schweizer:innen',
                                        component: PageAnmeldebescheinigungFuerEwrBuergerUndSchweizer,
                                        sub: {
                                            formular: {
                                                label: 'Formular',
                                                component: PageFormularAnmeldung,
                                            }
                                        }
                                    }
                                }
                            },
                            aufenthaltfuerdrittstaatsangehoerige: {
                                label: 'Aufenthalt für Drittstaatsangerhörige',
                                component: DeadEnd,
                            }
                        }
                    },
                    ausweise: {
                        label: 'Ausweise',
                        component: DeadEnd
                    },
                    lebensgemeinschaft: {
                        label: 'Lebensgemeinschaft',
                        component: DeadEnd
                    },
                    urkunden: {
                        label: 'Urkunden',
                        component: DeadEnd
                    },
                    verwaltungundpolitik: {
                        label: 'Verwaltung & Politik',
                        component: PageVerwaltungUndPolitik,
                        sub: {
                            meldeservice: {
                                label: 'Melde-Service',
                                component: PageMeldeservice,
                                sub: {
                                    anmeldeneineswohnsitzes: {
                                        label: 'Anmelden eines Wohnsitzes',
                                        component: PageAnmeldenEinesWohnsitzes,
                                        sub: {
                                            meldeservicederstadtwien: {
                                                label: 'Meldeservice der Stadt Wien',
                                                component: PageMeldeserviceDerStadtWien,
                                                sub: {
                                                    onlineterminreservierung: {
                                                        label: 'Online Termin Reservierung',
                                                        component: PageOnlineTerminReservierung,
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            gesellschaftundsoziales: {
                label: 'Gesellschaft & Soziales',
                component: DeadEnd,
            },
            gesundheitundpflege: {
                label: 'Gesundheit & Pflege',
                component: DeadEnd
            },
            freizeitundsport: {
                label: 'Freizeit & Sport',
                component: DeadEnd
            },
            wirtschaft: {
                label: 'Wirtschaft',
                component: DeadEnd
            },
            bauenundwohnen: {
                label: 'Bauen & Wohnen',
                component: PageBauenUndWohnen
            },
            strasseundverkehr: {
                label: 'Straße & Verkehr',
                component: DeadEnd
            },
            umweltundentsorgung: {
                label: 'Umwelt & Entsorgung',
                component: DeadEnd
            }
        },
    },
    themen: {
        label: 'Themen',
        component: PageThemen,
        color: '#c8c8c8',
        sub: {
            bildungundforschung: {
                label: 'Bildung & Forschung',
                component: DeadEnd
            },
            arbeitundwirschaft: {
                label: 'Arbeit & Wirtschaft',
                component: DeadEnd
            },
            gesundheitundsoziales: {
                label: 'Gesundheit & Soziales',
                component: PageGesundheitUndSoziales,
                sub: {
                    gesundheit: {
                        label: 'Gesundheit',
                        component: PageGesundheit,
                        sub: {
                            aerztinnenundapotheken: {
                                label: 'Ärzt:innen und Apotheken',
                                component: DeadEnd,
                            },
                            beratungundvorsorge: {
                                label: 'Beratung und Vorsorge',
                                component: DeadEnd,
                            },
                            erstehilfe: {
                                label: 'Erste Hilfe',
                                component: PageErsteHilfe,
                                sub: {
                                    allgemeineinformationen: {
                                        label: 'Allgemeine Informationen',
                                        component: DeadEnd,
                                    },
                                    bewusstlosigkeit: {
                                        label: 'Bewusstlosigkeit',
                                        component: PageBewusstlosigkeit,
                                    },
                                    blutungen: {
                                        label: 'Blutungen',
                                        component: DeadEnd,
                                    },
                                    krampfanfall: {
                                        label: 'Krampfanfall',
                                        component: DeadEnd
                                    },
                                    vergiftung: {
                                        label: 'Vergiftung',
                                        component: DeadEnd
                                    },
                                    wiederbelebung: {
                                        label: 'Wiederbelebung',
                                        component: DeadEnd
                                    }
                                }
                            },
                            gesundheitseinrichtungen: {
                                label: 'Gesundheitseinrichtungen',
                                component: DeadEnd
                            },
                            planungundqualitaetssicherung: {
                                label: 'Planung und Qualitätssicherung',
                                component: DeadEnd
                            },
                            spitaelerundgesundheitsdienste: {
                                label: 'Spitäler und Gesundheitsdienste',
                                component: DeadEnd
                            },
                        }
                    },
                    soziales: {
                        label: 'Soziales',
                        component: PageSoziales,
                        sub: {
                            lebenmitbehinderung: {
                                label: 'Leben mit Behinderung',
                                component: DeadEnd
                            },
                            pflegeundbetreuung: {
                                label: 'Pflege und Betreuung',
                                component: DeadEnd
                            },
                            planungundqualitaetssicherung: {
                                label: 'Planung und Qualitätssicherung',
                                component: DeadEnd
                            },
                            serviceundberatungsstellen: {
                                label: 'Service und Beratungsstellen',
                                component: DeadEnd
                            },
                            sozialeundfinanzielleunterstuetzungen: {
                                label: 'Soziale und finanzielle Unterstützungen',
                                component: DeadEnd
                            }
                        }
                    }
                }
            },
            bauenundwohnen: {
                label: 'Bauen & Wohnen',
                component: DeadEnd,
            },
            verkehrundstadtentwicklung: {
                label: 'Verkehr & Stadtentwicklung',
                component: DeadEnd,
            },
            umweltundklimaschutz: {
                label: 'Umwelt & Klimaschutz',
                component: DeadEnd,
            },
            kulturundfreizeit: {
                label: 'Kultur & Freizeit',
                component: PageKulturUndFreizeit,
                sub: {
                    kultur: {
                        label: 'Kultur',
                        component: PageKultur,
                        sub: {
                            filmundkino: {
                                label: 'Film und Kino',
                                component: PageFilmUndKino,
                            },
                            kulturabteilung: {
                                label: 'Kulturabteilung',
                                component: DeadEnd
                            },
                            literatur: {
                                label: 'Literatur',
                                component: DeadEnd
                            },
                            museenundsammlungen: {
                                label: 'Museen und Sammlungen',
                                component: DeadEnd
                            },
                            musikbuehnetanz: {
                                label: 'Musik, Bühne, Tanz',
                                component: DeadEnd
                            },
                            religionundfriedhoefe: {
                                label: 'Religion und Friedhöfe',
                                component: DeadEnd
                            }
                        }
                    },
                    freizeit: {
                        label: 'Freizeit',
                        component: PageFreizeit,
                        sub: {
                            baden: {
                                label: 'Baden',
                                component: DeadEnd
                            },
                            bildungundausserschulischejugendbetreuung: {
                                label: 'Bildung und außerschulische Jugendbetreuung',
                                component: DeadEnd
                            },
                            einkaufen: {
                                label: 'Einkaufen',
                                component: DeadEnd
                            },
                            erholungimfreien: {
                                label: 'Erholung im Freien',
                                component: DeadEnd
                            },
                            essenundtrinken: {
                                label: 'Essen und Trinken',
                                component: DeadEnd
                            },
                            spielplaetze: {
                                label: 'Spielplätze',
                                component: DeadEnd
                            },
                            sport: {
                                label: 'Sport',
                                component: DeadEnd
                            },
                            veranstaltungen: {
                                label: 'Veranstaltungen',
                                component: DeadEnd
                            }
                        }
                    }
                }
            },
            menschenundgesellschaft: {
                label: 'Menschen & Gesellschaft',
                component: DeadEnd,
            },
            politikundverwaltung: {
                label: 'Politik & Verwaltung',
                component: DeadEnd
            }
        },
    },
    stadtplan: {
        label: 'Stadtplan',
        component: PageStadtplan,
        color: '#f2ba08',
        sub: {
            karten: {
                label: 'Karten',
                component: DeadEnd,
            },
            filter: {
                label: 'Filter',
                component: DeadEnd,
            },
        }
    },
    video: {
        label: 'Video',
        component: PageVideo,
        color: '#d2d734',
        sub: {
            uebersicht: {
                label: 'Übersicht',
                component: DeadEnd,
            },
            uebertragungen: {
                label: 'Übertragungen',
                component: DeadEnd,
            },
            oegs: {
                label: 'Österreichische Gebärdensprache',
                component: DeadEnd,
            },
            webcams: {
                label: 'Live Webcams',
                component: DeadEnd,
            }
        },
    },
    meinbezirk: {
        label: 'Mein Bezirk',
        component: PageMeinBezirk,
        color: '#c9a9c0',
        sub: {
            erster: {
                label: '1010',
                component: DeadEnd,
            },
            zweiter: {
                label: '1020',
                component: DeadEnd,
            },
            dritter: {
                label: '1030',
                component: DeadEnd,
            }
            //...
        }
    }
};

export default routes;