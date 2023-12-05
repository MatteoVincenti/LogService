import { LogDataInterface, LogProviderInterface, LogStrategyInterface } from "../../types";

/**
 * The LogNow class implements the LogStrategyInterface.
 * It provides immediate logging capabilities using the provided LogProviderInterface.
 */
export class LogNow implements LogStrategyInterface {
    /**
     * Creates an instance of LogNow.
     *
     * @param {LogProviderInterface} provider - The log provider to be used for logging.
     */
    public constructor(private readonly provider: LogProviderInterface) {}

    /**
     * Logs an error message immediately.
     *
     * @param {LogDataInterface} data - The log data to be logged as an error.
     */
    public error(data: LogDataInterface): void {
        this.provider.error(data);
    }

    /**
     * Logs an informational message immediately.
     *
     * @param {LogDataInterface} data - The log data to be logged as informational.
     */
    public info(data: LogDataInterface): void {
        this.provider.info(data);
    }
}
