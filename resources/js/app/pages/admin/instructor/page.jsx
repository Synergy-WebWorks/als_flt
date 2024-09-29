import React from 'react'
import AdminLayout from '../layout'
import TableSection from './sections/table-section'
import CreateSection from './sections/create-section'
import PaginationSection from './sections/pagination-section'
import SearchSection from './sections/search-section'
import { useEffect } from 'react'
import store from '../../store/store'
import { get_instructor_thunk } from './redux/instructor-thunk'
import { get_department_thunk } from '../department/redux/department-thunk'

export default function AdminInstructorPage() {


  useEffect(()=>{
    store.dispatch(get_department_thunk())
    store.dispatch(get_instructor_thunk())
  },[])
  return (
    <AdminLayout>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
        <CreateSection />
        <SearchSection />
        </div>
        <div className="flex flex-col items-center justify-between h-[82vh] w-full">
          <TableSection />
          <PaginationSection />
        </div>

      </div>
    </AdminLayout>
  )
}