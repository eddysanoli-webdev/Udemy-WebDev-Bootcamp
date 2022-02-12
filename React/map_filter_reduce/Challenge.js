const emojipedia = [
    {
        id: 1,
        emoji: "💪",
        name: "Tense Biceps",
        meaning:
        "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
    },
    {
        id: 2,
        emoji: "🙏",
        name: "Person With Folded Hands",
        meaning:
        "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
    },
    {
        id: 3,
        emoji: "🤣",
        name: "Rolling On The Floor, Laughing",
        meaning:
        "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
    }
];

// Challenge:
// Log each emoji meaning after truncating it to 20 characters
const mapEmoji = emojipedia.map(emoji => {
    return emoji.meaning.substring(0, 50);
})

console.log(mapEmoji);