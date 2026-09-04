/* =========================
   DATA PROJECT
========================= */

const projects = [

    {
        title: "SIPAKDES: Sistem Informasi Persuratan Administrasi Kantor Desa",
        desc: "Pengembangan dalam membuat persuratan administrasi yang ada di desa Rawalele berbasis VB Net dan database yang digunakan microsoft Access"
    },

    {
        title: "O-BOX: Smart Thermoelectric-IOT integration dengan real-time inventory analytics upaya reduksi food waste mahasiswa menuju SDG's 12",
        desc: "Pengembangan dalam membuat tempat pendingin berbasis Internet of Things dengan integrasi sensor, MQTT, dashboard, dan database."
    },

];


/* =========================
   MENGAMBIL ELEMENT HTML
========================= */

const projectList =
    document.getElementById("projectList");


/* =========================
   MENAMPILKAN PROJECT
========================= */

projects.forEach(function(project) {

    // Membuat element div

    const card =
        document.createElement("div");


    // Menambahkan class

    card.className =
        "project";


    // Menambahkan isi HTML

    card.innerHTML =

        "<h3>" +
        project.title +
        "</h3>" +

        "<p>" +
        project.desc +
        "</p>";


    // Menampilkan card ke halaman

    projectList.appendChild(card);

});


/* =========================
   TOGGLE SECTION
========================= */

function toggle(element) {

    // Mengambil elemen setelah h2

    const content =
        element.nextElementSibling;


    // Mengecek kondisi tampilan

    if (
        content.style.display === "none"
    ) {

        // Jika sebelumnya hidden

        content.style.display =
            "block";

    }

    else {

        // Jika sebelumnya tampil

        content.style.display =
            "none";

    }

}


/* =========================
   DARK MODE
========================= */

function toggleDarkMode() {

    document.body.classList.toggle("dark");

    const btn =
        document.getElementById("darkBtn");

    if (
        document.body.classList.contains("dark")
    ) {

        btn.innerHTML =
            "☀️ Light Mode";

    } else {

        btn.innerHTML =
            "🌙 Dark Mode";

    }

function toggleDarkMode() {
    alert("Tombol berhasil diklik");
    document.body.classList.toggle("dark");
}
}