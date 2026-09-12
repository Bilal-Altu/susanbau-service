# Einwilligung für Fotos und Videos auf der Website

**Für wen ist das?** Auf der Website sind Menschen zu erkennen — auf den Fotos der
Baustelle und im Film auf der Startseite. Bevor die Seite öffentlich erreichbar ist,
braucht es von jedem Erkennbaren eine Unterschrift.

**Warum?** Ein Gesicht ist ein personenbezogenes Datum. Es auf einer Firmenwebseite zu
veröffentlichen, ist eine Verarbeitung, für die es eine Rechtsgrundlage braucht — hier die
Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO, zusätzlich § 22 KUG für das Recht am eigenen
Bild. Ohne Unterschrift kann der Abgebildete die Löschung verlangen, und bei Mitarbeitern
kommt Ärger mit dem Arbeitsrecht dazu.

**Wie viele?** Erkennbar sind derzeit: der Mann auf dem Foto im Abschnitt „Über uns", der
Verputzer in der Nahaufnahme bei „Verputzarbeiten" und die Personen im Film und in der
Galerie im Abschnitt „Aktuelle Baustelle". Im Zweifel lieber eine Unterschrift zu viel.

**Aufbewahren.** Die unterschriebenen Blätter bleiben bei Susanbau Service. Sie sind der
Nachweis, falls jemand fragt. Nicht einscannen und irgendwo hochladen.

> Dies ist eine Vorlage, kein Rechtsrat. Wer ganz sicher gehen will, lässt sie einmal von
> einem Anwalt durchsehen — für eine Handwerkerseite ist das üblicherweise nicht nötig.

---

## Zum Ausdrucken — eine Seite pro Person

**Einwilligung in die Veröffentlichung von Fotos und Filmaufnahmen**

Name: ............................................................

Anschrift: ............................................................

Ich bin auf Foto- und Filmaufnahmen zu sehen, die am 10. und 12. September 2026 auf der
Baustelle in Bürstadt entstanden sind.

Ich bin damit einverstanden, dass Susanbau Service, Bubenlachring 14, 68642 Bürstadt, diese
Aufnahmen verwendet für:

- [ ] die eigene Website
- [ ] das Google-Unternehmensprofil
- [ ] Aushänge, Flyer und Fahrzeugbeschriftung
- [ ] soziale Netzwerke (Instagram, Facebook)

Ich weiß, dass die Aufnahmen im Internet weltweit abrufbar sind und von Dritten kopiert
werden können, und dass sich das nach einer Veröffentlichung nicht mehr vollständig
rückgängig machen lässt.

Die Einwilligung ist freiwillig. Wenn ich sie nicht erteile, entstehen mir keine Nachteile —
insbesondere keine arbeitsrechtlichen. Ich kann sie jederzeit formlos widerrufen, zum
Beispiel mit einer Nachricht an susanvolkan@gmx.de. Ab dem Widerruf werden die Aufnahmen
nicht mehr verwendet und von der Website entfernt. Was bis dahin rechtmäßig veröffentlicht
war, bleibt davon unberührt.

Eine Vergütung wird nicht gezahlt und nicht verlangt.

Ort, Datum: ..........................................

Unterschrift: ..........................................

*(Bei Minderjährigen zusätzlich die Unterschrift aller Sorgeberechtigten.)*

---

## Was passiert, solange die Unterschriften fehlen

Die Website steht auf `noindex` — Google nimmt sie nicht in den Index auf. Sie ist über die
Adresse erreichbar, aber niemand findet sie über eine Suche. Sobald die Einwilligungen
vorliegen **und** das Impressum vollständig ist, wird in `index.html`, `impressum.html` und
`datenschutz.html` die Zeile

```html
<meta name="robots" content="noindex, nofollow" />
```

auf

```html
<meta name="robots" content="index, follow, max-image-preview:large" />
```

geändert. Vorher nicht.
