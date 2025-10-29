// frontend/src/utils/recordSearch.js
import api from "../api/apiClient";

/**
 * recordSearch(queryText, resultCount = 0)
 * simple wrapper to record a search to backend
 */
export async function recordSearch(queryText, resultCount = 0, categories = []) {
  if (!queryText) return;
  try {
    await api.post("/dashboard/search/record", {
      query: queryText,
      resultCount,
      categories
    });
    // no return needed — fire-and-forget is fine
  } catch (err) {
    console.error("Failed recording search", err);
  }
}
