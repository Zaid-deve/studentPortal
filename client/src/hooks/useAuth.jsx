import { useContext } from "react";
import { AuthProvider } from "../context/Auth";

export default function useAuth(){
    return useContext(AuthProvider);
}