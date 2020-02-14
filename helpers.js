// @ts-check
let Helpers = {
    /**
     *
     * @param {number} $position
     * @param {*} $value
     * @param {string} $str
     */
    spliceIntoPosition($position, $value, $str = undefined) {
        if ($str === undefined) {
            $str = this.minute();
        }

        let $default = $str.split(' ');
        $default.splice($position, 1, $value);
        return $default.join(' ');
    },


    minute() {
        return '* * * * *';
    },

    hour() {
        return '0 * * * *'
    },

    day($hourOfTheDay = 0, $minuteOfTheHour = 0) {
        return `${$minuteOfTheHour} ${$hourOfTheDay} * * *`
    },

    /**
     * Get the integer representation of day string.
     * @param {string|number} day
     * @return {number}
     * @example
     *  Helpers.dayToInt('sunday') // 0
     *  Helpers.dayToInt('monday') // 1
     */
    dayToInt(day) {
        if (typeof day !== "string") return day;

        day = day.toLowerCase();

        switch (day) {
            case "sunday":
                return 0;
            case "monday":
                return 1;
            case "tuesday":
                return 2;
            case "wednesday":
                return 3;
            case "thursday":
                return 4;
            case "friday":
                return 5;
            case "saturday":
                return 6;
            default:
                throw Error(`Day: "${day}" is not a valid day.`);
        }
    },


    /**
     * Checks of startDay and endDay follows calendar sequence.
     * else throws error.
     * @param $startDay
     * @param $endDay
     */
    validateStartToEndDay($startDay, $endDay) {
        if ($startDay > $endDay) throw Error("$startDay must come before $endDay following calendar sequence.");
    }
};

module.exports = Helpers;
