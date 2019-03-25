# FE interview boilerplate

This boilerplate includes
- React
- Redux
- SASS
- Reselect
- Json server

## Start up

To start the applictaion run
`npm install`
`npm start`

To start the json server run
`npm run json-server`


## Json server

The json server includes two tables, one of cat images under `/cats` and one of dog images under `/dogs`.
The json server will run on port `3001`.


# The Project

Your making a site of your favorite type of animal (dogs obviously) and you want to display an array of images. These images are not square and have different heights. You want to arrange the images in variable number of columns of equal width within a container so that each image in a column is flush with its siblings top or bottom (or with some gutter space). This will look very similar to the [pintrest layout](https://www.pinterest.com/pin/713398397203052958/)

The application has some code already set up. `src/containers/GridContainer.js` contains on api call to the `/dogs` endpoint putting the returned data into state. If you choose you can add load this data into Redux.

Depending on time please do the following:

1. Create the staggered grid.
2. Add sorting
3. Animate the grid items on sort.