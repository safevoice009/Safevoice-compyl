import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-background text-white min-h-screen">
      {/* Navbar placeholder */}
      <nav className="bg-surface p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">SafeVoice</h1>
        </div>
      </nav>

      {/* Main content */}
      <main className="container mx-auto p-4">{children}</main>

      {/* Footer placeholder */}
      <footer className="bg-surface p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 SafeVoice. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
