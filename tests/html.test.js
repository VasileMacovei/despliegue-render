const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

describe("Pruebas automáticas HTML - Centro de Incidencias", () => {
  let document;

  beforeAll(() => {
    const html = fs.readFileSync(
      path.resolve(__dirname, "../index.html"),
      "utf8"
    );
    const dom = new JSDOM(html);
    document = dom.window.document;
  });

  test("Existe un título <h1>", () => {
    const h1 = document.querySelector("h1");
    expect(h1).not.toBeNull();
  });

  test("El <h1> tiene texto", () => {
    const h1 = document.querySelector("h1");
    expect(h1.textContent.trim().length).toBeGreaterThan(0);
  });

  test("Hay al menos 3 incidencias", () => {
    const incidencias = document.querySelectorAll("section.incidencia");
    expect(incidencias.length).toBeGreaterThanOrEqual(3);
  });

  test("Cada incidencia tiene un <h2>", () => {
    document.querySelectorAll("section.incidencia").forEach((sec) => {
      const h2 = sec.querySelector("h2");
      expect(h2).not.toBeNull();
    });
  });

  test("Existe el footer", () => {
    const footer = document.querySelector("footer");
    expect(footer).not.toBeNull();
  });
});
