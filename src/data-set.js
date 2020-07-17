//Wainright
const wainrightAction = () => {
  console.log('this is the test wainright action')
}



let Constantinople = {
  tiles: {
    base: [
      { number: 1,
        name: 'Wainwright',
        action: wainrightAction},
      { number: 2,
        name: 'Fabric Warehouse'},
      { number: 3,
        name: 'Spice Warehouse'},
      { number: 4,
        name: 'Fruit Warehouse'},
      { number: 5,
        name: 'Post Office'},
      { number: 6,
        name: 'Caravansary'},
      { number: 8,
        name: 'Black Market'},
      { number: 9,
        name: 'Tea House'},
      { number: 10,
        name: 'Large Market'},
      { number: 11,
        name: 'Small Market'},
      { number: 12,
        name: 'Police Station'},
      { number: 13,
        name: `Sultan's Palace`},
      { number: 14,
        name: 'Small Mosque'},
      { number: 15,
        name: 'Great Mosque'},
      { number: 16,
        name: 'Gemstone Dealer'}
    ],
    mocha: [
      { number: 17,
        name: 'Roasting Plant'},
      { number: 18,
        name: 'Guild Hall'},
      { number: 19,
        name: 'Tavern'},
      { number: 20,
        name: 'Coffee House'},
    ],
    letters: [
      { number: 21,
        name: 'Embassy'},
      { number: 22,
        name: 'Kiosk'},
      { number: 23,
        name: 'Auction House'},
      { number: 24,
        name: 'Secret Society'},
    ],
    fountain: [
      { number: 7,
        name: 'Fountain'}
    ],
    special: [
      { number: 25,
        name: 'Catacombs'}
    ]}
}

export default Constantinople;