import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import IAuthManager from '../security/IAuthManager';
import IoCContainer from '../IoC/IoCContainer';


axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const requestWithTokenInterceptor = (config: InternalAxiosRequestConfig ): InternalAxiosRequestConfig => {

    const authManager : IAuthManager = IoCContainer.getAuthManager();

    const token = authManager.getToken();

    if (token) 
        config!.headers!.Authorization = `Bearer ${token}`;

    return config;
}

const handlingError = (error: any) => {
    if (error.response){
        throw Error(error.response.data);
    }
    else if (error.request){
        throw Error(error.request);
    }
    else {
        throw Error(error.message);
    }
}

axios.interceptors.request.use(requestWithTokenInterceptor);

const responseBody = (response: AxiosResponse) => response.data;

const buildFormDataWithForm = (body: any, file: File) => {
    const formData = new FormData();
    
    for (let key in body ) {
        if (key === 'imageFile' || body[key] === null)
            continue;
        formData.append(key, body[key]);
    }

    formData.append('imageFile', file);

    return formData;
}

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    getWithHeaders: (url: string, hearderArgs: {[key: string]: string | number | boolean} ) => axios.get(url, {
            headers: hearderArgs
        }).then(responseBody),
    post: (url: string, body: {}) =>  axios.post(url, body).then(responseBody).catch(error => handlingError(error)),
    postWithFile: (url: string, body: any, file: File | null) => {

        const formData = buildFormDataWithForm(body, file!);
        
        return axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(responseBody);
    },
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody).catch(error => handlingError(error)),
    putWithFile: (url: string, body: any, file: File | null) => {

        const formData = buildFormDataWithForm(body, file!);
        
        return axios.put(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(responseBody);
    },
    patch: (url: string, body: {}) => axios.patch(url, body).then(responseBody).catch(error => handlingError(error)),
    delete: (url: string) => axios.delete(url).then(responseBody).catch(error => handlingError(error)),
    deleteWithBody: (url: string, body: {}) => axios.delete(url, { data: body}).then(responseBody).catch(error => handlingError(error)),
    current: ()  => requests.get('/accounts').catch(error => handlingError(error)), 
    refreshToken: () => requests.post('/accounts/refreshToken', {}).catch(error => handlingError(error)),
    uploadFile: (url: string, formData: FormData) => {
        return axios.post(url, formData).then(responseBody).catch(error => handlingError(error))
    }
};

export default requests;