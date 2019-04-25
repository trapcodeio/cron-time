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
     * Every Day
     */
    static everyDay() {
        return Helpers.day();
    }

    /**
     * Every Day At
     * @param {number} $hourOfTheDay - Hour of the Day
     */
    static everyDayAt($hourOfTheDay) {
        return Helpers.day($hourOfTheDay);
    }

    /**
     * Every Sunday
     */
    static everySunday() {
        return Helpers.sunday();
    }

    /**
     * Every Sunday At
     * @param {number} $hourOfTheDay - Hour Of the Day
     */
    static everySundayAt($hourOfTheDay) {
        return Helpers.sunday($hourOfTheDay);
    }


    /**
     * Every Monday
     */
    static everyMonday() {
        return Helpers.monday();
    }

    /**
     * Every Monday At
     * @param {number} $hourOfTheDay - Hour of the day.
     */
    static everyMondayAt($hourOfTheDay) {
        return Helpers.monday($hourOfTheDay);
    }

    /**
     * Every Tuesday
     */
    static everyTuesday() {
        return Helpers.tuesday();
    }

    /**
     * Every Tuesday At
     * @param {number} $hourOfTheDay - Hour of the day.
     */
    static everyTuesdayAt($hourOfTheDay) {
        return Helpers.tuesday($hourOfTheDay);
    }

    /**
     * Every Wednesday
     */
    static everyWednesday() {
        return Helpers.wednesday();
    }

    /**
     * Every Wednesday At
     * @param {number} $hourOfTheDay - Hour of the day.
     */
    static everyWednesdayAt($hourOfTheDay) {
        return Helpers.wednesday($hourOfTheDay);
    }

    /**
     * Every Thursday
     */
    static everyThursday() {
        return Helpers.thursday();
    }

    /**
     * Every Thurday At
     * @param {number} $hourOfTheDay - Hour of the day.
     */
    static everyThursdayAt($hourOfTheDay) {
        return Helpers.thursday($hourOfTheDay);
    }

    /**
     * Every Friday
     */
    static everyFriday() {
        return Helpers.friday();
    }

    /**
     * Every Friday At
     * @param {number} $hourOfTheDay - Hour of the day.
     */
    static everyFridayAt($hourOfTheDay) {
        return Helpers.friday($hourOfTheDay);
    }

    /**
     * Every Saturday
     */
    static everySaturday() {
        return Helpers.saturday();
    }

    /**
     * Every Saturday At
     * @param {number} $hourOfTheDay - Hour of the day.
     */
    static everySaturdayAt($hourOfTheDay) {
        return Helpers.saturday($hourOfTheDay);
    }

    /**
     * Every Week
     */
    static everyWeek() {
        return Helpers.week();
    }

    /**
     * Every Week At
     * @param {number} $hourOfTheDay - Hour of the day.
     * @param {number} $dayOfTheWeek - Day of the week
     */
    static everyWeekAt($hourOfTheDay, $dayOfTheWeek = 0) {
        return Helpers.week($hourOfTheDay, $dayOfTheWeek);
    }

    /**
     * Every Month
     */
    static everyMonth() {
        return Helpers.month();
    }

    /**
     * Every Month on
     * @param {number} $dayOfTheMonth - Day of the month
     */
    static everyMonthOn($dayOfTheMonth = 1) {
        return Helpers.month($dayOfTheMonth);
    }

    /**
     * Every Year
     */
    static everyYear() {
        return Helpers.year()
    }

    /**
     * Every Year In
     * @param {number} $monthOfTheYear  - Month of the year
     */
    static everyYearIn($monthOfTheYear) {
        return Helpers.year($monthOfTheYear)
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