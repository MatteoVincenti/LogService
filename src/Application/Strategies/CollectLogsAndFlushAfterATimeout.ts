import { AbstractCollectAndLog } from "./AbstractCollectAndLog";
import { LogDataInterface, LogProviderInterface } from "../../types";

/**
 * The CollectLogsAndFlushAfterATimeout class extends the AbstractCollectAndLog class.
 * It processes the log queue after a specified timeout, which can help in batching log messages.
 */
export class CollectLogsAndFlushAfterATimeout extends AbstractCollectAndLog {
    private timeout: number;

    /**
     * Creates an instance of CollectLogsAndFlushAfterATimeout.
     *
     * @param {LogProviderInterface} provider - The log provider used for logging.
     * @param {number} milliseconds - The time in milliseconds to wait before flushing the log queue. Default is 500ms.
     */
    public constructor(provider: LogProviderInterface, private readonly milliseconds: number = 500) {
        super(provider);
    }

    /**
     * Flushes the log queue after a set timeout. Clears any existing timeout before setting a new one.
     */
    private flushQueue(): void {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(() => {
            this.processQueue();
        }, this.milliseconds);
    }

    /**
     * Adds log data to the queue and schedules the queue to be flushed after the set timeout.
     *
     * @param {LogDataInterface} data - The log data to be added to the queue.
     */
    protected addToQueue(data: LogDataInterface): void {
        super.addToQueue(data);
        this.flushQueue();
    }
}
