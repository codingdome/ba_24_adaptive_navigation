import React from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import OnPageNavButton from "../../navigation/OnPageNavButton";

const PageVerwaltungUndPolitik = () => {
    const navigate = useNavigate();
    return (
        <PageWrapper title={'Verwaltung und Politik'}>
            <div className="flex flex-col items-start">
                <OnPageNavButton
                    onClick={() => navigate('/virtuellesamt/persoenlichedokumente/verwaltungundpolitik/meldeservice')}
                    text={'Meldeservice'}
                />
            </div>
        </PageWrapper>

    )
}

export default PageVerwaltungUndPolitik;