/**
 * Days dictionary.
 */
export const Days = {
    sun: 0,
    mon: 1,
    tue: 2,
    wed: 3,
    thu: 4,
    fri: 5,
    sat: 6,
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6
};

export default {
    /**
     * Put a character in a string using position.
     * @param {number} position
     * @param {*} char
     * @param {string} str
     */
    spliceIntoPosition(
        position: number,
        char: string,
        str: string | undefined = undefined
    ): string {
        if (str === undefined) {
            str = this.minute();
        }

        let def = str.split(" ");
        def.splice(position, 1, char);
        return def.join(" ");
    },

    /**
     * Get cron minute string.
     */
    minute(): string {
        return "* * * * *";
    },

    /**
     * Get cron hour String.
     */
    hour(): string {
        return "0 * * * *";
    },

    /**
     * Get Cron day string, with an option of setting: `hoursOfTheDay and minutesOfTheHour`
     * @param hoursOfTheDay
     * @param minutesOfTheHour
     */
    day(hoursOfTheDay: number | number[] = 0, minutesOfTheHour: number | number[] = 0): string {
        return `${minutesOfTheHour} ${hoursOfTheDay} * * *`;
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
        day = day.trim().toLowerCase();

        if (!Days.hasOwnProperty(day)) throw Error(`Day: "${day}" is not a valid day.`);

        return Days[day as keyof typeof Days];
    },

    /**
     * Get the integer representation of multiple day strings.
     * @param days
     */
    daysToIntegers(days: string | number | Array<string | number>): number[] {
        if (!Array.isArray(days)) days = [days];
        return days.map((day) => this.dayToInt(day));
    },

    /**
     * Checks if startDay and endDay follows a calendar sequence.
     * else throws error.
     * @param startDay
     * @param endDay
     */
    validateStartToEndDay(startDay: number, endDay: number) {
        if (startDay > endDay)
            throw Error("startDay must come before endDay following normal calendar sequence.");
    }
};
