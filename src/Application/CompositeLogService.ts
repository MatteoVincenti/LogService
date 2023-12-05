import { LogDataInterface, LogServiceInterface, LogStrategyInterface, LogType } from "../types";
import { LogData } from "./Entities/LogData";

/**
 * The CompositeLogService (or LogServiceAggregator) class implements the LogServiceInterface.
 * It allows aggregation of multiple log services and delegates logging calls to each of them.
 */
export class CompositeLogService implements LogServiceInterface {
    /**
     * Creates an instance of CompositeLogService.
     *
     * @param {LogServiceInterface[]} services - An array of log services to aggregate.
     */
    public constructor(private readonly services: LogServiceInterface[]) {}

    /**
     * Logs an error message to all aggregated log services.
     *
     * @param {string} message - The error message to log.
     */
    public error(message: string): void {
        this.services.forEach(service => service.error(message));
    }

    /**
     * Logs an informational message to all aggregated log services.
     *
     * @param {string} message - The informational message to log.
     */
    public info(message: string): void {
        this.services.forEach(service => service.info(message));
    }
}
