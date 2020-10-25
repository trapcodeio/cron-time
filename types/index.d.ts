import EveryTime from './EveryTime';
/**
 * Cron Time Class
 */
declare class CronTime {
    /**
     * Every nth Time
     * @return {EveryTime}
     * @param interval
     */
    static every(interval: number): EveryTime;
    /**
     * Every Minute
     */
    static everyMinute(): string;
    /**
     * Every Hour
     */
    static everyHour(): string;
    /**
     * Every Hour At
     * @param minuteOfTheHour - Minute of the hour.
     * @returns {string}
     */
    static everyHourAt(minuteOfTheHour: number): string;
    /**
     * Every Day
     */
    static everyDay(): string;
    /**
     * Every Day At
     * @param {number} hourOfTheDay - Hour of the day
     * @param {number} minuteOfTheHour - Minute of the Hour
     */
    static everyDayAt(hourOfTheDay: number, minuteOfTheHour?: number): string;
    /**
     * Every Sunday
     */
    static everySunday(): string;
    /**
     * Every Sunday At
     * @param {number} hourOfTheDay - Hour Of the Day
     * @param {number} minuteOfTheHour - Minute of the hour.
     */
    static everySundayAt(hourOfTheDay: number, minuteOfTheHour?: number): string;
    /**
     * Every Monday
     */
    static everyMonday(): string;
    /**
     * Every Monday At
     * @param {number} hourOfTheDay - Hour Of the Day
     * @param {number} minuteOfTheHour - Minute of the hour.
     */
    static everyMondayAt(hourOfTheDay: number, minuteOfTheHour?: number): string;
    /**
     * Every Tuesday
     */
    static everyTuesday(): string;
    /**
     * Every Tuesday At
     * @param {number} hourOfTheDay - Hour Of the Day
     * @param {number} minuteOfTheHour - Minute of the hour.
     */
    static everyTuesdayAt(hourOfTheDay: number, minuteOfTheHour?: number): string;
    /**
     * Every Wednesday
     */
    static everyWednesday(): string;
    /**
     * Every Wednesday At
     * @param {number} hourOfTheDay - Hour Of the Day
     * @param {number} minuteOfTheHour - Minute of the hour.
     */
    static everyWednesdayAt(hourOfTheDay: number, minuteOfTheHour?: number): string;
    /**
     * Every Thursday
     */
    static everyThursday(): string;
    /**
     * Every Thursday At
     * @param {number} hourOfTheDay - Hour Of the Day
     * @param {number} minuteOfTheHour - Minute of the hour.
     */
    static everyThursdayAt(hourOfTheDay: number, minuteOfTheHour?: number): string;
    /**
     * Every Friday
     */
    static everyFriday(): string;
    /**
     * Every Friday At
     * @param {number} hourOfTheDay - Hour Of the Day
     * @param {number} minuteOfTheHour - Minute of the hour.
     */
    static everyFridayAt(hourOfTheDay: number, minuteOfTheHour?: number): string;
    /**
     * Every Saturday
     */
    static everySaturday(): string;
    /**
     * Every Saturday At
     * @param {number} hourOfTheDay - Hour Of the Day
     * @param {number} minuteOfTheHour - Minute of the hour.
     */
    static everySaturdayAt(hourOfTheDay: number, minuteOfTheHour?: number): string;
    /**
     * Every Week
     */
    static everyWeek(): string;
    /**
     * Every Week At
     * @param {number} dayOfTheWeek - Day of the week
     * @param {number} hourOfTheDay - Hour of the day.
     * @param {number} minuteOfTheHour - Minute of the hour
     */
    static everyWeekAt(dayOfTheWeek: number, hourOfTheDay?: number, minuteOfTheHour?: number): string;
    /**
     * Every WeekDay
     * @param {number|string} startDay - Starting day (Monday=1, Sunday=0)
     * @param {number|string} endDay - Starting day (Monday=1, Sunday=0)
     * @returns {string}
     *
     * @example
     * cronTime.everyWeekDay()
     *  // Monday to Friday
     * cronTime.everyWeekDay('sunday', 'thursday')
     *  // Sunday to Thursday
     */
    static everyWeekDay(startDay?: string | number, endDay?: string | number): string;
    /**
     * Every WeekDay At
     * @param {number} hourOfTheDay - Hour of the day
     * @param {number} minuteOfTheHour - Minute of the hour
     * @param {number|string} startDay - Starting day
     * @param {number|string} endDay - Ending day
     * @returns {string}
     */
    static everyWeekDayAt(hourOfTheDay: number, minuteOfTheHour?: number, startDay?: string | number, endDay?: string | number): string;
    /**
     * Every Weekend
     * @param {number|string} startDay - Starting day (Monday=1, Sunday=0)
     * @param {number|string} endDay - Starting day (Monday=1, Sunday=0)
     * @returns {string}
     *
     * @example
     * cronTime.everyWeekend()
     *  // Saturday and Sunday
     * cronTime.everyWeekend('friday', 'saturday')
     *  // Friday and Saturday
     */
    static everyWeekend(startDay?: string | number, endDay?: string | number): string;
    /**
     * Every Weekend At
     * @param {number} hourOfTheDay - Hour of the day
     * @param {number} minuteOfTheHour - Minute of the hour
     * @param {number|string} startDay - Starting day
     * @param {number|string} endDay - Ending day
     * @returns {string}
     */
    static everyWeekendAt(hourOfTheDay: number, minuteOfTheHour?: number, startDay?: string | number, endDay?: string | number): string;
    /**
     * Every Month
     */
    static everyMonth(): string;
    /**
     * Every Month on
     * @param {number} dayOfTheMonth - Day of the month
     * @param {number} hourOfTheDay - Hour of the day
     * @param {number} minuteOfTheHour - Minute of the hour
     */
    static everyMonthOn(dayOfTheMonth: number, hourOfTheDay?: number, minuteOfTheHour?: number): string;
    /**
     * Every Year
     */
    static everyYear(): string;
    /**
     * Every Year In
     * @param {number} monthOfTheYear  - Month of the year
     * @param dayOfTheMonth - Day of the month
     * @param hourOfTheDay - Hour of the day
     * @param minuteOfTheHour - Minute of the hour.
     */
    static everyYearIn(monthOfTheYear: number, dayOfTheMonth?: number, hourOfTheDay?: number, minuteOfTheHour?: number): string;
    /**
     * Between Time Frames
     * @param {number} start - Start
     * @param {number} end - End
     */
    static between(start: number, end: number): EveryTime;
}
export = CronTime;
