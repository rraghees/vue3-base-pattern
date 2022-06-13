import ApiService from "@/services/apiService";
import IReqAuthModelDto from "./model/IReqAuthModelDto";
import IResAuthModelDto from "./model/IResAuthModelDto";
import IReqUserRegModelDto from "./model/IReqAuthModelDto";
import IReqVerifyOTPModelDto from "./model/IReqVerifyOTPModelDto";

export default class AuthService {
  static baseUrl = ["user", "verifyOtp", "resendOtp", "login"];

  static async register(user: IReqUserRegModelDto): Promise<string> {
    return await ApiService.post<string>(this.baseUrl[0], user);
  }

  static async verifyOTP(user: IReqVerifyOTPModelDto): Promise<string> {
    return await ApiService.get<string>(
      this.baseUrl[1] + `/${user.email}/${user.otp}`
    );
  }

  static async resendOTP(email: string): Promise<string> {
    return await ApiService.get<string>(this.baseUrl[2] + `/${email}`);
  }

  static async login(user: IReqAuthModelDto): Promise<IResAuthModelDto> {
    return await ApiService.post<IResAuthModelDto>(this.baseUrl[3], user);
  }
}
