import React from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import OnPageNavButton from "../../navigation/OnPageNavButton";

const PageVideo = () => {
    const navigate = useNavigate();
    return (
        <PageWrapper title={'Video'}>
            <div className="flex flex-col gap-2 items-start">
                <OnPageNavButton
                    onClick={() => navigate('/video/uebersicht')}
                    text={'Übersicht'}
                />
                <OnPageNavButton
                    onClick={() => navigate('/video/uebertragungen')}
                    text={'Übertragunen'}
                />
                <OnPageNavButton
                    onClick={() => navigate('/video/oegs')}
                    text={'Österreichische Gebärdensprache'}
                />
                <OnPageNavButton
                    onClick={() => navigate('/video/webcams')}
                    text={'Webcams'}
                />
            </div>
        </PageWrapper>
    )
}

export default PageVideo;