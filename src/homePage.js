const homePage = () => {
  let content = document.getElementById("content");
  let center = document.createElement("div");
  center.id = "center";
  let headline = document.createElement("div");
  headline.id = "headline";
  let buttons = document.createElement("div");
  buttons.id = "buttons";
  let description = document.createElement("div");
  description.id = "description";
  let headlineContent = "Tomato Surprise";
  let descriptionContent = `If you are conscious about what you eat and the impact that this
  haves to our world you have come to the right place. Pick whatever you want
  from our daily harvested fruit and vegetables, then you can go to the
  cashier to pay a all inclusive rate of USD 10 and to receive our
  special surprise of the day.`;
  headline.textContent = headlineContent;
  description.textContent = descriptionContent;
  content.appendChild(center);
  center.appendChild(headline);
  center.appendChild(buttons);
  center.appendChild(description);
};

export { homePage };
