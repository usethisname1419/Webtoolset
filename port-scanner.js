

function scanPorts() {
    const target = document.getElementById("target").value.trim();
    const startPort = parseInt(document.getElementById("startPort").value);
    const endPort = parseInt(document.getElementById("endPort").value);
    const portResults = document.getElementById("portResults");

    portResults.innerHTML = ""; // Clear previous results

 if (target === "127.0.0.1") {
        alert("Scanning localhost (127.0.0.1) is prohibited.");
        return;
    }


    if (!target || !startPort || !endPort || isNaN(startPort) || isNaN(endPort) || startPort < 1 || endPort < startPort) {
        alert("Please enter valid input.");
        return;
    }

    portResults.innerHTML = "<li>Scanning...</li>";

    for (let port = startPort; port <= endPort; port++) {
        const socket = new WebSocket(`ws://${target}:${port}`);

        socket.onopen = function () {
            portResults.innerHTML += `<li>Port ${port}: Open</li>`;
            socket.close();
        };

        socket.onerror = function () {
            portResults.innerHTML += `<li>Port ${port}: Closed</li>`;
        };
    }
}

