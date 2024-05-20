import React from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import OnPageNavButton from "../../navigation/OnPageNavButton";
import data from "../../placeholder.data";

const PageVirtuellesAmt = () => {
    const navigate = useNavigate();

    return (
        <PageWrapper title='Virtuelles Amt'>
            <div className="flex flex-col items-start gap-2">
                <p>{data.virtuellesamt.text}</p>
                <OnPageNavButton
                    onClick={() => navigate('/virtuellesamt/persoenlichedokumente/')}
                    text={'Persönliche Dokumente'}
                />
                <OnPageNavButton
                    onClick={() => navigate('/virtuellesamt/gesellschaftundsoziales/')}
                    text={'Gesellschaft und Soziales'}
                />
                <OnPageNavButton
                    onClick={() => navigate('/virtuellesamt/gesundheitundpflege/')}
                    text={'Gesundheit und Pflege'}
                />
                <OnPageNavButton
                    onClick={() => navigate('/virtuellesamt/freizeitundsport/')}
                    text={'Freizeit und Sport'}
                />
                <OnPageNavButton
                    onClick={() => navigate('/virtuellesamt/wirtschaft/')}
                    text={'Wirtschaft'}
                />
                <OnPageNavButton
                    onClick={() => navigate('/virtuellesamt/bauenundwohnen/')}
                    text={'Bauen und Wohnen'}
                />
                <OnPageNavButton
                    onClick={() => navigate('/virtuellesamt/strasseundverkehr/')}
                    text={'Straße und Verkehr'}
                />
                <OnPageNavButton
                    onClick={() => navigate('/virtuellesamt/umweltundentsorgung/')}
                    text={'Umwelt und Entsorgung'}
                />

            </div>
        </PageWrapper>
    )
}

export default PageVirtuellesAmt;