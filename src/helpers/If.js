import React, {Fragment} from 'react';

export const If = ({show, children}) => {
  return <Fragment>{show ? children : null}</Fragment>;
};
