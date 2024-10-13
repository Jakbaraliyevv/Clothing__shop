// bu ozgaruvchi

const men = document.getElementById("men");
const women = document.getElementById("women");
const all = document.getElementById("all");
const elect = document.getElementById("elect");

// bu fetch

fetch("https://fakestoreapi.com/products")
  .then((item) => item.json())
  .then((value) => {
    console.log(value);

    const all__cards = document.querySelector(".all__cards");

    value.forEach((element) => {
      all__cards.innerHTML += `
        <div class="card1">
          <div class="card__img">
            <img src="${element.image}" alt="This is img" />
            <div class="mensen">
              <i class="fa-regular fa-heart"></i>
            </div>
          </div>
  
          <div class="card__text">
            <h2>${element.title}</h2>
            <p>Price: <s>${element.price * 2}</s></p>
            <p class="p1">Price: ${element.price}</p>
  
            <div class="btn">
              <div class="btnn">
                <button class="btnnn">Buy</button>
              </div>
              <div class="korzinka">
                <i class="fa-solid fa-cart-shopping"></i>
                <div class="start">
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    all.addEventListener("click", () => {
      all__cards.innerHTML = "";
      value.forEach((element) => {
        all__cards.innerHTML += `
              <div class="card1">
                <div class="card__img">
                  <img src="${element.image}" alt="This is img" />
                  <div class="mensen">
                    <i class="fa-regular fa-heart"></i>
                  </div>
                </div>
        
                <div class="card__text">
                  <h2>${element.title}</h2>
                  <p>Price: <s>${element.price * 2}</s></p>
                  <p class="p1">Price: ${element.price}</p>
        
                  <div class="btn">
                    <div class="btnn">
                      <button class="btnnn">Buy</button>
                    </div>
                    <div class="korzinka">
                      <i class="fa-solid fa-cart-shopping"></i>
                      <div class="start">
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `;
      });
    });

    men.addEventListener("click", () => {
      all__cards.innerHTML = "";
      value.forEach((element) => {
        if (element.category === "men's clothing") {
          all__cards.innerHTML += `
            <div class="card1">
              <div class="card__img">
                <img src="${element.image}" alt="This is img" />
                <div class="mensen">
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
      
              <div class="card__text">
                <h2>${element.title}</h2>
                <p>Price: <s>${element.price * 2}</s></p>
                <p class="p1">Price: ${element.price}</p>
      
                <div class="btn">
                  <div class="btnn">
                    <button class="btnnn">Buy</button>
                  </div>
                  <div class="korzinka">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <div class="start">
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `;
        }
      });
    });

    women.addEventListener("click", () => {
      all__cards.innerHTML = "";
      value.forEach((element) => {
        if (
          element.category === "women's clothing" ||
          element.category === "jewelery"
        ) {
          all__cards.innerHTML += `
              <div class="card1">
                <div class="card__img">
                  <img src="${element.image}" alt="This is img" />
                  <div class="mensen">
                    <i class="fa-regular fa-heart"></i>
                  </div>
                </div>
        
                <div class="card__text">
                  <h2>${element.title}</h2>
                  <p>Price: <s>${element.price * 2}</s></p>
                  <p class="p1">Price: ${element.price}</p>
        
                  <div class="btn">
                    <div class="btnn">
                      <button class="btnnn">Buy</button>
                    </div>
                    <div class="korzinka">
                      <i class="fa-solid fa-cart-shopping"></i>
                      <div class="start">
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `;
        }
      });
    });

    elect.addEventListener("click", () => {
      all__cards.innerHTML = "";
      value.forEach((element) => {
        if (element.category === "electronics") {
          all__cards.innerHTML += `
                <div class="card1">
                  <div class="card__img">
                    <img src="${element.image}" alt="This is img" />
                    <div class="mensen">
                      <i class="fa-regular fa-heart"></i>
                    </div>
                  </div>
          
                  <div class="card__text">
                    <h2>${element.title}</h2>
                    <p>Price: <s>${element.price * 2}</s></p>
                    <p class="p1">Price: ${element.price}</p>
          
                    <div class="btn">
                      <div class="btnn">
                        <button class="btnnn">Buy</button>
                      </div>
                      <div class="korzinka">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <div class="start">
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              `;
        }
      });
    });
  })
  .catch((error) => console.log("error", error));
