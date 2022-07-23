let navbar=()=>{
        return `<div id="logo">
        <a href="index.html"><img src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"></img></a>
        </div>
        
        <div id="searchbox">
        
        <div id="pincode">
                <div class="dropdown show">
                        <a color="grey" class="btn btn-secondary dropdown-toggle" href="#" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Select Pincode
                         </a>
        
        
                </div>
        </div>
       <input placeholder="Search medicines/Healthcare products" id="search">
        <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-search" viewBox="0 0 16 16">
                        <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg></div>
        </div>
        
        <div id="navlist">
        <div><a href="ordermedicines.html">Order Medicines</a></div>
        <div><a href="health.html">Healthcare Products</a></div>
        <div><a href="test.html">Lab Tests</a></div>
        <div><a href="RTPCR.html">RTPCR</a></div>
        </div>
        <div id="sidelist">
        <div><a><img src="https://assets.pharmeasy.in/web-assets/dist/275c07e1.svg"> Offers</a>
        </div>
        <div > <a  id="log" href="login.html"> <img  src="https://assets.pharmeasy.in/web-assets/dist/5eb42971.svg"><span id="log5">Login / Sign in</span></a></div>
        <div><a href="cart.html"> <img src="https://assets.pharmeasy.in/web-assets/dist/21b0b5ba.svg">Cart</a></div>
        </div>`
        
        
}


export default navbar
// console.log(navbar())



