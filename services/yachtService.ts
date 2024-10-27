import type { YachtResponse } from "~/types/yacht";

export async function fetchYachts(currentPage: number): Promise<YachtResponse> {
  try {
    const response = await fetch(`/api/yachts?buy=true&page=${currentPage}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching yachts");
  }
}
