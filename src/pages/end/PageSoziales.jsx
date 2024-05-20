import React from "react";

import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import OnPageNavButton from "../../navigation/OnPageNavButton";

const PageSoziales = () => {

    const navigate = useNavigate();

    return (
        <PageWrapper title={'Soziales'}>
            <div className="flex flex-col items-start">
                <OnPageNavButton
                    text={'Leben mit Behinderung'}
                    onClick={() => navigate('/themen/gesundheitundsoziales/soziales/lebenmitbehinderung')}
                />
                <OnPageNavButton
                    text={'Pflege und Betreuung'}
                    onClick={() => navigate('/themen/gesundheitundsoziales/soziales/pflegeundbetreuung')}
                />
                <OnPageNavButton
                    text={'Planung und Qualitätssicherung'}
                    onClick={() => navigate('/themen/gesundheitundsoziales/soziales/planungundqualitaetssicherung')}
                />
                <OnPageNavButton
                    text={'Service- und Beratungsstellen'}
                    onClick={() => navigate('/themen/gesundheitundsoziales/soziales/serviceundberatungsstellen')}
                />
                <OnPageNavButton
                    text={'Soziale und finanzielle Unterstützungen'}
                    onClick={() => navigate('/themen/gesundheitundsoziales/soziales/sozialeundfinanzielleunterstuetzungen')}
                />

            </div>
        </PageWrapper>
    )
}

export default PageSoziales;