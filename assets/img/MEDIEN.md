# Was hier liegt

Alle Fotos und Filme auf der Website stammen von **einer** Baustelle: dem Mehrfamilienhaus
in Bürstadt, aufgenommen am 10. und 12. September 2026 mit dem iPhone.

Es ist bewusst **kein einziges gekauftes Stockfoto** dabei. Ein fremdes Foto als eigene
Arbeit auszugeben, ist irreführende Werbung nach § 5 UWG — und Bauherren erkennen den
Unterschied ohnehin sofort.

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
| `03-putzstruktur-oberflaeche-*` | Einzelbild aus IMG_8021 | Reine Putzfläche — Karte „Trockenbau" |
| `04-team-geruest-fassade-*` | IMG_8013 | Vier Leute über drei Gerüstlagen |
| `05-arbeiter-geruest-untersicht-*` | IMG_8024 | Blick vom Gerüst nach oben |
| `06-team-geruest-quer-*` | IMG_8010 | Zwei Leute über dem Fenstersturz |
| `07-inhaber-dachuntersicht-*` | IMG_7992 | Mann streicht die Dachuntersicht — Abschnitt „Über uns" |
| `og-bild.jpg` | Standbild aus IMG_8026 | Vorschaubild beim Teilen per WhatsApp oder Facebook |

Jedes Foto liegt in drei Formaten (`.avif`, `.webp`, `.jpg`) und mehreren Breiten. Der
Browser sucht sich selbst aus, was er kann und braucht — ein Handy lädt die kleine Fassung,
ein großer Bildschirm die große. AVIF ist etwa viermal kleiner als JPEG bei gleichem
Aussehen; die JPEG-Fassung ist nur für ältere Browser da.

**Die Nummer 03 ist kein Trockenbau-Projekt.** Von Trockenbau gibt es bisher keine einzige
Aufnahme. Statt ein fremdes Innenraumfoto zu nehmen, steht dort eine echte Putzoberfläche
als Materialbild, und der Alternativtext sagt genau das. Sobald Innenaufnahmen da sind,
wird es ersetzt.

## Filme

Liegen in `../video/`.

| Datei | Herkunft | Wo |
|---|---|---|
| `hero-mobil.mp4` | IMG_8026, Hochkant-Ausschnitt | Startseite am Handy — ganze Fassade, stabilisiert |
| `hero-desktop.mp4` | IMG_8026 | Startseite am großen Bildschirm — ganze Fassade, stabilisiert |
| `baustelle.mp4` | IMG_8025 | Abschnitt „Aktuelle Baustelle" |

**Beide Startseiten-Filme sind stabilisiert**, als stünde die Kamera auf einem Stativ. Das
iPhone hatte schon selbst ruhig gehalten — nachgemessen springt das Bild von Einzelbild zu
Einzelbild kaum. Übrig war ein langsames Abdriften über mehrere Sekunden, und das machte die
Nahtstelle der Schleife unsauber, weil Anfang und Ende gegeneinander verschoben lagen. Der
Stativ-Modus nimmt das heraus: 70 % weniger Schwanken, die Naht 61 % sauberer. Dafür wird
das Bild um wenige Prozent enger beschnitten.

Der Baustellenfilm ist bewusst **nicht** stabilisiert — dort schwenkt die Kamera absichtlich.

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
  Nachschub — ein Drittel der Leistungen hat bisher kein eigenes Bild.
- **Das Team vor dem Fahrzeug.** Klassisches Vertrauensbild, fehlt.
- **Ein fertiges Haus ohne Gerüst.** Alles Vorhandene zeigt die Baustelle, nicht das
  Ergebnis. Ein „Vorher/Nachher" wäre das stärkste Argument überhaupt.
