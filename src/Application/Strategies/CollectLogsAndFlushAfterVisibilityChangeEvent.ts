import { AbstractCollectAndLog } from "./AbstractCollectAndLog";
import { LogDataInterface, LogProviderInterface } from "../../types";

/**
 * The CollectLogsAndFlushAfterVisibilityChangeEvent class extends the AbstractCollectAndLog class.
 * It automatically processes the log queue when the page's visibility changes, such as when a user navigates away.
 */
export class CollectLogsAndFlushAfterVisibilityChangeEvent extends AbstractCollectAndLog {
    /**
     * Creates an instance of CollectLogsAndFlushAfterVisibilityChangeEvent.
     *
     * @param {LogProviderInterface} provider - The log provider used for logging.
     */
    public constructor(provider: LogProviderInterface) {
        super(provider);
        this.registerEventListeners();
    }

    /**
     * Registers event listeners for visibility changes and potentially other browser events.
     * When the visibility changes to 'hidden', the log queue is processed.
     */
    private registerEventListeners(): void {
        addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
                this.processQueue();
            }
        });

        // NOTE: For Safari support, also flush the queue on the 'pagehide' event.
        addEventListener('pagehide', this.processQueue);
    }
}
