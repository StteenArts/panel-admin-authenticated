let contentProducts = document.querySelector('#sectionProducts')

/* Traer los productos a mostrarle al usuario */
async function getProducts(){
    try{
        const res = await fetch('http://localhost:3000/products')
        const data = await res.json()
        return data
    }catch(error){
        console.log("Something went's wrong:", error)
    }
    
}

document.addEventListener('DOMContentLoaded', async (e)=>{
    const products = await getProducts()

    products.forEach(product => {
        contentProducts.innerHTML += `
                <div class="card p-2" style="width: 18rem;">
                    <img src="${product.imageUrl}" class="card-img-top" style="height:15rem" alt="Image Product">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}<span class="text-success fw-bold ms-2">$${product.price}</span></h5>
                        <p class="card-text text-muted">${product.description}</p>
                        <div class="">
                            <a href="#" class="btn btn-secondary d-flex" id="addOrder" data-value="${product.id}">Add to order</a>
                        </div>
                        
                    </div>
                </div>
        `;
    });
})