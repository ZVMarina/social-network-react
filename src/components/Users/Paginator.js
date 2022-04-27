import React from 'react';

const Paginator = ({ totalUsersCount, pageSize, currentPage, pageChangeHandler }) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <ul className="users__pages">
            {pages.map(page => {
                return <li key={page} className={currentPage === page ? 'users__page users__page_active' : 'users__page'}
                    onClick={() => { pageChangeHandler(page) }}
                >{page}</li>
            })}
        </ul>
    )
}

export default Paginator;