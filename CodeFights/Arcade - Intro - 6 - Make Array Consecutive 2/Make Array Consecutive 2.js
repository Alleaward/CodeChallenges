function makeArrayConsecutive2(statues) {
    var max = Math.max.apply(null, statues);
    var min = Math.min.apply(null, statues);
    console.log(statues.length + 1);

    //max value - min value - count of values + 1
    console.log(max, "-", min, "-", statues.length, "+", 1);
    console.log(max, "-", min, "=", max - min);
    console.log(max - min, "-", statues.length, "=", max - min - statues.length);
    console.log(max - min - statues.length, "+", 1, "=", max - min - statues.length + 1);

    return max - min - statues.length + 1;
}
