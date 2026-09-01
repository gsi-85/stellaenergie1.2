/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

type FooterProps = {
  /** Prefix for the in-page anchors. "" on the homepage, "/" on sub-pages. */
  base?: string;
};

export default function Footer({ base = "" }: FooterProps) {
  return (
    <footer className="bg-cream py-16 border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-2xl font-serif text-rose">Stella Anastasio</div>
          <div className="flex gap-10">
            <a href="/rechtliches.html#impressum" className="text-xs uppercase tracking-widest font-bold text-stone-400 hover:text-rose transition-colors">Impressum</a>
            <a href="/rechtliches.html#datenschutz" className="text-xs uppercase tracking-widest font-bold text-stone-400 hover:text-rose transition-colors">Datenschutz</a>
            <a href={`${base}#contact`} className="text-xs uppercase tracking-widest font-bold text-stone-400 hover:text-rose transition-colors">Kontakt</a>
          </div>
          <div className="text-xs uppercase tracking-widest font-bold text-stone-400">
            © {new Date().getFullYear()} Stella Anastasio.
          </div>
        </div>
      </div>
    </footer>
  );
}
