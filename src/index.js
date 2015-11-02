import whichCountry from 'which-country';
import Promise from 'bluebird';

export default (errorHandler) => {
  return new Promise(resolve => {
    navigator.geolocation.getCurrentPosition(position => {
      const country = whichCountry([position.coords.longitude, position.coords.latitude]);
      resolve(country);
    },
    error => {
      if(errorHandler){
        errorHandler(error);
      } else {
        return null;
      }
    });
  });
};
