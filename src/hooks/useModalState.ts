import { useState, useEffect, useMemo } from 'react';

import { GET_PARAMS } from 'const/modalRouter';
import useQueryParams from 'hooks/router/useQueryParams';

export default () => {
  const popupName = useQueryParams(GET_PARAMS.popup);
  const [mountedPopup, setMountedPopup] = useState(popupName);

  useEffect(() => {
    if (popupName) {
      setMountedPopup(popupName);
    } else {
      setMountedPopup(null);
    }
  }, [popupName]);

  const isOpened = useMemo(() => Boolean(popupName), [popupName]);

  return {
    mountedPopup,
    isOpened,
  };
};
