const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Acronym to Abbreviation Generator API!');
});

app.post('/generate', (req, res) => {
    const { acronym } = req.body;
    if (!acronym) {
        return res.status(400).json({ error: 'Acronym is required' });
    }

    const wordsList = {
        A: ['Apple', 'Ant', 'Axe'],
        B: ['Banana', 'Boat', 'Bee'],
        C: ['Cat', 'Car', 'Cup'],
        D: ['Dog', 'Duck', 'Door'],
        E: ['Elephant', 'Eagle', 'Ear'],
        F: ['Fox', 'Fish', 'Fan'],
        G: ['Giraffe', 'Goat', 'Grapes'],
        H: ['Horse', 'Hat', 'House'],
        I: ['Igloo', 'Ice', 'Iron'],
        J: ['Jaguar', 'Jelly', 'Jet'],
        K: ['Kangaroo', 'Key', 'Kite'],
        L: ['Lion', 'Lamp', 'Leaf'],
        M: ['Monkey', 'Mouse', 'Moon'],
        N: ['Nest', 'Net', 'Nail'],
        O: ['Ostrich', 'Orange', 'Oven'],
        P: ['Penguin', 'Piano', 'Pumpkin'],
        Q: ['Quail', 'Queen', 'Quilt'],
        R: ['Rabbit', 'Ring', 'Rocket'],
        S: ['Snake', 'Star', 'Sun'],
        T: ['Tiger', 'Table', 'Train'],
        U: ['Umbrella', 'Unicorn', 'Urn'],
        V: ['Vulture', 'Violin', 'Vase'],
        W: ['Wolf', 'Whale', 'Watch'],
        X: ['Xylophone', 'X-ray', 'Xerox'],
        Y: ['Yak', 'Yacht', 'Yo-yo'],
        Z: ['Zebra', 'Zoo', 'Zip']
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

    const abbreviation = acronym.split('').map(char => getRandomWord(char)).join(' ');
    res.json({ abbreviation });
});

app.listen(port, () => {
    console.log(`Acronym to Abbreviation Generator API is running at http://localhost:${port}  ${process.env.PORT}`);
});