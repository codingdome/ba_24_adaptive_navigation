import React from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import OnPageNavButton from "../../navigation/OnPageNavButton";

const PageThemen = () => {

    const navigate = useNavigate();

    return (
        <PageWrapper title={'Themen'}>
            <div className="flex flex-col items-start gap-2">
                <OnPageNavButton
                    onClick={() => navigate('/themen/bildungundforschung')}
                    text={'Bildung und Forschung'}
                />
                <OnPageNavButton
                    onClick={() => navigate('/themen/arbeitundwirschaft')}
                    text={'Arbeit und Wirtschaft'}
                />
                <OnPageNavButton
                    onClick={() => navigate('/themen/gesundheitundsoziales')}
                    text={'Gesundheit und Soziales'}
                />
                <OnPageNavButton
                    onClick={() => navigate('/themen/bauenundwohnen')}
                    text={'Bauen und Wohnen'}
                />
                <OnPageNavButton
                    onClick={() => navigate('/themen/verkehrundstadtentwicklung')}
                    text={'Verkehr und Stadtentwicklung'}
                />
                <OnPageNavButton
                    onClick={() => navigate('/themen/umweltundklimaschutz')}
                    text={'Umwelt und Klimaschutz'}
                />
                <OnPageNavButton
                    onClick={() => navigate('/themen/kulturundfreizeit')}
                    text={'Kultur und Freizeit'}
                />
                 <OnPageNavButton
                    onClick={() => navigate('/themen/menschenundgesellschaft')}
                    text={'Menschen und Gesellschaft'}
                />
                 <OnPageNavButton
                    onClick={() => navigate('/themen/politikundverwaltung')}
                    text={'Politik und Verwaltung'}
                />
                
            </div>
        </PageWrapper>
    )
}

export default PageThemen;