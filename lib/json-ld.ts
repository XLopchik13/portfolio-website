export const serializeJsonLd = (data: Record<string, unknown>): string =>
	JSON.stringify(data)
		.replace(/</g, "\\u003c")
		.replace(/>/g, "\\u003e")
		.replace(/&/g, "\\u0026");
