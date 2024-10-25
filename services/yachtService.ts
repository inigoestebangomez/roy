import { Yacht } from "~/types/yacht";

export async function fetchYachts(): Promise<Yacht[]> {
  const response = await fetch('/api/yachts');
  console.log('Response from API:', response);
  if (!response.ok) {
    throw new Error('Failed to fetch yachts');
  }
  const data = await response.json();
  console.log('Yachts data:', data);
  return data as Yacht[];
}
