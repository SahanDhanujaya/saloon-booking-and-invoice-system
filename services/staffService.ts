import apiClient from "@/api/AxiosClient"
import { StaffFormData } from "@/types/staff"

export const saveStaffMember = (data: StaffFormData) => {
    return apiClient.post("/staff", data)
}