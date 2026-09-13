/* =========================================================
   Susanbau Service — Interaktionen
   Kein Framework, keine externen Abhängigkeiten.
   ========================================================= */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Jahreszahl in der Fußzeile ---------- */
  var jahr = document.getElementById("jahr");
  if (jahr) jahr.textContent = new Date().getFullYear();

  /* ---------- Bildplatzhalter nachprüfen ----------
     window.phFail im <head> fängt den normalen Fehlerfall ab. Ein Bild kann
     aber bereits gescheitert sein, bevor diese Datei läuft — etwa bei der
     Rückkehr über den Zurück-Knopf oder aus dem Cache. Dann feuert kein
     error-Ereignis mehr, und es bliebe ein kaputtes Bildsymbol stehen.
     Daran erkennt man solche Fälle: fertig geladen, aber ohne Breite. */
  function pruefeBilder() {
    if (typeof window.phFail !== "function") return;
    document.querySelectorAll(".media img").forEach(function (img) {
      if (img.complete && img.naturalWidth === 0) window.phFail(img);
    });
  }
  pruefeBilder();
  window.addEventListener("load", pruefeBilder);

  /* ---------- Mobiles Menü ---------- */
  var burger = document.getElementById("burger");
  var nav = document.getElementById("nav");

  function closeNav() {
    if (!burger || !nav) return;
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Menü öffnen");
    nav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  }

  if (burger && nav) {
    burger.addEventListener("click", function () {
      var open = burger.getAttribute("aria-expanded") === "true";
      if (open) {
        closeNav();
      } else {
        burger.setAttribute("aria-expanded", "true");
        burger.setAttribute("aria-label", "Menü schließen");
        nav.classList.add("is-open");
        document.body.classList.add("nav-open");
      }
    });

    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeNav();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });
  }

  /* ---------- Kopfbereich: Schatten beim Scrollen ---------- */
  var header = document.getElementById("header");
  function onScroll() {
    var gescrollt = window.scrollY > 12;
    if (header) header.classList.toggle("is-stuck", gescrollt);
    // Auch am <body>: Die obere Zeile liegt außerhalb der Kopfleiste und soll
    // mit ihr zusammen hell werden. Sonst stand der helle Streifen beim
    // Anscrollen zwischen Video oben und Video unten.
    document.body.classList.toggle("is-gescrollt", gescrollt);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Höhe der Kopfleiste melden ----------
     Der Hero zieht sich um genau diesen Betrag nach oben, damit das Video
     bis unter die Kopfleiste durchläuft. Gemessen statt geschätzt, weil die
     Leiste je nach Schriftgröße, Zoomstufe und Browser unterschiedlich hoch
     ausfällt. Ohne JavaScript greift der Ersatzwert aus dem Stylesheet. */
  var topbar = document.querySelector(".topbar");
  function messeKopf() {
    if (!header) return;
    var hoehe = header.offsetHeight + (topbar ? topbar.offsetHeight : 0);
    document.documentElement.style.setProperty("--kopf-h", hoehe + "px");
  }
  messeKopf();
  window.addEventListener("resize", messeKopf);
  // Die Schriften kommen erst nach dem ersten Aufbau an und können die
  // Leiste um ein paar Pixel wachsen lassen. Danach also noch einmal messen.
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(messeKopf);

  /* ---------- Videos ----------
     Filme sind das Schwerste auf dieser Seite. Deshalb gelten drei Regeln:

     1. Erst das Standbild, dann der Film. Das Standbild steht im HTML und
        ist sofort da; die Videoadresse setzt erst dieser Code. Dadurch
        konkurriert der Film nicht mit Schrift, Stylesheet und Bild um die
        Leitung, und die Seite steht schnell.
     2. Bei „Datensparmodus" oder langsamer Mobilverbindung wird gar kein
        Film geladen. Ein Bauherr auf der Baustelle bekommt dann eben ein
        Standbild — das ist besser als eine Seite, die nicht lädt.
     3. Wer Bewegung im Betriebssystem abgestellt hat, bekommt auch keine.

     Eingeblendet wird der Film erst, wenn er wirklich läuft. Sein erstes
     Bild ist dasselbe wie das Standbild, deshalb sieht man keinen Wechsel,
     sondern nur, dass sich plötzlich etwas bewegt. Klappt das Abspielen
     nicht, bleibt das Standbild stehen und niemand merkt etwas. */
  var verbindung = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  var sparsam = false;
  if (verbindung) {
    var art = verbindung.effectiveType || "";
    sparsam = verbindung.saveData === true ||
              art === "slow-2g" || art === "2g" || art === "3g";
  }

  function spiele(video) {
    var lauf = video.play();
    if (lauf && lauf.catch) lauf.catch(function () { /* Standbild bleibt stehen */ });
  }

  var gestarteteFilme = [];
  function starteFilm(video, quelle) {
    if (!video || !quelle) return;
    video.addEventListener("playing", function () {
      video.classList.add("is-da");
    }, { once: true });
    video.src = quelle;
    gestarteteFilme.push(video);
    spiele(video);
  }

  // Wird die Seite in einem Hintergrund-Tab geöffnet, startet Chrome den Film
  // nicht — und wechselt man dann zum Tab, läuft er auch nicht von selbst an.
  // Nachgeprüft: Er blieb auf dem ersten Bild stehen. Deshalb beim
  // Sichtbarwerden noch einmal anstoßen. Die Filme haben keine Bedienelemente,
  // ein pausierter Film ist also nie absichtlich angehalten.
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) return;
    gestarteteFilme.forEach(function (v) { if (v.paused) spiele(v); });
  });

  if (!reduceMotion && !sparsam) {
    var heldVideo = document.querySelector(".hero__video");
    if (heldVideo) {
      var breit = window.matchMedia("(min-width: 900px)").matches;
      var quelle = heldVideo.getAttribute(breit ? "data-desktop" : "data-mobil");
      if (document.readyState === "complete") {
        starteFilm(heldVideo, quelle);
      } else {
        window.addEventListener("load", function () { starteFilm(heldVideo, quelle); });
      }
    }

    // Filme weiter unten auf der Seite erst laden, wenn man in ihre Nähe
    // kommt. Wer nie so weit scrollt, lädt sie auch nie.
    var filme = document.querySelectorAll("video[data-film]");
    if (filme.length && "IntersectionObserver" in window) {
      var fio = new IntersectionObserver(
        function (entries, obs) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            starteFilm(entry.target, entry.target.getAttribute("data-film"));
            obs.unobserve(entry.target);
          });
        },
        { rootMargin: "300px 0px" }
      );
      filme.forEach(function (v) { fio.observe(v); });
    }
  }

  /* ---------- Aktiver Menüpunkt ---------- */
  var navLinks = nav ? nav.querySelectorAll('a[href^="#"]:not(.nav__cta)') : [];
  var sections = [];
  navLinks.forEach(function (link) {
    var el = document.querySelector(link.getAttribute("href"));
    if (el) sections.push({ link: link, el: el });
  });

  if (sections.length && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          sections.forEach(function (s) {
            s.link.classList.toggle("is-active", s.el === entry.target);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (s) { spy.observe(s.el); });
  }

  /* ---------- Einblenden beim Scrollen ---------- */
  var reveals = document.querySelectorAll(".reveal");

  function revealAll() {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealAll();
  } else {
    /* Das Verstecken wird erst hier eingeschaltet — von genau der Stelle,
       die es auch wieder aufhebt. Hinge es an einer Klasse aus dem <head>,
       würde eine veraltete oder fehlerhafte Fassung dieser Datei Inhalte
       dauerhaft unsichtbar machen, statt nur die Animation zu verlieren. */
    document.documentElement.classList.add("reveal-on");

    var io = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry, i) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          window.setTimeout(function () { el.classList.add("is-in"); }, Math.min(i, 5) * 70);
          obs.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    reveals.forEach(function (el) { io.observe(el); });

    // Notbremse: Falls der Observer aus irgendeinem Grund nicht auslöst,
    // wird nach 1,5 Sekunden einfach alles eingeblendet. Die Seite darf
    // unter keinen Umständen unsichtbar bleiben.
    window.setTimeout(function () {
      if (!document.querySelector(".reveal.is-in")) revealAll();
    }, 1500);
  }

  /* ---------- Anfrageformular ----------
     Bewusst ohne Server: Aus den Eingaben wird eine fertige WhatsApp-Nachricht
     oder eine vorausgefüllte E-Mail gebaut. Es gibt also kein Postfach zu
     pflegen, nichts kann ausfallen, und es entstehen keine Pflichten für ein
     Backend (Auftragsverarbeitung, Löschfristen).

     TODO Bilal: Sobald die Firmen-E-Mail steht, MAIL hier austauschen — und
     die Adresse zusätzlich in index.html, impressum.html und datenschutz.html. */
  var MAIL = "susanvolkan@gmx.de";
  var WHATSAPP = "491738934868"; // 0173 8934868

  var form = document.getElementById("anfrage");
  var note = document.getElementById("formNote");
  var waBtn = document.getElementById("waBtn");

  function val(id) {
    var el = document.getElementById(id);
    return el ? el.value.trim() : "";
  }

  function say(text, kind) {
    if (!note) return;
    note.textContent = text;
    note.className = "form__note" + (kind ? " is-" + kind : "");
  }

  /** Prüft die Pflichtfelder und markiert Fehler. */
  function check() {
    if (!form) return false;

    // Spam-Falle: von Menschen nie ausgefüllt
    if (val("f-web") !== "") return false;

    var ok = true;
    var first = null;

    ["f-name", "f-tel", "f-text", "f-dsgvo"].forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      var bad = el.type === "checkbox" ? !el.checked : el.value.trim() === "";
      el.classList.toggle("is-invalid", bad);
      if (bad && !first) first = el;
      if (bad) ok = false;
    });

    var mail = document.getElementById("f-mail");
    if (mail && mail.value.trim() !== "" && !mail.checkValidity()) {
      mail.classList.add("is-invalid");
      if (!first) first = mail;
      ok = false;
    }

    if (!ok) {
      say("Bitte füllen Sie Name, Telefon und Ihr Anliegen aus und bestätigen Sie den Datenschutz.", "error");
      if (first) first.focus();
    }
    return ok;
  }

  /** Baut den Nachrichtentext aus den Formularfeldern. */
  function buildText() {
    var lines = [
      "Name: " + val("f-name"),
      "Telefon: " + val("f-tel")
    ];
    if (val("f-mail")) lines.push("E-Mail: " + val("f-mail"));
    if (val("f-ort")) lines.push("PLZ / Ort: " + val("f-ort"));
    lines.push("Leistung: " + val("f-leistung"));
    lines.push("");
    lines.push(val("f-text"));
    return lines.join("\n");
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!check()) return;
      var betreff = "Anfrage über die Website – " + val("f-leistung");
      window.location.href =
        "mailto:" + MAIL +
        "?subject=" + encodeURIComponent(betreff) +
        "&body=" + encodeURIComponent(buildText());
      say("Ihr E-Mail-Programm öffnet sich mit der fertigen Nachricht. Bitte dort noch auf „Senden“ klicken.", "ok");
    });

    form.addEventListener("input", function (e) {
      if (e.target.classList) e.target.classList.remove("is-invalid");
    });
  }

  if (waBtn) {
    waBtn.addEventListener("click", function () {
      if (!check()) return;
      var text = "Anfrage über die Website\n\n" + buildText();
      window.open("https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(text), "_blank", "noopener");
      say("WhatsApp öffnet sich mit der fertigen Nachricht.", "ok");
    });
  }
})();
