declare type TimeInterval = number | "even" | "uneven" | number[];
declare type StringToAnyObject = {
    [key: string]: any;
};
declare type EveryTimeConfig = {
    between?: boolean;
};
/**
 * Every Time Class
 */
declare class EveryTime {
    interval: TimeInterval;
    config: EveryTimeConfig;
    /**
     *
     * @param {number[]|string|number} every
     * @param {{}} config
     */
    constructor(every: TimeInterval, config?: StringToAnyObject);
    /**
     * Every nth Minute
     */
    minutes(): string;
    /**
     * Every nth Hour
     */
    hours(): string;
    /**
     * Every nth Days after
     * @param hoursOfDay
     * @param $minutesOfDay
     */
    days(hoursOfDay?: number, $minutesOfDay?: number): string;
}
export = EveryTime;
