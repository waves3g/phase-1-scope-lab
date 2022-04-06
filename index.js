customerName = 'bob'
const leastFavoriteCustomer = 'Jerry'

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'Daniel';
}