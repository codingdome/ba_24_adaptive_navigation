import React from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import OnPageNavButton from "../../navigation/OnPageNavButton";

const PageAnmeldenEinesWohnsitzes = () => {
    const navigate = useNavigate();
    return (
        <PageWrapper title={'Anmelden eines Wohnsitzes'}>
            <div className="flex flex-col items-start">
                <OnPageNavButton
                    onClick={() => navigate('/virtuellesamt/persoenlichedokumente/verwaltungundpolitik/meldeservice/anmeldeneineswohnsitzes/meldeservicederstadtwien')}
                    text={'Meldeservice der Stadt Wien'}
                />
            </div>
        </PageWrapper>
    )
}

export default PageAnmeldenEinesWohnsitzes;