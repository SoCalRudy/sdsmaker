import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { Root } from "postcss";

interface PDFState {
  currentY: number;
  widthDocument: number;
  widthContent: number;
  marginX: number;
  marginPositionLeft: number;
  marginPositionRight: number;
}

const initialState: PDFState = {
  currentY: 0,
  widthDocument: 0,
  widthContent: 0,
  marginX: 0,
  marginPositionLeft: 0,
  marginPositionRight: 0,
};

export const pdfSlice = createSlice({
  name: "pdf",
  initialState,
  reducers: {
    setCurrentY: (state, action: PayloadAction<number>) => {
      state.currentY += action.payload;
    },
    resetCurrentY: (state) => {
      state.currentY = 0;
    },
    setWidthDocument: (state, action: PayloadAction<number>) => {
      state.widthDocument = action.payload;
    },
    setWidthContent: (state, action: PayloadAction<number>) => {
      state.widthContent = action.payload;
    },
    setMarginX: (state, action: PayloadAction<number>) => {
      state.marginX = action.payload;
    },
    setMarginPositionLeft: (state, action: PayloadAction<number>) => {
      state.marginPositionLeft = action.payload;
    },
    setMarginPositionRight: (state, action: PayloadAction<number>) => {
      state.marginPositionRight = action.payload;
    },
  },
});

export const { setCurrentY } = pdfSlice.actions;

export const pdfActions = pdfSlice.actions;

export const selectCurrentY = (state: RootState) => state.pdf.currentY;

export default pdfSlice.reducer;
