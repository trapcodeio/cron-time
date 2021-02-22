# Cron-Time

Cron Time Expression Generator/Builder written in Typescript.

Tested on [CronTab.Guru](https://crontab.guru)

### Install
```console
npm install cron-time-generator
```

OR

```console
yarn add cron-time-generator
```

### Usage
```javascript
const cronTime = require('cron-time-generator');
// OR (Typescript)
import cronTime from "cron-time-generator";

cronTime.everyMinute();
// * * * * *

cronTime.everyHour();
// 0 * * * *

cronTime.everyDay();
// 0 0 * * *

cronTime.everyDayAt(6);
// 0 6 * * *

cronTime.everyDayAt(6, 15);
// 15 6 * * *

cronTime.everySunday();
// 0 0 * * SUN

cronTime.everySundayAt(4, 30);
// 30 4 * * SUN

cronTime.everyWeekDay();
// 0 0 * * 1-5
// from Monday to Friday

cronTime.everyWeekDayAt(1, 30);
// 30 1 * * 1-5
// 1:30 AM from Monday to Friday


cronTime.everyWeekend();
// 0 0 * * 6,0
// on Saturday and Sunday

cronTime.everyWeekendAt(1, 30);
// 30 1 * * 6,0
// 1:30 AM on Saturday and Sunday

// E.T.C
```

For `everyWeekDay` and `everyWeekend` there is also an option to change the starting day.

By default, week days is from **Monday** to **Friday** while weekend days are **Saturdays** and **Sundays**

This can be changed like so:
```javascript
cronTime.everyWeekDay("sunday", "thursday");
// 0 0 * * 0-4
// from Sunday to Thursday

cronTime.everyWeekDayAt(1, 30, "sunday", "thursday");
// 30 1 * * 0-4
// 1:30 AM from Sunday to Thursday

cronTime.everyWeekend("friday", "saturday");
// 0 0 * * 5,6
// on Friday and Saturday

cronTime.everyWeekendAt(1, 30, "friday", "saturday");
// 30 1 * * 5,6
// 1:30 AM on Friday and Saturday
```
Note: if a `startDay` is specified then an `endDay` must be specified also, else it will use the default values which may not tally with your new `$startDay`

Every method of `CronTime` returns exactly what its name says.

### onSpecificDays and onSpecificDaysAt
To target specific days
```javascript
cronTime.onSpecificDays(['sunday', 'tuesday', 'thursday']); // 0 0 * * 0,2,4

// With time 
cronTime.onSpecificDaysAt(['sunday', 'tuesday', 'thursday'], 3, 30); // 0 0 * * 0,2,4
```

### Every Nth Time
```javascript
const cronTime = require('cron-time-generator');

cronTime.every(5).minutes();
// Every Five Minutes

cronTime.every(2).hours();
// Every 2 Hours

cronTime.every(7).days();
// Every 7 Days

cronTime.every(7).days(9, 5);
// Every 7 days at 9:05


cronTime.every('even').hours();
// Every Even Hours
// * */2 * * *

cronTime.every('uneven').hours();
// Every Uneven Hours
// * 1-23/2 * * *
```

### Between
```javascript
const cronTime = require('cron-time-generator');

cronTime.between(1, 4).days();
// Between  1 - 4 th day of the month 
```



### All Functions

`every`

`between`

`everyMinute`

`everyHour`

`everyHourAt(minuteOfTheHour)`

`everyDay`

`everyDayAt(hourOfTheDay)`

`everySunday`

`everySundayAt(hour, minute?)`

`everyMonday`

`everyMondayAt(hour, minute?)`

`everyTuesday`

`everyTuesdayAt(hour, minute?)`

`everyWednesday`

`everyWednesdayAt(hour, minute?)`

`everyThursday`

`everyThursdayAt(hour, minute?)`

`everyFriday`

`everyFridayAt(hour, minute?)`

`everySaturday`

`everySaturdayAt(hour, minute?)`

`everyWeek`

`everyWeekAt(day, hour?, minute?)`

`everyWeekDay`

`everyWeekDayAt(hour, $minute, startDay, endDay)`

`everyWeekend`

`everyWeekendAt(hour, minute, startDay, endDay)`

`everyMonth`

`everyMonthOn(day, hour?, minute?)`

`everyYear`

`everyYearIn(month, day?, hour?, minute?)`
