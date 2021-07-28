import { Link } from "react-router-dom";
import React from 'react';

const QuotesList = ({quotes}) => {
    return (
        <>
        <div>
            <ul>
            {quotes.map((quote, index) => {
            return (
            <li key={index}>
                    <Link to={`/quotes/${quote.id}`}>
                        <h1>{quote.character}</h1>
                    </Link>
                </li>
            )})}
            </ul>
        </div>
        </>
    )
}

export default QuotesList;
