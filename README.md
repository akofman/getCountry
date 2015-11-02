# getCountry

Simple function that returns the ISO 3166-1 alpha-3 country code of the country
where you are geolocated.

> The implementation wraps the HTML5 navigator.geolocation.getCurrentPosition
function in a promise and uses the [which-country](https://github.com/vkurchatkin/which-country) lib in order to
retrieve a country from its coords.

## Usage

```js
getCountry().then(function(country){
  console.log(country);
});
```

You can handle errors with a callback param :
```js
getCountry({errorHandler: function(error){
  console.log(error);
}}).then(function(country){
  console.log(country);
});
```

[Position options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions) are also accepted :
```js
getCountry({errorHandler: function(error){
  console.log(error);
}, options: {
  maximumAge: 0
}}).then(function(country){
  console.log(country);
});
```

## License

MIT © [Alexis Kofman](http://twitter.com/alexiskofman)
