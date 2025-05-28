import React from 'react';
import Content from '@theme-original/DocItem/Content';
import BotonSeguimiento from '../../../components/HomepageFeatures/botonSeguimiento'

export default function ContentWrapper(props) {
  return (
    <>
      <Content {...props} />
      <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
        <BotonSeguimiento />
      </div>
    </>
  );
}
