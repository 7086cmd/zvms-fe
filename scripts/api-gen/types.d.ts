import { Type } from "./typeGen";

export interface Api {
    [partPath: string]: Path;
}

export interface Part {
    paths: Paths;
    desc?: Description;
    cfg?: Config;
}

export type PathItem = string;

export type Description = string;

export interface Paths {
    [pathItem: PathItem]: Path;
}

export interface Path {
    paths?: Paths;
    desc?: Description;
    get?: Method;
    post?: Method;
    cfg?: Config
}

export interface Method {
    desc?: Description;
    req?: Params;
    res?: Params;
    _req?: DefaultParams;
    _res?: DefaultParams;
    cfg?: Config;
}

export interface Params {
    [key: string]: Type;
}

export interface Config {
    token?: boolean;
}

export interface DefaultParams {
    [key: string]: unknown;
}

export interface Context {
    path:string;
    param?:string;
    addBefore: string[];
}