import { LogDataInterface, LogProviderInterface, LogStrategyInterface } from "../../types";

/**
 * The AbstractCollectAndLog class implements the LogStrategyInterface.
 * It provides a base structure for logging strategies that collect log data and process it.
 */
export abstract class AbstractCollectAndLog implements LogStrategyInterface {
    protected readonly queue: LogDataInterface[] = [];
    protected processing: boolean = false;

    /**
     * Creates an instance of AbstractCollectAndLog.
     *
     * @param {LogProviderInterface} provider - The log provider to be used for processing the log data.
     */
    protected constructor(private readonly provider: LogProviderInterface) {}

    /**
     * Adds log data to the processing queue.
     *
     * @param {LogDataInterface} data - The log data to be added to the queue.
     */
    protected addToQueue(data: LogDataInterface): void {
        this.queue.push(data);
    }

    /**
     * Processes the log data queue. If the queue is empty, it stops processing.
     */
    protected processQueue(): void {
        if (!this.queue.length) {
            this.processing = false;
            return;
        }

        this.processing = true;
        const data = this.queue.shift();
        if (data) {
            this.processData(data);
        }
        this.processQueue();
    }

    /**
     * Processes individual log data. It calls the appropriate log method on the provider based on the log data type.
     *
     * @param {LogDataInterface} data - The log data to be processed.
     */
    protected processData(data: LogDataInterface): void {
        if (!this.provider[data.type]) {
            throw new Error(`The ${data.type}() method on provider is not defined`);
        }

        this.provider[data.type](data);
    }

    /**
     * Adds error log data to the queue.
     *
     * @param {LogDataInterface} data - The error log data.
     */
    public error(data: LogDataInterface): void {
        this.addToQueue(data);
    }

    /**
     * Adds informational log data to the queue.
     *
     * @param {LogDataInterface} data - The informational log data.
     */
    public info(data: LogDataInterface): void {
        this.addToQueue(data);
    }
}
