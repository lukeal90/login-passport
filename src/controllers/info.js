const { argv } = require("../utils/index");


class InfoController {

    static async serverInfo (req = request, res = response){
        try {
          const info = {
            argumentos: argv,
            plataforma: process.platform,
            nodeversion: process.version,
            memoria: (process.memoryUsage().rss / 1000000).toFixed(2),
            path: process.execPath,
            procID: process.pid,
            cwd: process.cwd(),
          };
          res.send({ status: "ok", msg: info });
        } catch (error) {
          res.send(error.message)
        }
      };

}    

module.exports = InfoController;