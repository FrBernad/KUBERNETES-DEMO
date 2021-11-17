async function populate() {
    const res = await fetch("http://localhost:9090");
    const data = await res.json();
    document.getElementById("podName").innerText = data.machineName;
    document.getElementById("time").innerText = data.currentTime;
}

document.addEventListener("DOMContentLoaded", populate);