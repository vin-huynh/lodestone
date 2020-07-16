const triads = {
    "maj": {
        intervals: [0,4,7],
        traits: ["happy"],
    },
    "min": {
        intervals: [0,3,7],
        traits: ["sad"],
    },
    "aug": {
        intervals: [0,4,8],
        traits: ["curious"],
    },
    "dim": {
        intervals: [0,3,6],
        traits: ["tense"],
    },
    "5": {
        intervals: [0,7,12],
        traits: ["primal"],
    },
    "b5": {
        intervals: [0,4,6],
        traits: ["restless"],
    },
    "sus2": {
        intervals: [0,2,7],
        traits: ["dreaming"],
    },
    "sus4": {
        intervals: [0,5,7],
        traits: ["ethereal"],
    }
};

const sevenths = {
    "7": {
        intervals: [0,4,7,10],
        traits: ["compelling"],
    },
    "maj7": {
        intervals: [0,4,7,11],
        traits: ["romantic"],
    },
    "min7": {
        intervals: [0,3,7,10],
        traits: ["beautiful"],
    },
    "mM7": {
        intervals: [0,3,7,11],
        traits: ["supernatural"],
    },
    "dim7": {
        intervals: [0,3,6,9],
        traits: ["ominous"],
    },
    "half dim7": {
        intervals: [0,3,6,10],
        traits: ["dramatic"],
    },
    "aug7": {
        intervals: [0,4,8,11],
        traits: ["wondrous"],
    },
    "7b5": {
        intervals: [0,4,6,10],
        traits: ["uncertain"],
    },
    "7#5": {
        intervals: [0,4,8,10],
        traits: ["questioning"],
    },
    "7sus4": {
        intervals: [0,5,7,10],
        traits: ["blossoming"],
    },
    "6": {
        intervals: [0,4,7,9],
        traits: ["warm"],
    },
    "min6": {
        intervals: [0,3,7,9],
        traits: ["mysterious"],
    }
};

const ninths = {
    "9": {
        intervals: [0,4,7,10,14],
        traits: ["optimistic"],
    },
    "maj9": {
        intervals: [0,4,7,11,14],
        traits: ["spacious"],
    },
    "min9": {
        intervals: [0,3,7,10,14],
        traits: ["mellow"],
    },
    "9b5": {
        intervals: [0,4,6,10,14],
        traits: ["expressive"],
    },
    "9#5": {
        intervals: [0,4,8,10,14],
        traits: ["magical"],
    },
    "7b9": {
        intervals: [0,4,7,10,13],
        traits: ["creepy"],
    },
    "7#9": {
        intervals: [0,4,7,10,15],
        traits: ["surprising"],
    },
    "9sus4": {
        intervals: [0,5,7,10,14],
        traits: ["majestic"],
    },
    "6/9": {
        intervals: [0,4,7,9,14],
        traits: ["relaxing"],
    },
};

const elevenths = {
    "11": {
        intervals: [0,4,7,10,14,17],
        traits: ["lush"],
    },
    "min11": {
        intervals: [0,3,7,10,14,17],
        traits: ["beautiful"],
    }
}

const thirteenths = {
    "13": {
        intervals: [0,4,7,10,14,17,21],
        traits: ["jazzy"],
    },
    "maj13": {
        intervals: [0,4,7,11,14,18,21],
        traits: ["thoughtful"],
    }   
}

const chords = [triads,sevenths,ninths,elevenths,thirteenths];
export default chords;