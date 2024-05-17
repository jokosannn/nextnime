'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import React from 'react';

export default function ProgresBarTop({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ProgressBar height="4px" color="#6366f1" options={{ showSpinner: false }} shallowRouting />
    </>
  );
}
