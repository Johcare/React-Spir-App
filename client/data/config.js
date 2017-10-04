// import Raven from 'raven-js';

// const sentry_key = 'cb55d4f05cd443ce82303222f77ef5e0';
// const sentry_app = '61499';

// import raven
// raven.Client('https://297beb4a54aa4cf5ac7486c5d2381b01:8b8acc3c365d4016a351c5fb4da46e26@sentry.io/225498');

// export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
