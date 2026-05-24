import { useSyncExternalStore } from "react";
import type { Institution } from "@/lib/types";

const COMPARE_STORAGE_KEY = "compare";
const COMPARE_EVENT = "compare-storage-change";

function isBrowser() {
  return typeof window !== "undefined";
}

export function readCompareItems() {
  if (!isBrowser()) {
    return [] as Institution[];
  }

  try {
    const raw = window.localStorage.getItem(COMPARE_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Institution[]) : [];
  } catch {
    return [];
  }
}

function emitCompareChange() {
  if (!isBrowser()) {
    return;
  }

  window.dispatchEvent(new Event(COMPARE_EVENT));
}

export function writeCompareItems(items: Institution[]) {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.setItem(COMPARE_STORAGE_KEY, JSON.stringify(items));
  emitCompareChange();
}

export function clearCompareItems() {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.removeItem(COMPARE_STORAGE_KEY);
  emitCompareChange();
}

function subscribe(onStoreChange: () => void) {
  if (!isBrowser()) {
    return () => undefined;
  }

  const handleChange = () => onStoreChange();

  window.addEventListener("storage", handleChange);
  window.addEventListener(COMPARE_EVENT, handleChange);

  return () => {
    window.removeEventListener("storage", handleChange);
    window.removeEventListener(COMPARE_EVENT, handleChange);
  };
}

export function useCompareItems() {
  return useSyncExternalStore(subscribe, readCompareItems, () => []);
}
