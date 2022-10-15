let unorderedListLocation = document.querySelector('#recall-list')
    
//DOM Content Loaded functions
document.addEventListener('DOMContentLoaded', (e) => {
    fetchOngoingRecall()

})

function fetchOngoingRecall(){
    fetch ('https://api.fda.gov/food/enforcement.json?limit=1000')
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        loadOngoingRecall(data)
    })
}

function loadOngoingRecall(products){
    let headerOfLoadedContent = document.createElement('div')
    headerOfLoadedContent.innerHTML = `
    <h2 id="loaded-product-header">Ongoing Products On Recall</h2>
    `
    unorderedListLocation.append(headerOfLoadedContent)
    products.results.forEach(product => {
        if (product.status === "Ongoing" && product.country ==="United States"){
            let recalledProduct = document.createElement('li')
            recalledProduct.className = 'card'
            recalledProduct.innerHTML = `
                <h3>Product Description: ${product.product_description}</h3>
                <h4>Date of Recall: ${product.recall_initiation_date} </h4>
                <h4> Status of Recall: ${product.status}</h4>
                <p> Location: ${product.city}, ${product.state}</p>
                <p> Product Type: ${product.product_type}</p>
                <p> Quantities Affected: ${product.product_quantity}</p>
                <p> Lot Codes & Exp Date: ${product.code_info}</p>
            `
            unorderedListLocation.append(recalledProduct)
        }
    })
}

//Search Event Listener
const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let searchedCity = document.querySelector('#search-city').value
    let selectedState = document.querySelector('#state-dropdown').value 
    populateSearch(searchedCity, selectedState)
}
)

function populateSearch(city, state){
    fetchOngoingRecallForSearch(city, state)
}


function fetchOngoingRecallForSearch(city, state){
    fetch ('https://api.fda.gov/food/enforcement.json?limit=1000')
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        removeAllChildNodes(document.querySelector('#recall-list'))
        loadSearch(data, city, state)    
    })
}

function loadSearch(products, city, state){
    let headerOfLoadedContent = document.createElement('div')
    headerOfLoadedContent.innerHTML = `
    <h2 id="loaded-product-header">${state}'s Products On Recall</h2>
    `
    unorderedListLocation.append(headerOfLoadedContent)
    products.results.forEach(product => {
        if(product.city === city && product.state === state && product.status ==="Ongoing"){
            console.log(product.city, product.state)
            let searchedProductCityAndState = document.createElement('li')
            searchedProductCityAndState.className = 'card'
            searchedProductCityAndState.innerHTML = `
                <h3>Product Description: ${product.product_description}</h3>
                <h4>Date of Recall: ${product.recall_initiation_date} </h4>
                <h4> Status of Recall: ${product.status}</h4>
                <p> Location: ${product.city}, ${product.state}</p>
                <p> Product Type: ${product.product_type}</p>
                <p> Quantities Affected: ${product.product_quantity}</p>
                <p> Lot Codes & Exp Date: ${product.code_info}</p>
                <input type="submit" value="Remove from List"/>
            `
            unorderedListLocation.append(searchedProductCityAndState)
        } else if(product.state === state && product.status ==="Ongoing"){
            console.log(product.state)
            let searchedProductByState = document.createElement('li')
            searchedProductByState.className = 'card'
            searchedProductByState.innerHTML = `
                <h3>Product Description: ${product.product_description}</h3>
                <h4>Date of Recall: ${product.recall_initiation_date} </h4>
                <h4> Status of Recall: ${product.status}</h4>
                <p> Location: ${product.city}, ${product.state}</p>
                <p> Product Type: ${product.product_type}</p>
                <p> Quantities Affected: ${product.product_quantity}</p>
                <p> Lot Codes & Exp Date: ${product.code_info}</p>
                <input type="submit" value="Remove from List"/>
            `
            unorderedListLocation.append(searchedProductByState)
        }
    })
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Adding Click to Remove 