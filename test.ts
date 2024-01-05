import test = require("japa");
import CronTime from "./index";

type TestItem = {
    title: string;
    expects: string;
    test: () => string;
};

const tests: TestItem[] = [
    {
        title: "everyMinute",
        expects: "* * * * *",
        test: () => CronTime.everyMinute()
    },
    {
        title: "everyHour()",
        expects: "0 * * * *",
        test: () => CronTime.everyHour()
    },
    {
        title: "everyHourAt(15)",
        expects: "15 * * * *",
        test: () => CronTime.everyHourAt(15)
    },
    {
        title: "everyDay()",
        expects: "0 0 * * *",
        test: () => CronTime.everyDay()
    },
    {
        title: "everyDayAt(10, 30)",
        expects: "30 10 * * *",
        test: () => CronTime.everyDayAt(10, 30)
    },
    {
        title: "everySunday()",
        expects: "0 0 * * 0",
        test: () => CronTime.everySunday()
    },
    {
        title: "everySundayAt(9, 30)",
        expects: "30 9 * * 0",
        test: () => CronTime.everySundayAt(9, 30)
    },
    {
        title: "everyMonday()",
        expects: "0 0 * * 1",
        test: () => CronTime.everyMonday()
    },
    {
        title: "everyMondayAt(9, 30)",
        expects: "30 9 * * 1",
        test: () => CronTime.everyMondayAt(9, 30)
    },
    {
        title: "everyTuesday",
        expects: "0 0 * * 2",
        test: () => CronTime.everyTuesday()
    },
    {
        title: "everyTuesdayAt(9, 30)",
        expects: "30 9 * * 2",
        test: () => CronTime.everyTuesdayAt(9, 30)
    },
    {
        title: "everyWednesday",
        expects: "0 0 * * 3",
        test: () => CronTime.everyWednesday()
    },
    {
        title: "everyWednesdayAt(9, 30)",
        expects: "30 9 * * 3",
        test: () => CronTime.everyWednesdayAt(9, 30)
    },
    {
        title: "everyThursday",
        expects: "0 0 * * 4",
        test: () => CronTime.everyThursday()
    },
    {
        title: "everyThursdayAt(9, 30)",
        expects: "30 9 * * 4",
        test: () => CronTime.everyThursdayAt(9, 30)
    },
    {
        title: "everyFriday",
        expects: "0 0 * * 5",
        test: () => CronTime.everyFriday()
    },
    {
        title: "everyFridayAt(9, 30)",
        expects: "30 9 * * 5",
        test: () => CronTime.everyFridayAt(9, 30)
    },
    {
        title: "everySaturday",
        expects: "0 0 * * 6",
        test: () => CronTime.everySaturday()
    },
    {
        title: "everySaturdayAt(9, 30)",
        expects: "30 9 * * 6",
        test: () => CronTime.everySaturdayAt(9, 30)
    },
    {
        title: "onSpecificDays(['monday', 'wednesday', 'friday'])",
        expects: "0 0 * * 1,3,5",
        test: () => CronTime.onSpecificDays(["monday", "wednesday", "friday"])
    },
    {
        title: "everyWeek()",
        expects: "0 0 * * 0",
        test: () => CronTime.everyWeek()
    },
    {
        title: "everyWeekAt(['monday', 'wednesday'], 9, 30)",
        expects: "30 9 * * 1,3",
        test: () => CronTime.everyWeekAt(["monday", "wednesday"], 9, 30)
    },
    {
        title: "everyWeekDay",
        expects: "0 0 * * 1-5",
        test: () => CronTime.everyWeekDay()
    },
    {
        title: "everyWeekDayAt(9, 30)",
        expects: "30 9 * * 1-5",
        test: () => CronTime.everyWeekDayAt(9, 30)
    },
    {
        title: "everyWeekend",
        expects: "0 0 * * 6,0",
        test: () => CronTime.everyWeekend()
    },
    {
        title: "everyWeekendAt(10, 15)",
        expects: "15 10 * * 6,0",
        test: () => CronTime.everyWeekendAt(10, 15)
    },
    {
        title: "everyMonth",
        expects: "0 0 1 * *",
        test: () => CronTime.everyMonth()
    },
    {
        title: "everyMonthOn(15, 9, 30)",
        expects: "30 9 15 * *",
        test: () => CronTime.everyMonthOn(15, 9, 30)
    },
    {
        title: "everyYear",
        expects: "0 0 1 1 *",
        test: () => CronTime.everyYear()
    },
    {
        title: "everyYearIn(6, 15, 9, 30)",
        expects: "30 9 15 6 *",
        test: () => CronTime.everyYearIn(6, 15, 9, 30)
    },
    {
        title: "between(1, 4).days()",
        expects: "0 0 10-20 * *",
        test: () => CronTime.between(10, 20).days()
    }
];

function runTests(tests: TestItem[]) {
    for (const cron of tests) {
        test(`${cron.title} => [${cron.expects}]`, (assert) => {
            assert.equal((cron.test as () => string)(), cron.expects);
        });
    }
}

runTests(tests);
