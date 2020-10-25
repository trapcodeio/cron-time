declare const _default: {
    /**
     *
     * @param {number} $position
     * @param {*} $value
     * @param {string} $str
     */
    spliceIntoPosition($position: number, $value: string, $str?: string | undefined): string;
    minute(): string;
    hour(): string;
    day(hourOfTheDay?: number, minuteOfTheHour?: number): string;
    /**
     * Get the integer representation of day string.
     * @param {string|number} day
     * @return {number}
     * @example
     *  Helpers.dayToInt('sunday') // 0
     *  Helpers.dayToInt('monday') // 1
     */
    dayToInt(day: number | string): number;
    /**
     * Checks of startDay and endDay follows calendar sequence.
     * else throws error.
     * @param startDay
     * @param endDay
     */
    validateStartToEndDay(startDay: number, endDay: number): void;
};
export = _default;
