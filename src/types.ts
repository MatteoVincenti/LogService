interface HasErrorLogWithData {
    error: (data: LogDataInterface) => void
}

interface HasInfoLogWithData {
    info: (data: LogDataInterface) => void
}

export enum LogType {
    Error = 'error',
    Info = 'info'
}

export interface LogServiceInterface {
    error: (message: string) => void
    info: (message: string) => void
}

export interface LogStrategyInterface extends HasErrorLogWithData, HasInfoLogWithData {}

export interface LogProviderInterface extends HasErrorLogWithData, HasInfoLogWithData {}

export interface LogDataInterface {
    message: string
    type: LogType
}

export interface FormatterInterface {
    formatData: (data: LogDataInterface) => string
}