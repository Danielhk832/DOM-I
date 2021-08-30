const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

const logo = document.getElementById("logo-img");
const links = document.querySelectorAll("header nav a");
const header = document.querySelector("h1");
const button = document.querySelector("button");
const ctaLogo = document.querySelector("#cta-img");
const topContent = document.querySelector(".top-content");
const section1 = topContent.querySelector(".text-content:nth-of-type(1)");
const section1H = section1.querySelector("h4");
const section1P = section1.querySelector("p");
const section2 = topContent.querySelector(".text-content:nth-of-type(2)");
const section2H = section2.querySelector("h4");
const section2P = section2.querySelector("p");
const middleImg = document.querySelector("#middle-img");
const bottomContent = document.querySelector(".bottom-content");
const bottomSection1 = bottomContent.querySelector(
  ".text-content:nth-of-type(1)"
);
const bottomSection1H = bottomSection1.querySelector("h4");
const bottomSection1P = bottomSection1.querySelector("p");
const bottomSection2 = bottomContent.querySelector(
  ".text-content:nth-of-type(2)"
);
const bottomSection2H = bottomSection2.querySelector("h4");
const bottomSection2P = bottomSection2.querySelector("p");
const bottomSection3 = bottomContent.querySelector(
  ".text-content:nth-of-type(3)"
);
const bottomSection3H = bottomSection3.querySelector("h4");
const bottomSection3P = bottomSection3.querySelector("p");
const contact = document.querySelector(".contact");
const contactH = contact.querySelector("h4");
const contactAdd = contact.querySelector("p:nth-of-type(1)");
const contactTel = contact.querySelector("p:nth-of-type(2)");
const contactEmail = contact.querySelector("p:nth-of-type(3)");
const footer = document.querySelector("footer p");

// Example: Update the img src for the logo
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//nav links
const blogLink = document.createElement("a");
blogLink.textContent = "Blog";
blogLink.href = "#";
blogLink.style.color = "green";
document.querySelector("nav").prepend(blogLink);
const FAQ = document.createElement("a");
FAQ.textContent = "FAQ";
FAQ.href = "#";
FAQ.style.color = "green";
document.querySelector("nav").appendChild(FAQ);
links.forEach(
  (link, index) => (link.textContent = siteContent.nav[`nav-item-${index + 1}`])
);
links.forEach((link) => (link.style.color = "green"));
//cta section
//h1
let h1Array = siteContent.cta["h1"].split(" ");
header.innerHTML = h1Array[0] + "<br>";
header.innerHTML += h1Array[1] + "<br>";
header.innerHTML += h1Array[2];
//btn
button.textContent = "Get Started";
//img
ctaLogo.setAttribute("src", siteContent.cta["img-src"]);

//main-content section
//top sections
section1H.textContent = siteContent["main-content"]["features-h4"];
section1P.textContent = siteContent["main-content"]["features-content"];
section2H.textContent = siteContent["main-content"]["about-h4"];
section2P.textContent = siteContent["main-content"]["about-content"];
//middle-img
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
//bottom-sections
bottomSection1H.textContent = siteContent["main-content"]["services-h4"];
bottomSection1P.textContent = siteContent["main-content"]["services-content"];
bottomSection2H.textContent = siteContent["main-content"]["product-h4"];
bottomSection2P.textContent = siteContent["main-content"]["product-content"];
bottomSection3H.textContent = siteContent["main-content"]["vision-h4"];
bottomSection3P.textContent = siteContent["main-content"]["vision-content"];

//contact section

let addArray = siteContent.contact["address"].split(" ");

contactH.textContent = siteContent.contact["contact-h4"];
contactAdd.innerHTML = `${addArray[0]} ${addArray[1]} ${addArray[2]} ${addArray[3]} <br> ${addArray[4]} ${addArray[5]}`;
contactTel.textContent = siteContent.contact["phone"];
contactEmail.textContent = siteContent.contact["email"];

//footer

footer.textContent = siteContent.footer["copyright"];
