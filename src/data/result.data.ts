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

export const setJResult = <T>(result: { isSuccess: boolean, value?: T, errorCode?: string, errorMessage?: string }): JResult<T> => {
    return {
        ok: result.isSuccess,
        errorCode: result.errorCode || '',
        errorMessage: result.errorMessage || '',
        value: result.value || null
    };
};
export const setJResultList = <T>(result: { isSuccess: boolean, value?: T[], errorCode?: string, errorMessage?: string }): JResultList<T> => {
    return {
        ok: result.isSuccess,
        errorCode: result.errorCode || '',
        errorMessage: result.errorMessage || '',
        value: result.value || null
    };
};