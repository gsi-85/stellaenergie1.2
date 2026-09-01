/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";

/**
 * Springt nach dem ersten Rendern zum Anker aus der URL.
 *
 * Nötig, weil die Seiten clientseitig gerendert werden: wenn der Browser den
 * Fragment-Bezeichner auswertet, existiert das Zielelement noch nicht im DOM.
 * Ohne diesen Hook landen Links wie /#offerings oder
 * /rechtliches.html#datenschutz immer am Seitenanfang.
 */
export default function useHashScroll() {
  useEffect(() => {
    const { hash } = window.location;
    if (!hash || hash === "#") return;

    let target: Element | null = null;
    try {
      target = document.querySelector(hash);
    } catch {
      return; // ungültiger Selektor im Fragment
    }
    if (!target) return;

    const frame = requestAnimationFrame(() => target.scrollIntoView());
    return () => cancelAnimationFrame(frame);
  }, []);
}
