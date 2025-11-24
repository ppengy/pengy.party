
let images = [];
fetch("data/banner_images.json")
    .then(res => res.json())
    .then(data => {
        //note: current image.json has 10 entries
        images = data;
        if (images.length == 0) return;
        // Select random banner image
        const randomIndex = Math.floor(Math.random() * images.length);
        // const randomIndex = 6;
        const chosenImage = images[randomIndex];
        const banner = document.getElementById("banner");
        banner.style.backgroundImage = `url('${chosenImage.link}')`;
        banner.style.backgroundPosition = chosenImage.custom_pos || "center";
        // Add credit link
        const creditContainer = document.getElementById("credits-container");
        const creditLink = document.createElement("a");
        creditLink.href = chosenImage.credit;
        creditLink.target = "_blank";
        creditLink.innerText = "Image credit";
        creditContainer.appendChild(creditLink);
    });

// List of names and their links
let names = [];
fetch("data/members.json")
    .then(res => res.json())
    .then(data => {
        names = data;

        // Start flashing loop
        nameLoop();
        setInterval(nameLoop, 450);

        // Populate dropdown
/*         const namesContainer = document.getElementById("names-container");
        names.forEach(obj => {
            const a = document.createElement("a");
            a.href = obj.link;
            a.target = "_blank";
            a.innerText = obj.name;
            namesContainer.appendChild(a);
            namesContainer.appendChild(document.createElement("br"));
        }); */
    });

// Flashing name
let index = 0;
function nameLoop() {
    if (names.length === 0) return;
    const nameFlasherDomEl = document.getElementById("name-flasher");
    nameFlasherDomEl.innerText = names[index].name;
    index = (index + 1) % names.length;
}
