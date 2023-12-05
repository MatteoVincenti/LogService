import { LogDataInterface, LogServiceInterface, LogStrategyInterface, LogType } from "../types";
import { LogData } from "./Entities/LogData";

/**
 * The LogService class implements the LogServiceInterface.
 * It provides methods to log different types of messages using a specified logging strategy.
 */
export class LogService implements LogServiceInterface {
    /**
     * Creates an instance of LogService.
     *
     * @param {LogStrategyInterface} strategy - The logging strategy to be used by the service.
     */
    public constructor(private readonly strategy: LogStrategyInterface) {}

    /**
     * Logs an error message.
     *
     * @param {string} message - The error message to log.
     */
    public error(message: string): void {
        this.strategy.error(this.getDataEntity(message, LogType.Error));
    }

    /**
     * Logs an informational message.
     *
     * @param {string} message - The informational message to log.
     */
    public info(message: string): void {
        this.strategy.info(this.getDataEntity(message, LogType.Info));
    }

    /**
     * Creates a LogDataInterface instance.
     *
     * @param {string} message - The message to be logged.
     * @param {LogType} type - The type of the log (e.g., error, info).
     * @returns {LogDataInterface} An instance of LogDataInterface with the provided message and type.
     */
    private getDataEntity(message: string, type: LogType): LogDataInterface {
        return new LogData(message, type);
    }
}
