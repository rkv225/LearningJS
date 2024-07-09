## Debouncing

Execute only if the difference between events is greater than the provided limit. Suppose if we attach a debouncing functionality on key press, then if we continuouly keep on pressing the key before the timer is expired then our action won't be executed.

Use case: search suggestions

## Throttling

Execute after a given period from the previous event. Suppose if we attach a throttle fucionality on a button to refresh some content on the page, then if we continuously keep pressing the button a new call to fetch data will be atleast after given delay.

Use case: page refresh