import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./global.css";
import AppRoutes from "./AppRoutes.tsx";
import { QueryClientProvider } from "react-query";
import { Toaster } from "@/components/ui/sonner";

import { QueryClient } from "react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={AppRoutes} />
      <Toaster visibleToasts={1} position="top-right" richColors />
    </QueryClientProvider>
  </React.StrictMode>
);
