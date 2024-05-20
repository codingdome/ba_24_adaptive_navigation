import React from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import OnPageNavButton from "../../navigation/OnPageNavButton";

const PagePersoenlicheDokumente = () => {

    const navigate = useNavigate();

    return (

        <PageWrapper title={'Persönliche Dokumente'}>

            <div className="flex flex-col items-start gap-2">

                <OnPageNavButton
                    onClick={() => navigate('/virtuellesamt/persoenlichedokumente/aufenthalt')}
                    text={'Aufenthalt'}
                />
                <OnPageNavButton
                    onClick={() => navigate('/virtuellesamt/persoenlichedokumente/ausweise')}
                    text={'Ausweise'}
                />
                <OnPageNavButton
                    onClick={() => navigate('/virtuellesamt/persoenlichedokumente/lebensgemeinschaft')}
                    text={'Lebensgemeinschaft'}
                />
                <OnPageNavButton
                    onClick={() => navigate('/virtuellesamt/persoenlichedokumente/urkunden')}
                    text={'Urkunden'}
                />
                <OnPageNavButton
                    onClick={() => navigate('/virtuellesamt/persoenlichedokumente/verwaltungundpolitik')}
                    text={'Verwaltung und Politik'}
                />

            </div>

        </PageWrapper>

    )
};

export default PagePersoenlicheDokumente;