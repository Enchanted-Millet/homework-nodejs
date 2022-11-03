import { matrix, printMatrix } from "../services/matrix.js";

function getMatrix(str) {
  return (req, res) => {
    try {
      if (!str) {
        console.log("no str");
        res.render("spiralMatrix");
      } else {
        const { matrixSize: num } = req[str] || {};
        //{matrixSize:num}//req... ==="params" (in router, GET: /:matrixSize )  || req... ==="body" I gave the html input value's name "matrixSize"
        console.log(+num);
        let newMatrix = printMatrix(matrix(+num));
        console.log("print matrix");
        res.set("Content-Type", "text/plain");
        res.send(newMatrix);
        // }
      }
    } catch (e) {
      let num = req[str].number;
      console.log(+num);

      res.status(511).json({ message: e.message });
    }
  };
}
export default getMatrix;

// src = "http://localhost:8080/matrix/api/getMatrix"
