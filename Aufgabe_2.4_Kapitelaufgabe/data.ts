namespace space24 { 
    let humanObj: Human = {head: ["./media/head01.png", "./media/head02.png", "./media/head03.png"], eyes: ["./media/blueeyessmall.png", "./media/greeneyessmall.png", "./media/browneyessmall.png"], mouth: ["./media/angrymouth.png", "./media/normalsmouth.png", "./media/babymouth.png"], torso: [], legs: [] };
    export let humanJSON: string = JSON.stringify(humanObj);
}