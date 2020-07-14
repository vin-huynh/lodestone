const triads = {
    "maj": {
        intervals: [0,4,7],
        traits: ["a","b","c","d"],
    },
    "min": {
        intervals: [0,3,7],
        traits: ["a","b","c","d"],
    },
    "aug": {
        intervals: [0,4,8],
        traits: ["a","b","c","d"],
    },
    "dim": {
        intervals: [0,3,6],
        traits: ["a","b","c","d"],
    },
    "5": {
        intervals: [0,7,12],
        traits: ["a","b","c","d"],
    },
    "b5": {
        intervals: [0,4,6],
        traits: ["a","b","c","d"],
    },
    "sus2": {
        intervals: [0,2,7],
        traits: ["a","b","c","d"],
    },
    "sus4": {
        intervals: [0,5,7],
        traits: ["a","b","c","d"],
    }
};

const sevenths = {
    "7": {
        intervals: [0,4,7,10],
        traits: ["a","b","c","d"],
    },
    "maj7": {
        intervals: [0,4,7,11],
        traits: ["a","b","c","d"],
    },
    "min7": {
        intervals: [0,3,7,10],
        traits: ["a","b","c","d"],
    },
    "mM7": {
        intervals: [0,3,7,11],
        traits: ["a","b","c","d"],
    },
    "dim7": {
        intervals: [0,3,6,9],
        traits: ["a","b","c","d"],
    },
    "half dim7": {
        intervals: [0,3,6,10],
        traits: ["a","b","c","d"],
    },
    "aug7": {
        intervals: [0,4,8,11],
        traits: ["a","b","c","d"],
    },
    "7b5": {
        intervals: [0,4,6,10],
        traits: ["a","b","c","d"],
    },
    "7#5": {
        intervals: [0,4,8,10],
        traits: ["a","b","c","d"],
    },
    "7sus4": {
        intervals: [0,5,7,10],
        traits: ["a","b","c","d"],
    },
    "6": {
        intervals: [0,4,7,9],
        traits: ["a","b","c","d"],
    },
    "min6": {
        intervals: [0,3,7,9],
        traits: ["a","b","c","d"],
    }
};

const ninths = {
    "9": {
        intervals: [0,4,7,10,14],
        traits: ["a","b","c","d"],
    },
    "maj9": {
        intervals: [0,4,7,11,14],
        traits: ["a","b","c","d"],
    },
    "min9": {
        intervals: [0,3,7,10,14],
        traits: ["a","b","c","d"],
    },
    "9b5": {
        intervals: [0,4,6,10,14],
        traits: ["a","b","c","d"],
    },
    "9#5": {
        intervals: [0,4,8,10,14],
        traits: ["a","b","c","d"],
    },
    "7b9": {
        intervals: [0,4,7,10,13],
        traits: ["a","b","c","d"],
    },
    "7#9": {
        intervals: [0,4,7,10,15],
        traits: ["a","b","c","d"],
    },
    "9sus4": {
        intervals: [0,5,7,10,14],
        traits: ["a","b","c","d"],
    },
    "6/9": {
        intervals: [0,4,7,9,14],
        traits: ["a","b","c","d"],
    },
};

const elevenths = {
    "11": {
        intervals: [0,4,7,10,14,17],
        traits: ["a","b","c","d"],
    },
    "min11": {
        intervals: [0,3,7,10,14,17],
        traits: ["a","b","c","d"],
    }
}

const thirteenths = {
    "13": {
        intervals: [0,4,7,10,14,17,21],
        traits: ["a","b","c","d"],
    },
    "maj13": {
        intervals: [0,4,7,11,14,18,21],
        traits: ["a","b","c","d"],
    }   
}

const chords = [triads,sevenths,ninths,elevenths,thirteenths];
export default chords;