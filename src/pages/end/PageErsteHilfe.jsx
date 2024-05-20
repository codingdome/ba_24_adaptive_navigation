import React from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import OnPageNavButton from "../../navigation/OnPageNavButton";
import data from "../../placeholder.data";

const PageErsteHilfe = () => {
    const navigate = useNavigate();
    return (
        <PageWrapper title='Erste Hilfe'>
            <div className="flex flex-col items-start gap-4">
                <img src={data.erstehilfe.img} alt="" />
                <p>{data.erstehilfe.text}</p>
                <p className="font-semibold underline">Wonach suchen Sie?</p>
                <OnPageNavButton
                    onClick={() => navigate('/themen/gesundheitundsoziales/gesundheit/erstehilfe/allgemeineinformationen')}
                    text={'Allgemeine Informationen'}
                />
                <OnPageNavButton
                    onClick={() => navigate('/themen/gesundheitundsoziales/gesundheit/erstehilfe/bewusstlosigkeit')}
                    text={'Bewusstlosigkeit'}
                />
                <OnPageNavButton
                    onClick={() => navigate('/themen/gesundheitundsoziales/gesundheit/erstehilfe/wiederbelebung')}
                    text={'Wiederbelebung'}
                />
                <OnPageNavButton
                    onClick={() => navigate('/themen/gesundheitundsoziales/gesundheit/erstehilfe/blutungen')}
                    text={'Blutungen'}
                />
                <OnPageNavButton
                    onClick={() => navigate('/themen/gesundheitundsoziales/gesundheit/erstehilfe/krampfanfall')}
                    text={'Krampfanfall'}
                />
                <OnPageNavButton
                    onClick={() => navigate('/themen/gesundheitundsoziales/gesundheit/erstehilfe/vergiftung')}
                    text={'Vergiftung'}
                />
            </div>
        </PageWrapper>
    )
}

export default PageErsteHilfe;