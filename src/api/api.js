import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '95642e1c-9641-4cd5-b108-2aa6f711e37c'
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    postFollow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },

    deleteFollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const profileApi = {
    getProfileInfo(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    },

    saveAvatar(avatarFile) {
        const formData = new FormData();
        formData.append('image', avatarFile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },

    saveProfile(profile) {
        return instance.put(`profile/`, profile);
    }
}

export const authApi = {
    getAuthInfo() {
        return instance.get(`auth/me/`)
            .then(response => response.data)
    },

    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login/`, { email, password, rememberMe, captcha })
            .then(response => response)
    },

    logout() {
        return instance.delete(`auth/login/`)
    }
}

export const securutyApi = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
            .then(response => response);
    }
}