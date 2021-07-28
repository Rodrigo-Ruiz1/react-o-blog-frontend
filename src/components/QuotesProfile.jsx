import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

const QuotesProfile = () => {
    const { id } = useParams();
    const [quote, setQuote] = useState({});

    useEffect(() => {
        (async () => {
            const quote = await _fetchSingleQuote();
            setQuote(quote)
        })();
    }, [setQuote]);


    const _fetchSingleQuote = async () => {
        const url = `http://127.0.0.1:3333/quotes/${id}`;
        //we wrap response in brackets to destructure the array with a single object that I was getting back
        const [response] = await fetch(url).then(response => response.json());
        // console.log('Response for single quote: ', response);
        return response
    }

    return (
        <>
            {!!quote ? (
                <>
                <div className="container">
                <div className="box">
                <h1>{quote?.character}</h1>
                <img src={quote?.image} alt={quote?.character} id="characterImg"></img>
                <p>"{quote?.quote}"</p>
                <p>{quote?.episode}</p>
                </div>
                </div>
                </>
            ) : (
                <p>Fetching quote....</p>
            )}
        </>
    )
}

export default QuotesProfile;