var winston = require('winston')
var winstonWrapper = require('../index.js')

var logger = new winston.Logger({
  transports: [
    new winston.transports.Console()
  ]
})

logger = winstonWrapper(logger)

logger.addMeta({
  test: 'Test Meta'
})

logger = winstonWrapper(logger)

logger.addMeta({
  test2: 'Test 2 Meta'
})

logger.info('test message')
