import {FormatterInterface, LogDataInterface, LogProviderInterface} from "../../types";

/**
 * The JsonLog class implements the LogProviderInterface.
 * It provides methods to log messages to the console.
 */
export class JsonLog implements LogProviderInterface {
    /**
     * Creates an instance of JsonLog.
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
        this.sendData(data);
    }

    /**
     * Logs an informational message to the console.
     *
     * @param {LogDataInterface} data - The informational log data to be logged.
     */
    public info(data: LogDataInterface): void {
        this.sendData(data);
    }

    /**
     * Send logs to server.
     *
     * @param {LogDataInterface} data - The informational log data to be logged.
     */
    private sendData(data: LogDataInterface): void
    {
        const body = new Blob([JSON.stringify({
            message: this.formatter.formatData(data),
            data: data
        })], { type: "application/json" });

        (navigator.sendBeacon && navigator.sendBeacon('/logs', body)) || fetch('/logs', {body, method: 'POST', keepalive: true});
    }
}
