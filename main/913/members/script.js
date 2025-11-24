//Fetch member data
const memberGrid = document.getElementById("members-grid");
let members = [];

fetch("../data/members.json")
    .then(res => res.json())
    .then(data => {
        members = data
        members.forEach((member) => {
            const card = document.createElement("div");
            card.className = "member-card";

            // image
            const imgContainer = document.createElement("div");
            imgContainer.style.position = "relative";
            const imgEl = document.createElement("img");
            if (member.custom_img) {
                imgEl.src = member.custom_img;
            } else {
                imgEl.src = `https://s.ppy.sh/a/${member.osu_id}`;
            }
            imgContainer.appendChild(imgEl);
            card.appendChild(imgContainer);

            // Info container
            const info = document.createElement("div");
            const title = document.createElement("h3");
            title.textContent = member.name;
            info.appendChild(title);
            // Append info section
            card.appendChild(info);

            // Osu profile link
            const ol = document.createElement("a");
            ol.href = member.link;
            ol.target = "_blank";
            ol.textContent = "osu!";
            ol.style.backgroundColor = "#ff66aa";
            info.appendChild(ol);

            // X profile link
            if (member.X) {
                const xl = document.createElement("a");
                xl.href = member.X;
                xl.target = "_blank";
                xl.textContent = "𝕏";
                xl.style.backgroundColor = "#303030ff";
                info.appendChild(xl);
            }
            if (member.youtube != "") {
                const yl = document.createElement("a");
                yl.href = member.youtube;
                yl.target = "_blank";
                yl.textContent = "▶";
                yl.style.backgroundColor = "red";
                info.appendChild(yl);
            }
            if (member.twitch != "") {
                const tl = document.createElement("a");
                tl.href = member.twitch;
                tl.target = "_blank";
                tl.textContent = "Twitch";
                tl.style.backgroundColor = "purple";
                info.appendChild(tl);
            }
            if (member.opgg != "") {
                const tl = document.createElement("a");
                tl.href = member.opgg;
                tl.target = "_blank";
                tl.textContent = "opgg";
                tl.style.backgroundColor = "#5383e8";
                info.appendChild(tl);
            }

            memberGrid.appendChild(card);

        });
    });