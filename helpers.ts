const DaysDictionary: Record<string,number> = {
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
    saturday: 6,
};

export = {
    /**
     * @param {number} position
     * @param {*} value
     * @param {string} str
     */
    spliceIntoPosition(position: number, value: string, str: string | undefined = undefined): string {
        if (str === undefined) {
            str = this.minute();
        }

        let def = str.split(' ');
        def.splice(position, 1, value);
        return def.join(' ');
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
        day = day.trim().toLowerCase();

        if (!DaysDictionary.hasOwnProperty(day))
            throw Error(`Day: "${day}" is not a valid day.`);

        return DaysDictionary[day];
    },


    /**
     * Get the integer representation of multiple day strings.
     * @param days
     */
    daysToIntegers(days: (string | number)[]): number[] {
        const newDays: number[] = [];
        for (const day of days) {
            if (typeof day === "string") {
                newDays.push(this.dayToInt(day))
            } else {
                newDays.push(day);
            }
        }

        return newDays;
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
