import React from 'react';

// const useReCaptchaV3 = (siteKey) => {
  // const [isReady, setIsReady] = React.useState(false);

  // React.useEffect(() => {
  //   if (window.grecaptcha) {
  //     setIsReady(true);
  //   } else {
  //     const script = document.createElement('script');
  //     script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
  //     script.async = true;
  //     document.head.appendChild(script);
  //     script.onload = () => setIsReady(true);
  //   }
  // }, [siteKey]); 

  // const executeReCaptcha = useCallback(async (action) => {
  //   if (isReady && window.grecaptcha) {
  //     return await window.grecaptcha.execute(siteKey, { action });
  //   }
  // });

  // return executeReCaptcha;
// };

// export default useReCaptchaV3;
