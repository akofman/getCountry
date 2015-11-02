import whichCountry from 'which-country';
import Promise from 'bluebird';

/*
 * Simple function that wraps navigator.geolocation.getCurrentPosition
 * in a promise and return the country where you are geolocated.
 * @param params
 * @param params.errorHandler callback in case of errors
 * @param params.options position options
 * @param params.options.enableHighAccuracy
 * @param params.options.timeout
 * @param params.options.maximumAge
 *
 * For more details please see
 * https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
 */
export default _params => {
  const params = { errorHandler: () => { return null; }, options: {}, ..._params };
  return new Promise(resolve => {
    navigator.geolocation.getCurrentPosition(position => {
      const country = whichCountry([position.coords.longitude, position.coords.latitude]);
      resolve(country);
    }, params.errorHandler, params.options);
  });
};
