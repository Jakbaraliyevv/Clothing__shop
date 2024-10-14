const men = document.getElementById("men");
const women = document.getElementById("women");
const all = document.getElementById("all");
const elect = document.getElementById("elect");

fetch("https://fakestoreapi.com/products")
  .then((item) => item.json())
  .then((value) => {
    const all__cards = document.querySelector(".all__cards");

    const renderCards = (filter = null) => {
      all__cards.innerHTML = "";
      value
        .filter((element) => !filter || filter(element))
        .forEach((element) => {
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
    };

    all.addEventListener("click", () => renderCards());

    men.addEventListener("click", () =>
      renderCards((el) => el.category === "men's clothing")
    );

    women.addEventListener("click", () =>
      renderCards(
        (el) => el.category === "women's clothing" || el.category === "jewelery"
      )
    );

    elect.addEventListener("click", () =>
      renderCards((el) => el.category === "electronics")
    );

    renderCards();
  })
  .catch((error) => console.log("error", error));
