import { FormatterInterface, LogDataInterface } from "../../types";

/**
 * The BaseFormatter class implements the FormatterInterface.
 * It provides a basic implementation for formatting log data.
 */
export class BaseFormatter implements FormatterInterface {
    /**
     * Formats the given log data into a string.
     *
     * @param {LogDataInterface} data - The log data to be formatted.
     * @returns {string} The formatted log message.
     */
    public formatData(data: LogDataInterface): string {
        return `[${data.type.toUpperCase()}]: ${data.message}`;
    }
}
