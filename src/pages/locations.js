import React from "react";
import Location from "../Components/Location";

import { hutiaoxia, zhangye, shangrila } from "../Components/data";

export const HuTiaoXia = () => {
  return <Location {...hutiaoxia} />;
};

export const Zhangye = () => {
  return <Location {...zhangye} />;
};

export const Shangrila = () => {
  return <Location {...shangrila} />;
};