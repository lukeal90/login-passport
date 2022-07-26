process.on("message", (cant) => {
    const max = 1000;
    const min = 1;
    const randomArray = Array(max + 1).fill(0);
    for (let i = 0; i < cant; i++) {
      const numero = Math.floor(Math.random() * (max - min + 1)) + min;
      randomArray[numero] = randomArray[numero] + 1;
    }
    // aca tengo que armar el objeto
    let i = 0;
    objRandom = randomArray.reduce(function (obj, v) {
      obj[i] = v;
      i++;
      return obj;
    }, {});
  
    process.send(objRandom);
  });
