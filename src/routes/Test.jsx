import React from 'react';
import { useParams } from 'react-router-dom';

export default function Test() {
  const { id } = useParams();
  return <div className="test">Test with paremeters and id here: {id}</div>;
}
