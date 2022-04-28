import React, { useState } from 'react';

const Paginator = ({ totalUsersCount, pageSize, currentPage, pageChangeHandler, portionSize = 20 }) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize); // количество порций
    const [portionNumber, setPortionNumber] = useState(1); // номер порции
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1; // левая граница порции (какой номер левой границы порции)
    const rightPortionPageNumber = portionNumber * portionSize;

    const setLastPage = () => {
        setPortionNumber(Math.ceil(pagesCount / portionSize));
        pageChangeHandler(pagesCount);
    }

    const setFirstPage = () => {
        setPortionNumber(1);
        pageChangeHandler(1);
    }

    return (
        <ul className="paginator">
            {portionNumber > 1 &&
                <button
                    className='button paginator__button_type_first-last-page'
                    onClick={setFirstPage}
                >1
                </button>}
            {portionNumber > 1 &&
                <button
                    className='button paginator__button_type_next-back'
                    onClick={() => { setPortionNumber(portionNumber - 1) }}
                >Back
                </button>}
            {pages
                .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map(page => {
                    return (
                        <li
                            key={page}
                            className={currentPage === page ? 'paginator__page_active' : 'paginator__page'}
                            onClick={() => { pageChangeHandler(page) }}
                        >
                            {/* <div > */}
                                {page}
                            {/* </div> */}
                        </li>
                    )
                })}
            {portionCount > portionNumber &&
                <button
                    className='button paginator__button_type_next-back'
                    onClick={() => { setPortionNumber(portionNumber + 1) }}
                >Next
                </button>}
            {portionCount > portionNumber &&
                <button
                    className='button paginator__button_type_first-last-page'
                    onClick={setLastPage}
                >{pagesCount}
                </button>}
        </ul>
    )
}

export default Paginator;