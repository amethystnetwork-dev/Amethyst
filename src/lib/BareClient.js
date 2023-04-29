/*Bareclient code*/
import { createBareClient } from "@tomphttp/bare-client";

async function init() {
  const client = await createBareClient(new URL("/bare/", window.location));
  return client;
}

export default init();
