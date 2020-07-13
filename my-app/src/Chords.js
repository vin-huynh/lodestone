const triads = {
    "maj": {
        intervals: [0,4,7],
    },
    "min": {
        intervals: [0,3,7],
    },
    "aug": {
        intervals: [0,4,8],
    },
    "dim": {
        intervals: [0,3,6],
    },
    "5": {
        intervals: [0,7,12],
    },
    "b5": {
        intervals: [0,4,6],
    },
    "sus2": {
        intervals: [0,2,7],
    },
    "sus4": {
        intervals: [0,5,7],
    }
};

const sevenths = {
    "7": {
        intervals: [0,4,7,10],
    },
    "maj7": {
        intervals: [0,4,7,11],
    },
    "min7": {
        intervals: [0,3,7,10],
    },
    "mM7": {
        intervals: [0,3,7,11],
    },
    "dim7": {
        intervals: [0,3,6,9],
    },
    "half dim7": {
        intervals: [0,3,6,10],
    },
    "aug7": {
        intervals: [0,4,8,11],
    },
    "7b5": {
        intervals: [0,4,6,10],
    },
    "7#5": {
        intervals: [0,4,8,10],
    },
    "7sus4": {
        intervals: [0,5,7,10],
    },
    "6": {
        intervals: [0,4,7,9],
    },
    "min6": {
        intervals: [0,3,7,9],
    }
};

const ninths = {
    "9": {
        intervals: [0,4,7,10,14],
    },
    "maj9": {
        intervals: [0,4,7,11,14],
    },
    "min9": {
        intervals: [0,3,7,10,14],
    },
    "9b5": {
        intervals: [0,4,6,10,14],
    },
    "9#5": {
        intervals: [0,4,8,10,14],
    },
    "7b9": {
        intervals: [0,4,7,10,13],
    },
    "7#9": {
        intervals: [0,4,7,10,15],
    },
    "9sus4": {
        intervals: [0,5,7,10,14],
    },
    "6/9": {
        intervals: [0,4,7,9,14],
    },
};

const elevenths = {
    "11": {
        intervals: [0,4,7,10,14,17],
    },
    "min11": {
        intervals: [0,3,7,10,14,17],
    }
}

const thirteenths = {
    "13": {
        intervals: [0,4,7,10,14,17,21],
    },
    "maj13": {
        intervals: [0,4,7,11,14,18,21],
    }   
}

const chords = [triads,sevenths,ninths,elevenths,thirteenths];
export default chords;