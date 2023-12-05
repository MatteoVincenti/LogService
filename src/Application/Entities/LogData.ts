import { LogDataInterface, LogType } from "../../types";

/**
 * The LogData class implements the LogDataInterface.
 * It represents the structure of a log message with its content and type.
 */
export class LogData implements LogDataInterface {
    public readonly message: string;
    public readonly type: LogType;

    /**
     * Creates an instance of LogData.
     *
     * @param {string} message - The log message content.
     * @param {LogType} type - The type of the log message (e.g., error, info).
     */
    public constructor(message: string, type: LogType) {
        this.message = message;
        this.type = type;
    }
}
