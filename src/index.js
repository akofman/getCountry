import whichCountry from 'which-country';
import Promise from 'bluebird';

export default _params => {
  const params = { errorHandler: () => { return null; }, options: {}, ..._params };
  return new Promise(resolve => {
    navigator.geolocation.getCurrentPosition(position => {
      const country = whichCountry([position.coords.longitude, position.coords.latitude]);
      resolve(country);
    }, params.errorHandler, params.options);
  });
};
