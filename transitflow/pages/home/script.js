const cookieNotification = document.getElementById("cookie-notification");
const acceptCookiesButton = document.getElementById("accept-cookies");
const closeNotificationButton = document.getElementById("close-notification");

acceptCookiesButton.addEventListener("click", () => {
    cookieNotification.style.display = "none";
});

closeNotificationButton.addEventListener("click", () => {
    cookieNotification.style.display = "none";
});
