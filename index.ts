import Helpers from './helpers';
import EveryTime from './EveryTime';

/**
 * Cron Time Class
 */
class CronTime {
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
     * @param minuteOfTheHour - Minute of the hour.
     * @returns {string}
     */
    static everyHourAt(minuteOfTheHour: number): string {
        return `${minuteOfTheHour} * * * *`
    }

    /**
     * Every Day
     */
    static everyDay(): string {
        return Helpers.day();
    }

    /**
     * Every Day At
     * @param {number} hourOfTheDay - Hour of the day
     * @param {number} minuteOfTheHour - Minute of the Hour
     */
    static everyDayAt(hourOfTheDay: number, minuteOfTheHour: number = 0): string {
        return `${minuteOfTheHour} ${hourOfTheDay} * * *`;
    }

    /**
     * Every Sunday
     */
    static everySunday(): string {
        return CronTime.everySundayAt(0);
    }

    /**
     * Every Sunday At
     * @param {number} hourOfTheDay - Hour Of the Day
     * @param {number} minuteOfTheHour - Minute of the hour.
     */
    static everySundayAt(hourOfTheDay: number, minuteOfTheHour: number = 0): string {
        return `${minuteOfTheHour} ${hourOfTheDay} * * SUN`;
    }


    /**
     * Every Monday
     */
    static everyMonday(): string {
        return CronTime.everyMondayAt(0);
    }

    /**
     * Every Monday At
     * @param {number} hourOfTheDay - Hour Of the Day
     * @param {number} minuteOfTheHour - Minute of the hour.
     */
    static everyMondayAt(hourOfTheDay: number, minuteOfTheHour = 0): string {
        return `${minuteOfTheHour} ${hourOfTheDay} * * MON`;
    }

    /**
     * Every Tuesday
     */
    static everyTuesday(): string {
        return CronTime.everyTuesdayAt(0);
    }

    /**
     * Every Tuesday At
     * @param {number} hourOfTheDay - Hour Of the Day
     * @param {number} minuteOfTheHour - Minute of the hour.
     */
    static everyTuesdayAt(hourOfTheDay: number, minuteOfTheHour = 0): string {
        return `${minuteOfTheHour} ${hourOfTheDay} * * TUE`;
    }

    /**
     * Every Wednesday
     */
    static everyWednesday(): string {
        return CronTime.everyWednesdayAt(0);
    }

    /**
     * Every Wednesday At
     * @param {number} hourOfTheDay - Hour Of the Day
     * @param {number} minuteOfTheHour - Minute of the hour.
     */
    static everyWednesdayAt(hourOfTheDay: number, minuteOfTheHour = 0): string {
        return `${minuteOfTheHour} ${hourOfTheDay} * * WED`;
    }

    /**
     * Every Thursday
     */
    static everyThursday(): string {
        return CronTime.everyThursdayAt(0);
    }

    /**
     * Every Thursday At
     * @param {number} hourOfTheDay - Hour Of the Day
     * @param {number} minuteOfTheHour - Minute of the hour.
     */
    static everyThursdayAt(hourOfTheDay: number, minuteOfTheHour: number = 0): string {
        return `${minuteOfTheHour} ${hourOfTheDay} * * THU`;
    }

    /**
     * Every Friday
     */
    static everyFriday(): string {
        return CronTime.everyFridayAt(0);
    }

    /**
     * Every Friday At
     * @param {number} hourOfTheDay - Hour Of the Day
     * @param {number} minuteOfTheHour - Minute of the hour.
     */
    static everyFridayAt(hourOfTheDay: number, minuteOfTheHour: number = 0): string {
        return `${minuteOfTheHour} ${hourOfTheDay} * * FRI`;
    }

    /**
     * Every Saturday
     */
    static everySaturday(): string {
        return CronTime.everySundayAt(0);
    }

    /**
     * Every Saturday At
     * @param {number} hourOfTheDay - Hour Of the Day
     * @param {number} minuteOfTheHour - Minute of the hour.
     */
    static everySaturdayAt(hourOfTheDay: number, minuteOfTheHour: number = 0): string {
        return `${minuteOfTheHour} ${hourOfTheDay} * * SAT`;
    }

    /**
     * On Specific Days
     * @param {(string|number)[]} days
     */
    static onSpecificDays(days: (string | number)[]) {
        if (!Array.isArray(days) || days.length === 0) {
            throw new Error("onSpecificDays requires days to be an array of days string.");
        }
        days = Helpers.daysToIntegers(days);
        return `0 0 * * ${days}`
    }


    /**
     * On Specific Days At
     * @param {(string|number)[]} days
     * @param {number} hourOfTheDay - Hour of the Day
     * @param {number} minuteOfTheHour - Minute of the hour
     */
    static onSpecificDaysAt(days: (string | number)[], hourOfTheDay: number, minuteOfTheHour: number = 0) {
        if (!Array.isArray(days) || days.length === 0) {
            throw new Error("onSpecificDays requires days to be an array of days string.");
        }

        days = Helpers.daysToIntegers(days);
        return `${minuteOfTheHour} ${hourOfTheDay} * * ${days}`
    }

    /**
     * Every Week
     */
    static everyWeek(): string {
        return CronTime.everyWeekAt(0);
    }

    /**
     * Every Week At
     * @param {number} dayOfTheWeek - Day of the week
     * @param {number} hourOfTheDay - Hour of the day.
     * @param {number} minuteOfTheHour - Minute of the hour
     */
    static everyWeekAt(dayOfTheWeek: number | string, hourOfTheDay: number = 0, minuteOfTheHour: number = 0): string {
        return `${minuteOfTheHour} ${hourOfTheDay} * * ${dayOfTheWeek}`
    }

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
    static everyWeekDay(startDay: string | number = 'monday', endDay: string | number = 'friday'): string {
        startDay = Helpers.dayToInt(startDay);
        endDay = Helpers.dayToInt(endDay);

        Helpers.validateStartToEndDay(startDay, endDay);

        return `0 0 * * ${startDay}-${endDay}`
    }

    /**
     * Every WeekDay At
     * @param {number} hourOfTheDay - Hour of the day
     * @param {number} minuteOfTheHour - Minute of the hour
     * @param {number|string} startDay - Starting day
     * @param {number|string} endDay - Ending day
     * @returns {string}
     */
    static everyWeekDayAt(hourOfTheDay: number, minuteOfTheHour: number = 0, startDay: string | number = 'monday', endDay: string | number = 'friday'): string {
        startDay = Helpers.dayToInt(startDay);
        endDay = Helpers.dayToInt(endDay);

        Helpers.validateStartToEndDay(startDay, endDay);

        return `${minuteOfTheHour} ${hourOfTheDay} * * ${startDay}-${endDay}`
    }

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
    static everyWeekend(startDay: string | number = 'saturday', endDay: string | number = 'sunday'): string {
        startDay = Helpers.dayToInt(startDay);
        endDay = Helpers.dayToInt(endDay);

        return `0 0 * * ${startDay},${endDay}`
    }

    /**
     * Every Weekend At
     * @param {number} hourOfTheDay - Hour of the day
     * @param {number} minuteOfTheHour - Minute of the hour
     * @param {number|string} startDay - Starting day
     * @param {number|string} endDay - Ending day
     * @returns {string}
     */
    static everyWeekendAt(hourOfTheDay: number, minuteOfTheHour: number = 0, startDay: string | number = 'saturday', endDay: string | number = 'sunday'): string {
        startDay = Helpers.dayToInt(startDay);
        endDay = Helpers.dayToInt(endDay);

        return `${minuteOfTheHour} ${hourOfTheDay} * * ${startDay},${endDay}`
    }

    /**
     * Every Month
     */
    static everyMonth(): string {
        return CronTime.everyMonthOn(1);
    }

    /**
     * Every Month on
     * @param {number} dayOfTheMonth - Day of the month
     * @param {number} hourOfTheDay - Hour of the day
     * @param {number} minuteOfTheHour - Minute of the hour
     */
    static everyMonthOn(dayOfTheMonth: number, hourOfTheDay = 0, minuteOfTheHour = 0): string {
        return `${minuteOfTheHour} ${hourOfTheDay} ${dayOfTheMonth} * *`;
    }

    /**
     * Every Year
     */
    static everyYear(): string {
        return CronTime.everyYearIn(1)
    }

    /**
     * Every Year In
     * @param {number} monthOfTheYear  - Month of the year
     * @param dayOfTheMonth - Day of the month
     * @param hourOfTheDay - Hour of the day
     * @param minuteOfTheHour - Minute of the hour.
     */
    static everyYearIn(monthOfTheYear: number, dayOfTheMonth: number = 1, hourOfTheDay: number = 0, minuteOfTheHour: number = 0): string {
        return `${minuteOfTheHour} ${hourOfTheDay} ${dayOfTheMonth} ${monthOfTheYear} *`;
    }

    /**
     * Between Time Frames
     * @param {number} start - Start
     * @param {number} end - End
     */
    static between(start: number, end: number) {
        return new EveryTime([start, end], {
            between: true
        })
    }

}

export = CronTime;
