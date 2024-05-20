import React from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import OnPageNavButton from "../../navigation/OnPageNavButton";

const PageGesundheitUndSoziales = () => {

    const navigate = useNavigate();

    return (

        <PageWrapper title='Gesundheit & Soziales'>
            <div className="flex flex-col items-start">

                <OnPageNavButton
                    onClick={() => navigate('/themen/gesundheitundsoziales/gesundheit')}
                    text={'Gesundheit'}
                />
                <OnPageNavButton
                    onClick={() => navigate('/themen/gesundheitundsoziales/soziales')}
                    text={'Soziales'}
                />

            </div>
        </PageWrapper>

    )
}

export default PageGesundheitUndSoziales;