const { fork } = require("child_process");


class RandomController {

    static bigRandom (req, res) {
        const { cant } = req.query;
        let cantidad = cant || 100000000;
       const bRand = fork("./src/controllers/randomSubproceso");
        bRand.send(cantidad);
        bRand.on("message", (result) => {
          res.json(result);
        });
      };

}    

module.exports = RandomController;