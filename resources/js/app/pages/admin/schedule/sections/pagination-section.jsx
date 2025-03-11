import { router } from '@inertiajs/react'
import { Pagination } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export default function PaginationSection() {
    const { schedules } = useSelector((state) => state.schedule)

  const path = window.location.pathname;
  const url = path + window.location.search;

  const getQueryParam = (url, paramName) => {
    const searchParams = new URLSearchParams(url.split("?")[1]);
    return searchParams.get(paramName);
  };

  const page = getQueryParam(url, "page");
  const currentPage = page ? parseInt(page, 10) : 1;
  function page_handler(params, page) {
    const newUrl = path + "?page=" + page
    router.visit(newUrl)
  }
  return (
    <div className='p-3 flex w-full items-center justify-end'>
       <Pagination
        onChange={page_handler}
        count={schedules.total}
        defaultPage={currentPage}
        color="primary"
        variant="outlined"
        shape="rounded"
      />
    </div>
  )
}
