import NotFound from './NotFound';
import {RetryButton} from './styledComponents';
import React from 'react';

const Loading = props => {
  if (props.error) {
    if (props.error.code === 'MODULE_NOT_FOUND') {
      return <NotFound />;
    }

    return (
      <>
        <h2>Error!</h2>
        <RetryButton className="errorRetry" onClick={props.retry}>
          Retry
        </RetryButton>
      </>
    );
  } else if (props.timedOut) {
    return (
      <>
        <h2>Taking a long time...</h2>
        <RetryButton onClick={props.retry}>Retry</RetryButton>
      </>
    );
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
};

export default Loading;
