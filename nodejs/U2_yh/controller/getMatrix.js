import { matrix, printMatrix } from "../services/matrix.js";

function getMatrix(str) {
  return (req, res) => {
    try {
      let num = req[str].number;
      console.log(+num);
      let newMatrix = matrix(+num);
      res.render("spiralMatrix", { newMatrix });
    } catch (e) {
      let num = req[str].number;
      console.log(+num);
      console.log(printMatrix(matrix(+num)));
      // console.log(matrix(+num));
      res.status(511).json({ message: e.message });
    }
  };
}
export default getMatrix;
