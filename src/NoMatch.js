import React from 'react';
import {withErrorBoundary} from 'react-error-boundary'


function NoMatch() {

  
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <h2>No Match</h2>
    </div>
  );
}

function Bomb() {
  throw new Error('CABOOM----');
}

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}


export default withErrorBoundary(NoMatch,{
  FallbackComponent: ErrorFallback,
  onError(error, info) {
    // Do something with the error
    // E.g. log to an error logging client here
  },
});