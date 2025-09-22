import type { HTMLAttributeAnchorTarget } from "svelte/elements";

function deriveAnchorRel(
	originalRel: string | null | undefined,
	target: HTMLAttributeAnchorTarget | null | undefined,
) {
	switch (target) {
		case "_blank":
			if (!originalRel) {
				return "noopener";
			} else if (!originalRel.match("noopener")) {
				return originalRel + " noopener";
			} else {
				return originalRel;
			}
		default:
			return originalRel;
	}
}

export { deriveAnchorRel };
