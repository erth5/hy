const res = await fetch("https://translate.astian.org/translate", {
    method: "POST",
    body: JSON.stringify({
        q: "Ich lese ein Buch",
        source: "de",
        target: "en"
    }),
    headers: { "Content-Type": "application/json" }
});

console.log(await res.json());

export { };
