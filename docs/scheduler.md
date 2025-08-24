# Scheduler ⏰
You can setup CRON-like execution of events to have something happen every hour, at specific time of day, every Friday, and so on.

To do this, create a `schedule.json` file inside your root plugins directory.

Every entry needs a `cron` value and `event` name to trigger.

Ratchet uses following order of arguments:

`<seconds> <minutes> <hours> <days of month> <months> <days of week>`

Otherwise values are parsed just as you'd expect with any [CRON](https://en.wikipedia.org/wiki/Cron) implementation.

::: code-group
```json [schedule.json]
[
  {
    "cron": "0 */15 * * * *",
    "event": "scheduled_event"
  },
  {
    "cron": "0 0 18 * * 5",
    "event": "another_event"
  }
]
```
:::

The example above will execute `scheduled_event` every 15 minutes and `another_event` every Friday at 18:00.