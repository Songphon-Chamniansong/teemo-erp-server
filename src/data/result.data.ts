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