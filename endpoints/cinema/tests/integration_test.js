import request from 'request'
import helpers from '../../../lib/test_helpers.js'

describe('cinema', () => {
    // The only thing that changes is the form attribute, so why not just re-use the object
  const fieldsToCheckFor = ['image', 'imdb', 'released', 'restricted', 'showtimes', 'title']

  it('should return an array of objects containing correct fields', (done) => {
    const params = helpers.testRequestParams('/cinema')
    const resultHandler = helpers.testRequestHandlerForFields(done, fieldsToCheckFor)
    request(params, resultHandler)
  })
})

describe('cinema theaters', () => {
    // The only thing that changes is the form attribute, so why not just re-use the object
  const fieldsToCheckFor = ['image', 'name', 'location', 'movies']

  it('should return an array of objects containing correct fields', (done) => {
    const params = helpers.testRequestParams('/cinema/theaters')
    const resultHandler = helpers.testRequestHandlerForFields(done, fieldsToCheckFor)
    request(params, resultHandler)
  })
})
