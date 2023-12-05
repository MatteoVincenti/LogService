import {FormatterInterface, LogDataInterface, LogProviderInterface} from "../../types";

/**
 * The HtmlElementLog class implements the LogProviderInterface.
 * It provides methods to log messages as HTML elements within a specified HTML element.
 */
export class HtmlElementLog implements LogProviderInterface {
    private readonly $element: HTMLElement | null;

    /**
     * Creates an instance of HtmlElementLog.
     *
     * @param {FormatterInterface} formatter
     * @param {string} elementId - The ID of the HTML element where logs will be appended.
     */
    public constructor(private readonly formatter: FormatterInterface, elementId: string) {
        this.$element = document.getElementById(elementId);
    }

    /**
     * Logs an error message by appending it to the HTML element.
     *
     * @param {LogDataInterface} data - The error log data to be displayed.
     */
    public error(data: LogDataInterface): void {
        this.appendLog(data);
    }

    /**
     * Logs an informational message by appending it to the HTML element.
     *
     * @param {LogDataInterface} data - The informational log data to be displayed.
     */
    public info(data: LogDataInterface): void {
        this.appendLog(data);
    }

    /**
     * Appends the log message to the specified HTML element.
     *
     * @param {LogDataInterface} data - The log data to be appended.
     */
    private appendLog(data: LogDataInterface): void {
        if (!this.$element) {
            throw new Error(`Element is not defined`);
        }

        this.$element.insertAdjacentHTML('beforeend', `<div class="${data.type}-log">${this.formatter.formatData(data)}</div>`);
    }
}
