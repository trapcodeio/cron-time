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

### Setup

```javascript
// Javascript
const {CronTime} = require('cron-time-generator');
// OR 
const {default: CronTime} = require('cron-time-generator');

// Typescript
import {CronTime} from "cron-time-generator";
// OR
import CronTime from "cron-time-generator";
```

The `CronTime` class is the main class that contains all the methods for generating cron expressions.
it is the default export of the package and also has a named export called `CronTime`

### Setup

```javascript

CronTime.everyMinute();
// * * * * *

CronTime.everyHour();
// 0 * * * *

CronTime.everyDay();
// 0 0 * * *

CronTime.everyDayAt(6);
// 0 6 * * *

CronTime.everyDayAt(6, 15);
// 15 6 * * *

CronTime.everySunday();
// 0 0 * * SUN

CronTime.everySundayAt(4, 30);
// 30 4 * * SUN

CronTime.everyWeekDay();
// 0 0 * * 1-5
// from Monday to Friday

CronTime.everyWeekDayAt(1, 30);
// 30 1 * * 1-5
// 1:30 AM from Monday to Friday

CronTime.everyWeekend();
// 0 0 * * 6,0
// on Saturday and Sunday

CronTime.everyWeekendAt(1, 30);
// 30 1 * * 6,0
// 1:30 AM on Saturday and Sunday

// E.T.C

```

For `everyWeekDay` and `everyWeekend` there is also an option to change the starting day.

By default, week days is from **Monday** to **Friday** while weekend days are **Saturdays** and **Sundays**

This can be changed like so:

```javascript
CronTime.everyWeekDay("sunday", "thursday");
// 0 0 * * 0-4
// from Sunday to Thursday

CronTime.everyWeekDayAt(1, 30, "sunday", "thursday");
// 30 1 * * 0-4
// 1:30 AM from Sunday to Thursday

CronTime.everyWeekend("friday", "saturday");
// 0 0 * * 5,6
// on Friday and Saturday

CronTime.everyWeekendAt(1, 30, "friday", "saturday");
// 30 1 * * 5,6
// 1:30 AM on Friday and Saturday
```

Note: if a `startDay` is specified then an `endDay` must be specified also, else it will use the default values which
may not tally with your new `$startDay`

Every method of `CronTime` returns exactly what its name says.

### onSpecificDays and onSpecificDaysAt

To target specific days

```javascript
CronTime.onSpecificDays(['sunday', 'tuesday', 'thursday']); // 0 0 * * 0,2,4

// With time 
CronTime.onSpecificDaysAt(['sunday', 'tuesday', 'thursday'], 3, 30); // 0 0 * * 0,2,4
```

### Every Nth Time

```javascript
const CronTime = require('cron-time-generator');

CronTime.every(5).minutes();
// Every Five Minutes

CronTime.every(2).hours();
// Every 2 Hours

CronTime.every(7).days();
// Every 7 Days

CronTime.every(7).days(9, 5);
// Every 7 days at 9:05

CronTime.every('even').hours();
// Every Even Hours
// * */2 * * *

CronTime.every('uneven').hours();
// Every Uneven Hours
// * 1-23/2 * * *
```

### Between

```javascript
const {CronTime} = require('cron-time-generator');

CronTime.between(1, 4).days();
// Between  1 - 4 th day of the month 
```

### All Functions

`every`

`between`

`everyMinute`

`everyHour`

`everyHourAt(minuteOfTheHour)`

`everyDay`

`everyDayAt(hoursOfTheDay)`

`everySunday`

`everySundayAt(hours, minutes?)`

`everyMonday`

`everyMondayAt(hours, minutes?)`

`everyTuesday`

`everyTuesdayAt(hours, minutes?)`

`everyWednesday`

`everyWednesdayAt(hours, minutes?)`

`everyThursday`

`everyThursdayAt(hours, minutes?)`

`everyFriday`

`everyFridayAt(hours, minutes?)`

`everySaturday`

`everySaturdayAt(hours, minutes?)`

`everyWeek`

`everyWeekAt(days, hours?, minutes?)`

`everyWeekDay`

`everyWeekDayAt(hours, minutes?, startDay?, endDay?)`

`everyWeekend`

`everyWeekendAt(hours, minutes?, startDay?, endDay?)`

`everyMonth`

`everyMonthOn(days, hours?, minutes?)`

`everyYear`

`everyYearIn(months, days?, hours?, minutes?)`

`onSpecificDays(days)`

`onSpecificDaysAt(days, hour, minutes?)`
