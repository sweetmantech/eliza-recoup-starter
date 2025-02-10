import { DirectClient } from "@elizaos/client-direct";
import * as GlobalController from "./controllers/GlobalController.ts";

export function setupApiEndpoints(client: DirectClient) {
  client.app.get(
    "/api/get_social_handles",
    GlobalController.get_social_handles as any
  );

  // Add GET /api/status endpoint
  client.app.get("/api/status", (req, res) => {
    res.json({
      status: "ok",
      timestamp: new Date().toISOString(),
      version: "3.3.3",
    });
  });
}
