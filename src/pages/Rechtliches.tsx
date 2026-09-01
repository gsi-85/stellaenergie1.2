/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import useHashScroll from "../hooks/useHashScroll";

export default function Rechtliches() {
  useHashScroll();

  return (
    <div className="min-h-screen bg-warm-bg">
      <Nav base="/" solid />

      <main className="pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-rose uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
              Rechtliches
            </span>
            <h1 className="text-5xl md:text-6xl font-serif text-rose-dark mb-6">
              Impressum &amp; Datenschutz
            </h1>
            <p className="text-stone-600 text-lg leading-relaxed mb-16">
              Angaben zur verantwortlichen Person und zum Umgang mit deinen Daten.
            </p>

            <div className="space-y-16 text-sm text-stone-600 leading-relaxed">
              <section id="impressum" className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-serif text-rose-dark mb-8">Impressum</h2>
                <p>
                  Stella Anastasio
                  <br />
                  Neuhofstrasse 3c
                  <br />
                  6340 Baar, Schweiz
                </p>
                <p className="mt-4">
                  E-Mail:{" "}
                  <a href="mailto:info@stella-energiearbeit.ch" className="text-rose hover:underline">
                    info@stella-energiearbeit.ch
                  </a>
                  <br />
                  Telefon:{" "}
                  <a href="tel:0763942465" className="text-rose hover:underline">
                    076 394 24 65
                  </a>
                </p>
                <p className="mt-4">
                  Verantwortlich für den Inhalt dieser Website: Stella Anastasio.
                </p>
              </section>

              <section id="datenschutz" className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-serif text-rose-dark mb-8">
                  Datenschutzerklärung
                </h2>

                <h3 className="text-xl font-serif text-rose mt-8 mb-3">Verantwortliche Stelle</h3>
                <p>
                  Stella Anastasio, Neuhofstrasse 3c, 6340 Baar, Schweiz. Bei Fragen zum Datenschutz
                  erreichst du mich unter{" "}
                  <a href="mailto:info@stella-energiearbeit.ch" className="text-rose hover:underline">
                    info@stella-energiearbeit.ch
                  </a>{" "}
                  oder 076 394 24 65.
                </p>

                <h3 className="text-xl font-serif text-rose mt-8 mb-3">Terminbuchung (Cal.com)</h3>
                <p>
                  Für die Online-Terminbuchung setze ich den Dienst Cal.com (Cal.com, Inc., USA)
                  ein, der als Auftragsbearbeiter in meinem Auftrag tätig ist. Der Buchungskalender
                  wird dabei von den Servern von Cal.com geladen; hierbei wird deine IP-Adresse an
                  Cal.com übermittelt.
                </p>
                <p className="mt-3">
                  Bei einer Buchung werden folgende Daten erhoben: Name, E-Mail-Adresse,
                  Telefonnummer (sofern angegeben), dein Anliegen bzw. deine Notizen sowie der
                  gewählte Termin. Diese Daten verwende ich ausschliesslich, um den Termin zu
                  vereinbaren, zu bestätigen, dich bei Änderungen zu informieren und die Behandlung
                  vorzubereiten. Eine Weitergabe an Dritte zu Werbezwecken findet nicht statt.
                </p>
                <p className="mt-3">
                  Weitere Informationen findest du in der{" "}
                  <a
                    href="https://cal.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rose hover:underline"
                  >
                    Datenschutzerklärung von Cal.com
                  </a>
                  .
                </p>

                <h3 className="text-xl font-serif text-rose mt-8 mb-3">Google Maps</h3>
                <p>
                  Zur Anzeige des Praxisstandorts binde ich eine Karte von Google Maps (Google
                  Ireland Limited) ein. Beim Laden der Karte wird deine IP-Adresse an Google
                  übermittelt.
                </p>

                <h3 className="text-xl font-serif text-rose mt-8 mb-3">Google Fonts</h3>
                <p>
                  Die Schriften dieser Website werden von den Servern von Google geladen. Auch dabei
                  wird deine IP-Adresse an Google übermittelt.
                </p>

                <h3 className="text-xl font-serif text-rose mt-8 mb-3">
                  Kontaktaufnahme per E-Mail oder Telefon
                </h3>
                <p>
                  Wenn du mich per E-Mail oder Telefon kontaktierst, werden deine Angaben zur
                  Bearbeitung deiner Anfrage gespeichert und nur für diesen Zweck verwendet.
                </p>

                <h3 className="text-xl font-serif text-rose mt-8 mb-3">Deine Rechte</h3>
                <p>
                  Du hast das Recht auf Auskunft über die zu deiner Person bearbeiteten Daten sowie
                  auf deren Berichtigung oder Löschung. Melde dich dafür einfach unter den oben
                  genannten Kontaktangaben.
                </p>

                <h3 className="text-xl font-serif text-rose mt-8 mb-3">Cookies</h3>
                <p>
                  Diese Website setzt keine Cookies zu Analyse- oder Werbezwecken ein. Die
                  eingebundenen Dienste können technisch notwendige Cookies verwenden.
                </p>
              </section>
            </div>

            <a
              href="/#home"
              className="inline-block mt-16 text-xs uppercase tracking-widest font-bold text-rose hover:underline"
            >
              &larr; Zurück zur Startseite
            </a>
          </div>
        </div>
      </main>

      <Footer base="/" />
    </div>
  );
}
