# Susanbau Service — Website

Website für **Susanbau Service**, Bubenlachring 14, 68642 Bürstadt.
Fassadenbau · Verputzarbeiten · Trockenbau.

Dies ist ein **erster Entwurf zur Ansicht**. Farben, Texte und Aufbau lassen sich
jederzeit ändern — nichts davon ist in Stein gemeißelt.

---

## Was das hier ist

Eine schlichte, schnelle Website ohne Baukasten, ohne Datenbank und ohne monatliche
Gebühren außer Hosting und Domain. Sie besteht aus ein paar Dateien und läuft auf jedem
Webspace. Konkret heißt das:

- **Lädt schnell**, auch mit schlechtem Empfang auf der Baustelle
- **Kein Cookie-Banner**, weil es nichts zuzustimmen gibt: keine Cookies, kein Google
  Analytics, keine Google-Schriften, keine eingebettete Karte. Beim Aufruf der Seite
  wird nichts von fremden Servern nachgeladen.
- **Nichts, was kaputtgehen kann.** Kein Login, kein Update, kein Plugin, das man pflegen muss.

## Aufbau der Seite

Alles steht auf einer einzigen Seite, die Menüpunkte springen nur an die richtige Stelle:

1. **Oben** — Was wir machen, Telefonnummer, zwei Knöpfe
2. **Leistungen** — Fassadenbau, Verputzarbeiten, Trockenbau
3. **Ablauf** — vier Schritte vom Anruf bis zur Übergabe
4. **Aktuelle Baustelle** — Fotos und Film vom Mehrfamilienhaus in Bürstadt
5. **Über uns** — Betrieb und Einsatzgebiet
6. **Fragen** — die sechs häufigsten Fragen
7. **Kontakt** — Anfrageformular und alle Kontaktwege

Dazu **Impressum** und **Datenschutzerklärung** als eigene Seiten.

## Die Fotos und der Film

Alles, was auf der Seite zu sehen ist, stammt von **einer** Baustelle: dem Mehrfamilienhaus
in Bürstadt, aufgenommen am 10. und 12. September 2026. Kein einziges gekauftes Bild.

Deshalb heißt der Abschnitt auch „Aktuelle Baustelle" und nicht „Referenzen". Es ist ein
Auftrag, und so wird er gezeigt. Sechs Kacheln so zu beschriften, als wären es sechs
Projekte, wäre irreführende Werbung — und unnötig: eine Baustelle, ehrlich gezeigt,
überzeugt mehr als sechs behauptete.

**Der Film auf der Startseite** läuft stumm in Endlosschleife und zeigt die ganze
Fassade mit dem Team auf dem Gerüst — am großen Bildschirm quer, am Handy als
Hochkant-Ausschnitt derselben Aufnahme. Er ist digital stabilisiert, als stünde die Kamera
auf einem Stativ. Dadurch liegen Ende und Anfang deckungsgleich übereinander, und die
Schleife beginnt ohne sichtbaren Sprung von vorn.

Am Handy lief anfangs die Nahaufnahme des Verputzers. Die sah stark aus, ließ sich aber
nicht sauber schleifen: Der Mann lehnt sich am Ende aus dem Bild und greift am Anfang zur
Wand, und an der Nahtstelle geisterte ein halb durchsichtiger Handschuh durchs Bild. Die
Nahaufnahmen vom Handwerk sind weiter auf der Seite zu sehen, bei „Verputzarbeiten“ und
„Über uns“.

**Auf der Baustelle mit schlechtem Netz** lädt die Seite trotzdem. Zuerst kommt nur ein
Standbild, der Film erst danach. Bei eingeschaltetem Datensparmodus oder langsamer
Mobilverbindung wird er gar nicht geladen — dann bleibt das Standbild stehen, und niemand
merkt, dass etwas fehlt. Wer im Betriebssystem „Bewegung reduzieren" eingestellt hat,
bekommt ebenfalls keinen Film.

Welche Datei woher stammt und wie neue Fotos dazukommen, steht in
[assets/img/MEDIEN.md](assets/img/MEDIEN.md).

## Zuerst fürs Handy gebaut

Die meisten Besucher kommen mit dem Telefon, deshalb ist die Handy-Ansicht der Maßstab
gewesen und nicht der große Bildschirm:

- Unten sitzt fest eine Leiste mit **Anrufen · WhatsApp · Anfragen**. Erfahrungsgemäß kommt
  bei Handwerksbetrieben der größte Teil der Anfragen über genau diesen Knopf.
- **Überschrift und Anrufknopf stehen oben**, das Foto kommt darunter. Läge das Bild oben,
  müsste man sich erst an einem bildschirmhohen Foto vorbeiscrollen, bevor überhaupt
  dasteht, was der Betrieb macht.
- Alle Eingabefelder sind **genau 16 Pixel** groß. Alles darunter lässt iPhones beim
  Antippen automatisch in die Seite hineinzoomen — der Besucher landet dann verschoben im
  Formular und muss erst wieder herauszoomen.
- Telefonnummer, WhatsApp-Link, Fußzeilen-Links und der Datenschutz-Haken sind auf
  **mindestens 44 Pixel** vergrößert, damit man sie mit dem Daumen sicher trifft.
- Kein seitliches Scrollen, auf keiner Breite.

## Wie das Anfrageformular funktioniert

Es gibt **keinen Server im Hintergrund**. Wer das Formular ausfüllt und auf
„Per WhatsApp senden" drückt, bekommt eine fertig geschriebene WhatsApp-Nachricht an
**0173 8934868** vorgelegt und muss sie nur noch abschicken. Der zweite Knopf macht
dasselbe als E-Mail an **susanvolkan@gmx.de**.

Das hat drei Vorteile: Es kann nichts ausfallen, es gibt kein weiteres Postfach zu
pflegen, und es entstehen keine Datenschutzpflichten für ein Backend.

> Sobald die eigene Firmen-E-Mail-Adresse steht, muss sie an vier Stellen eingetragen
> werden: in `assets/js/main.js` (ganz oben, Zeile mit `var MAIL`), in `index.html`,
> in `impressum.html` und in `datenschutz.html`.

---

## Bevor die Seite online geht

Diese Punkte sind noch offen. Sie stehen zusätzlich als `TODO Bilal:` direkt im Quelltext.

| Was | Wo | Warum |
|---|---|---|
| **Vollständiger Name des Inhabers** | `impressum.html`, `datenschutz.html` | Pflicht nach § 5 DDG. Ist derzeit gelb markiert offen gelassen — ein falscher Name wäre schlimmer als eine sichtbare Lücke. |
| **Rechtsform** (Einzelunternehmen, GbR, GmbH …) | `impressum.html` | Bei einer GmbH kommen Registergericht und HRB-Nummer dazu. |
| **Umsatzsteuer-ID** | `impressum.html` | Nur falls vorhanden. Bei Kleinunternehmerregelung entfällt der Abschnitt ersatzlos. |
| **Handwerkskammer / Berufsbezeichnung** | `impressum.html` | **Bitte nicht überspringen.** Stuckateurarbeiten (Putz, WDVS) stehen in Anlage A der Handwerksordnung und sind zulassungspflichtig, reine Trockenbaumontage nicht. Am besten einmal auf die Handwerkskarte schauen. |
| **Erreichbarkeitszeiten** | `index.html` (Topbar, Kontakt, JSON-LD) | Steht bewusst nirgends, solange es nicht bestätigt ist. |
| **Ist der Vor-Ort-Termin kostenlos?** | `index.html`, Abschnitt „Fragen" | Steht aktuell so drin. Falls nicht, Satz anpassen. |
| **Einwilligungen der abgebildeten Personen** | auf Papier, bleibt im Betrieb | **Blockiert den Start.** Auf den Fotos und im Film sind Gesichter zu erkennen. Vordruck zum Ausdrucken: [EINWILLIGUNG-FOTOS.md](EINWILLIGUNG-FOTOS.md) |
| **Fotos vom Trockenbau** | `assets/img/` | Fehlen komplett, siehe [MEDIEN.md](assets/img/MEDIEN.md) |
| **Domain** | siehe unten | Solange nicht vorhanden, läuft alles über die GitHub-Adresse. |

## Umzug auf susanbau.de bei ALL-INKL

An vier Stellen steht derzeit `https://bilal-altu.github.io/susanbau-service/`. Diese sind
beim Umzug auszutauschen:

1. `index.html` — `<link rel="canonical">`, `og:url`, `og:image` und die drei Adressen im
   JSON-LD-Block ganz unten
2. `impressum.html` — `canonical`
3. `datenschutz.html` — `canonical` **und** der Abschnitt „Server-Logdateien": Dort muss
   dann der tatsächliche Hoster stehen, und mit ihm wird ein
   Auftragsverarbeitungsvertrag nach Art. 28 DSGVO gebraucht.
4. `sitemap.xml` und `robots.txt`
5. **`<meta name="robots">` in allen drei Seiten von `noindex, nofollow` zurück auf
   `index, follow` stellen.** Die Vorschau unter der GitHub-Adresse steht bewusst nicht
   im Google-Index, solange im Impressum noch Pflichtangaben fehlen — eine indexierte
   Seite mit unvollständigem Impressum ist abmahnfähig. Das ist der letzte Schalter, der
   umgelegt wird, wenn alles andere steht.

Dazu auf dem Webspace:

6. **Alle Dateien per FTP hochladen**, inklusive der `.htaccess` — die ist bei vielen
   FTP-Programmen ausgeblendet, weil sie mit einem Punkt beginnt. Sie regelt die Umleitung
   auf `https://www.susanbau.de`, die Komprimierung und die Cache-Zeiten.
7. **Zertifikat für `susanbau.de` und `www.susanbau.de`** im KAS aktivieren (Let's Encrypt,
   kostenlos). Erst danach greift die Umleitung sauber, sonst warnt der Browser.
8. **`susanbau-service.de`** als Zweitdomain auf dasselbe Paket legen. Die `.htaccess`
   leitet sie automatisch auf die Hauptadresse um.
9. **`volkan@susanbau.de`** anlegen — und danach die Adresse an vier Stellen eintragen:
   `assets/js/main.js` (Zeile `var MAIL`), `index.html`, `impressum.html`, `datenschutz.html`.
10. **Auftragsverarbeitungsvertrag** mit ALL-INKL abschließen (im KAS als PDF hinterlegt).
    Ohne den fehlt die Grundlage dafür, dass dort Besucherdaten in Logdateien anfallen.

Danach in der [Google Search Console](https://search.google.com/search-console) anmelden
und die `sitemap.xml` einreichen.

Die GitHub-Fassung bleibt als Vorschau bestehen — auf `noindex`, damit sie der echten
Domain nicht in die Quere kommt. Sie ist praktisch, um Änderungen vorzuführen, bevor sie
auf den Server gehen.

## Damit die Seite bei Google gefunden wird

Die Reihenfolge ist wichtiger als die einzelnen Punkte:

1. **Google-Unternehmensprofil anlegen** und verifizieren. Für einen Handwerksbetrieb
   bringt das mehr als alles andere auf der Website zusammen — damit erscheint der Betrieb
   in der Karte, wenn jemand „Verputzer Bürstadt" sucht.
2. **Echte Bewertungen sammeln.** Nach jedem zufriedenen Auftrag freundlich fragen. Auf der
   Website steht bewusst **kein** Bewertungsabschnitt, weil es noch keine echten Bewertungen
   gibt — erfundene Rezensionen sind nach § 5b Abs. 3 UWG abmahnfähig. Sobald welche da sind,
   kommt der Abschnitt dazu.
3. **Überall dieselben Angaben.** Firmenname, Anschrift und Telefonnummer müssen auf der
   Website, im Google-Profil und in Branchenverzeichnissen zeichengenau übereinstimmen.
4. **Eigene Fotos.** Google bevorzugt echte Bilder, und Kunden erst recht.

---

## Für den technischen Blick

### Aufbau

```
index.html            Startseite, alle Abschnitte
impressum.html
datenschutz.html
favicon.svg           Symbol für den Browser-Tab
.htaccess             Serverregeln für ALL-INKL (Umleitung, Cache, Komprimierung)
robots.txt
sitemap.xml
assets/
  css/style.css       das gesamte Design
  js/main.js          Menü, Einblendungen, Formular
  fonts/              Archivo + Inter, lokal (SIL Open Font License 1.1)
  img/                Fotos und Logo (AVIF, WebP, JPEG in mehreren Breiten)
  video/              Filme als MP4 plus Standbild
```

Kein Build-Schritt, kein npm, kein Framework. Änderungen an den Dateien sind sofort wirksam.

### Lokal ansehen

```bash
npx --yes http-server . -p 4711 -c-1
```

Dann `http://localhost:4711/` im Browser öffnen.

### Veröffentlichen

Zwei Orte, zwei Zwecke:

- **Vorschau** — GitHub Pages, Quelle: Branch `main`, Ordner `/`. Ein `git push` genügt,
  nach etwa einer Minute ist sie aktuell. Steht auf `noindex` und dient nur dazu,
  Änderungen vorzuführen.
- **Echte Seite** — ALL-INKL, per FTP in das Verzeichnis von `susanbau.de`. Die
  `.htaccess` gehört mit hochgeladen und muss auf dem Server sichtbar sein.

Ein Build-Schritt existiert nicht, hochgeladen wird genau das, was im Ordner liegt.

### Design

Farben und Maße stehen alle als CSS-Variablen ganz oben in `assets/css/style.css`
(`:root`). Wer dort `--clay` ändert, dreht die Akzentfarbe der gesamten Seite auf einen
Schlag um. Die Farbwelt heißt „Putz & Schwarz": das Weiß der frisch verputzten Fassade als
Grundfläche, Schwarz hinter den Bildern und in den dunklen Abschnitten, Terrakotta nur
noch als kleiner Akzent auf Knöpfen und einem Wort in der Überschrift.

Das war früher anders — warmer Kalkton, Terrakotta überall, eine feine Putzkörnung im
Hintergrund. Das alles war der Ersatz dafür, dass es keine Fotos gab. Jetzt tragen die
Bilder die Seite, und das Design hält sich bewusst zurück.

Die Kontraste sind gegen WCAG 2.1 AA geprüft; wo eine Farbe knapp war, steht die
Begründung als Kommentar daneben.

### Logo

Das Logo ist neu entstanden, es gab vorher keines. Wortmarke **SUSANBAU** über gesperrtem
**SERVICE**, davor eine Bildmarke aus drei Strichen: der Putzauftrag in Lagen, mit der
Traufel nach rechts ausgezogen. Als SVG, also in jeder Größe scharf — vom Favicon bis zur
Fahrzeugbeschriftung.

- `assets/img/logo-susanbau.svg` — für helle Hintergründe
- `assets/img/logo-susanbau-hell.svg` — für dunkle Hintergründe
- `favicon.svg` — nur die Bildmarke, für den Browser-Tab

In den beiden Logo-Dateien **steckt die Schrift mit drin** (als base64 eingebettet, rund
47 KB pro Datei). Sie sehen dadurch überall gleich aus — auch auf einem Rechner, auf dem
Archivo nicht installiert ist, etwa beim Beschriftungsstudio oder in Word. Ohne das
Einbetten würde jedes Programm eine eigene Ersatzschrift wählen. Archivo steht unter der
SIL Open Font License 1.1, die das Einbetten ausdrücklich erlaubt.

Fürs Google-Unternehmensprofil wird ein quadratisches PNG gebraucht; das lässt sich aus
`favicon.svg` in jeder gewünschten Größe exportieren.

Die gesamte Seite ist **serifenlos** gesetzt: **Archivo** für Überschriften und Knöpfe,
**Inter** für den Fließtext. Beide sind Grotesk-Schriften ohne Serifen, beide liegen lokal
im Projekt.
