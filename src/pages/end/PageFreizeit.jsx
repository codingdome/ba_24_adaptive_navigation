import React from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import OnPageNavButton from "../../navigation/OnPageNavButton";
import data from "../../placeholder.data";

const PageFreizeit = () => {

    const navigate = useNavigate();

    return (
        <PageWrapper title={'Freizeit'}>
            <div className="flex flex-col gap-2 items-start">
                <img src={data.freizeit.img} alt="" />
                <OnPageNavButton
                    text={'Baden'}
                    onClick={() => navigate('/themen/kulturundfreizeit/freizeit/baden')}
                />
                <OnPageNavButton
                    text={'Bildung und außerschulische Jugendbetreuung'}
                    onClick={() => navigate('/themen/kulturundfreizeit/freizeit/bildungundausserschulischejugendbetreuung')}
                />
                <OnPageNavButton
                    text={'Einkaufen'}
                    onClick={() => navigate('/themen/kulturundfreizeit/freizeit/einkaufen')}
                />
                <OnPageNavButton
                    text={'Erholung im Freien'}
                    onClick={() => navigate('/themen/kulturundfreizeit/freizeit/erholungimfreien')}
                />
                <OnPageNavButton
                    text={'Essen und Trinken'}
                    onClick={() => navigate('/themen/kulturundfreizeit/freizeit/essenundtrinken')}
                />
                <OnPageNavButton
                    text={'Spielplätze'}
                    onClick={() => navigate('/themen/kulturundfreizeit/freizeit/spielplaetze')}
                />
                <OnPageNavButton
                    text={'Sport'}
                    onClick={() => navigate('/themen/kulturundfreizeit/freizeit/sport')}
                />
                <OnPageNavButton
                    text={'Veranstaltungen'}
                    onClick={() => navigate('/themen/kulturundfreizeit/freizeit/veranstaltungen')}
                />
            </div>
        </PageWrapper>
    )
}

export default PageFreizeit;