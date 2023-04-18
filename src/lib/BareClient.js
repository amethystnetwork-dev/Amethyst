import { createBareClient } from "@tomphttp/bare-client";

const client = await createBareClient(new URL("/bare/", window.location));

export default client;