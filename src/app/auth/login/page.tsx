import { BookmarkIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import React from "react";

function LoginPage() {
  return (
    <div>
      LoginPage
      <Button>Login 
        <BookmarkIcon width='16' height='16'/>
      </Button>
    </div>
  );
}

export default LoginPage;
