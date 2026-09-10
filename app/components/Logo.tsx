"use client";

import React from "react";
import Image from "next/image";

export default function Logo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <div className="flex items-center gap-2">
      <img
        src="/logo.png"
        alt="FrontForumFocus Logo"
        className={className}
      />
    </div>
  );
}
