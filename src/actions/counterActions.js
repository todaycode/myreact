export const INC_COUNT = "INC_COUNT";
export const DEC_COUNT = "DEC_COUNT";
export const INC_COUNT_AMOUNT = "INC_COUNT_AMOUNT";
export const DEC_COUNT_AMOUNT = "DEC_COUNT_AMOUNT";

export const incCount = () => ({
  type: INC_COUNT,
});

export const decCount = () => ({
  type: DEC_COUNT,
});

export const incCountAmount = (amount) => ({
  type: INC_COUNT_AMOUNT,
  amount,
});

export const decCountAmount = (amount) => ({
  type: DEC_COUNT_AMOUNT,
  amount,
});
