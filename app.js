import products from './Data/data.js';

const productsData = products.slice();

export function findById(items,id) {
    for (let i = 0; i <items.lenghth; i++) {
        const items = items [i];
        if (items.id === id) {
            return items;
        }
    }   
}

let totalVotes = 0;
let productVotedResults = 0;

const initializeState = () => {
    totalVotes = 0
    productVotesResults = [];
};

initializeState();

const showThreeOptions = () => {
    const option1 = randomProduct(productsData);
    let option2 = randomProduct(productsData);
    let option3 = randomProduct(productsData);
    while (option1.id === option2.id
        || option2.id === option3.id
        || option1.id === option3.id
    ){
        options2 = randomProduct(productsData)
        option3 = randomProduct(productsData)
    }

    const radio1 = document.getElementById('option1')
    const radio2 = document.getElementById('option2')
    const radio3 = document.getElementById('option3')
    const radio1Span = document.getElementById('option1span');
    const radio2Span = document.getElementById('option2span');
    const radio3Span = document.getElementById('option3span');

    radio1.value = option1.name 
    radio2.value = option2.name
    radio3.value = option3.name
    radio1Span.textContent = option1.name;
    radio2Span.textContent = option2.name;
    radio3Span.textContent = option3.name;
};

const form = document.querySelector ('form');

form.addEventListener ('submit', (e) => {
    e.preventDefault();

    const formData = new FormData (form);

    const selectedProductId = FormData.get('product')

    totalVotes++;

    const productVotedForArray = findById(productVotesResults, selectedProductId);

    if (productInVoteArray) {
        productVotedForArray.votes++;
    } else {
            const newVoteObject = {
            id: selectedProductId,
            vote: 1,
            };

        productVotedResults.push ({
            id: selectedProductId,
            vote: 1,
    });
};

    document.querySelector('input[name"product]:checked').checked = false

    localStorage.setItem('votes', JSON.stringify(productVoteResults));


    if(totalVotes >= 25) {
        windows.location = 'result.html';
    }
    showThreeOptions();
    });

document.querySelector('button').disable = true;
alert('Your opinion is valuable to Market Research. Thank you for your participation in our market reseach study.');{

function reset() {
    initializeState();
    
}
function randomProduct(products) {
    const randomIndex = math.floor(math.random() * product.length);
    const randomProduct = productsData[randomIndex];

    return randomProduct;
    }

showThreeOptions();