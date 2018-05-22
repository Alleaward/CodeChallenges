function makeArrayConsecutive2(statues) {
    var max = Math.max.apply(null, statues);
    var min = Math.min.apply(null, statues);

    return max - min - statues.length + 1;
}