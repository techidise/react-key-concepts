'use client';

import { useState } from 'react';

import { Alert } from './ChapterEightComponents';

import { Button } from '@/components/ui/button';

const ShowAlert = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert((isShowing) => !isShowing);
  };
  return (
    <div className="mb-3">
      <Button
        variant="secondary"
        onClick={handleShowAlert}
        className="hover:cursor-pointer"
      >
        {showAlert ? 'Hide' : 'Show'} Alert
      </Button>
      {showAlert && <Alert />}
    </div>
  );
};

export default ShowAlert;
