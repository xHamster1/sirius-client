import React from 'react'
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from './../index';
import { Pagination } from 'react-bootstrap';

const Pages = observer(() => {
    const {room} = useContext(Context)
    const pageCount = Math.ceil(room.totalCount / room.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
    <Pagination className="mt-5">
        {pages.map(page => 
            <Pagination.Item
                key={page}
                active={room.page === page}
                onClick={() => room.setPage(page)}
            >{page}</Pagination.Item> 
        )}
    </Pagination>
  )
})

export default Pages