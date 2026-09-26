const WHATSAPP = "https://wa.me/14132855423";
const PRODUCT_IMAGE_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 700'%3E%3Crect width='900' height='700' fill='%23eef4f1'/%3E%3Crect x='330' y='145' width='240' height='410' rx='24' fill='%23ffffff' stroke='%23126b67' stroke-width='10'/%3E%3Crect x='380' y='95' width='140' height='70' rx='12' fill='%23126b67'/%3E%3Crect x='365' y='275' width='170' height='100' rx='10' fill='%23d9ef8b'/%3E%3Ccircle cx='450' cy='455' r='32' fill='%23126b67' opacity='.16'/%3E%3C/svg%3E";

function applyProductImageFallback(container) {
  container.querySelectorAll("img[data-product-image]").forEach((image) => {
    image.addEventListener(
      "error",
      () => {
        image.src = PRODUCT_IMAGE_PLACEHOLDER;
        image.alt = "Clean temporary product image placeholder";
      },
      { once: true }
    );
  });
}

function initImageFallbacks() {
  document.querySelectorAll("img:not([data-product-image])").forEach((image) => {
    image.addEventListener(
      "error",
      () => {
        image.src = PRODUCT_IMAGE_PLACEHOLDER;
        image.alt = "Clean temporary website image placeholder";
      },
      { once: true }
    );
  });
}

function productCard(productItem) {
  const group = productItem.group
    ? `<span class="product-group">${productItem.group}</span>`
    : "";

  return `
    <article class="product-card">
      <img
        src="${productItem.image}"
        alt="${productItem.imageAlt || `Temporary image for ${productItem.name}`}"
        loading="lazy"
        data-product-image
      >
      <div class="product-card-body">
        <span class="tag">${productItem.category}</span>
        ${group}
        <h3>${productItem.name}</h3>
        <p>${productItem.description}</p>
        <p class="product-pricing">Contact for pricing</p>
        <a class="btn btn-ghost" href="product.html?id=${productItem.id}">
          View Details <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  `;
}

function articleCard(article) {
  return `
    <article class="article-card">
      <img src="${article.image}" alt="Temporary image for ${article.title}" loading="lazy">
      <div>
        <time>${article.date}</time>
        <h3>${article.title}</h3>
        <p>${article.description}</p>
        <a class="btn btn-ghost" href="post.html?id=${article.id}">
          Read Article <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  `;
}

function initMenu() {
  const button = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav-links");

  if (!button || !navigation) return;

  button.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    button.setAttribute("aria-expanded", isOpen);
    button.textContent = isOpen ? "×" : "☰";
  });
}

function initCatalog() {
  const grid = document.querySelector("#catalog");

  if (!grid) return;

  const search = document.querySelector("#product-search");
  const buttons = [...document.querySelectorAll(".filter")];
  let category = "All";

  function render() {
    const searchTerm = search.value.toLowerCase();
    const visibleProducts = products.filter((productItem) => {
      const matchesCategory = category === "All" || productItem.category === category;
      const searchable = `${productItem.name} ${productItem.category} ${productItem.group}`.toLowerCase();
      return matchesCategory && searchable.includes(searchTerm);
    });

    grid.innerHTML = visibleProducts.length
      ? visibleProducts.map(productCard).join("")
      : '<p class="empty">No products match that search. Please try another term.</p>';

    applyProductImageFallback(grid);
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      category = button.dataset.category;
      buttons.forEach((item) => item.classList.toggle("active", item === button));
      render();
    });
  });

  search.addEventListener("input", render);
  render();
}

function initProduct() {
  const holder = document.querySelector("#product-detail");

  if (!holder) return;

  const id = new URLSearchParams(location.search).get("id");
  const productItem = products.find((item) => item.id === id);

  if (!productItem) {
    holder.innerHTML = `
      <div class="not-found">
        <h1>Product not found</h1>
        <p>Please return to our product catalog.</p>
        <a class="btn btn-primary" href="products.html">Browse Products</a>
      </div>
    `;
    return;
  }

  document.title = `${productItem.name} | Precision Peptide Wellness`;
  document.querySelector('[name="description"]').content = productItem.description;
  holder.innerHTML = `
    <img src="${productItem.image}" alt="${productItem.imageAlt}" data-product-image>
    <div>
      <span class="tag">${productItem.category}</span>
      <span class="product-group">${productItem.group}</span>
      <h1>${productItem.name}</h1>
      <p class="lead">${productItem.description}</p>
      <p class="product-pricing">Contact for pricing</p>
      <div class="placeholder-box">
        <strong>Product information placeholder</strong><br>
        Verified ingredients, directions, availability, and other product details will be added here.
      </div>
      <p>
        <a class="btn btn-primary" href="${WHATSAPP}" target="_blank" rel="noopener">Ask on WhatsApp</a>
      </p>
      <p><a href="products.html">← Back to products</a></p>
    </div>
  `;
  applyProductImageFallback(holder);
}

function initPosts() {
  const grid = document.querySelector("#article-grid");

  if (grid) grid.innerHTML = articles.map(articleCard).join("");

  const holder = document.querySelector("#post-detail");

  if (!holder) return;

  const id = new URLSearchParams(location.search).get("id");
  const article = articles.find((item) => item.id === id);

  if (!article) {
    holder.innerHTML = `
      <div class="not-found">
        <h1>Article not found</h1>
        <a class="btn btn-primary" href="blog.html">Visit the blog</a>
      </div>
    `;
    return;
  }

  document.title = `${article.title} | Precision Peptide Wellness`;
  document.querySelector('[name="description"]').content = article.description;
  holder.innerHTML = `
    <p class="tag">Wellness Journal · ${article.date}</p>
    <h1>${article.title}</h1>
    <p class="lead">${article.description}</p>
    <img class="rounded-image" src="${article.image}" alt="Temporary image for ${article.title}">
    <h2>Start with reliable, general information</h2>
    <p>Wellness choices are personal. This article offers general educational information to help you think through routines, products, and goals in an informed way. It is not medical advice.</p>
    <h2>Build an approach that fits your life</h2>
    <p>Small, consistent habits can be more practical than dramatic changes. Consider your schedule, preferences, and wider wellness routine as you explore options.</p>
    <h3>Choose products thoughtfully</h3>
    <p>Review available product information carefully and ask a qualified professional for personalized questions. Visit our <a href="products.html">product catalog</a> to explore the current placeholder collections.</p>
    <h2>Keep learning</h2>
    <p>Explore more topics in our <a href="wellness.html">wellness and fitness guide</a>, or <a href="contact.html">contact us</a> with general questions.</p>
  `;
}

function initForm() {
  const form = document.querySelector("#contact-form");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    const whatsappMessage = `Hello, I'd like to make an inquiry.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nThank you.`;

    window.open(`${WHATSAPP}?text=${encodeURIComponent(whatsappMessage)}`, "_blank", "noopener");
    document.querySelector(".notice").classList.add("show");
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  initCatalog();
  initProduct();
  initPosts();
  initForm();
  initImageFallbacks();
});
