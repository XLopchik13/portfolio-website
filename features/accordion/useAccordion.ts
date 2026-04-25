"use client";

import { useCallback, useState } from "react";

export const useAccordion = (defaultOpen?: string) => {
	const [openId, setOpenId] = useState<string | null>(defaultOpen ?? null);

	const toggle = useCallback((id: string) => {
		setOpenId((prev) => (prev === id ? null : id));
	}, []);

	const isOpen = useCallback((id: string) => openId === id, [openId]);

	return { toggle, isOpen };
};
