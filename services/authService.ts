import apiClient from "@/api/AxiosClient";
import { SigninType } from "@/types/login";
import { RegisterType } from "@/types/register";

export const register = (formdata: RegisterType) => {
    return apiClient.post("/auth/register", formdata)
}

export const login = (formData: SigninType) => {
    return apiClient.post("/auth/login", formData)
}