import { jsPDF } from "jspdf";
import { store } from "@/redux/store";
import { pdfActions, setCurrentY } from "@/redux/pdfSlice";
import generateSection00 from "./sections/s00-header";

import "@/assets/fonts/Inter-Regular-normal"
import "@/assets/fonts/Inter-Bold-normal"
import "@/assets/fonts/Inter-Light-normal"


// positional variables in units set in the instance
const widthDocument = 459;
const marginX = 25;
const marginPositionLeft = marginX;
const marginPositionRight = widthDocument - marginX;
const widthContent = widthDocument - marginX * 2;
let currentY = 0;

const initiateState = () => {
  store.dispatch(pdfActions.setWidthDocument(widthDocument));
  store.dispatch(pdfActions.setWidthContent(widthDocument - (marginX * 2)));
  store.dispatch(pdfActions.setMarginX(marginX));
  store.dispatch(pdfActions.setMarginPositionLeft(marginX));
  store.dispatch(pdfActions.setMarginPositionRight(widthDocument - marginX));
  store.dispatch(pdfActions.setCurrentY(0))
};

// short hand notations for positional variables
const mpl = marginPositionLeft;
const mpr = marginPositionRight;

const textie = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit volutpat euismod. Fusce rhoncus enim ut nibh rutrum porta. Proin eget fermentum urna. Donec pretium erat tortor, ut lobortis odio finibus id. Integer eget accumsan nisi. Etiam porta mauris elit, eu vestibulum ligula tincidunt a. Proin efficitur, nulla eget venenatis lobortis, dolor dolor rutrum nulla, at feugiat neque tellus eget turpis. Nulla leo eros, sollicitudin sit amet consectetur sit amet, lobortis vitae nulla. Donec a erat ornare, finibus lacus sit amet, rutrum massa. Mauris sed neque vestibulum odio gravida interdum non vel orci. Nulla et dolor nec metus tempus euismod sit amet vitae dui. Mauris tellus nulla, interdum vel ipsum sed, congue hendrerit nulla. Suspendisse eu tristique arcu.
`;

// allows us to update Y position after a pdf action
// const setCurrentY = (modifier: number) => {
//   currentY += modifier;
// };


// generates the pdf
const handlePDF = async () => {
   initiateState()
  const sds = new jsPDF("p", "px", "letter", false);

  sds.setFont('Inter-Light', 'normal', 'normal');


  await generateSection00(sds);

  store.dispatch(pdfActions.resetCurrentY())

  sds.save("mypdf.pdf");
};

export default handlePDF;
