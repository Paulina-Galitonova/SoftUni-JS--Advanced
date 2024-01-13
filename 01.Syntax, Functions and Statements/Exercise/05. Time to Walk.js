function timeToWalk(steps, footprint, speed) {
    // Calculate the Distance in Meters:
    let distance = steps * footprint;

    // Calculate the Rests:
    let numberOfRests = Math.floor(distance / 500);

    // Calculate the Total Rest Time:
    let totalRestTime = Math.round(numberOfRests * 60);

    // Calculate the Walking Time:
    let speedMinSec = speed * 0.27778;
    let walkingTimeSec = Math.round(distance / speedMinSec);

    // Calculate the Total Time:
    let totalTime = walkingTimeSec + totalRestTime;

    // Convert the Total Time to Hours, Minutes, and Seconds:
    let h = Math.floor(totalTime / 3600);
    let m = Math.floor((totalTime % 3600) / 60);
    let s = Math.floor(totalTime % 60);

    // Print the result
    let formattedTime = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    console.log(formattedTime);

}




timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);