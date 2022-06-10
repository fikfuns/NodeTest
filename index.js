const { chromium } = require('playwright');
const playwright = require('playwright');
const waitForEvent = require('wait-for-event-promise');
const EventEmitter = require('events');


async function main() {
    const browser = await playwright.chromium.launch({
        headless: false
    });
    
    // Visit page
    const page = await browser.newPage()
    await page.goto('https://staging.startuplist.my/')

    await page.waitForFunction(() => {

        // Get data
        let techData = [];
        let bizData = [];

        const techCards = document.querySelectorAll('.tech-container.mt-5 mt-md-10 col-md-6 col-lg-3 col-12')
        .then(techData.push(techCards));
        const bizCards = document.querySelectorAll('.business-container.mt-5 mt-md-10 col-md-6 col-lg-3 col-12')
        .then(bizData.push(bizCards))


        // Generate random 4 digits, then add them into empty array.
        // indices are selected through that array to prevent repetition
        let randomizer = Math.floor(Math.random(50))

        let techFour = []
        let bizFour = []

        
        for (i = 0; i > techCards.length; i++) {
            // Eliminate if same index then continue..?
            // E.g if cards[2] == cards[2] then continue
            // ?unsure
            if (techCards[i] === techCards[randomizer]) {
                continue;
            } else if (techFour.length === 4){
                break;
            } else {
                // continue with loop, generate a random number then assign to a techCard
            }
        };

        for (i = 0; i > bizCards.length; i++) {
            // Eliminate if same index then continue..?
            // E.g if cards[2] == cards[2] then continue
            // ?unsure
            if (bizCards[i] === techCards[randomizer] || bizCards[i] === bizFour[i]) {
                continue;
            } else if (techFour.length === 4){
                break;
            } else {
                // continue with loop, generate a random number then assign to a techCard
            }
        };
        
        // Button click at element
        /*
        1. Access the card using index bizFour & techFour
        2. Access button element
        3. button class = rounded-circle v-btn v-btn--is-elevated v-btn--fab v-btn--has-bg v-btn--round theme--light v-size--large red lighten-2
        4. click button?
        */
        
        // Have to loop through something, to get into the class of specific div class in bizFour / techFour

        // document.getElementsByClassName("rounded-circle v-btn v-btn--is-elevated v-btn--fab v-btn--has-bg v-btn--round theme--light v-size--large red lighten-2").click();

        }




    })
    
    



    // Pause
    await page.waitForTimeout(10000);
    await browser.close();
}

main();

/*

1. Gather tags
2. Store tags in an array
3. Find button tag
4. Loop for each cards, .click(button)
5. Random button click (?)

*/

/*
only Ideas no implementation -Mahatma Gandhi

1. generate array of 4 numbers (max is .length() of companies array)
2. loop the array using companies[fourNumbers] which could be random
3. .click() at button tag to like

*/
