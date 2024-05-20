import React from "react";

const PlaceholderArticle = ({
    article
}) => {
    return (
        <div className="flex flex-col gap-2">
            <img src={article.img} alt={article.title} />
            <h3 className="font-medium text-lg">{article.title}</h3>
            <p>{article.text}</p>
        </div>
    )
}

export default PlaceholderArticle;