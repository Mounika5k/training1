

const { configObj } = require('../config/config')
//const {static_config} = require('../config/static_config')
const { init, run } = require('./server');

//TODO: COnfig file need to encrypty and decrypt
(async () => {
  //const config = envSchema(envConfig);
  //const { logger } = lib;
  try {
    const server = await init(configObj);
    await run(server);
  } catch (error) {
    console.log(error);
    //    logger.error(error, 'Error While Starting the Server');
  }
})();
