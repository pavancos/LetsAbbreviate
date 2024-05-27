const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));
app.use(express.json());

const wordsList = {
    A: ['Astounding', 'Articulate', 'Astute', 'Audacious', 'Agile', 'Analytical', 'Affable', 'Abundant', 'Adventurous', 'Altruistic', 'Amiable', 'Adroit', 'Aromatic'],
    B: ['Benevolent', 'Beautiful', 'Brainstorming', 'Buoyant', 'Breezy', 'Blissful', 'Balanced', 'Bracing', 'Brilliant', 'Breathy', 'Beaming', 'Brainy'],
    C: ['Compassionate', 'Composed', 'Captivating', 'Cerebral', 'Conscientious', 'Courageous', 'Concise', 'Clever', 'Compelling', 'Cinematic', 'Cheerful', 'Charismatic', 'Clear-headed'],
    D: ['Discreet', 'Dazzling', 'Decisive', 'Distinguished', 'Disciplined', 'Dreamy', 'Dynamic', 'Dauntless', 'Delightful', 'Diplomatic', 'Devoted'],
    E: ['Effervescent', 'Erudite', 'Enigmatic', 'Eloquent', 'Empowering', 'Eager', 'Enthralling', 'Enthusiastic', 'Efficient', 'Ethereal', 'Eclectic', 'Exquisite', 'Exuberant', 'Efficacious'],
    F: ['Forthright', 'Fascinating', 'Flourishing', 'Fair', 'Fragile', 'Fastidious', 'Fantastic', 'Focused', 'Fearless', 'Fickle', 'Frank', 'Fierce', 'Frugal', 'Fortuitous', 'Futuristic'],
    G: ['Gregarious', 'Graceful', 'Gallant', 'Glimmering', 'Grandiose', 'Gigantic', 'Grounded', 'Gentle', 'Grateful'],
    H: ['Hilarious', 'Harmonious', 'Healthy', 'Heroic', 'Hospitable', 'Headstrong', 'Heartfelt', 'Humorous', 'Honest', 'Honorable', 'Hearty', 'Hardy'],
    I: ['Iridescent', 'Ingenious', 'Inventive', 'Independent', 'Intrepid', 'Immaculate', 'Intriguing', 'Impeccable', 'Inspiring', 'Intuitive'],
    J: ['Jubilant', 'Juicy', 'Jazzy', 'Jaunty', 'Jovial', 'Judicious', 'Jolly'],
    K: ['Keen-eyed', 'Kinetic', 'Keen-witted', 'Kindhearted', 'Knightly', 'Keen'],
    L: ['Luscious', 'Lavish', 'Legendary', 'Lasting', 'Luminous', 'Literate', 'Lively', 'Loving'],
    M: ['Mindful', 'Magnanimous', 'Melodic', 'Melancholic', 'Meticulous', 'Mercurial', 'Majestic', 'Magnetic', 'Marvelous', 'Meditative', 'Mighty', 'Monumental', 'Motivated', 'Mysterious', 'Multifaceted', 'Muscular', 'Musical', 'Mystifying', 'Magnificent'],
    N: ['Nimble', 'Nurturing', 'Noble', 'Nostalgic', 'Nifty', 'Neighborly', 'Nimble', 'Nurturing', 'Noble', 'Nostalgic', 'Nifty', 'Neighborly', 'Natural', 'Nimble', 'Nurturing', 'Noble', 'Nostalgic', 'Nifty', 'Neighborly'],
    O: ['Opulent', 'Optimistic', 'Open-minded', 'Observant', 'Original', 'Objective', 'Opulent', 'Optimistic', 'Open-minded', 'Observant', 'Original', 'Objective', 'Opulent', 'Optimistic', 'Open-minded', 'Observant', 'Original', 'Objective'],
    P: ['Passionate', 'Precise', 'Perceptive', 'Positive', 'Productive', 'Poignant', 'Passionate', 'Precise', 'Perceptive', 'Positive', 'Productive', 'Poignant', 'Powerful', 'Passionate', 'Precise', 'Perceptive', 'Positive', 'Productive', 'Poignant'],
    Q: ['Quixotic', 'Quick-witted', 'Quirky', 'Quiet', 'Quintessential', 'Quirkless', 'Quixotic', 'Quick-witted', 'Quirky', 'Quiet', 'Quintessential', 'Quirkless', 'Qualifying', 'Quixotic', 'Quick-witted', 'Quirky', 'Quiet', 'Quintessential', 'Quirkless'],
    R: ['Resilient', 'Resourceful', 'Respectful', 'Radiant', 'Resolute', 'Refined', 'Resilient', 'Resourceful', 'Respectful', 'Radiant', 'Resolute', 'Refined', 'Relentless', 'Resilient', 'Resourceful', 'Respectful', 'Radiant', 'Resolute', 'Refined'],
    S: ['Sophisticated', 'Serene', 'Spirited', 'Steadfast', 'Serene', 'Savvy', 'Sophisticated', 'Serene', 'Spirited', 'Steadfast', 'Serene', 'Savvy', 'Sophisticated', 'Serene', 'Spirited', 'Steadfast', 'Serene', 'Savvy'],
    T: ['Tenacious', 'Thoughtful', 'Tenacious', 'Taciturn', 'Thorough', 'Tender', 'Tenacious', 'Thoughtful', 'Tenacious', 'Taciturn', 'Thorough', 'Tender', 'Timely', 'Tenacious', 'Thoughtful', 'Tenacious', 'Taciturn', 'Thorough', 'Tender'],
    U: ['Unassuming', 'Unwavering', 'Unconventional', 'Uninhibited', 'Unbiased', 'Uplifting', 'Unassuming', 'Unwavering', 'Unconventional', 'Uninhibited', 'Unbiased', 'Uplifting', 'Unmatched', 'Unassuming', 'Unwavering', 'Unconventional', 'Uninhibited', 'Unbiased', 'Uplifting'],
    V: ['Vivacious', 'Vigilant', 'Vigorous', 'Visionary', 'Vivacious', 'Vigilant', 'Vigorous', 'Visionary', 'Vivacious', 'Vigilant', 'Vigorous', 'Visionary', 'Verdant', 'Vivacious', 'Vigilant', 'Vigorous', 'Visionary'],
    W: ['Witty', 'Wise', 'Whimsical', 'Warm', 'Wondrous', 'Witty', 'Wise', 'Whimsical', 'Warm', 'Wondrous', 'Witty', 'Wise', 'Whimsical', 'Warm', 'Wondrous', 'Witty', 'Wise', 'Whimsical', 'Warm', 'Wondrous'],
    X: ['Xenial', 'Xenodochial', 'Xenophilic', 'Xenagogue', 'Xenodochy', 'Xenogenetic', 'Xenotropic', 'Xenolalia', 'Xenophobic', 'Xyloid', 'Xanthic', 'Xylographic', 'Xenoplastic', 'Xanthous', 'Xenophilous'],
    Y: ['Youthful', 'Yearning', 'Yielding', 'Yonder', 'Yummy', 'Yare'],
    Z: ['Zealous', 'Zany', 'Zesty', 'Zippy', 'Zestful', 'Zingy']
};

function getRandomWord(letter) {
    const upperLetter = letter.toUpperCase();
    const words = wordsList[upperLetter];
    if (words) {
        return words[Math.floor(Math.random() * words.length)];
    } else {
        return upperLetter;
    }
}

function validateAcronym(acronym) {
    if (!acronym) {
        return { valid: false, status: 400, error: 'Acronym Required' };
    }
    if (acronym.length > 10) {
        return { valid: false, status: 422, error: 'Length Exceeded' };
    }
    if (acronym.toUpperCase() !== acronym.toLowerCase()) {
        return { valid: false, status: 422, error: 'Invalid Characters' };
    }
    return { valid: true };
}

app.get('/', (req, res) => {
    res.send('Welcome to the Acronym to Abbreviation Generator API!');
});

app.post('/generate', (req, res) => {
    const { acronym } = req.body;
    const validation = validateAcronym(acronym);
    if (!validation.valid) {
        return res.status(validation.status).json({ error: validation.error });
    }

    const abbreviation = acronym.split('').map(char => getRandomWord(char)).join(' ');
    res.json({ abbreviation });
});

app.post('/generate3', (req, res) => {
    const { acronym } = req.body;
    const validation = validateAcronym(acronym);
    if (!validation.valid) {
        return res.status(validation.status).json({ error: validation.error });
    }

    const abbreviations = [];
    for (let i = 0; i < 3; i++) {
        const abbreviation = acronym.split('').map(char => getRandomWord(char)).join(' ');
        abbreviations.push(abbreviation);
    }
    
    res.json({ abbreviations });
});

app.listen(port, () => {
    console.log(`Acronym to Abbreviation Generator API is running at http://localhost:${port}`);
});
