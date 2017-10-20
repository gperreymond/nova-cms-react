const chai = require('chai')
const expect = chai.expect

const handler = require('../../../../../plugins/api/handlers/pages/list')

const requestSucess = {
  path: '/',
  server: {
    methods: {
      getPages: require('../../../../../system/methods/getPages')
    }
  }
}

describe('[unit] plugin api/pages/list', () => {
  it('should success', done => {
    handler(requestSucess, (result) => {
      expect(result.type).to.eq('pages')
      expect(result.count).to.be.a('number')
      expect(result.dataProvider).to.be.an('array')
      done()
    })
  })
})
