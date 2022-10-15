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
    let unorderedListLocation = document.querySelector('#recall-list')
    let headerOfLoadedContent = document.createElement('div')
    headerOfLoadedContent.innerHTML = `
    <h2 id="loaded-product-header">Ongoing Products On Recall</h2>
    `
    unorderedListLocation.append(headerOfLoadedContent)
    products.results.forEach(product => {
        if (product.status === "Ongoing" && product.country ==="United States"){
            let recalledProduct = document.createElement('li')
            recalledProduct.className = 'card'
            console.log(recalledProduct)
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