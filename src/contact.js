const contact = () => {
  let content = document.getElementById("content");
  let center = document.createElement("div");
  center.id = "center";
  let headline = document.createElement("div");
  headline.id = "headline";
  let description = document.createElement("div");
  description.id = "description";
  let headlineContent = "Contact Us";
  let descriptionContent = `We are in the same place since 2009. Visit us in our instagram @tomatoSurprise or phisically at
  107 Augusta Ave, PalmHarbor FL.`;
  headline.textContent = headlineContent;
  description.textContent = descriptionContent;
  content.appendChild(center);
  center.appendChild(headline);
  center.appendChild(description);
};

export { contact };
