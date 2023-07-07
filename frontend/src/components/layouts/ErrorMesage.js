import React from 'react';

const ErrorPopUp = ({ message }) => {
  const alertStyle = {
    padding: '0.25rem 0.5rem',
    fontSize: '0.75rem',
    lineHeight: '1rem',
    borderRadius: '0.25rem'
  };

  const buttonStyle = {
    padding: '0.25rem 0.5rem',
    fontSize: '0.75rem',
    borderRadius: '0.25rem'
  };

  return (
    <div className="alert alert-danger" role="alert" style={alertStyle}>
      <h6 className="alert-heading" style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Error de inicio de sesión</h6>
      <p className="mb-1" style={{ fontSize: '0.8rem' }}>{message}</p>
      <button className="btn btn-danger" onClick={() => window.location.reload()} style={buttonStyle}>
        Cerrar
      </button>
    </div>
  );
};

export default ErrorPopUp;
