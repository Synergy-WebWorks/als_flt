
import React from 'react'
import ILAFormSection from './sections/ila-form-section'
import store from '@/app/pages/store/store';
import { get_score_sheets_by_id_thunk, get_students_by_id_thunk } from '../redux/students-thunk';
import { useEffect } from 'react';

export default function ILAAssessmentForm() {

  const student_id =window.location.pathname.split('/')[4]
  const booklet_id =window.location.pathname.split('/')[5]

  useEffect(() => {
      store.dispatch(get_score_sheets_by_id_thunk(student_id,booklet_id))
  }, []);
  return (
    <>
    <ILAFormSection />
    </>
  )
}
