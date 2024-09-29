const data_core = [
  {
    title: "Hello",
    color: "red",
    image:
      "https://images.unsplash.com/photo-1597090331712-3ddf682a3819?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    data: "fade-right",
    theme: "#ffd7b4",
  },
  {
    title: "Hi",
    color: "orange",
    image:
      "https://plus.unsplash.com/premium_photo-1664114727339-a710cdbc5455?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    data: "fade-up",
    theme: "#fde29d",
  },
  {
    title: "Hey",
    color: "green",
    image:
      "https://images.unsplash.com/photo-1724565923610-1171662f28b6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    data: "fade-left",
    theme: "#bcee97",
  },
];

const contentDiv = document.getElementById("content");

data_core.forEach((item) => {
  const card = document.createElement("div");
  card.className = "card";
  card.setAttribute("data-aos", item.data); // Add AOS attribute with effect

  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.title;

  const h1 = document.createElement("h1");
  h1.textContent = item.title;
  h1.style.color = item.color;
  card.style.backgroundColor = item.theme;

  card.appendChild(img);
  card.appendChild(h1);

  contentDiv.appendChild(card);
});
