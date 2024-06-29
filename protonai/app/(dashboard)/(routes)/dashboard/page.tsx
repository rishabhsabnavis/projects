import {Button} from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";

export default function DashboardPage() {
  return (
    <div>
      <p>Dashboard Page (Protected)</p>
      <UserButton afterSignOutUrl="/"></UserButton>
    </div>
    
    
  );
}
