'use client'
// import { getCurrentUser } from '@/lib/session';
import { redirect } from 'next/navigation';
import React from 'react';


const Profiles = () => {
  const token = window.localStorage.getItem('token')
  if (!token) {
    redirect('/auth');
  }

  return <div>Hey, you are finally logged in</div>;
};

export default Profiles;
