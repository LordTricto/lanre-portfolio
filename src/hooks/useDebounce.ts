export default function debounce(fn: () => void, ms = 300): () => void {
	let timeoutId: string | number | NodeJS.Timeout | undefined;
	return function (...args) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => fn.apply(args), ms);
	};
}
