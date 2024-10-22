import ebcLogo from "@/assets/images/ebcLogo";
import { store } from "@/redux/store";
import getBase64ImageDimensions from "../utilities/getImageDimensions";
import {getCurrentY, updateY} from "@/generator/utilities/currentY";
import type { jsPDF } from "jspdf";

import "@/assets/fonts/Inter-Bold-normal"
import { getTextWidth, updateYFromText, getXRightAlign } from "../utilities/text";

const generateSection00 = async (doc: jsPDF) => {
  const mpl = store.getState().pdf.marginPositionLeft;
  const mpr = store.getState().pdf.marginPositionRight;

  let logoDimensions = await getBase64ImageDimensions(ebcLogo);

  doc.addImage(
    ebcLogo,
    "PNG",
    mpl,
    15,
    logoDimensions.width * 0.08,
    logoDimensions.height * 0.08
  );
  let yModifier = 15 + logoDimensions.height * 0.08;
  updateY(yModifier);


  doc.setLineWidth(2.5);
  doc.line(mpl, getCurrentY() + 5, mpr, getCurrentY() + 5);
  updateY(5)
  
  doc.setFontSize(9)
  const website = 'essentialsbycatalina.com'
  doc.text(website, getXRightAlign(doc, website), getCurrentY() - 5);
  updateYFromText(doc, website);

  doc.setFont("Inter-Bold").setFontSize(16)
  const documentTitle = 'safety data sheet';
  doc.text(documentTitle.toUpperCase(), getXRightAlign(doc, documentTitle.toUpperCase()), getCurrentY() + 10);
  updateYFromText(doc, documentTitle);

  doc.setFont("Inter-Regular").setFontSize(12);
  const documentVersion = 1.0;
  const documentRevisionDate = new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: "numeric" });


};

export default generateSection00;
