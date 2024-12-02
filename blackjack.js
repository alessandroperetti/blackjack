
 module.exports = {
    create: () =>{
        const deck = [];
        const suits = ['S', 'H', 'C', 'D'];
        const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];

        for (const suit of suits) {
            for (const value of values) {
                deck.push(`${value}${suit}`);
            }
        }
        return deck;
    },
    // Fisher-Yates Shuffle algorithm -
    // Time complexity: O(n)
    // Space complexity: O(1)
    shuffle: (deck) => {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i+1))
            const app = deck[i] 
            deck[i] = deck[j];
            deck[j] = app
        }
        return deck;
    },

    deals: (deck, number) => {
        if(number <=0 || number > 52) throw new Error('number chosen not in range')
        return deck.filter((item, index)=>{
            if(index < number) {
                deck.shift()
                return item
            }
        })
    },

    points: (hands) => {
        let aceNumber = 0
        let total = hands.reduce((accumulator, current)=> {
            const split = current.split("");
            if (['T', 'J', 'Q', 'K'].includes(split[0])) {
                return accumulator + 10
            }
            if(split[0].includes('A')){
                aceNumber++
                if(accumulator + 11 > 21 ){
                    return accumulator + 1
                }
                return accumulator + 11
            }
            return accumulator + parseInt(split[0])
        }, 0)

        if(total >= 22 && aceNumber > 0){
            for(let i = aceNumber; i>=0; i-- ){
                if(total >=22) total = total - 10
            }
        }
        return total
    },
    play: function() {
        const deck = this.create();
        const shuffled = this.shuffle(deck);
        const hands1 = this.deals(shuffled, 2)
        console.log(hands1)
        const hands2 = this.deals(shuffled, 2)
        console.log(hands2)
        const pointsHand1= this.points(hands1)
        const pointsHand2= this.points(hands2)
        console.log(pointsHand1, pointsHand2)
        if(pointsHand1 > pointsHand2) return `p1`
        else return `p2`
    }
}