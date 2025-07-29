export default async function apiClient(endpoint) {
  try {
    const res = await fetch(endpoint);
    if (!res.ok) throw new Error("Network response was not ok");
    return await res.json();
  } catch (error) {
    console.error("API Client Error:", error);
    return null;
  }
}
