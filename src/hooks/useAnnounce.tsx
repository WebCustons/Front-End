import { useContext } from "react";
import { AnnounceContext } from "../contexts/annouces.context";

export const useAnnounce = () => {
  const announceContext = useContext(AnnounceContext);
  return announceContext;
};
