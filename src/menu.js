const menu = () => {
  let content = document.getElementById("content");
  let center = document.createElement("div");
  center.id = "center";
  let headline = document.createElement("div");
  headline.id = "headline";
  let description = document.createElement("div");
  description.id = "description";
  let headlineContent = "Menu";
  let descriptionContent = `We can show you some pictures of our daily ready to eat
  plates but we cannot show you the variety of things we can offer, just join us and
  and see, we bet on the fact that you will love everything.`;
  headline.textContent = headlineContent;
  description.textContent = descriptionContent;
  content.appendChild(center);
  center.appendChild(headline);
  center.appendChild(description);
};

export { menu };
