document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", async function (e) {
            e.preventDefault();
            const formData = new FormData(form);

            const response = await fetch("/api/sendMail", {
                method: "POST",
                body: JSON.stringify(Object.fromEntries(formData)),
                headers: { "Content-Type": "application/json" }
            });

            if (response.ok) {
                alert("Заявка отправлена!");
                form.reset();
            } else {
                alert("Ошибка отправки!");
            }
        });
    }
});
