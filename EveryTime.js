// @ts-check
const Helpers = require("./helpers");

/**
 * Every Time Class
 */
class EveryTime {
    /**
     *
     * @param {number[]|string|number} $every
     * @param {{}} $config
     */
    constructor($every, $config = {}) {
        if ($every === "even") $every = 2;
        this.interval = $every;

        this.config = Object.assign(this.config, $config);
        return this;
    }

    /**
     * Every nth Minute
     */
    minutes() {
        if (this.config["between"] && Array.isArray(this.interval)) {
            this.config["between"] = false;
            return Helpers.spliceIntoPosition(
                0,
                this.interval.join("-"),
                Helpers.minute()
            );
        }

        if (typeof this.interval === "number" && this.interval > 1) {
            return Helpers.spliceIntoPosition(0, "*/" + this.interval);
        } else if (this.interval === "uneven") {
            return Helpers.spliceIntoPosition(0, "1-59/2");
        }

        return Helpers.minute();
    }

    /**
     * Every nth Hour
     */
    hours() {
        if (this.config["between"] && Array.isArray(this.interval)) {
            this.config["between"] = false;
            return Helpers.spliceIntoPosition(
                1,
                this.interval.join("-"),
                Helpers.hour()
            );
        }

        if (typeof this.interval === "number" && this.interval > 1) {
            return Helpers.spliceIntoPosition(1, "*/" + this.interval);
        } else if (this.interval === "uneven") {
            return Helpers.spliceIntoPosition(1, "1-23/2");
        }

        return Helpers.hour();
    }

    /**
     * Every nth Days
     */
    days() {
        if (this.config["at"]) {
            this.config["at"] = false;
            return Helpers.spliceIntoPosition(2, this.config.at, Helpers.day());
        }

        if (this.config["between"] && Array.isArray(this.interval)) {
            this.config["between"] = false;
            return Helpers.spliceIntoPosition(
                2,
                this.interval.join("-"),
                Helpers.day()
            );
        }

        if (typeof this.interval === "number" && this.interval > 1) {
            return Helpers.spliceIntoPosition(2, "*/" + this.interval, Helpers.day());
        } else if (this.interval === "uneven") {
            return Helpers.spliceIntoPosition(2, "1-31/2", Helpers.day());
        }

        return Helpers.day();
    }
}

EveryTime.prototype.interval = 1;
EveryTime.prototype.config = {};

module.exports = EveryTime;
