import Helpers, { Days } from "./helpers";
import EveryTime from "./EveryTime";

type MinutesOfTheHour = number | number[];
type HoursOfTheDay = number | number[];

/**
 * Cron Time Class
 */
export class CronTime {
    /**
     * Every nth Time
     * @return {EveryTime}
     * @param interval
     */
    static every(interval: number): EveryTime {
        return new EveryTime(interval);
    }

    /**
     * Every Minute
     */
    static everyMinute(): string {
        return Helpers.minute();
    }

    /**
     * Every Hour
     */
    static everyHour(): string {
        return Helpers.hour();
    }

    /**
     * Every Hour At
     * @param {number|number[]} minutesOfTheHour - Minutes of the hour.
     * @returns {string}
     */
    static everyHourAt(minutesOfTheHour: number | number[]): string {
        return `${minutesOfTheHour} * * * *`;
    }

    /**
     * Every Day
     */
    static everyDay(): string {
        return Helpers.day();
    }

    /**
     * Every Day At
     * @param {number|number[]} hoursOfTheDay - Hours of the day
     * @param {number|number[]} minutesOfTheHour - Minutes of the Hour
     */
    static everyDayAt(
        hoursOfTheDay: number | number[],
        minutesOfTheHour: number | number[] = 0
    ): string {
        return `${minutesOfTheHour} ${hoursOfTheDay} * * *`;
    }

    /**
     * Every Sunday
     */
    static everySunday(): string {
        return CronTime.everySundayAt(0);
    }

    /**
     * Every Sunday At
     * @param {number|number[]} hoursOfTheDay - Hours Of the Day
     * @param {number|number[]} minutesOfTheHour - Minutes of the hour.
     */
    static everySundayAt(
        hoursOfTheDay: number | number[],
        minutesOfTheHour: number | number[] = 0
    ): string {
        return `${minutesOfTheHour} ${hoursOfTheDay} * * ${Days.sunday}`;
    }

    /**
     * Every Monday
     */
    static everyMonday(): string {
        return CronTime.everyMondayAt(0);
    }

    /**
     * Every Monday At
     * @param {number|number[]} hoursOfTheDay - Hours Of the Day
     * @param {number|number[]} minutesOfTheHour - Minutes of the hour.
     */
    static everyMondayAt(
        hoursOfTheDay: number | number[],
        minutesOfTheHour: number | number[] = 0
    ): string {
        return `${minutesOfTheHour} ${hoursOfTheDay} * * ${Days.monday}`;
    }

    /**
     * Every Tuesday
     */
    static everyTuesday(): string {
        return CronTime.everyTuesdayAt(0);
    }

    /**
     * Every Tuesday At
     * @param {number|number[]} hoursOfTheDay - Hours Of the Day
     * @param {number|number[]} minutesOfTheHour - Minutes of the hour.
     */
    static everyTuesdayAt(
        hoursOfTheDay: number | number[],
        minutesOfTheHour: number | number[] = 0
    ): string {
        return `${minutesOfTheHour} ${hoursOfTheDay} * * ${Days.tuesday}`;
    }

    /**
     * Every Wednesday
     */
    static everyWednesday(): string {
        return CronTime.everyWednesdayAt(0);
    }

    /**
     * Every Wednesday At
     * @param {number|number[]} hoursOfTheDay - Hours Of the Day
     * @param {number|number[]} minutesOfTheHour - Minutes of the hour.
     */
    static everyWednesdayAt(
        hoursOfTheDay: number | number[],
        minutesOfTheHour: number | number[] = 0
    ): string {
        return `${minutesOfTheHour} ${hoursOfTheDay} * * ${Days.wednesday}`;
    }

    /**
     * Every Thursday
     */
    static everyThursday(): string {
        return CronTime.everyThursdayAt(0);
    }

    /**
     * Every Thursday At
     * @param {number|number[]} hoursOfTheDay - Hours Of the Day
     * @param {number|number[]} minutesOfTheHour - Minutes of the hour.
     */
    static everyThursdayAt(
        hoursOfTheDay: number | number[],
        minutesOfTheHour: number | number[] = 0
    ): string {
        return `${minutesOfTheHour} ${hoursOfTheDay} * * ${Days.thursday}`;
    }

    /**
     * Every Friday
     */
    static everyFriday(): string {
        return CronTime.everyFridayAt(0);
    }

    /**
     * Every Friday At
     * @param {number|number[]} hoursOfTheDay - Hours Of the Day
     * @param {number|number[]} minutesOfTheHour - Minutes of the hour.
     */
    static everyFridayAt(
        hoursOfTheDay: number | number[],
        minutesOfTheHour: number | number[] = 0
    ): string {
        return `${minutesOfTheHour} ${hoursOfTheDay} * * ${Days.friday}`;
    }

    /**
     * Every Saturday
     */
    static everySaturday(): string {
        return CronTime.everySaturdayAt(0);
    }

    /**
     * Every Saturday At
     * @param {number|number[]} hoursOfTheDay - Hours Of the Day
     * @param {number|number[]} minutesOfTheHour - Minutes of the hour.
     */
    static everySaturdayAt(
        hoursOfTheDay: number | number[],
        minutesOfTheHour: number | number[] = 0
    ): string {
        return `${minutesOfTheHour} ${hoursOfTheDay} * * ${Days.saturday}`;
    }

    /**
     * On Specific Days
     * @param {(string|number)[]} days
     */
    static onSpecificDays(days: (string | number)[]) {
        if (!Array.isArray(days) || days.length === 0) {
            throw new Error("onSpecificDays expects days to be an array of days string.");
        }

        days = Helpers.daysToIntegers(days);
        return `0 0 * * ${days}`;
    }

    /**
     * On Specific Days At
     * @param {(string|number)[]} days
     * @param {number|number[]} hoursOfTheDay - Hours of the Day
     * @param {number|number[]} minutesOfTheHour - Minutes of the hour
     */
    static onSpecificDaysAt(
        days: (string | number)[],
        hoursOfTheDay: number | number[],
        minutesOfTheHour: number | number[] = 0
    ) {
        if (!Array.isArray(days) || days.length === 0) {
            throw new Error("onSpecificDaysAt expects days to be an array of days string.");
        }

        days = Helpers.daysToIntegers(days);
        return `${minutesOfTheHour} ${hoursOfTheDay} * * ${days}`;
    }

    /**
     * Every Week
     */
    static everyWeek(): string {
        return CronTime.everyWeekAt(0);
    }

    /**
     * Every Week At
     * @param {number|number[]|string|string[]} daysOfTheWeek - Days of the week
     * @param {number|number[]} hoursOfTheDay - Hours of the day.
     * @param {number|number[]} minutesOfTheHour - Minutes of the hour
     */
    static everyWeekAt(
        daysOfTheWeek: number | string | number[] | string[],
        hoursOfTheDay: number | number[] = 0,
        minutesOfTheHour: number | number[] = 0
    ): string {
        const days = Helpers.daysToIntegers(daysOfTheWeek);
        return `${minutesOfTheHour} ${hoursOfTheDay} * * ${days}`;
    }

    /**
     * Every WeekDay
     * @param {number|string} startDay - Starting day (Monday=1, Sunday=0)
     * @param {number|string} endDay - Starting day (Monday=1, Sunday=0)
     * @returns {string}
     *
     * @example
     * CronTime.everyWeekDay()
     *  // Monday to Friday
     * CronTime.everyWeekDay('sunday', 'thursday')
     *  // Sunday to Thursday
     */
    static everyWeekDay(
        startDay: string | number = "monday",
        endDay: string | number = "friday"
    ): string {
        return this.everyWeekDayAt(0, 0, startDay, endDay);
    }

    /**
     * Every WeekDay At
     * @param {number|number[]} hoursOfTheDay - Hours of the day
     * @param {number|number[]} minutesOfTheHour - Minutes of the hour
     * @param {number|string} startDay - Starting day
     * @param {number|string} endDay - Ending day
     * @returns {string}
     */
    static everyWeekDayAt(
        hoursOfTheDay: number | number[],
        minutesOfTheHour: number | number[] = 0,
        startDay: string | number = "monday",
        endDay: string | number = "friday"
    ): string {
        startDay = Helpers.dayToInt(startDay);
        endDay = Helpers.dayToInt(endDay);

        Helpers.validateStartToEndDay(startDay, endDay);

        return `${minutesOfTheHour} ${hoursOfTheDay} * * ${startDay}-${endDay}`;
    }

    /**
     * Every Weekend
     * @param {number|string} startDay - Starting day (Monday=1, Sunday=0)
     * @param {number|string} endDay - Starting day (Monday=1, Sunday=0)
     * @returns {string}
     *
     * @example
     * CronTime.everyWeekend()
     *  // Saturday and Sunday
     * CronTime.everyWeekend('friday', 'saturday')
     *  // Friday and Saturday
     */
    static everyWeekend(
        startDay: string | number = "saturday",
        endDay: string | number = "sunday"
    ): string {
        return this.everyWeekendAt(0, 0, startDay, endDay);
    }

    /**
     * Every Weekend At
     * @param {number|number[]} hoursOfTheDay - Hours of the day
     * @param {number|number[]} minutesOfTheHour - Minutes of the hour
     * @param {number|string} startDay - Starting day
     * @param {number|string} endDay - Ending day
     * @returns {string}
     */
    static everyWeekendAt(
        hoursOfTheDay: number | number[],
        minutesOfTheHour: number | number[] = 0,
        startDay: string | number = "saturday",
        endDay: string | number = "sunday"
    ): string {
        const days = Helpers.daysToIntegers([startDay, endDay]);
        return `${minutesOfTheHour} ${hoursOfTheDay} * * ${days}`;
    }

    /**
     * Every Month
     */
    static everyMonth(): string {
        return CronTime.everyMonthOn(1);
    }

    /**
     * Every Month on
     * @param {number|number[]} daysOfTheMonth - Days of the month
     * @param {number|number[]} hoursOfTheDay - Hours of the day
     * @param {number|number[]} minutesOfTheHour - Minutes of the hour
     */
    static everyMonthOn(
        daysOfTheMonth: number | number[],
        hoursOfTheDay: number | number[] = 0,
        minutesOfTheHour: number | number[] = 0
    ): string {
        const days = Helpers.daysToIntegers(daysOfTheMonth);
        return `${minutesOfTheHour} ${hoursOfTheDay} ${days} * *`;
    }

    /**
     * Every Year
     */
    static everyYear(): string {
        return CronTime.everyYearIn(1);
    }

    /**
     * Every Year In
     * @param {number|number[]} monthsOfTheYear  - Months of the year
     * @param daysOfTheMonth - Days of the month
     * @param hoursOfTheDay - Hours of the day
     * @param minutesOfTheHour - Minutes of the hour.
     */
    static everyYearIn(
        monthsOfTheYear: number | number[],
        daysOfTheMonth: number | number[] = 1,
        hoursOfTheDay: number | number[] = 0,
        minutesOfTheHour: number | number[] = 0
    ): string {
        const days = Helpers.daysToIntegers(daysOfTheMonth);
        return `${minutesOfTheHour} ${hoursOfTheDay} ${days} ${monthsOfTheYear} *`;
    }

    /**
     * Between Time Frames
     * @param {number} start - Start
     * @param {number} end - End
     */
    static between(start: number, end: number) {
        return new EveryTime([start, end], {
            between: true
        });
    }
}

export default CronTime;
