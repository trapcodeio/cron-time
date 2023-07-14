const test = require("japa");
const { CronTime } = require("./dist");

test('everyMinute(): "* * * * *"', (assert) => {
    assert.equal(CronTime.everyMinute(), "* * * * *");
});

test('everyHour(): "0 * * * *"', (assert) => assert.equal(CronTime.everyHour(), "0 * * * *"));

test('everyHourAt(30): "30 * * * *"', (assert) =>
    assert.equal(CronTime.everyHourAt(30), "30 * * * *"));

test('everyDay(): "0 0 * * *"', (assert) => assert.equal(CronTime.everyDay(), "0 0 * * *"));

test("every(nth)", () => {
    test('every(5).minutes(): "*/5 * * * *"', (assert) =>
        assert.equal(CronTime.every(5).minutes(), "*/5 * * * *"));

    test('every(5).hours(): "0 */5 * * *"', (assert) =>
        assert.equal(CronTime.every(5).hours(), "0 */5 * * *"));
});

test(`onSpecificDays(['sunday', 'tuesday', 'thursday']): "0 0 * * 0,2,4"`, (assert) => {
    assert.equal(CronTime.onSpecificDays(["sunday", "tuesday", "thursday"]), "0 0 * * 0,2,4");
});

test(`onSpecificDaysAt(['sunday', 'tuesday', 'thursday'], 3, 30): "30 3 * * 0,2,4"`, (assert) => {
    assert.equal(
        CronTime.onSpecificDaysAt(["sunday", "tuesday", "thursday"], 3, 30),
        "30 3 * * 0,2,4"
    );
});
