// @ts-check
import Helpers from "./helpers";

type TimeInterval = number | "even" | "uneven" | number[];
type StringToAnyObject = { [key: string]: any };
type EveryTimeConfig = {
    between?: boolean
}

/**
 * Every Time Class
 */
class EveryTime {
    public interval: TimeInterval = 1;
    public config: EveryTimeConfig = {}

    /**
     *
     * @param {number[]|string|number} every
     * @param {{}} config
     */
    constructor(every: TimeInterval, config: StringToAnyObject = {}) {
        if (every === "even") every = 2;
        this.interval = every;

        this.config = Object.assign(this.config, config);
        return this;
    }

    /**
     * Every nth Minute
     */
    minutes(): string {
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
    hours(): string {
        const hour = Helpers.hour();

        if (this.config["between"] && Array.isArray(this.interval)) {
            this.config["between"] = false;
            return Helpers.spliceIntoPosition(
                1,
                this.interval.join("-"),
                hour
            );
        }

        if (typeof this.interval === "number" && this.interval > 1) {
            return Helpers.spliceIntoPosition(1, "*/" + this.interval, hour);
        } else if (this.interval === "uneven") {
            return Helpers.spliceIntoPosition(1, "1-23/2", hour);
        }

        return hour;
    }

    /**
     * Every nth Days after
     * @param hoursOfDay
     * @param $minutesOfDay
     */
    days(hoursOfDay = 0, $minutesOfDay = 0): string {
        const day = Helpers.day(hoursOfDay, $minutesOfDay);

        // if (this.config["at"]) {
        //     this.config["at"] = false;
        //
        //     return Helpers.spliceIntoPosition(2, this.config.at, day);
        // }

        if (this.config["between"] && Array.isArray(this.interval)) {
            this.config["between"] = false;
            return Helpers.spliceIntoPosition(
                2,
                this.interval.join("-"),
                day
            );
        }


        if (typeof this.interval === "number" && this.interval > 1) {
            return Helpers.spliceIntoPosition(2, "*/" + this.interval, day);
        } else if (this.interval === "uneven") {
            return Helpers.spliceIntoPosition(2, "1-31/2", day);
        }

        return day;
    }


}

export = EveryTime;