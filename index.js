let Helpers = require('./helpers');
const EveryTime = require('./EveryTime');

/**
 * Cron Time Class
 */
class CronTime {
    /**
     * Every nth Time
     * @param $int
     * @return {EveryTime}
     */
    static every($int) {
        return new EveryTime($int);
    }

    /**
     * Every Minute
     */
    static everyMinute() {
        return Helpers.minute();
    }

    /**
     * Every Hour
     */
    static everyHour() {
        return Helpers.hour();
    }


    /**
     * Every Hour At
     * @param $minuteOfTheHour - Minute of the hour.
     * @returns {string}
     */
    static everyHourAt($minuteOfTheHour) {
        return `${$minuteOfTheHour} * * * *`
    }

    /**
     * Every Day
     */
    static everyDay() {
        return Helpers.day();
    }

    /**
     * Every Day At
     * @param {number} $hourOfTheDay - Hour of the day
     * @param {number} $minuteOfTheHour - Minute of the Hour
     */
    static everyDayAt($hourOfTheDay, $minuteOfTheHour = 0) {
        return `${$minuteOfTheHour} ${$hourOfTheDay} * * *`;
    }

    /**
     * Every Sunday
     */
    static everySunday() {
        return CronTime.everySundayAt(0);
    }

    /**
     * Every Sunday At
     * @param {number} $hourOfTheDay - Hour Of the Day
     * @param {number} $minuteOfTheHour - Minute of the hour.
     */
    static everySundayAt($hourOfTheDay, $minuteOfTheHour = 0) {
        return `${$minuteOfTheHour} ${$hourOfTheDay} * * SUN`;
    }


    /**
     * Every Monday
     */
    static everyMonday() {
        return CronTime.everyMondayAt(0);
    }

    /**
     * Every Monday At
     * @param {number} $hourOfTheDay - Hour Of the Day
     * @param {number} $minuteOfTheHour - Minute of the hour.
     */
    static everyMondayAt($hourOfTheDay, $minuteOfTheHour = 0) {
        return `${$minuteOfTheHour} ${$hourOfTheDay} * * SUN`;
    }

    /**
     * Every Tuesday
     */
    static everyTuesday() {
        return CronTime.everyTuesdayAt(0);
    }

    /**
     * Every Tuesday At
     * @param {number} $hourOfTheDay - Hour Of the Day
     * @param {number} $minuteOfTheHour - Minute of the hour.
     */
    static everyTuesdayAt($hourOfTheDay, $minuteOfTheHour = 0) {
        return `${$minuteOfTheHour} ${$hourOfTheDay} * * TUE`;
    }

    /**
     * Every Wednesday
     */
    static everyWednesday() {
        return CronTime.everyWednesdayAt(0);
    }

    /**
     * Every Wednesday At
     * @param {number} $hourOfTheDay - Hour Of the Day
     * @param {number} $minuteOfTheHour - Minute of the hour.
     */
    static everyWednesdayAt($hourOfTheDay, $minuteOfTheHour = 0) {
        return `${$minuteOfTheHour} ${$hourOfTheDay} * * WED`;
    }

    /**
     * Every Thursday
     */
    static everyThursday() {
        return CronTime.everyThursdayAt(0);
    }

    /**
     * Every Thursday At
     * @param {number} $hourOfTheDay - Hour Of the Day
     * @param {number} $minuteOfTheHour - Minute of the hour.
     */
    static everyThursdayAt($hourOfTheDay, $minuteOfTheHour = 0) {
        return `${$minuteOfTheHour} ${$hourOfTheDay} * * THU`;
    }

    /**
     * Every Friday
     */
    static everyFriday() {
        return CronTime.everyFridayAt(0);
    }

    /**
     * Every Friday At
     * @param {number} $hourOfTheDay - Hour Of the Day
     * @param {number} $minuteOfTheHour - Minute of the hour.
     */
    static everyFridayAt($hourOfTheDay, $minuteOfTheHour = 0) {
        return `${$minuteOfTheHour} ${$hourOfTheDay} * * FRI`;
    }

    /**
     * Every Saturday
     */
    static everySaturday() {
        return CronTime.everySundayAt(0);
    }

    /**
     * Every Saturday At
     * @param {number} $hourOfTheDay - Hour Of the Day
     * @param {number} $minuteOfTheHour - Minute of the hour.
     */
    static everySaturdayAt($hourOfTheDay, $minuteOfTheHour = 0) {
        return `${$minuteOfTheHour} ${$hourOfTheDay} * * SAT`;
    }

    /**
     * Every Week
     */
    static everyWeek() {
        return CronTime.everyWeekAt(0);
    }

    /**
     * Every Week At
     * @param {number} $dayOfTheWeek - Day of the week
     * @param {number} $hourOfTheDay - Hour of the day.
     * @param {number} $minuteOfTheHour - Minute of the hour
     */
    static everyWeekAt($dayOfTheWeek, $hourOfTheDay = 0, $minuteOfTheHour = 0) {
        return `${$minuteOfTheHour} ${$hourOfTheDay} * * ${$dayOfTheWeek}`
    }

    /**
     * Every Month
     */
    static everyMonth() {
        return CronTime.everyMonthOn(1);
    }

    /**
     * Every Month on
     * @param {number} $dayOfTheMonth - Day of the month
     * @param {number} $hourOfTheDay - Hour of the day
     * @param {number} $minuteOfTheHour - Minute of the hour
     */
    static everyMonthOn($dayOfTheMonth, $hourOfTheDay = 0, $minuteOfTheHour = 0) {
        return `${$minuteOfTheHour} ${$hourOfTheDay} ${$dayOfTheMonth} * *`;
    }

    /**
     * Every Year
     */
    static everyYear() {
        return CronTime.everyYearIn(1)
    }

    /**
     * Every Year In
     * @param {number} $monthOfTheYear  - Month of the year
     * @param $dayOfTheMonth - Day of the month
     * @param $hourOfTheDay - Hour of the day
     * @param $minuteOfTheHour - Minute of the hour.
     */
    static everyYearIn($monthOfTheYear, $dayOfTheMonth = 1, $hourOfTheDay = 0, $minuteOfTheHour = 0) {
        return `${$minuteOfTheHour} ${$hourOfTheDay} ${$dayOfTheMonth} ${$monthOfTheYear} *`;
    }

    /**
     * Between Time Frames
     * @param {number} $start - Start
     * @param {number} $end - End
     */
    static between($start, $end) {
        return new EveryTime([$start, $end], {
            between: true
        })
    }

}

module.exports = CronTime;
