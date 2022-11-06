import { useContext } from "react";
import { AuthContext, AuthConextDataProps } from "../contexts/AuthContext";

export function useAuth(): AuthConextDataProps {
  return useContext(AuthContext);
}
