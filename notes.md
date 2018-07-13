## Stopwatch lesson 2

Add a stopwatch component to our app
    
### Requirements
* The stopwatch will show the elapsed time, minutes, seconds, and milliseconds since it was started
* A way to start the stopwatch
* A way to stop the stopwatch
* A way to clear/reset the stopwatch

## Design
* Stopwatch
    * TimeDisplay
    * StartPauseButton
    * ClearButton

* State
    * isRunning
    * elapsedTime

* Events
    * start
    * pause
    * reset
    