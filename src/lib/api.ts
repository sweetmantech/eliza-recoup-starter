import { DirectClient } from "@elizaos/client-direct";

export function setupApiEndpoints(client: DirectClient) {
  // Add GET /api/status endpoint
  client.app.get("/api/status", (req, res) => {
    res.json({
      status: "ok",
      timestamp: new Date().toISOString(),
      version: "3.3.3",
    });
  });
}
