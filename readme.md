# Cron-Time

Cron Time Expression Generator/Builder

Tested on [CronTab.Guru](https://crontab.guru)

### Install
```console
npm install cron-time
```

OR

```console
yarn add cron-time
```

### Usage
```javascript
const cronTime = require('./index');

cronTime.everyMinute();
// * * * * *

cronTime.everyHour();
// 0 * * * *

cronTime.everyDay();
// 0 0 * * *

cronTime.everyDayAt(6);
// 0 6 * * *

cronTime.everySunday();
// 0 0 * * SUN

cronTime.everySundayAt(4);
// 0 4 * * SUN

// E.T.C
```

Every method of `CronTime` returns exactly what its name says.

### Every Nth Time
```javascript
const cronTime = require('./index');

cronTime.every(5).minutes();
// Every Five Minutes

cronTime.every(2).hours();
// Every 2 Hours

cronTime.every(7).days();
// Every 7 Days

cronTime.every('even').hours();
// Every Even Hours
// * */2 * * *

cronTime.every('uneven').hours();
// Every Uneven Hours
// * 1-23/2 * * *
```

### Between
```javascript
const cronTime = require('./index');

cronTime.between(1, 4).days();
// Between  1 - 4 th day of the month 
```


### All Functions

`every`

`between`

`everyMinute`

`everyHour`

`everyDay`

`everyDayAt($hourOfTheDay)`

`everySunday`

`everySundayAt($hourOfTheDay)`

`everyMonday`

`everyMondayAt($hourOfTheDay)`

`everyTuesday`

`everyTuesdayAt($hourOfTheDay)`

`everyWednesday`

`everyWednesdayAt($hourOfTheDay)`

`everyThursday`

`everyThursdayAt($hourOfTheDay)`

`everyFriday`

`everyFridayAt($hourOfTheDay)`

`everySaturday`

`everySaturdayAt($hourOfTheDay)`

`everyWeek`

`everyWeekAt($hourOfTheDay, $dayOfTheWeek)`

`everyMonth`

`everyMonthOn($dayOfTheMonth)`

`everyYear`

`everyYearIn($monthOfTheYear)`