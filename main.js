import "./styles/styles.scss";
import "remixicon/fonts/remixicon.css";
import axios from "axios";
import numeral from "numeral";

const api = axios.create({
  baseURL: "https://api.coincap.io/v2/assets",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  params: {
    limit: 5,
  },
});

async function getCryptos() {
  const cryptos = await api("");

  cryptos.data.data.forEach((crypto) => {
    const card = document.createElement("div");
    card.className = "card";

    const cardUp = document.createElement("div");
    cardUp.className = "card__up";

    const cryptoImg = document.createElement("img");
    cryptoImg.setAttribute(
      "src",
      `https://assets.coincap.io/assets/icons/${crypto.symbol.toLowerCase()}@2x.png`
    );
    cryptoImg.setAttribute("alt", `${crypto.name}`);
    cryptoImg.className = "card__up--image";

    const cryptoSymbol = document.createElement("p");
    cryptoSymbol.textContent = `${crypto.symbol}`;
    cryptoSymbol.className = "card__up--p";

    const cryptoName = document.createElement("span");
    cryptoName.textContent = `${crypto.name}`;
    cryptoName.className = "card__up--span";

    const cryptoArrow = document.createElement("img");
    cryptoArrow.setAttribute("src", "./assets/arrow.svg");
    cryptoArrow.setAttribute("alt", "Link");
    cryptoArrow.className = "card__up--arrow";

    cardUp.append(cryptoImg, cryptoSymbol, cryptoName, cryptoArrow);

    const cardDown = document.createElement("div");
    cardDown.className = "card__down";

    const cardDownPrices = document.createElement("div");
    cardDownPrices.className = "card__down--price";

    const cryptoPrice = document.createElement("p");
    cryptoPrice.textContent = numeral(crypto.priceUsd).format("$0,0.00");
    cryptoPrice.className = "price__p";

    const cryptoPercentage = document.createElement("p");
    cryptoPercentage.textContent = numeral(crypto.changePercent24Hr).format(
      "0%"
    );
    cryptoPercentage.className = "price__percentage";

    cardDownPrices.append(cryptoPrice, cryptoPercentage);

    const imgChart = document.createElement("img");
    imgChart.setAttribute("src", "./assets/chart.svg");
    imgChart.setAttribute("alt", "Chart");
    imgChart.className = "card__down--img";

    cardDown.append(cardDownPrices, imgChart);

    card.append(cardUp, cardDown);

    cryptoCard.append(card);
  });
}

getCryptos();
