const {create, shuffle, deals, points} = require('./blackjack');


describe('Check deck cards',() =>{
    test('test cards number in deck', () => {
        const deckLength = create();
        expect(deckLength).toHaveLength(52)
    })

    test('test suits Hearts', () => {
        //hearts cards are 13
        const deck = create();
        const hearts = deck.filter(card => card.includes('H'))

        expect(hearts).toHaveLength(13)
    })

    test('test suits diamonds', () => {
        //hearts cards are 13
        const deck = create();
        const hearts = deck.filter(card => card.includes('D'))

        expect(hearts).toHaveLength(13)
    })
})

describe('Check shuffle tests',() =>{

    const deck = create();
    
    test('check shuffle length deck', () => {
        const shuffledDeck = shuffle(deck);
        expect(shuffledDeck).toHaveLength(52)
    })
    test('Check uniqueness', () => {
        const shuffledDeck = shuffle(deck);
        const set = new Set();
        for (s of shuffledDeck){
            set.add(s)
        }
        expect(set.size).toBe(52)
    })
})


describe('Take 10 deals',() =>{

    const deck = create();
    const n = 10;
    const total = 52;

    test('take n cards from top', () => {
        const newDeck = deals(deck, n);
        expect(newDeck).toHaveLength(n)
    })
    test('Check new deck length', () => {
        const newDecklength = total - n
        expect(deck).toHaveLength(newDecklength)
    })
})


describe('Take points',() =>{

    test('["AC", "2S"]', () => {
        const handPoint = points(["AC", "2S"]);
        expect(handPoint).toBe(13)
    })

    test('["5D", "TH"]', () => {
        const handPoint = points(["5D", "TH"]);
        expect(handPoint).toBe(15)
    })

    test('["AC", "7S", "3C", "AS"]', () => {
        const handPoint = points(["AC", "7S", "3C", "AS"]);
        expect(handPoint).toBe(12)
    })

    test('["AC", "7S", "9C"]', () => {
        const handPoint = points(["AC", "7S", "9C"]);
        expect(handPoint).toBe(17)
    })
})