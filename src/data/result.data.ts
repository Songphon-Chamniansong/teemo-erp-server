export interface JResult<Type> {
    ok: boolean;
    errorCode?: string;
    errorMessage?: string;
    value?: Type;
}

export interface JResultList<Type> {
    ok: boolean;
    errorCode?: string;
    errorMessage?: string;
    value?: Type[];
}

export const setJResult = <T>(data: { isSuccess: boolean, value?: T, errorCode?: string, errorMessage?: string,  }): JResult<T> => {
    return {
        ok: data.isSuccess,
        errorCode: data.errorCode || '',
        errorMessage: data.errorMessage || '',
        value: data.value || null
    };
};
export const setJResultList = <T>(data: { isSuccess: boolean, value?: T[], errorCode?: string, errorMessage?: string,  }): JResultList<T> => {
    return {
        ok: data.isSuccess,
        errorCode: data.errorCode || '',
        errorMessage: data.errorMessage || '',
        value: data.value || null
    };
};