## Rock Tracks

### Get started
- run `yarn` or `yarn install` to install all dependencies
- run `yarn start` to start the app. It runs on localhost:3000.

### Additional info
I used [axios](https://github.com/axios/axios) for the API requests in combination with [redux-saga](https://github.com/redux-saga/redux-saga). I find `axios` more convenient than the `Fetch API` because the extra step of using `.json()` in the response is not needed, and because of the way the request errors are caught. This is probably not very applicable in this small test app but I overall prefer making requests using axios.

I used `redux-saga` because I like the structured way API calls are made with it. I also like having the ability to use effects and trigger different actions based on others, all belonging in dedicated sagas. It requires some boilerplate code in order to make a simple API request and update the redux store, but I prefer it (especially in big applications) because it promotes code clarity.

You may also notice that I used the `https://cors-anywhere.herokuapp.com/` as a "suffix" to the request url. Its use it to work as a proxy and avoid the CORS issues that get triggered when accessing APIs that do not accept requests from foreign domains (or block them after a certain limit which was the case with the iTunes API). 

### Potentional future improvements
The styles are definitely a good candidate for improvement.

Additionally, `react-router` could be added for navigation between the two pages of the app, one being the track list page and the other being the track details page. 

Furthermore, this app lacks tests and that should be a future addition.