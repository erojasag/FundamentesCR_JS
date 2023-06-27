import React from 'react';
import { Spinner } from 'reactstrap';
import './Loading.css';

export default function Loading() {
  return (
    <div className="divPadre">
      <div className="divHijo">
        <Spinner
          color="primary"
          size="lg"
          style={{ width: '5rem', height: '5rem', display: 'block' }}
        />
      </div>
    </div>
  );
}
