import {FormatterInterface, LogDataInterface, LogProviderInterface} from "../../types";

/**
 * The ConsoleLog class implements the LogProviderInterface.
 * It provides methods to log messages to the console.
 */
export class ConsoleLog implements LogProviderInterface {
    /**
     * Creates an instance of ConsoleLog.
     *
     * @param {FormatterInterface} formatter
     */
    constructor(private readonly formatter: FormatterInterface) {
    }

    /**
     * Logs an error message to the console.
     *
     * @param {LogDataInterface} data - The error log data to be logged.
     */
    public error(data: LogDataInterface): void {
        console.error(this.formatter.formatData(data), data);
    }

    /**
     * Logs an informational message to the console.
     *
     * @param {LogDataInterface} data - The informational log data to be logged.
     */
    public info(data: LogDataInterface): void {
        console.info(this.formatter.formatData(data), data);
    }
}
