# Was hier liegt

Alle Fotos und Filme auf der Website stammen von **einer** Baustelle: dem Mehrfamilienhaus
in Bürstadt, aufgenommen am 10. und 12. September 2026 mit dem iPhone.

Mit **einer Ausnahme** ist kein Stockfoto dabei: Vom Trockenbau gibt es noch keine eigene
Aufnahme, deshalb zeigt die Karte „Trockenbau" vorerst ein freies Foto von Unsplash — auf der
Seite sichtbar als **„Symbolbild"** gekennzeichnet. Ein fremdes Foto als eigene Arbeit
auszugeben, wäre irreführende Werbung nach § 5 UWG, und Bauherren erkennen den Unterschied
ohnehin sofort. Deshalb der Hinweis im Bild.

## Die Originale

Sie liegen **nicht** in diesem Ordner, sondern unter
`C:\Users\bilal\Desktop\Susanbau\Susanbau\`. Rund 580 MB, 4K, im Apple-Format HEIC und
HEVC — beides kann kein Browser außer Safari anzeigen. Deshalb werden daraus die Dateien
gerechnet, die hier liegen.

Die Originale gehören nicht ins Repo. Sie sind zu groß, und sie enthalten die
GPS-Koordinaten der Baustelle im Datei-Innenleben. Beim Umrechnen fallen diese Daten weg —
in den erzeugten Dateien steckt nachweislich keine Ortsangabe mehr.

## Fotos

| Datei | Herkunft | Zu sehen |
|---|---|---|
| `01-fassade-geruest-buerstadt-*` | IMG_8008 | Eingerüstete Fassade, blauer Himmel — Karte „Fassadenbau" |
| `02-verputzer-kelle-detail-*` | IMG_8023 | Verputzer mit der Kelle an der Wand — Karte „Verputzarbeiten" |
| `03-trockenbau-symbolbild-gipskarton-*` | Unsplash, Foto 2ZMe-E2NBZ0 | Rohbauraum mit gespachteltem Gipskarton — Karte „Trockenbau", als Symbolbild gekennzeichnet |
| `04-kachel-verputzer-kelle-*` | IMG_8023, quadratisch | Verputzer mit der Kelle — Kachel in „Aktuelle Baustelle" |
| `07-inhaber-dachuntersicht-*` | IMG_7992 | Mann streicht die Dachuntersicht — Abschnitt „Über uns" |
| `og-bild.jpg` | Standbild aus IMG_8026 | Vorschaubild beim Teilen per WhatsApp oder Facebook |

Jedes Foto liegt in drei Formaten (`.avif`, `.webp`, `.jpg`) und mehreren Breiten. Der
Browser sucht sich selbst aus, was er kann und braucht — ein Handy lädt die kleine Fassung,
ein großer Bildschirm die große. AVIF ist etwa viermal kleiner als JPEG bei gleichem
Aussehen; die JPEG-Fassung ist nur für ältere Browser da.

**Die Nummer 03 ist ein Symbolbild, kein eigenes Projekt.** Nachweis für Quelle und Lizenz:

| | |
|---|---|
| Quelle | https://unsplash.com/de/fotos/ein-grosser-raum-mit-viel-weisser-farbe-an-den-wanden-2ZMe-E2NBZ0 |
| Fotograf | Brian Wangenheim |
| Lizenz | Unsplash-Lizenz — laut Unsplash kein Unsplash+-Bild, also frei |
| Heruntergeladen | 13.09.2026, 2000 × 1334 px; das Original liegt unter `C:\Users\bilal\Desktop\Susanbau\Stock\` |
| Ausschnitt | oben links, 1560 × 1033 px — Decke und Wände, ohne den Stuhl rechts unten |

Im Bild steht klein „Symbolbild", der Alternativtext sagt dasselbe. Sobald Volkan einen
Trockenbau-Raum fotografiert hat, wird es ersetzt und der Hinweis entfernt. Die frühere
Putzfläche aus IMG_8021 wird nicht mehr verwendet.

## Filme

Liegen in `../video/`.

| Datei | Herkunft | Wo |
|---|---|---|
| `hero-mobil.mp4` | IMG_8027, Ausschnitt | Startseite am Handy — Verputzer lehnt aus dem Gerüst und zieht den Putz ab |
| `hero-desktop.mp4` | IMG_8026 | Startseite am großen Bildschirm — ganze Fassade, stabilisiert |
| `kachel-geruest-team.mp4` | IMG_8014, halbe Geschwindigkeit | Kachel: drei Handwerker am Gerüst |
| `kachel-haus-geruest.mp4` | IMG_8002, beruhigt | Kachel: Haus mit Gerüst im Abendlicht |
| `kachel-fassade-arbeiter.mp4` | IMG_8025, Stück 1,7–5,7 s | Kachel: Handwerker auf zwei Gerüstlagen |

**Der Film am großen Bildschirm ist stabilisiert**, als stünde die Kamera auf einem Stativ. Das
iPhone hatte schon selbst ruhig gehalten — nachgemessen springt das Bild von Einzelbild zu
Einzelbild kaum. Übrig war ein langsames Abdriften über mehrere Sekunden, und das machte die
Nahtstelle der Schleife unsauber, weil Anfang und Ende gegeneinander verschoben lagen. Der
Stativ-Modus nimmt das heraus: 70 % weniger Schwanken, die Naht 61 % sauberer. Dafür wird
das Bild um wenige Prozent enger beschnitten.

**Er liegt in 2560 × 1440 vor, rund 6 MB.** Die erste Fassung hatte 1600 × 900 und 1,6 MB
und sah am PC verpixelt aus: Der Hero füllt den ganzen Bildschirm, und auf einem großen
Monitor oder einem Laptop mit hoher Pixeldichte rechnet der Browser eine kleinere Datei
hoch. Gemessen (VMAF, dargestellt wie auf einem 2560er-Monitor) stieg die Bildqualität von
79 auf 91 von 100. Mehr Auflösung brachte dabei mehr als eine höhere Qualitätsstufe; die
vollständige Messreihe steht im Skript. Die Größe bremst den Seitenaufbau nicht, weil der
Film erst nach dem Standbild und nur bei guter Verbindung geladen wird.

**Die Galerie „Aktuelle Baustelle" besteht aus vier kleinen, quadratischen Kacheln** (drei
Filme, ein Foto, je 600 × 600). Vorher standen dort ein großer Film und drei hohe Fotos, das
war zu groß. Die Filme laufen erst an, wenn der Abschnitt in die Nähe kommt.

- **IMG_8014** ist nur 1,9 s lang und läuft deshalb halb so schnell. Die Aufnahme hat 60 Bilder
  pro Sekunde, verlangsamt sind es 30 echte statt verdoppelter. Von sich aus ruhig.
- **IMG_8002** ist wie der frühere Handy-Hero im Stativ-Modus beruhigt. Das Quadrat beginnt
  bei 24 % der Breite, so sind weder das Banner der Gerüstbaufirma noch das Dixi-Klo zu sehen.
- **IMG_8025** schwenkt am Ende stark (Abdriften 212 Promille der Bildbreite). Genommen wird
  nur das ruhige Stück von 1,7 bis 5,7 s (Abdriften 5 Promille), mittig zugeschnitten.

Alle Kacheln sind etwas heller abgestimmt als die Hero-Filme; in der kleinen Größe wirkten die
Weißen so klar statt grau.

**Der Handy-Film ist eine Nahaufnahme** (IMG_8027): Der Verputzer lehnt aus dem Gerüst und
zieht den Putz ab. Am Handy bleibt vom Hero nur die obere Bildhälfte frei — Absatz und
zweiter Knopf sind dort ausgeblendet —, und genau da liegen Gesicht und Kelle. Der Ausschnitt
ist leicht vergrößert und oben verankert.

Nicht beruhigt: Der Clip ist von sich aus ruhig (Schwanken 0,43 Promille), und bei
Nahaufnahmen mit bewegtem Arm hat die Stabilisierung nachweislich geschadet. Die ebenfalls
geprüfte Nahaufnahme „VID GUT" war fünfmal unruhiger und wurde durch Beruhigen noch schlechter.

Die Schleife läuft von 0 bis 6,1 s mit nur 0,5 s Überblendung. An dieser Stelle hat sich der
Verputzer fast zurückgezogen, sein Kopf blendet also nur ein, statt kurz doppelt zu erscheinen.
Farben: Kurve hable, etwas mehr Kontrast, kühlere Weißen, leicht nachgeschärft. 5,6 s, 1,35 MB.

Vorher liefen am Handy IMG_8002 (von der Straße, gespiegelt), die Balkon-Aufnahme IMG_8004 und
das Foto IMG_8013 mit einer Kamerafahrt. Das Verfahren steckt weiter im Skript (`kamerafahrt`).

**Alle Filme sind von HDR umgerechnet.** Das iPhone filmt mit 10 Bit und HLG-Kennlinie.
Ohne Umrechnung wirkt das im Browser grau und flau; das Skript bringt es mit der
Mobius-Kurve auf normale Bildschirmfarben.

Zu jedem Film gehört ein Standbild (`.avif`, `.webp`, `.jpg`). Das ist das, was sofort zu
sehen ist. Der Film selbst wird erst danach geladen — und bei Datensparmodus oder langsamer
Mobilverbindung gar nicht. Dann bleibt das Standbild stehen, und die Seite funktioniert
trotzdem.

Die Filme laufen **stumm** und in Endlosschleife. Ton gibt es nicht: Ein Video mit Ton darf
gar nicht von selbst starten, und niemand will auf einer Handwerkerseite beschallt werden.

## Nachschub

Neue Aufnahmen kommen in den Ordner mit den Originalen. Dann einmal

```bash
bash "C:/Users/bilal/Desktop/Susanbau/werkzeug/medien-bauen.sh"
```

laufen lassen — das Skript rechnet alle Fassungen neu. Die Liste der Dateien steht oben im
Skript und muss für ein neues Foto um eine Zeile ergänzt werden.

## Was noch fehlt

- **Trockenbau innen.** Ständerwand, abgehängte Decke, gespachtelte Fläche. Der wichtigste
  Nachschub — ein Drittel der Leistungen hat bisher nur ein Symbolbild. Am besten ein heller
  Raum, gern Dachgeschoss mit Dachschräge, quer fotografiert, ohne Leute und Werkzeug im
  Vordergrund.
- **Das Team vor dem Fahrzeug.** Klassisches Vertrauensbild, fehlt.
- **Ein fertiges Haus ohne Gerüst.** Alles Vorhandene zeigt die Baustelle, nicht das
  Ergebnis. Ein „Vorher/Nachher" wäre das stärkste Argument überhaupt.
