import axios, { AxiosError } from 'axios';

export interface ApiError {
  results: null;
  error: boolean;
  message: string;
  details?: any;
}

export interface ApiResponse<T> {
  results: T;
}

export interface ApiResponsePagination<T> {
  results: T;
  count: number;
  next: null | string;
  previous: null | string;
}

export interface AsyncThunkConfig {
  rejectValue: ApiError;
}

export interface BaseApiState {
  succeeded: boolean;
  loading: boolean;
  error: boolean;
  errorMessage?: string;
  errorDetails?: any;
}

export function isAxiosError(error: any): error is AxiosError {
  return (error as AxiosError).isAxiosError;
}

const instance = axios.create({
  baseURL: process.env.API_URL ? process.env.API_URL : undefined,
  timeout: 30000,
  withCredentials: true,
});

export default instance;
