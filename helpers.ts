// @ts-check
export = {
    /**
     *
     * @param {number} $position
     * @param {*} $value
     * @param {string} $str
     */
    spliceIntoPosition($position: number, $value: string, $str: string | undefined = undefined): string {
        if ($str === undefined) {
            $str = this.minute();
        }

        let $default = $str.split(' ');
        $default.splice($position, 1, $value);
        return $default.join(' ');
    },


    minute(): string {
        return '* * * * *';
    },

    hour(): string {
        return '0 * * * *'
    },

    day(hourOfTheDay: number = 0, minuteOfTheHour: number = 0): string {
        return `${minuteOfTheHour} ${hourOfTheDay} * * *`
    },

    /**
     * Get the integer representation of day string.
     * @param {string|number} day
     * @return {number}
     * @example
     *  Helpers.dayToInt('sunday') // 0
     *  Helpers.dayToInt('monday') // 1
     */
    dayToInt(day: number | string): number {
        if (typeof day === "number") return day;
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
     * @param startDay
     * @param endDay
     */
    validateStartToEndDay(startDay: number, endDay: number) {
        if (startDay > endDay) throw Error("startDay must come before endDay following normal calendar sequence.");
    }
};
