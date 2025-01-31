import React from 'react'
import AdminLayout from '../layout'
import DasboardCardSection from './sections/dashboard-card-section'
import { useEffect } from 'react'
import store from '../../store/store'
import { get_administrator_dashboard_thunk } from './redux/dashboard-thunk'

export default function AdminDashboardPage() {

  useEffect(()=>{
    store.dispatch(get_administrator_dashboard_thunk())
  },[])
  return (
    <AdminLayout>

      <DasboardCardSection />
    </AdminLayout>
  )
}
