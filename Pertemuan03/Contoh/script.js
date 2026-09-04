/* =========================
   DATA PROJECT
========================= */

const projects = [

    {
        title: "Pembelajaran Pemrograman Web",
        desc: "Pengembangan materi pembelajaran HTML, CSS, JavaScript, framework, API, dan integrasi frontend-backend."
    },

    {
        title: "Sistem Monitoring IoT",
        desc: "Pengembangan konsep monitoring data berbasis Internet of Things dengan integrasi sensor, MQTT, dashboard, dan database."
    },

    {
        title: "Aplikasi Sistem Informasi",
        desc: "Pengembangan aplikasi sistem informasi dengan pengelolaan data, CRUD, autentikasi, pencarian, dan pelaporan."
    },

    {
        title: "Pengembangan Kompetensi Teknologi",
        desc: "Eksplorasi pengembangan web, Android, Machine Learning, Deep Learning, dan teknologi masa depan."
    }

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
   THEME SWITCHER
========================= */

function setTheme(mode) {


    // Jika memilih DARK

    if (mode === "dark") {

        document.body.classList.add(
            "dark"
        );

    }

    else {

        // Menghapus mode dark

        document.body.classList.remove(
            "dark"
        );


        // Jika memilih GREEN

        if (mode === "green") {

            document.documentElement
                .style
                .setProperty(

                    "--primary",

                    "#16a34a"

                );

        }


        // Jika memilih BLUE

        else {

            document.documentElement
                .style
                .setProperty(

                    "--primary",

                    "#2563eb"

                );

        }

    }

}