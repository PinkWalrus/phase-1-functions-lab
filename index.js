function distanceFromHqInBlocks(blocks) {
    if (blocks > 42) {
        return blocks - 42;
    } else {
        return 42 - blocks;
    }
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, stop) {
    if (start < stop) {
        return (stop - start) * 264;
    } else {
        return (start - stop) * 264;
    }
}

function calculatesFarePrice(start, stop) {
    const distance = distanceTravelledInFeet(start, stop);
    if (distance <= 400) {
        return 0;
    } else if (distance >= 400 && distance <= 2000) {
        return (distance - 400) * .02;
    } else if (distance >= 2000 && distance <= 2500) {
        return 25;
    } else (distance); {
        return 'cannot travel that far';
    }
}