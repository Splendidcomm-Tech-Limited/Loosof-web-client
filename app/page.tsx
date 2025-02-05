"use client"

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function Home() {
  const count = useSelector((state: RootState) => state.accounting.value);
  return <>{count}</>;
}
