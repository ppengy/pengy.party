// Skin data with multiple images
const skins = [
    {
        name: "pengymathi",
        author: "ppengy",
        images: [
            "data/img/ppengymathi/1.jpg",
            "data/img/ppengymathi/2.jpg",
            "data/img/ppengymathi/3.jpg",
        ],
        download:
            "https://www.mediafire.com/file/xgtvhxwtgso4pv6/ppengymathi.osk/file",
    },
    {
        name: "- cyber pastel -",
        author: "lexy",
        images: [
            "data/img/cyberpastel/1.jpg",
            "data/img/cyberpastel/2.jpg",
            "data/img/cyberpastel/3.jpg",
        ],
        download:
            "https://www.mediafire.com/file/htifino3lq7k8dn/-_cyber_pastel_-.osk/file",
    },
    {
        name: "Urabe",
        author: "Dfking",
        images: [
            "data/img/urabe/1.jpg", 
            "data/img/urabe/2.jpg", 
            "data/img/urabe/3.jpg"
        ],
        download:
            "https://www.mediafire.com/file/ytn56ugxvm18c7x/Urabe.osk/file",
    },
    {
        name: "beatiful ah birds",
        author: "placeholder",
        uploader: "placegolder",
        images: [
            "https://i.redd.it/3esvmkuot5s11.jpg",
            "https://external-preview.redd.it/pmddCcDTF4zXqHar5iTaS2xJr4YttJ9RR9FzAEI9aZk.jpg?width=1080&crop=smart&auto=webp&s=a1aa68db73fbd6f826ba83345bf90e5ad922e2db",
        ],
        download: "#",
    }
];


const skinGrid = document.getElementById("skin-grid");

skins.forEach((skin) => {
    const card = document.createElement("div");
    card.className = "skin-card";

    // Image container with arrows
    const imgContainer = document.createElement("div");
    imgContainer.style.position = "relative";

    const imgEl = document.createElement("img");
    imgEl.src = skin.images[0];
    imgEl.dataset.index = 0;
    imgContainer.appendChild(imgEl);

    // Left arrow
    const leftBtn = document.createElement("button");
    leftBtn.className = "arrow-btn arrow-left";
    leftBtn.innerText = "◀";
    leftBtn.onclick = () => {
        let current = parseInt(imgEl.dataset.index);
        current = (current - 1 + skin.images.length) % skin.images.length;
        imgEl.style.opacity = 0;
        setTimeout(() => {
            imgEl.src = skin.images[current];
            imgEl.dataset.index = current;
            imgEl.style.opacity = 1;
        }, 150);
    };
    imgContainer.appendChild(leftBtn);

    // Right arrow
    const rightBtn = document.createElement("button");
    rightBtn.className = "arrow-btn arrow-right";
    rightBtn.innerText = "▶";
    rightBtn.onclick = () => {
        let current = parseInt(imgEl.dataset.index);
        current = (current + 1) % skin.images.length;
        imgEl.style.opacity = 0;
        setTimeout(() => {
            imgEl.src = skin.images[current];
            imgEl.dataset.index = current;
            imgEl.style.opacity = 1;
        }, 150);
    };
    imgContainer.appendChild(rightBtn);

    card.appendChild(imgContainer);

    // Info container
    const info = document.createElement("div");

    const title = document.createElement("h3");
    title.textContent = skin.name;
    info.appendChild(title);

    const author = document.createElement("p");
    author.textContent = `by ${skin.author}`;
    info.appendChild(author);

    if (skin.uploader) {
        const uploader = document.createElement("p");
        uploader.textContent = `Uploaded by: ${skin.uploader}`;
        info.appendChild(uploader);
    }

    const dl = document.createElement("a");
    dl.href = skin.download;
    dl.target = "_blank";
    dl.textContent = "Download";
    info.appendChild(dl);

    // Append info section
    card.appendChild(info);

    skinGrid.appendChild(card);
});