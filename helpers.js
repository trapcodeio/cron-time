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
        return this.spliceIntoPosition(0, 0)
    },

    day($value = 0) {
        return this.spliceIntoPosition(1, $value, this.hour())
    },

    sunday($hourOfTheDay = 0) {
        return `0 ${$hourOfTheDay} * * SUN`
    },

    monday($hourOfTheDay = 0) {
        return `0 ${$hourOfTheDay} * * MON`
    },

    tuesday($hourOfTheDay = 0) {
        return `0 ${$hourOfTheDay} * * TUE`
    },

    wednesday($hourOfTheDay = 0) {
        return `0 ${$hourOfTheDay} * * WED`
    },

    thursday($hourOfTheDay = 0) {
        return `0 ${$hourOfTheDay} * * THU`
    },

    friday($hourOfTheDay = 0) {
        return `0 ${$hourOfTheDay} * * FRI`
    },

    saturday($hourOfTheDay = 0) {
        return `0 ${$hourOfTheDay} * * SAT`
    },

    week($hourOfTheDay = 0, $dayOfTheWeek = 0) {
        return `0 ${$hourOfTheDay} * * ${$dayOfTheWeek}`
    },

    month($value = 1) {
        return this.spliceIntoPosition(2, $value, this.day())
    },

    year($monthOfTheYear = 1) {
        return `0 0 1 ${$monthOfTheYear} *`;
    }
};

module.exports = Helpers;