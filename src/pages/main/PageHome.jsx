import React from "react";
import PageWrapper from "../components/PageWrapper";
import data from "../../placeholder.data";
import PlaceholderArticle from "../components/PlaceholderArticle";

const PageHome = () => {
    return (
        <PageWrapper title='Willkommen bei der Stadt Wien!'>
            <div className="flex flex-col gap-4">
                {data.home.articles.map((article, index) => (
                    <PlaceholderArticle key={index} article={article}/>
                ))}
            </div>
        </PageWrapper>
    )
}

export default PageHome;