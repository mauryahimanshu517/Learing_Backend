import 'dotenv/config';
const app = await import("./src/app.js");
app.default.listen("5000", () => {
    console.log("listening to port 5000");
});
