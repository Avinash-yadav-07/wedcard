import { createFileRoute } from "@tanstack/react-router";
import { WeddingInvitation } from "@/components/wedding-invitation";

// The home route ships no og:image, so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <WeddingInvitation />;
}
