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
};

module.exports = Helpers;
