import { ProfileType } from '../types/types';
import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '95642e1c-9641-4cd5-b108-2aa6f711e37c'
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    postFollow(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },

    deleteFollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const profileApi = {
    getProfileInfo(userId: number) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },

    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response)
    },

    updateStatus(status: string) {
        return instance.put(`profile/status`, { status: status });
    },

    saveAvatar(avatarFile: any) {
        const formData = new FormData();
        formData.append('image', avatarFile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },

    saveProfile(profile: ProfileType) {
        return instance.put(`profile/`, profile);
    }
}

type GetAuthInfoResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}

type LoginResponseType = {
    data: {
        userId: number
    }
    resultCode: ResultCodeEnum | ResultCodeForCaptchaEnum
    messages: Array<string>
}

type LogoutResponseType = {
    resultCode: ResultCodeEnum
    messages: Array<string>
}

export const authApi = {
    async getAuthInfo() {
        const response = await instance.get<GetAuthInfoResponseType>(`auth/me/`);
        return response.data;
    },

    async login(email: string, password: number, rememberMe = false, captcha: null | string = null) {
        const response = await instance.post<LoginResponseType>(`auth/login/`, { email, password, rememberMe, captcha });
        return response.data;
    },

    logout() {
        return instance.delete<LogoutResponseType>(`auth/login/`)
    }
}

type SecurityApiResponseType = {
    url: string
}

export const securityApi = {
    getCaptchaUrl() {
        return instance.get<SecurityApiResponseType>(`security/get-captcha-url`)
            .then(response => response);
    }
}
