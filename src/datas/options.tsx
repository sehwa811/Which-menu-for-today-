interface OptionKeys {
  value: string;
  label: string;
}

export const ctrOptions: Array<OptionKeys> = [
  { value: "ctr", label: "한식" },
  { value: "ctr", label: "아시안" },
  { value: "ctr", label: "양식" },
  { value: "ctr", label: "그 외" },
];
export const ndlOptions: Array<OptionKeys> = [
  { value: "ndl", label: "면" },
  { value: "ndl", label: "밥" },
];
export const spcOptions: Array<OptionKeys> = [
  { value: "spc", label: "좋아요" },
  { value: "spc", label: "싫어요" },
];
