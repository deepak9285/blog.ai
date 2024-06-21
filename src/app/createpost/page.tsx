import CreatePost from "../components/Post";
import Header from "../components/Header";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import { createClient } from "../utils/supabase/client";
import { redirect } from "next/navigation";

export default async function WriteArticle() {
  // Define the email of the user you want to make admin
  const userEmail = "email of admin user";

  // Create a Supabase client instance
  const supabase = createClient();

  // Get the user data from Supabase auth
  const { data, error } = await supabase.auth.getUser();

  // Check for errors or if the user data doesn't match the expected email
  if (error || !data?.user || data?.user.email !== userEmail) {
    // If any of the conditions are true, redirect to the homepage
    redirect("/");
  }
  return (
    <>
      <Header />
      <CopilotKit runtimeUrl="/api/copilotkit">
        <CopilotPopup
          instructions="Help the user research a blog article topic."
          defaultOpen={true}
          labels={{
            title: "Blog Article Research AI Assistant",
            initial:
              "Hi! 👋 I can help you research any topic for a blog article.",
          }}
        />
        <CreatePost />
      </CopilotKit>
    </>
  );
}
