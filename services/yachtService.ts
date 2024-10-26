import type { Yacht } from "~/types/yacht";

export async function fetchYachts(): Promise<Yacht[]> {
  const response = await fetch('/api/yachts');
  if (!response.ok) {
    throw new Error('Failed to fetch yachts');
  }
  const data = await response.json();
  console.log('Yachts data:', data);
  return data as Yacht[];
}
