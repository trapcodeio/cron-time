const test = require('japa');
const cronTime = require('./');

test('everyMinute()', assert => {
    assert.equal(cronTime.everyMinute(), '* * * * *')
})

test('everyHour()', assert => assert.equal(cronTime.everyHour(), '0 * * * *'));

test('everyHourAt(30)', assert => assert.equal(cronTime.everyHourAt(30), '30 * * * *'));

test('everyDay()', assert => assert.equal(cronTime.everyDay(), '0 0 * * *'))

test('every(nth)', assert => {
    assert.equal(cronTime.every(5).minutes(), '*/5 * * * *');
    assert.equal(cronTime.every(5).hours(), '0 */5 * * *')
});