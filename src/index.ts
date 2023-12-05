import {
    LogService
} from "./Application/LogService";

import {
    CompositeLogService
} from "./Application/CompositeLogService";

import {
    LogNow,
    CollectLogsAndFlushAfterATimeout,
    CollectLogsAndFlushAfterVisibilityChangeEvent
} from "./Application/Strategies";

import {
    ConsoleLog,
    HtmlElementLog,
    JsonLog
} from "./Application/Providers";

import {
    BaseFormatter
} from "./Application/Formatters";

export {
    BaseFormatter,
    ConsoleLog,
    HtmlElementLog,
    JsonLog,
    LogNow,
    CollectLogsAndFlushAfterATimeout,
    CollectLogsAndFlushAfterVisibilityChangeEvent,
    LogService,
    CompositeLogService
}