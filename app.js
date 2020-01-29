
const productsData = products.slice();

let totalVotes = 0;

radio1.value = product1.name 

radio1span.textConter = product1.
Const form = document.querySelector ('form')

const onSubmit = (e) => {
    e.preventDefault{};
}

const formData = new formData (form);

const selectedProductId -
console.log(formData.get('product'));

totalVotes++;

const productVotedForArray = findById(productVotesDetails, selectedProductId);

if (productInVoteArray) {
    productVotedForArray.votes++;
} else {
    const newVoteObject = {
        id: selectedProductId,
        vote: 1,
    };

    productVotedDetails.push(newVoteObject)
};

document.querySelector('input[name"product]:checked').checked

console.log (JSON.stringify(productVotedDetails)

if(totalVotes >= 25) {
    document.querySelector('button').disable = true;
    alert('Your opinion is valuable to Market Research. Thank you for your participation in our market reseach study.')
    location
}


displayThreeProducts